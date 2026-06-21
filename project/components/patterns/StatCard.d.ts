import * as React from 'react';

export interface StatCardProps {
  value: number | string;
  suffix?: string;
  label: string;
  /** Top-accent color. @default 'purple' */
  accent?: 'purple' | 'gold' | 'magenta';
  /** Count up from 0 on mount. @default true */
  animate?: boolean;
  style?: React.CSSProperties;
}

/**
 * Stat counter card for the homepage impact strip.
 * @startingPoint section="Patterns" subtitle="Animated impact counter" viewport="360x180"
 */
export function StatCard(props: StatCardProps): JSX.Element;
