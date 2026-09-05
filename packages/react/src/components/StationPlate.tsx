import { type HTMLAttributes, type ReactNode } from 'react';
import { Disc } from './Disc';

export type TrunkColor = 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'yellow' | 'grey' | 'brown';

export interface StationPlateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Trunk color. Drives the disc fill. */
  trunk: TrunkColor;
  /** Station / board name. Rendered uppercase. */
  name: string;
  /** Optional second line (district, board subtitle). */
  district?: string;
  /** Right-side meta (timestamp, status). */
  meta?: ReactNode;
  /** When true, render in the closed-plate wayfinding form. */
  wayfinding?: boolean;
}

/**
 * StationPlate — the NYCTA wayfinding header. A trunk-coloured disc
 * on the left, the station name in caps, an optional district
 * sub-line, and right-side meta.
 *
 * This is the "address" of a board. The disc is enclosed color;
 * the text is paper-on-disc when the disc is dark, ink-on-disc
 * when the disc is light (yellow).
 *
 * Use once per board. The wayfinding mode renders the full Unimark-
 * inspired framed plate; default mode is a lighter inline form.
 *
 * @example
 *   <StationPlate trunk="blue" name="AQI MONITOR" district="Bangkok · 47 sensors" meta="14:00 ICT" />
 *   <StationPlate trunk="yellow" name="WEATHER DESK" district="Huai Khwang" wayfinding />
 */
export function StationPlate({ trunk, name, district, meta, wayfinding = false, className, ...rest }: StationPlateProps) {
  const lightTrunks: TrunkColor[] = ['yellow'];
  const isLight = lightTrunks.includes(trunk);
  const discColor = `var(--rt-${trunk})`;
  const glyphColor = isLight ? 'var(--ink)' : 'var(--paper)';

  return (
    <div
      className={['ax-station-plate', wayfinding && 'ax-station-plate--wayfinding', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <Disc size="lg" tone="identity" style={{ background: discColor, color: glyphColor }}>
        {trunk[0]?.toUpperCase()}
      </Disc>
      <div className="ax-station-plate__text">
        <div className="ax-station-plate__name">{name}</div>
        {district ? <div className="ax-station-plate__district">{district}</div> : null}
      </div>
      {meta ? <div className="ax-station-plate__meta">{meta}</div> : null}
    </div>
  );
}
