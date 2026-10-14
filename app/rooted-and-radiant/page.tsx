import type { Metadata } from 'next'
import { RootedRadiantHero } from '@/components/events/RootedRadiantHero'
import { RootedRadiantInvite } from '@/components/events/RootedRadiantInvite'
import { Icon } from '@/components/ui/Icon'
import { TicketCheckout } from './TicketCheckout'
import { rootedRadiant, ticketTiers, TICKET_SALES_OPEN, LOWEST_TICKET_PRICE, formatCedis } from '@/lib/events'

const SITE_URL = 'https://www.gustywomenfoundation.org'
const DESCRIPTION = `${rootedRadiant.theme}. A celebration of womanhood, sisterhood, growth and joy — ${rootedRadiant.dateShort}, ${rootedRadiant.time} at ${rootedRadiant.venue}. Tickets from ${formatCedis(LOWEST_TICKET_PRICE)}.`

export const metadata: Metadata = {
  title: `${rootedRadiant.title} — Tickets`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${rootedRadiant.path}` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}${rootedRadiant.path}`,
    title: `${rootedRadiant.title} | Gutsy Women Foundation`,
    description: DESCRIPTION,
    images: [{ url: `${SITE_URL}${rootedRadiant.flyer}`, width: 720, height: 1080, alt: `${rootedRadiant.title} flyer` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${rootedRadiant.title} | Gutsy Women Foundation`,
    description: DESCRIPTION,
    images: [`${SITE_URL}${rootedRadiant.flyer}`],
  },
}

const SOCIALS = [
  { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/14bzn1Wny9S/?mibextid=wwXIfr' },
  { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/gutsy_women_foundation?igsh=MW1mN2Z0cmZnMDVoZg==' },
  { name: 'music', label: 'TikTok', href: 'https://www.tiktok.com/@gutsy.women.foundation' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/gutsy-women-foundation-884123347' },
  { name: 'twitter', label: 'X', href: 'https://x.com/gwf_gutsy' },
]

export default function RootedRadiantPage() {
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: rootedRadiant.title,
    description: DESCRIPTION,
    startDate: rootedRadiant.startISO,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: [`${SITE_URL}${rootedRadiant.flyer}`],
    location: {
      '@type': 'Place',
      name: rootedRadiant.venue,
      address: { '@type': 'PostalAddress', addressLocality: 'Aburi', addressRegion: 'Eastern Region', addressCountry: 'GH' },
    },
    organizer: { '@type': 'NGO', name: 'Gutsy Women Foundation', url: SITE_URL },
    offers: ticketTiers.map((t) => ({
      '@type': 'Offer',
      name: t.label,
      price: t.price,
      priceCurrency: 'GHS',
      availability: TICKET_SALES_OPEN && t.available ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
      url: `${SITE_URL}${rootedRadiant.path}`,
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />

      <RootedRadiantHero ticketsHref="#tickets" detailsHref="#invite" />
      <RootedRadiantInvite />

      {/* Tickets */}
      <section id="tickets" style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)', scrollMarginTop: 72 }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-magenta-600)' }}>
              Your Ticket, Your Experience
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(28px,3.6vw,44px)', color: 'var(--gwf-ink)', lineHeight: 1.04, margin: '12px 0 10px' }}>
              Secure Your Spot
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '0 auto', maxWidth: 560 }}>
              Pick your ticket, pay with Mobile Money or card, and get your confirmation by email instantly.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 'clamp(20px,4vw,40px)', boxShadow: 'var(--shadow-md)' }}>
            {TICKET_SALES_OPEN ? (
              <TicketCheckout />
            ) : (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', textAlign: 'center', margin: 0 }}>
                Online ticket sales are closed. For enquiries, call or WhatsApp <strong>{rootedRadiant.enquiryPhone}</strong>.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Enquiries + socials */}
      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,5vw,56px)' }} className="hero-grid">
          <div>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-ink-muted)' }}>Enquiries &amp; Tickets</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(20px,2.5vw,28px)', color: 'var(--gwf-ink)', margin: '12px 0 18px' }}>
              Questions? Talk to Us
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={`tel:${rootedRadiant.enquiryPhoneIntl}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--gwf-purple-700)' }}>
                <Icon name="phone" size={18} /> {rootedRadiant.enquiryPhone}
              </a>
              <a href={`mailto:${rootedRadiant.email}?subject=${encodeURIComponent(rootedRadiant.title)}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--gwf-purple-700)', wordBreak: 'break-all' }}>
                <Icon name="mail" size={18} /> {rootedRadiant.email}
              </a>
            </div>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-ink-muted)' }}>Follow for Updates</span>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '16px 0 20px' }}>
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: 42, height: 42, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-700)' }}>
                  <Icon name={s.name} size={19} />
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px' }}>
              {rootedRadiant.hashtags.map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13.5, color: 'var(--gwf-magenta-600)' }}>{h}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
