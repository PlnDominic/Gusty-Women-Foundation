import { Icon } from '@/components/ui/Icon'

function BankRow({ label, value, mono, last }: { label: string; value: string; mono?: boolean; last?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '13px 0', borderBottom: last ? 'none' : '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
      <span style={{ fontFamily: mono ? 'var(--font-display)' : 'var(--font-body)', fontWeight: 700, fontSize: mono ? 16 : 14, color: 'var(--gwf-ink)', letterSpacing: mono ? '0.06em' : 0 }}>{value}</span>
    </div>
  )
}

export function OurBankers() {
  return (
    <section style={{ padding: 'clamp(36px,5vw,56px) clamp(16px,4vw,40px)', background: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-ink-muted)' }}>Our Bankers</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(18px,2vw,24px)', color: 'var(--gwf-ink)', margin: '10px 0 20px' }}>
          Bank Details
        </h2>
        <div style={{ border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
          <div style={{ background: 'var(--gwf-purple-900)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="landmark" size={16} color="var(--gwf-gold-500)" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              First Atlantic Bank — North Ridge
            </span>
          </div>
          <div style={{ padding: '0 20px' }}>
            <BankRow label="Account Name" value="GUTSY WOMEN FOUNDATION LBG" />
            <BankRow label="GHS Account" value="2301972751017" mono />
            <BankRow label="USD Account" value="2301971112012" mono last />
          </div>
        </div>
      </div>
    </section>
  )
}
