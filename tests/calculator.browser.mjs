// Run against the real built page. PLAYWRIGHT_MODULE may point to an existing installation.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.BASE_URL || 'http://localhost:4873';
const out = process.env.EVIDENCE_DIR || '/tmp/pd-calculator-browser';
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || "chrome" });
const errors = [];
const metrics = [];
let checks = 0;
const eq = (actual, expected, message) => { assert.deepEqual(actual, expected, message); checks++; };
const ok = (value, message) => { assert.ok(value, message); checks++; };
const context = await browser.newContext();
// Keep synthetic QA away from production analytics. Source/config are untouched.
await context.route('**/*', route => {
  const url = new URL(route.request().url());
  if (url.origin === new URL(base).origin || url.protocol === 'data:') return route.continue();
  return route.fulfill({ status: 200, contentType: 'text/plain', body: '' });
});
const page = await context.newPage();
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
const field = name => page.locator(`#lab-${name}`);
const result = name => page.locator(`[data-result="${name}"]`);
async function values(mass, volume, portion) { await field('mass').fill(mass); await field('volume').fill(volume); await field('portion').fill(portion); }
async function resultText(name, expected) { await result(name).waitFor(); eq(await result(name).innerText(), expected, name); }
async function capture(name, fullPage = false) { await page.screenshot({ path: `${out}/${name}.png`, fullPage }); }
async function hydrate() { await page.waitForFunction(() => Array.from(document.scripts).some(s => s.src.includes('/_next/'))); await page.waitForTimeout(200); }
try {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}/peptide-calculator`, { waitUntil: 'networkidle' });
  await hydrate();
  eq(await field('mass').inputValue(), '', 'initial mass is empty (fails on old implementation)');
  eq(await page.locator('[data-result]').count(), 0, 'no initial mathematical output');
  for (const width of [360, 390, 430, 1440]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
    await page.getByRole('button', { name: 'Clear all', exact: true }).click();
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 0); });
    const inputBox = await field('mass').boundingBox();
    ok(inputBox.y + inputBox.height < 700, `first input visible at ${width}`);
    eq(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `no overflow at ${width}`);
    const overflow = await page.locator('[data-calculator], [data-calculator] *').evaluateAll(nodes => nodes.filter(n => n.getBoundingClientRect().width && (n.getBoundingClientRect().right > innerWidth + 1 || n.getBoundingClientRect().left < -1)).map(n => n.tagName));
    eq(overflow, [], `calculator fits at ${width}`);
    for (const control of await page.locator('[data-calculator] button, [data-calculator] select, [data-calculator] summary').all()) {
      if (await control.isVisible()) { const box = await control.boundingBox(); ok(box.height >= 44, `touch target ${await control.innerText()}`); }
    }
    await capture(`first-${width}`);
    await page.getByRole('button', { name: 'Load example', exact: true }).click();
    await resultText('portion-ml', '0.1'); await resultText('portion-ul', '100');
    await resultText('mg-per-ml', '2.5'); await resultText('full-portions', '20');
    if (width === 1440) { await page.evaluate(() => window.scrollTo(0, 0)); } else { await page.locator('[data-results]').evaluate(n => window.scrollTo(0, n.getBoundingClientRect().top + scrollY - 78)); }
    await capture(`result-${width}`);
    // Load genuine image assets before full-page screenshots; no asset replacement.
    for (const img of await page.locator('main img').all()) { await img.scrollIntoViewIfNeeded(); await img.evaluate(n => n.decode()); }
    await page.evaluate(() => window.scrollTo(0, 0));
    await capture(`full-${width}`, true);
    const banner = page.locator('aside[aria-label="IQONIC app"]');
    await banner.evaluate(n => window.scrollTo(0, n.getBoundingClientRect().top + scrollY - 80));
    const appLink = banner.getByRole('link');
    const appBox = await appLink.boundingBox();
    ok(appBox.y >= 56 && appBox.y + appBox.height < (width === 1440 ? 1000 : 844) - 76, `app CTA clear of sticky surfaces at ${width}`);
    ok(await appLink.evaluate(n => { const r = n.getBoundingClientRect(); return n.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)); }), `app CTA hit test at ${width}`);
    eq(await appLink.getAttribute('href'), 'https://apps.apple.com/us/app/iqonic/id6765689488');
    await banner.screenshot({ path: `${out}/iqonic-banner-${width}.png` });
    metrics.push({ width, firstInputY: inputBox.y, firstInputBottom: inputBox.y + inputBox.height });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Clear all', exact: true }).click();
  await field('mass').pressSequentially('7.5'); await field('volume').pressSequentially('1.5'); await field('portion').pressSequentially('125');
  eq(await field('mass').inputValue(), '7.5'); await resultText('portion-ml', '0.025'); await resultText('full-portions', '60');
  await page.getByRole('group', { name: 'Peptide mass in vial shortcuts' }).getByRole('button', { name: '10 mg', exact: true }).click();
  eq(await field('mass').inputValue(), '10'); await field('mass').fill('12.5');
  eq(await page.getByRole('button', { name: '10 mg', exact: true }).getAttribute('aria-pressed'), 'false');
  await page.getByRole('group', { name: 'Final solution volume shortcuts' }).getByRole('button', { name: '2 mL', exact: true }).click();
  await field('volume').fill('2.5'); await resultText('portion-ml', '0.025');
  const selector = page.getByLabel('Target mass unit');
  await selector.selectOption('mg'); eq(await field('portion').inputValue(), '0.125'); await resultText('portion-ml', '0.025');
  await selector.selectOption('mcg'); eq(await field('portion').inputValue(), '125');
  await values('1', '4', '300'); await resultText('portion-ml', '1.2'); await resultText('full-portions', '3');
  await page.getByText('See the equations', { exact: true }).click();
  ok((await page.locator('[data-calculator] details[open]').first().innerText()).includes('(300 mcg × 4 mL) ÷ (1 mg × 1,000 mcg/mg)'), 'actual-input equation');
  await page.getByText('See the equations', { exact: true }).click();
  await values('3', '1', '100');
  await page.getByText('See the equations', { exact: true }).click();
  const equations = await page.locator('[data-calculator] details[open]').first().innerText();
  ok(equations.includes('≈0.0333333 mL')); ok(!equations.includes('= ≈'), 'equation has only one relation symbol');
  await page.getByText('See the equations', { exact: true }).click();
  await values('1', '4', '300');
  await page.getByText('Plan a laboratory supply', { exact: true }).click(); await field('count').fill('4');
  ok((await page.locator('[data-supply-result]').innerText()).includes('2 vials before losses')); ok((await page.locator('[data-supply-result]').innerText()).includes('800 mcg'));
  await field('count').fill('1.1'); ok(!(await page.locator('[data-supply-result]').innerText()).includes('vials before losses'));
  for (const bad of ['', '0', '-1', 'Infinity', 'NaN', '0x10', '1e3', '1,5', '5mg', '.', '5001', '1.' + '0'.repeat(1000)]) {
    await values('5', '2', bad); eq(await page.locator('[data-result]').count(), 0, `no stale result for ${bad.slice(0, 30)}`);
  }
  await field('portion').fill('1e3'); await selector.selectOption('mg'); eq(await field('portion').inputValue(), ''); ok((await page.locator('[data-calculator]').innerText()).includes('Invalid target cleared'));
  await selector.selectOption('mcg');
  await values('0.001', '1', '0.10000000000000005'); await resultText('full-portions', '9'); await resultText('portions', '≈10');
  await selector.selectOption('mg'); eq(await field('portion').inputValue(), '0.00010000000000000005'); await resultText('full-portions', '9');
  await selector.selectOption('mcg'); eq(await field('portion').inputValue(), '0.10000000000000005');
  await field('portion').fill('1.0000000000000001'); eq(await page.locator('[data-result]').count(), 0);
  const extreme = '1.' + '0'.repeat(117) + '1';
  await values(extreme, extreme, extreme); await resultText('portion-ml', '≈0.001');
  await selector.selectOption('mg'); await resultText('portion-ml', '≈0.001'); await selector.selectOption('mcg'); eq(await field('portion').inputValue(), extreme);
  await values('1.001', '2', '1001'); await resultText('portion-ml', '2');
  await field('mass').fill('1000.0000000000000001'); eq(await page.locator('[data-result]').count(), 0);
  await values('5', '0.00099999999999999999', '250'); eq(await page.locator('[data-result]').count(), 0);
  await page.getByRole('button', { name: 'Clear all', exact: true }).focus(); await page.keyboard.press('Enter');
  eq(await field('mass').inputValue(), ''); eq(await field('volume').inputValue(), ''); eq(await field('portion').inputValue(), ''); eq(await selector.inputValue(), 'mcg');
  eq(await page.locator('[data-calculator] details[open]').count(), 0); eq(await field('mass').evaluate(n => n === document.activeElement), true);
  // Actual bounded Tab taps follow DOM order, with visible focus and uncovered controls.
  for (const width of [360, 390, 430, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    await page.getByRole('button', { name: 'Clear all', exact: true }).click();
    await page.keyboard.press('Shift+Tab');
    const focusables = await page.locator('[data-calculator] button, [data-calculator] input, [data-calculator] select, [data-calculator] summary').evaluateAll(nodes => nodes.filter(n => n.checkVisibility()).map(n => n.id || n.textContent.trim()));
    for (let i = 0; i < focusables.length; i++) {
      const actual = await page.evaluate(() => document.activeElement.id || document.activeElement.textContent.trim());
      eq(actual, focusables[i], `DOM Tab order at ${width}`);
      const info = await page.evaluate(() => { const el = document.activeElement; const r = el.getBoundingClientRect(); const style = getComputedStyle(el); return { focus: el.matches(':focus-visible'), outline: style.outlineStyle, hit: el.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)) }; });
      ok(info.focus && info.outline !== 'none', 'visible keyboard focus'); ok(info.hit, `focused control uncovered at ${width}`);
      await page.keyboard.press('Tab');
    }
  }
  eq(await page.getByRole('link', { name: /Explore the app/ }).getAttribute('href'), 'https://apps.apple.com/us/app/iqonic/id6765689488');
  const iqonLinks = await page.locator('a[href*="iqonhealth.com/shop"]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')));
  eq(iqonLinks.length, 3); ok(iqonLinks.every(href => href === 'https://www.iqonhealth.com/shop?utm_source=peptidedigest&utm_medium=referral&utm_campaign=bogo20'));
  eq(await page.locator('link[rel=canonical]').count(), 1); eq(await page.locator('link[rel=canonical]').getAttribute('href'), 'https://peptidedigest.co/peptide-calculator');
  eq(await page.locator('h1').count(), 1);
  eq(await page.locator('input').evaluateAll(nodes => nodes.filter(n => !n.labels?.length).length), 0);
  eq(errors, [], 'no browser console or runtime errors');
  await fs.writeFile(`${out}/browser-results.json`, JSON.stringify({ checks, metrics, errors, analytics: 'External requests intercepted only in QA browser', status: 'PASS' }, null, 2));
  console.log(`PASS ${checks} browser assertions`, JSON.stringify(metrics));
} finally { await browser.close(); }
