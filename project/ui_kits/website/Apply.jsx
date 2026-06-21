/* Gutsy Women Foundation — Multi-step application */
(() => {
  window.GWF = window.GWF || {};
  const { Button, Input, Capsule } = window.GutsyWomenFoundationDesignSystem_dd7d23;
  const Icon = window.GWF.Icon;
  const STEPS = ['Personal', 'Background', 'Motivation', 'Review'];

  function Apply({ onClose }) {
    const [step, setStep] = React.useState(0);
    const [done, setDone] = React.useState(false);
    const [f, setF] = React.useState({ name: '', age: '', location: '', email: '', phone: '', education: '', occupation: '', why: '', goals: '' });
    const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
    const pct = ((step + 1) / STEPS.length) * 100;

    if (done) return <Success onClose={onClose} name={f.name} />;

    return (
      <div style={{ maxWidth: 720, margin: '0 auto', background: '#fff', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ background: 'linear-gradient(135deg,var(--gwf-purple-600),var(--gwf-purple-900))', padding: '28px clamp(24px,4vw,40px) 24px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Capsule tone="gold" size="sm">Cohort 2 Application</Capsule>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 26, margin: '14px 0 0' }}>{STEPS[step]} details</h2>
            </div>
            {onClose && <button onClick={onClose} style={{ background: 'rgba(255,255,255,.14)', border: 'none', borderRadius: '50%', width: 38, height: 38, color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={18} /></button>}
          </div>
          <div style={{ marginTop: 22 }}>
            <div style={{ height: 8, borderRadius: 8, background: 'rgba(255,255,255,.18)', overflow: 'hidden' }}>
              <div style={{ width: pct + '%', height: '100%', background: 'var(--gwf-gold-500)', borderRadius: 8, transition: 'width var(--dur-slow) var(--ease-out)' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              {STEPS.map((s, i) => <span key={s} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: i <= step ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.55)' }}>{i + 1}. {s}</span>)}
            </div>
          </div>
        </div>

        <div style={{ padding: 'clamp(24px,4vw,40px)' }}>
          {step === 0 && (
            <Grid>
              <Input label="Full name" placeholder="Ama Mensah" value={f.name} onChange={set('name')} required />
              <Input label="Age" type="number" placeholder="22" value={f.age} onChange={set('age')} />
              <Input label="Location" placeholder="Accra, Ghana" value={f.location} onChange={set('location')} required />
              <Input label="Email" type="email" placeholder="you@example.com" value={f.email} onChange={set('email')} required />
              <Input label="Phone" placeholder="+233 ..." value={f.phone} onChange={set('phone')} />
            </Grid>
          )}
          {step === 1 && (
            <Grid>
              <Input label="Highest education" placeholder="BSc, University of Ghana" value={f.education} onChange={set('education')} />
              <Input label="Current occupation" placeholder="Student / Founder / Employed" value={f.occupation} onChange={set('occupation')} />
            </Grid>
          )}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Input label="Why do you want to join Cohort 2?" multiline rows={4} placeholder="Tell us about the idea you want to build..." value={f.why} onChange={set('why')} required />
              <Input label="What goals do you hope to achieve?" multiline rows={4} placeholder="Where do you want to be in 12 months?" value={f.goals} onChange={set('goals')} />
            </div>
          )}
          {step === 3 && <Review f={f} onEdit={setStep} />}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30, gap: 12 }}>
            <Button variant="ghost" onClick={() => (step === 0 ? onClose && onClose() : setStep(step - 1))}>{step === 0 ? 'Cancel' : 'Back'}</Button>
            {step < STEPS.length - 1
              ? <Button variant="primary" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => setStep(step + 1)}>Continue</Button>
              : <Button variant="gold" iconRight={<Icon name="check" size={18} />} onClick={() => setDone(true)}>Submit Application</Button>}
          </div>
        </div>
      </div>
    );
  }

  function Grid({ children }) {
    return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="kit-apply-grid">{children}</div>;
  }

  function Review({ f, onEdit }) {
    const rows = [
      ['Personal', 0, [['Name', f.name], ['Age', f.age], ['Location', f.location], ['Email', f.email], ['Phone', f.phone]]],
      ['Background', 1, [['Education', f.education], ['Occupation', f.occupation]]],
      ['Motivation', 2, [['Why', f.why], ['Goals', f.goals]]],
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {rows.map(([title, idx, items]) => (
          <div key={title} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 15, color: 'var(--gwf-purple-700)' }}>{title}</span>
              <a onClick={() => onEdit(idx)} style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--gwf-magenta-600)', cursor: 'pointer' }}>Edit</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {items.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-body)', fontSize: 14 }}>
                  <span style={{ width: 96, color: 'var(--gwf-ink-muted)', flexShrink: 0 }}>{k}</span>
                  <span style={{ color: 'var(--gwf-ink)', fontWeight: 500 }}>{v || <em style={{ color: 'var(--gwf-ink-muted)', fontWeight: 400 }}>—</em>}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function Success({ onClose, name }) {
    return (
      <div style={{ maxWidth: 560, margin: '0 auto', background: '#fff', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', padding: 'clamp(36px,5vw,56px)', textAlign: 'center' }}>
        <span style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}><Icon name="check" size={40} /></span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 30, color: 'var(--gwf-ink)', margin: '22px 0 0' }}>Application received!</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '12px 0 0' }}>Thank you{name ? `, ${name.split(' ')[0]}` : ''}. We've received your Cohort 2 application and will be in touch by email soon. Keep building.</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 26 }}>
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((s) => <span key={s} style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s} size={19} /></span>)}
        </div>
        <div style={{ marginTop: 26 }}><Button variant="primary" onClick={onClose}>Back to Home</Button></div>
      </div>
    );
  }

  window.GWF.Apply = Apply;
})();
