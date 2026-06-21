'use client'

import React from 'react'

const PILLARS = [
  {
    n: '01',
    title: 'Mentorship',
    body: 'One-to-one guidance from women who have built businesses, led teams and navigated the challenges you are facing right now.',
    color: 'var(--gwf-gold-500)',
  },
  {
    n: '02',
    title: 'Training',
    body: 'Intensive masterclasses built around real problems — pitching, pricing, operations, leadership — not theory.',
    color: 'var(--gwf-magenta-600)',
  },
  {
    n: '03',
    title: 'Networking',
    body: 'A curated community of peers, partners and sponsors who are invested in seeing you grow.',
    color: 'var(--gwf-gold-500)',
  },
  {
    n: '04',
    title: 'Leadership',
    body: 'The mindset, voice and presence to lead in your industry, your community and beyond.',
    color: 'var(--gwf-magenta-600)',
  },
]

export function WhatWeDo() {
  const [active, setActive] = React.useState<number | null>(null)

  return (
    <section style={{ background: 'var(--gwf-purple-900)', overflow: 'hidden' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
        }}
        className="hero-grid"
      >
        {/* Left — photo */}
        <div style={{ position: 'relative', minHeight: 560 }} className="whatwedo-photo">
          <img
            src="/assets/gwf-mentorship-convo.jpg"
            alt="GWF mentorship in action"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, var(--gwf-purple-900) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(28px,4vw,48px)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--gwf-gold-500)', margin: '0 0 12px' }}>
              What We Do
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(32px,4vw,52px)', lineHeight: 0.96, color: '#fff', margin: 0 }}>
              Four Ways<br />We Move<br />You Forward
            </h2>
          </div>
        </div>

        {/* Right — pillars */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.n}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                flex: 1,
                padding: 'clamp(24px,3vw,40px) clamp(28px,4vw,52px)',
                borderBottom: i < PILLARS.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none',
                background: active === i ? 'rgba(255,255,255,.04)' : 'transparent',
                transition: 'background 200ms',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: p.color, letterSpacing: '0.1em' }}>
                  {p.n}
                </span>
                <div style={{ flex: 1, height: 1, background: active === i ? p.color : 'rgba(255,255,255,.15)', transition: 'background 200ms' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  fontSize: 'clamp(22px,2.5vw,32px)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1,
                  color: active === i ? '#fff' : 'rgba(255,255,255,.75)',
                  margin: 0,
                  transition: 'color 200ms',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: active === i ? 'rgba(255,255,255,.75)' : 'rgba(255,255,255,.38)',
                  margin: 0,
                  maxWidth: 380,
                  transition: 'color 200ms',
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
