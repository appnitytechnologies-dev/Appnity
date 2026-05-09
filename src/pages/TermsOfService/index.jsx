import NavBar from '../../components/layout/NavBar/NavBar';
import Footer from '../../components/layout/Footer/Footer';
import './TermsOfService.css';

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
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      {
        sub: null,
        text: 'By accessing or using the website at appnitytechnologies.com ("Website") or engaging Appnity Technologies ("Company", "we", "us", "our") for any of our services, you ("Client", "User", "you") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Website or services.',
      },
      {
        sub: null,
        text: 'These Terms, together with any separate service agreement or statement of work executed between you and Appnity Technologies, constitute the entire agreement governing our relationship.',
      },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    content: [
      {
        sub: null,
        text: 'Appnity Technologies provides digital solutions including, but not limited to: Mobile App Development, Web App Development, UI/UX Design, Graphic Design, Digital Marketing, Cloud Computing, Project Management, and Business Solutions.',
      },
      {
        sub: 'Service Agreements',
        text: 'Specific services, deliverables, timelines, and fees are defined in individual proposals, statements of work, or service agreements signed between you and Appnity Technologies. In the event of any conflict between these Terms and a specific service agreement, the service agreement shall prevail.',
      },
      {
        sub: 'Modifications to Services',
        text: 'We reserve the right to modify, suspend, or discontinue any service at any time. For ongoing engagements, we will provide reasonable notice of any material changes.',
      },
    ],
  },
  {
    id: 'obligations',
    title: 'Client Obligations',
    content: [
      {
        sub: null,
        text: 'To enable us to deliver our services effectively, you agree to:',
      },
      {
        sub: 'Accurate Information',
        text: 'Provide accurate, complete, and up-to-date information as required for the delivery of services, including project briefs, content, assets, and feedback.',
      },
      {
        sub: 'Timely Cooperation',
        text: 'Respond to our communications, review deliverables, and provide approvals within agreed timeframes. Delays caused by the client may affect project timelines and additional charges may apply.',
      },
      {
        sub: 'Lawful Use',
        text: 'Ensure that all content, materials, or data you provide to us does not infringe any third-party intellectual property rights, violate any applicable law, or contain any unlawful, defamatory, or harmful content.',
      },
      {
        sub: 'Payment',
        text: 'Make payments as per the agreed schedule in the service agreement. Late payments may attract interest at the rate of 1.5% per month on the outstanding amount.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      {
        sub: 'Our Materials',
        text: 'All content on this Website — including but not limited to text, graphics, logos, icons, images, and software — is the property of Appnity Technologies and is protected under the Copyright Act, 1957 and other applicable Indian intellectual property laws. Unauthorised reproduction or use is strictly prohibited.',
      },
      {
        sub: 'Deliverables',
        text: 'Upon receipt of full payment, ownership of the final agreed deliverables created specifically for you shall transfer to you as specified in your service agreement. All underlying frameworks, tools, libraries, and pre-existing materials remain the property of Appnity Technologies.',
      },
      {
        sub: 'Client Materials',
        text: 'You retain ownership of all content, data, and materials you provide to us. By providing such materials, you grant us a limited licence to use them solely for the purpose of delivering our services to you.',
      },
      {
        sub: 'Portfolio Rights',
        text: 'Unless otherwise agreed in writing, Appnity Technologies reserves the right to showcase completed work in our portfolio, case studies, and marketing materials.',
      },
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    content: [
      {
        sub: null,
        text: 'Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation shall survive the termination of any service agreement for a period of 2 years.',
      },
      {
        sub: null,
        text: 'We will not disclose your project details, business information, or any confidential data shared with us to any third party without your prior written consent, except as required by law or as necessary to engage trusted sub-contractors who are bound by equivalent confidentiality obligations.',
      },
    ],
  },
  {
    id: 'payment',
    title: 'Payment Terms',
    content: [
      {
        sub: 'Currency & Taxes',
        text: 'All fees are quoted in Indian Rupees (INR) unless otherwise agreed. Applicable Goods and Services Tax (GST) will be charged as per prevailing Indian tax regulations.',
      },
      {
        sub: 'Invoices',
        text: 'Invoices are payable within 7 days of issue unless stated otherwise in the service agreement. We accept bank transfers (NEFT/RTGS/IMPS), UPI, and other mutually agreed payment methods.',
      },
      {
        sub: 'Non-Payment',
        text: 'Appnity Technologies reserves the right to suspend or terminate services in the event of non-payment. Any outstanding work product remains the property of Appnity Technologies until full payment is received.',
      },
      {
        sub: 'Refunds',
        text: 'Refund terms, if any, are defined in the individual service agreement. Generally, fees paid for work already commenced or completed are non-refundable.',
      },
    ],
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of Warranties',
    content: [
      {
        sub: null,
        text: 'This Website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      },
      {
        sub: null,
        text: 'We do not warrant that the Website will be error-free, uninterrupted, or free of viruses or other harmful components. We make no guarantees regarding the accuracy or completeness of any information on this Website.',
      },
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: [
      {
        sub: null,
        text: 'To the fullest extent permitted by applicable Indian law, Appnity Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Website or services.',
      },
      {
        sub: null,
        text: 'Our total aggregate liability to you for any claim arising out of or related to our services shall not exceed the total fees paid by you to us in the 3 months immediately preceding the event giving rise to the claim.',
      },
      {
        sub: null,
        text: 'This limitation applies regardless of the form of action, whether in contract, tort, or otherwise, and even if we have been advised of the possibility of such damages.',
      },
    ],
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    content: [
      {
        sub: null,
        text: 'You agree to indemnify, defend, and hold harmless Appnity Technologies and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses — including reasonable legal fees — arising out of or in any way connected with:',
      },
      {
        sub: 'Your Content',
        text: 'Any content, data, or materials you provide that infringes third-party intellectual property rights or violates any applicable law.',
      },
      {
        sub: 'Your Breach',
        text: 'Your violation of these Terms or any applicable laws or regulations.',
      },
      {
        sub: 'Third-Party Claims',
        text: 'Any claim by a third party arising from your use or misuse of our services or deliverables.',
      },
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    content: [
      {
        sub: 'By Either Party',
        text: 'Either party may terminate a service engagement with 30 days written notice, unless a different notice period is specified in the service agreement.',
      },
      {
        sub: 'Immediate Termination',
        text: 'We reserve the right to immediately terminate our services if you breach these Terms, fail to make payment, engage in unlawful conduct, or take any action that may harm our reputation or business.',
      },
      {
        sub: 'Effect of Termination',
        text: 'Upon termination, all outstanding fees for work completed or in progress become immediately payable. Clauses relating to intellectual property, confidentiality, limitation of liability, and governing law shall survive termination.',
      },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Jurisdiction',
    content: [
      {
        sub: null,
        text: 'These Terms shall be governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000, the Indian Contract Act, 1872, and other applicable legislation.',
      },
      {
        sub: 'Jurisdiction',
        text: 'Any disputes arising out of or in connection with these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in Visakhapatnam, Andhra Pradesh, India.',
      },
      {
        sub: 'Dispute Resolution',
        text: 'Before initiating legal proceedings, both parties agree to attempt good-faith resolution through negotiation for a period of 30 days. If unresolved, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Visakhapatnam, Andhra Pradesh.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    content: [
      {
        sub: null,
        text: 'We reserve the right to update or modify these Terms at any time. Material changes will be communicated by updating the "Last Updated" date on this page. Your continued use of our Website or services after such changes constitutes your acceptance of the revised Terms.',
      },
      {
        sub: null,
        text: 'We recommend reviewing these Terms periodically to stay informed of any updates.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      {
        sub: null,
        text: 'If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:',
      },
      {
        sub: 'Company',
        text: 'Appnity Technologies',
      },
      {
        sub: 'Address',
        text: 'Visakhapatnam, Andhra Pradesh, India',
      },
      {
        sub: 'Email',
        text: 'info@appnitytechnologies.com',
      },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <NavBar />

      <section className="legal-hero">
        <div className="legal-hero__container">
          <div className="legal-hero__badge">
            <span className="legal-hero__badge-dot" />
            Legal
          </div>
          <h1 className="legal-hero__title">Terms of Service</h1>
          <p className="legal-hero__meta">Last updated: May 2026 &nbsp;·&nbsp; Appnity Technologies</p>
          <p className="legal-hero__intro">
            Please read these Terms of Service carefully before using our website or engaging our
            services. These Terms govern your relationship with Appnity Technologies and are governed
            by the laws of India, with jurisdiction in{' '}
            <strong>Visakhapatnam, Andhra Pradesh</strong>.
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
