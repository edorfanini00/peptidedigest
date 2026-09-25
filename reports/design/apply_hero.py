#!/usr/bin/env python3
"""Wrap existing article pages in ArticleHero + article-body. Wording untouched.
Only touches the 10 article folders snapshotted in reports/design/app-snapshot.txt."""
import re, sys, pathlib

ROOT = pathlib.Path("/Users/edorfanini/Projects/peptidedigest")
MAP = {
    "apex-peptides-raided-what-researchers-need-to-know": "federalBuilding",
    "what-happened-to-apex-peptides": "warehouse",
    "peptide-enforcement-2026": "documents",
    "paradigm-peptides-prison-sentence": "courthouse",
    "amino-asylum-raid-what-happened": "shippingBox",
    "amino-asylum-raid-2026-summary": "warehouse",
    "what-happened-to-peptide-sciences": "labFlasks",
    "peptide-sciences-shutdown-market-impact": "labBeakers",
    "compliant-research-peptide-supplier": "labBeakers",
    "what-makes-a-compliant-peptide-supplier-2026": "labFlasks",
}

HEAD_RE = re.compile(
    r'<main className="max-w-2xl mx-auto px-6 py-12">\s*'
    r'<div className="flex items-center gap-2 text-xs text-gray-400 mb-8">.*?'
    r'<span className="[^"]*rounded-full[^"]*">(?P<cat>[^<]+)</span>\s*</div>\s*'
    r'<h1[^>]*>\s*(?P<title>.*?)\s*</h1>\s*'
    r'<div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">\s*(?P<meta>.*?)\s*</div>\s*'
    r'<div className="text-\[15px\] leading-relaxed space-y-5 text-gray-700">',
    re.S,
)

def dek_for(src: str) -> str | None:
    m = re.search(r'export const metadata[^=]*=\s*\{.*?description:\s*("(?:[^"\\]|\\.)*")', src, re.S)
    return m.group(1) if m else None

def clean_meta(meta: str) -> str:
    parts = re.findall(r'<time[^>]*>.*?</time>|<span>.*?</span>', meta, re.S)
    keep = [p for p in parts if p not in ("<span>·</span>", "<span>The Peptide Digest Staff</span>")]
    return "".join(keep)

changed = []
for slug, img in MAP.items():
    f = ROOT / "app" / slug / "page.tsx"
    src = f.read_text()
    if "ArticleHero" in src:
        print("skip (done)", slug); continue
    m = HEAD_RE.search(src)
    if not m:
        print("NO MATCH", slug); continue
    dek = dek_for(src)
    title = m.group("title").strip()
    hero = (
        '<main className="article-shell">\n'
        '        <ArticleHero\n'
        f'          category="{m.group("cat").strip()}"\n'
        f'          title={{<>{title}</>}}\n'
        + (f'          dek={{{dek}}}\n' if dek else '')
        + f'          meta={{<>{clean_meta(m.group("meta"))}</>}}\n'
        f'          image="{img}"\n'
        '        />\n\n'
        '        <div className="article-body">'
    )
    src = src[: m.start()] + hero + src[m.end():]
    src = src.replace(
        'import { Footer } from "@/components/Footer";',
        'import { Footer } from "@/components/Footer";\nimport { ArticleHero } from "@/components/ArticleHero";',
        1,
    )
    f.write_text(src)
    changed.append(slug)
print("changed:", changed)
