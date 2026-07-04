# Rams Design DNA — Operating Standards Manual

> A reproduction-grade, operational specification of the Dieter Rams design language for screen interfaces: dashboards, data tools, statements, readers, and dense functional UI. Modeled on the rigor of a graphics standards manual — exact values, not vibes.

---

## 0. How to use this document (read first — for humans and AI)

This is a **standards manual**, not inspiration. When you build with it:

1. **Never invent values.** Every color, size, weight, and space comes from the tables here. If you reach for something not in the manual, you are doing it wrong — find the nearest sanctioned value.
2. **Default to removal.** Before adding any element, ask: *does the interface fail without it?* If not, delete it. This is the single most important rule. "Less, but better" is a build instruction, not a slogan.
3. **Hierarchy is made of size and grey, never decoration.** You may not introduce a box, shadow, gradient, or color to create emphasis. Emphasis = bigger, or darker; de-emphasis = smaller, or greyer.
4. **One accent color, used as signal.** See §1. Color is information, never garnish.
5. **The grid does the work.** Order comes from alignment and hairlines, not containers.
6. **When in doubt, consult the Ten Principles (§9)** and the DON'T list (§8). They resolve most disputes.

Apply it by dropping the token block (§10) on a wrapper and styling everything inline from `var(--…)`.

---

## 0.5 Philosophy — what we are actually doing

The rules below are downstream of four convictions. When a rule and a situation conflict, return here; intent outranks the letter of the spec.

1. **Form must explain function — instantly.** The goal of every screen is that, at a glance, the user knows exactly what it is and exactly how to use it. Jony Ive, on Rams's Braun objects: at a glance *"you knew exactly what it was and exactly how to use it."* If a layout needs a tooltip to be understood, the layout has failed. Make the structure self-evident: labels explicit, hierarchy visible, the next action obvious.

2. **Simplicity is not the absence of complexity.** *"Just removing clutter would result in uncomplicated but meaningless products."* We are not stripping things away to look minimal — we are **giving form to the essence** of the data, describing its reason for existence. A dashboard's job is to bring *order and explanation* to a problem more complex than the user could hold in their head — like Rams's rotary switch making a complex amplifier feel simple. Reduce noise; never reduce meaning.

3. **Honesty between surface and substance.** Nothing is hidden, nothing is falsely celebrated — every element sits *appropriately in the hierarchy*. Show provenance, dates, delay, uncertainty. Use the "best materials" (real data, tabular figures, true alignment), not the cheapest (fake precision, decorative charts, vanity stats).

4. **Aim for inevitability.** The mark of a resolved design is that it feels effortless and inevitable — the user cannot imagine a rational alternative. You reach it not by adding cleverness but by removing everything that isn't required, until what remains *could not be better, simpler, or clearer*. If a screen still feels "designed," keep removing.

> And: the system matters more than the flourish. Rams's body of work is coherent because the **standards** were applied consistently over decades by a team — not because any one screen was precious. Build the system (this manual), then apply it faithfully. Consistency is the aesthetic.

---

## 1. Color

Restrained, warm-neutral, near-monochrome. The system is **greyscale + one signal color**. Color carries meaning or it does not appear.

### 1.1 Core tokens (reproduction standard)

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#faf9f7` | Page background — warm off-white, never pure `#fff` |
| `--panel` | `#ffffff` | Cards / cells / instrument faces |
| `--ink` | `#191712` | Primary text, bars, active state — warm near-black, never pure `#000` |
| `--ink-2` | `#6f6c63` | Secondary text |
| `--ink-3` | `#a9a59a` | Tertiary text, labels, meta |
| `--line` | `#e7e5dd` | Hairlines, grid gaps, inactive tracks |
| `--line-2` | `#d2cfc5` | Stronger borders, structural dividers |
| `--accent` | `#1f6e43` | THE signal color — one only (here: a desaturated forest green) |
| `--neg` | `#a23a26` | Negative-data only — a muted brick red, never bright |

> **Warmth rule.** Neutrals are warm (a trace of yellow/red), never cool blue-greys. Pure black and pure white are banned — they read as cheap and harsh. The accent is *desaturated*; a saturated accent shouts, and Rams never shouts.

### 1.2 The accent is singular and meaningful

- Pick **one** accent and assign it **one** job (primary action / positive / live). Document the job. Do not let it drift into decoration.
- `--neg` is not a second accent — it is reserved exclusively for negative data (losses, down-moves, errors). It never styles a button or a heading.
- Everything else is greyscale. If a design "needs" a third color, it needs a grey or a size change instead. (The one sanctioned way to add a *coded* color system is the NYCTA layer — see the companion manual. Do not freelance it.)

### 1.3 Neutral fills (for stacked bars, categories, charts)

When you must distinguish 3–5 neutral categories, step through this ramp — never reach for hues:

```
--ink (#191712) → --accent (#1f6e43) → #8f8b80 → #bdb9ad → #d8d4ca
```

### 1.4 Selection & focus

```css
::selection { background: var(--accent); color: #fff; }
```
Focus = a 1px border darken (`--line-2` → `--ink`). No glow, no ring, no halo.

---

## 2. Typography

Classic functional grotesque — the Braun/Akzidenz lineage. Numbers are tabular so columns align down the page.

### 2.1 Family

```css
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-variant-numeric: tabular-nums;
-webkit-font-smoothing: antialiased;
```

A neo-grotesque (Helvetica Neue, Söhne, Neue Haas Grotesk, Inter as a last resort) is the only sanctioned voice. No serifs, no display faces, no rounded fonts, no monospace except where character-cell alignment is functionally required (e.g. a ticker tape or code).

### 2.2 Type scale (do not improvise sizes)

| Role | Size px | Weight | Tracking | Case |
|---|---|---|---|---|
| Hero metric / page number | 30–38 | 600 | -0.01em | — |
| Section metric / big value | 19–24 | 600 | 0 | — |
| Stat value (in a cell) | 15–20 | 600 | 0 | — |
| Body / row value | 12–14 | 500–600 | 0 | sentence |
| **Section header (label)** | 11 | **700** | **0.16em** | UPPERCASE |
| Control / nav | 10–11 | 600 | 0.11em | UPPERCASE |
| **Micro-label / meta** | 9 | 600 | **0.14em** | UPPERCASE, `--ink-3` |

### 2.3 Rules

- **Weight ceiling 600 for data.** Big numbers are 600, never 700/800. Restraint reads as confidence; heavy weights read as panic.
- **The smaller the text, the wider the tracking.** 9px labels get 0.14–0.18em; body gets 0. This is non-negotiable — it is what makes micro-labels legible and "engineered".
- **Labels are SMALL, LETTERSPACED, UPPERCASE, and grey.** A label is never the same size or color as its value.
- **One label, one value.** No redundant units, no stacked adjectives, no helper sentences where a number suffices.
- `line-height` 1.4 for body; 1.0–1.2 for large numerals.

---

## 3. Grid, space & layout

Order is the product. A strict modular grid with hairline separation is the entire aesthetic.

### 3.1 Spatial system

```
Container max-width : 1360px (wide tool) · 720px (reading/doc)
Outer padding       : 22px
Section gap         : 22–24px (margin-bottom between sections)
Cell padding        : 12–16px
Row vertical padding : 6–13px (density-dependent)
```

Use a consistent base unit (here ~ 11px) and its multiples. Don't place anything at an arbitrary offset.

### 3.2 The signature move — hairline cell grids

A grid whose **background is the line color**, with `gap:1px` and white cells, renders a precise instrument panel for free. This is the workhorse layout — use it for stat strips, KPI blocks, tiles, boards.

```html
<div style="display:grid; grid-template-columns:repeat(4,1fr);
            gap:1px; background:var(--line); border:1px solid var(--line);">
  <div style="background:var(--panel); padding:13px 16px;"> …cell… </div>
  <!-- repeat -->
</div>
```

### 3.3 Layout discipline

- **Left-align labels, right-align numbers.** Always. Right-aligned figures with fixed-width columns line up down the page.
- **Use flex/grid with `gap`** for any group of siblings — never bare inline-block + margins.
- Whitespace is structural, not cosmetic. Empty space communicates calm and order; do not "fill" it.
- A faint meta line (`9–10px --ink-3`) under data carries provenance/date/caveats — **honesty over polish** (Principle 6).

### 3.4 The cockpit pattern (for live dashboards)

Keep the critical instruments permanently in view; everything else scrolls beneath.

```html
<div style="position:sticky; top:0; z-index:50;
            background:var(--paper); border-bottom:1px solid var(--line-2);">
  <!-- masthead · navigation · vital-signs strip -->
</div>
```

Principle: show the **fewest instruments needed to operate safely**, always visible — the rest is one decision away, never sooner.

---

## 4. Components (recipes)

### 4.1 Section header
The workhorse. A 700/0.16em label over a 1px ink rule; optional right-aligned meta or action.

```html
<div style="display:flex; align-items:baseline; justify-content:space-between;
            border-bottom:1px solid var(--ink); padding-bottom:7px; margin-bottom:14px;">
  <div style="font-size:11px; letter-spacing:0.16em; font-weight:700;">SECTION NAME</div>
  <div style="font-size:10px; letter-spacing:0.1em; color:var(--ink-3); font-weight:600;">META</div>
</div>
```
Heavy divider = `1px solid var(--ink)`. Light row rule = `1px solid var(--line)`.

### 4.2 Stat cell
```html
<div style="background:var(--panel); padding:13px 16px;">
  <div style="font-size:9px; letter-spacing:0.12em; color:var(--ink-3); font-weight:600;">LABEL</div>
  <div style="font-size:20px; font-weight:600; margin-top:4px;">VALUE</div>
  <div style="font-size:10px; color:var(--ink-3); margin-top:1px;">sublabel / date</div>
</div>
```

### 4.3 Data row (label · value · delta)
Fixed-width delta column keeps signs aligned. Up → `--accent`, down → `--neg`, neutral → `--ink-3`.
```html
<div style="display:flex; align-items:baseline; justify-content:space-between;
            padding:6px 0; border-bottom:1px solid var(--line);">
  <span style="font-size:12px; font-weight:500;">Label</span>
  <span style="display:flex; align-items:baseline; gap:10px;">
    <span style="font-size:12px; font-weight:600;">1,579</span>
    <span style="font-size:11px; font-weight:600; color:var(--neg); width:54px; text-align:right;">−0.39%</span>
  </span>
</div>
```

### 4.4 Bar / meter
Flat track, solid fill, square ends. No radius, no gradient.
```html
<div style="height:6px; background:var(--line); position:relative;">
  <div style="position:absolute; inset:0 auto 0 0; width:69%; background:var(--ink);"></div>
</div>
```

### 4.5 Stacked allocation bar
```html
<div style="display:flex; height:8px; border:1px solid var(--line);">
  <div style="width:38%; background:var(--ink);"></div>
  <div style="width:27%; background:var(--accent);"></div>
  <div style="width:15%; background:#8f8b80;"></div>
</div>
```

### 4.6 Status plate (the black sign-plate)
A black tag block + body + right-aligned readout, hairline border. The one place near-black fills a large area — reserve it for genuine status.
```html
<div style="display:flex; align-items:stretch; border:1px solid var(--line-2); background:var(--panel);">
  <div style="background:var(--ink); color:var(--paper); padding:14px 20px; display:flex; align-items:center;">
    <span style="font-size:11px; letter-spacing:0.18em; font-weight:700;">STATE</span>
  </div>
  <div style="padding:11px 20px; flex:1;"> headline + sub </div>
</div>
```

### 4.7 Buttons
- **Primary:** `background:var(--ink)` (neutral) or `var(--accent)` (positive action); `color:#fff`; padding `10–14px 18–22px`; `font:11–12px/700`, `letter-spacing:0.12em`, UPPERCASE; **no radius**; hover → `opacity:0.9`.
- **Tertiary / link:** transparent, `color:var(--ink-2)`, hover → `var(--accent)`. Pair with a directional triangle, not a unicode arrow, when it implies movement.

### 4.8 Inputs
```html
<input type="range" style="width:100%; accent-color:var(--accent); height:3px;" />
```
Text fields: `border:1px solid var(--line-2); padding:11px 13px;` — flat, square, no inner shadow, no focus glow beyond a border darken.

### 4.9 Live indicator
```html
<span style="width:6px; height:6px; border-radius:50%; background:var(--accent);
             display:inline-block; animation:blink 2.4s ease-in-out infinite;"></span>
```
```css
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }
```
The **only** sanctioned animation: a slow status pulse. No slides, no fades-in-on-scroll, no parallax.

---

## 5. Iconography & ornament

- Prefer a **word** to an icon; prefer a **number** to a word. Icons only where they out-perform text (direction, play/pause, close).
- If you use icons: single-weight line or solid, geometric, on the type baseline, sized to the text. No duotone, no rounded "friendly" sets, no emoji.
- The analog-instrument motif (a thin-ruled clock face, a needle gauge) is a sanctioned flourish **when the data is genuinely temporal/analog** — used sparingly, drawn with hairlines and one accent hand.

---

## 6. Motion

**v1.1.** Motion is feedback, not entertainment — unchanged. What changed is craft: real easing curves instead of the browser default, because a flat `ease` on everything is itself a tell of an unfinished system. Framework adapted from [emilkowalski/skills](https://github.com/emilkowalski/skills) and [pbakaus/impeccable](https://github.com/pbakaus/impeccable) — credited per the steal-and-improve rule.

- **Pick the curve by what's happening**, not by habit: entering/exiting → `--ease-out` (`cubic-bezier(0.23,1,0.32,1)`); moving on screen → `--ease-in-out` (`cubic-bezier(0.77,0,0.175,1)`); hover/color → `--ease-hover` (plain `ease` is correct *here*, nowhere else).
- **Durations, tiered:** press feedback 100ms (`--t-press`), state change 150ms (`--t-state`), layout-level change 250ms (`--t-layout`). Nothing UI-facing above 300ms.
- **Buttons get press feedback:** `transform: scale(0.97)` on `:active`. A control with no press state reads as dead, regardless of how correct its hover state is.
- **Popovers scale from their trigger**, never from center — center-scale is for true modals only, which have no single trigger.
- **Never entrance from `scale(0)`.** Start at `scale(0.95)` + `opacity: 0` — nothing in the physical world disappears to nothing.
- Allowed beyond the above: the status pulse (§4.9), a value counting to its number.
- Banned everywhere: entrance choreography, scroll-triggered reveals, parallax, decorative loops, easing that bounces or "elastics", animation on a keyboard-triggered action.
- **On looking templated:** this palette (warm off-white ground, Inter) is disciplined by design, and disciplined-by-design is also what a thousand AI-generated dashboards now default to for the same reasons. The antidote isn't novelty — it's finishing the craft this manual actually asks for: real curves, real press feedback, real data, honestly shown. A generic build skips exactly these details.

---

## 7. Density

"Less, but better" ≠ "less data". It means **less noise**. Keep the data; remove the disorder.

- Group dense data into hairline cell grids and **label every cluster**.
- Right-align numbers; fixed-width figure columns.
- Demote everything that isn't the answer to `--ink-2`/`--ink-3`.
- One thousand no's for every yes: no decorative stat, no vanity metric, no icon that doesn't aid a decision.

---

## 8. DON'T (hard bans)

- ❌ Gradients, drop shadows, glows, blurs, glassmorphism.
- ❌ Rounded corners (0px; 2px maximum, and only if structurally unavoidable).
- ❌ A second free accent color. One signal color + `--neg` for losses. (Coded color = the NYCTA layer, by its rules.)
- ❌ Pure `#000` or pure `#fff`.
- ❌ Emoji, decorative icons, illustration, stock imagery.
- ❌ Font weights 700+ on data; ❌ more than one type family.
- ❌ Centering dense content; ❌ `margin:auto` heroics.
- ❌ Bold-everything. Hierarchy = size + grey.
- ❌ Inventing any value outside the scales in this manual.
- ❌ Filler — placeholder sections, dummy copy, "just to balance the layout".

---

## 9. The Ten Principles → build rules

| Rams principle | What it means in this manual |
|---|---|
| 1. Innovative | Innovate in clarity/density, not novelty for its own sake. |
| 2. Useful | Every element serves a user decision. Decorative = delete. |
| 3. Aesthetic | Beauty is order: grid, alignment, restraint. |
| 4. Understandable | The layout explains itself; labels are explicit; no mystery-meat. |
| 5. Unobtrusive | Neutral palette, quiet type. The tool recedes; the data leads. |
| 6. Honest | Show provenance, dates, caveats. Never fake precision or hide delay. |
| 7. Long-lasting | No trend finishes (no glass, no gradient-of-the-year). |
| 8. Thorough | Down to the last hairline — tabular figures, aligned columns. |
| 9. Environmentally friendly | Lightweight: inline styles, no heavy frameworks, fast paint. |
| 10. As little design as possible | **The master rule.** Less, but better. When stuck, remove. |

---

## 10. Quick-start token block

Drop on a wrapper and style everything inline from `var(--…)`:

```html
<div style="--paper:#faf9f7; --panel:#fff; --ink:#191712; --ink-2:#6f6c63;
            --ink-3:#a9a59a; --line:#e7e5dd; --line-2:#d2cfc5;
            --accent:#1f6e43; --neg:#a23a26;
            background:var(--paper); color:var(--ink);
            font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
            font-variant-numeric:tabular-nums; font-size:13px; line-height:1.42;
            -webkit-font-smoothing:antialiased;">
  …
</div>
```

```css
/* the only global rules permitted */
*{box-sizing:border-box;}
html,body{margin:0;padding:0;background:#faf9f7;}
::selection{background:#1f6e43;color:#fff;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
```

---

## 11. Adjusting the system (sanctioned knobs)

You may retune **without breaking the DNA** by changing only these:

- **Accent hue** — swap `--accent` for another *desaturated* color; keep one, keep it meaningful.
- **Neutral temperature** — shift all greys cooler/warmer together (keep them consistent; never mix warm and cool).
- **Density** — scale row padding (6px tight ↔ 14px airy) and base size (12–14px); keep the type *scale ratios* intact.
- **Container width** — 1360 (tool) / 960 (app) / 720 (doc).

Do **not** adjust: the ban list (§8), the weight ceiling, the label-tracking rule, the one-accent rule, or the no-decoration rule. Those are the DNA.

> Reference implementation: `DayTraders.dc.html`.
> For coded multi-color wayfinding (subway-style), see the companion: **`RAMS-x-NYCTA-DNA.md`**.
