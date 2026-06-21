import React from 'react';

/**
 * Gutsy Women Foundation — StatCard
 * Big animated counter + label. Used in the homepage "About strip".
 */
export function StatCard({ value, suffix = '', label, accent = 'purple', animate = true, style = {} }) {
  const accents = {
    purple: 'var(--gwf-purple-600)',
    gold: 'var(--gwf-gold-600)',
    magenta: 'var(--gwf-magenta-600)',
  };
  const target = typeof value === 'number' ? value : parseInt(value, 10) || 0;
  const [display, setDisplay] = React.useState(animate ? 0 : target);

  React.useEffect(() => {
    if (!animate) { setDisplay(target); return; }
    let raf; const start = performance.now(); const dur = 1200;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, animate]);

  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: '28px 26px',
      borderTop: `4px solid ${accents[accent]}`,
      display: 'flex', flexDirection: 'column', gap: 4,
      ...style,
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(38px, 4.4vw, 56px)', lineHeight: 1,
        color: accents[accent], letterSpacing: '-0.02em',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {display.toLocaleString()}{suffix}
      </div>
      <div style={{
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
        textTransform: 'uppercase', letterSpacing: '0.06em',
        color: 'var(--gwf-ink-soft)',
      }}>{label}</div>
    </div>
  );
}
