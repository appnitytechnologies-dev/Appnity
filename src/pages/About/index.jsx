import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar';
import CtaBanner from '../../components/layout/CtaBanner';
import Footer from '../../components/layout/Footer';
import FAQItem from './FAQItem';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { TEAM, VALUES, FAQ } from '../../constants/team';
import { useResponsive } from '../../hooks/useResponsive';

const TEAM_BGS = [
  'linear-gradient(135deg, #DDE5F5, #C7D0E5)',
  'linear-gradient(135deg, #E8DEF7, #D2C4ED)',
  'linear-gradient(135deg, #FFD9C9, #FFC2A8)',
  'linear-gradient(135deg, #C9E5DA, #ABD3C0)',
];

export default function AboutPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);
  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section style={{ padding: isMobile ? '40px 20px 60px' : '72px 64px 96px', position: 'relative', overflow: 'hidden' }}>
        <div className="ap-dot-bg" style={{
          position: 'absolute', inset: 0,
          maskImage: 'radial-gradient(ellipse at 30% 0%, #000 25%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 30% 0%, #000 25%, transparent 70%)',
        }} />
        <div style={{ maxWidth: 980, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px 6px 8px', borderRadius: 999,
            background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
            fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} />
            About Appnity
          </div>
          <h1 style={{ fontSize: isMobile ? 48 : 88, marginTop: 24, letterSpacing: '-0.035em', lineHeight: 1.0, fontWeight: 800, fontFamily: BRAND.display, color: BRAND.ink }}>
            Driven by Innovation,<br />
            Committed to<br />
            <span style={{ background: BRAND.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Excellence.
            </span>
          </h1>
          <p style={{ marginTop: 32, fontSize: isMobile ? 16 : 20, color: BRAND.inkMute, maxWidth: 700, lineHeight: 1.55 }}>
            Appnity Technologies is a global digital solutions company helping businesses of all
            sizes — from startups to enterprises — build powerful mobile apps, web platforms, and
            scalable cloud infrastructure. With 8+ years of experience and 100+ projects delivered,
            we bring expertise across industries worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: isMobile ? '0 20px 48px' : '0 64px 96px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
          {[
            { eyebrow: 'Our mission', heading: 'Empowering Businesses Digitally.',
              body: 'We partner with businesses to harness the power of technology — building intuitive mobile apps, robust web platforms, and scalable cloud solutions that accelerate growth and deliver measurable results.',
              dark: false },
            { eyebrow: 'Our vision', heading: 'A World Powered by Innovation.',
              body: "We envision a world where every business, regardless of size, can leverage cutting-edge digital solutions to compete globally. Appnity is committed to making that future possible — one product at a time.",
              dark: true },
          ].map((c, i) => (
            <div key={i} style={{
              padding: isMobile ? 28 : 48, borderRadius: 20, position: 'relative', overflow: 'hidden',
              background: i === 0 ? BRAND.paperSoft : BRAND.ink,
              color: i === 0 ? BRAND.ink : '#fff',
              border: `1px solid ${i === 0 ? BRAND.border : 'rgba(255,255,255,0.08)'}`,
            }}>
              {i === 1 && (
                <div style={{
                  position: 'absolute', top: -100, right: -80, width: 320, height: 320, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(122,76,255,0.45), transparent 60%)', filter: 'blur(20px)',
                }} />
              )}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, position: 'relative',
                padding: '6px 12px 6px 8px', borderRadius: 999,
                background: i === 1 ? 'rgba(255,255,255,0.06)' : '#fff',
                border: `1px solid ${i === 1 ? 'rgba(255,255,255,0.1)' : BRAND.border}`,
                fontSize: 12, fontWeight: 500,
                color: i === 1 ? 'rgba(255,255,255,0.85)' : BRAND.inkMute,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> {c.eyebrow}
              </div>
              <h2 style={{ fontSize: isMobile ? 28 : 40, marginTop: 22, color: 'inherit', position: 'relative', fontFamily: BRAND.display, fontWeight: 700 }}>{c.heading}</h2>
              <p style={{
                marginTop: 18, fontSize: 16, lineHeight: 1.65, position: 'relative',
                color: i === 0 ? BRAND.inkMute : 'rgba(255,255,255,0.7)', maxWidth: 460,
              }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 64px', background: BRAND.paperSoft, borderTop: `1px solid ${BRAND.border}`, borderBottom: `1px solid ${BRAND.border}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: 48 }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px 6px 8px', borderRadius: 999,
                background: '#fff', border: `1px solid ${BRAND.border}`,
                fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> What we believe
              </div>
              <h2 style={{ fontSize: isMobile ? 34 : 48, marginTop: 18, fontFamily: BRAND.display, fontWeight: 700, letterSpacing: '-0.025em', color: BRAND.ink }}>Our Core Values.</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 16 }}>
            {VALUES.map(v => {
              const I = Icons[v.icon];
              return (
                <div key={v.t} style={{ padding: isMobile ? 20 : 28, borderRadius: 14, background: '#fff', border: `1px solid ${BRAND.border}` }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: BRAND.gradSoft, color: BRAND.purple,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
                  }}>
                    <I width="20" height="20" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: BRAND.ink }}>{v.t}</div>
                  <p style={{ marginTop: 10, fontSize: 13, color: BRAND.inkMute, lineHeight: 1.55 }}>{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: isMobile ? '48px 20px' : '96px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px 6px 8px', borderRadius: 999,
                background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
                fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Leadership
              </div>
              <h2 style={{ fontSize: isMobile ? 34 : 48, marginTop: 18, fontFamily: BRAND.display, fontWeight: 700, letterSpacing: '-0.025em', color: BRAND.ink }}>The people behind the work.</h2>
            </div>
            <button style={{ background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: BRAND.ink, fontFamily: BRAND.body }}>
              Meet the team <Icons.Arrow width="14" height="14" />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 16 }}>
            {TEAM.map((t, i) => (
              <div
                key={t.n}
                style={{ borderRadius: 14, overflow: 'hidden', background: '#fff', border: `1px solid ${BRAND.border}`, transition: 'transform .2s, box-shadow .2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = BRAND.shadowLg; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <div style={{
                  height: isMobile ? 140 : 220, background: TEAM_BGS[i % 4],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ fontFamily: BRAND.display, fontSize: isMobile ? 48 : 64, fontWeight: 700, color: 'rgba(11,31,58,0.45)', letterSpacing: '-0.04em' }}>{t.i}</div>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: BRAND.ink }}>{t.n}</div>
                  <div style={{ fontSize: 12, color: BRAND.inkMute, marginTop: 2 }}>{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 64px', background: BRAND.paperSoft, borderTop: `1px solid ${BRAND.border}` }}>
        <div style={{
          maxWidth: 1240, margin: '0 auto',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr',
          gap: isMobile ? 32 : 80, alignItems: 'flex-start',
        }}>
          <div style={{ position: isMobile ? 'static' : 'sticky', top: 100 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px 6px 8px', borderRadius: 999,
              background: '#fff', border: `1px solid ${BRAND.border}`,
              fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Frequently asked
            </div>
            <h2 style={{ fontSize: isMobile ? 32 : 48, marginTop: 18, letterSpacing: '-0.03em', fontFamily: BRAND.display, fontWeight: 700, color: BRAND.ink }}>
              Questions we get asked most.
            </h2>
            <p style={{ marginTop: 18, fontSize: 16, color: BRAND.inkMute, lineHeight: 1.6, maxWidth: 360 }}>
              Don&apos;t see your question? Reach out — we usually reply within a few hours.
            </p>
            <button
              onClick={() => navigate('/contact')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                marginTop: 28, padding: '12px 20px', borderRadius: 10, border: 0,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                color: '#fff', background: BRAND.ink, fontFamily: BRAND.body,
              }}
            >
              Ask a question <Icons.Arrow width="14" height="14" />
            </button>
          </div>
          <div>
            {FAQ.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
