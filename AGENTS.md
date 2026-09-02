# Agent Quick-Start — Dr Non's Rams × NYCTA Design Core

> If you are an AI agent (Claude Code, Cursor, Cline, Continue, Aider, Windsurf, GPT, Copilot, or any other), read this file first. The full operating standard is in [`RAMS-DESIGN-DNA.md`](RAMS-DESIGN-DNA.md) and [`RAMS-x-NYCTA-DNA.md`](RAMS-x-NYCTA-DNA.md).

This file is the **5-line spine**. Drop it into any agent's context, ask for any artifact (cockpit, board, dashboard, wayfinding system, slide, document), and produce something that looks Rams × NYCTA on the first pass.

---

## 1. The Equation

**Less, but better. Information at the point of decision. When the colour system disappears as "design" — it is finished.**

- **Function first.** Every element earns its place by serving a user decision. Decorative = delete.
- **Subtract, then subtract again.** Beauty is order: grid, alignment, restraint. As little design as possible.
- **MoMA Law.** Every edge resolves to another edge. Nothing floats. The grid is invisible because everything snaps to it.
- **Closed colour system.** A small, rigorously-coded palette: blue for identity (enclosed), red/orange for the one exception (bare), warm greys for everything else. No second free accent. No decoration colour.
- **Inevitability.** A correct route system feels like it could not be otherwise. Orange is macro. The disc is the address. The arrow is forward.

---

## 2. Two Layers — pick by the product

| Layer | When you need it | What it adds |
|---|---|---|
| **Layer 1 — Rams only** | Single-view products, documents, simple interfaces | Warm-grey field, hairline grid, square corners, one typeface, one accent. |
| **Layer 2 — NYCTA wayfinding added** | Multi-board products, navigable systems, command centres | The closed trunk palette, the disc subsystem, station plates, the arrow. Enclosed colour for identity, bare colour for signal. |

When in doubt, **start with Layer 1**. Add Layer 2 only when the product genuinely has multiple navigable boards or routes.

---

## 3. The Two Colour Systems (the central law)

**System A — Rams silence:** warm-grey field, ink for text, one accent. Used in every surface.

**System B — NYCTA wayfinding:** the closed trunk palette (a small, finite set of route colours), the disc (enclosed), the station plate (board header), the arrow. Used only when the product has navigable boards.

```
Should this be coloured?
  │
  ├─ Is it IDENTITY (which board / which route)? → blue disc or trunk colour, ENCLOSED.
  ├─ Is it DATA (live / critical / down)?         → red, BARE.
  ├─ Is it DIRECTIONAL (go here / forward)?        → greyscale triangle, never colour.
  └─ None of these?                               → no colour. Grey + size.
```

- **Blue is the law** — `#00247D` for identity, structure, sign headers. Enclosed.
- **Red is the move** — `#A8322B` (or a signal red of your choosing) for the one exception. Bare, rare, loud.
- **Warm greys are the silence** — `#f6f5f2` ground, `#191712` ink. Never pure `#000` or `#fff`.
- **Trunk palette is closed** — typically 5–7 route families. No custom shades. No 8th trunk.
- **No green** as a positive signal. The absence of red is the good news. Colour appears only at the exception.

If you add colour "to liven it up," you have failed every master. Delete it.

---

## 4. The Spines — 4 habits that make every surface land

These are the design preferences Dr Non repeats across every project. They are the taste layer below the rules.

1. **Balanced.** Every region has weight on both sides of the visual axis. The 12:00 / 6:00 / 3:00 / 9:00 positions all carry signal. A page that reads only "from top-left" is broken.
2. **Compact.** Density is the default. Show more, not less. The air is a reward, not a default. If you can fit a third column without breaking legibility, fit it.
3. **No non-sense.** Cut every word that carries no freight. Cut every shape that has no function. Cut every colour that has no signal. Hemingway is the bar.
4. **Communicative.** Every surface answers the human's next question, not the designer's portfolio. State is visible before action. Vital signs up, controls near, provenance shown.

These four are not the rules — they are the *taste* that makes the rules land.

---

## 5. Voice

Direct. True. Economical — cut every word that carries no freight, as if you paid by the word to send it. Short declaratives. Active voice. Numbers over adjectives. No academic hedging, no pretension, no complexity worn as a costume for intelligence. Directness is not boredom: build the labyrinth, then land the twist. Sound smart by being clear.

**No exclamation marks. No emoji. No "in conclusion". No "overall". No "key takeaway". No "let me walk you through".**

---

## 6. Hard Bans (non-negotiable)

- Gradients, drop shadows, glows, blurs, glassmorphism
- Rounded corners (0–2 px maximum; structurally unavoidable only)
- More than one free accent
- Pure `#000` or pure `#fff`
- Font weights 700+ on data; more than one type family on a single surface
- Centering dense content
- Entrance animations, scroll reveals, parallax; bounce/elastic easing
- Bare coloured text in content that is not data-signal red
- More than ~5 trunk families visible at once
- A unique colour per board (use trunk families + glyphs)
- Unicode arrows (`→ ➔`) or chevrons — solid triangle only
- White glyphs on `--rt-yellow` (dark glyph on yellow only)
- A 9th trunk colour, or a custom shade
- Filler, placeholder, decoration of any kind

---

## 7. The Checklist — run before shipping

```
□ LAYER: did you pick Rams-only or Rams + NYCTA by the product's nature?
□ FUNCTION: does every element serve a user decision? (decorative = delete)
□ SUBTRACTION: what did you remove? If nothing, you haven't finished.
□ BALANCED: does every region have weight on both sides of the visual axis?
□ COMPACT: is the density maximised without breaking legibility?
□ NO NON-SENSE: is every word earning its place?
□ COMMUNICATIVE: does the surface answer the human's next question?
□ MoMA LAW: does every edge resolve to another edge? Nothing floating?
□ DECISION TREE: did you run the colour decision tree before adding any colour?
□ TRUNK PALETTE: are you using a closed trunk set, not custom shades?
□ DISC: is identity enclosed (disc / plate / rule), not bare colour?
□ ARROW: is the direction a solid greyscale triangle, not Unicode?
□ STATE: are vital signs visible at all times, controls one decision away?
□ PROVENANCE: does every metric have source + date/time?
□ VOICE: direct, true, economical, unpretentious — and still alive?
□ LEGIBILITY: contrast passes? Not signalling by colour alone?
□ INEVITABILITY: could the user imagine no rational alternative?
```

---

## 8. Files in this repo

| File | What it is |
|---|---|
| `AGENTS.md` | This file. The 5-line DNA for any AI agent. |
| `CLAUDE.md` | Claude Code quick-start. Same content, agent-specific entry. |
| `USAGE.md` | Install steps for each agent type (Cursor, Cline, Aider, GPT, etc.). |
| `RAMS-DESIGN-DNA.md` | The Rams operating standard — colour, type, grid, components, ten principles. |
| `RAMS-x-NYCTA-DNA.md` | The synthesis — disc system, station plates, arrow, trunk palette, decision tree. |
| `README.md` | Public civic brief — what this is, philosophy, ethical use, how it works, how to use, license. |
| `tokens.css` | Drop-in CSS variables for both layers. |
| `components.html` | Live component gallery. |
| `quick-start.html` | Cockpit + board template. |
| `LICENSE` | MIT (original work only — see NOTICE.md for what is not relicensed). |
| `NOTICE.md` | What is licensed (original work) and what is referenced (Rams, NYCTA, etc.). |
| `docs/hero-banner.png` | Public README hero. Transit HUD in the drawing is illustration only. |
| `assets/illustrations/`, `assets/photos/`, `assets/diagrams/` | Source assets. |

---

## 9. How to consume this repo

**One-shot (any agent):** clone it into your project, point the agent at `AGENTS.md`.

**Persistent (project-wide):** copy `AGENTS.md` to your project root so the agent loads it on every session.

**Per-agent integration:** see [`USAGE.md`](USAGE.md) for the exact command for Claude Code, Cursor, Cline, Continue, Aider, Windsurf, GPT, Copilot.

---

## 10. Need depth on a specific topic?

| Question | Read |
|---|---|
| How do I pick a colour? | `RAMS-DESIGN-DNA.md` §1 (Colour) + `RAMS-x-NYCTA-DNA.md` §2–§3 (Two systems, route palette) |
| When do I add the NYCTA layer? | `RAMS-DESIGN-DNA.md` §3 (Grid) or `RAMS-x-NYCTA-DNA.md` §0 (How to use) |
| How do I build the disc / station plate? | `RAMS-x-NYCTA-DNA.md` §4–§5 |
| How do I write Rams voice? | `RAMS-DESIGN-DNA.md` §0.5 (Philosophy) |
| What's the closed trunk palette? | `RAMS-x-NYCTA-DNA.md` §3 |
| What about accessibility? | `RAMS-DESIGN-DNA.md` §3 (Grid) + §8 (Don't) — legibility rules |
| How do I extend the system? | `RAMS-DESIGN-DNA.md` §11 (Adjusting the system) |
| How do I name a colour? | `RAMS-x-NYCTA-DNA.md` §10 (Glossary) |
| What's licensed and what is not? | `LICENSE` + `NOTICE.md` |

---

*Non Arkaraprasertkul · axiom.nonarkara.org · MIT License (original work only — see NOTICE.md).*
