'use client'

import React, { CSSProperties } from 'react'

type Variant = 'primary' | 'secondary' | 'gold' | 'magenta' | 'on-dark' | 'outline-light' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  style?: CSSProperties
  className?: string
  form?: string
}

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: '8px 16px', fontSize: 14 },
  md: { padding: '12px 24px', fontSize: 15 },
  lg: { padding: '16px 32px', fontSize: 17 },
}

const VARIANTS: Record<Variant, CSSProperties> = {
  primary: { background: 'var(--gwf-purple-600)', color: '#fff', border: '2px solid var(--gwf-purple-600)' },
  secondary: { background: 'transparent', color: 'var(--gwf-purple-600)', border: '2px solid var(--gwf-purple-600)' },
  gold: { background: 'var(--gwf-gold-500)', color: 'var(--gwf-ink)', border: '2px solid var(--gwf-gold-500)' },
  magenta: { background: 'var(--gwf-magenta-600)', color: '#fff', border: '2px solid var(--gwf-magenta-600)' },
  'on-dark': { background: '#fff', color: 'var(--gwf-purple-700)', border: '2px solid #fff' },
  'outline-light': { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.85)' },
  ghost: { background: 'transparent', color: 'var(--gwf-purple-600)', border: '2px solid transparent' },
}

const HOVER: Record<Variant, CSSProperties> = {
  primary: { background: 'var(--gwf-purple-700)', borderColor: 'var(--gwf-purple-700)' },
  secondary: { background: 'var(--gwf-purple-600)', color: '#fff' },
  gold: { background: 'var(--gwf-gold-600)', borderColor: 'var(--gwf-gold-600)' },
  magenta: { background: 'var(--gwf-magenta-700)', borderColor: 'var(--gwf-magenta-700)' },
  'on-dark': { background: 'var(--gwf-purple-100)' },
  'outline-light': { background: 'rgba(255,255,255,.14)' },
  ghost: { background: 'var(--gwf-purple-100)' },
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  className,
  form,
}: ButtonProps) {
  const [hover, setHover] = React.useState(false)
  const [press, setPress] = React.useState(false)

  return (
    <button
      type={type}
      form={form}
      disabled={disabled}
      onClick={onClick}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false) }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        letterSpacing: '0.01em',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.5 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base)',
        transform: press ? 'translateY(0) scale(0.98)' : hover && !disabled ? 'translateY(-2px)' : 'none',
        boxShadow: hover && !disabled && variant === 'primary' ? 'var(--shadow-md)' : 'none',
        ...SIZES[size],
        ...VARIANTS[variant],
        ...(hover && !disabled ? HOVER[variant] : {}),
        ...style,
      }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}
