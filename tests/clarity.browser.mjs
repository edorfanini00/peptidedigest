import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { chromium } from 'playwright';
const base = process.env.BASE_URL || 'http://127.0.0.1:4876';
const out = process.env.EVIDENCE_DIR || '/tmp/pd-clarity';
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', proxy: { server: 'http://127.0.0.1:9', bypass: '127.0.0.1,localhost' } });
const context = await browser.newContext({ serviceWorkers: 'block' });
await context.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.fulfill({ status: 200, body: '' }));
const page = await context.newPage();
const errors = []; page.on('pageerror', e => errors.push(e.message));
let checks = 0; const metrics = [];
const ok = (v, name) => { assert.ok(v, name); checks++; };
const eq = (a, b, name) => { assert.deepEqual(a, b, name); checks++; };
const field = name => page.locator(`#lab-${name}`);
const text = async (name, value) => { await page.locator(`[data-result="${name}"]`).waitFor(); eq(await page.locator(`[data-result="${name}"]`).innerText(), value, name); };
async function values(m, v, p) { await field('mass').fill(m); await field('volume').fill(v); await field('portion').fill(p); }
async function top() { await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 0); }); }
async function screenshot(name) { await page.screenshot({ path: `${out}/${name}.png` }); }
try {
  for (const width of [360, 390, 430, 1440]) {
    const height = width === 1440 ? 900 : 844;
    await page.setViewportSize({ width, height });
    await page.goto(`${base}/peptide-calculator`, { waitUntil: 'networkidle' });
    await top();
    // Commercial hierarchy: the compact store offer sits above the inputs; the
    // existing app CTA is a secondary text row after the calculator workspace.
    const store = page.locator('aside[aria-label="IQON Health offer"]');
    const shop = store.getByRole('link', { name: 'Shop IQON Health', exact: true });
    const banner = page.locator('aside[aria-label="IQONIC app"]');
    const link = banner.getByRole('link');
    eq(await store.count(), 1, 'one compact store offer');
    eq(await banner.count(), 1, 'one app banner');
    eq(await shop.getAttribute('href'), 'https://www.iqonhealth.com/shop?utm_source=peptidedigest&utm_medium=referral&utm_campaign=bogo20', 'exact static store URL');
    const inputBox = await field('mass').boundingBox(), storeBox = await store.boundingBox(), shopBox = await shop.boundingBox(), bannerBox = await banner.boundingBox();
    const workspaceBottom = await page.locator('[data-calculator] form, [data-results]').evaluateAll(nodes => Math.max(...nodes.map(n => n.getBoundingClientRect().bottom)));
    const supplyBox = await page.locator('[data-calculator] > details').boundingBox();
    ok(storeBox.y > 56 && storeBox.y + storeBox.height < inputBox.y, `store offer above inputs at ${width}`);
    ok(storeBox.height <= (width === 1440 ? 72 : 90), `store offer stays compact at ${width}`);
    ok(bannerBox.y >= workspaceBottom && bannerBox.y + bannerBox.height <= supplyBox.y, `app row after workspace, before optional supply at ${width}`);
    ok(inputBox.y <= 450 && inputBox.y + inputBox.height < height - 76, `first input useful at ${width}`);
    ok(shopBox.y + shopBox.height < height - 76, `fully visible store CTA at ${width}`);
    const fills = await page.evaluate(() => ['aside[aria-label="IQON Health offer"] a', 'aside[aria-label="IQONIC app"] a'].map(s => getComputedStyle(document.querySelector(s)).backgroundColor));
    ok(fills[0] !== 'rgba(0, 0, 0, 0)' && fills[1] === 'rgba(0, 0, 0, 0)', 'store CTA is a button; app CTA is an unfilled text link');
    const calculateButton = page.getByRole('button', { name: 'Calculate units', exact: true });
    const calculateBox = await calculateButton.boundingBox();
    if (width !== 1440) {
      ok(calculateBox.y + calculateBox.height < height - 61, `Calculate fully above sticky offer initially at ${width}`);
      ok(await calculateButton.evaluate(n => { const r = n.getBoundingClientRect(); return n.contains(document.elementFromPoint(r.x + r.width / 2, r.bottom - 2)); }), 'Calculate bottom hit test');
    }
    for (const element of [shop, field('mass')]) ok(await element.evaluate(n => { const r = n.getBoundingClientRect(); return n.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)); }), 'first-fold hit test');
    await banner.evaluate(n => window.scrollTo(0, n.getBoundingClientRect().top + scrollY - 200));
    await banner.locator('img').evaluate(n => Promise.race([n.decode(), new Promise((_, reject) => setTimeout(() => reject(new Error('Icon decode timed out')), 10000))]));
    ok(await banner.locator('img').evaluate(n => n.naturalWidth > 0), 'real brand icon loaded');
    ok(await link.evaluate(n => { const r = n.getBoundingClientRect(); return n.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)); }), `secondary app CTA hit test at ${width}`);
    await screenshot(`app-secondary-${width}`);
    await top();
    eq(await page.locator('[data-result]').count(), 0, 'default empty');
    eq(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'no horizontal clipping');
    await screenshot(`empty-${width}`);
    await values('5', '2', '250');
    await text('u100', '10'); await text('portion-ml', '0.1');
    await top(); await screenshot(`completed-first-${width}`);
    await page.getByRole('button', { name: 'Calculate units', exact: true }).click();
    ok(await page.locator('[data-results]').evaluate(n => n === document.activeElement), 'Calculate focuses live result');
    await screenshot(`completed-result-${width}`);
    metrics.push({ width, inputBox, storeBox, shopBox, bannerBox, workspaceBottom, calculateBox });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await values('1', '1', '1000'); await text('u100', '100');
  eq(await page.locator('[data-u100-scale]').count(), 1, 'exact 100 has a scale');
  await field('volume').fill('1.00000000000000001'); await text('u100', '≈100');
  eq(await page.locator('[data-u100-scale]').count(), 0, 'just over 100 never drawn as in scale');
  ok((await page.locator('[data-results]').innerText()).includes('Above the 100-unit scale'), 'out-of-scale message');
  await page.getByRole('button', { name: 'Calculate units', exact: true }).click(); await screenshot('just-above-scale');
  await values('1', '4', '300'); await text('u100', '120'); await text('portion-ml', '1.2');
  await page.getByRole('button', { name: 'Calculate units', exact: true }).click(); await screenshot('out-of-scale');
  await values('1000', '0.001', '0.001'); await text('u100', '1.00000e-10');
  eq(await page.locator('[data-u100-scale]').count(), 0, 'tiny nonzero has no zero-position marker');
  ok((await page.locator('[data-results]').innerText()).includes('Too small to show precisely'), 'subunit diagram limitation');
  await page.getByRole('button', { name: 'Calculate units', exact: true }).click(); await screenshot('small-nonzero');
  await values('1', '1', '10'); await text('u100', '1');
  eq(await page.locator('[data-u100-scale]').count(), 1, 'exact 1 unit has a scale');
  await field('volume').fill('0.99999999999999999'); await text('u100', '≈1');
  eq(await page.locator('[data-u100-scale]').count(), 0, 'just below 1 has no marker despite rounded display');
  await field('portion').fill('NaN'); eq(await page.locator('[data-result]').count(), 0, 'invalid edits immediately remove result');
  await page.getByRole('button', { name: 'Calculate units', exact: true }).click();
  ok(await field('portion').evaluate(n => n === document.activeElement), 'first error receives focus');
  await screenshot('invalid');
  await page.getByRole('button', { name: 'Clear all', exact: true }).click();
  await field('mass').press('Enter');
  eq(await field('mass').getAttribute('aria-invalid'), 'true', 'empty submit exposes error');
  await values('5', '2', '250');
  await field('mass').focus(); await page.keyboard.type('7.5');
  eq(await field('mass').inputValue(), '7.5', 'focus selects numeric content for replacement');
  await field('mass').fill('5'); await field('portion').fill('');
  eq(await page.locator('[data-result]').count(), 0, 'cleared edit removes output');
  const x = '1.' + '0'.repeat(117) + '1';
  await values(x, x, x); await text('u100', '≈0.1');
  await page.getByLabel('Amount unit').selectOption('mg'); await text('u100', '≈0.1');
  await page.getByLabel('Amount unit').selectOption('mcg'); eq(await field('portion').inputValue(), x, 'exact toggle round trip');
  // Desktop 200% browser-zoom equivalent: halve the CSS viewport and double
  // device pixels. This tests actual responsive reflow, not a scaled image.
  const zoomContext = await browser.newContext({ viewport: { width: 720, height: 450 }, deviceScaleFactor: 2 });
  await zoomContext.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.fulfill({ status: 200, body: '' }));
  const zoom = await zoomContext.newPage();
  await zoom.goto(`${base}/peptide-calculator`, { waitUntil: 'networkidle' });
  await zoom.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
  await zoom.locator('#lab-mass').fill('5'); await zoom.locator('#lab-volume').fill('2'); await zoom.locator('#lab-portion').fill('250');
  eq(await zoom.locator('[data-result="u100"]').innerText(), '10', '200% equivalent functional result');
  eq(await zoom.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, '200% equivalent no document clipping');
  await zoom.getByRole('button', { name: 'Calculate units', exact: true }).click();
  const zoomResult = await zoom.locator('[data-result="u100"]').boundingBox();
  ok(zoomResult.y >= 56 && zoomResult.y + zoomResult.height < 450 - 76, '200% equivalent primary result clears sticky surfaces');
  await zoom.screenshot({ path: `${out}/zoom-200-desktop.png` });
  await zoomContext.close();
  // Real doubled text on a narrow mobile layout as a separate accessibility check.
  await page.getByRole('button', { name: 'Clear all', exact: true }).click();
  await values('5', '2', '250');
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  // Shared navigation/footer are unchanged and overflow in this extra root-text
  // stress test. Record that limitation; require the changed calculator to fit.
  const mobileTextDocumentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  metrics.push({ mobileTextScale: '200%', viewport: 390, documentWidth: mobileTextDocumentWidth, sharedShellLimitation: mobileTextDocumentWidth > 390 });
  const clipped = await page.locator('[data-calculator], [data-calculator] *').evaluateAll(nodes => nodes.filter(n => n.checkVisibility() && n.getBoundingClientRect().width && (n.getBoundingClientRect().right > innerWidth + 1 || n.getBoundingClientRect().left < -1)).map(n => n.tagName));
  eq(clipped, [], '200% mobile text calculator controls remain within viewport');
  await page.getByRole('button', { name: 'Calculate units', exact: true }).click(); await screenshot('mobile-text-200');
  await page.evaluate(() => { document.documentElement.style.fontSize = ''; });
  await page.setViewportSize({ width: 360, height: 640 });
  await page.getByRole('button', { name: 'Clear all', exact: true }).click();
  await values('5', '2', '250');
  const shortButton = page.getByRole('button', { name: 'Calculate units', exact: true });
  await shortButton.click();
  await text('u100', '10');
  const shortResult = await page.locator('[data-result="u100"]').boundingBox();
  ok(shortResult.y >= 56 && shortResult.y + shortResult.height < 640 - 61, '360x640 result reachable and clear of sticky offer');
  await screenshot('short-phone-360x640');
  // Native no-JS article formulas and one plain direct-Apple fallback remain.
  const nojs = await browser.newContext({ javaScriptEnabled: false });
  await nojs.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.fulfill({ status: 200, body: '' }));
  const fallback = await nojs.newPage();
  await fallback.goto(`${base}/peptide-calculator`, { waitUntil: 'domcontentloaded' });
  eq(await fallback.locator('aside[aria-label="IQONIC app"] a').getAttribute('href'), 'https://apps.apple.com/us/app/iqonic/id6765689488', 'noJS direct Apple fallback');
  ok((await fallback.locator('[data-newsroom-article]').innerText()).includes('5 ÷ 2 = 2.5 mg/mL'), 'noJS original worked formula');
  eq(await fallback.locator('h1').count(), 1, 'noJS one H1');
  await nojs.close();
  eq(errors, [], 'no runtime errors');
  await fs.writeFile(`${out}/clarity-results.json`, JSON.stringify({ status: 'PASS', checks, metrics, errors }, null, 2));
  console.log(`PASS ${checks} clarity assertions`);
} finally { await browser.close(); }
