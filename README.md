<div align="center">
  <img src="assets/logo/wzjh-logo.svg" alt="JINHONG — ZJWZJH" width="320">
  <h1>JINHONG (WZJH) Design System</h1>
  <p><strong>Wenzhou Jinhong Electric Co., Ltd.</strong> · 温州金宏电器有限公司 · <a href="https://www.wzjh.cc">www.wzjh.cc</a></p>
  <p>A token‑driven, AI‑consumable design system for building <strong>stunning, perfectly on‑brand websites and presentations</strong> — in seconds, from any AI tool.</p>
</div>

---

## What this is

A single source of truth for the JINHONG corporate design, packaged so that **any AI tool**
(Claude, ChatGPT, Gemini, Cursor, Copilot, v0, Lovable…) can read it from GitHub and generate
on‑brand web pages and slide decks without guessing. It is modeled on — and engineered to
exceed — the [Metzler UI Kit](https://metzler-de.github.io/metzler-ui-kit/).

- 🎯 **One spec, total consistency** — colors, type, spacing, components, voice, all tokenized.
- ♿ **WCAG‑AA verified** — every text color is contrast‑checked; the famous brand blue is used safely.
- 🌏 **Bilingual** — English + 简体中文 are first‑class.
- 🖥️ **Web _and_ decks** — the same tokens drive websites and 16:9 presentations.
- 🤖 **Built for AI** — RFC‑2119 rules, copy‑paste markup, DO/DON'T pairs, and a self‑check the model runs on its own output.

## Use it with an AI tool (the main use case)

Give your AI assistant these files (paste the contents, or the raw GitHub URLs):

1. **[`wzjh-design-system.md`](wzjh-design-system.md)** — the master spec (always include this).
2. **[`FOR-AI.md`](FOR-AI.md)** — strict guardrails + self‑check.
3. **[`tokens/wzjh-tokens.css`](tokens/wzjh-tokens.css)** + **[`wzjh.css`](wzjh.css)** — link or inline them.
4. For slide decks, also **[`FOR-PRESENTATIONS.md`](FOR-PRESENTATIONS.md)**.

Then prompt, e.g.:

> "Using the JINHONG (WZJH) Design System I've given you, build a product landing page for our
> LA22 Ø22mm metal pushbutton switch, in English and 简体中文. Follow `FOR-AI.md` and run its
> self‑check."

Raw URLs (live now):
```
https://raw.githubusercontent.com/patrickw7707/wzjh-design-system/main/wzjh-design-system.md
https://raw.githubusercontent.com/patrickw7707/wzjh-design-system/main/FOR-AI.md
https://raw.githubusercontent.com/patrickw7707/wzjh-design-system/main/tokens/wzjh-tokens.css
https://raw.githubusercontent.com/patrickw7707/wzjh-design-system/main/wzjh.css
```
Agents that honor the convention can also discover everything from [`llms.txt`](llms.txt).

## Use it by hand

```html
<link rel="stylesheet" href="tokens/wzjh-tokens.css">
<link rel="stylesheet" href="wzjh.css">
<a class="wzjh-btn wzjh-btn--primary" href="#">Request a quote</a>
```

## Repository structure

```
wzjh-design-system/
├─ wzjh-design-system.md     ★ master AI‑readable spec (start here)
├─ FOR-AI.md                 ★ strict generation guardrails + self‑check
├─ FOR-PRESENTATIONS.md      ★ 16:9 slide‑deck system
├─ llms.txt                  ★ machine index (llms.txt convention)
├─ wzjh.css                  component class library
├─ index.html                live showcase (GitHub Pages entry)
├─ brandbook.html            visual brand guidelines
├─ tokens/
│  ├─ wzjh-tokens.css        CSS custom properties (runtime source of truth)
│  └─ wzjh-tokens.json       W3C DTCG tokens (Figma / Style Dictionary / tooling)
├─ presentation/
│  ├─ deck.css               slide styles
│  └─ template.html          ready‑to‑edit 16:9 deck
├─ examples/                 full example pages (homepage, product, RFQ) + a slide
├─ assets/
│  ├─ logo/                  wzjh-logo.svg · wzjh-logo-white.svg · wzjh-mark.svg
│  └─ favicon.svg
├─ scripts/check-contrast.mjs   verifies the palette stays WCAG‑AA
└─ .github/workflows/pages.yml  deploys the showcase to GitHub Pages
```

## Publish (GitHub Pages)

```bash
git add -A && git commit -m "JINHONG design system v1.0.0"
git branch -M main
git remote add origin git@github.com:patrickw7707/wzjh-design-system.git
git push -u origin main
```
In **Settings → Pages**, set Source = "GitHub Actions". The included workflow publishes
`index.html` at `https://patrickw7707.github.io/wzjh-design-system/`.

## The one rule everyone forgets

> The signature brand blue **`#0BA1E2`** is beautiful but only **2.91:1** on white — it is
> **decorative only**. For text, links, and buttons use **`--wzjh-action` (`#0A6FB0`, 5.37:1)**.
> The design system enforces this for you; don't override it.

## Verify

```bash
node scripts/check-contrast.mjs   # asserts every text token passes WCAG AA
```

## License

Code, CSS, and design tokens: **MIT**. The **JINHONG / ZJWZJH trademarks, the logo artwork,
and the proprietary `zt_rol` typeface are NOT covered** and may not be redistributed — see
[`LICENSE`](LICENSE). Generated output for JINHONG by authorized parties is fine; using the
marks for other purposes is not.

---

<div align="center"><sub>JINHONG (WZJH) Design System v1.0.0 · Built to be downloaded, pasted, and obeyed.</sub></div>
