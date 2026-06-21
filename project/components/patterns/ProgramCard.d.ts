import * as React from 'react';

export interface ProgramMeta {
  icon?: React.ReactNode;
  text: string;
}

export interface ProgramCardProps {
  image?: string;
  title: string;
  description?: string;
  /** Maps to Badge tone. @default 'open' */
  status?: 'open' | 'soon' | 'closed' | 'info';
  statusLabel?: string;
  meta?: ProgramMeta[];
  ctaLabel?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}

/**
 * Programme card: photo, status badge, title, meta rows and CTA. Hover lifts.
 * @startingPoint section="Patterns" subtitle="Programme card with status + CTA" viewport="380x440"
 */
export function ProgramCard(props: ProgramCardProps): JSX.Element;
