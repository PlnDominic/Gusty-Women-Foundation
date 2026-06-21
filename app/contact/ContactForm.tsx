'use client'

import React from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { hasErrors, validateContact, type ContactPayload, type ValidationErrors } from '@/lib/validation'

export function ContactForm() {
  const [f, setF] = React.useState<ContactPayload>({ name: '', email: '', message: '' })
  const [done, setDone] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState<ValidationErrors<ContactPayload>>({})
  const [formError, setFormError] = React.useState('')

  const set = (k: keyof ContactPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value
    const next = { ...f, [k]: value }
    const nextErrors = validateContact(next)
    setF(next)
    setErrors((current) => ({ ...current, [k]: nextErrors[k] }))
    setFormError('')
  }

  const currentErrors = validateContact(f)
  const cannotSubmit = loading || hasErrors(currentErrors)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return

    const validationErrors = validateContact(f)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) {
      setFormError('Please fix the highlighted fields before sending.')
      return
    }

    setLoading(true)
    setFormError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        if (result?.errors) setErrors(result.errors)
        setFormError(result?.error || 'We could not send your message. Please try again.')
        return
      }

      setDone(true)
    } catch {
      setFormError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
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
      <Input label="Your name" placeholder="Ama Mensah" value={f.name} onChange={set('name')} error={errors.name} required />
      <Input label="Email address" type="email" placeholder="you@example.com" value={f.email} onChange={set('email')} error={errors.email} required />
      <Input label="Message" multiline rows={5} placeholder="Tell us how we can help..." value={f.message} onChange={set('message')} error={errors.message} required />
      {formError && (
        <div role="alert" style={{ background: 'var(--gwf-magenta-100)', color: 'var(--gwf-magenta-700)', border: '1px solid rgba(194,24,91,.25)', padding: '12px 14px', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}>
          {formError}
        </div>
      )}
      <Button variant="primary" type="submit" size="lg" fullWidth disabled={cannotSubmit} iconRight={<Icon name="send" size={18} />}>
        {loading ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
