import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/slices/servicesSlice';
import NavBar from '../../components/layout/NavBar';
import CtaBanner from '../../components/layout/CtaBanner';
import Footer from '../../components/layout/Footer';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { SERVICES, SERVICE_CATS, SERVICE_TAGS } from '../../constants/services';
import { useResponsive } from '../../hooks/useResponsive';

export default function ServicesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeCategory = useSelector(s => s.services.activeCategory);
  const filtered = SERVICES.filter(s => activeCategory === 'All' || SERVICE_TAGS[s.name] === activeCategory);
  const { isMobile, isTablet } = useResponsive();

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section style={{ padding: isMobile ? '40px 20px 32px' : '64px 64px 48px', position: 'relative', overflow: 'hidden' }}>
        <div className="ap-dot-bg" style={{
          position: 'absolute', inset: 0,
          maskImage: 'radial-gradient(ellipse at 50% 0%, #000 25%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000 25%, transparent 65%)',
        }} />
        <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px 6px 8px', borderRadius: 999,
            background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
            fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Services
          </div>
          <h1 style={{ fontSize: isMobile ? 44 : 80, marginTop: 22, letterSpacing: '-0.035em', fontWeight: 800, fontFamily: BRAND.display, color: BRAND.ink }}>
            Eight ways we<br />
            <span style={{ background: BRAND.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>accelerate your business.</span>
          </h1>
          <p style={{ marginTop: 26, fontSize: isMobile ? 16 : 19, color: BRAND.inkMute, maxWidth: 640, lineHeight: 1.55 }}>
            From mobile apps to cloud infrastructure — every service is delivered by
            dedicated experts who own the outcome end to end.
          </p>
        </div>
      </section>

      {/* Filter chips */}
      <section style={{ padding: isMobile ? '0 20px 20px' : '0 64px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {SERVICE_CATS.map(c => (
            <button
              key={c}
              onClick={() => dispatch(setCategory(c))}
              style={{
                padding: '10px 18px', borderRadius: 999, fontSize: 13, fontWeight: 500,
                background: activeCategory === c ? BRAND.ink : '#fff',
                color: activeCategory === c ? '#fff' : BRAND.ink,
                border: `1px solid ${activeCategory === c ? BRAND.ink : BRAND.border}`,
                cursor: 'pointer', transition: 'all .15s', fontFamily: BRAND.body,
              }}
            >{c}</button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: isMobile ? '16px 20px 64px' : '24px 64px 96px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 16 }}>
            {filtered.map(s => {
              const I = Icons[s.icon];
              return (
                <div
                  key={s.name}
                  onClick={() => navigate('/services/detail', { state: { service: s } })}
                  style={{
                    padding: 32, borderRadius: 14, cursor: 'pointer',
                    background: '#fff', border: `1px solid ${BRAND.border}`,
                    display: 'flex', flexDirection: 'column',
                    transition: 'transform .2s, box-shadow .2s, border-color .2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = BRAND.shadowLg; e.currentTarget.style.borderColor = BRAND.paperEdge; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = BRAND.border; }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 12,
                      background: BRAND.gradSoft, color: BRAND.purple,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <I width="26" height="26" />
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '4px 10px',
                      borderRadius: 999, background: BRAND.paperSoft, color: BRAND.inkMute,
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>{SERVICE_TAGS[s.name]}</span>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, marginTop: 24, letterSpacing: '-0.02em', color: BRAND.ink }}>{s.name}</div>
                  <p style={{ marginTop: 10, fontSize: 14, color: BRAND.inkMute, lineHeight: 1.6, flex: 1 }}>{s.desc}</p>
                  <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: BRAND.ink }}>
                    Explore service <Icons.Arrow width="13" height="13" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
