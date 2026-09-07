import { type ReactNode, type HTMLAttributes } from 'react';

export interface CockpitShellProps extends HTMLAttributes<HTMLDivElement> {
  /** TopBar (or any global header) goes here. */
  topbar?: ReactNode;
  /** Left rail — vertical strip of trunk discs for navigable boards. */
  rail?: ReactNode;
  /** Main content. Use Board / Panel inside. */
  children: ReactNode;
  /** Footer content (provenance, system status). */
  footer?: ReactNode;
}

/**
 * CockpitShell — the Rams × NYCTA command centre shell. Four
 * regions: topbar, left rail (the navigable boards, one per trunk
 * disc), main (the selected board's content), footer.
 *
 * The rail is the NYCTA trunk-line strip. Each item is a Disc or
 * TrunkBadge that activates the corresponding board.
 *
 * @example
 *   <CockpitShell
 *     topbar={<TopBar brand="…" />}
 *     rail={
 *       <Rail>
 *         <RailItem trunk="blue" name="AQI" current />
 *         <RailItem trunk="orange" name="Flood" />
 *         <RailItem trunk="green" name="Transit" />
 *       </Rail>
 *     }
 *     footer={<span>Source: GISTDA · 2026-09-06 14:00 ICT</span>}
 *   >
 *     <BoardHeader trunk="blue" title="AQI Monitor" subtitle="Bangkok" />
 *     <Board>
 *       <Panel title="Live feeds">…</Panel>
 *       <Panel title="Top movers">…</Panel>
 *     </Board>
 *   </CockpitShell>
 */
export function CockpitShell({ topbar, rail, children, footer, className, ...rest }: CockpitShellProps) {
  return (
    <div className={['ax-cockpit-shell', className].filter(Boolean).join(' ')} {...rest}>
      {topbar}
      <div className="ax-cockpit-shell__body">
        {rail ? <aside className="ax-cockpit-shell__rail">{rail}</aside> : null}
        <main className="ax-cockpit-shell__main">{children}</main>
      </div>
      {footer ? <footer className="ax-cockpit-shell__foot">{footer}</footer> : null}
    </div>
  );
}

export interface RailProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Rail — vertical strip of trunk discs. Children are typically RailItem. */
export function Rail({ children, className, ...rest }: RailProps) {
  return (
    <div className={['ax-rail', className].filter(Boolean).join(' ')} role="navigation" aria-label="Boards" {...rest}>
      {children}
    </div>
  );
}

export interface RailItemProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Trunk color. */
  trunk: TrunkColor;
  /** Board name (short). */
  name: string;
  /** Active state. */
  current?: boolean;
}

/** RailItem — a single button in the rail. The trunk disc is the address. */
export function RailItem({ trunk, name, current = false, className, ...rest }: RailItemProps) {
  return (
    <button
      type="button"
      className={['ax-rail-item', current && 'ax-rail-item--current', className].filter(Boolean).join(' ')}
      aria-current={current ? 'true' : undefined}
      title={name}
      {...rest}
    >
      <span
        className="ax-rail-item__disc"
        style={{ background: `var(--rt-${trunk})` }}
        aria-hidden="true"
      />
      <span className="ax-rail-item__name">{name}</span>
    </button>
  );
}
