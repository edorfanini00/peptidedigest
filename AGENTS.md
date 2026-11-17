<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Article commercial context

Every new page and substantive article rewrite must declare its exact route in
`ARTICLE_COMMERCIAL_CONTEXT` in `lib/article-commercial-context.ts`. Use
`compound-research` with one or two explicitly relevant approved assets, or
`general-research` for a neutral laboratory guide. Never infer eligibility from
mentioned compounds or add an unrelated filler vial. Clinical and consumer-skin
coverage must use `informational` when research-material promotion would imply a
human treatment or cosmetic use. That mode replaces early/closing cards with
reading links and renders no commercial sticky bar, including server HTML.

`NewsroomArticle` resolves this metadata automatically. Legacy JSX pages must use
`ArticlePlacement` with the same slug and early/closing placement, not bypass it
with `IQONPartner`. Missing, unknown or unapproved context fails closed. Do not add
new routes to `commercial-archive.ts`: it is the frozen compatibility inventory
for unchanged archive pages, not a future publication fallback. Run `npm test`
after a production build; context tests enforce this contract. Preserve existing
shop destinations, attribution and account gates. Product matching never
establishes medical suitability, a lab result or an approved discount.
