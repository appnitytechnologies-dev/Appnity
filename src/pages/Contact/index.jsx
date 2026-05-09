import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, submitForm } from '../../store/slices/contactSlice';
import NavBar from '../../components/layout/NavBar/NavBar';
import Footer from '../../components/layout/Footer/Footer';
import { Icons } from '../../components/ui/Icons';
import InputField from './InputField/InputField';
import './Contact.css';

const CONTACT_INFO = [
  { icon: 'Mail',  label: 'info@appnitytechnologies.com', sub: 'For new project inquiries' },
  { icon: 'Phone', label: '+91 96660 60167',               sub: 'Mon–Fri, 10:00–18:00 IST' },
  { icon: 'Pin',   label: 'India · Serving Globally',     sub: 'Remote-first, worldwide delivery' },
];

export default function ContactPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector(s => s.contact.form);
  const sent = useSelector(s => s.contact.sent);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const valid = form.name.trim().length > 1
    && /\S+@\S+\.\S+/.test(form.email)
    && form.message.trim().length > 8;

  const handleSend = async () => {
    if (!valid || submitting) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          company: form.company,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        dispatch(submitForm());
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Could not connect. Please email us directly at info@appnitytechnologies.com');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />

      <section className="contact">
        <div className="contact__grid">
          {/* Left info */}
          <div className="contact__sidebar">
            <div className="contact__badge">
              <span className="contact__badge-dot" />
              Get in touch
            </div>
            <h1 className="contact__title">
              Tell us about<br />
              <span className="contact__title-gradient">your project.</span>
            </h1>
            <p className="contact__desc">
              We reply to every inquiry within 24 hours. The first conversation is a
              free scoping call — no pressure, just a clear plan for your project.
            </p>
            <div className="contact__info-list">
              {CONTACT_INFO.map(c => {
                const I = Icons[c.icon];
                return (
                  <div key={c.label} className="contact__info-item">
                    <div className="contact__info-icon">
                      <I width="18" height="18" />
                    </div>
                    <div>
                      <div className="contact__info-label">{c.label}</div>
                      <div className="contact__info-sub">{c.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right form */}
          <div className="contact__form">
            {!sent ? (
              <>
                <h2 className="contact__form-title">Project inquiry</h2>
                <p className="contact__form-desc">
                  Fields marked * are required. We respond within one business day.
                </p>

                <div className="contact__form-row">
                  <InputField label="Your name *"  fieldKey="name"  type="text"  placeholder="Your full name" />
                  <InputField label="Work email *" fieldKey="email" type="email" placeholder="your@work-email.com" />
                </div>

                <div className="contact__form-field">
                  <InputField label="Company" fieldKey="company" type="text" placeholder="Your company name" />
                </div>

                <label className="contact__textarea-label">
                  <span className="contact__textarea-label-text">Tell us about the project *</span>
                  <textarea
                    className="contact__textarea"
                    value={form.message}
                    onChange={(e) => dispatch(updateField({ field: 'message', value: e.target.value }))}
                    placeholder="What are you trying to build, who is it for, and what's the timeline?"
                    rows={5}
                  />
                </label>

                <div className="contact__disclaimer">
                  <Icons.Shield width="18" height="18" className="contact__disclaimer-icon" />
                  <div className="contact__disclaimer-text">
                    We treat every message as confidential. Your information is never shared with third parties.
                  </div>
                </div>

                {error && <div className="contact__error">{error}</div>}

                <button
                  className="contact__submit-btn"
                  onClick={handleSend}
                  disabled={!valid || submitting}
                >
                  {submitting
                    ? 'Sending…'
                    : <> Send inquiry <Icons.Arrow width="14" height="14" /> </>
                  }
                </button>
              </>
            ) : (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <Icons.Check width="32" height="32" />
                </div>
                <h2 className="contact__success-title">Thanks, {form.name.split(' ')[0]}!</h2>
                <p className="contact__success-desc">
                  We&apos;ll be in touch at <strong>{form.email}</strong> within one business day.
                </p>
                <button className="contact__success-btn" onClick={() => navigate('/portfolio')}>
                  View our portfolio
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
