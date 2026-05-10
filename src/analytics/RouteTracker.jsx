/**
 * RouteTracker
 *
 * Renders nothing — exists purely to fire a GA4 page_view event on every
 * React Router navigation, including the initial page load.
 *
 * It mirrors the pattern already used by ScrollToTop in App.jsx:
 * watch `location` via useLocation, react in a useEffect.
 *
 * Must be rendered inside <BrowserRouter> (already the case in main.jsx)
 * and after initGA() has been called (handled by App.jsx's mount effect).
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // Combine pathname + search so query strings are included in the hit,
    // e.g. "/blog/my-post?ref=newsletter" is tracked as a single page path.
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}

export default RouteTracker;
