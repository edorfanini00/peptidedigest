# Editorial image inspection — 114aab32e7c7a895c537a7dd87a15ca1a5825085

**Verdict: PASS.** Both served images pass photorealism, prohibited-content and caption-honesty checks.

| Image | Photorealism | Prohibited content | Caption honesty | SHA256 |
|---|---|---|---|---|
| A — advertising review desk | PASS | PASS | PASS | `a4a0b1a46c9b0a0da15d7634f531feb8409140350f722cc40d80fee98301a749` |
| B — assay bench | PASS | PASS | PASS | `c93e14b5c8b2cc9488ecb311efe0e03d559e0bf3dcaf56ba4e7ff89dda87e1ad` |

A has a sunlit wooden desk, blurred printed proof, red pencil, glasses and plain mug. B has a generic clinical analyzer and capped tube rack. Text-like marks on A's sheet and B's tube labels/background notices cannot reliably be read; neither shows identifiable brands, compounds, regulatory marks or endorsement cues. B cannot be identified as a named laboratory. The scenes are visually distinct, and the AI-generated editorial-illustration captions do not claim photographs of actual events or facilities.

**Human discrepancy:** B's far-right edge contains a clipped pale coat/top over dark lower clothing, apparently a partial standing person. No face or hand is visible; there is no evidence that this is a patient. Zero complete human/face rectangles from macOS Vision does not rule out such a clipped figure.

**Limitations:** The crop request for A's served WebP returned HTTP 402, so its detail check used a downscaled JPEG crop and the served WebP full frame. The B served WebP was reviewed both full-frame and cropped. Full-size PNG originals were not independently compared; the figure's identity and role are indeterminate.
