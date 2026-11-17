import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const root = path.resolve(import.meta.dirname, "..");
const require = createRequire(import.meta.url);
let pathname = "/";
const cache = new Map();
function load(relative) {
  const filename = path.resolve(root, relative);
  if (cache.has(filename)) return cache.get(filename);
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const loaded = { exports: {} };
  const localRequire = id => {
    if (id === "next/image") return { __esModule: true, default: props => React.createElement("img", props) };
    if (id === "next/link") return { __esModule: true, default: props => React.createElement("a", props) };
    if (id === "next/navigation") return { usePathname: () => pathname };
    if (id.startsWith("@/") || id.startsWith(".")) {
      const target = id.startsWith("@/") ? path.join(root, id.slice(2)) : path.resolve(path.dirname(filename), id);
      return load([target, target + ".ts", target + ".tsx"].find(p => fs.existsSync(p)));
    }
    return require(id);
  };
  new Function("require", "module", "exports", output)(localRequire, loaded, loaded.exports);
  cache.set(filename, loaded.exports);
  return loaded.exports;
}
const policy = load("lib/article-commercial-context.ts");
const { LEGACY_COMMERCIAL_ROUTES } = load("lib/commercial-archive.ts");
const { ResearchContextCard, ArticlePlacement } = load("components/ArticlePlacement.tsx");
const { ContextualStickyBar } = load("components/ContextualStickyBar.tsx");
const render = (component, props) => renderToStaticMarkup(React.createElement(component, props));
const images = html => [...html.matchAll(/<img\b[^>]*src="([^"]+)"[^>]*>/g)].map(m => m[1]);
const base = "ad77792a7cd44609f14e3404dd97e10dc6573bc3";
const before = file => execFileSync("git", ["show", `${base}:${file}`], { cwd: root, encoding: "utf8" });
const rewrites = ["/how-to-read-peptide-coa", "/ghk-cu-peptide-research-what-studies-show"];
const clinical = [rewrites[1], "/weight-loss-peptides-how-compounds-differ"];

test("single compound produces one exact approved vial without filler or discount", () => {
  const html = render(ResearchContextCard, { context: { mode: "compound-research", compounds: ["ghk"] }, placement: "early" });
  assert.deepEqual(images(html), ["/iqon/ghk.png"], html);
  assert.match(html, /alt="IQON Labs GHK-Cu research material"/);
  assert.doesNotMatch(html, /20%|OFF|Buy 1|Claim my|COA|purity|tested/i);
  assert.equal((html.match(/<a /g) ?? []).length, 1, "whole card is one link");
  assert.match(html, /Account required/);
  assert.match(html, /not for human use/);
});

test("multi-compound context is exact, deduplicated and consistent across early and closing", () => {
  const context = { mode: "compound-research", compounds: ["ghk", "ss31", "ghk"] };
  for (const placement of ["early", "closing"]) {
    const html = render(ResearchContextCard, { context, placement });
    assert.deepEqual(images(html), ["/iqon/ghk.png", "/iqon/ss31.png"]);
    assert.match(html, /alt="IQON Labs SS-31 research material"/);
    assert.doesNotMatch(html, /glutathione|nad\.png|20%/);
  }
});

test("unknown, mixed-unapproved and malformed context fail closed, never partially promote", () => {
  for (const context of [undefined, null, {}, { mode: "unknown", compounds: ["ghk"] }, { mode: "compound-research", compounds: [] }, { mode: "compound-research", compounds: ["unapproved-test-compound"] }, { mode: "compound-research", compounds: ["ghk", "unapproved-test-compound"] }, { mode: "compound-research", compounds: ["constructor"] }, { mode: "compound-research", compounds: "ghk" }, { mode: "compound-research", compounds: ["ghk", "ss31", "nad"] }, { mode: "informational", compounds: ["ghk"] }]) {
    assert.deepEqual(policy.approvedContextAssets(context), []);
    assert.equal(render(ResearchContextCard, { context, placement: "early" }), "");
  }
  for (const slug of ["unknown-story", "ghk-cu-unregistered-story", "weight-loss-peptides-how-compounds-differ-extra"]) {
    assert.equal(render(ArticlePlacement, { slug, placement: "early", legacyVial: "ghk" }), "");
    pathname = "/" + slug; assert.equal(render(ContextualStickyBar), "");
  }
  assert.equal(policy.articleCommercialPolicy("/constructor").kind, "none");
});

test("clinical and cosmetic pages contain reading links but no product promotion in all placements and SSR sticky", () => {
  for (const route of clinical) {
    const declared = policy.ARTICLE_COMMERCIAL_CONTEXT[route];
    assert.equal(declared.mode, "informational");
    for (const placement of ["early", "closing"]) {
      const html = render(ArticlePlacement, { slug: route.slice(1), placement, legacyVial: "ghk" });
      assert.match(html, /Explore the science/);
      assert.doesNotMatch(html, /iqonhealth|<img|20%|not a recommendation|research-vial purchases/);
      for (const link of declared.reading) assert.ok(html.includes(`href="${link.url}"`));
    }
    pathname = route; assert.equal(render(ContextualStickyBar), "", "no SSR sticky anchor");
  }
});

test("neutral COA early, closing and sticky agree on one research asset and exact supported destination", () => {
  pathname = rewrites[0];
  const outputs = ["early", "closing"].map(placement => render(ArticlePlacement, { slug: pathname.slice(1), placement }));
  outputs.push(render(ContextualStickyBar));
  for (const html of outputs) {
    assert.deepEqual(images(html), ["/iqon/glutathione.png"]);
    assert.ok(html.includes(policy.RESEARCH_CATALOG.href.replaceAll("&", "&amp;")));
    assert.doesNotMatch(html, /20%|Buy 1|no code|returnURL|next=|gclid|health_status/);
  }
  const url = new URL(policy.RESEARCH_CATALOG.href);
  assert.equal(url.origin + url.pathname, "https://www.iqonhealth.com/shop");
  assert.deepEqual([...url.searchParams.keys()], ["utm_source", "utm_medium", "utm_campaign"]);
});

test("archive scope is frozen at the real base; every future route must declare explicit context", () => {
  const baseline = execFileSync("git", ["ls-tree", "-r", "--name-only", base, "app"], { cwd: root, encoding: "utf8" }).trim().split("\n")
    .filter(f => /(?:^app\/page|\/page)\.tsx$/.test(f))
    .map(f => f === "app/page.tsx" ? "/" : "/" + path.dirname(f).slice(4)).filter(r => !rewrites.includes(r)).sort();
  assert.deepEqual([...LEGACY_COMMERCIAL_ROUTES].sort(), baseline);
  for (const file of fs.readdirSync(path.join(root, "app"), { withFileTypes: true })) {
    if (!file.isDirectory() || !fs.existsSync(path.join(root, "app", file.name, "page.tsx"))) continue;
    const route = "/" + file.name;
    assert.notEqual(policy.articleCommercialPolicy(route).kind, "none", `${route}: declare commercial context`);
    if (Object.hasOwn(policy.ARTICLE_COMMERCIAL_CONTEXT, route)) {
      const page = fs.readFileSync(path.join(root, "app", file.name, "page.tsx"), "utf8");
      assert.doesNotMatch(page, /<IQONPartner\b/, "contextual pages may not bypass ArticlePlacement");
    }
  }
  for (const route of ["/", "/peptide-calculator", "/cagrisema-lower-dose-redefine-9-results"]) {
    assert.equal(policy.articleCommercialPolicy(route).kind, "legacy");
    pathname = route; assert.match(render(ContextualStickyBar), /Buy 1, Get 1/);
  }
});

test("approved asset bytes are unchanged and no restricted product files are added", () => {
  for (const asset of Object.values(policy.APPROVED_RESEARCH_ASSETS)) {
    const file = "public" + asset.src;
    assert.deepEqual(fs.readFileSync(path.join(root, file)), execFileSync("git", ["show", `${base}:${file}`], { cwd: root }));
  }
});

test("global analytics listener is byte-preserved and emits exactly one static outbound event", () => {
  const source = fs.readFileSync(path.join(root, "app/layout.tsx"), "utf8");
  const script = text => text.match(/<Script id="google-tags"[\s\S]*?\{`([\s\S]*?)`\}/)[1];
  assert.equal(script(source), script(before("app/layout.tsx")), "no new tracking or changed consent behavior");
  const handlers = [], queue = [];
  const context = { window: { dataLayer: queue }, dataLayer: queue, document: { addEventListener: (name, fn) => handlers.push({ name, fn }) }, location: { search: "?gclid=private-test&health_status=private-test" } };
  vm.runInNewContext(script(source), context);
  assert.equal(handlers.length, 1);assert.equal(handlers[0].name, "click");
  handlers[0].fn({ target: { closest: () => ({ href: policy.RESEARCH_CATALOG.href }) } });
  const events = queue.filter(x => x[0] === "event"); assert.equal(events.length, 1);
  assert.equal(events[0][1], "iqon_shop_click");
  assert.equal(events[0][2].event_label, policy.RESEARCH_CATALOG.href);
  assert.doesNotMatch(JSON.stringify(events), /private-test|gclid|health_status/);
  for (const file of ["components/ArticlePlacement.tsx", "components/ContextualStickyBar.tsx"]) {
    assert.doesNotMatch(fs.readFileSync(path.join(root, file), "utf8"), /onClick|addEventListener|gtag\(/);
  }
});

test("new article dates, retained images, citations and canonical story identity are exact", () => {
  for (const [slug, date, image] of [
    ["how-to-read-peptide-coa", "2026-09-25T12:00:00.000Z", "hplc"],
    ["ghk-cu-peptide-research-what-studies-show", "2026-10-01T08:00:00-04:00", "ghkCuCollagen"],
    ["weight-loss-peptides-how-compounds-differ", "2026-11-17T18:57:08Z", "weightLossPathways20261117"],
  ]) {
    const { story } = load(`app/${slug}/story.ts`);
    assert.equal(story.slug, slug);assert.equal(story.date, date);assert.equal(story.image, image);
    assert.equal(story.type, "Article");assert.ok(Date.parse(story.dateModified ?? story.date) <= Date.now());
    assert.equal(story.vials, undefined, "no obsolete rotation metadata on updated stories");
    const text = [story.title, story.description, story.lead, ...story.sections.flatMap(s => s.paragraphs)].join("\n");
    assert.doesNotMatch(text, /[—–]/);
    assert.doesNotMatch(JSON.stringify(story), /bpc[- ]?157|tb[- ]?500|thymosin/i);
    assert.ok(story.sources.length >= 3);
    for (const [, id] of text.matchAll(/\[(\d+)\]/g)) assert.ok(story.sources.some(s => s.id === Number(id)));
  }
});
