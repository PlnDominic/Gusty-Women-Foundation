import React from 'react';

/**
 * Gutsy Women Foundation — SectionHeading
 * Eyebrow + uppercase display title with optional gold swoosh underline.
 */
export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  onDark = false,
  swoosh = false,
  swooshWord = null,
  style = {},
}) {
  const titleColor = onDark ? '#fff' : 'var(--gwf-ink)';
  return (
    <div style={{ textAlign: align, display: 'flex', flexDirection: 'column', gap: 10, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }}>
      {eyebrow && (
        <span style={{
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
          textTransform: 'uppercase', letterSpacing: '0.14em',
          color: onDark ? 'var(--gwf-gold-500)' : 'var(--gwf-magenta-600)',
        }}>{eyebrow}</span>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        textTransform: 'uppercase', letterSpacing: '-0.01em',
        fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.04,
        color: titleColor, margin: 0,
      }}>
        {swoosh && swooshWord ? (
          <span style={{ position: 'relative', display: 'inline-block' }}>
            {swooshWord}
            <span style={{ position: 'absolute', left: 0, right: '4%', bottom: 2, height: 7, background: 'var(--gwf-gold-500)', borderRadius: 7, transform: 'rotate(-1deg)' }} />
          </span>
        ) : null}
        {swoosh && swooshWord ? ' ' : ''}
        {title}
      </h2>
    </div>
  );
}
