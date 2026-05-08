import { useNavigate } from 'react-router-dom';
import { Icons } from '../../../components/ui/Icons';
import { SERVICES } from '../../../constants/services';
import './ServicesGrid.css';

export default function ServicesGrid() {
  const navigate = useNavigate();

  return (
    <section className="services-grid">
      <div className="services-grid__container">
        <div className="services-grid__header">
          <div className="services-grid__header-left">
            <div className="services-grid__badge">
              <span className="services-grid__badge-dot" />
              What we do
            </div>
            <h2 className="services-grid__title">
              Everything your business<br />
              <span className="services-grid__title-muted">needs to grow digitally.</span>
            </h2>
          </div>
          <button className="services-grid__all-link" onClick={() => navigate('/services')}>
            All services <Icons.Arrow width="14" height="14" />
          </button>
        </div>

        <div className="services-grid__grid">
          {SERVICES.map(s => {
            const I = Icons[s.icon];
            return (
              <div
                key={s.name}
                className="services-grid__card"
                onClick={() => navigate('/services/detail', { state: { service: s } })}
              >
                <div className="services-grid__card-icon">
                  <I width="22" height="22" />
                </div>
                <div className="services-grid__card-name">{s.name}</div>
                <p className="services-grid__card-desc">{s.desc}</p>
                <div className="services-grid__card-link">
                  Learn more <Icons.Arrow width="13" height="13" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
