import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const root = new URL("../", import.meta.url);
const banned = /\b(?:dose|dosing|dosage|inject|injection|units|insulin\s+syringe|IU|subcutaneous|per\s+day)\b|TB[-\s]?500|BPC[-\s]?157|Thymosin|aliquot|\bservings?\b/i;
for (const slug of ["what-are-peptides", "peptide-calculator"]) {
  test(`${slug}: evergreen contract, references and discovery`, async () => {
    const path = new URL(`app/${slug}/story.ts`, root);
    assert.ok(fs.existsSync(path), "the route needs its sourced story");
    const { outputText } = ts.transpileModule(fs.readFileSync(path, "utf8"), { compilerOptions: { module: ts.ModuleKind.ES2022 } });
    const { story } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
    assert.equal(story.slug, slug);
    assert.equal(story.type, "Article");
    assert.ok(story.lead.length > 100);
    assert.ok(story.faqs.length >= 3);
    assert.equal(story.vials.length, 2);
    assert.notEqual(story.vials[0], story.vials[1]);
    assert.ok(story.sections.some(s => s.title === "Key facts" && s.paragraphs.every(p => p.startsWith("- "))));
    assert.doesNotMatch(JSON.stringify(story), banned);
    assert.doesNotMatch(JSON.stringify(story), /—/);
    const ids = new Set(story.sources.map(s => s.id));
    for (const match of JSON.stringify(story).matchAll(/\[(\d+)\]/g)) assert.ok(ids.has(Number(match[1])));
    for (const faq of story.faqs) for (const id of faq.refs) assert.ok(ids.has(id));
    for (const file of ["app/page.tsx", "app/sitemap.ts"]) assert.ok(fs.readFileSync(new URL(file, root), "utf8").includes(slug), file);
    for (const related of story.related) assert.ok(fs.existsSync(new URL(`app${related.url}/page.tsx`, root)), related.url);
    const page = fs.readFileSync(new URL(`app/${slug}/page.tsx`, root), "utf8");
    assert.match(page, /newsroomMetadata\(story\)/);
    assert.match(page, /NewsroomArticle story=\{story\}/);
  });
}
