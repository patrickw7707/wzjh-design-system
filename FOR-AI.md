# FOR‑AI · JINHONG (WZJH) generation guardrails

Paste this file into your AI tool (Claude, ChatGPT, Gemini, Cursor, Copilot, v0…) when you
ask it to build any JINHONG page, section, component, or slide. Follow every rule exactly.
**Do not invent values. Do not skip sections. Do not use custom fonts or external libraries.**

Full reference: [`wzjh-design-system.md`](wzjh-design-system.md). Tokens: [`tokens/wzjh-tokens.css`](tokens/wzjh-tokens.css). Decks: [`FOR-PRESENTATIONS.md`](FOR-PRESENTATIONS.md).

---

## 1 · Always do this first

```html
<link rel="stylesheet" href="tokens/wzjh-tokens.css"><!-- variables  -->
<link rel="stylesheet" href="wzjh.css">              <!-- components -->
```
For a single‑file deliverable, inline both files verbatim inside one `<style>`. Never change values.

## 2 · Color — the rules that matter most

- **`#0BA1E2` (brand blue) and `#35A3D9` (accent) are decorative only.** They fail WCAG on white (2.91:1 / 2.84:1). **NEVER** use them for text, links, button labels, icons-with-meaning, or small UI. Use them for fills, logo, large graphics, icon strokes.
- **Interactive = `--wzjh-action` (`#0A6FB0`, 5.37:1).** Links, primary buttons, focus rings, small UI text on white.
- **Text = `--wzjh-text` (`#2F2725`).** Secondary `--wzjh-text-secondary`. Never `--wzjh-neutral-500` for body.
- **`--wzjh-danger` (`#A3201A`) = danger / e‑stop / error only.** Never promos or decoration.
- **Never write a raw hex/rgb/hsl** in your CSS. Only `var(--wzjh-*)`.

## 3 · Type

- One family: `font-family: var(--wzjh-font-sans);`. **Never** `@import` Google Fonts or set another family.
- Sizes come from the scale only: 12 · 14 · 16 · 18 · 20 · 24 · 30 · 36 · 48 (rem). **Forbidden:** 10, 11, 13, 15, 17, 19, 22, 28, 32 px or any off‑scale value.
- Headings weight 700. Body 400. Mono (`var(--wzjh-font-mono)`) for specs, part numbers, parameters.
- CJK: looser line‑height, zero letter‑spacing, no uppercase, never shrunk. (Tokens handle this via `:lang(zh)` — just set `lang`.)

## 4 · Units & layout

- `rem` for type, spacing, layout. **`px` allowed only** for 1px hairline borders and fixed physical sizes.
- Wrap content in `.wzjh-container`; full‑bleed backgrounds on the outer `<section>`.
- Named breakpoints only (sm 480 / md 768 / lg 1024 / xl 1280). No arbitrary `max-width: 900px`.
- Light theme only for websites. **No dark mode.** No CSS that inverts the palette.

## 5 · Components

- Use the markup in `wzjh-design-system.md` §7 and the `.wzjh-*` classes. Don't rebuild a button from scratch.
- One primary action per region. Buttons are sharp (`--wzjh-radius`, 4px) — **never pill‑shaped**.
- Spec tables are dense mono parameter rows — never vague marketing cards.
- New component? It **MAY** be created, but it **MUST** use semantic/component tokens (declare new `--wzjh-<component>-*` tokens), reuse the type scale, and pass the self‑check.

## 6 · Imagery & brand assets

- **Never** generate, redraw, recolor, or distort the logo. Use `assets/logo/*.svg`.
- **Never** hallucinate product photos or invent model numbers/certifications. Use provided assets, or a neutral 4:3 (product) / 16:9 (hero) placeholder.
- Aesthetic: white + light‑gray bands, restrained blue accent, sharp corners, real product‑on‑white shots, optional `.wzjh-blueprint` technical grid. **No** SaaS gradients, glows, glassmorphism, decorative blobs, or stock‑abstract 3D.

## 7 · Voice

Authoritative, precise, plain. Data over adjectives. No exclamation marks. Brand = **JINHONG** (caps).
Units exact and unspaced: `IP67`, `24V`, `10A`, `Ø22mm`, `1NO+1NC`. Support EN + 简体中文 equally.

## 8 · Accessibility (non‑negotiable)

Visible `:focus-visible` on every control · hit targets ≥ 44px · `alt` on images · `aria-label` on icon buttons · `<th scope>` on tables · `<label for>`↔`id` on inputs · status by dot **and** word, never color alone.

---

## 9 · Self‑check before returning output (run every item)

1. ☐ Zero raw hex/rgb in CSS — only `var(--wzjh-*)`.
2. ☐ No `#0BA1E2`/`#35A3D9` as text/link/small‑label.
3. ☐ Interactive uses `--wzjh-action`; one primary per region; buttons sharp, not pills.
4. ☐ Font family `var(--wzjh-font-sans)`; every size on the scale; headings 700.
5. ☐ Body `--wzjh-text` on `--wzjh-surface`; secondary tokens for muted text.
6. ☐ `rem` units (px only for 1px borders); `.wzjh-container`; alternating white/`--surface-subtle` bands.
7. ☐ `:focus-visible` everywhere; targets ≥ 44px; alt/aria/labels present.
8. ☐ EN **and** zh‑CN both render without overflow; CJK leading looser; no negative tracking.
9. ☐ Logo from SVG; real/placeholder imagery; only real certifications; red = danger only.
10. ☐ Light theme; no Google Fonts; no gradients/blobs; voice precise, no `!`.

If any box is unchecked, fix it before you present the result. When a value you need is not
defined in the design system, **ask the user — do not invent it.**

## 10 · Common failure modes (observed) — explicitly avoid

- Using the pretty brand blue for body links → unreadable. (Use `--wzjh-action`.)
- "Modernizing" with gradients/rounded pills → off‑brand SaaS look. (Stay flat, sharp, industrial.)
- Importing a font "that looks similar" → breaks the system. (Use the stack as‑is.)
- Generating a fake switch render or a CE badge the product lacks → never do this.
- Treating a slide deck like a scrolling webpage → use `FOR-PRESENTATIONS.md` and the fixed canvas.
- Making Chinese smaller than English to fit → resize the container, not the text.
