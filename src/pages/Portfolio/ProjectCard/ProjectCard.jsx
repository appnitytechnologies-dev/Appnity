import { Icons } from '../../../components/ui/Icons';
import './ProjectCard.css';

export default function ProjectCard({ p }) {
  return (
    <div className="project-card">
      <div
        className="project-card__visual"
        style={{ background: `linear-gradient(135deg, ${p.accent}22, ${p.accent}08)` }}
      >
        <div className="project-card__screen">
          <div className="project-card__screen-dots">
            <span className="project-card__screen-dot project-card__screen-dot--red" />
            <span className="project-card__screen-dot project-card__screen-dot--yellow" />
            <span className="project-card__screen-dot project-card__screen-dot--green" />
          </div>
          <div className="project-card__screen-bar" />
          <div className="project-card__screen-cols">
            <div className="project-card__screen-col" />
            <div className="project-card__screen-col" />
            <div
              className="project-card__screen-col project-card__screen-col--accent"
              style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}80)` }}
            />
          </div>
          <div className="project-card__screen-lines">
            <div className="project-card__screen-line" />
            <div className="project-card__screen-line project-card__screen-line--short" />
          </div>
          <div className="project-card__screen-spacer" />
          <div
            className="project-card__screen-btn"
            style={{ background: p.accent }}
          />
        </div>
        <span className="project-card__badge">{p.c}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__info">
          <div>
            <div className="project-card__title">{p.t}</div>
            <div className="project-card__desc">{p.d}</div>
          </div>
          <span className="project-card__icon-btn">
            <Icons.ArrowUR width="14" height="14" />
          </span>
        </div>
        <div className="project-card__tag">{p.tag}</div>
      </div>
    </div>
  );
}
