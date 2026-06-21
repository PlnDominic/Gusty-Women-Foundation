import React from 'react'

const PARTNERS = ['ENABLE', 'IDEA HUB', 'LEGON', 'ACCRA TECH', 'BLOOM', 'ASCEND', 'YOTA']

export function Partners() {
  return (
    <section style={{ padding: 'clamp(44px,6vw,72px) 0', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-ink-muted)', margin: '0 0 28px' }}>
          Partners &amp; Sponsors
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,5vw,56px)', justifyContent: 'center', alignItems: 'center' }}>
          {PARTNERS.map((p) => (
            <span
              key={p}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 20,
                color: 'var(--gwf-purple-300)',
                letterSpacing: '0.04em',
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
