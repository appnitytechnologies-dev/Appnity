import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Appnity Technologies';
const SITE_URL  = 'https://appnitytechnologies.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url       = `${SITE_URL}${path}`;
  const ogImage   = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={url} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}
