import { useNavigate } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo';
import { Icons } from '../../ui/Icons';
import { useResponsive } from '../../../hooks/useResponsive';
import { SERVICES } from '../../../constants/services';
import './Footer.css';

const SERVICE_MAP = Object.fromEntries(SERVICES.map(s => [s.name, s]));

const COLS = [
  { title: 'Services',  items: ['Mobile App Development', 'Web App Development', 'UI/UX Design', 'Graphic Design', 'Digital Marketing', 'Cloud Computing', 'Project Management', 'Business Solutions'] },
  { title: 'Company',   items: ['About', 'Services', 'Portfolio', 'Blog', 'Contact'] },
  { title: 'Connect',   items: ['info@appnitytechnologies.com', 'LinkedIn', 'Instagram', 'Twitter', 'Facebook'] },
];

const ITEM_PATH = {
  About: '/about', Services: '/services', Portfolio: '/portfolio',
  Blog: '/blog', Contact: '/contact',
};

const SOCIAL_ICONS = [Icons.Twitter, Icons.Linkedin, Icons.Github];

export default function Footer() {
  const navigate = useNavigate();
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
              {SOCIAL_ICONS.map((I, i) => (
                <a key={i} href="#" onClick={(e) => e.preventDefault()} className="footer__social-link">
                  <I width="16" height="16" />
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
                {SOCIAL_ICONS.map((I, i) => (
                  <a key={i} href="#" onClick={(e) => e.preventDefault()} className="footer__social-link">
                    <I width="16" height="16" />
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
                    <button
                      onClick={() => {
                        if (ITEM_PATH[item]) navigate(ITEM_PATH[item]);
                        else if (SERVICE_MAP[item]) navigate('/services/detail', { state: { service: SERVICE_MAP[item] } });
                      }}
                      className={`footer__col-btn${!ITEM_PATH[item] && !SERVICE_MAP[item] ? ' footer__col-btn--plain' : ''}`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div>© 2026 Appnity Technologies. All rights reserved.</div>
          <div className="footer__bottom-links">
            <button className="footer__bottom-link" onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
            <button className="footer__bottom-link" onClick={() => navigate('/terms-of-service')}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
