/* Gutsy Women Foundation — Navbar */
(() => {
  window.GWF = window.GWF || {};
  const { Button } = window.GutsyWomenFoundationDesignSystem_dd7d23;
  const NAV = ['Home', 'About', 'Programs', 'Blog', 'Contact'];

  function Nav({ onApply, active = 'Home', onNav }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const el = document.querySelector('[data-kit-scroll]');
      if (!el) return;
      const onScroll = () => setScrolled(el.scrollTop > 12);
      el.addEventListener('scroll', onScroll);
      return () => el.removeEventListener('scroll', onScroll);
    }, []);

    return (
      <header style={{ position: 'sticky', top: 0, zIndex: 40, background: scrolled ? 'rgba(255,255,255,0.9)' : '#fff', backdropFilter: scrolled ? 'saturate(160%) blur(10px)' : 'none', borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`, transition: 'background var(--dur-base), border-color var(--dur-base)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', height: 72, display: 'flex', alignItems: 'center', gap: 24 }}>
          <a onClick={() => onNav && onNav('Home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', textDecoration: 'none' }}>
            <img src="../../assets/logo-lockup.png" alt="Gutsy Women Foundation" style={{ height: 42 }} />
          </a>
          <nav style={{ marginLeft: 'auto', display: 'flex', gap: 28, alignItems: 'center' }} className="kit-desktop-nav">
            {NAV.map((n) => <NavLink key={n} label={n} active={active === n} onClick={() => onNav && onNav(n)} />)}
          </nav>
          <div className="kit-desktop-nav">
            <Button variant="primary" size="sm" onClick={onApply}>Apply Now</Button>
          </div>
          <button onClick={() => setOpen(true)} className="kit-mobile-toggle" style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gwf-purple-700)' }} aria-label="Menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </button>
        </div>

        {open && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'linear-gradient(150deg,var(--gwf-purple-600),var(--gwf-purple-900))', display: 'flex', flexDirection: 'column', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }} aria-label="Close">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 24, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
              {NAV.map((n) => (
                <a key={n} onClick={() => { onNav && onNav(n); setOpen(false); }} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 30, color: active === n ? 'var(--gwf-gold-500)' : '#fff', cursor: 'pointer' }}>{n}</a>
              ))}
              <div style={{ marginTop: 24 }}>
                <Button variant="gold" size="lg" onClick={() => { setOpen(false); onApply(); }}>Apply Now</Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    );
  }

  function NavLink({ label, active, onClick }) {
    const [hover, setHover] = React.useState(false);
    return (
      <a onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, cursor: 'pointer', color: active ? 'var(--gwf-purple-700)' : (hover ? 'var(--gwf-gold-600)' : 'var(--gwf-ink-soft)'), position: 'relative', paddingBottom: 4, transition: 'color var(--dur-fast)' }}>
        {label}
        <span style={{ position: 'absolute', left: 0, bottom: 0, height: 2.5, width: (active || hover) ? '100%' : '0%', background: active ? 'var(--gwf-purple-600)' : 'var(--gwf-gold-500)', borderRadius: 2, transition: 'width var(--dur-base) var(--ease-out)' }} />
      </a>
    );
  }

  window.GWF.Nav = Nav;
})();
