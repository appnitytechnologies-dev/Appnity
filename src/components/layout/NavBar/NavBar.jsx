import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo';
import { Icons } from '../../ui/Icons';
import './NavBar.css';

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
    const onScroll = () => {
      const top = el.scrollTop;
      setScrolled(prev => {
        if (!prev && top > 24) return true;
        if (prev && top <= 4) return false;
        return prev;
      });
    };
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

  return (
    <>
      <header className={`nav-bar__header${scrolled ? ' nav-bar__header--scrolled' : ''}`}>
        <div className="nav-bar__inner">
          <Link className="nav-bar__logo-btn" to="/">
            <Logo size={scrolled ? 28 : 42} />
          </Link>

          {!isMobile && (
            <nav className="nav-bar__desktop-nav">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item}
                  to={PAGE_PATH[item]}
                  className={`nav-bar__nav-item${active === item ? ' nav-bar__nav-item--active' : ''}`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          )}

          <div className="nav-bar__actions">
            {!isMobile && (
              <Link className="nav-bar__cta-btn" to="/contact">
                Get In Touch <Icons.Arrow width="14" height="14" />
              </Link>
            )}
            {isMobile && (
              <button className="nav-bar__burger" onClick={() => setOpen(o => !o)}>
                {open ? <Icons.Close width="18" height="18" /> : <Icons.Menu width="18" height="18" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {isMobile && (
        <div
          className={`nav-bar__backdrop${open ? ' nav-bar__backdrop--open' : ''}`}
          onClick={() => setOpen(false)}
        />
      )}

      {isMobile && (
        <div className={`nav-bar__drawer${open ? ' nav-bar__drawer--open' : ''}`}>
          <div className="nav-bar__drawer-header">
            <Logo size={24} />
            <button className="nav-bar__drawer-close" onClick={() => setOpen(false)}>
              <Icons.Close width="16" height="16" />
            </button>
          </div>

          <div className="nav-bar__drawer-nav">
            {NAV_ITEMS.map(item => (
              <Link
                key={item}
                to={PAGE_PATH[item]}
                onClick={() => setOpen(false)}
                className={`nav-bar__drawer-item${active === item ? ' nav-bar__drawer-item--active' : ''}`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="nav-bar__drawer-footer">
            <Link
              className="nav-bar__drawer-cta"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Get In Touch <Icons.Arrow width="14" height="14" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
