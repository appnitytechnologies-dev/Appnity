// Server-rendering entry point, used only by scripts/prerender.mjs (bundled
// via `vite build --ssr` and executed in Node). Not part of the client app.
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

export function render(url) {
  const helmetContext = {};
  const appHtml = renderToStaticMarkup(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('\n');
  return { appHtml, head };
}
