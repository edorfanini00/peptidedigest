"""Score actual prerendered pages with unmodified, local SlopMonster rules."""
from pathlib import Path
import importlib.util, json, re, subprocess, sys
ROOT = Path(__file__).resolve().parents[2]
REPORT = ROOT / 'reports/copy-review'
SLUGS = ['apex-peptides-raided-what-researchers-need-to-know', 'what-happened-to-apex-peptides', 'what-happened-to-peptide-sciences', 'amino-asylum-raid-what-happened', 'paradigm-peptides-prison-sentence', 'peptide-enforcement-2026', 'compliant-research-peptide-supplier']
spec = importlib.util.spec_from_file_location('deslop', '/tmp/peptide-slopmonster/tools/deslop.py')
deslop = importlib.util.module_from_spec(spec)
spec.loader.exec_module(deslop)
phase = sys.argv[1]
assert phase in ('before', 'after')
folder = REPORT / phase
folder.mkdir(exist_ok=True)
results = []
for slug in SLUGS:
    html = (ROOT / '.next/server/app' / (slug + '.html')).read_text()
    # Main includes headline, byline, article, FAQs, partner slots and related links.
    main = re.search(r'<main\b[^>]*>.*?</main>', html, re.S).group()
    (folder / (slug + '.html')).write_text(main)
    (folder / (slug + '.tsx')).write_text((ROOT / 'app' / slug / 'page.tsx').read_text())
    text = deslop.visible_text(main)
    (folder / (slug + '.txt')).write_text(text)
    hits = deslop.audit(text)
    run = subprocess.run([sys.executable, '/tmp/peptide-slopmonster/tools/deslop.py', str(folder / (slug + '.html'))], capture_output=True, text=True)
    results.append({'slug': slug, 'score': 5-sum(bool(v) for v in hits.values()), 'words': len(text.split()), 'hits': hits, 'cli_exit': run.returncode, 'cli_output': run.stdout})
(REPORT / (phase + '-scores.json')).write_text(json.dumps(results, indent=2))
for row in results:
    print(row['slug'], row['score'], row['words'], row['hits'])
assert len(results) == 7
