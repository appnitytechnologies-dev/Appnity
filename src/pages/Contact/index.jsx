import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, submitForm } from '../../store/slices/contactSlice';
import NavBar from '../../components/layout/NavBar';
import Footer from '../../components/layout/Footer';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { useResponsive } from '../../hooks/useResponsive';

function InputField({ label, fieldKey, type = 'text', placeholder = '' }) {
  const dispatch = useDispatch();
  const value = useSelector(s => s.contact.form[fieldKey]);

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 13, fontWeight: 500, color: BRAND.ink }}>{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => dispatch(updateField({ field: fieldKey, value: e.target.value }))}
        style={{
          padding: '13px 14px', borderRadius: 10, fontSize: 15,
          background: '#fff', border: `1px solid ${BRAND.border}`,
          fontFamily: BRAND.body, color: BRAND.ink, outline: 'none',
          transition: 'border-color .15s, box-shadow .15s',
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = BRAND.purple; e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.purple}22`; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = BRAND.border; e.currentTarget.style.boxShadow = 'none'; }}
      />
    </label>
  );
}

export default function ContactPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector(s => s.contact.form);
  const sent = useSelector(s => s.contact.sent);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { isMobile } = useResponsive();

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

      <section style={{ padding: isMobile ? '32px 20px 48px' : '40px 64px 64px' }}>
        <div style={{
          maxWidth: 1240, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
          gap: isMobile ? 40 : 64,
          alignItems: 'flex-start',
        }}>
          {/* Left info */}
          <div style={{ position: isMobile ? 'static' : 'sticky', top: 100 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px 6px 8px', borderRadius: 999,
              background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
              fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Get in touch
            </div>
            <h1 style={{ fontSize: isMobile ? 44 : 64, marginTop: 22, letterSpacing: '-0.035em', fontWeight: 800, fontFamily: BRAND.display, color: BRAND.ink }}>
              Tell us about<br />
              <span style={{ background: BRAND.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>your project.</span>
            </h1>
            <p style={{ marginTop: 22, fontSize: 17, color: BRAND.inkMute, lineHeight: 1.6, maxWidth: 460 }}>
              We reply to every inquiry within 24 hours. The first conversation is a
              free scoping call — no pressure, just a clear plan for your project.
            </p>
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { Icon: Icons.Mail,  l: 'info@appnitytechnologies.com', s: 'For new project inquiries' },
                { Icon: Icons.Phone, l: '+91 XXXXX XXXXX',              s: 'Mon–Fri, 10:00–18:00 IST' },
                { Icon: Icons.Pin,   l: 'India · Serving Globally',     s: 'Remote-first, worldwide delivery' },
              ].map((c, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px',
                  borderRadius: 12, background: '#fff', border: `1px solid ${BRAND.border}`,
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: BRAND.gradSoft, color: BRAND.purple,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <c.Icon width="18" height="18" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: BRAND.ink }}>{c.l}</div>
                    <div style={{ fontSize: 12.5, color: BRAND.inkMute, marginTop: 2 }}>{c.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div style={{
            padding: isMobile ? 24 : 40, borderRadius: 20,
            background: '#fff', border: `1px solid ${BRAND.border}`, boxShadow: BRAND.shadowMd,
          }}>
            {!sent ? (
              <>
                <h2 style={{ fontSize: 28, fontFamily: BRAND.display, fontWeight: 700, color: BRAND.ink }}>Project inquiry</h2>
                <p style={{ marginTop: 8, fontSize: 14, color: BRAND.inkMute }}>
                  Fields marked * are required. We respond within one business day.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginTop: 28 }}>
                  <InputField label="Your name *"  fieldKey="name"  type="text"  placeholder="Jane Doe" />
                  <InputField label="Work email *" fieldKey="email" type="email" placeholder="jane@company.com" />
                </div>

                <div style={{ marginTop: 16 }}>
                  <InputField label="Company" fieldKey="company" type="text" placeholder="Acme Inc." />
                </div>

                <label style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: BRAND.ink }}>Tell us about the project *</span>
                  <textarea
                    value={form.message}
                    onChange={(e) => dispatch(updateField({ field: 'message', value: e.target.value }))}
                    placeholder="What are you trying to build, who is it for, and what's the timeline?"
                    rows={5}
                    style={{
                      padding: '14px 14px', borderRadius: 10, fontSize: 15,
                      background: '#fff', border: `1px solid ${BRAND.border}`,
                      fontFamily: BRAND.body, color: BRAND.ink, outline: 'none',
                      resize: 'vertical', minHeight: 140,
                      transition: 'border-color .15s, box-shadow .15s',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = BRAND.purple; e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.purple}22`; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = BRAND.border; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </label>

                <div style={{ display: 'flex', gap: 10, marginTop: 18, padding: 14, borderRadius: 10, background: BRAND.paperSoft }}>
                  <Icons.Shield width="18" height="18" style={{ color: BRAND.purple, flexShrink: 0, marginTop: 1 }} />
                  <div style={{ fontSize: 13, color: BRAND.inkMute, lineHeight: 1.5 }}>
                    We treat every message as confidential. Your information is never shared with third parties.
                  </div>
                </div>

                {error && (
                  <div style={{
                    marginTop: 14, padding: '12px 16px', borderRadius: 10,
                    background: '#FFF3F3', border: '1px solid #FFCCCC',
                    fontSize: 13, color: '#CC3333',
                  }}>
                    {error}
                  </div>
                )}

                <button
                  onClick={handleSend}
                  disabled={!valid || submitting}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    marginTop: 24, padding: '15px 24px', borderRadius: 10, border: 0,
                    fontSize: 15, fontWeight: 600, width: '100%',
                    color: '#fff', background: BRAND.grad, fontFamily: BRAND.body,
                    boxShadow: BRAND.shadowGlow,
                    opacity: valid && !submitting ? 1 : 0.5,
                    cursor: valid && !submitting ? 'pointer' : 'not-allowed',
                    transition: 'transform .15s, opacity .15s',
                  }}
                  onMouseEnter={(e) => { if (valid && !submitting) e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
                >
                  {submitting
                    ? 'Sending…'
                    : <> Send inquiry <Icons.Arrow width="14" height="14" /> </>
                  }
                </button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, margin: '0 auto',
                  background: BRAND.grad, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: BRAND.shadowGlow,
                }}>
                  <Icons.Check width="32" height="32" />
                </div>
                <h2 style={{ fontSize: 28, marginTop: 24, fontFamily: BRAND.display, fontWeight: 700, color: BRAND.ink }}>
                  Thanks, {form.name.split(' ')[0]}!
                </h2>
                <p style={{ marginTop: 12, fontSize: 16, color: BRAND.inkMute, maxWidth: 420, margin: '12px auto 0' }}>
                  We&apos;ll be in touch at <strong style={{ color: BRAND.ink }}>{form.email}</strong> within one business day.
                </p>
                <button
                  onClick={() => navigate('/portfolio')}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    marginTop: 24, padding: '12px 20px', borderRadius: 10,
                    fontSize: 14, fontWeight: 600, cursor: 'pointer',
                    color: BRAND.ink, background: 'transparent',
                    border: `1px solid ${BRAND.border}`, fontFamily: BRAND.body,
                  }}
                >
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
