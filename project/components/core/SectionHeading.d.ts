import * as React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  /** @default 'left' */
  align?: 'left' | 'center';
  /** Render on a dark/purple background (white title, gold eyebrow). */
  onDark?: boolean;
  /** Add a gold swoosh underline beneath `swooshWord`. */
  swoosh?: boolean;
  swooshWord?: string;
  style?: React.CSSProperties;
}

/** Eyebrow + uppercase Montserrat section title with optional gold swoosh. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
