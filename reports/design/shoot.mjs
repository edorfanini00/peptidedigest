// QA screenshots: node reports/design/shoot.mjs  (requires server on :4317)
import { chromium } from "playwright";
import fs from "node:fs";

const out = "/Users/edorfanini/Projects/peptidedigest/reports/design";
const pages = {
  home: "http://localhost:4317/",
  apex: "http://localhost:4317/apex-peptides-raided-what-researchers-need-to-know",
};
const all = process.argv.includes("--all");
if (all) {
  for (const s of fs.readFileSync(`${out}/app-snapshot.txt`, "utf8").split("\n")) {
    if (s && !s.includes(".") ) pages[s] = `http://localhost:4317/${s}`;
  }
}
const browser = await chromium.launch();
const report = {};
for (const w of [390, 1440]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, isMobile: w < 500, hasTouch: w < 500 });
  const page = await ctx.newPage();
  for (const [name, url] of Object.entries(pages)) {
    const res = await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");
    report[`${name}-${w}`] = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const over = [...document.querySelectorAll("body *")].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.right > vw + 1 || r.left < -1); })
        .slice(0, 8).map(e => e.tagName + "." + String(e.className).slice(0, 60) + " right=" + Math.round(e.getBoundingClientRect().right));
      const imgs = [...document.images].map(i => ({ src: i.currentSrc.slice(-70), ok: i.complete && i.naturalWidth > 0 }));
      const p = document.querySelector(".article-body > p:nth-of-type(2)");
      return { status: 0, scrollW: document.documentElement.scrollWidth, vw, overflowing: over, nImages: imgs.length, broken: imgs.filter(i => !i.ok),
        bodyFont: p ? getComputedStyle(p).fontSize : null, measurePx: p ? Math.round(p.getBoundingClientRect().width) : null,
        charsPerLine: p ? Math.round(p.getBoundingClientRect().width / (parseFloat(getComputedStyle(p).fontSize) * 0.5)) : null };
    });
    report[`${name}-${w}`].status = res.status();
    if (!all || name === "home" || name === "apex") await page.screenshot({ path: `${out}/${name}-${w}.png`, fullPage: true });
  }
  await ctx.close();
}
await browser.close();
fs.writeFileSync(`${out}/qa-report.json`, JSON.stringify(report, null, 1));
console.log(JSON.stringify(report, null, 1));
