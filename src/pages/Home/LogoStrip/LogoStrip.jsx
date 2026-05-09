import './LogoStrip.css';

const INDUSTRIES = [
  { name: 'Healthcare',  color: '#0EA5E9' },
  { name: 'Fintech',     color: '#7A4CFF' },
  { name: 'E-Commerce',  color: '#F59E0B' },
  { name: 'Logistics',   color: '#10B981' },
  { name: 'Education',   color: '#3D6CFF' },
  { name: 'Real Estate', color: '#EF4444' },
  { name: 'SaaS',        color: '#B14CFF' },
];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="logo-strip__container">
        <div className="logo-strip__label">
          Serving clients across industries worldwide
        </div>
        <div className="logo-strip__list">
          {INDUSTRIES.map(ind => (
            <div
              key={ind.name}
              className="logo-strip__pill"
              style={{
                background: `${ind.color}12`,
                border: `1px solid ${ind.color}35`,
                color: ind.color,
              }}
            >
              <span
                className="logo-strip__pill-dot"
                style={{ background: ind.color }}
              />
              {ind.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
