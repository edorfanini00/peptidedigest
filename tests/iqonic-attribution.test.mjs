import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = fs.readFileSync(new URL('../lib/iqonic-attribution.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
function run({ window: overrides = {}, navigator = {}, noWindow = false } = {}) {
  const events = [];
  const context = { exports: {}, navigator };
  if (!noWindow) context.window = { location: { pathname: '/peptide-calculator', search: '?gclid=SECRET&mass=19' }, gtag: (...args) => events.push(args), ...overrides };
  vm.runInNewContext(outputText, context);
  const destination = context.exports.iqonicBannerDestination();
  assert.equal(destination, context.exports.iqonicAttributionAllowed() ? context.exports.IQONIC_ATTRIBUTION_URL : context.exports.IQONIC_APP_STORE_URL);
  assert.doesNotThrow(() => context.exports.trackIQONICBannerClick());
  return JSON.parse(JSON.stringify(events));
}

test('emits one explicitly routed click with an exact static allowlist', () => {
  assert.deepEqual(run(), [['event', 'iqonic_banner_click', {
    send_to: 'G-QLTHZGWLMP', event_category: 'outbound', event_label: 'peptide_calculator_iqonic_banner',
    page_location: 'https://peptidedigest.co/peptide-calculator', page_referrer: '',
    page_title: 'Peptide Calculator', transport_type: 'beacon',
  }]]);
});
test('provider link has only the exact parent-authorized app and static campaign parameters', () => {
  const context = { exports: {} };
  vm.runInNewContext(outputText, context);
  const link = new URL(context.exports.IQONIC_ATTRIBUTION_URL);
  assert.equal(link.origin, 'https://app.appsflyer.com');
  assert.equal(link.pathname, '/id6765689488');
  assert.deepEqual([...link.searchParams], [['pid', 'peptidedigest'], ['c', 'calculator_banner'], ['af_channel', 'web'], ['af_ad', 'iqonic_banner']]);
  assert.equal(link.hash, '');
  assert.equal(context.exports.iqonicBannerDestination(), 'https://apps.apple.com/us/app/iqonic/id6765689488');
});
for (const [name, options] of [
  ['server rendering', { noWindow: true }],
  ['other route', { window: { location: { pathname: '/' } } }],
  ['missing tag', { window: { gtag: undefined } }],
  ['throwing tag', { window: { gtag() { throw new Error('blocked'); } } }],
  ['GPC', { navigator: { globalPrivacyControl: true } }],
  ['DNT', { navigator: { doNotTrack: '1' } }],
  ['GA optout', { window: { 'ga-disable-G-QLTHZGWLMP': true } }],
  ['denied default', { window: { dataLayer: [['consent', 'default', { analytics_storage: 'denied' }]] } }],
  ['denied update', { window: { dataLayer: [['consent', 'update', { analytics_storage: 'denied' }]] } }],
  ['regional grant cannot erase refusal', { window: { dataLayer: [['consent', 'update', { analytics_storage: 'denied' }], ['consent', 'update', { analytics_storage: 'granted', region: ['US'] }]] } }],
  ['unrelated grant cannot erase refusal', { window: { dataLayer: [['consent', 'update', { analytics_storage: 'denied' }], ['consent', 'update', { ad_storage: 'granted' }]] } }],
]) {
  test(`suppresses optional event: ${name}`, () => assert.deepEqual(run(options), []));
}
test('handles the existing Arguments queue and latest explicit analytics consent update', () => {
  const command = function () { return arguments; };
  const denied = command('consent', 'default', { analytics_storage: 'denied' });
  assert.deepEqual(run({ window: { dataLayer: [null, {}, denied] } }), []);
  assert.equal(run({ window: { dataLayer: [denied, command('consent', 'update', { analytics_storage: 'granted' })] } }).length, 1);
  assert.deepEqual(run({ window: { dataLayer: [command('consent', 'update', { analytics_storage: 'granted' }), denied] } }), []);
});
test('a blocked privacy API fails closed without throwing', () => {
  assert.deepEqual(run({ navigator: { get globalPrivacyControl() { throw new Error('blocked'); } } }), []);
});
for (const purpose of ['analytics_storage', 'ad_storage', 'ad_user_data', 'ad_personalization']) {
  test(`${purpose}: independent grants, denials and ordering`, () => {
    const refused = ['consent', 'update', { [purpose]: 'denied' }];
    const granted = ['consent', 'update', { [purpose]: 'granted' }];
    const otherPurposes = Object.fromEntries(['analytics_storage', 'ad_storage', 'ad_user_data', 'ad_personalization'].filter(key => key !== purpose).map(key => [key, 'granted']));
    assert.deepEqual(run({ window: { dataLayer: [refused, ['consent', 'update', otherPurposes]] } }), []);
    assert.deepEqual(run({ window: { dataLayer: [granted, refused] } }), []);
    assert.deepEqual(run({ window: { dataLayer: [refused, ['consent', 'default', { [purpose]: 'granted' }]] } }), []);
    assert.equal(run({ window: { dataLayer: [refused, granted] } }).length, 1);
  });
}
test('all denied purposes must be granted separately before optional attribution resumes', () => {
  const commands = [['consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' }]];
  for (const purpose of ['analytics_storage', 'ad_storage', 'ad_user_data', 'ad_personalization']) {
    assert.deepEqual(run({ window: { dataLayer: commands } }), []);
    commands.push(['consent', 'update', { [purpose]: 'granted' }]);
  }
  assert.equal(run({ window: { dataLayer: commands } }).length, 1);
});
