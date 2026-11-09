import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const root = new URL("../", import.meta.url);
const excluded = /TB[-\s]?500|BPC[-\s]?157|Thymosin/i;
const retatrutide = [
  "retatrutide-triumph-1-phase-3-results-2026",
  "retatrutide-sleep-apnea-triumph-osa-results",
  "retatrutide-transcend-t2d-2-ozempic-head-to-head",
  "retatrutide-knee-osteoarthritis-triumph-4-results",
];

async function load(slug) {
  const { outputText } = ts.transpileModule(fs.readFileSync(new URL(`app/${slug}/story.ts`, root), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.ES2022 },
  });
  return (await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`)).story;
}

test("amylin explainer leads with the comparison and keeps its definition and URL", async () => {
  const slug = "what-is-amylin-amylin-analogs-vs-glp-1";
  const story = await load(slug);
  assert.equal(story.slug, slug);
  assert.match(story.title, /^Amylin vs GLP-1: /);
  assert.ok(`${story.title} | The Peptide Digest`.length <= 75, "title stays a readable length");
  assert.match(story.description, /^Amylin vs GLP-1: amylin is a hormone released with insulin/);
  assert.match(story.description, /amylin analogs such as cagrilintide/);
  assert.ok(story.description.length >= 70 && story.description.length <= 170, "description stays a readable length");
  assert.equal(story.date, "2026-10-08T10:00:12-04:00");
  assert.equal(story.dateModified, undefined, "a metadata-only change is not a content revision");
  assert.ok(story.sections.some(s => s.title.startsWith("Amylin vs GLP-1")));
  const home = fs.readFileSync(new URL("app/page.tsx", root), "utf8");
  const card = home.match(new RegExp(`"slug": "${slug}",[\\s\\S]*?"title": ("[^"]*"),\\s*"excerpt": ("[^"]*")`));
  assert.ok(card, "homepage card remains");
  assert.equal(JSON.parse(card[1]), story.title, "homepage card title matches the article title");
  assert.equal(JSON.parse(card[2]), story.description, "homepage card excerpt matches the search description");
  const sitemap = fs.readFileSync(new URL("app/sitemap.ts", root), "utf8");
  assert.match(sitemap, /what-is-amylin-amylin-analogs-vs-glp-1`,\n\s+lastModified: new Date\("2026-10-08T10:00:12-04:00"\)/);
  assert.doesNotMatch(JSON.stringify(story), excluded);
});

test("TRIUMPH-1 links to each later retatrutide Phase 3 story once", async () => {
  const story = await load(retatrutide[0]);
  const urls = story.related.map(link => link.url);
  assert.equal(new Set(urls).size, urls.length, "related links must not repeat");
  for (const slug of retatrutide.slice(1)) assert.equal(urls.filter(url => url === `/${slug}`).length, 1, slug);
  for (const url of ["/enicepatide-phase-2-diabetes-results-september-2026", "/what-does-research-use-only-mean"]) {
    assert.ok(urls.includes(url), `existing link ${url} is kept`);
  }
  // Adding links is not a revision; the November 9 safety correction is (see retatrutide-corrections.test.mjs).
  assert.equal(story.dateModified, "2026-11-09T10:18:00-05:00");
  assert.match(story.correction, /^Correction, November 9, 2026: /);
});

test("retatrutide related reading resolves to existing routes without excluded names", async () => {
  for (const slug of retatrutide) {
    const story = await load(slug);
    for (const link of story.related) {
      assert.ok(link.url.startsWith("/") && !link.url.startsWith("//"), `${slug}: ${link.url} is internal`);
      assert.ok(fs.existsSync(new URL(`app${link.url}/page.tsx`, root)), `${slug}: ${link.url} resolves`);
      assert.notEqual(link.url, `/${slug}`, `${slug} must not link to itself`);
      assert.ok(link.title.trim().length > 0);
    }
    assert.doesNotMatch(JSON.stringify(story), excluded);
  }
});
