import { SectionHeading } from '@/components/ui/SectionHeading'

const PHOTOS = [
  { src: '/assets/gwf-school-visit.jpg', alt: 'GWF school visit with students', span: 2, tall: false },
  { src: '/assets/gwf-purple-mic.jpg', alt: 'GWF speaker with microphone', span: 1, tall: false },
  { src: '/assets/gwf-mentorship-convo.jpg', alt: 'GWF one-on-one mentorship', span: 1, tall: false },
  { src: '/assets/gwf-team-tshirts.jpg', alt: 'GWF team in branded t-shirts', span: 1, tall: false },
  { src: '/assets/gwf-group-photo.jpg', alt: 'GWF group with Instagram frame', span: 1, tall: false },
]

export function PhotoGallery() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Our Community" title="Moments in Motion" align="center" style={{ marginBottom: 36 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
          {/* Row 1: wide left + tall right */}
          <div style={{ gridColumn: 'span 2', height: 340, overflow: 'hidden' }}>
            <img src="/assets/gwf-school-visit.jpg" alt="GWF school visit" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
          <div style={{ gridRow: 'span 2', height: 688, overflow: 'hidden' }}>
            <img src="/assets/gwf-purple-mic.jpg" alt="GWF speaker mic" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
          {/* Row 2: two equal below left */}
          <div style={{ height: 344, overflow: 'hidden' }}>
            <img src="/assets/gwf-mentorship-convo.jpg" alt="GWF mentorship" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ height: 344, overflow: 'hidden' }}>
            <img src="/assets/gwf-team-tshirts.jpg" alt="GWF team" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          {/* Row 3: full width panorama */}
          <div style={{ gridColumn: 'span 3', height: 300, overflow: 'hidden' }}>
            <img src="/assets/gwf-group-photo.jpg" alt="GWF group photo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
