/* Scoped local newsroom QA. Requires the existing /tmp/pwq Playwright install.
   NEWSROOM_EVIDENCE_DIR=/absolute/path node scripts/check-newsroom.mjs */
import { chromium, devices } from '/tmp/pwq/node_modules/playwright/index.mjs';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const base = process.env.NEWSROOM_BASE_URL || 'http://127.0.0.1:4327';
const out = process.env.NEWSROOM_EVIDENCE_DIR;
assert(out, 'Set NEWSROOM_EVIDENCE_DIR'); fs.mkdirSync(out,{recursive:true});
const slugs = ['empower-pharmacy-fda-warning-letter-september-2026','peptide-freeze-thaw-stability-lab-evidence'];
const stories = new Map(slugs.map(slug => {
 const source = fs.readFileSync(new URL(`../app/${slug}/story.ts`, import.meta.url), 'utf8');
 return [slug, JSON.parse(source.split('export const story = ')[1].split(' satisfies NewsroomStory;')[0])];
}));
(async()=>{
 const browser = await chromium.launch({headless:true});
 const results=[]; const internal = new Set();
 try {
 for (const width of [390,1440]) {
  const mobile = width === 390;
  const page = await browser.newPage(mobile ? {...devices['iPhone 13'], isMobile:true, hasTouch:true} : {viewport:{width,height:900},deviceScaleFactor:1,isMobile:false,hasTouch:false});
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
    const styles = selector => [...document.querySelectorAll(selector)].map(node => {
     const s=getComputedStyle(node);
     return {fontSize:s.fontSize,fontWeight:s.fontWeight,marginTop:s.marginTop,listStyle:s.listStyleType,paddingLeft:s.paddingLeft,underline:s.textDecorationLine,color:s.color};
    });
    return {
     device:{innerWidth,screenWidth:screen.width,dpr:devicePixelRatio,touchPoints:navigator.maxTouchPoints,coarse:matchMedia('(pointer: coarse)').matches,userAgent:navigator.userAgent},
     typography:article ? {h2:styles('[data-newsroom-article] > section > h2'),h3:styles('[data-faq] > h3'),paragraphs:styles('[data-newsroom-article] > section > p + p'),facts:styles('[aria-labelledby="key-facts"] > ul'),sources:styles('[aria-labelledby="sources"] > ol'),related:styles('[aria-labelledby="related"] > ul'),sourceLinks:styles('[aria-labelledby="sources"] a'),relatedLinks:styles('[aria-labelledby="related"] a')} : null,
     dateline:document.querySelector('.byline time') ? {text:document.querySelector('.byline time').textContent,dateTime:document.querySelector('.byline time').dateTime} : null,
     breadcrumb:document.querySelector('nav[aria-label="Breadcrumb"]')?.textContent,
     sourceLinks:article ? [...article.querySelectorAll('[aria-labelledby="sources"] li > a:first-child')].map(a=>a.href) : [],
     citations:article ? [...article.querySelectorAll('a[aria-label^="Source "]')].map(a=>({text:a.textContent,url:a.href,visible:!!a.getClientRects().length})) : [],
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
   assert.equal(data.device.innerWidth,width);assert.equal(data.device.coarse,mobile);assert.equal(data.device.touchPoints>0,mobile);assert.equal(data.device.dpr,mobile?3:1);
   if(mobile){assert.equal(data.device.screenWidth,390);assert.match(data.device.userAgent,/Mobile/);}
   assert.deepEqual(data.canonicals,[`https://peptidedigest.co${slug?'/'+slug:'/'}`]);
   assert(!/TB[ -]?500|BPC[ -]?157|Thymosin|tirzepatide|semaglutide/i.test(data.visible));
   data.internal.forEach(p=>internal.add(p));
   assert(html.includes('G-QLTHZGWLMP'));assert(html.includes('AW-18474455082'));assert(html.includes('iqon_shop_click'));
   if(slug){
    const story=stories.get(slug);
    const a=data.scripts.find(s=>s['@type']===(slug===slugs[0]?'NewsArticle':'Article'));
    assert(a);assert.equal(a.author['@type'],'Organization');assert.equal(a.datePublished,a.dateModified);assert.match(a.datePublished,/^2026-09-26T.*(?:Z|[+-]\d\d:\d\d)$/);
    assert.equal(a.mainEntityOfPage['@id'],data.canonicals[0]);assert.equal(a.image.width,1800);assert.equal(a.image.height,1208);
    assert.equal(data.og,a.image.url);assert.equal(data.twitter,a.image.url);assert.equal((await page.request.get(a.image.url.replace('https://peptidedigest.co',base))).status(),200);
    const crumbs=data.scripts.find(s=>s['@type']==='BreadcrumbList');
    assert.deepEqual(crumbs.itemListElement.map(c=>({name:c.name,item:c.item})),[{name:'The Peptide Digest',item:'https://peptidedigest.co'},{name:story.title,item:data.canonicals[0]}]);
    // The existing visual breadcrumb names the category, not a fabricated category route.
    assert(data.breadcrumb.includes('The Peptide Digest'));assert(data.breadcrumb.includes(story.category));
    assert.equal(data.dateline.dateTime,story.date);assert.equal(a.datePublished,story.date);
    assert.equal(data.dateline.text,new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',month:'long',day:'numeric',year:'numeric'}).format(new Date(story.date)));
    const t=data.typography;
    assert(t.h2.length>=story.sections.length);assert.equal(t.h3.length,5);assert(t.paragraphs.length>0);
    t.h2.forEach(s=>{assert.equal(s.fontSize,'25.6px');assert.equal(s.fontWeight,'700');assert.equal(s.marginTop,'44px');});
    t.h3.forEach(s=>{assert.equal(s.fontSize,'20px');assert.equal(s.fontWeight,'600');assert.equal(s.marginTop,'32px');});
    t.paragraphs.forEach(s=>assert.equal(s.marginTop,'21.6px'));
    for(const [list,marker] of [[t.facts,'disc'],[t.related,'disc'],[t.sources,'decimal']]){assert.equal(list.length,1);list.forEach(s=>{assert.equal(s.listStyle,marker);assert.equal(s.paddingLeft,'22.4px');});}
    [...t.sourceLinks,...t.relatedLinks].forEach(s=>assert(s.underline.includes('underline')));
    assert.deepEqual(data.sourceLinks,story.sources.map(s=>s.url));
    assert(data.citations.length>0);data.citations.forEach(c=>{assert(c.visible);assert.equal(c.url,story.sources.find(s=>`[${s.id}]`===c.text)?.url);});
    const faq=data.scripts.find(s=>s['@type']==='FAQPage');assert.equal(data.faqs.length,5);
    assert.deepEqual(faq.mainEntity.map(q=>({q:q.name,a:q.acceptedAnswer.text})),data.faqs);
    for(const faqNode of await page.locator('[data-faq]').all()){assert(await faqNode.isVisible());assert(await faqNode.locator('[data-faq-answer]').isVisible());}
    assert(data.inlineAfterLead);assert(data.featureAtEnd);assert.equal(data.iqonAsides.length,2);
    data.iqonAsides.forEach(a=>{assert(a.links.every(l=>l==='https://www.iqonhealth.com/shop'));assert(a.text.includes('Confirm all details directly with IQON Health before purchasing.'));assert(a.text.includes('Visit IQON Health →'));});
    assert(data.leadWords>=40&&data.leadWords<=80);assert(data.editorialWords>=1200&&data.editorialWords<=2000,`word count ${data.editorialWords}`);
    assert(!/[—–]|\w-\w/.test(data.editorial),'punctuation dashes in article prose');
    assert(data.caption.includes(slug===slugs[0]?'AI-generated editorial illustration, not a photograph of the event':'AI-generated editorial illustration of laboratory sample storage, not a photograph of a study.'));
    assert(!data.caption.includes('Photo:'));
   } else {slugs.forEach(s=>assert(data.internal.includes('/'+s)));assert(data.homeIqonFirst&4);assert(data.visible.includes('Apex Peptides Update: Federal Searches and a Temporary Closure Notice'));}
   const screenshot=path.join(out,`${slug||'home'}-${width}.png`);await page.screenshot({path:screenshot,fullPage:true});
   const top=path.join(out,`${slug||'home'}-${width}-top.png`);await page.screenshot({path:top});
   if(slug){for(const [name,selector] of [['body','[aria-labelledby="key-facts"]'],['faq','[data-faq]']]){await page.locator(selector).first().scrollIntoViewIfNeeded();await page.waitForTimeout(300);await page.screenshot({path:path.join(out,`${slug}-${width}-${name}.png`)});}}
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
