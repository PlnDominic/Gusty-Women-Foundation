'use client'

import React from 'react'

// Live countdown to the event start. Renders placeholders on the server and
// starts ticking after hydration so server and client markup always match.
export function EventCountdown({ target, label }: { target: string; label: string }) {
  const end = React.useMemo(() => Date.parse(target), [target])
  const [now, setNow] = React.useState<number | null>(null)

  React.useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = now === null ? null : Math.max(0, end - now)
  if (diff === 0) return null

  const units: [string, number | null][] = [
    ['Days', diff === null ? null : Math.floor(diff / 86400000)],
    ['Hours', diff === null ? null : Math.floor(diff / 3600000) % 24],
    ['Mins', diff === null ? null : Math.floor(diff / 60000) % 60],
    ['Secs', diff === null ? null : Math.floor(diff / 1000) % 60],
  ]

  return (
    <div className="rr-countdown" role="timer" aria-label={label}>
      <span className="rr-countdown-label">{label}</span>
      <div className="rr-countdown-units">
        {units.map(([unit, value]) => (
          <div key={unit} className="rr-unit">
            <span className="rr-unit-value">{value === null ? '--' : String(value).padStart(2, '0')}</span>
            <span className="rr-unit-label">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
