// Source-level checks for the November 8 and 9, 2026 retatrutide corrections.
// Built-output checks (schema, visible note, sitemap XML) run after npm run build.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import ts from "typescript";

const root = new URL("../", import.meta.url);
const output = new URL(".next/server/app/", root);
const base = "https://peptidedigest.co";
const baseCommit = "90281dfd40ede0534e30edbbe0ce1d442ff7b542";
const corrected = "2026-11-08T20:25:00-05:00";
const safetyCorrected = "2026-11-09T10:18:00-05:00";
const stories = {
  "retatrutide-triumph-1-phase-3-results-2026": { date: "2026-09-28T08:00:00-04:00", image: "retatrutideTriumph", modified: safetyCorrected, note: /^Correction, November 9, 2026: / },
  "retatrutide-transcend-t2d-2-ozempic-head-to-head": { date: "2026-10-30T11:45:00Z", image: "retatrutideTranscend20261030", modified: safetyCorrected, note: /^Correction, November 9, 2026: / },
  "retatrutide-sleep-apnea-triumph-osa-results": { date: "2026-10-29T12:30:00Z", image: "retatrutideOsa20261029", note: /^Correction, November 8, 2026: / },
  "retatrutide-knee-osteoarthritis-triumph-4-results": { date: "2026-11-06T13:09:00Z", image: "retatrutideKnee20261106", note: /^Update, November 8, 2026: / },
};
const slugs = Object.keys(stories);

const transpile = source => ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022 } }).outputText;
const importSource = async source => (await import(`data:text/javascript;base64,${Buffer.from(transpile(source)).toString("base64")}`)).story;
const load = slug => importSource(fs.readFileSync(new URL(`app/${slug}/story.ts`, root), "utf8"));
const loadBase = slug => importSource(execFileSync("git", ["show", `${baseCommit}:app/${slug}/story.ts`], { cwd: root, encoding: "utf8" }));

// Every citation marker in a passage, resolved to its source URL.
const cited = (story, text) => [...text.matchAll(/\[(\d+)\]/g)].map(([, id]) => {
  const source = story.sources.find(s => s.id === Number(id));
  assert.ok(source, `${story.slug}: [${id}] resolves`);
  return source.url;
});
const paragraphs = story => [story.lead, ...story.sections.flatMap(s => s.paragraphs)];
const sentences = text => text.split(/(?<=[.?!](?:\[\d+\])*)\s+(?=[A-Z])/);
const allText = story => [story.title, story.description, story.correction ?? "", ...paragraphs(story), ...story.faqs.flatMap(f => [f.q, f.a])].join("\n");
const faqRefs = (story, q) => story.faqs.find(f => f.q === q).refs.map(id => story.sources.find(s => s.id === id).url);
const section = (story, id) => story.sections.find(s => s.id === id);

const T1 = slugs[0], T2D2 = slugs[1], OSA = slugs[2], KNEE = slugs[3];
const url = {
  lillyT1: "https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss",
  pubmedT1: "https://pubmed.ncbi.nlm.nih.gov/42814954/",
  triumph1: "https://clinicaltrials.gov/study/NCT05929066",
  triumph2: "https://clinicaltrials.gov/study/NCT05929079",
  triumph3: "https://clinicaltrials.gov/study/NCT05882045",
  triumph5: "https://clinicaltrials.gov/study/NCT06662383",
  fda: "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
  pubmedOsa: "https://pubmed.ncbi.nlm.nih.gov/42904878/",
  acr: "https://acrabstracts.org/abstract/retatrutide-once-weekly-for-the-treatment-of-knee-osteoarthritis-pain-and-obesity-results-from-a-68-week-phase-3-randomized-clinical-trial/",
};

test("corrected stories keep URL, publication date and image, and carry one genuine revision date", async () => {
  for (const [slug, expected] of Object.entries(stories)) {
    const [story, before] = [await load(slug), await loadBase(slug)];
    assert.equal(before.dateModified, undefined, `${slug}: base had no revision`);
    assert.equal(story.slug, slug);
    assert.equal(story.date, expected.date, `${slug}: datePublished unchanged`);
    assert.equal(story.date, before.date);
    assert.equal(story.image, expected.image, `${slug}: image unchanged`);
    assert.equal(story.image, before.image);
    assert.deepEqual(story.vials, before.vials, `${slug}: IQON placements unchanged`);
    assert.equal(story.notice, before.notice);
    assert.equal(story.title, before.title, `${slug}: title intent unchanged`);
    assert.equal(story.dateModified, expected.modified ?? corrected);
    assert.ok(Date.parse(story.dateModified) <= Date.now(), "revision is in the past");
    assert.ok(Date.parse(story.dateModified) > Date.parse(story.date), `${slug}: revision follows publication`);
    assert.match(story.correction, expected.note);
    assert.deepEqual(story.related, before.related, `${slug}: related reading unchanged`);
    assert.deepEqual(story.sections.map(s => s.id), before.sections.map(s => s.id), `${slug}: anchors stable`);
    for (const text of paragraphs(story).concat(story.faqs.map(f => f.refs.map(n => `[${n}]`).join("")))) cited(story, text);
  }
});

const additions = ["argenx-unnatural-products-peptide-discovery-deal", "what-is-retatrutide"];
const published = "2026-11-09T13:00:00.000Z";
const november10Additions = ["elastin-hydration-water-entropic-elasticity", "circular-dichroism-peptide-secondary-structure"];
const november10Published = new Date("2026-11-10T08:18:59-05:00").toISOString();
const november12Additions = ["tirzepatide-resistance-exercise-lean-mass-strength-trial", "peptide-nmr-structure-spectra-ensembles"];
const november12Published = new Date("2026-11-12T08:15:00-05:00").toISOString();
const homepagePublished = new Date("2026-11-12T08:15:00-05:00").toISOString();
const unpublishedNovember11Draft = new Date("2026-11-11T08:19:17-05:00").toISOString();
const authorizedAdditions = [...additions, ...november10Additions, ...november12Additions];

// Evaluate the real sitemap so the homepage and string-valued dates are covered too.
const sitemapEntries = async source => {
  const sitemap = (await import(`data:text/javascript;base64,${Buffer.from(transpile(source)).toString("base64")}`)).default();
  const entries = sitemap.map(({ url, lastModified }) => {
    assert.ok(url === base || url.startsWith(`${base}/`), `canonical sitemap URL: ${url}`);
    assert.ok(lastModified instanceof Date || typeof lastModified === "string", `${url}: date present`);
    return [url.slice(base.length).replace(/^\//, ""), new Date(lastModified).toISOString()];
  });
  assert.equal(new Set(entries.map(([path]) => path)).size, entries.length, "no duplicate sitemap routes");
  return Object.fromEntries(entries);
};
const sitemapSnapshots = async () => ({
  now: await sitemapEntries(fs.readFileSync(new URL("app/sitemap.ts", root), "utf8")),
  before: await sitemapEntries(execFileSync("git", ["show", `${baseCommit}:app/sitemap.ts`], { cwd: root, encoding: "utf8" })),
});
const assertSitemapPreserved = (now, before) => {
  assert.equal(Object.keys(before).length, 84, "complete historical sitemap baseline");
  assert.deepEqual(Object.keys(now).filter(path => !authorizedAdditions.includes(path)).sort(), Object.keys(before).sort(), "all historical sitemap routes preserved");
  assert.deepEqual(Object.keys(now).filter(path => !Object.hasOwn(before, path)).sort(), [...authorizedAdditions].sort(), "only authorized new routes");
  for (const path of additions) assert.equal(now[path], published, `${path}: November 9 publication date`);
  for (const path of november10Additions) assert.equal(now[path], november10Published, `${path}: November 10 publication date`);
  for (const path of november12Additions) assert.equal(now[path], november12Published, `${path}: November 12 publication date`);
  assert.equal(now[""], homepagePublished, "/: homepage November 12 content update");
  for (const [path, date] of Object.entries(now)) {
    if (november12Additions.includes(path)) assert.equal(date, november12Published, `${path}: November 12 publication`);
    else if (path === "") assert.equal(date, homepagePublished, "/: November 12 homepage update");
    else if (november10Additions.includes(path)) assert.equal(date, november10Published, `${path}: November 10 publication unchanged`);
    else if (additions.includes(path)) assert.equal(date, published, `${path}: November 9 publication unchanged`);
    else if (slugs.includes(path)) assert.equal(date, new Date(stories[path].modified ?? corrected).toISOString(), path);
    else assert.equal(date, before[path], `${path || "/"}: untouched date`);
  }
  assert.equal(now["what-is-amylin-amylin-analogs-vs-glp-1"], "2026-10-08T14:00:12.000Z");
};

test("sitemap preserves historical corrections and permits only the November 9, 10 and 12 additions and current homepage date", async () => {
  const { now, before } = await sitemapSnapshots();
  assertSitemapPreserved(now, before);
});

test("sitemap guard rejects missing routes, unauthorized additions and changed dates", async () => {
  const { now, before } = await sitemapSnapshots();
  assertSitemapPreserved(now, before);
  const cases = [
    ["missing historical route", draft => { delete draft["what-is-amylin-amylin-analogs-vs-glp-1"]; }],
    ["changed historical date", draft => { draft["what-is-amylin-amylin-analogs-vs-glp-1"] = published; }],
    ["changed historical string date", draft => { draft["how-to-read-peptide-coa"] = published; }],
    ["extra unknown route", draft => { draft["synthetic-unauthorized-route"] = published; }],
    ["missing authorized addition", draft => { delete draft[additions[0]]; }],
    ["changed addition date", draft => { draft[additions[1]] = before[""]; }],
    ["missing November 10 addition", draft => { delete draft[november10Additions[0]]; }],
    ["changed November 10 date", draft => { draft[november10Additions[1]] = published; }],
    ["missing November 12 addition", draft => { delete draft[november12Additions[0]]; }],
    ["changed November 12 date", draft => { draft[november12Additions[1]] = november10Published; }],
    ["November 12 addition left at unpublished November 11 draft time", draft => { draft[november12Additions[0]] = unpublishedNovember11Draft; }],
    ["missing homepage", draft => { delete draft[""]; }],
    ["changed homepage date", draft => { draft[""] = before[""]; }],
    ["homepage left at unpublished November 11 draft time", draft => { draft[""] = unpublishedNovember11Draft; }],
    ["changed correction date", draft => { draft[T1] = published; }],
  ];
  for (const [name, mutate] of cases) {
    const draft = { ...now };
    mutate(draft);
    assert.throws(() => assertSitemapPreserved(draft, before), { code: "ERR_ASSERTION" }, name);
  }
});

test("TRIUMPH-1 labels each analysis with the estimand its source uses", async () => {
  const story = await load(T1);
  const text = allText(story);
  assert.doesNotMatch(text, /treatment-estimand results|include participants who stopped/i);
  const results = section(story, "what-the-doses-produced").paragraphs.find(p => p.includes("28.3 percent"));
  assert.match(results, /change from baseline/);
  assert.doesNotMatch(results, /change versus placebo/);
  const efficacy = sentences(results).find(s => /efficacy-estimand/.test(s));
  assert.match(efficacy, /remained on their assigned intervention without starting prohibited weight management treatments/);
  assert.deepEqual(cited(story, efficacy), [url.lillyT1], "efficacy label keeps the Lilly release citation");
  const regimen = sentences(results).filter(s => /treatment-regimen|17\.6|23\.7|25\.0/.test(s)).join(" ");
  for (const value of ["17.6", "23.7", "25.0", "3.9"]) assert.ok(regimen.includes(value), value);
  assert.ok(cited(story, regimen).includes(url.pubmedT1), "treatment-regimen values cite the primary publication");
  assert.match(story.lead, /45\.3 percent[^.]*efficacy-estimand/);
  assert.match(story.description, /28\.3%[^.]*efficacy estimand/);
  assert.doesNotMatch(story.description, /sponsor release omits|still running/);
});

test("TRIUMPH-1 records the September 29 publication without claiming the full paper was read", async () => {
  const story = await load(T1);
  const pub = story.sources.find(s => s.url === url.pubmedT1);
  assert.equal(pub.doi, "10.1056/NEJMoa2604169");
  const stage = section(story, "what-this-establishes").paragraphs.at(-1);
  assert.doesNotMatch(stage, /not a peer-reviewed publication|eventually published/);
  const published = sentences(stage).find(s => /September 29, 2026/.test(s));
  assert.match(published, /New England Journal of Medicine/);
  assert.match(stage, /May 21, 2026 press release\.\[1\]/);
  assert.ok(cited(story, stage).includes(url.pubmedT1));
  assert.match(stage, /abstract/);
  assert.doesNotMatch(allText(story), /full paper (shows|reports)|supplement (shows|reports)|we (read|reviewed) the (full|complete)/i);
  assert.match(story.correction, /September 29 primary publication/);
});

test("TRIUMPH-1 cites the right registry for TRIUMPH-2, -3 and -5 and states TRIUMPH-3's real endpoint", async () => {
  const story = await load(T1);
  assert.equal(story.sources.find(s => s.url === url.triumph3).title, "ClinicalTrials.gov NCT05882045: TRIUMPH-3");
  assert.equal(story.sources.filter(s => s.url === url.triumph5).length, 1);
  for (const text of paragraphs(story)) {
    for (const sentence of sentences(text)) {
      const refs = cited(story, sentence);
      if (/TRIUMPH-3/.test(sentence)) {
        assert.match(sentence, /primary endpoint is weight change, not cardiovascular events/);
        assert.deepEqual(refs, [url.triumph3]);
      }
      if (/^TRIUMPH-2 studies/.test(sentence)) assert.deepEqual(refs, [url.triumph2]);
    }
  }
  // Each TRIUMPH-5 mention is supported by the next citation group, which must be its own registry.
  for (const text of paragraphs(story)) {
    for (const match of text.matchAll(/TRIUMPH-5/g)) {
      const group = text.slice(match.index).match(/(?:\[\d+\])+/)?.[0];
      assert.ok(group, `TRIUMPH-5 mention is cited: ${text.slice(match.index, match.index + 80)}`);
      const refs = cited(story, group);
      assert.ok(refs.includes(url.triumph5) && !refs.includes(url.triumph3), `TRIUMPH-5 citation: ${group}`);
    }
  }
  assert.ok(faqRefs(story, "Can the 28.3% weight loss figure be compared directly to tirzepatide's Phase 3 results?").includes(url.triumph5));
  assert.ok(!faqRefs(story, "Can the 28.3% weight loss figure be compared directly to tirzepatide's Phase 3 results?").includes(url.triumph3));
  assert.match(story.faqs.find(f => /tirzepatide/.test(f.q)).a, /registry record checked for this update has no results posted/);
  assert.ok(faqRefs(story, "Who were the TRIUMPH-1 participants?").includes(url.triumph2));
  assert.doesNotMatch(allText(story), /cardiovascular outcomes\)|TRIUMPH-\d, pending|is evaluating retatrutide specifically/);
});

test("TRIUMPH-1 uses FDA's status statement instead of legal-availability, filing or dosing advice", async () => {
  const story = await load(T1);
  const text = allText(story);
  assert.doesNotMatch(text, /head-to-head FDA approval|legally available only|NDA submission|regulatory filing would include|data required for a regulatory filing/i);
  assert.doesNotMatch(text, /clinical planning|titration schedule may suit|cannot tolerate aggressive escalation|up to five escalation steps/i);
  assert.doesNotMatch(text, /not been a prominent signal in semaglutide|not seen at comparable rates with semaglutide/);
  const faq = story.faqs.find(f => f.q === "Is retatrutide FDA-approved?");
  assert.match(faq.a, /^No\. FDA states that retatrutide is not a component of an approved drug and has not been found safe and effective for any condition\./);
  assert.deepEqual(faqRefs(story, faq.q), [url.fda]);
  const status = sentences(section(story, "what-this-establishes").paragraphs[1]).find(s => /^FDA states/.test(s));
  assert.deepEqual(cited(story, status), [url.fda]);
  // Dose facts stay as study context: the escalation steps are attributed to the trial design.
  assert.match(section(story, "what-this-establishes").paragraphs[0], /Each assigned dose was reached through four-week steps that started at 2 mg\.\[1\]\[2\]/);
});

test("TRANSCEND-T2D-2 states the real A1C values for each arm without a class-wide inference", async () => {
  const story = await load(T2D2);
  const text = allText(story);
  assert.doesNotMatch(text, /either drug|class of medicine was already delivered|pharmacy shelf|most experimental peptides stop/);
  const gap = section(story, "a1c-difference").paragraphs[1];
  assert.match(gap, /2\.2 percentage points in both retatrutide groups and 1\.8 percentage points with semaglutide/);
  assert.match(gap, /efficacy-estimand/);
  assert.match(gap, /rather than the benefit of the drug class as a whole/);
  assert.ok(cited(story, gap).includes("https://investor.lilly.com/news-releases/news-release-details/lillys-retatrutide-delivered-greater-a1c-reduction-and-more"));
  // The body, lead and description must agree on each arm's reduction.
  for (const copy of [story.description, story.lead, section(story, "numbers-dose-by-dose").paragraphs[0], gap]) {
    assert.match(copy, /2\.2/); assert.match(copy, /1\.8/);
  }
  assert.doesNotMatch(gap, /\b\d+(\.\d+)? ?mg\b/, "no dose recommendation added");
});

test("sleep apnea story distinguishes unreported threshold results from untested outcomes", async () => {
  const story = await load(OSA);
  const text = allText(story);
  assert.doesNotMatch(text, /did not test whether the treated groups reached/);
  const p = section(story, "what-they-found").paragraphs.at(-1);
  assert.match(p, /group-average changes in the apnea-hypopnea index, not the proportion of participants reaching a remission threshold/);
  assert.match(p, /index below 5 or an index of 5 to 14 with an Epworth Sleepiness Scale score of 10 or less/);
  assert.match(p, /abstract does not give those threshold results/);
  assert.deepEqual(cited(story, p).sort(), [url.pubmedOsa, url.triumph1, url.triumph2].sort());
  assert.doesNotMatch(text, /\d+(\.\d+)? ?(percent|%)[^.]*remission|remission rate (was|of)/i, "no invented remission rate");
});

test("sleep apnea primary analysis is described as the hybrid estimand in body and FAQ", async () => {
  const story = await load(OSA);
  assert.doesNotMatch(allText(story), /under continued treatment/);
  const hybrid = /hypothetical strategy for (participants with )?events suggesting treatment failure (with|and) a treatment-policy strategy for other events/;
  assert.match(section(story, "two-answers").paragraphs.at(-1), hybrid);
  assert.match(story.faqs.find(f => f.q === "Why does the paper report two different sets of results?").a, hybrid);
  assert.doesNotMatch(section(story, "two-answers").paragraphs.at(-1), /asks what happened to everyone/);
});

test("knee story drops expired future framing without asserting the session happened", async () => {
  const [story, before] = [await load(KNEE), await loadBase(KNEE)];
  const text = allText(story);
  assert.doesNotMatch(text, /still ahead|conference discussion offers/);
  assert.doesNotMatch(text, /was presented|presentation (took place|occurred)|presented on November 8|at the session|attendees/i);
  const s = section(story, "next-presentation");
  assert.equal(s.title, "The conference abstract");
  assert.match(s.paragraphs[0], /^The American College of Rheumatology scheduled abstract 0871 for November 8\./);
  assert.deepEqual(cited(story, s.paragraphs[0]), [url.acr]);
  assert.equal(story.lead, before.lead, "historical November 5 framing kept");
  assert.deepEqual(story.sources, before.sources);
  assert.match(story.correction, /No new trial results were added/);
});

test("corrections leave untouched passages byte-identical to the base", async () => {
  const changed = {
    [T1]: new Set(["what-the-doses-produced", "adverse-events", "mechanism-difference", "what-this-establishes"]),
    [T2D2]: new Set(["a1c-difference", "what-to-watch", "numbers-dose-by-dose", "tolerability"]),
    [OSA]: new Set(["what-they-found", "two-answers"]),
    [KNEE]: new Set(["next-presentation"]),
  };
  for (const slug of slugs) {
    const [story, before] = [await load(slug), await loadBase(slug)];
    for (const [i, s] of story.sections.entries()) if (!changed[slug].has(s.id)) assert.deepEqual(s, before.sections[i], `${slug}#${s.id}`);
    for (const [i, s] of story.sections.entries()) if (changed[slug].has(s.id)) assert.notDeepEqual(s, before.sections[i], `${slug}#${s.id} changed`);
  }
});

const built = slug => fs.readFileSync(new URL(`${slug}.html`, output), "utf8");
const graph = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .flatMap(([, json]) => { const node = JSON.parse(json); return node["@graph"] ?? [node]; });
const decode = s => s.replace(/<!-- -->/g, "").replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

test("built pages render the dated note, revision time and matching schema", { skip: !fs.existsSync(output) && "run npm run build first" }, async () => {
  for (const slug of slugs) {
    const [story, html] = [await load(slug), built(slug)];
    const modified = stories[slug].modified ?? corrected;
    const revisionDay = stories[slug].modified ? 9 : 8;
    const article = graph(html).find(n => n["@id"] === `${base}/${slug}#article`);
    assert.equal(article.datePublished, stories[slug].date);
    assert.equal(article.dateModified, modified);
    assert.equal(article.headline, story.title);
    assert.deepEqual(article.citation, story.sources.map(s => s.url));
    assert.match(html, new RegExp(`<meta property="article:published_time" content="${stories[slug].date}"`));
    assert.match(html, new RegExp(`<meta property="article:modified_time" content="${modified}"`));
    const notes = [...html.matchAll(/<p data-correction-note[^>]*>([\s\S]*?)<\/p>/g)].map(([, t]) => decode(t));
    assert.deepEqual(notes, [story.correction], `${slug}: one visible note`);
    assert.match(html, new RegExp(`Revised <time dateTime="${modified}">November ${revisionDay}, 2026</time>`));
    const faq = graph(html).find(n => n["@type"] === "FAQPage");
    const visible = [...html.matchAll(/<h3 id="question-\d+">([\s\S]*?)<\/h3><p data-faq-answer="[^"]*">([\s\S]*?)<\/p>/g)].map(([, q, a]) => [decode(q), decode(a)]);
    assert.deepEqual(visible, story.faqs.map(f => [f.q, f.a]), `${slug}: visible FAQ`);
    if (story.faqs.length) assert.deepEqual(faq.mainEntity.map(e => [e.name, e.acceptedAnswer.text]), visible, `${slug}: FAQ schema equals visible`);
    else assert.equal(faq, undefined);
    const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)].map(([tag]) => tag.match(/href="([^"]+)"/)?.[1]);
    assert.deepEqual(canonical, [`${base}/${slug}`]);
  }
  const sitemap = fs.readFileSync(new URL("sitemap.xml.body", output), "utf8");
  for (const slug of slugs) assert.match(sitemap, new RegExp(`<loc>${base}/${slug}</loc>\\s*<lastmod>${new Date(stories[slug].modified ?? corrected).toISOString()}</lastmod>`));
  const amylin = built("what-is-amylin-amylin-analogs-vs-glp-1");
  assert.doesNotMatch(amylin, /data-correction-note|Revised <time/);
  assert.equal(graph(amylin).find(n => n.datePublished).dateModified, "2026-10-08T10:00:12-04:00");
});

const assertSafetyNarrowed = (triumph, transcend) => {
  const safety = [
    ...section(triumph, "adverse-events").paragraphs,
    triumph.faqs.find(f => /dysesthesia/.test(f.q)).a,
    ...section(transcend, "tolerability").paragraphs,
  ].join("\n");
  assert.doesNotMatch(safety, /\d+(?:\.\d+)?\s*(?:%|percent)/i, "no safety rates without verified interval and population");
  assert.doesNotMatch(safety, /background rather than a drug effect/i, "no unsupported infection attribution");
  assert.doesNotMatch(allText(transcend), /Every number in the release uses the efficacy estimand/);
  assert.match(section(transcend, "tolerability").paragraphs[0], /more common in both retatrutide groups than in the semaglutide group/, "comparative discontinuation signal retained");
  for (const risk of ["nausea", "diarrhea", "constipation", "vomiting", "dysesthesia", "infections", "stopped treatment"])
    assert.match(safety, new RegExp(risk, "i"), `clinically meaningful risk remains: ${risk}`);
};

test("AUDIT-01 retains qualitative risks and limits estimands to efficacy", async () => {
  const a = await load(T1), b = await load(T2D2);
  assertSafetyNarrowed(a, b);
  for (const mutate of [
    x => { section(x, "adverse-events").paragraphs[0] += " Nausea occurred in 42.4 percent."; },
    x => { x.faqs.find(f => /dysesthesia/.test(f.q)).a += " It occurred in 12.5%."; },
    x => { section(x, "adverse-events").paragraphs[2] += " This is background rather than a drug effect."; },
  ]) {
    const draft = structuredClone(a); mutate(draft);
    assert.throws(() => assertSafetyNarrowed(draft, b), { code: "ERR_ASSERTION" });
  }
  const softened = structuredClone(b);
  section(softened, "tolerability").paragraphs[0] = "Adverse events led participants to stop in both groups.";
  assert.throws(() => assertSafetyNarrowed(a, softened), { code: "ERR_ASSERTION" });
  const draft = structuredClone(b);
  section(draft, "numbers-dose-by-dose").paragraphs[3] = "Every number in the release uses the efficacy estimand.";
  assert.throws(() => assertSafetyNarrowed(a, draft), { code: "ERR_ASSERTION" });
});

const mechanismUrl = "https://www.nature.com/articles/s41421-024-00700-0";
const surmountUrl = "https://pubmed.ncbi.nlm.nih.gov/35658024/";
const assertCitationCorrections = (triumph, transcend) => {
  const mechanism = section(triumph, "mechanism-difference").paragraphs;
  for (const phrase of ["Tirzepatide adds GIP.", "In obese mice,"]) {
    const claim = sentences(mechanism[0]).find(s => s.includes(phrase));
    assert.ok(claim, phrase);
    assert.deepEqual(cited(triumph, claim), [mechanismUrl], `${phrase} resolves to the mechanism paper`);
  }
  assert.match(mechanism[0], /preclinical finding/);
  assert.match(mechanism[0], /does not establish how much that mechanism contributes to weight loss in people/);
  assert.doesNotMatch(mechanism[0], /rather than primarily reducing food intake/);
  const design = sentences(mechanism[1]).find(s => /SURMOUNT-1/.test(s));
  assert.match(design, /separate groups of participants/);
  assert.match(design, /80 and 72 weeks, respectively/);
  assert.deepEqual(cited(triumph, design), [url.lillyT1, surmountUrl]);
  assert.equal(triumph.sources.find(s => s.url === mechanismUrl)?.doi, "10.1038/s41421-024-00700-0");
  assert.equal(triumph.sources.find(s => s.url === surmountUrl)?.doi, "10.1056/NEJMoa2206038");
  const faq = triumph.faqs.find(f => /28.3%/.test(f.q));
  assert.match(faq.a, /separate studies with different participants/);
  assert.match(faq.a, /80 and 72 weeks, respectively/);
  assert.doesNotMatch(mechanism[1] + faq.a, /different entry criteria|different comparator arms|under different.*study designs/);
  assert.deepEqual(faqRefs(triumph, faq.q), [url.lillyT1, surmountUrl, url.triumph5]);
  const estimand = transcend.faqs.find(f => /efficacy estimand/.test(f.q));
  assert.match(estimand.a, /including discontinuation/);
  assert.doesNotMatch(estimand.a, /usually|typically|smaller differences|larger differences|will (?:reduce|increase)/i);
  assert.match(triumph.correction, /mechanism and SURMOUNT-1 citations/);
  assert.match(transcend.correction, /unsupported generalization in the estimand FAQ/);
};

test("citation corrections bind mechanism and trial duration claims to the exact appropriate sources", async () => {
  assertCitationCorrections(await load(T1), await load(T2D2));
});

test("citation guards reject registry rebinding, unsupported comparisons and estimand direction", async () => {
  const c = await load(T1), d = await load(T2D2);
  const cases = [
    ["mechanism rebound to registry", x => { section(x, "mechanism-difference").paragraphs[0] = section(x, "mechanism-difference").paragraphs[0].replaceAll("[8]", "[2]"); }],
    ["SURMOUNT rebound to registry", x => { section(x, "mechanism-difference").paragraphs[1] = section(x, "mechanism-difference").paragraphs[1].replace("[9]", "[2]"); }],
    ["FAQ rebound to registry", x => { x.faqs.find(f => /28.3%/.test(f.q)).refs = [1, 2, 4]; }],
    ["source URL swapped", x => { x.sources.find(s => s.url === mechanismUrl).url = url.triumph1; }],
    ["incorrect SURMOUNT DOI", x => { x.sources.find(s => s.url === surmountUrl).doi = "10.1056/NEJMoa2604169"; }],
    ["different eligibility restored", x => { section(x, "mechanism-difference").paragraphs[1] += " They had different entry criteria."; }],
    ["exclusive food intake contrast", x => { section(x, "mechanism-difference").paragraphs[0] += " This acts rather than primarily reducing food intake."; }],
  ];
  for (const [label, mutate] of cases) {
    const draft = structuredClone(c); mutate(draft);
    assert.throws(() => assertCitationCorrections(draft, d), { code: "ERR_ASSERTION" }, label);
  }
  const draft = structuredClone(d);
  draft.faqs.find(f => /efficacy estimand/.test(f.q)).a += " It usually produces smaller differences.";
  assert.throws(() => assertCitationCorrections(c, draft), { code: "ERR_ASSERTION" }, "unsupported estimand direction");
});
