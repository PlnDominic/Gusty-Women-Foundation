/* Gutsy Women Foundation — Hero */
(() => {
  window.GWF = window.GWF || {};
  const { Button, Capsule } = window.GutsyWomenFoundationDesignSystem_dd7d23;
  const Icon = window.GWF.Icon;

  function Hero({ onApply, onLearn }) {
    return (
      <section style={{ position: 'relative', background: 'linear-gradient(145deg,var(--gwf-purple-700) 0%,var(--gwf-purple-900) 70%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,197,24,.18),transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: -140, left: -100, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle,rgba(194,24,91,.22),transparent 70%)' }} />
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(48px,7vw,96px) clamp(16px,4vw,40px)', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(28px,5vw,72px)', alignItems: 'center', position: 'relative' }} className="kit-hero-grid">
          <div>
            <div style={{ display: 'inline-flex' }}>
              <Capsule tone="outline" iconLeft={<Icon name="sparkles" size={15} />}>Cohort 2 · Applications Open</Capsule>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(40px,6vw,72px)', lineHeight: 0.98, letterSpacing: '-0.015em', margin: '20px 0 0' }}>
              Leveling<br />the{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: 'var(--gwf-gold-500)' }}>
                Playing
                <span style={{ position: 'absolute', left: 0, right: '2%', bottom: 4, height: 9, background: 'var(--gwf-gold-500)', borderRadius: 8, opacity: 0.35, transform: 'rotate(-1.2deg)' }} />
              </span>{' '}Field
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.55, color: 'rgba(255,255,255,.82)', maxWidth: 460, margin: '20px 0 0' }}>
              We empower young women across Ghana with the mentorship, training and networks to move beyond dreaming — and start building.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
              <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={onApply}>Apply Now</Button>
              <Button variant="outline-light" size="lg" onClick={onLearn}>Learn More</Button>
            </div>
            <div style={{ display: 'flex', gap: 26, marginTop: 36 }}>
              <MiniStat n="2" l="Cohorts Run" />
              <Div />
              <MiniStat n="250+" l="Women Empowered" />
              <Div />
              <MiniStat n="18" l="Partners" />
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 380 }} className="kit-hero-photos">
            <Photo src="../../assets/event-audience.jpg" style={{ position: 'absolute', top: 0, right: 28, width: '74%', height: 250, transform: 'rotate(2.5deg)', zIndex: 2 }} />
            <Photo src="../../assets/event-participant.jpg" style={{ position: 'absolute', bottom: 0, left: 0, width: '62%', height: 220, transform: 'rotate(-3deg)', zIndex: 3 }} />
            <div style={{ position: 'absolute', bottom: 26, right: 0, zIndex: 4 }}>
              <Capsule tone="magenta" size="lg" iconLeft={<Icon name="map-pin" size={16} />}>Yota East, Legon</Capsule>
            </div>
          </div>
        </div>
      </section>
    );
  }
  function Photo({ src, style }) {
    return (
      <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-pop)', border: '4px solid rgba(255,255,255,.85)', ...style }}>
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  function MiniStat({ n, l }) {
    return (
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--gwf-gold-500)', lineHeight: 1 }}>{n}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.7)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</div>
      </div>
    );
  }
  function Div() { return <div style={{ width: 1, background: 'rgba(255,255,255,.2)' }} />; }

  window.GWF.Hero = Hero;
})();
