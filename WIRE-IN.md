# Wire-In — drop Rams × NYCTA into a project in 5 minutes

This is the operational story for any product that wants the full Rams × NYCTA design system (Layer 2 — multi-board command centre, with the closed trunk palette, the disc subsystem, and the station plate).

If your product is a single view, you only need Layer 1 (Rams alone). The components for that are the same as [Axiom Design Core's](../Axiom-Design-Core/WIRE-IN.md). For multi-board products, this is the wire-in.

## 1. Install

```bash
pnpm add @rams-nycta/core-react
pnpm add -D @rams-nycta/tailwind-preset @rams-nycta/audit
```

## 2. Import the stylesheet

```tsx
import '@rams-nycta/core-react/styles.css';
```

## 3. Wire the Tailwind preset

```js
// tailwind.config.js
import nyctaPreset from '@rams-nycta/tailwind-preset';

export default {
  presets: [nyctaPreset],
  content: ['./src/**/*.{ts,tsx,html}'],
};
```

The preset exposes the **closed 8-trunk palette** as Tailwind colors (`trunk-blue`, `trunk-orange`, `trunk-green`, `trunk-red`, `trunk-purple`, `trunk-yellow`, `trunk-grey`, `trunk-brown`) and removes the hard-banned utilities.

## 4. Run the audit

```bash
npx rams-nycta-audit ./apps/web --strict
```

The NYCTA audit has one extra rule on top of the Axiom bans: it catches a 9th trunk color. If you write `--rt-magenta`, the audit blocks you.

## 5. Use the NYCTA-specific components

The product has multiple navigable boards. Each board is identified by a trunk color. The rail (left sidebar) is the trunk-line strip; the main area is the selected board.

```tsx
import {
  CockpitShell,
  Rail,
  RailItem,
  BoardHeader,
  StationPlate,
  TrunkBadge,
  Disc,
  Chip,
  Board,
  Panel,
  Row,
  StatCell,
} from '@rams-nycta/core-react';

export function App() {
  return (
    <CockpitShell
      topbar={
        <TopBar
          brand={<><Disc>A</Disc> Axiom</>}
          links={[...]}
          right={<Chip dot variant="signal">6 APIs down</Chip>}
        />
      }
      rail={
        <Rail>
          <RailItem trunk="blue" name="AQI" current />
          <RailItem trunk="orange" name="Flood" />
          <RailItem trunk="green" name="Transit" />
          <RailItem trunk="purple" name="Energy" />
          <RailItem trunk="yellow" name="Weather" />
        </Rail>
      }
      footer={<span>Source: GISTDA · 2026-09-06 14:00 ICT</span>}
    >
      <BoardHeader
        trunk="blue"
        title="AQI Monitor"
        subtitle="Bangkok · 47 sensors"
        right={<Chip dot variant="signal">3 critical</Chip>}
      />
      <Board>
        <Panel title="Live feeds" meta="47 active">
          <Row k="PM2.5 — Bangkok" v={42} d="-3" />
          <Row k="NO2 — Bangkok" v={28} d="+1" />
        </Panel>
        <Panel title="Top movers">
          <Row k="AAPL" v={187.42} d="+1.4%" tone="neg" />
        </Panel>
      </Board>
    </CockpitShell>
  );
}
```

## NYCTA-specific components

| Component | What it does |
|---|---|
| `CockpitShell` | The full command-centre shell. Topbar + left rail (trunk strip) + main + footer. |
| `Rail` + `RailItem` | The left navigation rail. Each item is a trunk-disc button. |
| `StationPlate` | The header for a board — a trunk disc + name + district + meta. The "address" of a board. |
| `TrunkBadge` | A small inline trunk-color chip. For tags, legends, list rows. |
| `BoardHeader` | A composed header for a board inside a Board. Wraps StationPlate + right slot. |

All the [Axiom components](../Axiom-Design-Core/packages/react/README.md) are also exported: `Cockpit`, `TopBar`, `Disc`, `Arrow`, `Button`, `Input`, `Tab`, `Toolbar`, `Table`, `Hero`, `StatCell`, `Row`, `Panel`, `Chip`, `Legend`, `Board`.

## The closed trunk palette

The 8 trunk colors are baked into the tokens. You must use them as identifiers; you cannot invent a 9th. If you need a 9th visual channel, use **glyphs, weight, or position** — not a new color.

| Trunk | Hex | Glyph color | Suggested use |
|---|---|---|---|
| Blue | `#0039A6` | paper | The dominant route / primary board |
| Orange | `#FF6319` | paper | Cross-borough / system |
| Green | `#00853F` | paper | Outlying / parks / environmental |
| Red | `#EE352E` | paper | Critical / live alerts |
| Purple | `#B933AD` | paper | Express / special |
| Yellow | `#FCCC0A` | ink (dark) | Caution / weather |
| Grey | `#6D6E71` | paper | Local / quiet |
| Brown | `#996633` | paper | Heritage / cultural |

## When to add a 9th board

Don't. Use one of the 8 trunks, or use a glyph (square, triangle, hexagon) to differentiate within a trunk. The audit will block a 9th color.

## License note

This package is **not** an official Rams, Braun, Vitsœ, Unimark, NYCTA, or MTA product. The 1970 NYCTA Graphics Standards Manual, the official MTA wayfinding identity, and Rams/Vitsœ/Braun materials keep their own rights. This MIT grant covers only the original code and writing in this repository. See [NOTICE.md](./NOTICE.md) for the full third-party-rights statement.
