import * as React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** @default 'open' */
  tone?: 'open' | 'soon' | 'closed' | 'info';
  style?: React.CSSProperties;
}

/** Small dot-prefixed status badge — e.g. "Applications Open". */
export function Badge(props: BadgeProps): JSX.Element;
