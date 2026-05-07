import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/slices/portfolioSlice';
import NavBar from '../../components/layout/NavBar';
import CtaBanner from '../../components/layout/CtaBanner';
import Footer from '../../components/layout/Footer';
import ProjectCard from './ProjectCard';
import { BRAND } from '../../constants/brand';
import { PROJECTS, PORTFOLIO_FILTERS } from '../../constants/projects';
import { useResponsive } from '../../hooks/useResponsive';

export default function PortfolioPage() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(s => s.portfolio.activeFilter);
  const filtered = PROJECTS.filter(p => activeFilter === 'All' || p.c === activeFilter);
  const { isMobile, isTablet } = useResponsive();

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section style={{ padding: isMobile ? '40px 20px 28px' : '64px 64px 40px', position: 'relative', overflow: 'hidden' }}>
        <div className="ap-dot-bg" style={{
          position: 'absolute', inset: 0,
          maskImage: 'radial-gradient(ellipse at 50% 0%, #000 25%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000 25%, transparent 70%)',
        }} />
        <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px 6px 8px', borderRadius: 999,
            background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
            fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Selected work
          </div>
          <h1 style={{ fontSize: isMobile ? 40 : 80, marginTop: 22, letterSpacing: '-0.035em', fontWeight: 800, fontFamily: BRAND.display, color: BRAND.ink }}>
            120 products, picked nine.<br />
            <span style={{ background: BRAND.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>A representative sample.</span>
          </h1>
          <p style={{ marginTop: 26, fontSize: isMobile ? 15 : 19, color: BRAND.inkMute, maxWidth: 600, lineHeight: 1.55 }}>
            Most of our work is under NDA. These are the engagements clients let us show — they&apos;re a fair cross-section of how we operate.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: isMobile ? '0 20px 20px' : '0 64px 24px' }}>
        <div style={{
          maxWidth: 1240, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PORTFOLIO_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => dispatch(setFilter(f))}
                style={{
                  padding: '10px 18px', borderRadius: 999, fontSize: 13, fontWeight: 500,
                  background: activeFilter === f ? BRAND.ink : '#fff',
                  color: activeFilter === f ? '#fff' : BRAND.ink,
                  border: `1px solid ${activeFilter === f ? BRAND.ink : BRAND.border}`,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                  fontFamily: BRAND.body, transition: 'all .15s',
                }}
              >
                {f}
                <span style={{
                  fontSize: 11, padding: '2px 7px', borderRadius: 999,
                  background: activeFilter === f ? 'rgba(255,255,255,0.18)' : BRAND.paperSoft,
                }}>
                  {f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.c === f).length}
                </span>
              </button>
            ))}
          </div>
          <div style={{ fontSize: 13, color: BRAND.inkMute }}>
            Showing {filtered.length} of {PROJECTS.length} projects
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: isMobile ? '16px 20px 64px' : '24px 64px 96px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 16 }}>
            {filtered.map(p => <ProjectCard key={p.t} p={p} />)}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
