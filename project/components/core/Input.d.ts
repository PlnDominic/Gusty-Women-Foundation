import * as React from 'react';

export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  hint?: string;
  /** Render a textarea instead of an input. */
  multiline?: boolean;
  rows?: number;
  style?: React.CSSProperties;
}

/** Labelled text field / textarea for forms (Apply, Contact, Newsletter). */
export function Input(props: InputProps): JSX.Element;
