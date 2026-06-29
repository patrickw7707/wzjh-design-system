#!/usr/bin/env node
/**
 * JINHONG (WZJH) Design System — contrast guard.
 * Asserts every semantic TEXT color meets its WCAG 2.2 target, and that the
 * decorative brand blues are correctly flagged as NOT text-safe on white.
 * Run: node scripts/check-contrast.mjs   (exits non-zero on any failure)
 */

const WHITE = '#FFFFFF';
const INK = '#2F2725';

const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = (hex) => {
  const n = hex.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16), g = parseInt(n.slice(2, 4), 16), b = parseInt(n.slice(4, 6), 16);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

// [label, foreground, background, minRatio]
const MUST_PASS = [
  ['text (ink) on white',            INK,        WHITE, 4.5],
  ['text-secondary #555 on white',   '#555555',  WHITE, 4.5],
  ['text-muted #6B6B6B on white',    '#6B6B6B',  WHITE, 4.5],
  ['action #0A6FB0 on white',        '#0A6FB0',  WHITE, 4.5],
  ['action-hover #0A5680 on white',  '#0A5680',  WHITE, 4.5],
  ['danger #A3201A on white',        '#A3201A',  WHITE, 4.5],
  ['success #157A41 on white',       '#157A41',  WHITE, 4.5],
  ['warning #8A5200 on white',       '#8A5200',  WHITE, 4.5],
  ['white on primary btn #0A6FB0',   WHITE,      '#0A6FB0', 4.5],
  ['white on danger btn #A3201A',    WHITE,      '#A3201A', 4.5],
  ['white on success btn #1E874B',   WHITE,      '#1E874B', 4.5],
  ['ink on warning chip #F5A623',    INK,        '#F5A623', 4.5],
  ['white on navy #103D5B',          WHITE,      '#103D5B', 4.5],
];

// These MUST remain below 3:1 on white — proof they stay decorative-only.
const MUST_BE_DECORATIVE = [
  ['brand blue #0BA1E2', '#0BA1E2'],
  ['accent blue #35A3D9', '#35A3D9'],
];

let failed = 0;
console.log('JINHONG (WZJH) contrast guard\n' + '='.repeat(48));
for (const [label, fg, bg, min] of MUST_PASS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1 (≥${min})  ${label}`);
}
console.log('-'.repeat(48));
for (const [label, hex] of MUST_BE_DECORATIVE) {
  const r = ratio(hex, WHITE);
  const ok = r < 3.0;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1 (<3.0, text-unsafe by design)  ${label}`);
}
console.log('='.repeat(48));
if (failed) {
  console.error(`\n✗ ${failed} contrast assertion(s) failed.`);
  process.exit(1);
}
console.log('\n✓ All contrast assertions passed — palette is WCAG-AA safe.');
