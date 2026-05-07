import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { WHY_US } from '../../constants/services';
import { useResponsive } from '../../hooks/useResponsive';

export default function WhyUs() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <section style={{ padding: isMobile ? '48px 20px' : '72px 64px', background: BRAND.ink, color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />
      <div style={{
        position: 'absolute', top: -200, right: -100, width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,76,255,0.25), transparent 60%)', filter: 'blur(20px)',
      }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end',
          gap: isMobile ? 16 : 32, marginBottom: isMobile ? 36 : 56,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px 6px 8px', borderRadius: 999,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad, boxShadow: '0 0 0 3px rgba(255,255,255,0.08)' }} />
              Why Appnity
            </div>
            <h2 style={{ color: '#fff', fontSize: isMobile ? 34 : 56, marginTop: 18, fontFamily: BRAND.display, fontWeight: 700, letterSpacing: '-0.025em' }}>
              Built for Businesses That Scale.
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 380, fontSize: 16, lineHeight: 1.6 }}>
            We earn the right to work on hard problems by being honest, fast, and accountable.
            Six things every Appnity engagement comes with — by default.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 16 }}>
          {WHY_US.map(w => {
            const I = Icons[w.icon];
            return (
              <div
                key={w.t}
                style={{
                  padding: 28, borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'background .2s, border-color .2s, transform .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = ''; }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: 'rgba(255,255,255,0.06)', color: '#D6B8FF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
                }}>
                  <I width="20" height="20" />
                </div>
                <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' }}>{w.t}</div>
                <p style={{ marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>{w.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
