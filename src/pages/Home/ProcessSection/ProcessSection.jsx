import { PROCESS_STEPS } from '../../../constants/services';
import { Icons } from '../../../components/ui/Icons';
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

        <div className="process-section__grid">
          {PROCESS_STEPS.map((s) => {
            const I = Icons[s.icon];
            return (
              <div key={s.n} className="process-section__card">
                <div
                  className="process-section__card-icon"
                  style={{ background: `${s.accent}18`, color: s.accent }}
                >
                  <I width="22" height="22" />
                </div>
                <div className="process-section__card-num">{s.n}</div>
                <div className="process-section__card-title">{s.t}</div>
                <p className="process-section__card-desc">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
