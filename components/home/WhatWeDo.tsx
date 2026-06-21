'use client'

import React from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'

const PILLARS = [
  { icon: 'users', title: 'Mentorship', body: 'One-to-one guidance from women who have built and led.', accent: 'purple' as const },
  { icon: 'graduation-cap', title: 'Training', body: 'Practical masterclasses that turn ideas into action plans.', accent: 'gold' as const },
  { icon: 'share-2', title: 'Networking', body: 'A community of ambitious peers, partners and sponsors.', accent: 'magenta' as const },
  { icon: 'award', title: 'Leadership', body: 'Confidence and skills to lead in business and community.', accent: 'purple' as const },
]

type Accent = 'purple' | 'gold' | 'magenta'

const ACCENT_COLOR: Record<Accent, string> = {
  purple: 'var(--gwf-purple-600)',
  gold: 'var(--gwf-gold-500)',
  magenta: 'var(--gwf-magenta-600)',
}

const ACCENT_BG: Record<Accent, string> = {
  purple: 'var(--gwf-purple-100)',
  gold: 'var(--gwf-gold-100)',
  magenta: 'var(--gwf-magenta-100)',
}

export function WhatWeDo() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,104px) 0', background: 'var(--gwf-purple-100)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>
        <SectionHeading eyebrow="What We Do" title="Our Four Pillars" align="center" />
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 44 }}
          className="pillar-grid"
        >
          {PILLARS.map((p) => <Pillar key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}

function Pillar({ icon, title, body, accent }: { icon: string; title: string; body: string; accent: Accent }) {
  const [hover, setHover] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '28px 24px',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      }}
    >
      <span
        style={{
          width: 54,
          height: 54,
          borderRadius: 0,
          background: ACCENT_BG[accent],
          color: ACCENT_COLOR[accent],
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name={icon} size={26} />
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: 19,
          color: 'var(--gwf-ink)',
          margin: '18px 0 8px',
        }}
      >
        {title}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--gwf-ink-soft)', margin: 0 }}>
        {body}
      </p>
    </div>
  )
}
