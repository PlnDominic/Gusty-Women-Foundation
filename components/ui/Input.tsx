'use client'

import React, { CSSProperties, ChangeEvent } from 'react'

interface InputProps {
  label?: string
  type?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  hint?: string
  multiline?: boolean
  rows?: number
  style?: CSSProperties
  name?: string
  id?: string
  min?: string
  max?: string
}

export function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  required = false,
  hint = '',
  multiline = false,
  rows = 4,
  style = {},
  name,
  id,
  min,
  max,
}: InputProps) {
  const [focus, setFocus] = React.useState(false)

  const fieldStyle: CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--gwf-ink)',
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    borderRadius: 'var(--radius-md)',
    background: '#fff',
    border: `1.5px solid ${focus ? 'var(--gwf-purple-500)' : 'var(--border-subtle)'}`,
    boxShadow: focus ? '0 0 0 4px rgba(91,45,142,0.12)' : 'none',
    outline: 'none',
    transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    resize: multiline ? 'vertical' : undefined,
  }

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7, ...style }}>
      {label && (
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--gwf-ink-soft)' }}>
          {label}
          {required && <span style={{ color: 'var(--gwf-magenta-600)' }}> *</span>}
        </span>
      )}
      {multiline ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={fieldStyle}
          name={name}
          id={id}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={fieldStyle}
          name={name}
          id={id}
          min={min}
          max={max}
        />
      )}
      {hint && <span style={{ fontSize: 12.5, color: 'var(--gwf-ink-muted)' }}>{hint}</span>}
    </label>
  )
}
