import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar';
import Footer from '../../components/layout/Footer';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { SERVICES, SERVICE_TAGS, TECH_STACK, SERVICE_FEATURES } from '../../constants/services';
import { useResponsive } from '../../hooks/useResponsive';

export default function ServiceDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, isTablet } = useResponsive();
  const s = location.state?.service || SERVICES[0];
  const I = Icons[s.icon];

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section style={{ padding: isMobile ? '32px 20px 60px' : '40px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -200, left: '60%', width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,76,255,0.15), transparent 60%)', filter: 'blur(20px)',
        }} />
        <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
          <button
            onClick={() => navigate('/services')}
            style={{
              background: 'transparent', border: 0, color: BRAND.inkMute,
              display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13,
              cursor: 'pointer', padding: 0, marginBottom: 24, fontFamily: BRAND.body,
            }}
          >
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}><Icons.Arrow width="14" height="14" /></span>
            All services
          </button>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr',
            gap: isMobile ? 40 : 80,
            alignItems: 'flex-end',
          }}>
            <div>
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: BRAND.grad, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: BRAND.shadowGlow, marginBottom: 28,
              }}>
                <I width="32" height="32" />
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px 6px 8px', borderRadius: 999,
                background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
                fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} />
                {SERVICE_TAGS[s.name] || 'Development'}
              </div>
              <h1 style={{ fontSize: isMobile ? 44 : 72, marginTop: 18, letterSpacing: '-0.035em', fontWeight: 800, fontFamily: BRAND.display, color: BRAND.ink }}>
                {s.name}.
              </h1>
              <p style={{ marginTop: 22, fontSize: isMobile ? 16 : 19, color: BRAND.inkMute, lineHeight: 1.55, maxWidth: 540 }}>
                {s.desc} Our dedicated team delivers end-to-end solutions with
                transparent communication and milestone-based execution.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigate('/contact')}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 22px', borderRadius: 10, border: 0,
                    fontSize: 14, fontWeight: 600, cursor: 'pointer',
                    color: '#fff', background: BRAND.ink, fontFamily: BRAND.body,
                    boxShadow: '0 1px 0 rgba(255,255,255,0.12) inset, 0 6px 20px rgba(11,31,58,0.18)',
                  }}
                >
                  Get In Touch <Icons.Arrow width="14" height="14" />
                </button>
                <button
                  onClick={() => navigate('/portfolio')}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 22px', borderRadius: 10,
                    fontSize: 14, fontWeight: 600, cursor: 'pointer',
                    color: BRAND.ink, background: 'transparent',
                    border: `1px solid ${BRAND.border}`, fontFamily: BRAND.body,
                  }}
                >
                  See related work
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { k: '100+',  v: 'Happy clients served worldwide' },
                { k: '100+',  v: 'Projects delivered successfully' },
                { k: '24h',   v: 'Response time on every inquiry' },
                { k: '98%',   v: 'Client satisfaction rate' },
              ].map(m => (
                <div key={m.k} style={{ padding: isMobile ? 16 : 22, borderRadius: 14, background: '#fff', border: `1px solid ${BRAND.border}` }}>
                  <div style={{ fontFamily: BRAND.display, fontSize: isMobile ? 24 : 30, fontWeight: 700, letterSpacing: '-0.02em', color: BRAND.ink }}>{m.k}</div>
                  <div style={{ fontSize: 13, color: BRAND.inkMute, marginTop: 4, lineHeight: 1.5 }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 64px', background: BRAND.paperSoft, borderTop: `1px solid ${BRAND.border}`, borderBottom: `1px solid ${BRAND.border}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 32 : 80 }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px 6px 8px', borderRadius: 999,
              background: '#fff', border: `1px solid ${BRAND.border}`,
              fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Our Process
            </div>
            <h2 style={{ fontSize: isMobile ? 28 : 40, marginTop: 18, fontFamily: BRAND.display, fontWeight: 700, color: BRAND.ink }}>How we deliver results.</h2>
          </div>
          <div style={{ fontSize: 17, color: BRAND.ink, lineHeight: 1.7 }}>
            <p>
              Every {s.name.toLowerCase()} engagement starts with a thorough discovery phase — understanding
              your business goals, target audience, and technical requirements. We define a clear
              scope and roadmap before a single line of code is written.
            </p>
            <p style={{ marginTop: 18, color: BRAND.inkMute }}>
              We follow an agile approach with regular sprint updates and demos, ensuring you always
              know exactly where your project stands. Transparent communication and milestone-based
              delivery means no surprises at the end.
            </p>
            <p style={{ marginTop: 18, color: BRAND.inkMute }}>
              At launch, we hand over comprehensive documentation and provide post-launch support
              to ensure your product continues to perform at its best as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: isMobile ? '48px 20px' : '96px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px 6px 8px', borderRadius: 999,
                background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
                fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Included by default
              </div>
              <h2 style={{ fontSize: isMobile ? 32 : 48, marginTop: 18, fontFamily: BRAND.display, fontWeight: 700, color: BRAND.ink }}>Everything in the box.</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 12 }}>
            {SERVICE_FEATURES.map(f => (
              <div key={f} style={{
                padding: 22, borderRadius: 12,
                background: '#fff', border: `1px solid ${BRAND.border}`,
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: BRAND.gradSoft, color: BRAND.purple,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icons.Check width="16" height="16" />
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, color: BRAND.ink }}>{f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 64px', background: BRAND.ink, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', bottom: -200, right: -100, width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,108,255,0.25), transparent 60%)', filter: 'blur(20px)',
        }} />
        <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px 6px 8px', borderRadius: 999,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Tech stack
          </div>
          <h2 style={{ color: '#fff', fontSize: isMobile ? 32 : 48, marginTop: 18, maxWidth: 720, fontFamily: BRAND.display, fontWeight: 700 }}>
            Modern technology, proven results.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 18, maxWidth: 580, fontSize: 16, lineHeight: 1.6 }}>
            We use industry-leading technologies chosen for performance, scalability, and long-term maintainability.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)',
            gap: 10, marginTop: 44,
          }}>
            {TECH_STACK.map(t => (
              <div key={t.n} style={{
                padding: '18px 16px', borderRadius: 12,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t.g}</div>
                <div style={{ fontSize: 16, fontWeight: 600, marginTop: 6, fontFamily: BRAND.display }}>{t.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '64px 20px' : '96px 64px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px 6px 8px', borderRadius: 999,
            background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
            fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} />
            Start Your Digital Journey
          </div>
          <h2 style={{
            fontSize: isMobile ? 34 : 52, marginTop: 20,
            fontFamily: BRAND.display, fontWeight: 700,
            letterSpacing: '-0.03em', color: BRAND.ink, lineHeight: 1.1,
          }}>
            Ready to start your<br />
            <span style={{ background: BRAND.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              {s.name} project?
            </span>
          </h2>
          <p style={{ marginTop: 18, fontSize: 17, color: BRAND.inkMute, lineHeight: 1.6, maxWidth: 500, margin: '18px auto 0' }}>
            Tell us about your goals and we'll get back within 24 hours with a clear plan and timeline.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/contact')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 24px', borderRadius: 10, border: 0,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                color: '#fff', background: BRAND.ink, fontFamily: BRAND.body,
                boxShadow: '0 1px 0 rgba(255,255,255,0.12) inset, 0 6px 20px rgba(11,31,58,0.18)',
              }}
            >
              Get In Touch <Icons.Arrow width="14" height="14" />
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 24px', borderRadius: 10,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                color: BRAND.ink, background: 'transparent',
                border: `1px solid ${BRAND.border}`, fontFamily: BRAND.body,
              }}
            >
              See Our Work
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
