import { Icons } from '../../../components/ui/Icons';
import { WHY_US } from '../../../constants/services';
import './WhyUs.css';

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="why-us__grid-bg" />
      <div className="why-us__glow" />

      <div className="why-us__container">
        <div className="why-us__header">
          <div>
            <div className="why-us__badge">
              <span className="why-us__badge-dot" />
              Why Appnity
            </div>
            <h2 className="why-us__title">Built for Businesses That Scale.</h2>
          </div>
          <p className="why-us__subtitle">
            We earn the right to work on hard problems by being honest, fast, and accountable.
            Six things every Appnity engagement comes with — by default.
          </p>
        </div>

        <div className="why-us__grid">
          {WHY_US.map(w => {
            const I = Icons[w.icon];
            return (
              <div key={w.t} className="why-us__card">
                <div className="why-us__card-icon">
                  <I width="20" height="20" />
                </div>
                <div className="why-us__card-title">{w.t}</div>
                <p className="why-us__card-desc">{w.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
