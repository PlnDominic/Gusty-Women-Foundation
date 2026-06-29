'use client'

import React from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'

const QUOTES = [
  { q: 'Cohort 1 gave me the courage and the network to finally launch. I stopped dreaming and started building.', n: 'Bernice Amoah', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-bernice-amoah.jpg' },
  { q: 'The mentorship was real and personal. My mentor still checks in on my goals months later.', n: 'Nana Kwegyirba Koomson', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-nana-koomson.jpg' },
  { q: 'I walked in with an idea and walked out with a plan, a team and partners who believe in it.', n: 'Gloria Darko', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-gloria-darko.jpg' },
  { q: 'The three days reshaped how I see myself as a leader. I left with clarity, confidence and a network I still lean on.', n: 'Regina Clottey', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-regina-clottey.jpg' },
  { q: 'Every session pushed me further than I expected. GWF doesn\'t let you play small.', n: 'Lawrencia Oparebea Sakyi', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-lawrencia-sakyi.jpg' },
  { q: 'I came in uncertain about my path. I left with a plan, a community and the belief that I can actually do this.', n: 'Edith Amakye', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-edith-amakye.jpg' },
  { q: 'Being surrounded by driven women who genuinely want to see each other succeed changed everything for me.', n: 'Shemanica Naa Ayeley Aryeetey', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-shemanica-aryeetey.jpg' },
  { q: 'GWF showed me that mentorship isn\'t just advice — it\'s accountability, connection and real support.', n: 'Fatimatu Dauda Affanyi', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-fatimatu-affanyi.jpg' },
  { q: 'Cohort 1 transformed how I think about building. The tools, the mentors and the sisterhood are unlike anything else.', n: 'Asante-Ansah Kynell Marklyna', r: 'Cohort 1 Graduate', img: '/assets/gwf-cohort1-kynell-marklyna.jpg' },
]

export function TestimonialCarousel() {
  const [idx, setIdx] = React.useState(0)
  const go = (d: number) => setIdx((p) => (p + d + QUOTES.length) % QUOTES.length)
  const t = QUOTES[idx]

  return (
    <section style={{ padding: 'clamp(56px,8vw,104px) 0', background: 'linear-gradient(160deg,var(--gwf-purple-700),var(--gwf-purple-900))' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', textAlign: 'center' }}>
        <SectionHeading eyebrow="Voices" title="From Our Cohorts" align="center" onDark />
        <div style={{ position: 'relative', marginTop: 44 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 120, lineHeight: 0.6, color: 'var(--gwf-gold-500)', opacity: 0.5, display: 'block', height: 56 }}>&ldquo;</span>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              color: '#fff',
              fontSize: 'clamp(20px,2.4vw,30px)',
              lineHeight: 1.3,
              margin: '0 auto',
              maxWidth: 720,
            }}
          >
            {t.q}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 28 }}>
            <img
              src={t.img}
              alt={t.n}
              style={{ width: 52, height: 52, borderRadius: 0, objectFit: 'cover', border: '3px solid var(--gwf-gold-500)' }}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: '#fff', fontSize: 15 }}>{t.n}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.65)' }}>{t.r}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center', marginTop: 28 }}>
            <RoundBtn onClick={() => go(-1)} icon="chevron-left" />
            <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
              {QUOTES.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setIdx(k)}
                  style={{
                    width: k === idx ? 22 : 8,
                    height: 8,
                    borderRadius: 0,
                    background: k === idx ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.35)',
                    cursor: 'pointer',
                    transition: 'width var(--dur-base)',
                    border: 'none',
                    padding: 0,
                  }}
                  aria-label={`Go to testimonial ${k + 1}`}
                />
              ))}
            </div>
            <RoundBtn onClick={() => go(1)} icon="chevron-right" />
          </div>
        </div>
      </div>
    </section>
  )
}

function RoundBtn({ onClick, icon }: { onClick: () => void; icon: string }) {
  const [h, setH] = React.useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: 0,
        border: '2px solid rgba(255,255,255,.4)',
        background: h ? '#fff' : 'transparent',
        color: h ? 'var(--gwf-purple-700)' : '#fff',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all var(--dur-fast)',
      }}
    >
      <Icon name={icon} size={20} />
    </button>
  )
}
