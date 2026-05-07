import { useNavigate } from 'react-router-dom';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { useResponsive } from '../../hooks/useResponsive';

const STATS = [
  { k: '100+',  v: 'Happy clients across the globe' },
  { k: '100+',  v: 'Projects delivered successfully' },
  { k: '8+',    v: 'Years of industry experience' },
  { k: '98%',   v: 'Client satisfaction rate' },
];

export default function AboutPreview() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <section style={{
      padding: isMobile ? '48px 20px' : '72px 64px',
      background: BRAND.paperSoft,
      borderTop: `1px solid ${BRAND.border}`,
      borderBottom: `1px solid ${BRAND.border}`,
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 40 : 80,
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px 6px 8px', borderRadius: 999,
            background: '#fff', border: `1px solid ${BRAND.border}`,
            fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad, boxShadow: '0 0 0 3px rgba(122,76,255,0.12)' }} />
            About Appnity
          </div>
          <h2 style={{
            fontSize: isMobile ? 36 : 48, marginTop: 18, letterSpacing: '-0.03em',
            fontFamily: BRAND.display, fontWeight: 700, lineHeight: 1.05, color: BRAND.ink,
          }}>
            Driven by Innovation,<br />Committed to Excellence.
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, color: BRAND.inkMute, lineHeight: 1.6, maxWidth: 520 }}>
            Appnity Technologies is a global digital solutions company partnering with startups
            and enterprises to build powerful mobile apps, web platforms, and scalable cloud
            infrastructure. Our expert team of designers, engineers, and strategists delivers
            products that drive real business impact.
          </p>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {STATS.map(s => (
              <div key={s.k}>
                <div style={{ fontFamily: BRAND.display, fontSize: isMobile ? 30 : 38, fontWeight: 700, letterSpacing: '-0.02em', color: BRAND.ink }}>{s.k}</div>
                <div style={{ fontSize: 13, color: BRAND.inkMute, marginTop: 4, lineHeight: 1.5 }}>{s.v}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/about')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 36, padding: '12px 20px', borderRadius: 10,
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
              color: BRAND.ink, background: '#fff',
              border: `1px solid ${BRAND.border}`, fontFamily: BRAND.body,
              transition: 'background .2s, border-color .2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.paperSoft; e.currentTarget.style.borderColor = BRAND.ink; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = BRAND.border; }}
          >
            More about us <Icons.Arrow width="14" height="14" />
          </button>
        </div>

        {!isMobile && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { label: 'Mobile Development', color: BRAND.blue,    h: 280 },
              { label: 'Web Platforms',      color: BRAND.purple,  h: 200 },
              { label: 'UI/UX Design',       color: BRAND.magenta, h: 200 },
              { label: 'Cloud Solutions',    color: '#0B9E6A',     h: 280 },
            ].map(item => (
              <div key={item.label} style={{
                height: item.h, borderRadius: 14,
                background: `linear-gradient(135deg, ${item.color}18, ${item.color}30)`,
                border: `1px solid ${item.color}28`,
                display: 'flex', alignItems: 'flex-end', padding: 18,
              }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: item.color }}>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
