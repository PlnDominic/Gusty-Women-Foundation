import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'gold' | 'magenta' | 'on-dark' | 'outline-light' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Pill-shaped call-to-action button for Gutsy Women Foundation.
 * @startingPoint section="Core" subtitle="Pill CTA with brand variants" viewport="700x140"
 */
export function Button(props: ButtonProps): JSX.Element;
