import { PROCESS_STEPS } from '../../../constants/services';
import './ProcessSection.css';

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-section__container">
        <div className="process-section__intro">
          <div className="process-section__badge">
            <span className="process-section__badge-dot" />
            How we work
          </div>
          <h2 className="process-section__title">A process you can plan around.</h2>
          <p className="process-section__desc">
            Same five-stage rhythm on every engagement, scaled from four-week MVPs to multi-year platforms.
          </p>
        </div>

        <div className="process-section__track">
          <div className="process-section__connector" />
          <div className="process-section__grid">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.n} className="process-section__step">
                <div className={`process-section__step-icon${i === 0 ? ' process-section__step-icon--first' : ''}`}>
                  {s.n}
                </div>
                <div className="process-section__step-title">{s.t}</div>
                <p className="process-section__step-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
