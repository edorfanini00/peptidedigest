# Ads-intent evergreen pages: FIX1 local acceptance evidence

State: **In review**. PR #37's bounded correction round follows independent review of `d172c5f5f9c15ee214662a1aa5b3fbc3aa8668d7`. This is not approval to merge or deploy; the revised head requires independent re-review.

## Findings addressed

| Review finding | Status | Change and evidence |
| --- | --- | --- |
| 1. Owner terminology | FIXED in authorized scope | Both new stories, calculator, validation errors, homepage card and related link use plain portion wording. Exact UI labels: “Amount per portion (mcg)”, “How much to draw”, “Portions per vial”. Internal names and DOM attributes also renamed. Raw served HTML of both new routes has zero `/aliquot/i` hits and zero full banned-term matches, including metadata/schema/serialized content. Visible FAQ questions and answers match FAQPage JSON-LD. |
| 2. Decimal boundaries | FIXED | Exact decimal BigInt ratios enforce ranges, compare capacity and floor the complete-portion quotient. No EPSILON promotion. Approximate display rounding stays separate. RED tests reproduced the ordinary whole-vial rejection, false extra complete portion and excessive-precision acceptance before the math change. |
| 3. Sitemap dates | FIXED | Homepage and both new routes use `2026-11-04T04:11:55Z` (November 3 in New York), the correction-session timestamp. New stories preserve publication dates and set matching `dateModified`. Historical sitemap dates and shared `now` remain untouched. Served sitemap and Article schema checked. |
| 5. Sequence reversal | FIXED | Reversal “can” change the sequence; palindromic sequences explicitly read the same both ways. |
| Parent follow-up: remove branch config | FIXED | New `vercel.json` deleted. Parent controls deployment outside this PR; no branch-specific config should land on main. |
| 4. Existing broad terminology across 33/73 routes | OUT OF SCOPE, unchanged | This is not a full-domain terminology PASS. Historical articles, including seven historical jargon-bearing lines, remain unchanged. Parent retains release-policy/process decisions. |

## Executed verification

| Check | Result |
| --- | --- |
| `npm run build` | Exit 0; Next.js 16.3.6, 77/77 static pages |
| `npm run lint` | Exit 0 |
| `npm run typecheck` | Exit 0 |
| `npm test` | Exit 0; **51 passed, 0 failed, 0 skipped** |
| RED test run | Exit 1; 51 tests, 8 failed as expected (two wording, six exact-decimal regressions); 43 passed |
| `next start` + Playwright | Both new routes and homepage at 390px touch viewport and 1440px: 6/6 HTTP 200; no horizontal overflow, broken images or page errors |
| Browser calculation | New labels; required reference example, whole-vial decimal, near-integer remainder and ordinary fractions all tested by filling actual inputs |
| Browser validation/accessibility | Invalid inputs remove stale results; exact oversized decimal rejected; ordinary Tab order, Enter reset and desktop input alignment pass |
| Served exclusions | **2/2 new routes: 0 hits**, including scripts/attributes; separate `/aliquot/i` check also 0 |
| Rendered SEO/schema | One H1 and exact canonical per new route; Article dates checked; visible FAQ questions AND answers equal schema |
| SlopMonster on served HTML | Explainer **5/5**, 1,831 visible words, exit 0; calculator **4/5**, 1,431 words, exit 1 (two intentional question-heading patterns; no override) |

Numerical outcomes verified in tests and the actual production browser:

- `5 / 2 / 250`: 2.5 mg/mL, 2,500 mcg/mL, 0.1 mL, 100 µL, **20 complete portions**.
- `1.001 / 2 / 1001`: accepted, **1 portion**, 2 mL / 2,000 µL.
- `0.001 / 1 / 0.10000000000000005`: **9 complete portions**, not 10. The approximate six-significant-figure total displays 10; the separately labeled complete count remains exactly 9.
- `0.001 / 1 / 1.0000000000000001`: rejected as larger than the entered total, despite Number() alone losing that distinction.
- `19.9999 / 2 / 1000` and `19.6 / 2 / 1000`: **19 complete portions** each. Exact 20 remains 20.

## Reproduction and evidence

Worktree: `/Users/edorfanini/Projects/peptidedigest-ads-20261103`

Evidence directory: `/Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/`

```sh
npm run build
npm run lint
npm run typecheck
npm test
npm run start -- --port 3197 --hostname 127.0.0.1
# Separate terminal:
node /Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/FIX1-browser.mjs
python3 /tmp/peptide-slopmonster/tools/deslop.py /Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/FIX1-what-are-peptides.html
python3 /tmp/peptide-slopmonster/tools/deslop.py /Users/edorfanini/.hermes/workspace/peptide-digest-ads-pages/FIX1-peptide-calculator.html
```

Saved evidence: `FIX1-build.txt`, `FIX1-lint.txt`, `FIX1-typecheck.txt`, `FIX1-tests-red.txt`, `FIX1-tests-green.txt`, `FIX1-browser.mjs`, `FIX1-browser.json`, `FIX1-browser-run.txt`, `FIX1-sitemap.xml`, `FIX1-*-rendered.txt`, `FIX1-*.html`, `FIX1-slop-*.txt`. `FIX1-RESULT.md` records the final commit/push receipt.

Refreshed screenshots copied into this report directory:

- `what-are-peptides-390.png`
- `peptide-calculator-390.png`
- `peptide-calculator-tool-full-390.png` — 350px component inside a verified 390px viewport; viewport height increased only for the full-component capture so fixed bars do not cover it.
- `peptide-calculator-tool-full-1440.png`

Third-party traffic was blocked during local QA, preventing test analytics. Local image assets loaded normally without substitution. All captures are from the new production build.

## Scope and remaining gates

- No historical article content, shared article renderer, offers, layout, live ads, backend, dependencies, credentials or migrations changed in FIX1. The optional calculator slot and baseline type/lint fixes from the original feature remain as reviewed.
- No deployment command or merge is authorized. Deleting `vercel.json` is the parent's explicit follow-up; deployment control belongs to the parent, not a branch-specific config left in main. Actual remote deployment/check observations are recorded separately after push.
- Independent review A remains the preserved audit of the old head, not an approval inherited by this fix. Historical broad-term policy, generated-image versus licensed-photo applicability, saved-post SEO mapping and final review/freeze gates remain with the parent.
- The existing middleware-to-proxy deprecation warning remains. No physical-device or screen-reader application test, Ads approval, clinical validation, ranking claim or live-production verification is asserted.
- Rollback: revert the scoped fix commit for these corrections, or revert the feature for full removal. No data migration or environment change.
