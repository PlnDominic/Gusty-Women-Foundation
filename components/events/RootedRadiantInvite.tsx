import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { rootedRadiant, ticketTiers, formatCedis } from '@/lib/events'

const IMAGINE = [
  { icon: 'sparkles', text: 'A beautiful garden' },
  { icon: 'users', text: 'Gorgeous women' },
  { icon: 'send', text: 'Meaningful conversations' },
  { icon: 'heart', text: 'Laughter that heals' },
  { icon: 'share-2', text: 'New connections' },
  { icon: 'star', text: 'Exciting activities' },
  { icon: 'award', text: 'Beautiful memories' },
  { icon: 'lightbulb', text: 'The energy every woman deserves' },
]

const FOR_WHO = ['Students', 'Young Professionals', 'Entrepreneurs', 'Creatives', 'Every woman who needs sunshine & sisterhood']

const FACTS = [
  { icon: 'calendar', label: 'Date', text: rootedRadiant.date },
  { icon: 'clock', label: 'Time', text: rootedRadiant.time },
  { icon: 'map-pin', label: 'Venue', text: rootedRadiant.venue },
]

const eyebrow: React.CSSProperties = { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-magenta-600)' }
const body: React.CSSProperties = { fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '0 0 16px' }

export function RootedRadiantInvite({ showTiers = false }: { showTiers?: boolean }) {
  return (
    <section id="invite" style={{ padding: 'clamp(56px,8vw,104px) 0', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(36px,6vw,80px)', alignItems: 'start' }} className="hero-grid">
          {/* Left — the invitation */}
          <div>
            <span style={eyebrow}>{rootedRadiant.title} &middot; {rootedRadiant.dateShort}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(28px,3.6vw,46px)', color: 'var(--gwf-ink)', lineHeight: 1.02, margin: '12px 0 24px' }}>
              Girl, You Deserve a<br />Moment to Breathe
            </h2>

            <p style={body}>
              Sis, when was the last time you took a break from the pressure of life, celebrated how far you&rsquo;ve come, and simply enjoyed being <em>you</em>?
            </p>
            <p style={body}>
              The deadlines, the career pressure, the endless responsibilities, the expectations to have it all figured out&hellip;
            </p>
            <p style={{ ...body, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(18px,1.9vw,22px)', lineHeight: 1.3, textTransform: 'uppercase', color: 'var(--gwf-purple-700)' }}>
              This December, we&rsquo;re not just having a picnic. We&rsquo;re creating an experience!
            </p>
            <p style={body}>
              Welcome to <strong style={{ color: 'var(--gwf-ink)' }}>{rootedRadiant.title}</strong> &mdash; a beautiful celebration of womanhood, sisterhood, growth, joy, and the unapologetic power of being yourself.
            </p>

            {/* Theme */}
            <div style={{ borderLeft: '4px solid var(--gwf-gold-500)', background: 'var(--gwf-purple-100)', padding: '18px 22px', margin: '8px 0 28px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-ink-muted)', margin: 0 }}>Our Theme</p>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 800, fontSize: 'clamp(17px,1.8vw,21px)', lineHeight: 1.35, color: 'var(--gwf-purple-700)', margin: '6px 0 4px' }}>
                &ldquo;{rootedRadiant.theme}&rdquo;
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--gwf-magenta-600)', margin: 0 }}>{rootedRadiant.tagline}</p>
            </div>

            <p style={{ ...body, marginBottom: 12 }}>
              Whether you&rsquo;re a student, a young professional, an entrepreneur, a creative, or simply a woman who needs a little sunshine and sisterhood &mdash; <strong style={{ color: 'var(--gwf-ink)' }}>your spot is waiting!</strong>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {FOR_WHO.map((w) => (
                <span key={w} style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, padding: '6px 12px', color: 'var(--gwf-purple-700)', boxShadow: 'inset 0 0 0 2px var(--gwf-purple-200)' }}>{w}</span>
              ))}
            </div>
          </div>

          {/* Right — imagine panel + event facts */}
          <div>
            <div style={{ background: 'var(--gwf-purple-900)', padding: 'clamp(28px,4vw,40px)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-gold-500)', margin: '0 0 20px' }}>
                Imagine&hellip;
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 14px' }}>
                {IMAGINE.map((i) => (
                  <div key={i.text} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ width: 32, height: 32, background: 'rgba(245,197,24,.12)', color: 'var(--gwf-gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={i.icon} size={15} />
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.4, color: 'rgba(255,255,255,.85)' }}>{i.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gap: 1, marginTop: 1, background: 'var(--border-subtle)' }}>
              {FACTS.map((f) => (
                <div key={f.label} style={{ background: 'var(--gwf-purple-100)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ color: 'var(--gwf-purple-600)', display: 'inline-flex' }}><Icon name={f.icon} size={20} /></span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-ink-muted)', margin: 0 }}>{f.label}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--gwf-ink)', margin: '2px 0 0' }}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showTiers && <TicketTierCards />}

        {/* Closing nudge */}
        <div style={{ marginTop: 'clamp(40px,6vw,64px)', background: 'linear-gradient(135deg,var(--gwf-magenta-600),var(--gwf-purple-700))', padding: 'clamp(28px,4vw,44px)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 680 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(20px,2.4vw,28px)', lineHeight: 1.12, color: '#fff', margin: 0 }}>
              Don&rsquo;t wait until everyone is posting pictures and saying &ldquo;You should have come!&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', margin: '12px 0 0' }}>
              Gather your girls, pick your outfit, secure your ticket, and come ready to laugh, connect, glow, and make unforgettable memories. Your December plans deserve more than staying indoors scrolling through everybody else&rsquo;s fun &mdash; be part of the experience!
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--gwf-gold-300)', margin: '14px 0 0' }}>
              Tag your girls and tell them: &ldquo;December 4th, we are outside!&rdquo;
            </p>
          </div>
          <Link href={showTiers ? `${rootedRadiant.path}#tickets` : '#tickets'}>
            <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Secure Your Ticket</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function TicketTierCards() {
  return (
    <div style={{ marginTop: 'clamp(48px,7vw,80px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <span style={eyebrow}>Your Ticket, Your Experience</span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(24px,3vw,36px)', color: 'var(--gwf-ink)', margin: '10px 0 0' }}>
          Choose Your Ticket
        </h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="tier-grid">
        {ticketTiers.map((t, idx) => {
          const featured = idx === ticketTiers.length - 1
          return (
            <div
              key={t.id}
              style={{
                padding: 'clamp(22px,3vw,30px)',
                border: `2px solid ${featured ? 'var(--gwf-magenta-600)' : 'var(--border-subtle)'}`,
                background: featured ? 'var(--gwf-magenta-100)' : '#fff',
                display: 'flex',
                flexDirection: 'column',
                opacity: t.available ? 1 : 0.6,
              }}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gwf-ink-muted)', margin: '0 0 8px' }}>{t.label}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.4vw,40px)', color: 'var(--gwf-ink)', margin: '0 0 10px', lineHeight: 1 }}>{formatCedis(t.price)}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '0 0 20px', flex: 1 }}>{t.blurb}</p>
              {t.available ? (
                <Link href={`${rootedRadiant.path}?tier=${t.id}#tickets`}>
                  <Button variant={featured ? 'magenta' : 'primary'} fullWidth iconRight={<Icon name="arrow-right" size={16} />}>Buy {t.label}</Button>
                </Link>
              ) : (
                <Button variant="secondary" fullWidth disabled>No Longer Available</Button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
