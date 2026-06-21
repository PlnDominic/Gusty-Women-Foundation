import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'
import { ContactSocials } from './ContactSocials'
import { Icon } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Gutsy Women Foundation team.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Reach Out</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>Contact Us</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0' }}>
            Have a question, partnership idea, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }} className="hero-grid">
          {/* Info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 28, color: 'var(--gwf-ink)', margin: '0 0 28px' }}>Get in Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <InfoRow icon="mail" label="Email" value="gutsywomenfoundation@gmail.com" href="mailto:gutsywomenfoundation@gmail.com" />
              <InfoRow icon="map-pin" label="Location" value="Yota East, Legon, Accra, Ghana" />
              <InfoRow icon="globe" label="Website" value="www.gutsywomenfoundation.org" href="https://www.gutsywomenfoundation.org" />
            </div>

            <div style={{ marginTop: 40 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-ink-muted)', margin: '0 0 16px' }}>Follow Us</p>
              <ContactSocials />
            </div>

            {/* Map placeholder */}
            <div style={{ marginTop: 40, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', height: 220, background: 'var(--gwf-purple-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10, color: 'var(--gwf-purple-400)' }}>
              <Icon name="map-pin" size={36} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-muted)' }}>Yota East, Legon · Accra</span>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

function InfoRow({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = (
    <div style={{ display: 'flex', gap: 14 }}>
      <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name={icon} size={20} />
      </span>
      <div>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gwf-ink-muted)', margin: '0 0 2px' }}>{label}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gwf-ink)', margin: 0 }}>{value}</p>
      </div>
    </div>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>{content}</a>
  ) : <div>{content}</div>
}
