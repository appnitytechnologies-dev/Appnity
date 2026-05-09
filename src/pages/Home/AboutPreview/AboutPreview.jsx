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
  { label: 'Mobile Development', tag: 'iOS & Android', icon: 'Mobile', color: 'blue',    size: 'tall' },
  { label: 'Web Platforms',      tag: 'React, WordPress & Joomla', icon: 'Web',    color: 'purple',  size: 'short' },
  { label: 'UI/UX Design',       tag: 'Figma & Prototyping', icon: 'Brush',  color: 'magenta', size: 'short' },
  { label: 'Cloud Solutions',    tag: 'AWS & Azure', icon: 'Cloud',  color: 'green',   size: 'tall' },
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
            {VISUAL_CARDS.map(item => {
              const I = Icons[item.icon];
              return (
                <div
                  key={item.label}
                  className={`about-preview__visual-card about-preview__visual-card--${item.size} about-preview__visual-card--${item.color}`}
                >
                  <div className="about-preview__visual-card-icon">
                    <I width="28" height="28" />
                  </div>
                  <div className="about-preview__visual-card-body">
                    <span className="about-preview__visual-card-label">{item.label}</span>
                    <span className="about-preview__visual-card-tag">{item.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
