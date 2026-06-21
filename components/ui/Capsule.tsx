import React, { CSSProperties } from 'react'

type Tone = 'purple' | 'purple-soft' | 'gold' | 'magenta' | 'outline' | 'outline-ink'
type Size = 'sm' | 'md' | 'lg'

interface CapsuleProps {
  children: React.ReactNode
  tone?: Tone
  iconLeft?: React.ReactNode
  size?: Size
  style?: CSSProperties
}

const TONES: Record<Tone, CSSProperties> = {
  purple: { background: 'var(--gwf-purple-600)', color: '#fff' },
  'purple-soft': { background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-700)' },
  gold: { background: 'var(--gwf-gold-500)', color: 'var(--gwf-ink)' },
  magenta: { background: 'var(--gwf-magenta-600)', color: '#fff' },
  outline: { background: 'transparent', color: '#fff', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,.7)' },
  'outline-ink': { background: 'transparent', color: 'var(--gwf-purple-700)', boxShadow: 'inset 0 0 0 2px var(--gwf-purple-200)' },
}

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: '5px 12px', fontSize: 12 },
  md: { padding: '8px 16px', fontSize: 14 },
  lg: { padding: '11px 22px', fontSize: 16 },
}

export function Capsule({ children, tone = 'purple', iconLeft, size = 'md', style = {} }: CapsuleProps) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        letterSpacing: '0.01em',
        borderRadius: 'var(--radius-pill)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        lineHeight: 1.1,
        ...SIZES[size],
        ...TONES[tone],
        ...style,
      }}
    >
      {iconLeft}
      {children}
    </span>
  )
}
