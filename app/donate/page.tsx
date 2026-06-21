import type { Metadata } from 'next'
import { DonateClient } from './DonateClient'
import { Newsletter } from '@/components/home/Newsletter'
import { Icon } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support the Gutsy Women Foundation. Your donation funds mentorship, training and scholarships for ambitious young women in Ghana.',
}

const FUNDS = [
  { icon: 'users', text: 'Mentorship sessions and one-to-one coaching for participants' },
  { icon: 'book-open', text: 'Training materials, workbooks and masterclass resources' },
  { icon: 'map-pin', text: 'Venue, logistics and daily meals across the 3-day programme' },
  { icon: 'star', text: 'Scholarship support for women who cannot afford the programme fee' },
]

const MOMO = [
  { network: 'MTN Mobile Money', number: '055 XXX XXXX', color: 'var(--gwf-gold-500)' },
  { network: 'Vodafone Cash', color: '#E60000' },
  { network: 'AirtelTigo Money', color: '#EF3B24' },
]

export default function DonatePage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Support Our Mission</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>
            Every Contribution<br />Moves Us Forward
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Your donation directly funds mentorship, training and scholarships for ambitious young women building futures in Ghana.
          </p>
        </div>
      </section>

      {/* Main donation section */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }} className="hero-grid">

          {/* Left — donation form */}
          <div>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-magenta-600)' }}>Make a Donation</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(24px,3vw,36px)', color: 'var(--gwf-ink)', lineHeight: 1.04, margin: '12px 0 28px' }}>
              Choose Your Amount
            </h2>
            <DonateClient />
          </div>

          {/* Right — impact panel */}
          <div>
            <div style={{ background: 'var(--gwf-purple-900)', padding: 'clamp(28px,4vw,40px)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-gold-500)', margin: '0 0 20px' }}>
                Your Donation Funds
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {FUNDS.map((f) => (
                  <div key={f.text} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ width: 36, height: 36, background: 'rgba(245,197,24,.12)', color: 'var(--gwf-gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={f.icon} size={17} />
                    </span>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.78)', margin: 0 }}>{f.text}</p>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', marginTop: 28, paddingTop: 24 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 16, lineHeight: 1.5, color: 'rgba(255,255,255,.85)', margin: 0 }}>
                  &ldquo;Gutsy Women Foundation changed the trajectory of my business in 3 days.&rdquo;
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.5)', margin: '10px 0 0' }}>
                  Akosua D. — Cohort 1 Participant
                </p>
              </div>
            </div>

            {/* Quick impact stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginTop: 1, background: 'var(--border-subtle)' }}>
              {[['40', 'Women per cohort'], ['18', 'Businesses launched'], ['24', 'Mentors engaged'], ['3', 'Days of training']].map(([n, l]) => (
                <div key={l} style={{ background: 'var(--gwf-purple-100)', padding: '20px 18px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--gwf-purple-700)', margin: 0, lineHeight: 1 }}>{n}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '4px 0 0' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Money */}
      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(16px,4vw,40px)', background: 'var(--gwf-gold-100)', borderTop: '1px solid var(--gwf-gold-300)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ maxWidth: 720 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-600)' }}>Mobile Money</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--gwf-ink)', margin: '12px 0 8px' }}>
              Prefer to Pay Directly?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--gwf-ink-soft)', margin: '0 0 28px' }}>
              Send your donation via Mobile Money using the details below, then email us at <a href="mailto:gutsywomenfoundation@gmail.com" style={{ color: 'var(--gwf-purple-700)', fontWeight: 600 }}>gutsywomenfoundation@gmail.com</a> with a screenshot of your transaction and your name.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="stat-grid">
              {[
                { network: 'MTN Mobile Money', hint: 'Send to GWF MoMo number', color: '#FFC300' },
                { network: 'Vodafone Cash', hint: 'Send to GWF Vodafone number', color: '#E60000' },
                { network: 'AirtelTigo Money', hint: 'Send to GWF AirtelTigo number', color: '#EF3B24' },
              ].map((m) => (
                <div key={m.network} style={{ background: '#fff', padding: 20, border: '1px solid var(--gwf-gold-300)' }}>
                  <div style={{ width: 10, height: 10, background: m.color, marginBottom: 10 }} />
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--gwf-ink)', margin: '0 0 6px' }}>{m.network}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: 0, lineHeight: 1.5 }}>{m.hint}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20, padding: '14px 18px', background: 'rgba(91,45,142,.08)', border: '1px solid var(--gwf-purple-200)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <Icon name="info" size={16} color="var(--gwf-purple-600)" />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: 0 }}>
                Contact us to get our current Mobile Money numbers. Use your full name as the payment reference so we can match your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International / Bank */}
      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-ink-muted)' }}>International Donors</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(20px,2.5vw,28px)', color: 'var(--gwf-ink)', margin: '12px 0 12px' }}>
            Donating from Outside Ghana?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--gwf-ink-soft)', margin: '0 0 20px' }}>
            International donors can give via Paystack using a Visa or Mastercard — Paystack handles the currency conversion. Alternatively, reach out to us directly to arrange a bank transfer.
          </p>
          <a href="mailto:gutsywomenfoundation@gmail.com?subject=International%20Donation%20Enquiry" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--gwf-purple-700)' }}>
            <Icon name="mail" size={17} /> gutsywomenfoundation@gmail.com
          </a>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
