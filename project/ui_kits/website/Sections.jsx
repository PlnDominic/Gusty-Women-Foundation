/* Gutsy Women Foundation — homepage sections */
(() => {
  window.GWF = window.GWF || {};
  const NS = window.GutsyWomenFoundationDesignSystem_dd7d23;
  const { Button, Capsule, StatCard, SectionHeading } = NS;
  const Icon = window.GWF.Icon;
  const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' };

  function StatStrip() {
    return (
      <section style={{ background: 'var(--gwf-purple-100)', padding: 'clamp(40px,6vw,72px) 0' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }} className="kit-stat-grid">
          <StatCard value={2} label="Cohorts Run" accent="purple" />
          <StatCard value={250} suffix="+" label="Women Empowered" accent="gold" />
          <StatCard value={18} label="Partner Organisations" accent="magenta" />
        </div>
      </section>
    );
  }

  function Featured({ onApply }) {
    const facts = [
      { icon: 'calendar', text: '5th – 7th August 2026' },
      { icon: 'clock', text: '8:00AM Each Day' },
      { icon: 'map-pin', text: 'Yota East, Legon' },
    ];
    return (
      <section style={{ padding: 'clamp(56px,8vw,104px) 0', background: '#fff' }}>
        <div style={wrap}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'linear-gradient(135deg,var(--gwf-purple-600),var(--gwf-purple-900))', boxShadow: 'var(--shadow-lg)', display: 'grid', gridTemplateColumns: '1fr 0.85fr' }} className="kit-featured">
            <div style={{ padding: 'clamp(32px,4vw,56px)' }}>
              <div style={{ display: 'flex', gap: 8 }}>
                <Capsule tone="gold" size="sm">Featured Programme</Capsule>
                <Capsule tone="outline" size="sm">Cohort 2</Capsule>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(26px,3vw,40px)', lineHeight: 1.04, margin: '18px 0 0' }}>Mentorship Program<br />Masterclass</h2>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 800, color: 'var(--gwf-gold-500)', fontSize: 'clamp(15px,1.6vw,20px)', margin: '14px 0 0', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Ignite • Build • Scale</p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,.82)', fontSize: 16, lineHeight: 1.6, margin: '8px 0 0', maxWidth: 420 }}>Turning Dreams Into Reality. For young women ready to move beyond dreaming and start building.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '26px 0 30px' }}>
                {facts.map((f) => (
                  <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }}>
                    <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gwf-gold-500)' }}><Icon name={f.icon} size={18} /></span>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15.5 }}>{f.text}</span>
                  </div>
                ))}
              </div>
              <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={onApply}>Apply Now</Button>
            </div>
            <div style={{ position: 'relative', minHeight: 360 }}>
              <img src="../../assets/flyer-cohort2-alt.jpg" alt="Cohort 2 masterclass flyer" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const PILLARS = [
    { icon: 'users', title: 'Mentorship', body: 'One-to-one guidance from women who have built and led.' },
    { icon: 'graduation-cap', title: 'Training', body: 'Practical masterclasses that turn ideas into action plans.' },
    { icon: 'share-2', title: 'Networking', body: 'A community of ambitious peers, partners and sponsors.' },
    { icon: 'award', title: 'Leadership', body: 'Confidence and skills to lead in business and community.' },
  ];
  function WhatWeDo() {
    return (
      <section style={{ padding: 'clamp(56px,8vw,104px) 0', background: 'var(--gwf-purple-100)' }}>
        <div style={wrap}>
          <SectionHeading eyebrow="What We Do" title="Our Four Pillars" align="center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 44 }} className="kit-pillar-grid">
            {PILLARS.map((p, i) => <Pillar key={p.title} {...p} accent={['purple', 'gold', 'magenta', 'purple'][i]} />)}
          </div>
        </div>
      </section>
    );
  }
  function Pillar({ icon, title, body, accent }) {
    const [hover, setHover] = React.useState(false);
    const c = { purple: 'var(--gwf-purple-600)', gold: 'var(--gwf-gold-500)', magenta: 'var(--gwf-magenta-600)' }[accent];
    const bg = accent === 'gold' ? 'var(--gwf-gold-100)' : accent === 'magenta' ? 'var(--gwf-magenta-100)' : 'var(--gwf-purple-100)';
    return (
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px 24px', boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)', transform: hover ? 'translateY(-6px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)' }}>
        <span style={{ width: 54, height: 54, borderRadius: 16, background: bg, color: c, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={26} /></span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 19, color: 'var(--gwf-ink)', margin: '18px 0 8px' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--gwf-ink-soft)', margin: 0 }}>{body}</p>
      </div>
    );
  }

  const QUOTES = [
    { q: 'Cohort 1 gave me the courage and the network to finally launch. I stopped dreaming and started building.', n: 'Akosua D.', r: 'Founder, Cohort 1', img: '../../assets/event-participant.jpg' },
    { q: 'The mentorship was real and personal. My mentor still checks in on my goals months later.', n: 'Efua B.', r: 'Participant, Cohort 1', img: '../../assets/event-audience.jpg' },
    { q: 'I walked in with an idea and walked out with a plan, a team and partners who believe in it.', n: 'Naa K.', r: 'Founder, Cohort 1', img: '../../assets/event-hero.jpg' },
  ];
  function Testimonials() {
    const [i, setI] = React.useState(0);
    const go = (d) => setI((p) => (p + d + QUOTES.length) % QUOTES.length);
    const t = QUOTES[i];
    return (
      <section style={{ padding: 'clamp(56px,8vw,104px) 0', background: 'linear-gradient(160deg,var(--gwf-purple-700),var(--gwf-purple-900))' }}>
        <div style={{ ...wrap, maxWidth: 880, textAlign: 'center' }}>
          <SectionHeading eyebrow="Voices" title="From Our Cohorts" align="center" onDark />
          <div style={{ position: 'relative', marginTop: 44 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 120, lineHeight: 0.6, color: 'var(--gwf-gold-500)', opacity: 0.5, display: 'block', height: 56 }}>“</span>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: 'clamp(20px,2.4vw,30px)', lineHeight: 1.3, margin: '0 auto', maxWidth: 720 }}>{t.q}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 28 }}>
              <img src={t.img} alt={t.n} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--gwf-gold-500)' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: '#fff', fontSize: 15 }}>{t.n}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.65)' }}>{t.r}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 28 }}>
              <RoundBtn onClick={() => go(-1)} name="chevron-left" />
              <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                {QUOTES.map((_, k) => <span key={k} onClick={() => setI(k)} style={{ width: k === i ? 22 : 8, height: 8, borderRadius: 8, background: k === i ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.35)', cursor: 'pointer', transition: 'width var(--dur-base)' }} />)}
              </div>
              <RoundBtn onClick={() => go(1)} name="chevron-right" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  function RoundBtn({ onClick, name }) {
    const [h, setH] = React.useState(false);
    return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid rgba(255,255,255,.4)', background: h ? '#fff' : 'transparent', color: h ? 'var(--gwf-purple-700)' : '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--dur-fast)' }}><Icon name={name} size={20} /></button>;
  }

  const PARTNERS = ['ENABLE', 'IDEA HUB', 'LEGON', 'ACCRA TECH', 'BLOOM', 'ASCEND', 'YOTA'];
  function Partners() {
    return (
      <section style={{ padding: 'clamp(44px,6vw,72px) 0', background: '#fff' }}>
        <div style={wrap}>
          <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-ink-muted)', margin: '0 0 28px' }}>Partners &amp; Sponsors</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,5vw,56px)', justifyContent: 'center', alignItems: 'center' }}>
            {PARTNERS.map((p) => <span key={p} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--gwf-purple-300)', letterSpacing: '0.04em' }}>{p}</span>)}
          </div>
        </div>
      </section>
    );
  }

  function Newsletter() {
    const [email, setEmail] = React.useState('');
    const [done, setDone] = React.useState(false);
    return (
      <section style={{ padding: '0 0 clamp(64px,8vw,104px)', background: '#fff' }}>
        <div style={wrap}>
          <div style={{ borderRadius: 'var(--radius-xl)', background: 'var(--gwf-gold-500)', padding: 'clamp(32px,5vw,56px)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 32, alignItems: 'center', boxShadow: 'var(--shadow-md)' }} className="kit-news">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.05, color: 'var(--gwf-ink)', margin: 0 }}>Stay in the loop</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(26,26,46,.78)', margin: '10px 0 0', maxWidth: 380 }}>Get cohort openings, events and impact stories straight to your inbox.</p>
            </div>
            <div>
              {done ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--gwf-purple-700)' }}><Icon name="check" size={20} /> You're subscribed — thank you!</div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} style={{ display: 'flex', gap: 10, background: '#fff', padding: 6, borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-sm)' }}>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="you@example.com" style={{ flex: 1, border: 'none', outline: 'none', padding: '12px 18px', fontFamily: 'var(--font-body)', fontSize: 15, background: 'transparent', color: 'var(--gwf-ink)' }} />
                  <Button variant="primary" type="submit">Subscribe</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window.GWF, { StatStrip, Featured, WhatWeDo, Testimonials, Partners, Newsletter });
})();
