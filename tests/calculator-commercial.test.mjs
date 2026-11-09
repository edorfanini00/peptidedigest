import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read = path => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const calculator = read("components/PeptideCalculator.tsx");
const partner = read("components/IQONPartner.tsx");
const offer = partner.slice(partner.indexOf("export function IQONCalculatorOffer"), partner.indexOf("export function IQONStickyBar"));

test("calculator renders the store offer before inputs and the app row after the workspace", () => {
  const store = calculator.indexOf("<IQONCalculatorOffer />");
  const form = calculator.indexOf("<form");
  const output = calculator.indexOf("className={styles.output}");
  const app = calculator.indexOf("<IQONICBanner />");
  const supply = calculator.indexOf("className={styles.supply}");
  assert.ok(store > 0 && store < form, "store offer precedes the inputs");
  assert.equal(calculator.split("<IQONICBanner />").length, 2, "exactly one app CTA");
  assert.equal(calculator.split("<IQONCalculatorOffer />").length, 2, "exactly one compact store offer");
  assert.ok(app > output && app < supply, "app row follows the workspace, before the optional supply planner");
});

test("compact store offer reuses the existing offer constant without a local handler", () => {
  assert.ok(offer.length > 0, "IQONCalculatorOffer is exported from IQONPartner.tsx");
  assert.match(offer, /href=\{IQON_OFFER\.href\}/);
  assert.match(offer, /IQON_OFFER\.headlineLead/);
  assert.match(offer, /IQON_OFFER\.headlineAccent/);
  assert.match(offer, /Shop IQON Health/);
  assert.doesNotMatch(offer, /iqonhealth\.com|utm_|onClick|gtag|\b20%/, "no duplicated terms, URL or duplicate shop-click handler");
  assert.match(offer, /target="_blank"/);
  assert.match(offer, /rel="noopener noreferrer"/);
});
