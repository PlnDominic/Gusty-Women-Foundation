'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function Newsletter() {
  const [email, setEmail] = React.useState('')
  const [done, setDone] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch {}
    setLoading(false)
    setDone(true)
  }

  return (
    <section style={{ padding: '0 0 clamp(64px,8vw,104px)', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>
        <div
          style={{
            borderRadius: 'var(--radius-xl)',
            background: 'var(--gwf-gold-500)',
            padding: 'clamp(32px,5vw,56px)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 32,
            alignItems: 'center',
            boxShadow: 'var(--shadow-md)',
          }}
          className="news-grid"
        >
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.05, color: 'var(--gwf-ink)', margin: 0 }}>
              Stay in the loop
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(26,26,46,.78)', margin: '10px 0 0', maxWidth: 380 }}>
              Get cohort openings, events and impact stories straight to your inbox.
            </p>
          </div>
          <div>
            {done ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--gwf-purple-700)', fontSize: 16 }}>
                <Icon name="check" size={20} />
                You&apos;re subscribed. Thank you!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  gap: 10,
                  background: '#fff',
                  padding: 6,
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="you@example.com"
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    padding: '12px 18px',
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    background: 'transparent',
                    color: 'var(--gwf-ink)',
                    minWidth: 0,
                  }}
                />
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Subscribing…' : 'Subscribe'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
