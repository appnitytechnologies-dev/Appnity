import { useNavigate } from 'react-router-dom';
import { Icons } from '../../ui/Icons';
import './CtaBanner.css';

const STATS = [
  { k: '100+', v: 'Happy clients served worldwide' },
  { k: '24h',  v: 'Response time on every inquiry' },
  { k: '8+',   v: 'Years of industry experience' },
];

export default function CtaBanner() {
  const navigate = useNavigate();

  return (
    <section className="cta-banner">
      <div className="cta-banner__card">
        <div className="cta-banner__blob-top" />
        <div className="cta-banner__blob-bottom" />
        <div className="cta-banner__sheen" />

        <div className="cta-banner__grid">
          <div>
            <div className="cta-banner__badge">
              <span className="cta-banner__badge-dot" />
              Start Your Digital Journey
            </div>
            <h2 className="cta-banner__title">
              Let&apos;s Build Something<br />
              <span className="cta-banner__title-gradient">Great Together.</span>
            </h2>
            <p className="cta-banner__desc">
              Tell us about your project. Our team will get back to you within 24 hours
              with a clear plan, timeline, and a dedicated team ready to deliver.
            </p>
            <div className="cta-banner__actions">
              <button className="cta-banner__btn-primary" onClick={() => navigate('/contact')}>
                Get In Touch Today <Icons.Arrow width="14" height="14" />
              </button>
              <button className="cta-banner__btn-secondary" onClick={() => navigate('/portfolio')}>
                See Our Work
              </button>
            </div>
          </div>

          <div className="cta-banner__stats">
            {STATS.map(s => (
              <div key={s.k} className="cta-banner__stat">
                <div className="cta-banner__stat-value">{s.k}</div>
                <div className="cta-banner__stat-label">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
