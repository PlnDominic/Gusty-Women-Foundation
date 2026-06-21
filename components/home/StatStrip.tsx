import React from 'react'
import { StatCard } from '@/components/patterns/StatCard'

export function StatStrip() {
  return (
    <section style={{ background: 'var(--gwf-purple-100)', padding: 'clamp(40px,6vw,72px) 0' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 clamp(16px,4vw,40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 22,
        }}
        className="stat-grid"
      >
        <StatCard value={2} label="Cohorts Run" accent="purple" />
        <StatCard value={250} suffix="+" label="Women Empowered" accent="gold" />
        <StatCard value={18} label="Partner Organisations" accent="magenta" />
      </div>
    </section>
  )
}
