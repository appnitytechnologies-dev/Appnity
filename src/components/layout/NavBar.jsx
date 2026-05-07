import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import { Icons } from '../ui/Icons';
import { BRAND } from '../../constants/brand';

const NAV_ITEMS = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

const PAGE_PATH = {
  Home: '/', About: '/about', Services: '/services',
  Portfolio: '/portfolio', Contact: '/contact', Blog: '/blog',
};

const PATH_PAGE = {
  '/': 'Home', '/about': 'About', '/services': 'Services',
  '/services/detail': 'Services', '/portfolio': 'Portfolio',
  '/contact': 'Contact', '/blog': 'Blog',
};

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1023 : false
  );

  const active = PATH_PAGE[location.pathname]
    || (location.pathname.startsWith('/blog') ? 'Blog' : 'Home');

  useEffect(() => {
    const el = document.querySelector('.ap-page');
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 1023);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const goTo = (page) => {
    navigate(PAGE_PATH[page] || '/');
    setOpen(false);
  };

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        borderBottom: scrolled ? `1px solid ${BRAND.border}` : '1px solid transparent',
        transition: 'background .25s ease, border-color .25s ease',
      }}>
        <div style={{
          maxWidth: 1240, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 68, padding: '0 24px',
        }}>
          <button onClick={() => goTo('Home')} style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', display: 'flex' }}>
            <Logo size={28} />
          </button>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {NAV_ITEMS.map(item => (
                <button
                  key={item}
                  onClick={() => goTo(item)}
                  style={{
                    padding: '8px 14px', borderRadius: 8,
                    border: 0, cursor: 'pointer', fontSize: 14, fontWeight: 500,
                    color: active === item ? BRAND.ink : BRAND.inkMute,
                    background: active === item ? BRAND.paperSoft : 'transparent',
                    fontFamily: BRAND.body,
                    transition: 'color .15s, background .15s',
                  }}
                  onMouseEnter={(e) => { if (active !== item) e.currentTarget.style.color = BRAND.ink; }}
                  onMouseLeave={(e) => { if (active !== item) e.currentTarget.style.color = BRAND.inkMute; }}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {!isMobile && (
              <button
                onClick={() => goTo('Contact')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 16px', borderRadius: 10, border: 0,
                  fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  color: '#fff', background: BRAND.ink,
                  fontFamily: BRAND.body,
                  boxShadow: '0 1px 0 rgba(255,255,255,0.12) inset, 0 6px 20px rgba(11,31,58,0.18)',
                  transition: 'transform .15s, box-shadow .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 1px 0 rgba(255,255,255,0.12) inset, 0 12px 28px rgba(11,31,58,0.28)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 1px 0 rgba(255,255,255,0.12) inset, 0 6px 20px rgba(11,31,58,0.18)'; }}
              >
                Get In Touch <Icons.Arrow width="14" height="14" />
              </button>
            )}

            {isMobile && (
              <button
                onClick={() => setOpen(o => !o)}
                style={{
                  background: 'transparent', border: `1px solid ${BRAND.border}`,
                  width: 40, height: 40, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: BRAND.ink, cursor: 'pointer',
                }}
              >
                {open ? <Icons.Close width="18" height="18" /> : <Icons.Menu width="18" height="18" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {isMobile && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 98,
            background: 'rgba(11,31,58,0.45)',
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity .25s ease',
          }}
        />
      )}

      {/* Right-side slide drawer */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 99,
          width: 280, background: '#fff',
          boxShadow: '-8px 0 32px rgba(11,31,58,0.15)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
        }}>
          {/* Drawer header */}
          <div style={{
            padding: '18px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderBottom: `1px solid ${BRAND.border}`,
            flexShrink: 0,
          }}>
            <Logo size={24} />
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent', border: `1px solid ${BRAND.border}`,
                width: 36, height: 36, borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: BRAND.ink, cursor: 'pointer',
              }}
            >
              <Icons.Close width="16" height="16" />
            </button>
          </div>

          {/* Nav links */}
          <div style={{ padding: '16px 12px', flex: 1 }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => goTo(item)}
                style={{
                  display: 'flex', width: '100%', padding: '12px 14px', marginBottom: 4,
                  borderRadius: 10, border: 0, cursor: 'pointer', textAlign: 'left',
                  fontSize: 15, fontWeight: 500, fontFamily: BRAND.body,
                  color: active === item ? BRAND.ink : BRAND.inkMute,
                  background: active === item ? BRAND.paperSoft : 'transparent',
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div style={{ padding: '16px 12px 40px', flexShrink: 0 }}>
            <button
              onClick={() => goTo('Contact')}
              style={{
                display: 'flex', width: '100%',
                alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '13px 20px', borderRadius: 10, border: 0,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                color: '#fff', background: BRAND.ink, fontFamily: BRAND.body,
                boxShadow: '0 6px 20px rgba(11,31,58,0.18)',
              }}
            >
              Get In Touch <Icons.Arrow width="14" height="14" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
