#!/usr/bin/env node
// Read-only IQON offer copy scan. GET requests only; no side effects.
// Usage: node scripts/check-iqon-offer.mjs [baseUrl] [outJson]
//   baseUrl defaults to http://localhost:3000; use https://peptidedigest.co after deploy.
// Enumerates every route from sitemap.xml plus every internal link on the homepage,
// then checks each page's served HTML, decoded link attributes and JSON-LD:
//   - exactly 2 IQON offer cards and 1 sticky bar, each with the BOGO20 copy
//   - every iqonhealth.com link carries utm_campaign=bogo20
//   - no obsolete "free item" / B2GO promotional promises anywhere in the page
import { writeFileSync } from "node:fs";

const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const out = process.argv[3];
const SITE = "https://peptidedigest.co";

const EXPECTED_HREF = "https://www.iqonhealth.com/shop?utm_source=peptidedigest&utm_medium=referral&utm_campaign=bogo20";
const CARD_COPY = [
  "Reader offer · IQON Labs",
  "Buy 1, Get 1 20% Off",
  "20% OFF",
  "Applied automatically at checkout, no code needed",
  "Claim my 20% off →",
  "In every pair, the lower priced item is 20% off after other discounts; accessories excluded. For research use only.",
];
const STICKY_COPY = ["IQON Labs: Buy 1, Get 1 20% Off", "Applied automatically, no code needed", "Claim →"];

// Offer-specific phrases only, so legitimate editorial uses of "free" never match.
const OBSOLETE = [
  /get\s*(1|one)\s*free/i,
  /buy\s*(2|two)\s*,?\s*get\s*(1|one)/i,
  /free\s+vial/i,
  /second one is on us/i,
  /lower[\s-]priced item free/i,
  /\bB2GO\b/,
  /utm_campaign=bogo(?!20)/i,
  /\bFREE\b/, // the old all-caps sticker; editorial copy never uses all-caps FREE
];

const decode = s => s
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const text = html => decode(html.replace(/<!--.*?-->/gs, "").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

async function get(path) {
  const res = await fetch(base + path, { redirect: "manual" });
  return { status: res.status, body: await res.text() };
}

const toPath = u => { const p = new URL(u, SITE).pathname; return p === "" ? "/" : p; };

const sitemap = await get("/sitemap.xml");
if (sitemap.status !== 200) throw new Error(`sitemap.xml ${sitemap.status}`);
const sitemapRoutes = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => toPath(decode(m[1])));
const home = await get("/");
const indexRoutes = [...home.body.matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)"/g)].map(m => m[1]).filter(p => p !== "/");
const routes = [...new Set(["/", ...sitemapRoutes, ...indexRoutes])].sort();

const results = [];
for (const route of routes) {
  const { status, body } = route === "/" ? home : await get(route);
  const errors = [];
  if (status !== 200) errors.push(`status ${status}`);
  const anchors = [...body.matchAll(/<a\b([^>]*)>(.*?)<\/a>/gs)].map(m => {
    const href = /\bhref="([^"]*)"/.exec(m[1]);
    return { href: href ? decode(href[1]) : "", attrs: m[1], text: text(m[2]) };
  });
  const iqon = anchors.filter(a => a.href.includes("iqonhealth.com"));
  const cards = iqon.filter(a => a.text.includes("Reader offer"));
  const stickies = iqon.filter(a => a.attrs.includes("fixed inset-x-0 bottom-0"));
  if (cards.length !== 2) errors.push(`expected 2 offer cards, found ${cards.length}`);
  if (stickies.length !== 1) errors.push(`expected 1 sticky bar, found ${stickies.length}`);
  for (const a of iqon) if (a.href !== EXPECTED_HREF) errors.push(`unexpected IQON href ${a.href}`);
  cards.forEach((c, i) => CARD_COPY.forEach(s => { if (!c.text.includes(s)) errors.push(`card ${i + 1} missing "${s}"`); }));
  stickies.forEach(c => STICKY_COPY.forEach(s => { if (!c.text.includes(s)) errors.push(`sticky missing "${s}"`); }));
  const jsonld = [...body.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(m => m[1]);
  for (const j of jsonld) { try { JSON.parse(j); } catch { errors.push("invalid JSON-LD"); } }
  const surfaces = {
    html: body,
    visibleText: text(body.replace(/<script\b.*?<\/script>/gs, "")),
    decodedLinks: anchors.map(a => a.href).join("\n"),
    jsonld: jsonld.join("\n"),
  };
  for (const [surface, value] of Object.entries(surfaces))
    for (const re of OBSOLETE) { const m = re.exec(value); if (m) errors.push(`obsolete ${re} in ${surface}: "${m[0]}"`); }
  results.push({ route, status, cards: cards.length, stickies: stickies.length, iqonLinks: iqon.length, jsonldBlocks: jsonld.length, pass: errors.length === 0, errors });
}

const summary = {
  base, checkedAt: new Date().toISOString(), expectedHref: EXPECTED_HREF,
  routeCount: routes.length, sitemapRouteCount: new Set(sitemapRoutes).size, homepageIndexRouteCount: new Set(indexRoutes).size,
  affectedPageCount: results.filter(r => r.cards > 0 || r.stickies > 0).length,
  offerCardCount: results.reduce((n, r) => n + r.cards, 0),
  stickyBarCount: results.reduce((n, r) => n + r.stickies, 0),
  failCount: results.filter(r => !r.pass).length,
  routes: results,
};
if (out) writeFileSync(out, JSON.stringify(summary, null, 2));
for (const r of results) console.log(`${r.pass ? "PASS" : "FAIL"} ${r.status} cards=${r.cards} sticky=${r.stickies} ${r.route}${r.pass ? "" : "\n  " + r.errors.join("\n  ")}`);
console.log(`routes=${summary.routeCount} sitemap=${summary.sitemapRouteCount} homepageIndex=${summary.homepageIndexRouteCount} affected=${summary.affectedPageCount} cards=${summary.offerCardCount} stickies=${summary.stickyBarCount} failures=${summary.failCount}`);
process.exit(summary.failCount ? 1 : 0);
