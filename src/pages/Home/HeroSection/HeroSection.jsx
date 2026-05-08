import { useNavigate } from 'react-router-dom';
import { Icons } from '../../../components/ui/Icons';
import { useResponsive } from '../../../hooks/useResponsive';
import HeroVisual from './HeroVisual/HeroVisual';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <section className="hero-section">
      <div className="hero-section__dots ap-dot-bg" />
      <div className="hero-section__blob" />

      <div className="hero-section__container">
        <div className="hero-section__grid">
          <div>
            <div className="hero-section__badge">
              <span className="hero-section__badge-dot" />
              Global Digital Solutions Company
            </div>

            <h1 className="hero-section__title">
              Empowering<br />Innovation Through<br />
              <span className="hero-section__title-gradient">Digital Solutions.</span>
            </h1>

            <p className="hero-section__desc">
              We craft high-performance mobile apps, dynamic websites, and scalable
              cloud solutions to accelerate your business growth.
            </p>

            <div className="hero-section__ctas">
              <button className="hero-section__btn-primary" onClick={() => navigate('/services')}>
                Explore Our Services <Icons.Arrow width="14" height="14" />
              </button>
              <button className="hero-section__btn-secondary" onClick={() => navigate('/contact')}>
                Get In Touch
              </button>
            </div>

            <div className="hero-section__trust">
              <div className="hero-section__trust-stars">
                {[...Array(5)].map((_, i) => (
                  <Icons.Star key={i} width="14" height="14" className="hero-section__star-icon" />
                ))}
                <span className="hero-section__trust-rating">5.0 Client Rating</span>
              </div>
              <span className="hero-section__trust-divider" />
              <span>100+ Global Clients</span>
              <span className="hero-section__trust-divider" />
              <span>100+ Projects Delivered</span>
            </div>
          </div>

          {!isMobile && (
            <div className="hero-section__visual-wrap">
              <HeroVisual />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
