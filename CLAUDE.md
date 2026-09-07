# CLAUDE.md — Claude Code quick-start

> You are Claude Code. This file is loaded automatically when you `cd` into the Rams × NYCTA Design Core directory, or when the file is symlinked into a project's `.claude/` or root.

## Read in this order

0. **`ANTI-TEMPLATE.md`** — how not to look agent-generated. Read it before the DNA, not after. The DNA tells you what is correct; this tells you why correct is no longer sufficient on its own.
1. **`AGENTS.md`** — the 5-line DNA. The spine. Most of your work can be correct after this single file.
2. **`RAMS-DESIGN-DNA.md` §0** — the human + AI entry point with the philosophy and quick-start.
3. **`RAMS-x-NYCTA-DNA.md` §0** — the same for the synthesis layer. Read if your product has multiple navigable boards.
4. **`components.html`** — live component gallery. Reference, do not invent variants.
5. **`tokens.css`** — drop into any project you touch.

## How to apply

- **Before designing anything**, identify the layer: Rams-only (single view) or Rams + NYCTA (multi-board). The product's nature tells you which one.
- **Apply the colour decision tree** from `AGENTS.md` §3 before adding any colour.
- **For a cockpit / live-data surface**: lead with state visibility, controls one decision away, provenance shown. Use the Lined Glass pattern.
- **For a multi-board wayfinding system**: use the closed trunk palette, the disc, the station plate, the arrow. Enclosed colour for identity, bare colour for the one signal exception.
- **For an agent making a sub-agent**: paste the §0 system prompt into that sub-agent's context.

## Non-negotiable

- **Never invent** a design decision not in the DNA doc. If you have an idea, look it up first.
- **Never add colour** "to liven it up." The absence of colour is the normal state.
- **Never round corners** beyond 2 px (Sato mercy-radius is the only exception, and only in Play mode).
- **Never use** gradients, drop shadows, glows, blurs, glassmorphism.
- **Never centre** dense content.
- **Never** use Unicode arrows — solid greyscale triangle only.
- **Never** use white glyphs on yellow.
- **Never ship without `npx rams-nycta-audit . --strict` exiting 0.** Also run it against built output (`rams-nycta-audit dist`) — the provenance tells live in the bundle.
- **Never start CSS without a Design Read and a named reference** written into the project's `context.md` (`ANTI-TEMPLATE.md` §4).

When in doubt, remove. "Less, but better."

## The one thing this file used to get wrong

Obeying every rule here is no longer enough to look authored. The 2026 generated default *is* restraint — warm grounds, hairlines, tracked micro-labels, one muted accent. That is a description of this system. Compliance and distinction have come apart; `ANTI-TEMPLATE.md` §3 is the honest account of where they overlap and §4 is what closes the gap.
