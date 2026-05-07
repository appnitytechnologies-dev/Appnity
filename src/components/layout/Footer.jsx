import { useNavigate } from 'react-router-dom';
import Logo from '../ui/Logo';
import { Icons } from '../ui/Icons';
import { BRAND } from '../../constants/brand';
import { useResponsive } from '../../hooks/useResponsive';

const COLS = [
  { title: 'Services',  items: ['Mobile App Development', 'Web App Development', 'UI/UX Design', 'Graphic Design', 'Digital Marketing', 'Cloud Computing', 'Project Management', 'Business Solutions'] },
  { title: 'Company',   items: ['About', 'Services', 'Portfolio', 'Blog', 'Contact'] },
  { title: 'Connect',   items: ['info@appnitytechnologies.com', 'LinkedIn', 'Instagram', 'Twitter', 'Facebook'] },
];

const ITEM_PATH = {
  About: '/about', Services: '/services', Portfolio: '/portfolio',
  Blog: '/blog', Contact: '/contact',
};

export default function Footer() {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  const gridCols = isMobile
    ? '1fr 1fr'
    : isTablet
      ? '1fr 1fr 1fr'
      : '1.4fr repeat(3, 1fr)';

  return (
    <footer style={{ borderTop: `1px solid ${BRAND.border}`, background: BRAND.paperSoft }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isMobile ? '48px 20px 24px' : '72px 64px 32px' }}>

        {/* Logo row on mobile (full width above grid) */}
        {isMobile && (
          <div style={{ marginBottom: 36 }}>
            <Logo size={28} />
            <p style={{ marginTop: 14, fontSize: 14, color: BRAND.inkMute, maxWidth: 320, lineHeight: 1.6 }}>
              A global digital solutions company delivering mobile apps, web platforms,
              UI/UX design, and cloud solutions for businesses worldwide.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              {[Icons.Twitter, Icons.Linkedin, Icons.Github].map((I, i) => (
                <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: '#fff', border: `1px solid ${BRAND.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: BRAND.inkMute, transition: 'color .15s, border-color .15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = BRAND.ink; e.currentTarget.style.borderColor = BRAND.ink; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = BRAND.inkMute; e.currentTarget.style.borderColor = BRAND.border; }}>
                  <I width="16" height="16" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: isMobile ? 28 : 48 }}>
          {/* Brand column — desktop only */}
          {!isMobile && (
            <div>
              <Logo size={28} />
              <p style={{ marginTop: 18, fontSize: 14, color: BRAND.inkMute, maxWidth: 320, lineHeight: 1.6 }}>
                A global digital solutions company delivering mobile apps, web platforms,
                UI/UX design, and cloud solutions for businesses worldwide.
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 22 }}>
                {[Icons.Twitter, Icons.Linkedin, Icons.Github].map((I, i) => (
                  <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: '#fff', border: `1px solid ${BRAND.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: BRAND.inkMute, transition: 'color .15s, border-color .15s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = BRAND.ink; e.currentTarget.style.borderColor = BRAND.ink; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = BRAND.inkMute; e.currentTarget.style.borderColor = BRAND.border; }}>
                    <I width="16" height="16" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {COLS.map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: 13, fontWeight: 600, color: BRAND.ink,
                letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: 18,
              }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(item => (
                  <li key={item}>
                    <button
                      onClick={() => ITEM_PATH[item] ? navigate(ITEM_PATH[item]) : undefined}
                      style={{
                        background: 'none', border: 0, padding: 0,
                        fontSize: 14, color: BRAND.inkMute, cursor: ITEM_PATH[item] ? 'pointer' : 'default',
                        fontFamily: BRAND.body, transition: 'color .15s', textAlign: 'left',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = BRAND.ink}
                      onMouseLeave={(e) => e.currentTarget.style.color = BRAND.inkMute}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56, paddingTop: 28, borderTop: `1px solid ${BRAND.border}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 13, color: BRAND.inkSubtle, flexWrap: 'wrap', gap: 12,
        }}>
          <div>© 2026 Appnity Technologies. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ color: BRAND.inkSubtle }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
