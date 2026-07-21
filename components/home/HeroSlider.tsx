'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Icon } from '@/components/ui/Icon'

const SLIDES = [
  { src: '/assets/gwf-masterclass-audience.jpg', alt: 'Cohort 1 participants at the GWF Masterclass' },
  { src: '/assets/gwf-masterclass-session.jpg', alt: 'GWF Masterclass session in progress' },
  { src: '/assets/gwf-masterclass-participants.jpg', alt: 'Cohort 1 women at workshop tables' },
  { src: '/assets/gwf-group-photo.jpg', alt: 'GWF community group photo' },
  { src: '/assets/gwf-cake-cutting.jpg', alt: 'GWF celebration ceremony' },
  { src: '/assets/gwf-samira-bawumia-session.jpg', alt: 'GWF team with H.E. Samira Bawumia' },
]

const INTERVAL = 5000

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const go = useCallback((idx: number) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => go(current + 1), [current, go])
  const prev = useCallback(() => go(current - 1), [current, go])

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, INTERVAL)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, paused, next])

  return (
    <div
      style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-pop)', border: '4px solid rgba(255,255,255,.85)', aspectRatio: '4/3', maxHeight: 420, cursor: 'pointer' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.7s ease',
            pointerEvents: i === current ? 'auto' : 'none',
          }}
        >
          <img src={s.src} alt={s.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous photo"
        style={{
          position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,.45)', border: 'none', borderRadius: '50%',
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)',
        }}
      >
        <Icon name="chevron-left" size={18} />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next photo"
        style={{
          position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,.45)', border: 'none', borderRadius: '50%',
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)',
        }}
      >
        <Icon name="chevron-right" size={18} />
      </button>

      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 7, zIndex: 10 }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? 22 : 8, height: 8,
              borderRadius: 4, border: 'none', padding: 0,
              background: i === current ? '#fff' : 'rgba(255,255,255,.45)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Location badge */}
      <div style={{ position: 'absolute', bottom: 44, right: 12, zIndex: 10, background: 'rgba(74,26,110,0.85)', backdropFilter: 'blur(6px)', borderRadius: 20, padding: '5px 12px 5px 8px', display: 'flex', alignItems: 'center', gap: 5, color: '#fff', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)' }}>
        <Icon name="map-pin" size={14} />
        Yota East, Legon
      </div>
    </div>
  )
}
