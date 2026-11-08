// Acceptance corrections: protect unready entry, retain malformed inputs, and never serialize quantities.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { chromium } from 'playwright';
const base = process.env.BASE_URL || 'http://127.0.0.1:4876';
const out = process.env.EVIDENCE_DIR || '/tmp/pd-calculator-fallback';
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', proxy: { server: 'http://127.0.0.1:9', bypass: '127.0.0.1,localhost' } });
const results = { checks: 0, failures: [], cases: [] };
function eq(actual, expected, message) {
  results.checks++;
  try { assert.deepEqual(actual, expected, message); } catch (error) { results.failures.push(error.message); }
}
const fields = { mass: '5', volume: '2', portion: '250' };
async function fill(page, values = fields) { for (const [name, value] of Object.entries(values)) await page.locator(`#lab-${name}`).fill(value); }
try {
  // Each scenario starts with a fresh document, so a preceding action cannot mask a reload.
  for (const mode of (process.env.FINDING === 'retention' ? [] : ['nojs', 'blocked-next', 'delayed-next'])) for (const action of ['click', 'enter']) {
    const record = { mode, action, navigationEvents: [], requests: [], blockedScripts: [], blockedExternal: [], committedNavigations: [] };
    results.cases.push(record);
    const context = await browser.newContext({ javaScriptEnabled: mode !== 'nojs', serviceWorkers: 'block', viewport: { width: 390, height: 844 } });
    let releaseScripts;
    const scriptsReady = new Promise(resolve => { releaseScripts = resolve; });
    let armed = false;
    await context.route('**/*', async route => {
      const req = route.request(), url = new URL(req.url());
      const info = { url: req.url(), method: req.method(), body: req.postData(), navigation: req.isNavigationRequest() };
      if (armed) record.requests.push(info);
      if (url.origin !== base) { record.blockedExternal.push(info); return route.fulfill({ status: 200, body: '' }); }
      if (armed && req.isNavigationRequest()) return route.abort();
      if (req.resourceType() === 'script' && url.pathname.startsWith('/_next/')) {
        if (mode === 'blocked-next') { record.blockedScripts.push(url.pathname); return route.abort(); }
        if (mode === 'delayed-next') { record.blockedScripts.push(url.pathname); await scriptsReady; }
      }
      return route.continue();
    });
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    await cdp.send('Page.enable');
    cdp.on('Page.frameRequestedNavigation', event => { if (armed) record.navigationEvents.push(event); });
    page.on('framenavigated', frame => { if (armed && frame === page.mainFrame()) record.committedNavigations.push(frame.url()); });
    const response = await page.goto(`${base}/peptide-calculator`, { waitUntil: mode === 'delayed-next' ? 'commit' : 'load' });
    record.cspHeader = response.headers()['content-security-policy'] || null;
    record.cspMeta = await page.locator('meta[http-equiv="Content-Security-Policy" i]').count();
    await page.locator('#lab-mass').waitFor({ state: 'visible' });
    armed = true;
    const controls = ['#lab-mass', '#lab-volume', '#lab-portion', 'select[aria-label="Amount unit"]', '#lab-count'];
    await page.locator('summary').filter({ hasText: 'Plan a laboratory supply' }).click();
    record.earlyEntry = [];
    for (const selector of controls) {
      const control = page.locator(selector);
      eq(await control.isDisabled(), true, `${mode}/${action}: ${selector} unavailable before readiness`);
      await control.scrollIntoViewIfNeeded();
      const box = await control.boundingBox();
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
      if (selector.startsWith('select')) {
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Escape');
      } else await page.keyboard.type('625');
      if (action === 'enter') await page.keyboard.press('Enter');
      const value = await control.inputValue();
      record.earlyEntry.push({ selector, value, disabled: await control.isDisabled() });
      eq(value, selector.startsWith('select') ? 'mcg' : '', `${mode}/${action}: real early entry cannot change ${selector}`);
      eq(await control.evaluate(n => n === document.activeElement), false, `${mode}/${action}: unavailable control cannot receive pointer focus`);
    }
    await page.getByRole('button', { name: 'Clear all', exact: true }).focus();
    await page.keyboard.press('Tab');
    eq(await page.locator('[data-calculator] input, [data-calculator] select').evaluateAll(ns => ns.includes(document.activeElement)), false, `${mode}/${action}: Tab skips unavailable quantity controls`);
    const button = page.getByRole('button', { name: 'Calculate units', exact: true });
    record.disabledBeforeAction = await button.isDisabled();
    record.formData = await page.locator('form[aria-label="Solution calculator"]').evaluate(n => [...new FormData(n).entries()]);
    eq(record.disabledBeforeAction, true, `${mode}/${action}: unavailable Calculate is disabled`);
    eq(record.formData, [], `${mode}/${action}: no successful controls can serialize quantities`);
    eq(await page.locator('aside[aria-label="IQONIC app"] a').getAttribute('href'), 'https://apps.apple.com/us/app/iqonic/id6765689488', `${mode}: direct Apple fallback`);
    eq((await page.locator('[data-newsroom-article]').innerText()).includes('5 ÷ 2 = 2.5 mg/mL'), true, `${mode}: original formulas remain`);
    eq((await page.locator('[data-calculator]').innerText()).includes('Formulas are below'), true, `${mode}: visible unavailable explanation`);
    await button.scrollIntoViewIfNeeded();
    if (action === 'click') await page.screenshot({ path: `${out}/${mode}-fallback.png` });
    if (action === 'click') {
      // A real mouse click still reaches the disabled button surface; no synthetic submit.
      const box = await button.boundingBox(); await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    } else await page.keyboard.press('Enter');
    await page.waitForTimeout(250);
    eq(record.navigationEvents, [], `${mode}/${action}: zero CDP attempted navigation, even if network would block it`);
    eq(record.committedNavigations, [], `${mode}/${action}: no document reload`);
    eq(record.requests.filter(r => r.navigation || /[?&](mass|volume|portion)=/.test(r.url) || r.body), [], `${mode}/${action}: no navigation/quantity URL/body requests`);
    eq(page.url(), `${base}/peptide-calculator`, `${mode}/${action}: URL unchanged`);
    eq(await page.locator('[data-result]').count(), 0, `${mode}/${action}: no unready result`);
    if (mode === 'delayed-next' && await page.locator('[data-calculator]').count()) {
      releaseScripts();
      await page.waitForLoadState('networkidle');
      await page.waitForFunction(() => !document.querySelector('button[type="submit"]').disabled);
      record.afterHydration = [];
      for (const selector of controls) {
        const control = page.locator(selector);
        eq(await control.isEnabled(), true, `hydration enables ${selector}`);
        const value = await control.inputValue();
        record.afterHydration.push({ selector, value });
        eq(value, selector.startsWith('select') ? 'mcg' : '', `hydration starts ${selector} without discarded early entry`);
      }
      // This is the first permitted entry; no forced fill or disabled-attribute removal.
      await fill(page);
      await page.getByLabel('Amount unit').selectOption('mg');
      eq(await page.locator('#lab-portion').inputValue(), '0.25', 'newly enabled selector converts exactly');
      if (action === 'click') await button.click();
      else await page.locator('#lab-portion').press('Enter');
      eq(await page.locator('[data-result="u100"]').innerText(), '10', `delayed hydration recovers working ${action}`);
      eq(await page.locator('[data-results]').evaluate(n => n === document.activeElement), true, 'delayed hydration result receives focus');
      const supplySummary = page.locator('summary').filter({ hasText: 'Plan a laboratory supply' });
      if (!await page.locator('#lab-count').isVisible()) await supplySummary.click();
      await page.locator('#lab-count').fill('21');
      eq((await page.locator('[data-supply-result]').innerText()).includes('2 vials'), true, 'newly enabled supply input calculates');
      eq(await page.locator('form[aria-label="Solution calculator"]').evaluate(n => [...new FormData(n).entries()]), [], 'hydrated controls still cannot serialize quantities');
      eq(record.navigationEvents, [], 'hydrated Enter remains local');
      eq(record.requests.filter(r => r.navigation || /[?&](mass|volume|portion|count)=/.test(r.url) || r.body), [], 'hydrated calculation sends no quantities');
    }
    releaseScripts();
    await context.close();
  }
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
  await context.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.fulfill({ status: 200, body: '' }));
  const page = await context.newPage();
  await page.goto(`${base}/peptide-calculator`, { waitUntil: 'networkidle' });
  const unit = page.getByLabel('Amount unit');
  for (const originalUnit of ['mcg', 'mg']) for (const invalid of ['1,5', '-0.25', '1e2', '250mcg']) {
    await page.getByRole('button', { name: 'Clear all', exact: true }).click();
    await unit.selectOption(originalUnit); // Empty selection remains supported.
    eq(await unit.inputValue(), originalUnit, 'empty amount permits unit choice');
    await fill(page, { ...fields, portion: invalid });
    await unit.selectOption(originalUnit === 'mcg' ? 'mg' : 'mcg');
    eq(await page.locator('#lab-portion').inputValue(), invalid, 'malformed text retained verbatim');
    eq(await unit.inputValue(), originalUnit, 'original unit retained');
    eq(await page.locator('#lab-mass').inputValue(), '5', 'mass retained');
    eq(await page.locator('#lab-volume').inputValue(), '2', 'volume retained');
    eq(await page.locator('[data-result]').count(), 0, 'invalid toggle cannot show stale output');
    const description = await page.locator('#lab-portion').evaluate(n => n.getAttribute('aria-describedby').split(/\s+/).map(id => document.getElementById(id)?.textContent).join(' '));
    eq(description.includes('before changing units'), true, 'field-associated retention explanation');
    if (invalid === '1,5' && originalUnit === 'mcg') {
      await page.locator('#lab-portion').scrollIntoViewIfNeeded();
      await page.screenshot({ path: `${out}/invalid-unit-retained.png` });
    }
    if (await unit.inputValue() !== originalUnit) continue; // Red reproduction: retain failures and inspect the remaining cases.
    await page.locator('#lab-portion').fill(originalUnit === 'mcg' ? '250' : '0.25');
    await unit.selectOption(originalUnit === 'mcg' ? 'mg' : 'mcg');
    eq(await page.locator('#lab-portion').inputValue(), originalUnit === 'mcg' ? '0.25' : '250', 'corrected text converts exactly');
    eq(await page.locator('[data-result="u100"]').innerText(), '10', 'corrected amount yields right result');
    await page.getByRole('button', { name: 'Calculate units', exact: true }).click();
    eq(await page.locator('[data-results]').evaluate(n => n === document.activeElement), true, 'normal pointer Calculate works');
  }
  await context.close();
} catch (error) { results.failures.push(error.stack); }
finally {
  await browser.close();
  results.status = results.failures.length ? 'FAIL' : 'PASS';
  await fs.writeFile(`${out}/fallback-results.json`, JSON.stringify(results, null, 2));
  console.log(`${results.status} ${results.checks} assertions; ${results.failures.length} failures`);
  if (results.failures.length) { console.error(results.failures.join('\n')); process.exitCode = 1; }
}
