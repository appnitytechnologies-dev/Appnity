import { BRAND } from '../../constants/brand';
import { PROCESS_STEPS } from '../../constants/services';
import { useResponsive } from '../../hooks/useResponsive';

export default function ProcessSection() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)';

  return (
    <section style={{ padding: isMobile ? '48px 20px' : '96px 64px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px 6px 8px', borderRadius: 999, marginBottom: 18,
            background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
            fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad, boxShadow: '0 0 0 3px rgba(122,76,255,0.12)' }} />
            How we work
          </div>
          <h2 style={{ fontSize: isMobile ? 36 : 56, fontFamily: BRAND.display, fontWeight: 700, letterSpacing: '-0.025em', color: BRAND.ink }}>
            A process you can plan around.
          </h2>
          <p style={{ marginTop: 20, fontSize: 17, color: BRAND.inkMute }}>
            Same five-stage rhythm on every engagement, scaled from four-week MVPs to multi-year platforms.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {!isMobile && (
            <div style={{
              position: 'absolute', top: 38, left: '8%', right: '8%', height: 1,
              background: `linear-gradient(90deg, transparent, ${BRAND.border} 10%, ${BRAND.border} 90%, transparent)`,
              zIndex: 0,
            }} />
          )}
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 24, position: 'relative', zIndex: 1 }}>
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.n} style={{ textAlign: 'left' }}>
                <div style={{
                  width: 76, height: 76, borderRadius: 18,
                  background: '#fff', border: `1px solid ${BRAND.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: BRAND.display, fontSize: 24, fontWeight: 700, color: BRAND.ink,
                  boxShadow: BRAND.shadowSm, position: 'relative',
                }}>
                  {s.n}
                  {i === 0 && (
                    <div style={{
                      position: 'absolute', inset: -2, borderRadius: 19, padding: 2,
                      background: BRAND.grad,
                      WebkitMask: 'linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)',
                      WebkitMaskComposite: 'xor', maskComposite: 'exclude',
                      pointerEvents: 'none',
                    }} />
                  )}
                </div>
                <div style={{ fontSize: isMobile ? 17 : 20, fontWeight: 700, marginTop: 22, letterSpacing: '-0.02em', color: BRAND.ink }}>{s.t}</div>
                <p style={{ marginTop: 10, fontSize: 14, color: BRAND.inkMute, lineHeight: 1.55 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
