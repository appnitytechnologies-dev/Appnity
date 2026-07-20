// Prerenders every known route to static HTML after `vite build`, so crawlers
// get fully-formed content and per-page meta tags without executing JS.
// The original client bundle script tag is preserved in the output, so the
// React app still boots normally and takes over for real visitors.
import { createServer } from 'http';
import { readFile, writeFile, mkdir, stat } from 'fs/promises';
import path from 'path';
import puppeteer from 'puppeteer';
import { POSTS } from '../src/constants/blog.js';
import { SERVICES } from '../src/constants/services.js';

const DIST = path.resolve('dist');
const PORT = 5123;

const STATIC_ROUTES = [
  '/', '/about', '/services', '/portfolio', '/contact', '/blog',
  '/privacy-policy', '/terms-of-service', '/brand-assets',
];
const ROUTES = [
  ...STATIC_ROUTES,
  ...SERVICES.map(s => `/services/${s.slug}`),
  ...POSTS.map(p => `/blog/${p.slug}`),
];

const MIME = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

async function serveStatic(req, res) {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(DIST, urlPath);
  try {
    const s = await stat(filePath);
    if (s.isDirectory()) filePath = path.join(filePath, 'index.html');
  } catch {
    filePath = path.join(DIST, 'index.html'); // SPA fallback for any unmatched route
  }
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}

async function main() {
  const server = createServer((req, res) => { serveStatic(req, res); });
  await new Promise(resolve => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  // Skip GTM/GA network calls during prerendering — irrelevant noise, and keeps this fast/offline-safe.
  await page.setRequestInterception(true);
  page.on('request', req => {
    const url = req.url();
    if (url.includes('googletagmanager.com') || url.includes('google-analytics.com')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const rendered = [];
  for (const route of ROUTES) {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.waitForSelector('#root', { timeout: 5000 });
    const html = await page.content();
    rendered.push({ route, html });
    console.log('Prerendered', route);
  }

  await browser.close();
  await new Promise(resolve => server.close(resolve));

  for (const { route, html } of rendered) {
    const outPath = route === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, route, 'index.html');
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html);
  }

  console.log(`Prerendered ${rendered.length} routes.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
