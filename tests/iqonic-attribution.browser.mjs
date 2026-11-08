// Real production-page interaction; every non-local request is intercepted.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.BASE_URL || 'http://localhost:4873';
const out = process.env.EVIDENCE_DIR || '/tmp/pd-iqonic-attribution';
const fallbackDestination = 'https://apps.apple.com/us/app/iqonic/id6765689488';
const destination = 'https://app.appsflyer.com/id6765689488?pid=peptidedigest&c=calculator_banner&af_channel=web&af_ad=iqonic_banner';
const expected = ['event', 'iqonic_banner_click', {
  send_to: 'G-QLTHZGWLMP', event_category: 'outbound', event_label: 'peptide_calculator_iqonic_banner',
  page_location: 'https://peptidedigest.co/peptide-calculator', page_referrer: '',
  page_title: 'Peptide Calculator', transport_type: 'beacon',
}];
await fs.mkdir(out, { recursive: true });
// Chrome can bypass Playwright routing for modifier-opened tabs. A dead local
// proxy additionally blocks all non-local traffic, including those tabs.
const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome', proxy: { server: 'http://127.0.0.1:9', bypass: '127.0.0.1,localhost' } });
const checks = [];
const intercepted = [];
const errors = [];
function eq(actual, expected, name) { assert.deepEqual(actual, expected, name); checks.push(name); }
async function newContext(options = {}) {
  const context = await browser.newContext({ serviceWorkers: 'block', ...options });
  context.setDefaultTimeout(15_000);
  context.setDefaultNavigationTimeout(15_000);
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.origin === new URL(base).origin) return route.continue();
    intercepted.push({ origin: url.origin, pathname: url.pathname, url: url.href, referrer: route.request().headers().referer || '' });
    return route.fulfill({ status: 200, contentType: 'text/plain', body: '' });
  });
  return context;
}
async function setup(context, query = '') {
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`${base}/peptide-calculator${query}`, { waitUntil: 'networkidle' });
  // Prove hydration using the actual calculator interaction.
  if (await page.evaluate(() => typeof window.gtag === 'function')) {
    await page.getByRole('button', { name: 'Load example', exact: true }).click();
    await page.locator('[data-result="portion-ml"]').waitFor();
  }
  return page;
}
async function installRecorder(page) {
  await page.evaluate(() => {
    window.__events = [];
    window.__defaultPrevented = [];
    window.gtag = (...args) => window.__events.push(args);
    window.addEventListener('click', event => {
      if (event.target.closest('aside[aria-label="IQONIC app"] a')) window.__defaultPrevented.push(event.defaultPrevented);
    });
  });
}
const bannerLink = page => page.locator('aside[aria-label="IQONIC app"] a');
async function activate(page, action, expectedCount, target = destination, nativeOutcome) {
  console.log(`Checking activation, expected event count: ${expectedCount}`);
  const popupPromise = page.context().waitForEvent('page');
  await action(bannerLink(page));
  const popup = await popupPromise;
  await popup.bringToFront();
  if (nativeOutcome) {
    await popup.waitForLoadState();
    eq(popup.url(), nativeOutcome, 'modifier navigation matches an untracked native anchor under network guard');
  } else {
    await popup.waitForURL(target);
    eq(popup.url(), target, 'native destination navigation');
  }
  await popup.close();
  const events = await page.evaluate(() => window.__events.filter(event => event[1] === 'iqonic_banner_click'));
  eq(events.length, expectedCount, 'one event per primary activation, none when suppressed');
  for (const event of events) eq(event, expected, 'static allowlist excludes inputs, URL queries, identifiers and referrer');
  eq(await page.evaluate(() => window.__defaultPrevented.every(value => value === false)), true, 'anchor default remains uncancelled');
}
try {
  const context = await newContext();
  const page = await setup(context, '?gclid=SYNTHETIC_AD_ID&email=synthetic%40example.invalid&mass=17.123#private-fragment');
  eq(intercepted.some(request => request.origin === 'https://app.appsflyer.com'), false, 'no provider request before activation');
  eq(await page.evaluate(() => window.dataLayer.filter(event => event[1] === 'iqonic_banner_click').length), 0, 'no automatic banner event');
  eq(await bannerLink(page).getAttribute('href'), destination, 'hydration selects exact verified provider link');
  await installRecorder(page);
  await page.locator('#lab-mass').fill('17.123');
  await page.locator('#lab-volume').fill('3.456');
  await page.locator('#lab-portion').fill('78.9');
  await page.evaluate(() => { document.title = 'SYNTHETIC_PRIVATE_TITLE'; });
  await activate(page, link => link.locator('span').click(), 1);
  await activate(page, async link => {
    await link.focus();
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Tab');
    eq(await link.evaluate(node => node === document.activeElement && node.matches(':focus-visible')), true, 'real Tab focus reaches banner');
    await page.keyboard.press('Enter');
  }, 2);
  // Compare actual native behavior for modifier/auxiliary opening. Background
  // tabs that bypass routing hit the dead proxy, never a production provider.
  await page.evaluate(destination => {
    const reference = document.createElement('a');
    reference.id = 'native-reference'; reference.href = destination;
    reference.target = '_blank'; reference.rel = 'noopener noreferrer';
    reference.textContent = 'Native test reference';
    document.querySelector('aside[aria-label="IQONIC app"]').after(reference);
  }, destination);
  for (const [options, count] of [[{ modifiers: ['ControlOrMeta'] }, 3], [{ modifiers: ['Shift'] }, 4], [{ button: 'middle' }, 5]]) {
    const referencePopup = context.waitForEvent('page');
    await page.locator('#native-reference').click(options);
    const native = await referencePopup;
    await native.waitForLoadState();
    const outcome = native.url();
    await native.close();
    await activate(page, link => link.click(options), count, destination, outcome);
  }
  await page.locator('#native-reference').evaluate(node => node.remove());
  const shop = page.locator('a[href*="iqonhealth.com/shop"]').first();
  const shopPopupPromise = context.waitForEvent('page');
  await shop.click();
  const shopPopup = await shopPopupPromise;
  await shopPopup.waitForLoadState();
  await shopPopup.close();
  eq(await page.evaluate(() => window.__events.filter(event => event[1] === 'iqonic_banner_click').length), 5, 'shop link does not emit banner event');
  eq(await page.evaluate(() => window.__events.filter(event => event[1] === 'iqon_shop_click').length), 1, 'existing shop event preserved');
  await page.getByRole('button', { name: 'Clear all', exact: true }).click();
  eq(await page.evaluate(() => window.__events.filter(event => event[1] === 'iqonic_banner_click').length), 5, 'calculator controls do not emit banner events');

  for (const mode of ['absent', 'throws', 'gpc', 'dnt', 'optout', 'consent-default', 'consent-update', 'ad_storage', 'ad_user_data', 'ad_personalization']) {
    const privacyPage = await setup(context);
    await installRecorder(privacyPage);
    await privacyPage.evaluate(mode => {
      if (mode === 'absent') window.gtag = undefined;
      if (mode === 'throws') window.gtag = () => { throw new Error('Synthetic analytics failure'); };
      if (mode === 'gpc') Object.defineProperty(navigator, 'globalPrivacyControl', { value: true });
      if (mode === 'dnt') Object.defineProperty(navigator, 'doNotTrack', { value: '1' });
      if (mode === 'optout') window['ga-disable-G-QLTHZGWLMP'] = true;
      if (mode.startsWith('consent-')) {
        function consent() { window.dataLayer.push(arguments); }
        consent('consent', mode.slice(8), { analytics_storage: 'denied' });
      }
      if (mode.startsWith('ad_')) {
        window.dataLayer.push(['consent', 'update', { [mode]: 'denied' }]);
        window.dataLayer.push(['consent', 'update', { analytics_storage: 'granted' }]);
      }
    }, mode);
    await activate(privacyPage, link => link.click(), 0, mode === 'absent' ? destination : fallbackDestination);
    checks.push(`${mode}: no event, native navigation succeeds`);
    await privacyPage.close();
  }
  await context.close();
  const refusedContext = await newContext();
  await refusedContext.addInitScript(() => Object.defineProperty(navigator, 'globalPrivacyControl', { value: true }));
  const refusedPage = await setup(refusedContext);
  eq(await bannerLink(refusedPage).getAttribute('href'), fallbackDestination, 'GPC before hydration retains direct App Store URL');
  await installRecorder(refusedPage);
  await activate(refusedPage, link => link.click(), 0, fallbackDestination);
  await refusedContext.close();
  // JS disabled and completely blocked Next scripts both retain the SSR anchor.
  for (const javaScriptEnabled of [false, true]) {
    const fallback = await newContext({ javaScriptEnabled });
    if (javaScriptEnabled) await fallback.route('**/_next/**/*.js*', route => route.abort());
    const fallbackPage = await fallback.newPage();
    await fallbackPage.goto(`${base}/peptide-calculator`, { waitUntil: 'networkidle' });
    const popupPromise = fallback.waitForEvent('page');
    await bannerLink(fallbackPage).click();
    const popup = await popupPromise;
    await popup.waitForURL(fallbackDestination);
    eq(popup.url(), fallbackDestination, javaScriptEnabled ? 'blocked scripts: native navigation' : 'JS off: native navigation');
    await fallback.close();
  }
  eq(errors, [], 'no unhandled page errors');
  const providerRequests = intercepted.filter(request => request.origin === 'https://app.appsflyer.com');
  eq(providerRequests.length > 0, true, 'actual pointer and keyboard provider requests were intercepted');
  for (const request of providerRequests) {
    eq(request.url, destination, 'outbound provider URL is the exact static allowlist');
    eq(request.referrer, '', 'noreferrer omits source URL and its sensitive query');
  }
  await fs.writeFile(`${out}/attribution-results.json`, JSON.stringify({ status: 'PASS', checks, intercepted, errors, provider: 'Parent-authorized AppsFlyer route; real first open/dashboard attribution pending' }, null, 2));
  console.log(`PASS ${checks.length} attribution browser assertions; external traffic intercepted or proxy-blocked`);
} finally { await browser.close(); }
