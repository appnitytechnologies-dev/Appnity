import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar/NavBar';
import Footer from '../../components/layout/Footer/Footer';
import { Icons } from '../../components/ui/Icons';
import { SERVICES, SERVICE_TAGS, TECH_STACK, SERVICE_FEATURES } from '../../constants/services';
import './ServiceDetail.css';

export default function ServiceDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const s = location.state?.service || SERVICES[0];
  const I = Icons[s.icon];

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="sd-hero">
        <div className="sd-hero__blob" />
        <div className="sd-hero__container">
          <button className="sd-hero__back" onClick={() => navigate('/services')}>
            <span className="sd-hero__back-arrow"><Icons.Arrow width="14" height="14" /></span>
            All services
          </button>

          <div className="sd-hero__grid">
            <div>
              <div className="sd-hero__icon-wrap">
                <I width="32" height="32" />
              </div>
              <div className="sd-hero__badge">
                <span className="sd-hero__badge-dot" />
                {SERVICE_TAGS[s.name] || 'Development'}
              </div>
              <h1 className="sd-hero__title">{s.name}.</h1>
              <p className="sd-hero__desc">
                {s.desc} Our dedicated team delivers end-to-end solutions with
                transparent communication and milestone-based execution.
              </p>
              <div className="sd-hero__actions">
                <button className="sd-hero__btn-primary" onClick={() => navigate('/contact')}>
                  Get In Touch <Icons.Arrow width="14" height="14" />
                </button>
                <button className="sd-hero__btn-secondary" onClick={() => navigate('/portfolio')}>
                  See related work
                </button>
              </div>
            </div>

            <div className="sd-hero__stats">
              {[
                { k: '100+', v: 'Happy clients served worldwide' },
                { k: '100+', v: 'Projects delivered successfully' },
                { k: '24h',  v: 'Response time on every inquiry' },
                { k: '98%',  v: 'Client satisfaction rate' },
              ].map(m => (
                <div key={m.k} className="sd-hero__stat">
                  <div className="sd-hero__stat-value">{m.k}</div>
                  <div className="sd-hero__stat-label">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sd-process">
        <div className="sd-process__container">
          <div>
            <div className="sd-process__badge">
              <span className="sd-process__badge-dot" />
              Our Process
            </div>
            <h2 className="sd-process__title">How we deliver results.</h2>
          </div>
          <div className="sd-process__text">
            <p>
              Every {s.name.toLowerCase()} engagement starts with a thorough discovery phase — understanding
              your business goals, target audience, and technical requirements. We define a clear
              scope and roadmap before a single line of code is written.
            </p>
            <p>
              We follow an agile approach with regular sprint updates and demos, ensuring you always
              know exactly where your project stands. Transparent communication and milestone-based
              delivery means no surprises at the end.
            </p>
            <p>
              At launch, we hand over comprehensive documentation and provide post-launch support
              to ensure your product continues to perform at its best as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="sd-features">
        <div className="sd-features__container">
          <div className="sd-features__header">
            <div>
              <div className="sd-features__badge">
                <span className="sd-features__badge-dot" />
                Included by default
              </div>
              <h2 className="sd-features__title">Everything in the box.</h2>
            </div>
          </div>
          <div className="sd-features__grid">
            {SERVICE_FEATURES.map(f => (
              <div key={f} className="sd-features__item">
                <div className="sd-features__item-icon">
                  <Icons.Check width="16" height="16" />
                </div>
                <div className="sd-features__item-text">{f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="sd-tech">
        <div className="sd-tech__blob" />
        <div className="sd-tech__container">
          <div className="sd-tech__badge">
            <span className="sd-tech__badge-dot" />
            Tech stack
          </div>
          <h2 className="sd-tech__title">Modern technology, proven results.</h2>
          <p className="sd-tech__desc">
            We use industry-leading technologies chosen for performance, scalability, and long-term maintainability.
          </p>
          <div className="sd-tech__grid">
            {TECH_STACK.map(t => (
              <div key={t.n} className="sd-tech__card">
                <div className="sd-tech__card-group">{t.g}</div>
                <div className="sd-tech__card-name">{t.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sd-cta">
        <div className="sd-cta__container">
          <div className="sd-cta__badge">
            <span className="sd-cta__badge-dot" />
            Start Your Digital Journey
          </div>
          <h2 className="sd-cta__title">
            Ready to start your<br />
            <span className="sd-cta__title-gradient">{s.name} project?</span>
          </h2>
          <p className="sd-cta__desc">
            Tell us about your goals and we'll get back within 24 hours with a clear plan and timeline.
          </p>
          <div className="sd-cta__actions">
            <button className="sd-cta__btn-primary" onClick={() => navigate('/contact')}>
              Get In Touch <Icons.Arrow width="14" height="14" />
            </button>
            <button className="sd-cta__btn-secondary" onClick={() => navigate('/portfolio')}>
              See Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
