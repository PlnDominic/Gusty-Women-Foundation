'use client'

import React, { CSSProperties } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

type Status = 'open' | 'soon' | 'closed' | 'info'

interface MetaItem {
  icon: React.ReactNode
  text: string
}

interface ProgramCardProps {
  image?: string
  title: string
  description?: string
  status?: Status
  statusLabel?: string
  meta?: MetaItem[]
  ctaLabel?: string
  href?: string
  onCta?: () => void
  style?: CSSProperties
}

export function ProgramCard({
  image,
  title,
  description,
  status = 'open',
  statusLabel = 'Applications Open',
  meta = [],
  ctaLabel = 'Learn More',
  href,
  onCta,
  style = {},
}: ProgramCardProps) {
  const [hover, setHover] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {image && (
        <div style={{ position: 'relative', height: 188, overflow: 'hidden' }}>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform var(--dur-slow) var(--ease-out)',
            }}
          />
          <div style={{ position: 'absolute', top: 14, left: 14 }}>
            <Badge tone={status}>{statusLabel}</Badge>
          </div>
        </div>
      )}
      <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            fontSize: 21,
            lineHeight: 1.1,
            color: 'var(--gwf-ink)',
            margin: 0,
          }}
        >
          {title}
        </h3>
        {description && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--gwf-ink-soft)', margin: 0 }}>
            {description}
          </p>
        )}
        {meta.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 2 }}>
            {meta.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-body)',
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: 'var(--gwf-purple-700)',
                }}
              >
                {m.icon}
                <span>{m.text}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ marginTop: 'auto', paddingTop: 8 }}>
          {href ? (
            <Link href={href}><Button variant="primary" size="sm">{ctaLabel}</Button></Link>
          ) : (
            <Button variant="primary" size="sm" onClick={onCta}>{ctaLabel}</Button>
          )}
        </div>
      </div>
    </div>
  )
}
