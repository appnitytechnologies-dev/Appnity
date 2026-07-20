// Generates public/sitemap.xml from the same data that drives the blog and
// services pages, so adding/removing a post or service can never leave the
// sitemap out of sync (it was previously hand-maintained).
import { writeFile } from 'fs/promises';
import path from 'path';
import { POSTS } from '../src/constants/blog.js';
import { SERVICES } from '../src/constants/services.js';

const SITE_URL = 'https://appnitytechnologies.com';

const MONTHS = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
};

// Parses "Jul 18, 2026" -> "2026-07-18" directly from the string, avoiding
// the off-by-one-day shift that new Date(str).toISOString() introduces
// when the build runs in a timezone behind UTC.
function toISODate(dateStr) {
  const [mon, day, year] = dateStr.replace(',', '').split(' ');
  return `${year}-${MONTHS[mon]}-${day.padStart(2, '0')}`;
}

const STATIC_ROUTES = [
  { loc: '/',                 priority: '1.0', changefreq: 'weekly' },
  { loc: '/about',            priority: '0.8', changefreq: 'monthly' },
  { loc: '/services',         priority: '0.9', changefreq: 'monthly' },
  { loc: '/portfolio',         priority: '0.8', changefreq: 'monthly' },
  { loc: '/blog',              priority: '0.7', changefreq: 'weekly' },
  { loc: '/contact',           priority: '0.8', changefreq: 'yearly' },
  { loc: '/brand-assets',      priority: '0.5', changefreq: 'monthly' },
  { loc: '/privacy-policy',    priority: '0.3', changefreq: 'yearly' },
  { loc: '/terms-of-service',  priority: '0.3', changefreq: 'yearly' },
];

const serviceEntries = SERVICES.map(s => ({
  loc: `/services/${s.slug}`,
  priority: '0.9',
  changefreq: 'monthly',
}));

const postEntries = POSTS.map(p => ({
  loc: `/blog/${p.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
  lastmod: toISODate(p.date),
}));

const entries = [...STATIC_ROUTES, ...serviceEntries, ...postEntries];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `
  <url>
    <loc>${SITE_URL}${e.loc}</loc>
    <priority>${e.priority}</priority>
    <changefreq>${e.changefreq}</changefreq>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}

</urlset>
`;

await writeFile(path.resolve('public/sitemap.xml'), xml);
console.log(`Generated sitemap.xml with ${entries.length} URLs.`);
