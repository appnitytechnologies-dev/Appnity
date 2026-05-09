import SEO from '../../components/ui/SEO/SEO';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/slices/servicesSlice';
import NavBar from '../../components/layout/NavBar/NavBar';
import CtaBanner from '../../components/layout/CtaBanner/CtaBanner';
import Footer from '../../components/layout/Footer/Footer';
import { Icons } from '../../components/ui/Icons';
import { SERVICES, SERVICE_CATS, SERVICE_TAGS } from '../../constants/services';
import './Services.css';

export default function ServicesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeCategory = useSelector(s => s.services.activeCategory);
  const filtered = SERVICES.filter(s => activeCategory === 'All' || SERVICE_TAGS[s.name] === activeCategory);

  return (
    <>
      <SEO
        title="Our Services"
        description="Appnity Technologies offers end-to-end digital services — mobile app development, web platforms, UI/UX design, and cloud infrastructure for businesses worldwide."
        path="/services"
      />
      <NavBar />

      {/* Hero */}
      <section className="services-hero">
        <div className="ap-dot-bg services-hero__dots" />
        <div className="services-hero__container">
          <div className="services-hero__badge">
            <span className="services-hero__badge-dot" />
            Services
          </div>
          <h1 className="services-hero__title">
            Eight ways we<br />
            <span className="services-hero__title-gradient">accelerate your business.</span>
          </h1>
          <p className="services-hero__desc">
            From mobile apps to cloud infrastructure — every service is delivered by
            dedicated experts who own the outcome end to end.
          </p>
        </div>
      </section>

      {/* Filter chips */}
      <section className="services-filters">
        <div className="services-filters__container">
          {SERVICE_CATS.map(c => (
            <button
              key={c}
              onClick={() => dispatch(setCategory(c))}
              className={`services-filters__btn${activeCategory === c ? ' services-filters__btn--active' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="services-grid">
        <div className="services-grid__container">
          <div className="services-grid__items">
            {filtered.map(s => {
              const I = Icons[s.icon];
              return (
                <div
                  key={s.name}
                  className="services-card"
                  onClick={() => navigate('/services/detail', { state: { service: s } })}
                >
                  <div className="services-card__header">
                    <div className="services-card__icon">
                      <I width="26" height="26" />
                    </div>
                    <span className="services-card__tag">{SERVICE_TAGS[s.name]}</span>
                  </div>
                  <div className="services-card__name">{s.name}</div>
                  <p className="services-card__desc">{s.desc}</p>
                  <div className="services-card__link">
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
