import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Capsule } from '@/components/ui/Capsule'
import { Icon } from '@/components/ui/Icon'
import { Newsletter } from '@/components/home/Newsletter'
import { programs, getProgram } from '@/lib/data'

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const program = getProgram(params.slug)
  if (!program) return {}
  return {
    title: program.title,
    description: program.description,
    alternates: {
      canonical: `/programs/${program.slug}`,
    },
    openGraph: {
      type: 'website',
      title: program.title,
      description: program.description,
      url: `/programs/${program.slug}`,
      images: [
        {
          url: program.image,
          width: 1200,
          height: 630,
          alt: program.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: program.title,
      description: program.description,
      images: [program.image],
    },
  }
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug)
  if (!program) notFound()

  const programJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: program.title,
    description: program.description,
    image: `https://www.gutsywomenfoundation.org${program.image}`,
    url: `https://www.gutsywomenfoundation.org/programs/${program.slug}`,
    eventStatus: program.status === 'closed' ? 'https://schema.org/EventCancelled' : 'https://schema.org/EventScheduled',
    eventAttendanceMode: program.location?.toLowerCase().includes('online')
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': program.location?.toLowerCase().includes('online') ? 'VirtualLocation' : 'Place',
      name: program.location || 'Gutsy Women Foundation',
      address: program.location,
    },
    organizer: {
      '@type': 'NGO',
      name: 'Gutsy Women Foundation',
      url: 'https://www.gutsywomenfoundation.org',
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programJsonLd) }}
      />
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(56px,7vw,96px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }} className="hero-grid">
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
              <Badge tone={program.status}>{program.statusLabel}</Badge>
              {program.subtitle && <Capsule tone="outline" size="sm">{program.subtitle}</Capsule>}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(32px,4vw,54px)', lineHeight: 1.02, margin: 0 }}>
              {program.title}
            </h1>
            {program.theme && (
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 800, color: 'var(--gwf-gold-500)', fontSize: 18, margin: '14px 0 0', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                {program.theme}
              </p>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '24px 0 32px' }}>
              {program.dates && <Meta icon="calendar" text={program.dates} />}
              {program.time && <Meta icon="clock" text={program.time} />}
              {program.location && <Meta icon="map-pin" text={program.location} />}
            </div>
            {program.status === 'open' && (
              <Link href="/apply">
                <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Apply Now</Button>
              </Link>
            )}
          </div>
          {program.image && (
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-pop)', border: '4px solid rgba(255,255,255,.2)' }}>
              <img src={program.image} alt={program.title} style={{ width: '100%', height: 360, objectFit: 'cover' }} />
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(24px,2.5vw,34px)', color: 'var(--gwf-ink)', margin: '0 0 20px' }}>About This Programme</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: 0 }}>{program.longDescription}</p>
          {program.status === 'open' && (
            <div style={{ marginTop: 32 }}>
              <Link href="/apply">
                <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Apply Now</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {program.slug === 'masterclass' && (
        <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--gwf-ink)', margin: '0 0 12px', textAlign: 'center' }}>Cohort 1 Highlights</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', maxWidth: 560, margin: '0 auto 28px', textAlign: 'center' }}>
              A look inside Cohort 1 — 40 women, 3 days of sessions, fireside chats, and real conversations that turned ideas into action.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }} className="gallery-grid">
              <div style={{ gridColumn: 'span 2', height: 340, overflow: 'hidden' }}>
                <img src="/assets/gwf-masterclass-session.jpg" alt="Cohort 1 Masterclass session with presenter and screen" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 340, overflow: 'hidden' }}>
                <img src="/assets/gwf-masterclass-banner.jpg" alt="GWF and EBL Mentorship Program banner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-masterclass-participants.jpg" alt="Cohort 1 participants at workshop tables" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-masterclass-speaker-red.jpg" alt="Cohort 1 participant sharing at the microphone" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-masterclass-speaker-blue.jpg" alt="Cohort 1 participant speaking with microphone" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {program.slug === 'anti-drug-mentorship' && (
        <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--gwf-ink)', margin: '0 0 28px', textAlign: 'center' }}>Program Highlights</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }} className="gallery-grid">
              <div style={{ gridColumn: 'span 2', height: 320, overflow: 'hidden' }}>
                <img src="/assets/gwf-antidrug-facilitator.jpg" alt="GWF facilitator at Anti-Drug program" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 320, overflow: 'hidden' }}>
                <img src="/assets/gwf-antidrug-student-speaker.jpg" alt="Student speaking at GWF program" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 260, overflow: 'hidden' }}>
                <img src="/assets/gwf-antidrug-audience.jpg" alt="Students listening at GWF program" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 260, overflow: 'hidden' }}>
                <img src="/assets/gwf-antidrug-team.jpg" alt="GWF team with students" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 260, overflow: 'hidden' }}>
                <img src="/assets/gwf-antidrug-male-speaker.jpg" alt="Speaker at GWF program" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {program.slug === 'anti-drug-cape-coast' && (
        <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--gwf-ink)', margin: '0 0 28px', textAlign: 'center' }}>Program Highlights</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }} className="gallery-grid">
              <div style={{ gridColumn: 'span 2', height: 340, overflow: 'hidden' }}>
                <img src="/assets/gwf-cape-coast-audience.jpg" alt="Students engaged at GWF Cape Coast program" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 340, overflow: 'hidden' }}>
                <img src="/assets/gwf-cape-coast-address.jpg" alt="GWF speaker addressing Cape Coast students" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-cape-coast-mentorship.jpg" alt="GWF one-on-one mentorship session" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-cape-coast-dance.jpg" alt="Students and GWF team dancing together" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-cape-coast-speaker.jpg" alt="GWF speaker at Cape Coast school" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {program.slug === 'iwd-mentorship-adenta' && (
        <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--gwf-ink)', margin: '0 0 28px', textAlign: 'center' }}>Program Highlights</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }} className="gallery-grid">
              <div style={{ gridColumn: 'span 2', height: 340, overflow: 'hidden' }}>
                <img src="/assets/gwf-iwd-address.jpg" alt="GWF speaker addressing students at IWD session" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 340, overflow: 'hidden' }}>
                <img src="/assets/gwf-iwd-team-photo.jpg" alt="GWF team with Adenta students" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-iwd-donations.jpg" alt="GWF donating supplies to students" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-iwd-handover.jpg" alt="GWF handing gift to student" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-iwd-students.jpg" alt="Students attentively watching GWF Mentorship Program" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {program.slug === 'samira-bawumia-visit' && (
        <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--gwf-ink)', margin: '0 0 28px', textAlign: 'center' }}>Visit Highlights</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }} className="gallery-grid">
              <div style={{ gridColumn: 'span 2', height: 400, overflow: 'hidden' }}>
                <img src="/assets/gwf-samira-bawumia-group.jpg" alt="GWF team with H.E. Samira Bawumia" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 400, overflow: 'hidden' }}>
                <img src="/assets/gwf-samira-bawumia-closeup.jpg" alt="H.E. Samira Bawumia, former Second Lady of Ghana" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 300, overflow: 'hidden' }}>
                <img src="/assets/gwf-samira-bawumia-portrait.jpg" alt="GWF founder with H.E. Samira Bawumia" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 300, overflow: 'hidden' }}>
                <img src="/assets/gwf-samira-bawumia-session.jpg" alt="GWF team in discussion during the courtesy visit" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 300, overflow: 'hidden' }}>
                <img src="/assets/gwf-samira-bawumia-notes.jpg" alt="GWF CEO taking notes during the meeting" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {program.slug === 'annual-meeting' && (
        <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--gwf-ink)', margin: '0 0 28px', textAlign: 'center' }}>Meeting Highlights</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }} className="gallery-grid">
              <div style={{ gridColumn: 'span 2', height: 360, overflow: 'hidden' }}>
                <img src="/assets/gwf-annual-meeting-group.jpg" alt="GWF team group photo at Annual Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 360, overflow: 'hidden' }}>
                <img src="/assets/gwf-annual-meeting-group2.jpg" alt="GWF attendees at Annual Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-annual-meeting-session.jpg" alt="Presenters addressing attendees at GWF Annual Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-annual-meeting-speaker.jpg" alt="Speaker presenting at GWF Annual Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-annual-meeting-presenter.jpg" alt="Volunteer presenter at GWF Annual Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {program.slug === 'anti-drug-campaign-drive' && (
        <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--gwf-ink)', margin: '0 0 12px', textAlign: 'center' }}>Campaign Highlights</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', maxWidth: 620, margin: '0 auto 28px', textAlign: 'center' }}>
              Abuakwa State College · Mount Sinai SHS · Ghana National College · La PRESEC · Benkum Senior High · Holy Trinity Senior High
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }} className="gallery-grid">
              <div style={{ gridColumn: 'span 2', height: 360, overflow: 'hidden' }}>
                <img src="/assets/gwf-campaign-auditorium.jpg" alt="Hundreds of students gathered for the GWF Anti-Drug Campaign" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 360, overflow: 'hidden' }}>
                <img src="/assets/gwf-campaign-classroom.jpg" alt="GWF facilitator in classroom with The Gutsy Anti-Drug banner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-campaign-tent-session.jpg" alt="GWF speaker addressing students under a tent" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-campaign-assembly.jpg" alt="GWF Anti-Drug Campaign assembly session" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src="/assets/gwf-campaign-group.jpg" alt="GWF team and students at the Anti-Drug Campaign" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </main>
  )
}

function Meta({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }}>
      <span style={{ width: 36, height: 36, borderRadius: 0, background: 'rgba(255,255,255,.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gwf-gold-500)', flexShrink: 0 }}>
        <Icon name={icon} size={17} />
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15 }}>{text}</span>
    </div>
  )
}
