import { useNavigate } from 'react-router-dom';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { SERVICES } from '../../constants/services';
import { useResponsive } from '../../hooks/useResponsive';

export default function ServicesGrid() {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  return (
    <section style={{ padding: isMobile ? '48px 20px' : '96px 64px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end',
          gap: 24, marginBottom: isMobile ? 36 : 56,
        }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px 6px 8px', borderRadius: 999,
              background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
              fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad, boxShadow: '0 0 0 3px rgba(122,76,255,0.12)' }} />
              What we do
            </div>
            <h2 style={{
              fontSize: isMobile ? 36 : 56, marginTop: 18, fontFamily: BRAND.display,
              fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.05, color: BRAND.ink,
            }}>
              Everything your business<br />
              <span style={{ color: BRAND.inkMute }}>needs to grow digitally.</span>
            </h2>
          </div>
          <button
            onClick={() => navigate('/services')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'none', border: 0, cursor: 'pointer',
              fontSize: 14, fontWeight: 600, color: BRAND.ink,
              fontFamily: BRAND.body, padding: '6px 0',
              transition: 'color .15s', flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = BRAND.purple; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = BRAND.ink; }}
          >
            All services <Icons.Arrow width="14" height="14" />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 16 }}>
          {SERVICES.map(s => {
            const I = Icons[s.icon];
            return (
              <div
                key={s.name}
                onClick={() => navigate('/services/detail', { state: { service: s } })}
                style={{
                  padding: 24, borderRadius: 14, cursor: 'pointer',
                  background: '#fff', border: `1px solid ${BRAND.border}`,
                  transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = BRAND.shadowLg; e.currentTarget.style.borderColor = BRAND.paperEdge; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = BRAND.border; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 11,
                  background: BRAND.gradSoft, color: BRAND.purple,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22,
                }}>
                  <I width="22" height="22" />
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', color: BRAND.ink }}>{s.name}</div>
                <p style={{ marginTop: 8, fontSize: 13.5, color: BRAND.inkMute, lineHeight: 1.55 }}>{s.desc}</p>
                <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: BRAND.ink }}>
                  Learn more <Icons.Arrow width="13" height="13" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
