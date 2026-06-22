import { SectionHeading } from '@/components/ui/SectionHeading'

export function PhotoGallery() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Our Community" title="Moments in Motion" align="center" style={{ marginBottom: 36 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }} className="gallery-grid">
          {/* Row 1: masterclass session (wide) + banner */}
          <div style={{ gridColumn: 'span 2', height: 340, overflow: 'hidden' }}>
            <img src="/assets/gwf-masterclass-session.jpg" alt="GWF Cohort 1 Masterclass session" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
          <div style={{ gridRow: 'span 2', height: 688, overflow: 'hidden' }}>
            <img src="/assets/gwf-masterclass-banner.jpg" alt="GWF and EBL Mentorship Program banner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
          {/* Row 2: participants + speaker */}
          <div style={{ height: 344, overflow: 'hidden' }}>
            <img src="/assets/gwf-masterclass-participants.jpg" alt="Cohort 1 participants at workshop tables" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ height: 344, overflow: 'hidden' }}>
            <img src="/assets/gwf-masterclass-speaker-blue.jpg" alt="Cohort 1 participant speaking at the microphone" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
          {/* Row 3: full width — Cape Coast energy */}
          <div style={{ gridColumn: 'span 3', height: 300, overflow: 'hidden' }}>
            <img src="/assets/gwf-cape-coast-audience.jpg" alt="Students engaged at GWF Cape Coast program" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
