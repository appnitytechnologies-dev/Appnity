import { Icons } from '../../../components/ui/Icons';
import { TESTIMONIALS } from '../../../constants/services';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__intro">
          <div className="testimonials__badge">
            <span className="testimonials__badge-dot" />
            Client stories
          </div>
          <h2 className="testimonials__title">What it&apos;s like to work with us.</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(t => (
            <div key={t.a} className="testimonials__card">
              <Icons.Quote width="28" height="28" className="testimonials__quote-icon" />
              <p className="testimonials__quote-text">&ldquo;{t.q}&rdquo;</p>
              <div className="testimonials__author">
                <div className="testimonials__author-avatar">{t.i}</div>
                <div>
                  <div className="testimonials__author-name">{t.a}</div>
                  <div className="testimonials__author-role">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
