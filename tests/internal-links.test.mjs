import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const root = new URL("../", import.meta.url);
const targets = ["what-are-peptides", "peptide-calculator"];
const routes = [
  "apex-peptides-raided-what-researchers-need-to-know",
  "peptide-content-vs-purity-measurement",
  "how-to-read-peptide-coa",
  "what-does-research-use-only-mean",
];

for (const slug of routes) {
  test(`${slug}: related reading links to both new evergreen pages`, async () => {
    const storyPath = new URL(`app/${slug}/story.ts`, root);
    let urls;
    if (fs.existsSync(storyPath)) {
      const { outputText } = ts.transpileModule(fs.readFileSync(storyPath, "utf8"), {
        compilerOptions: { module: ts.ModuleKind.ES2022 },
      });
      const { story } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
      urls = story.related.map(link => link.url);
    } else {
      const source = fs.readFileSync(new URL(`app/${slug}/page.tsx`, root), "utf8");
      const related = source.match(/Related [Cc]overage[\s\S]*?(?:\]\.map|<\/ul>)/);
      assert.ok(related, "the existing related-coverage section must remain");
      urls = [...related[0].matchAll(/(?:slug: "([^"]+)"|href="(\/[^"]+)")/g)]
        .map(([, route, href]) => href ?? `/${route}`);
    }
    for (const target of targets) {
      assert.equal(urls.filter(url => url === `/${target}`).length, 1, `${target} must appear once in related reading`);
      assert.ok(fs.existsSync(new URL(`app/${target}/page.tsx`, root)), `${target} must resolve to a page`);
    }
    assert.equal(new Set(urls).size, urls.length, "related links must not repeat");
  });
}
