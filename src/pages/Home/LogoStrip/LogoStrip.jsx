import './LogoStrip.css';

const NAMES = ['Healthcare', 'Fintech', 'E-Commerce', 'Logistics', 'Education', 'Real Estate', 'SaaS'];
const COLOR_CLASSES = ['ink', 'purple', 'blue'];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="logo-strip__container">
        <div className="logo-strip__label">
          Serving clients across industries worldwide
        </div>
        <div className="logo-strip__list">
          {NAMES.map((n, i) => (
            <div key={n} className="logo-strip__item">
              <span className={`logo-strip__icon logo-strip__icon--${COLOR_CLASSES[i % 3]} logo-strip__icon--${i % 2 === 0 ? 'square' : 'round'}`} />
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
