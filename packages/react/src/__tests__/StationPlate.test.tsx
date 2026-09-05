import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StationPlate } from '../components/StationPlate';
import { TrunkBadge } from '../components/TrunkBadge';

describe('StationPlate', () => {
  it('renders the disc with the trunk color', () => {
    render(<StationPlate trunk="blue" name="AQI Monitor" />);
    expect(screen.getByText('AQI Monitor')).toBeInTheDocument();
  });

  it('renders the district when provided', () => {
    render(<StationPlate trunk="orange" name="Flood" district="Bangkok" />);
    expect(screen.getByText('Bangkok')).toBeInTheDocument();
  });

  it('uses dark glyph on yellow trunk', () => {
    const { container } = render(<StationPlate trunk="yellow" name="Weather" />);
    const disc = container.querySelector('.ax-disc') as HTMLElement;
    expect(disc.style.color).toBe('var(--ink)');
  });

  it('uses paper glyph on dark trunk', () => {
    const { container } = render(<StationPlate trunk="blue" name="AQI" />);
    const disc = container.querySelector('.ax-disc') as HTMLElement;
    expect(disc.style.color).toBe('var(--paper)');
  });
});

describe('TrunkBadge', () => {
  it('renders the trunk label', () => {
    render(<TrunkBadge trunk="blue">A</TrunkBadge>);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('applies size="sm" with smaller padding', () => {
    const { container } = render(<TrunkBadge trunk="green" size="sm">7</TrunkBadge>);
    const badge = container.querySelector('.ax-trunk-badge') as HTMLElement;
    expect(badge.style.padding).toBe('1px 5px');
  });
});
