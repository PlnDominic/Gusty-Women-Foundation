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
  return { title: program.title, description: program.description }
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug)
  if (!program) notFound()

  return (
    <main>
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
