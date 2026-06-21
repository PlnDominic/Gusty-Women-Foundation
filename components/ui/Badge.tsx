import React, { CSSProperties } from 'react'

type Tone = 'open' | 'soon' | 'closed' | 'info'

interface BadgeProps {
  children: React.ReactNode
  tone?: Tone
  style?: CSSProperties
}

const TONES = {
  open: { background: 'var(--gwf-magenta-100)', color: 'var(--gwf-magenta-700)', dot: 'var(--gwf-magenta-600)' },
  soon: { background: 'var(--gwf-gold-100)', color: 'var(--gwf-gold-600)', dot: 'var(--gwf-gold-500)' },
  closed: { background: '#EFEEF4', color: 'var(--gwf-ink-muted)', dot: 'var(--gwf-ink-muted)' },
  info: { background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-700)', dot: 'var(--gwf-purple-500)' },
}

export function Badge({ children, tone = 'open', style = {} }: BadgeProps) {
  const t = TONES[tone]
  return (
    <span
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: 'var(--radius-pill)',
        padding: '5px 12px 5px 10px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        background: t.background,
        color: t.color,
        ...style,
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.dot, flexShrink: 0 }} />
      {children}
    </span>
  )
}
