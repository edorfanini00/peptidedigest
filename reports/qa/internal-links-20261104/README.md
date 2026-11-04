# Internal links to the new evergreen pages

Status: PR-ready local evidence; independent review, merge and deployment are not part of this change.

## Scope and acceptance

Base: `a2ea5cdc7dcb178ebea8cbbc59d125d6db181ba7` (`origin/main`).
Branch: `feat/internal-links-new-pages`.

Added `/what-are-peptides` and `/peptide-calculator` to the existing related-reading/coverage lists on:

- `/apex-peptides-raided-what-researchers-need-to-know`
- `/peptide-content-vs-purity-measurement`
- `/how-to-read-peptide-coa`
- `/what-does-research-use-only-mean`

Eight links total. Existing related links remain in their original order. Labels reuse the destination titles. Apex card dates match the destinations' displayed America/New_York publication date, November 3, 2026.

No article body, title, description, keywords, canonical, schema, historical date, sitemap date, image, offer or shared component was edited. No `dateModified` bump. Apex has no natural explanatory sentence about peptide chemistry or laboratory handling, so no in-text link was forced into its enforcement reporting. Its source diff is limited to related-link data, as requested.

No new factual claims or editorial rewrite: sourcing and prose-scoring gates are not applicable to the reused navigation labels. No schema, database, dependency, secret or migration changes.

## Automated results

| Command | Result |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL=https://peptidedigest.co npm run build` | Exit 0; Next.js 16.3.6; all 77 static pages generated |
| `npm run lint` | Exit 0; no findings |
| `npm run typecheck` | Exit 0 |
| `npm test` | Exit 0; 55 passed, 0 failed |
| `git diff --check` | Exit 0 |
| `npm run start -- --hostname localhost -p 3137` | Production server returned 200 |
| `node /tmp/pd-internal-links-qa.mjs` | Exit 0; summary below |

The four new regression tests were run before implementation: all four failed because the new links were absent. They now pass. The existing 51 tests remain green.

Build warning: the repository's existing `middleware` convention is deprecated in favor of `proxy`. No migration was made in this links-only PR.

## HTTP, canonical and preservation evidence

`evidence.json` records actual checks, timestamps and SHA-256 digests:

- All four edited routes and both linked destinations: HTTP 200, exactly one canonical matching the production URL.
- All 73 sitemap URLs: HTTP 200, one matching canonical, exclusion scan passes across raw HTML, parsed JSON-LD and decoded URL attributes.
- All four edited source files are byte-identical to the base outside the related-link block. SHA-256 digests before/after match.
- Compared each local rendered historical `main` against its live production counterpart after removing its related-reading container. Titles and parsed JSON-LD match exactly. Rendered HTML matches after removing only environment-dependent Vercel `dpl` query parameters and React empty text-separator comments. Source preservation checks do not normalize any historical copy.
- Both actual Next Link navigations exercised from every edited route at 390px and 1440px: 16 successful navigations, destination H1 and canonical verified.
- Eight rendered checks: no horizontal overflow, broken images or page errors. Both new links' bounding rectangles fit within each captured viewport.
- Analytics requests were blocked during local browser QA. Images were loaded normally, without substitutions. Browser captures waited for fonts, image decoding and stable scroll positioning.

### Visual evidence

The final mobile screenshots were inspected together: both new links are readable and unclipped on all four routes. The existing fixed offer bar overlaps the lower promotional card area, not the links. Desktop screenshots and geometry checks are included.

| Route | Mobile | Desktop |
| --- | --- | --- |
| Apex | [390px](apex-peptides-raided-what-researchers-need-to-know-390.png) | [1440px](apex-peptides-raided-what-researchers-need-to-know-1440.png) |
| Content vs purity | [390px](peptide-content-vs-purity-measurement-390.png) | [1440px](peptide-content-vs-purity-measurement-1440.png) |
| COA | [390px](how-to-read-peptide-coa-390.png) | [1440px](how-to-read-peptide-coa-1440.png) |
| RUO | [390px](what-does-research-use-only-mean-390.png) | [1440px](what-does-research-use-only-mean-1440.png) |

## Deployment safety and rollback

GitHub deployment history shows this repository automatically creates Vercel previews on feature pushes. `vercel.json` therefore sets `git.deploymentEnabled["feat/internal-links-new-pages"]` to `false`, following [Vercel's branch configuration documentation](https://vercel.com/docs/project-configuration/git-configuration). Unspecified branches retain their default behavior, including `main`.

Do not remove this branch-specific safeguard before pushing unless another deployment-suppression mechanism is verified. Do not merge: a future authorized merge can still trigger production deployment.

Rollback is a revert of the link additions. No migrations or stateful operations are involved. Independent current-head review remains the next gate; this report is builder QA, not approval or evidence of deployment.
