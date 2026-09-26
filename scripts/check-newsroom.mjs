/* Scoped local newsroom QA. Requires the existing /tmp/pwq Playwright install.
   NEWSROOM_EVIDENCE_DIR=/absolute/path node scripts/check-newsroom.mjs */
import { chromium } from '/tmp/pwq/node_modules/playwright/index.mjs';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const base = process.env.NEWSROOM_BASE_URL || 'http://127.0.0.1:4327';
const out = process.env.NEWSROOM_EVIDENCE_DIR;
assert(out, 'Set NEWSROOM_EVIDENCE_DIR'); fs.mkdirSync(out,{recursive:true});
const slugs = ['empower-pharmacy-fda-warning-letter-september-2026','peptide-freeze-thaw-stability-lab-evidence'];
(async()=>{
 const browser = await chromium.launch({headless:true});
 const results=[]; const internal = new Set();
 try {
 for (const width of [390,1440]) {
  const page = await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('console',msg=>{if(msg.type()==='error') errors.push(msg.text());});
  // Keep local previews from sending production analytics; preserve scripts in HTML.
  await page.route(/google-analytics\.com|googletagmanager\.com|googleadservices\.com|doubleclick\.net/,route=>route.fulfill({status:200,body:''}));
  for (const slug of ['',...slugs]) {
   errors.length=0;
   const response = await page.goto(`${base}/${slug}`,{waitUntil:'networkidle'});
   assert.equal(response.status(),200,slug);
   await page.evaluate(async()=>{await document.fonts.ready;for(let y=0;y<document.body.scrollHeight;y+=750){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,40));}});
   await page.waitForTimeout(700);
   await page.evaluate(()=>window.scrollTo(0,0)); await page.waitForTimeout(400);
   const html=await page.content(); fs.writeFileSync(path.join(out,`${slug||'home'}-${width}.html`),html);
   const data=await page.evaluate(()=>{
    const article=document.querySelector('[data-newsroom-article]');
    const scripts=[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s=>{const j=JSON.parse(s.textContent);return j['@graph']||[j];});
    const editorial=article ? [article.querySelector('[data-answer-lead]').innerText,...[...article.querySelectorAll(':scope > section')].filter(s=>!['sources','related'].includes(s.getAttribute('aria-labelledby'))).map(s=>s.innerText)].join(' ') : '';
    return {
     title:document.title, canonicals:[...document.querySelectorAll('link[rel="canonical"]')].map(n=>n.href),scripts,
     h1:document.querySelectorAll('h1').length,
     overflow:document.documentElement.scrollWidth>innerWidth,
     brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),
     internal:[...document.querySelectorAll('a[href^="/"]')].map(a=>a.getAttribute('href').split('#')[0]),
     faqs:[...document.querySelectorAll('[data-faq]')].map(n=>({q:n.querySelector('h3').textContent,a:n.querySelector('[data-faq-answer]').textContent})),
     iqonAsides:article?[...article.querySelectorAll(':scope > aside')].map(a=>({links:[...a.querySelectorAll('a')].map(a=>a.href),text:a.innerText})):[],
     inlineAfterLead:article?.querySelector('[data-answer-lead]')?.nextElementSibling?.tagName==='ASIDE',
     featureAtEnd:article?.lastElementChild?.tagName==='ASIDE',
     leadWords:article?.querySelector('[data-answer-lead]')?.textContent.split(/\s+/).length,
     editorialWords:editorial.trim().split(/\s+/).length,
     editorial,visible:document.body.innerText,
     missingAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.getAttribute('href').slice(1))).map(a=>a.href),
     og:document.querySelector('meta[property="og:image"]')?.content,
     twitter:document.querySelector('meta[name="twitter:image"]')?.content,
     caption:document.querySelector('.lead-figure figcaption')?.innerText,
     homeIqonFirst:!article ? document.querySelector('main > aside')?.compareDocumentPosition(document.querySelector('main > section')) : null
    };
   });
   assert.equal(data.h1,1);assert(!data.overflow,`${slug} overflow`);assert.deepEqual(data.brokenImages,[]);assert.deepEqual(errors,[]);assert.deepEqual(data.missingAnchors,[]);
   assert.deepEqual(data.canonicals,[`https://peptidedigest.co${slug?'/'+slug:'/'}`]);
   assert(!/TB[ -]?500|BPC[ -]?157|Thymosin|tirzepatide|semaglutide/i.test(data.visible));
   data.internal.forEach(p=>internal.add(p));
   assert(html.includes('G-QLTHZGWLMP'));assert(html.includes('AW-18474455082'));assert(html.includes('iqon_shop_click'));
   if(slug){
    const a=data.scripts.find(s=>s['@type']===(slug===slugs[0]?'NewsArticle':'Article'));
    assert(a);assert.equal(a.author['@type'],'Organization');assert.equal(a.datePublished,a.dateModified);assert.match(a.datePublished,/^2026-09-26T.*(?:Z|[+-]\d\d:\d\d)$/);
    assert.equal(a.mainEntityOfPage['@id'],data.canonicals[0]);assert.equal(a.image.width,1800);assert.equal(a.image.height,1208);
    assert.equal(data.og,a.image.url);assert.equal(data.twitter,a.image.url);assert.equal((await page.request.get(a.image.url.replace('https://peptidedigest.co',base))).status(),200);
    assert(data.scripts.some(s=>s['@type']==='BreadcrumbList'));
    const faq=data.scripts.find(s=>s['@type']==='FAQPage');assert.equal(data.faqs.length,5);
    assert.deepEqual(faq.mainEntity.map(q=>({q:q.name,a:q.acceptedAnswer.text})),data.faqs);
    assert(data.inlineAfterLead);assert(data.featureAtEnd);assert.equal(data.iqonAsides.length,2);
    data.iqonAsides.forEach(a=>{assert(a.links.every(l=>l==='https://www.iqonhealth.com/shop'));assert(a.text.includes('Confirm all details directly with IQON Health before purchasing.'));assert(a.text.includes('Visit IQON Health →'));});
    assert(data.leadWords>=40&&data.leadWords<=80);assert(data.editorialWords>=1200&&data.editorialWords<=2000,`word count ${data.editorialWords}`);
    assert(!/[—–]|\w-\w/.test(data.editorial),'punctuation dashes in article prose');
    assert(data.caption.includes(slug===slugs[0]?'AI-generated editorial illustration, not a photograph of the event':'AI-generated editorial illustration of laboratory sample storage, not a photograph of a study.'));
    assert(!data.caption.includes('Photo:'));
   } else {slugs.forEach(s=>assert(data.internal.includes('/'+s)));assert(data.homeIqonFirst&4);assert(data.visible.includes('Apex Peptides Update: Federal Searches and a Temporary Closure Notice'));}
   const screenshot=path.join(out,`${slug||'home'}-${width}.png`);await page.screenshot({path:screenshot,fullPage:true});
   const top=path.join(out,`${slug||'home'}-${width}-top.png`);await page.screenshot({path:top});
   results.push({...data,editorial:undefined,visible:undefined,internal:undefined,slug,width,status:response.status(),consoleErrors:[...errors],screenshot,top});
   fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(results,null,2));
  }
  await page.close();
 }
 const request=await browser.newContext();
 const sitemap=await (await request.request.get(`${base}/sitemap.xml`)).text();
 slugs.forEach(s=>assert(sitemap.includes('/'+s)));
 const routes=[...new Set([...internal,...[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname)])];
 const links=[];
 for(const route of routes){
  const r=await request.request.get(base+route);assert.equal(r.status(),200,route);
  const html=await r.text();
  const canonicals=[...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)];
  assert.equal(canonicals.length,1,`${route} singleton canonical`);
  links.push({route,status:r.status(),canonicalCount:canonicals.length});
 }
 fs.writeFileSync(path.join(out,'links.json'),JSON.stringify(links,null,2));
 console.log(JSON.stringify({pass:true,renders:results.length,internalRoutes:links.length,results:path.join(out,'results.json')}));
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
