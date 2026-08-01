import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo';
import { Icons } from '../../ui/Icons';
import { useResponsive } from '../../../hooks/useResponsive';
import { SERVICES } from '../../../constants/services';
import './Footer.css';

const SERVICE_MAP = Object.fromEntries(SERVICES.map(s => [s.name, s]));

const COLS = [
  { title: 'Services',  items: ['Mobile App Development', 'Web App Development', 'UI/UX Design', 'Graphic Design', 'Digital Marketing', 'Cloud Computing', 'Project Management', 'Business Solutions'] },
  { title: 'Company',   items: ['About', 'Services', 'Portfolio', 'Blog', 'Contact'] },
  { title: 'Connect',   items: ['Email Us', 'LinkedIn', 'Instagram', 'Twitter', 'Facebook'] },
];

const ITEM_PATH = {
  About: '/about', Services: '/services', Portfolio: '/portfolio',
  Blog: '/blog', Contact: '/contact',
};

const ITEM_HREF = {
  'Email Us': 'mailto:info@appnitytechnologies.com',
  'LinkedIn':  'https://linkedin.com/company/appnity-technologies',
  'Instagram': 'https://instagram.com/appnitytechnologies',
  'Twitter':   'https://twitter.com/appnitytech',
  'Facebook':  'https://facebook.com/appnitytechnologies',
};

const SOCIAL_LINKS = [
  { Icon: Icons.Twitter,  href: ITEM_HREF.Twitter },
  { Icon: Icons.Linkedin, href: ITEM_HREF.LinkedIn },
];

export default function Footer() {
  const { isMobile } = useResponsive();

  return (
    <footer className="footer">
      <div className="footer__container">
        {isMobile && (
          <div className="footer__mobile-brand">
            <Logo size={38} />
            <p className="footer__brand-desc">
              A global digital solutions company delivering mobile apps, web platforms,
              UI/UX design, and cloud solutions for businesses worldwide.
            </p>
            <div className="footer__socials">
              {SOCIAL_LINKS.map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <Icon width="16" height="16" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="footer__grid">
          {!isMobile && (
            <div>
              <Logo size={38} />
              <p className="footer__desktop-brand-desc">
                A global digital solutions company delivering mobile apps, web platforms,
                UI/UX design, and cloud solutions for businesses worldwide.
              </p>
              <div className="footer__desktop-socials">
                {SOCIAL_LINKS.map(({ Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                    <Icon width="16" height="16" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {COLS.map(col => (
            <div key={col.title}>
              <div className="footer__col-title">{col.title}</div>
              <ul className="footer__col-list">
                {col.items.map(item => (
                  <li key={item}>
                    {ITEM_HREF[item] ? (
                      <a
                        href={ITEM_HREF[item]}
                        target={item === 'Email Us' ? undefined : '_blank'}
                        rel={item === 'Email Us' ? undefined : 'noopener noreferrer'}
                        className="footer__col-btn"
                      >
                        {item}
                      </a>
                    ) : (
                      <Link
                        to={ITEM_PATH[item] || (SERVICE_MAP[item] ? `/services/${SERVICE_MAP[item].slug}` : '#')}
                        className={`footer__col-btn${!ITEM_PATH[item] && !SERVICE_MAP[item] ? ' footer__col-btn--plain' : ''}`}
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div>© 2026 Appnity Technologies. All rights reserved.</div>
          <div className="footer__bottom-links">
            <Link className="footer__bottom-link" to="/privacy-policy">Privacy Policy</Link>
            <Link className="footer__bottom-link" to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
