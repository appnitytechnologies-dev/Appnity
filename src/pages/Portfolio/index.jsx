import SEO from '../../components/ui/SEO/SEO';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/slices/portfolioSlice';
import NavBar from '../../components/layout/NavBar/NavBar';
import CtaBanner from '../../components/layout/CtaBanner/CtaBanner';
import Footer from '../../components/layout/Footer/Footer';
import ProjectCard from './ProjectCard/ProjectCard';
import { PROJECTS, PORTFOLIO_FILTERS } from '../../constants/projects';
import './Portfolio.css';

export default function PortfolioPage() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(s => s.portfolio.activeFilter);
  const filtered = PROJECTS.filter(p => activeFilter === 'All' || p.c === activeFilter);

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore Appnity Technologies' portfolio — mobile apps, web platforms, and design systems delivered for clients across healthcare, logistics, fintech, and more."
        path="/portfolio"
      />
      <NavBar />

      {/* Hero */}
      <section className="portfolio-hero">
        <div className="ap-dot-bg portfolio-hero__dots" />
        <div className="portfolio-hero__container">
          <div className="portfolio-hero__badge">
            <span className="portfolio-hero__badge-dot" />
            Selected work
          </div>
          <h1 className="portfolio-hero__title">
            120 products, picked nine.<br />
            <span className="portfolio-hero__title-gradient">A representative sample.</span>
          </h1>
          <p className="portfolio-hero__desc">
            Most of our work is under NDA. These are the engagements clients let us show — they&apos;re a fair cross-section of how we operate.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="portfolio-filters">
        <div className="portfolio-filters__container">
          <div className="portfolio-filters__list">
            {PORTFOLIO_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => dispatch(setFilter(f))}
                className={`portfolio-filters__btn${activeFilter === f ? ' portfolio-filters__btn--active' : ''}`}
              >
                {f}
                <span className="portfolio-filters__badge">
                  {f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.c === f).length}
                </span>
              </button>
            ))}
          </div>
          <div className="portfolio-filters__count">
            Showing {filtered.length} of {PROJECTS.length} projects
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="portfolio-grid">
        <div className="portfolio-grid__container">
          <div className="portfolio-grid__items">
            {filtered.map(p => <ProjectCard key={p.t} p={p} />)}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
