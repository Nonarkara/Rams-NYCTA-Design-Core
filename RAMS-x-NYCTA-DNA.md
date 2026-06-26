# Rams × NYCTA — Graphics & Interface Standards Manual

> The synthesis of **Dieter Rams** (restraint, honesty, "as little design as possible") and **Bob Noorda & Massimo Vignelli / Unimark International** (the 1970 *New York City Transit Authority Graphics Standards Manual*). A coded color-and-wayfinding system layered onto a disciplined greyscale foundation — for interfaces that are dense, navigable, and calm.
>
> **Prerequisite:** this manual extends `RAMS-DESIGN-DNA.md`. Everything there (greyscale tokens, type scale, hairline grids, the ban list) still holds. This document adds *only* the wayfinding layer. Read the Rams manual first.

---

## 0. How to use this document

This manual governs **one thing the Rams manual forbids: color in quantity.** It makes that color safe by making it a *system* — exactly as Unimark tamed the chaos of the subway not by removing color but by codifying it.

Operating rules for humans and AI:

1. **Two color systems, kept strictly apart** (§2). One identifies *where you are* (wayfinding); one reports *how the data is doing* (signal). They never blur.
2. **Color only ever appears enclosed** — inside a disc, a plate, or a rule of fixed meaning. Bare colored text/shapes are still banned (except the data-signal greens/reds, which are bare *by rule*).
3. **Color appears at the point of decision. Never before. Never after.** (Vignelli's Information Tree — §1.) A color that decorates rather than directs is a defect.
4. **The palette is closed** (§3). Eight trunk colors, fixed hexes. You assign meaning; you never add a ninth hue or pick a shade by eye.
5. When unsure whether to add color, run the **decision tree (§7)**. The default answer is *no* — fall back to grey + size (the Rams default).

---

## 1. Doctrine — the Information Tree

Unimark's founding principle, quoted from the 1970 manual:

> *"The passenger will be given the information or direction only at the point of decision. Never before. Never after."*

Translated to interface:

- **Surface navigation and identity only where a choice is made** — the nav bar, a board header, a row that drills in. Not sprinkled across the body "for color".
- **One decision, one cue.** Don't repeat the line-color six times on a screen; state it once, at the top (the station-identification plate), and once per choice (the nav disc).
- **Branch, don't dump.** Lead the user down a tree: domain → board → row → detail. Each level reveals only the next choice.
- This is the bridge to Rams: *information only at the point of decision* **is** *as little design as possible*, applied to wayfinding. The two masters agree.

The three NYCTA sign categories map cleanly to UI:

| NYCTA category | Interface equivalent |
|---|---|
| **Identification** (station name plate) | Board/page header — the black sign-plate + route disc (§5) |
| **Directional** (arrows leading you through) | Nav, drill-in links, the directional arrow (§6) |
| **Information** (schedules, facilities) | The data itself — tables, stats, charts (governed by the Rams manual, mono) |

---

## 2. The two color systems (the central law)

This is the most important rule in the manual. Color does exactly two jobs, and the two never overlap in form.

### 2.1 Identification color (the Vignelli layer)
- **Purpose:** wayfinding — *which content family / board am I in?*
- **Form:** always **enclosed** — a filled **disc** (circle) bearing a white glyph, or a **sign-plate** / **rule** of that color. Never a bare colored word, icon, or number in the content.
- **Palette:** the closed 8-color trunk set (§3).
- **Behaviour:** constant. A board's color never changes with its data. STATES is orange whether the market is up or down.

### 2.2 Signal color (the Rams layer)
- **Purpose:** data state — *is this value good/bad/live?*
- **Form:** always **bare** — colored text or a bare bar. `--accent` (positive/up/live) and `--neg` (negative/down). Never enclosed in a disc.
- **Palette:** exactly two, from the Rams manual.
- **Behaviour:** dynamic — it *is* the data.

### 2.3 The disambiguation rule
> **Enclosed = identity. Bare = data.**

A green disc with a "B" is the *Buys board* (identity). A bare green "+14.8%" is a *gain* (data). The enclosure is the grammar that keeps a screen full of color perfectly legible — the same trick that lets a subway map carry a dozen colors without confusion: every color is **on a bullet**, never loose.

Corollary: if identity-green and signal-green sit near each other, that's fine — they're in different *forms*. But choose an identification green distinct in value from the signal green (the route set uses a brighter `#00853F`; the data signal uses a deeper `#1f6e43`) to remove all doubt.

---

## 3. The route palette (closed set)

Eight trunk colors, after the unified MTA/Vignelli system. **These hexes are the reproduction standard — match them, never eyeball.** White glyphs sit on every disc.

| Token | Hex | Glyph text color | Canonical trunk |
|---|---|---|---|
| `--rt-blue` | `#0039A6` | `#fff` | A·C·E |
| `--rt-orange` | `#FF6319` | `#fff` | B·D·F·M |
| `--rt-green` | `#00853F` | `#fff` | 4·5·6 |
| `--rt-red` | `#EE352E` | `#fff` | 1·2·3 |
| `--rt-purple` | `#B933AD` | `#fff` | 7 |
| `--rt-yellow` | `#FCCC0A` | **`#191712`** | N·Q·R·W |
| `--rt-grey` | `#6D6E71` | `#fff` | L · shuttle |
| `--rt-brown` | `#996633` | `#fff` | J·Z |
| `--rt-ink` | `#191712` | `#fff` | hub / "home" |

> **Yellow exception:** `--rt-yellow` is the only disc that takes a **dark** glyph (`#191712`) — white on yellow fails contrast. This mirrors the manual's own legibility discipline.

### 3.1 Assigning colors — the trunk-line method

Do **not** give every board its own color. Group boards into **families** (trunks) that share a color; distinguish individual boards by their **glyph** (a single letter or number). This is precisely how the subway works — many lines, one trunk color, told apart by the bullet's letter — and it keeps the palette small and learnable.

Worked example (DayTraders, 12 boards → 5 families):

| Family (trunk) | Color | Boards (glyph) |
|---|---|---|
| Hub | `--rt-ink` ● | Desk **D** |
| External market feed | `--rt-blue` ● | Markets **M**, Live **L** |
| Macro / analysis | `--rt-orange` ● | Regime **R**, States **S**, Signals **G** |
| Your money / action | `--rt-green` ● | Buys **B**, Funds **F**, Portfolio **P**, Plan **N**, Trade **T** |
| Reference | `--rt-grey` ● | About **A** |

Rules for assignment:
- **Max ~5 families** on screen at once. More than that and color stops distinguishing.
- Choose families by **user mental model**, not by hue you like (here: *is this the outside world, my money, the analysis, or the hub?*).
- A glyph is **one character** — a letter (first letter of the board) or a number. Uppercase, 700 weight, white (or dark on yellow).
- Glyph + color is a **stable address**. Once "orange G = Signals", it never moves.

---

## 4. The disc (construction & use)

The disc is the atom of the system — Noorda's color-coded identification bullet. White glyph, solid color, perfect circle, no border, no shadow.

### 4.1 Construction
```html
<!-- standard board disc, 34px -->
<span style="width:34px; height:34px; border-radius:50%; flex:none;
             display:inline-flex; align-items:center; justify-content:center;
             font-size:16px; font-weight:700; color:#fff; background:#FF6319;">R</span>

<!-- nav disc, 19px -->
<span style="width:19px; height:19px; border-radius:50%; flex:none;
             display:inline-flex; align-items:center; justify-content:center;
             font-size:10px; font-weight:700; color:#fff; background:#0039A6;">M</span>
```

### 4.2 Sizes (use these three only)
| Context | Diameter | Glyph px |
|---|---|---|
| Nav / inline / legend | 18–20 | 10 |
| Board header / station plate | 32–36 | 15–16 |
| Hero / cover | 56–72 | 26–32 |

### 4.3 Rules
- **Always a true circle** (`border-radius:50%`), never a rounded square. (The disc is the *one* sanctioned curved shape in a system that otherwise bans radius — because it is a coded token, not decoration.)
- **Always a glyph inside.** A bare colored dot is reserved for the data-status pulse (Rams §4.9); a *coded* dot must carry its letter/number.
- **Discs are always full color**, active or not — the color is the map and must stay legible everywhere. Show active/selected state on the *label* (weight + underline), never by dimming the disc more than a hair.
- **Order is fixed and meaningful** — in any list, discs read left→right in the system's canonical order (letters then numbers, per the manual), never resorted by data.
- Never put two glyphs in one disc; never stroke it; never gradient it.

---

## 5. The station plate — board headers

Every board opens with an **identification plate**: the route disc + a code/eyebrow + the board name, closed by a **2px rule in the board's trunk color**. This is the screen's "station name sign" — it tells you, unmistakably and once, where you are.

```html
<div style="display:flex; align-items:center; justify-content:space-between;
            padding-bottom:13px; border-bottom:2px solid #FF6319; margin-bottom:20px;">
  <div style="display:flex; align-items:center; gap:13px;">
    <span style="width:34px;height:34px;border-radius:50%;flex:none;display:inline-flex;
                 align-items:center;justify-content:center;font-size:16px;font-weight:700;
                 color:#fff;background:#FF6319;">R</span>
    <div>
      <div style="font-size:9px;letter-spacing:0.18em;color:var(--ink-3);font-weight:600;">MACRO 03</div>
      <div style="font-size:22px;font-weight:600;margin-top:1px;">Regime</div>
    </div>
  </div>
  <div style="font-size:10px;color:var(--ink-3);letter-spacing:0.06em;">CONTEXT · META</div>
</div>
```

Rules:
- The **trunk-color rule** is the only place the line-color appears as a horizontal element — it is the "line" you are riding. One per board, at the header. Do **not** repeat it as colored rules inside the board (those stay `--ink`/`--line`, per Rams).
- The eyebrow is a fixed-format code (`MACRO 03`, `STATEMENT 09`) — numbered like sign nomenclature; calm, monospaced-feeling via letterspacing.
- Below the plate, the board reverts entirely to the **mono Rams system**. Color has done its one job (identification) and steps aside.

### 5.1 The black hub plate
The masthead/home identity uses `--rt-ink` (black) — the "hub station". A small black square wordmark badge (e.g. `DT`) ties the masthead to the disc family without spending a trunk color.

---

## 6. The arrow (construction & use)

Noorda's directional arrow is a **solid equilateral triangle**, not a unicode glyph (`→`), not a chevron. It means *go this way / there is more here* and appears only on directional elements.

### 6.1 Construction (CSS triangle, follows text color)
```html
<span style="display:inline-block; width:0; height:0;
             border-top:4px solid transparent; border-bottom:4px solid transparent;
             border-left:7px solid currentColor; margin-left:8px;"></span>
```
`currentColor` makes it inherit the link's color and hover (e.g. `--ink-2` → `--accent`).

### 6.2 Rules
- Use on drill-in links ("ALL MARKETS ▸"), pagination, and step-forward actions. The triangle trails the label by ~8px, vertically centered (`display:inline-flex; align-items:center` on the link).
- Point in the true direction of travel (right = forward/more, up = exit/surface, down = expand). One arrow per action.
- Single solid triangle only — no double-arrows, no outlined arrows, no rounded arrowheads.
- The arrow is greyscale by default (it's directional, not identification). It may take a trunk color **only** when it points *to* a specific board and sits beside that board's disc.

---

## 7. Decision tree — "should this be colored?"

Run top to bottom. Stop at the first match.

```
Is it DATA (a value whose state matters: up/down/live)?
   → YES: bare --accent / --neg. No disc. [Rams signal layer]   ▸ done
   → NO ↓

Is it IDENTITY (which board/family/route)?
   → YES: enclose it. Disc (glyph) or station-plate rule, trunk color from §3.   ▸ done
   → NO ↓

Is it DIRECTIONAL (go here / more)?
   → YES: greyscale arrow (§6). Color only if it points to one specific board.   ▸ done
   → NO ↓

It is none of these → it gets NO color. Use grey + size (Rams default).
```

If you ever find yourself adding color "to liven it up" or "to fill space," you have failed both masters. Delete it.

---

## 8. DON'T (this layer's bans, on top of the Rams ban list)

- ❌ A bare colored word, number, or icon in the content (that isn't the data-signal green/red). Color must be **enclosed**.
- ❌ More than ~5 trunk families visible at once.
- ❌ A unique color per board (use trunk families + glyphs instead).
- ❌ Rounded-square "discs" — circles only; and the disc is the *only* curved shape allowed.
- ❌ Repeating a board's trunk color throughout its body (header rule only; body stays mono).
- ❌ Unicode arrows (`→ ➔ »`) or chevrons where the system calls for the solid triangle.
- ❌ White glyphs on `--rt-yellow` (use dark); ❌ inventing a 9th hue or a custom shade.
- ❌ Letting identification color drift into meaning data, or signal color into identifying a board.

---

## 9. Adjusting the system (sanctioned knobs)

- **Family map** — re-group boards into different trunks for a different product; keep ≤5 families and the trunk-line method.
- **Glyphs** — letters or numbers; keep them stable once assigned.
- **Which trunks** — you may use any subset of the 8 (a 3-color product is fine and very Vignelli); never add beyond the 8.
- **Disc scale** — within the three sanctioned sizes (§4.2).
- **Plate rule weight** — 2px default; 1px for a quieter product. Keep it the trunk color.

Do **not** adjust: the two-systems law (§2), the enclosure rule, the closed palette hexes, the yellow-glyph exception, or anything in the underlying Rams ban list.

---

## 10. Glossary

| Term | Meaning |
|---|---|
| **Trunk color** | A palette color shared by a *family* of boards (e.g. orange = macro). |
| **Disc / bullet** | A filled circle + white glyph; the identification atom. |
| **Glyph** | The single letter/number inside a disc; the board's address. |
| **Station plate** | A board's header: disc + code + name + trunk-color rule. |
| **Hub** | The black (`--rt-ink`) home/identity, the central station. |
| **Signal layer** | Bare `--accent`/`--neg` data colors (the Rams two). |
| **Identification layer** | Enclosed trunk colors (the Vignelli eight). |
| **Information Tree** | Reveal a choice only at its decision point — never before, never after. |
| **The arrow** | Solid directional triangle; "go / more". |

---

## 11. Why the two systems are complementary (the thesis)

Rams gives you **silence** — a warm-grey, decoration-free field where data leads and the tool disappears. Noorda & Vignelli give you, *within that silence*, a **voice for orientation** — a small, closed, rigorously-coded set of colors that tell you exactly where you are and where to go, and say nothing else.

Neither contradicts the other because both are governed by the same law: **nothing appears that does not serve a decision.** Rams removes the decorative; Unimark codifies the necessary. Color, here, is never indulgence — it is the smallest possible amount of signage required to navigate a complex system safely. That is Rams's "less, but better" and Vignelli's "design is one of the few professions in which you are not allowed to confuse the public," meeting on the same page.

And both aim at the same feeling Jony Ive named in Rams's work: **inevitability**. A correct route system feels like it could not be otherwise — orange *is* macro, the disc *is* the address, the arrow *is* forward — so that, at a glance, the user knows exactly where they are and exactly how to move. When the color system makes itself invisible as "design" and present only as orientation, it is finished. If it still looks decorated, remove until it doesn't.

> Reference implementation: `DayTraders.dc.html` (route-disc nav, station-plate board headers, two-color-system data).
> Foundation: `RAMS-DESIGN-DNA.md`.
