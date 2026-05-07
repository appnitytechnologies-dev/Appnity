import { useNavigate } from 'react-router-dom';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { useResponsive } from '../../hooks/useResponsive';

function HeroVisual() {
  return (
    <div style={{ position: 'relative', paddingBottom: 40 }}>
      {/* Main card */}
      <div style={{
        borderRadius: 20, background: '#fff',
        border: `1px solid ${BRAND.border}`,
        boxShadow: BRAND.shadowXl, overflow: 'hidden',
        transform: 'perspective(1400px) rotateX(2deg) rotateY(-4deg)',
      }}>
        {/* Window chrome */}
        <div style={{
          height: 38, display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px',
          borderBottom: `1px solid ${BRAND.border}`, background: BRAND.paperSoft,
        }}>
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FF5F57' }} />
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FEBC2E' }} />
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#28C840' }} />
          <div style={{ marginLeft: 16, fontFamily: BRAND.mono, fontSize: 11, color: BRAND.inkSubtle }}>
            appnitytechnologies.com / services
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.ink }}>Our Services</div>
            <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: BRAND.gradSoft, color: BRAND.purple, fontWeight: 600 }}>8 Disciplines</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
            {[
              { icon: 'Mobile', label: 'Mobile Apps',    color: BRAND.blue },
              { icon: 'Web',    label: 'Web Apps',       color: BRAND.purple },
              { icon: 'Brush',  label: 'UI/UX Design',   color: BRAND.magenta },
              { icon: 'Chart',  label: 'Digital Marketing', color: '#0B9E6A' },
            ].map(s => {
              const I = Icons[s.icon];
              return (
                <div key={s.label} style={{
                  padding: '12px 14px', borderRadius: 10,
                  background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 8,
                    background: `${s.color}18`, color: s.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <I width="15" height="15" />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: BRAND.ink }}>{s.label}</span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[
              { v: '100+',  l: 'Happy Clients' },
              { v: '100+',  l: 'Projects Done' },
              { v: '8+',    l: 'Yrs Experience' },
            ].map(m => (
              <div key={m.l} style={{
                padding: '12px 10px', borderRadius: 10, textAlign: 'center',
                background: '#fff', border: `1px solid ${BRAND.border}`,
              }}>
                <div style={{
                  fontFamily: BRAND.display, fontSize: 20, fontWeight: 800,
                  letterSpacing: '-0.02em',
                  background: BRAND.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                }}>{m.v}</div>
                <div style={{ fontSize: 10, color: BRAND.inkSubtle, fontWeight: 500, marginTop: 2 }}>{m.l}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { l: 'Mobile Development', p: 95 },
              { l: 'UI/UX Design',       p: 90 },
              { l: 'Cloud Solutions',    p: 85 },
            ].map(b => (
              <div key={b.l}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: BRAND.inkMute, marginBottom: 4 }}>
                  <span>{b.l}</span><span style={{ fontWeight: 600, color: BRAND.purple }}>{b.p}%</span>
                </div>
                <div style={{ height: 5, borderRadius: 99, background: BRAND.paperSoft }}>
                  <div style={{ height: '100%', width: `${b.p}%`, borderRadius: 99, background: BRAND.grad }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge — Global reach */}
      <div style={{
        position: 'absolute', bottom: 0, right: -20,
        background: '#fff', border: `1px solid ${BRAND.border}`,
        borderRadius: 12, padding: '12px 16px', boxShadow: BRAND.shadowLg,
        display: 'flex', alignItems: 'center', gap: 12, minWidth: 220,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: BRAND.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
        }}>
          <Icons.Users width="16" height="16" />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: BRAND.ink }}>Global Clientele</div>
          <div style={{ fontSize: 11, color: BRAND.inkSubtle }}>100+ clients across the globe</div>
        </div>
      </div>

      {/* Floating badge — Live project */}
      <div style={{
        position: 'absolute', top: 60, right: -32,
        background: '#fff', border: `1px solid ${BRAND.border}`,
        borderRadius: 10, padding: '10px 14px', boxShadow: BRAND.shadowMd,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840', boxShadow: '0 0 0 3px #28C84022' }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: BRAND.ink }}>Project in progress</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '40px 20px 60px' : '64px 64px 96px' }}>
      <div className="ap-dot-bg" style={{
        position: 'absolute', inset: 0,
        maskImage: 'radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)',
      }} />
      <div style={{
        position: 'absolute', top: -260, left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(122,76,255,0.18), rgba(61,108,255,0.10) 40%, transparent 70%)',
        filter: 'blur(20px)',
      }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.05fr 1fr',
          gap: isMobile ? 40 : 64,
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px 6px 8px', borderRadius: 999,
              background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
              fontSize: 12, fontWeight: 500, color: BRAND.inkMute, letterSpacing: '0.01em',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad, boxShadow: '0 0 0 3px rgba(122,76,255,0.12)' }} />
              Global Digital Solutions Company
            </div>

            <h1 style={{
              fontSize: isMobile ? 44 : 72, marginTop: 22, letterSpacing: '-0.035em', fontWeight: 800,
              fontFamily: BRAND.display, lineHeight: 1.05, color: BRAND.ink,
            }}>
              Empowering<br />Innovation Through<br />
              <span style={{ background: BRAND.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Digital Solutions.
              </span>
            </h1>

            <p style={{ marginTop: 26, fontSize: isMobile ? 16 : 18, color: BRAND.inkMute, maxWidth: 540, lineHeight: 1.6 }}>
              We craft high-performance mobile apps, dynamic websites, and scalable
              cloud solutions to accelerate your business growth.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/services')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 22px', borderRadius: 10, border: 0,
                  fontSize: 15, fontWeight: 600, cursor: 'pointer',
                  color: '#fff', background: BRAND.ink, fontFamily: BRAND.body,
                  boxShadow: '0 1px 0 rgba(255,255,255,0.12) inset, 0 6px 20px rgba(11,31,58,0.18)',
                  transition: 'transform .15s, box-shadow .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              >
                Explore Our Services <Icons.Arrow width="14" height="14" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 22px', borderRadius: 10,
                  fontSize: 15, fontWeight: 600, cursor: 'pointer',
                  color: BRAND.ink, background: 'transparent',
                  border: `1px solid ${BRAND.border}`, fontFamily: BRAND.body,
                  transition: 'background .2s, border-color .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.paperSoft; e.currentTarget.style.borderColor = BRAND.ink; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = BRAND.border; }}
              >
                Get In Touch
              </button>
            </div>

            {/* Trust strip */}
            <div style={{
              marginTop: 40, display: 'flex', alignItems: 'center', gap: 22,
              fontSize: 13, color: BRAND.inkMute, flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {[...Array(5)].map((_, i) => <Icons.Star key={i} width="14" height="14" style={{ color: '#F5A623' }} />)}
                <span style={{ marginLeft: 6 }}>5.0 Client Rating</span>
              </div>
              <span style={{ width: 1, height: 14, background: BRAND.border }} />
              <span>100+ Global Clients</span>
              <span style={{ width: 1, height: 14, background: BRAND.border }} />
              <span>100+ Projects Delivered</span>
            </div>
          </div>

          {!isMobile && (
            <div style={{ position: 'relative', paddingRight: 24 }}>
              <HeroVisual />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
