# Changelog

All notable changes to the JINHONG (WZJH) Design System are documented here.
This project adheres to [Semantic Versioning](https://semver.org/). AI consumers can read
the `version` in `tokens/wzjh-tokens.json` (`$metadata.version`) to detect a stale cache.

## [1.0.0] — 2026-06-29

### Added — first production release
- **Tokens** — `tokens/wzjh-tokens.css` (runtime source of truth) and `tokens/wzjh-tokens.json`
  (W3C DTCG mirror). Three layers: primitives → semantic aliases → component tokens.
- **Color system** — one coherent blue ramp anchored on the authentic brand blue `#0BA1E2`,
  warm neutral ramp tuned to the `#2F2725` ink, plus danger/success/warning/info status colors.
  Every text token verified ≥ WCAG AA; brand blue formally designated decorative-only.
- **Component library** — `wzjh.css`: buttons, header/nav, footer, product cards, dense spec
  tables, certification badges, status indicators, RFQ/contact forms, alerts, breadcrumbs,
  stats/trust band, blueprint hero pattern, layout/container, utilities.
- **Master spec** — `wzjh-design-system.md` (RFC-2119 rules, copy-paste markup, DO/DON'T pairs,
  bilingual + accessibility rules, self-check).
- **Guardrails** — `FOR-AI.md` (strict generation rules + self-check) and `llms.txt` index.
- **Presentations** — `FOR-PRESENTATIONS.md`, `presentation/deck.css`, `presentation/template.html`
  (fixed 16:9 canvas, five core slide layouts).
- **Brand assets** — recreated logo set (`assets/logo/*.svg`) and favicon.
- **Showcase & examples** — `index.html`, `brandbook.html`, and `examples/` pages.
- **Tooling** — `scripts/check-contrast.mjs` and a GitHub Pages deploy workflow.

### Notes
- Light theme only for web (no dark mode); decks have a dark title-slide variant.
- Trademarks, logo artwork, and the proprietary `zt_rol` font are excluded from the MIT license.
