// Prerenders every known route to static HTML after `vite build`, so crawlers
// get fully-formed content and per-page meta tags without executing JS.
// Uses React's own server-rendering (no headless browser / Chromium download,
// which is fragile in CI build containers) — the original client bundle
// script tag is preserved in the output, so the app still boots normally and
// takes over for real visitors.
//
// src/entry-server.jsx (JSX, so plain Node can't load it directly) is first
// bundled for Node via `vite build --ssr` — the same solid Rollup-based
// bundler already used for the client build — then executed here.
import { readFile, writeFile, mkdir, rm } from 'fs/promises';
import path from 'path';
import { pathToFileURL } from 'url';
import { build } from 'vite';
import { POSTS } from '../src/constants/blog.js';
import { SERVICES } from '../src/constants/services.js';

const DIST = path.resolve('dist');
const SSR_OUT = path.resolve('.vite-ssr-tmp');

const STATIC_ROUTES = [
  '/', '/about', '/services', '/portfolio', '/contact', '/blog',
  '/privacy-policy', '/terms-of-service', '/brand-assets',
];
const ROUTES = [
  ...STATIC_ROUTES,
  ...SERVICES.map(s => `/services/${s.slug}`),
  ...POSTS.map(p => `/blog/${p.slug}`),
];

async function main() {
  await build({
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: '.vite-ssr-tmp',
      emptyOutDir: true,
      rollupOptions: { output: { format: 'es', entryFileNames: 'entry-server.mjs' } },
    },
    // Bundle these in (rather than leaving them external/require'd at Node
    // runtime) — their CJS output otherwise trips Node's native ESM interop
    // when imported directly, which Vite/Rollup handles correctly at build time.
    ssr: { noExternal: ['react-helmet-async', 'react-router-dom', 'react-router', 'react-redux'] },
  });

  const entryUrl = pathToFileURL(path.join(SSR_OUT, 'entry-server.mjs')).href;
  const { render } = await import(entryUrl);

  const template = await readFile(path.join(DIST, 'index.html'), 'utf-8');

  for (const route of ROUTES) {
    const { appHtml, head } = render(route);
    const html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace(/<title>[^<]*<\/title>/, head);

    // Flat "<route>.html" files (not "<route>/index.html") so Netlify serves
    // them directly for the exact clean URL — a directory index would 301
    // to add a trailing slash, which doesn't match our canonical URLs.
    const outPath = route === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, `${route}.html`);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html);
    console.log('Prerendered', route);
  }

  await rm(SSR_OUT, { recursive: true, force: true });
  console.log(`Prerendered ${ROUTES.length} routes.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
