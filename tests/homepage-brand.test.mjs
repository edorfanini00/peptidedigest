// Run npm run build before npm test: these checks inspect Next's real output.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const output = new URL("../.next/server/app/", import.meta.url);
const read = name => fs.readFileSync(new URL(name, output), "utf8");
const base = "https://peptidedigest.co";
const intro = "Peptide research, scientific progress and industry news, explained clearly.";
const schemas = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .flatMap(([, json]) => { const node = JSON.parse(json); return node["@graph"] ?? [node]; });

test("built homepage introduces the publication before its offer and article listings", () => {
  const html = read("index.html");
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  assert.equal(headings.length, 1);
  assert.equal(headings[0][1], "The Peptide Digest");
  const main = html.slice(html.indexOf("<main"), html.indexOf("</main>"));
  assert.ok(main.indexOf(intro) > main.indexOf("<h1"));
  assert.ok(main.indexOf(intro) < main.indexOf("iqonhealth.com"));
  assert.ok(main.indexOf("iqonhealth.com") < main.indexOf('id="latest"'));
  assert.match(main, /<h2\b[^>]*>Apex[\s\S]*?<\/h2>/);
  assert.doesNotMatch(main, /independent|without hype or agenda/i);
  assert.match(main, /Content is for informational purposes only/);
  const start = main.match(/<nav aria-label="Start here"[\s\S]*?<\/nav>/)?.[0];
  assert.ok(start, "introductory reader navigation");
  assert.deepEqual([...start.matchAll(/href="([^"]+)"/g)].map(([, href]) => href), [
    "/what-are-peptides", "/how-to-read-peptide-coa", "/peptide-calculator",
  ]);
  assert.match(html, /name="description" content="Peptide research, scientific progress and industry news, explained clearly\."/);
  for (const id of ["G-QLTHZGWLMP", "AW-18474455082", "iqon_shop_click"]) assert.ok(html.includes(id));
});

test("every built sitemap page has one route canonical and a consistent publication identity", () => {
  const urls = [...read("sitemap.xml.body").matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
  assert.ok(urls.length > 1);
  assert.equal(new Set(urls).size, urls.length);
  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const html = read(pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`);
    const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)].map(([tag]) => tag.match(/href="([^"]+)"/)?.[1]);
    assert.deepEqual(canonical, [url], `${url}: canonical`);
    const nodes = schemas(html);
    const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0];
    assert.ok(footer?.includes('href="/editorial-standards"'), `${url}: policy discovery`);
    assert.doesNotMatch(footer, /independent/i);
    assert.doesNotMatch(html, /mailto:hello@peptidedigest\.com/);
    assert.doesNotMatch(footer, />Contact<|mailto:/i);
    assert.match(footer, /href="\/editorial-standards#updates-and-corrections"[^>]*>Corrections policy<\/a>/);
    for (const [type, suffix] of [["NewsMediaOrganization", "organization"], ["WebSite", "website"]]) {
      const matches = nodes.filter(node => node["@id"] === `${base}/#${suffix}`);
      assert.equal(matches.length, 1, `${url}: ${suffix}`);
      const [node] = matches;
      assert.equal(node["@type"], type);
      assert.equal(node.name, "The Peptide Digest");
      assert.equal(node.alternateName, "Peptide Digest");
      assert.equal(node.url, base);
      assert.equal(node.sameAs, undefined);
      assert.equal(node.potentialAction, undefined);
      if (type === "NewsMediaOrganization") assert.equal(node.publishingPrinciples, `${base}/editorial-standards`);
    }
    if (pathname === "/editorial-standards") {
      assert.ok(nodes.some(node => node["@type"] === "WebPage" && node.url === url));
      assert.ok(!nodes.some(node => ["Article", "NewsArticle"].includes(node["@type"])));
      assert.match(html, /<h1\b[^>]*>Editorial standards<\/h1>/);
      assert.match(html, /AI tools assist with research, drafting and production/);
      assert.match(html, /These checks are not medical review/);
      assert.match(html, /promotional placements linking to IQON Labs/);
      assert.match(html, /<h2 id="updates-and-corrections"[^>]*>Updates and corrections<\/h2>/);
    } else if (pathname !== "/") {
      assert.match(html, /<a\b[^>]*class="byline-author[^>]*href="\/editorial-standards"[^>]*>By The Peptide Digest Staff<\/a>/);
      const article = nodes.find(node => ["Article", "NewsArticle"].includes(node["@type"]));
      assert.ok(article?.headline && article.datePublished, `${url}: article schema retained`);
      assert.match(html, /property="og:type" content="article"/);
      assert.ok(!html.includes('<title>The Peptide Digest | Research, Science &amp; Industry News</title>'), `${url}: article title override`);
    }
  }
});

test("default social metadata points to a real PNG with accurate dimensions", () => {
  const png = fs.readFileSync(new URL("../public/og-default.png", import.meta.url));
  assert.deepEqual(png.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  assert.equal(png.toString("ascii", 12, 16), "IHDR");
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  for (const file of ["index.html", "editorial-standards.html"]) {
    const html = read(file);
    for (const property of ["og:image", "twitter:image"]) {
      assert.match(html, new RegExp(`(?:property|name)="${property}" content="https://peptidedigest\\.co/og-default\\.png"`));
    }
    assert.match(html, /property="og:image:width" content="1200"/);
    assert.match(html, /property="og:image:height" content="630"/);
    assert.match(html, /property="og:image:type" content="image\/png"/);
  }
});
