import { type HTMLAttributes, type ReactNode } from 'react';
import { StationPlate, type TrunkColor } from './StationPlate';

export interface BoardHeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Trunk for the disc. */
  trunk: TrunkColor;
  /** Board title. */
  title: string;
  /** Optional sub-line. */
  subtitle?: string;
  /** Right-side actions / status. */
  right?: ReactNode;
  /** When true, render the framed wayfinding plate. */
  wayfinding?: boolean;
}

/**
 * BoardHeader — the top header of a single board inside a multi-board
 * command centre. Composes StationPlate with a right-aligned action
 * region. Sits at the top of a <Board> child.
 *
 * @example
 *   <Board>
 *     <section>
 *       <BoardHeader trunk="blue" title="AQI Monitor" subtitle="Bangkok · 47 sensors" right={<Chip dot variant="signal">3 critical</Chip>} />
 *       <Panel>...</Panel>
 *     </section>
 *   </Board>
 */
export function BoardHeader({ trunk, title, subtitle, right, wayfinding = false, className, ...rest }: BoardHeaderProps) {
  return (
    <header className={['ax-board-header', className].filter(Boolean).join(' ')} {...rest}>
      <StationPlate trunk={trunk} name={title} district={subtitle} wayfinding={wayfinding} />
      {right ? <div className="ax-board-header__right">{right}</div> : null}
    </header>
  );
}
