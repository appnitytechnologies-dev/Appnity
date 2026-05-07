import { useNavigate } from 'react-router-dom';
import { Icons } from '../ui/Icons';
import { BRAND } from '../../constants/brand';
import { useResponsive } from '../../hooks/useResponsive';

export default function CtaBanner() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <section style={{ padding: isMobile ? '0 20px 64px' : '0 64px 96px' }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        position: 'relative', overflow: 'hidden',
        borderRadius: 24, padding: isMobile ? '48px 28px' : '72px 64px',
        background: BRAND.ink, color: '#fff',
      }}>
        <div style={{ position: 'absolute', top: -120, right: -80, width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,76,255,0.55), transparent 60%)', filter: 'blur(20px)' }} />
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,108,255,0.45), transparent 60%)', filter: 'blur(20px)' }} />
        <div style={{ position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.06), transparent 60%)' }} />

        <div style={{
          position: 'relative', display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr',
          gap: isMobile ? 36 : 48, alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px 6px 8px', borderRadius: 999,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)',
              letterSpacing: '0.01em',
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: 999,
                background: BRAND.grad,
                boxShadow: '0 0 0 3px rgba(255,255,255,0.08)',
              }} />
              Start Your Digital Journey
            </div>
            <h2 style={{
              color: '#fff', fontSize: isMobile ? 36 : 56, marginTop: 20, letterSpacing: '-0.03em',
              fontFamily: BRAND.display, fontWeight: 700, lineHeight: 1.05, margin: '20px 0 0',
            }}>
              Let&apos;s Build Something<br />
              <span style={{
                background: 'linear-gradient(135deg, #9DB6FF, #D6B8FF)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}>
                Great Together.
              </span>
            </h2>
            <p style={{ marginTop: 18, fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 540 }}>
              Tell us about your project. Our team will get back to you within 24 hours
              with a clear plan, timeline, and a dedicated team ready to deliver.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/contact')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 22px', borderRadius: 10, border: 0,
                  fontSize: 14, fontWeight: 600, cursor: 'pointer',
                  color: '#fff', background: BRAND.grad,
                  fontFamily: BRAND.body, boxShadow: BRAND.shadowGlow,
                  transition: 'transform .15s, box-shadow .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              >
                Get In Touch Today <Icons.Arrow width="14" height="14" />
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 22px', borderRadius: 10,
                  fontSize: 14, fontWeight: 600, cursor: 'pointer',
                  color: '#fff', background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  fontFamily: BRAND.body, transition: 'background .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                See Our Work
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { k: '100+',  v: 'Happy clients served worldwide' },
              { k: '24h',   v: 'Response time on every inquiry' },
              { k: '8+',    v: 'Years of industry experience' },
            ].map(s => (
              <div key={s.k} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 14, padding: '18px 20px',
                display: 'flex', alignItems: 'center', gap: 18,
              }}>
                <div style={{
                  fontFamily: BRAND.display, fontSize: 28, fontWeight: 700,
                  background: 'linear-gradient(135deg, #9DB6FF, #D6B8FF)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  minWidth: 70,
                }}>{s.k}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
