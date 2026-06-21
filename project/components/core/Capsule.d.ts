import * as React from 'react';

export interface CapsuleProps {
  children: React.ReactNode;
  /** @default 'purple' */
  tone?: 'purple' | 'purple-soft' | 'gold' | 'magenta' | 'outline' | 'outline-ink';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Signature pill chip for dates, time, location and status labels. */
export function Capsule(props: CapsuleProps): JSX.Element;
