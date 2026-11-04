# Ads-intent evergreen pages: local acceptance evidence

State: PR-ready. Builder owns feature-delivery gates 1–7 only. Independent review and release gates remain with the parent; no merge or deployment is authorized.

## Scope and implementation

- Adds `/what-are-peptides`: direct definition, peptide bonds and size conventions, natural/synthetic production, SPPS, HPLC/mass spectrometry, purity/content, RUO scope, and approved-medicine context without efficacy or administration guidance.
- Adds `/peptide-calculator`: client-only lab arithmetic with bounded positive-decimal inputs, associated labels/errors, polite live results, reset, final-volume caveat and a worked example. No compound names in the tool. No new persistence, requests, analytics or dependencies.
- Both use the existing ArticleHero/NewsroomArticle metadata, Article + FAQPage JSON-LD, matching visible FAQs, canonical/OG, related links, and unchanged IQONPartner cards twice with different starting vials. Homepage and sitemap entries added. Distinct Commons photos and adaptation credits registered.
- Retains the resumed `NewsroomArticle` optional children slot because it hosts the calculator without duplicating the article template. Existing articles pass no children and preserve their markup.
- Retains package scripts for tests/types; adds `npm test` for the two test files. No dependency/lockfile changes.
- Full lint initially exposed pre-existing errors. `IQONLink` replaces `any` with a local type; its transpiled JavaScript was compared with origin/main and is byte-for-byte identical. ESLint excludes only historical `reports/copy-review/before/**` snapshots, not application source.
- `vercel.json` disables automatic deployment for this exact feature branch only. Other branches retain Vercel defaults. This is necessary because the connected Git integration otherwise creates preview deployments on push.

## Tests exercised

| Check | Result |
| --- | --- |
| `npm run build` | PASS, Next.js 16.3.6; 77 generated pages |
| `npm run lint` | PASS, zero errors/warnings after the scoped baseline fixes |
| `npm run typecheck` | PASS (`tsc --noEmit`) |
| `npm test` | PASS, 42 tests, zero failed/skipped: 40 math/input tests and 2 page-contract tests |
| `git diff --check` | PASS |
| 5 mg / 2 mL / 250 mcg | 2.5 mg/mL; 2,500 mcg/mL; 0.1 mL; 100 µL; 20 aliquots |
| Browser edits | Changing values recomputes; invalid values remove stale results; excess aliquot rejected; fractional remainder rounds complete count down |
| Browser accessibility checks | Explicit labels, linked range/error text, `aria-invalid`, polite live status; normal Tab order and Enter reset verified |
| Built `next start`, Playwright from `/tmp/pwq` | Both routes and home return 200 at 390px and 1440px; no horizontal overflow, broken images or page errors |
| SEO/rendered structure | One H1, one exact canonical, correct OG URL; Article and FAQPage parsed; schema answers equal visible answers; two big cards with early placement verified |
| New-route raw HTML exclusions | Zero matches for the requested full banned-term regex on both routes, including scripts/attributes |
| Sitewide regression | All 73 sitemap URLs return 200 with one exact route canonical; zero excluded-compound matches in raw HTML, decoded links, JSON-LD and parsed visible text |
| SlopMonster, actual served HTML | Explainer **5/5**, calculator **4/5**; calculator flags two self-answering question patterns. Question headings/visible FAQ are intentional requirements. No score override used. |

The page-contract test was run before the pages existed and failed for missing stories. A desktop input-alignment test reproduced the wrapped-label offset, then passed after reserving two lines for desktop labels. Existing math RED/GREEN logs from the resumed work are retained.

## Reproduction and evidence

Worktree: `/Users/edorfanini/Projects/peptidedigest-ads-20261103`

Private evidence directory: `/Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/`

```sh
npm run build
npm run lint
npm run typecheck
npm test
npm run start -- --port 3127 --hostname 127.0.0.1
# Separate terminal, using installed Playwright at /tmp/pwq:
node /Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/browser-qa.mjs
python3 /Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/audit.py
python3 /tmp/peptide-slopmonster/tools/deslop.py /Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/what-are-peptides.html
python3 /tmp/peptide-slopmonster/tools/deslop.py /Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/peptide-calculator.html
```

Logs in that directory: `build.txt`, `lint.txt`, `types.txt`, `tests.txt`, `browser-qa.json`, `browser-qa.txt`, `sitewide-scan.json`, `audit.txt`, `slop-what-are-peptides.txt`, `slop-peptide-calculator.txt`, `pages-red.txt`, `alignment-red.txt`. SlopMonster returns exit 1 below 5/5, including the accepted 4/5 calculator result.

Phone screenshots, copied below for PR review:

- `what-are-peptides-390.png`
- `peptide-calculator-390.png`
- `peptide-calculator-tool-full-390.png` (350px component inside the 390px viewport)
- `peptide-calculator-tool-full-1440.png` (desktop component)

The evidence directory also includes full-page screenshots for both routes at both widths and home captures. No image substitution was used. External requests were blocked during browser QA so existing analytics did not receive local test traffic; all local images loaded normally.

## Gate 6 self-review

Reviewed all changed application files against the requested scope and current origin/main `325bfd8d9bd0fdfd92bbae65b4cdac4b6296cce0`. No shared offer, layout, live ad, backend, dependency, credential or existing article content changes. Final origin/main check was unchanged. Sources were actually opened from retained captures or live downloads; the retrieved ledger preserves IDs and verbatim evidence. Paragraph-to-source maps and complete drafts are saved privately. No invented interviews or experimental results.

Editorial pass: the definition comes first; sequence leads into synthesis, then measurements, then intended use. The size-boundary paragraph identifies the textbook and regulatory conventions instead of presenting either as universal. The calculator explains final volume beside its inputs and distinguishes mathematical aliquots from complete portions. Both conclude their editorial explanation before the final offer. No mid-sentence em dashes in new stories.

## Limitations and release notes

- This is a local build, not independent editorial/safety approval, clinical validation, an Ads-policy approval or production verification. The existing commercial cards/sticky bar remain unchanged; wording alone cannot guarantee advertising eligibility.
- The build retains the pre-existing Next.js middleware-to-proxy deprecation warning. Migrating middleware is outside this feature.
- Optional molarity is intentionally omitted. Software input bounds do not certify real-world preparation or equipment suitability. No screen-reader session or physical-device testing was performed; accessibility evidence is semantic/keyboard/browser-based.
- The IUPAC primary definition was bot-blocked even after recovery attempts. The calculator cites the actually opened secondary mass-concentration explanation for the definition/final-volume distinction and NIST for prefix conversions. It does not pretend that IUPAC was opened.
- The bundled citation verifier truncates URLs containing parentheses, producing false URL mismatches for LibreTexts and Wikipedia even in its own plain rendering. That failure is not called a PASS. An independent structured check verifies exact source IDs/URLs (including parentheses), matching source blocks and evidence for every cited source; `audit.txt` records its PASS.
- No migrations or environment variables. Rollback is a revert of the feature commit. Do not merge/deploy until independent gates pass. Remove or deliberately revise the feature-branch deployment opt-out only when a preview is authorized.
