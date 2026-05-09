import NavBar from '../../components/layout/NavBar/NavBar';
import Footer from '../../components/layout/Footer/Footer';
import './PrivacyPolicy.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  const container = document.querySelector('.ap-page');
  if (el && container) {
    const offset = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 100;
    container.scrollTo({ top: offset, behavior: 'smooth' });
  }
};

const SECTIONS = [
  {
    id: 'information',
    title: 'Information We Collect',
    content: [
      {
        sub: 'Personal Information',
        text: 'When you contact us, request a quote, or engage our services, we may collect: your full name, email address, phone number, company name, and any other details you voluntarily provide through our contact or inquiry forms.',
      },
      {
        sub: 'Technical Information',
        text: 'We automatically collect certain technical data when you visit our website, including your IP address, browser type and version, operating system, pages visited, time and date of visit, and referring URLs. This data is used solely for analytics and to improve our website.',
      },
      {
        sub: 'Sensitive Personal Data',
        text: 'We do not knowingly collect Sensitive Personal Data or Information (SPDI) as defined under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, unless explicitly required and consented to for a specific service engagement.',
      },
    ],
  },
  {
    id: 'usage',
    title: 'How We Use Your Information',
    content: [
      {
        sub: null,
        text: 'We use the information we collect for the following purposes:',
      },
      {
        sub: 'Service Delivery',
        text: 'To respond to your inquiries, provide quotations, and deliver the digital services you have engaged us for.',
      },
      {
        sub: 'Communication',
        text: 'To send you project updates, invoices, service-related notices, and — with your consent — occasional updates about our services and industry insights.',
      },
      {
        sub: 'Website Improvement',
        text: 'To analyse website usage patterns, diagnose technical issues, and improve the overall user experience on our platform.',
      },
      {
        sub: 'Legal Compliance',
        text: 'To comply with applicable Indian laws, regulations, and court orders, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.',
      },
    ],
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis for Processing',
    content: [
      {
        sub: null,
        text: 'Under the Digital Personal Data Protection Act, 2023 (DPDP Act), we process your personal data based on:',
      },
      {
        sub: 'Consent',
        text: 'You have given us clear consent to process your personal data for a specific purpose, such as when you submit a contact form or sign up for our newsletter.',
      },
      {
        sub: 'Contractual Necessity',
        text: 'Processing is necessary for the performance of a contract with you — for example, delivering agreed digital services.',
      },
      {
        sub: 'Legitimate Interests',
        text: 'We may process your data for our legitimate business interests, such as improving our services and preventing fraud, provided these interests are not overridden by your rights.',
      },
      {
        sub: 'Legal Obligation',
        text: 'Processing is necessary to comply with a legal obligation under Indian law.',
      },
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing & Disclosure of Information',
    content: [
      {
        sub: null,
        text: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:',
      },
      {
        sub: 'Service Providers',
        text: 'With trusted third-party vendors who assist us in operating our website or delivering our services (such as cloud hosting providers and analytics platforms), bound by confidentiality obligations.',
      },
      {
        sub: 'Legal Requirements',
        text: 'When required to do so by law, court order, or government authority under the Information Technology Act, 2000 or any other applicable Indian legislation.',
      },
      {
        sub: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or sale of business assets, your information may be transferred to the successor entity, subject to the same privacy commitments.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    content: [
      {
        sub: null,
        text: 'We implement reasonable security practices and procedures as mandated by the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. These include:',
      },
      {
        sub: 'Technical Safeguards',
        text: 'SSL/TLS encryption for data transmission, secure server infrastructure, access controls, and regular security audits.',
      },
      {
        sub: 'Organisational Safeguards',
        text: 'Restricted access to personal data on a need-to-know basis, staff awareness of data protection obligations, and documented data handling procedures.',
      },
      {
        sub: 'Limitation',
        text: 'While we take every reasonable precaution, no method of transmission over the internet is 100% secure. In the event of a data breach affecting your rights, we will notify you as required under applicable law.',
      },
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: [
      {
        sub: null,
        text: 'We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, or as required by Indian law. Specifically:',
      },
      {
        sub: 'Client Data',
        text: 'Retained for the duration of our engagement and for a period of 3 years thereafter for legal and accounting purposes.',
      },
      {
        sub: 'Inquiry Data',
        text: 'Retained for 12 months from the date of your initial inquiry, after which it is securely deleted.',
      },
      {
        sub: 'Website Analytics',
        text: 'Aggregated and anonymised data may be retained indefinitely for statistical purposes.',
      },
    ],
  },
  {
    id: 'rights',
    title: 'Your Rights under the DPDP Act, 2023',
    content: [
      {
        sub: null,
        text: 'As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the following rights:',
      },
      {
        sub: 'Right to Access',
        text: 'You have the right to obtain a summary of your personal data that we process and the processing activities undertaken.',
      },
      {
        sub: 'Right to Correction & Erasure',
        text: 'You may request correction of inaccurate or outdated personal data, and erasure of personal data that is no longer necessary for the purpose for which it was collected.',
      },
      {
        sub: 'Right to Withdraw Consent',
        text: 'Where processing is based on your consent, you may withdraw it at any time. Withdrawal will not affect the lawfulness of processing prior to withdrawal.',
      },
      {
        sub: 'Right to Grievance Redressal',
        text: 'You have the right to file a grievance with our Grievance Officer (details below). If unresolved, you may escalate to the Data Protection Board of India.',
      },
      {
        sub: 'Right to Nominate',
        text: 'You may nominate another individual to exercise your rights in the event of your death or incapacity.',
      },
      {
        sub: 'How to Exercise Your Rights',
        text: 'To exercise any of the above rights, please contact our Grievance Officer at info@appnitytechnologies.com. We will respond within 30 days of receiving your request.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    content: [
      {
        sub: null,
        text: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device.',
      },
      {
        sub: 'Essential Cookies',
        text: 'Necessary for the website to function correctly. These cannot be disabled.',
      },
      {
        sub: 'Analytics Cookies',
        text: 'Help us understand how visitors interact with our website. We use this information to improve our content and services. You may opt out via your browser settings.',
      },
      {
        sub: 'Managing Cookies',
        text: 'You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.',
      },
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Links',
    content: [
      {
        sub: null,
        text: 'Our website may contain links to third-party websites, including social media platforms and partner websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.',
      },
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: [
      {
        sub: null,
        text: 'Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. Under the DPDP Act, 2023, processing of personal data of children requires verifiable parental consent. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will take prompt steps to delete it.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: [
      {
        sub: null,
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after any changes constitutes your acceptance of the revised policy.',
      },
    ],
  },
  {
    id: 'grievance',
    title: 'Grievance Officer',
    content: [
      {
        sub: null,
        text: 'In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, we have appointed a Grievance Officer to address any concerns regarding the processing of your personal data:',
      },
      {
        sub: 'Name',
        text: 'Grievance Officer, Appnity Technologies',
      },
      {
        sub: 'Email',
        text: 'info@appnitytechnologies.com',
      },
      {
        sub: 'Address',
        text: 'Appnity Technologies, Visakhapatnam, Andhra Pradesh, India',
      },
      {
        sub: 'Response Time',
        text: 'We will acknowledge your grievance within 48 hours and resolve it within 30 days of receipt.',
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavBar />

      <section className="legal-hero">
        <div className="legal-hero__container">
          <div className="legal-hero__badge">
            <span className="legal-hero__badge-dot" />
            Legal
          </div>
          <h1 className="legal-hero__title">Privacy Policy</h1>
          <p className="legal-hero__meta">Last updated: May 2026 &nbsp;·&nbsp; Appnity Technologies</p>
          <p className="legal-hero__intro">
            At Appnity Technologies, we are committed to protecting your personal data and respecting
            your privacy. This Privacy Policy explains how we collect, use, store, and protect your
            information in accordance with the <strong>Information Technology Act, 2000</strong>, the{' '}
            <strong>IT (SPDI) Rules, 2011</strong>, and the{' '}
            <strong>Digital Personal Data Protection Act, 2023</strong>.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-body__container">
          <aside className="legal-toc">
            <div className="legal-toc__title">Contents</div>
            <ul className="legal-toc__list">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <button onClick={() => scrollTo(s.id)} className="legal-toc__link">
                    <span className="legal-toc__num">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="legal-content">
            {SECTIONS.map((s, i) => (
              <div key={s.id} id={s.id} className="legal-section">
                <div className="legal-section__header">
                  <span className="legal-section__num">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="legal-section__title">{s.title}</h2>
                </div>
                {s.content.map((c, j) => (
                  <div key={j} className="legal-section__block">
                    {c.sub && <div className="legal-section__sub">{c.sub}</div>}
                    <p className="legal-section__text">{c.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
