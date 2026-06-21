/* Gutsy Women Foundation — Footer */
(() => {
  window.GWF = window.GWF || {};
  const Icon = window.GWF.Icon;
  const SOCIALS = ['facebook', 'twitter', 'instagram', 'music', 'linkedin'];
  const COLS = [
    { h: 'Explore', items: ['Home', 'About', 'Programs', 'Blog', 'Contact'] },
    { h: 'Programs', items: ['Masterclass', 'Bootcamps', 'Webinars', 'Apply'] },
  ];

  function Footer({ onNav }) {
    return (
      <footer style={{ background: 'var(--gwf-purple-900)', color: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(48px,6vw,72px) clamp(16px,4vw,40px) 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 'clamp(28px,4vw,48px)' }} className="kit-footer-grid">
          <div>
            <img src="../../assets/logo-lockup.png" alt="Gutsy Women Foundation" style={{ height: 46, filter: 'brightness(0) invert(1)', opacity: 0.96 }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.65)', margin: '18px 0 0', maxWidth: 280 }}>Leveling the playing field for young women in Ghana — through mentorship, training and community.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>{SOCIALS.map((s) => <Social key={s} name={s} />)}</div>
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-gold-500)', margin: '0 0 16px' }}>{c.h}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.items.map((it) => <li key={it}><FooterLink label={it} onClick={() => onNav && onNav(it)} /></li>)}
              </ul>
            </div>
          ))}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-gold-500)', margin: '0 0 16px' }}>Get in touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:gutsywomenfoundation@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,.8)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 14 }}><Icon name="mail" size={17} color="var(--gwf-gold-500)" /> gutsywomenfoundation@gmail.com</a>
              <span style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,.8)', fontFamily: 'var(--font-body)', fontSize: 14 }}><Icon name="map-pin" size={17} color="var(--gwf-gold-500)" /> Yota East, Legon · Accra</span>
              <a href="https://www.gutsywomenfoundation.org" style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,.8)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 14 }}><Icon name="arrow-up-right" size={17} color="var(--gwf-gold-500)" /> www.gutsywomenfoundation.org</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px clamp(16px,4vw,40px)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>© 2026 Gutsy Women Foundation. All rights reserved.</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Leveling the Playing Field</span>
          </div>
        </div>
      </footer>
    );
  }
  function Social({ name }) {
    const [h, setH] = React.useState(false);
    return <a href="#" onClick={(e) => e.preventDefault()} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ width: 38, height: 38, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: h ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.1)', color: h ? 'var(--gwf-ink)' : '#fff', transition: 'all var(--dur-fast)' }}><Icon name={name} size={18} /></a>;
  }
  function FooterLink({ label, onClick }) {
    const [h, setH] = React.useState(false);
    return <a onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: h ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.72)', cursor: 'pointer', transition: 'color var(--dur-fast)' }}>{label}</a>;
  }

  window.GWF.Footer = Footer;
})();
