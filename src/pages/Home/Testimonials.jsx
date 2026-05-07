import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { TESTIMONIALS } from '../../constants/services';
import { useResponsive } from '../../hooks/useResponsive';

export default function Testimonials() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

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
            Client stories
          </div>
          <h2 style={{ fontSize: isMobile ? 34 : 56, fontFamily: BRAND.display, fontWeight: 700, letterSpacing: '-0.025em', color: BRAND.ink }}>
            What it&apos;s like to work with us.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 16 }}>
          {TESTIMONIALS.map(t => (
            <div
              key={t.a}
              style={{
                padding: 32, borderRadius: 14,
                background: '#fff', border: `1px solid ${BRAND.border}`,
                display: 'flex', flexDirection: 'column',
                transition: 'transform .2s ease, box-shadow .2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = BRAND.shadowLg; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <Icons.Quote width="28" height="28" style={{ color: BRAND.purple, opacity: 0.4 }} />
              <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, color: BRAND.ink, flex: 1 }}>
                &ldquo;{t.q}&rdquo;
              </p>
              <div style={{
                marginTop: 28, paddingTop: 20, borderTop: `1px solid ${BRAND.border}`,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: BRAND.grad, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                }}>{t.i}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: BRAND.ink }}>{t.a}</div>
                  <div style={{ fontSize: 12.5, color: BRAND.inkMute }}>{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
