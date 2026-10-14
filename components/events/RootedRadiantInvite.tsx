import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { eventSerif } from '@/components/events/fonts'
import { rootedRadiant, ticketTiers, formatCedis } from '@/lib/events'

const IMAGINE = [
  'A beautiful garden',
  'Gorgeous women',
  'Meaningful conversations',
  'Laughter that heals',
  'New connections',
  'Exciting activities',
  'Beautiful memories',
  'The energy every woman deserves',
]

const FOR_WHO = ['Students', 'Young Professionals', 'Entrepreneurs', 'Creatives', 'Every woman who needs sunshine & sisterhood']

export function RootedRadiantInvite({ showTiers = false }: { showTiers?: boolean }) {
  const taglineWords = rootedRadiant.tagline.replace(/\./g, '').split(' ')

  return (
    <section id="invite" className={`rr-invite ${eventSerif.variable}`}>
      <div className="rr-invite-inner">
        {/* Lede */}
        <div className="rr-lede">
          <div>
            <p className="rr-invite-eyebrow">
              <span className="rr-invite-eyebrow-line" />
              An invitation &middot; {rootedRadiant.dateShort}
            </p>
            <h2 className="rr-invite-title">
              <span className="rr-invite-title-sans">Girl, you deserve</span>
              <span className="rr-invite-title-serif">a moment to breathe.</span>
            </h2>
          </div>
          <div className="rr-lede-copy">
            <p>
              Sis, when was the last time you took a break from the pressure of life, celebrated how far you&rsquo;ve come, and simply enjoyed being <em>you</em>?
            </p>
            <p>
              The deadlines, the career pressure, the endless responsibilities, the expectations to have it all figured out&hellip;
            </p>
          </div>
        </div>

        {/* Statement */}
        <div className="rr-statement">
          <p className="rr-statement-text">
            This December, we&rsquo;re not just having a picnic. <span>We&rsquo;re creating an experience.</span>
          </p>
          <p className="rr-statement-sub">
            Welcome to <strong>{rootedRadiant.title}</strong> &mdash; a beautiful celebration of womanhood, sisterhood, growth, joy, and the unapologetic power of being yourself.
          </p>
        </div>

        {/* Imagine */}
        <div className="rr-imagine">
          <p className="rr-invite-eyebrow">
            <span className="rr-invite-eyebrow-line" />
            The experience
          </p>
          <h3 className="rr-imagine-title">Imagine&hellip;</h3>
          <ol className="rr-imagine-grid">
            {IMAGINE.map((text, i) => (
              <li key={text} className="rr-imagine-item">
                <span className="rr-imagine-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="rr-imagine-text">{text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Theme + who it's for */}
        <div className="rr-theme-card">
          <div className="rr-hero-grain" aria-hidden="true" />
          <div className="rr-theme-card-main">
            <p className="rr-theme-card-label">Our Theme</p>
            <p className="rr-theme-card-quote">&ldquo;{rootedRadiant.theme}&rdquo;</p>
            <p className="rr-tagline">
              {taglineWords.map((w, i) => (
                <React.Fragment key={w}>
                  {i > 0 && <span className="rr-diamond" aria-hidden="true" />}
                  {w}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="rr-theme-card-side">
            <p className="rr-theme-card-label">Who It&rsquo;s For</p>
            <p className="rr-theme-card-heading">Your spot is waiting</p>
            <p className="rr-theme-card-text">
              Whether you&rsquo;re a student, a young professional, an entrepreneur, a creative, or simply a woman who needs a little sunshine and sisterhood.
            </p>
            <div className="rr-chips">
              {FOR_WHO.map((w) => <span key={w} className="rr-chip">{w}</span>)}
            </div>
          </div>
        </div>

        {showTiers && <TicketTierCards />}

        {/* Closing nudge */}
        <div className="rr-closing">
          <div className="rr-ornament" aria-hidden="true"><span /></div>
          <p className="rr-closing-title">
            Don&rsquo;t wait until everyone is posting pictures and saying &ldquo;You should have come!&rdquo;
          </p>
          <p className="rr-closing-text">
            Gather your girls, pick your outfit, secure your ticket, and come ready to laugh, connect, glow, and make unforgettable memories. Your December plans deserve more than staying indoors scrolling through everybody else&rsquo;s fun &mdash; be part of the experience!
          </p>
          <p className="rr-shoutout">
            Tag your girls and tell them: <strong>&ldquo;December 4th, we are outside!&rdquo;</strong>
          </p>
          <div style={{ marginTop: 28 }}>
            <Link href={showTiers ? `${rootedRadiant.path}#tickets` : '#tickets'}>
              <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Secure Your Ticket</Button>
            </Link>
          </div>
          <p className="rr-hashtags">{rootedRadiant.hashtags.slice(0, 4).join('  ')}</p>
        </div>
      </div>
    </section>
  )
}

function TicketTierCards() {
  return (
    <div className="rr-tickets">
      <div style={{ textAlign: 'center' }}>
        <p className="rr-invite-eyebrow rr-invite-eyebrow--center" style={{ justifyContent: 'center' }}>
          <span className="rr-invite-eyebrow-line" />
          Your ticket, your experience
          <span className="rr-invite-eyebrow-line" />
        </p>
        <h3 className="rr-invite-title" style={{ marginTop: 14 }}>
          <span className="rr-invite-title-sans">Choose your</span>
          <span className="rr-invite-title-serif">ticket</span>
        </h3>
      </div>

      <div className="rr-tickets-grid">
        {ticketTiers.map((t, idx) => {
          const featured = idx === ticketTiers.length - 1
          return (
            <div key={t.id} className="rr-ticket-wrap" style={{ opacity: t.available ? 1 : 0.55 }}>
              <div className={`rr-ticket${featured ? ' rr-ticket--featured' : ''}`}>
                <div className="rr-ticket-top">
                  <p className="rr-ticket-label">{t.label}</p>
                  <p className="rr-ticket-price">{formatCedis(t.price)}</p>
                  <p className="rr-ticket-blurb">{t.blurb}</p>
                </div>
                <div className="rr-ticket-bottom">
                  {t.available ? (
                    <Link href={`${rootedRadiant.path}?tier=${t.id}#tickets`} style={{ display: 'block', width: '100%' }}>
                      <Button variant={featured ? 'gold' : 'primary'} fullWidth iconRight={<Icon name="arrow-right" size={16} />}>Buy {t.label}</Button>
                    </Link>
                  ) : (
                    <Button variant="secondary" fullWidth disabled>No Longer Available</Button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
