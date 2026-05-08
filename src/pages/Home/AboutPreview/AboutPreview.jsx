import { useNavigate } from 'react-router-dom';
import { Icons } from '../../../components/ui/Icons';
import { useResponsive } from '../../../hooks/useResponsive';
import './AboutPreview.css';

const STATS = [
  { k: '100+', v: 'Happy clients across the globe' },
  { k: '100+', v: 'Projects delivered successfully' },
  { k: '8+',   v: 'Years of industry experience' },
  { k: '98%',  v: 'Client satisfaction rate' },
];

const VISUAL_CARDS = [
  { label: 'Mobile Development', color: 'blue',    size: 'tall' },
  { label: 'Web Platforms',      color: 'purple',  size: 'short' },
  { label: 'UI/UX Design',       color: 'magenta', size: 'short' },
  { label: 'Cloud Solutions',    color: 'green',   size: 'tall' },
];

export default function AboutPreview() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <section className="about-preview">
      <div className="about-preview__container">
        <div>
          <div className="about-preview__badge">
            <span className="about-preview__badge-dot" />
            About Appnity
          </div>
          <h2 className="about-preview__title">
            Driven by Innovation,<br />Committed to Excellence.
          </h2>
          <p className="about-preview__desc">
            Appnity Technologies is a global digital solutions company partnering with startups
            and enterprises to build powerful mobile apps, web platforms, and scalable cloud
            infrastructure. Our expert team of designers, engineers, and strategists delivers
            products that drive real business impact.
          </p>
          <div className="about-preview__stats">
            {STATS.map(s => (
              <div key={s.k}>
                <div className="about-preview__stat-value">{s.k}</div>
                <div className="about-preview__stat-label">{s.v}</div>
              </div>
            ))}
          </div>
          <button className="about-preview__btn" onClick={() => navigate('/about')}>
            More about us <Icons.Arrow width="14" height="14" />
          </button>
        </div>

        {!isMobile && (
          <div className="about-preview__visual">
            {VISUAL_CARDS.map(item => (
              <div
                key={item.label}
                className={`about-preview__visual-card about-preview__visual-card--${item.size} about-preview__visual-card--${item.color}`}
              >
                <span className="about-preview__visual-card-label">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
