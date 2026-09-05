import { type HTMLAttributes, type ReactNode } from 'react';
import type { TrunkColor } from './StationPlate';

export interface TrunkBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Trunk color. */
  trunk: TrunkColor;
  /** Short label (route letter, station code). 1–3 chars recommended. */
  children: ReactNode;
  /** Size variant. Default 'md'. */
  size?: 'sm' | 'md';
}

/**
 * TrunkBadge — a small trunk-coloured chip for inline identity marks.
 *
 * Use in legends, lists, and inline tags. The disc (TrunkBadge with
 * children + enclosed) is the larger cousin — use the disc when the
 * mark is the address, the badge when the mark is a tag.
 *
 * @example
 *   <TrunkBadge trunk="blue">A</TrunkBadge>
 *   <TrunkBadge trunk="orange" size="sm">7</TrunkBadge>
 */
export function TrunkBadge({ trunk, children, size = 'md', className, ...rest }: TrunkBadgeProps) {
  const lightTrunks: TrunkColor[] = ['yellow'];
  const isLight = lightTrunks.includes(trunk);
  const style = {
    background: `var(--rt-${trunk})`,
    color: isLight ? 'var(--ink)' : 'var(--paper)',
    borderColor: `var(--rt-${trunk})`,
    padding: size === 'sm' ? '1px 5px' : '2px 8px',
    fontSize: size === 'sm' ? 'var(--t-micro)' : 'var(--t-label)',
  };
  return (
    <span
      className={['ax-trunk-badge', className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    >
      {children}
    </span>
  );
}
