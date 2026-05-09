import { Icons } from '../../../../components/ui/Icons';
import './HeroVisual.css';

const SERVICES = [
  { icon: 'Mobile', label: 'Mobile Apps',       color: '#3D6CFF' },
  { icon: 'Web',    label: 'Web Apps',           color: '#7A4CFF' },
  { icon: 'Brush',  label: 'UI/UX Design',       color: '#B14CFF' },
  { icon: 'Chart',  label: 'Digital Marketing',  color: '#0B9E6A' },
];

const METRICS = [
  { v: '100+', l: 'Happy Clients' },
  { v: '100+', l: 'Projects Done' },
  { v: '8+',   l: 'Yrs Experience' },
];

const BARS = [
  { l: 'Mobile Development', p: 95 },
  { l: 'UI/UX Design',       p: 90 },
  { l: 'Cloud Solutions',    p: 85 },
];

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__card">
        <div className="hero-visual__chrome">
          <div className="hero-visual__chrome-dots">
            <span className="hero-visual__chrome-dot hero-visual__chrome-dot--red" />
            <span className="hero-visual__chrome-dot hero-visual__chrome-dot--yellow" />
            <span className="hero-visual__chrome-dot hero-visual__chrome-dot--green" />
          </div>
          <span className="hero-visual__chrome-url">appnitytechnologies.com / services</span>
        </div>

        <div className="hero-visual__body">
          <div className="hero-visual__services-header">
            <span className="hero-visual__services-title">Our Services</span>
            <span className="hero-visual__services-badge">8 Disciplines</span>
          </div>

          <div className="hero-visual__services-grid">
            {SERVICES.map(s => {
              const I = Icons[s.icon];
              return (
                <div key={s.label} className="hero-visual__service-item">
                  <div
                    className="hero-visual__service-icon"
                    style={{ background: `${s.color}18`, color: s.color }}
                  >
                    <I width="15" height="15" />
                  </div>
                  <span className="hero-visual__service-label">{s.label}</span>
                </div>
              );
            })}
          </div>

          <div className="hero-visual__metrics">
            {METRICS.map(m => (
              <div key={m.l} className="hero-visual__metric">
                <div className="hero-visual__metric-value">{m.v}</div>
                <div className="hero-visual__metric-label">{m.l}</div>
              </div>
            ))}
          </div>

          <div className="hero-visual__bars">
            {BARS.map(b => (
              <div key={b.l}>
                <div className="hero-visual__bar-header">
                  <span>{b.l}</span>
                  <span className="hero-visual__bar-pct">{b.p}%</span>
                </div>
                <div className="hero-visual__bar-track">
                  <div className="hero-visual__bar-fill" style={{ width: `${b.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-visual__badge-global">
        <div className="hero-visual__badge-global-icon">
          <Icons.Users width="16" height="16" />
        </div>
        <div>
          <div className="hero-visual__badge-global-title">Global Clientele</div>
          <div className="hero-visual__badge-global-desc">100+ clients across the globe</div>
        </div>
      </div>

      <div className="hero-visual__badge-project">
        <div className="hero-visual__badge-project-icon">
          <Icons.Star width="13" height="13" />
        </div>
        <div>
          <div className="hero-visual__badge-project-value">98%</div>
          <div className="hero-visual__badge-project-text">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
}
