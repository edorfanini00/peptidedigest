# Calculator local QA

This change is local and PR-ready. It has not been pushed or deployed. The parent owns two independent reviews of the committed head and subsequent release approval.

## Reproduce

Use Node 20+ and the locked dependencies. Run `npm ci`, `npm run build`, `npm test`, `npm run lint`, `npm run typecheck`, and `git diff --check`. Start the production server with `npm run start -- -p 4873` after checking that port is free.

Browser test: Playwright is pinned as a development dependency. Install with `PLAYWRIGHT_SKIP_BROWSER_GC=1 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci`, then use installed Google Chrome:

```sh
npm run test:calculator:browser
```

An optional `PLAYWRIGHT_MODULE` can select another installation for diagnostics. `BASE_URL` defaults to `http://localhost:4873`; `EVIDENCE_DIR` defaults to `/tmp/pd-calculator-browser`. `BROWSER_CHANNEL` defaults to `chrome`. The test intercepts external requests only inside its QA browser so synthetic calculator activity does not reach production analytics. All page code and local images are served normally.

The browser suite exercises real input, click, select and keyboard handlers, captures first viewport/full page/populated results at 360/390/430/1440, verifies image decoding, hidden/stale results, extreme decimals, supply ceiling, equations, DOM Tab order, visible focus, uncovered focused controls, touch sizes, CTA hrefs, canonical and console errors. Six initial unit tests and the empty-state browser assertion failed against the old implementation. Existing tests remain intact.

Full evidence and reports: `/Users/edorfanini/.hermes/runtime/pd-calculator-20261105/RESULT.md` and `PARITY.md`.

## Source and asset provenance

Compared release worktree `/Users/edorfanini/IQONAPP/mobile-135` at `77849dac82ea9ce2a57a689a908125222ffe2721`; its calculator source last changed at `b1435421cd10ef4cf12f08eb7435f225498d3160`. Calculator/math source matches remote release `de8fee7183ddb10fe0e16044f05858f49a5b251e`. The root app checkout is older and its calculator is dirty; it is not the release reference. Release `app.json` has a pre-existing uncommitted build-number change, outside the compared files. No app source was edited.

`public/iqonic/app-icon.png` is the existing release app icon, resized from 1024px to 256px using `sips -Z 256`; original SHA-256 `de9c661026787a01904240ada58860dbb42b8f0f0315ee5613aa382a75d7a96c`. It is an IQON-owned asset, not generated artwork. IQONIC's public site and Apple's lookup both identify App Store ID 6765689488; the public version at inspection was 1.3.4, distinct from the local 1.3.5 release worktree.

## Intentional scope differences

The website keeps laboratory math and user-entered target quantities. It does not copy the app's named compound catalog, predefined quantity tiers, administration guidance, schedules, syringe visualization or Add to Protocol integration. The optional supply estimator takes a total portion count and assumes each complete portion comes from a single vial, without pooling remainders. It uses ceiling(total needed / floor(portions per vial)), which can differ from the app's continuous-mass supply estimate.

The tool and IQONIC banner precede the supporting article hero. Both existing IQON Labs offer cards remain in the article; the first still follows its lead and the second remains at the end. The sticky offer, BOGO20 hrefs, source citations, related reading, canonical and schema remain. Editorial wording changes only describe the new input choices, optional example, final-volume requirement and input limits.
