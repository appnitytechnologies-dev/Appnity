import { Helmet } from 'react-helmet-async';
import SEO from '../../components/ui/SEO/SEO';
import NavBar from '../../components/layout/NavBar/NavBar';
import Footer from '../../components/layout/Footer/Footer';
import './BrandAssets.css';

const IMAGES = [
  {
    src: '/gmb/gmb-01-cover.svg',
    alt: 'Appnity Technologies – Mobile App Development, Web Development and UI/UX Design Company in India',
    caption: 'Appnity Technologies – Custom Software Development',
    label: 'Brand Cover',
  },
  {
    src: '/gmb/gmb-02-mobile.svg',
    alt: 'Appnity Technologies Mobile App Development – iOS and Android App Development Company India',
    caption: 'Mobile App Development – iOS, Android, React Native & Flutter',
    label: 'Mobile App Development',
  },
  {
    src: '/gmb/gmb-03-web.svg',
    alt: 'Appnity Technologies Web Development – Custom Web Platforms, E-Commerce and SaaS Applications',
    caption: 'Web Development – Custom Platforms, E-Commerce & React',
    label: 'Web Development',
  },
  {
    src: '/gmb/gmb-04-uiux.svg',
    alt: 'Appnity Technologies UI/UX Design – User Interface Design, Wireframing and Prototyping Services',
    caption: 'UI/UX Design – Research, Wireframing, Prototyping & Brand Identity',
    label: 'UI/UX Design',
  },
  {
    src: '/gmb/gmb-05-cloud.svg',
    alt: 'Appnity Technologies Cloud Solutions – AWS, Azure and Google Cloud Platform Services India',
    caption: 'Cloud Solutions – AWS, Azure, GCP & DevOps Automation',
    label: 'Cloud Solutions',
  },
  {
    src: '/gmb/gmb-06-contact.svg',
    alt: 'Appnity Technologies Contact – info@appnitytechnologies.com – Software Development Company India',
    caption: 'Contact Appnity Technologies – Free First Consultation',
    label: 'Contact',
  },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  'name': 'Appnity Technologies – Brand Images',
  'url': 'https://appnitytechnologies.com/brand-assets',
  'associatedMedia': IMAGES.map(img => ({
    '@type': 'ImageObject',
    'contentUrl': `https://appnitytechnologies.com${img.src}`,
    'name': img.label,
    'description': img.alt,
    'author': {
      '@type': 'Organization',
      'name': 'Appnity Technologies',
      'url': 'https://appnitytechnologies.com',
    },
  })),
};

export default function BrandAssetsPage() {
  return (
    <>
      <SEO
        title="Brand Assets & Media"
        description="Official brand images and service photos for Appnity Technologies — mobile app development, web development, UI/UX design, and cloud solutions company in India."
        path="/brand-assets"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      </Helmet>

      <NavBar />

      <section className="brand-assets">
        <div className="brand-assets__header">
          <h1 className="brand-assets__title">Appnity Technologies</h1>
          <p className="brand-assets__sub">
            Custom software development company based in India, serving clients worldwide.
            We build mobile apps, web platforms, UI/UX designs, and cloud solutions for
            growing businesses.
          </p>
        </div>

        <div className="brand-assets__grid">
          {IMAGES.map((img) => (
            <figure key={img.src} className="brand-assets__figure">
              <img
                src={img.src}
                alt={img.alt}
                title={img.label + ' – Appnity Technologies'}
                className="brand-assets__img"
                loading="lazy"
                width="1200"
                height="630"
              />
              <figcaption className="brand-assets__caption">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="brand-assets__about">
          <h2>About Appnity Technologies</h2>
          <p>
            Appnity Technologies is a software development company with 8+ years of experience
            and 100+ projects delivered globally. We specialise in mobile app development
            (iOS &amp; Android), custom web platforms, UI/UX design, and cloud solutions.
            Our clients include businesses in pharma, e-commerce, real estate, and education
            across India, the UK, and the US.
          </p>
          <p>
            Contact us at{' '}
            <a href="mailto:info@appnitytechnologies.com">info@appnitytechnologies.com</a>{' '}
            or call <a href="tel:+919666060167">+91 96660 60167</a>.
            Visit{' '}
            <a href="https://appnitytechnologies.com">appnitytechnologies.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
