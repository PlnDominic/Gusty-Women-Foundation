'use client'

import React from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function ContactForm() {
  const [f, setF] = React.useState({ name: '', email: '', message: '' })
  const [done, setDone] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f),
      })
    } catch {}
    setLoading(false)
    setDone(true)
  }

  if (done) {
    return (
      <div style={{ background: 'var(--gwf-purple-100)', borderRadius: 'var(--radius-xl)', padding: 'clamp(36px,5vw,52px)', textAlign: 'center' }}>
        <span style={{ width: 68, height: 68, borderRadius: 0, background: 'var(--gwf-purple-600)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
          <Icon name="check" size={32} />
        </span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 24, color: 'var(--gwf-ink)', margin: '20px 0 0' }}>Message sent!</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '10px 0 0' }}>
          Thanks for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', padding: 'clamp(28px,4vw,44px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 22, color: 'var(--gwf-ink)', margin: 0 }}>Send a message</h3>
      <Input label="Your name" placeholder="Ama Mensah" value={f.name} onChange={set('name')} required />
      <Input label="Email address" type="email" placeholder="you@example.com" value={f.email} onChange={set('email')} required />
      <Input label="Message" multiline rows={5} placeholder="Tell us how we can help..." value={f.message} onChange={set('message')} required />
      <Button variant="primary" type="submit" size="lg" fullWidth disabled={loading} iconRight={<Icon name="send" size={18} />}>
        {loading ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
