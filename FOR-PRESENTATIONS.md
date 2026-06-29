# FOR‑PRESENTATIONS · JINHONG (WZJH) slide‑deck system

Build on‑brand decks (sales, technical, trade‑show) that reuse the JINHONG tokens at slide
scale. Works as plain HTML/CSS, [reveal.js](https://revealjs.com), or print‑to‑PDF. Ready
template: [`presentation/template.html`](presentation/template.html); styles:
[`presentation/deck.css`](presentation/deck.css).

> Reads `tokens/wzjh-tokens.css`. A slide is **not** a webpage: fixed canvas, larger type,
> one idea per slide, minimal motion.

---

## 1 · Canvas & setup

- **Aspect ratio 16:9, fixed canvas 1280×720** (`--wzjh-slide-w/-h`). Don't reflow responsively; **scale** the whole canvas to fit the viewport/print page.
- Safe margins `--wzjh-slide-pad` (4rem 5rem) — never place content in the outer 5%.
- Type uses the **deck scale** (bigger): title `--wzjh-slide-display` (72px), heading `--wzjh-slide-h1` (48px), body `--wzjh-slide-body` (**24px minimum** — legible from the back of a room), caption 18px.
- Backgrounds: white (default), `--wzjh-slide-bg-band` (light gray), `--wzjh-slide-bg-dark` (navy — **title slide only**), `--wzjh-slide-bg-brand` (brand blue — sparingly).

```html
<link rel="stylesheet" href="tokens/wzjh-tokens.css">
<link rel="stylesheet" href="presentation/deck.css">
<div class="wzjh-deck">
  <section class="wzjh-slide wzjh-slide--title"> … </section>
  <section class="wzjh-slide wzjh-slide--spec"> … </section>
</div>
```

## 2 · The five core layouts

**① Title (`--title`)** — dark navy canvas, white logo, big title, blue accent rule, presenter/date.
```html
<section class="wzjh-slide wzjh-slide--title">
  <img class="wzjh-slide__logo" src="assets/logo/wzjh-logo-white.svg" alt="JINHONG">
  <h1 class="wzjh-slide__display">Wireless Energy‑Harvesting Switches</h1>
  <p class="wzjh-slide__sub">Battery‑free control for elevators &amp; robotics · 2026</p>
</section>
```

**② Section divider (`--divider`)** — light band, giant blue section number + title.
```html
<section class="wzjh-slide wzjh-slide--divider">
  <div class="wzjh-slide__num">01</div>
  <h2 class="wzjh-slide__title">Product Portfolio</h2>
</section>
```

**③ Product spec (`--spec`)** — 50/50: product‑on‑white left, mono spec table right.
```html
<section class="wzjh-slide wzjh-slide--spec">
  <div class="wzjh-slide__media"><img src="assets/product/la22.png" alt="LA22 Ø22mm pushbutton"></div>
  <div>
    <span class="wzjh-overline">Metal Pushbutton</span>
    <h2 class="wzjh-slide__title">LA22 Series</h2>
    <table class="wzjh-spec"><tbody>
      <tr><th scope="row">Diameter</th><td>Ø22mm</td></tr>
      <tr><th scope="row">Rating</th><td>10A · 24–380V</td></tr>
      <tr><th scope="row">Protection</th><td>IP67 · IK10</td></tr>
      <tr><th scope="row">Life</th><td>1,000,000 ops</td></tr>
    </tbody></table>
  </div>
</section>
```

**④ Comparison (`--compare`)** — 3 columns; JINHONG column outlined in brand blue with checks, others muted gray.

**⑤ Contact / CTA (`--cta`)** — QR + bilingual address, phone, www.wzjh.cc, large ZJWZJH wordmark watermark.

Other useful slides: **agenda** (numbered list), **stat band** (`.wzjh-stat` ×3–4), **application/market** (image + bullets), **quote** (large pull‑quote on band).

## 3 · Rules

- One message per slide. ≤ 6 bullets, ≤ 2 lines each. Headline states the takeaway.
- Body text never below 24px. Numbers/specs in mono. Real product imagery on white only.
- Motion minimal: simple cut or 200ms fade between slides; never fly‑ins, spins, or bounce.
- Color: same tokens. Brand blue for accents/fills/numbers; **`--wzjh-action` for any small text or links** even on slides. Red for danger/e‑stop only.
- Bilingual: keep EN and 简体中文 versions structurally identical; don't crush CN to fit.
- Export: print to PDF at 1280×720 (or 1920×1080 scaled). Backgrounds must print — set color‑adjust exact (the deck CSS does this).

## 4 · Self‑check (decks)

1. ☐ 16:9 fixed canvas; content inside safe margins.
2. ☐ Body ≥ 24px; one idea per slide; headline = takeaway.
3. ☐ Only the title slide is dark; bands/white elsewhere.
4. ☐ Tokens only; small text/links use `--wzjh-action`, never `#0BA1E2`.
5. ☐ Real product‑on‑white imagery; logo from SVG; only real certs.
6. ☐ Minimal motion; backgrounds print; EN + zh‑CN both fit.
