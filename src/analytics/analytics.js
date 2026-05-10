/**
 * Google Analytics 4 (GA4) utility service
 *
 * All GA4 interactions go through this file so the rest of the app
 * never calls window.gtag directly. This makes it easy to swap out
 * or extend the analytics provider in the future.
 *
 * The gtag.js library is loaded in index.html with `send_page_view: false`
 * so every page view is tracked explicitly here — preventing the duplicate
 * hits that would otherwise occur with React Router SPA navigation.
 *
 * Measurement ID is read from the VITE_GA_MEASUREMENT_ID env variable.
 * A hard-coded fallback keeps things working if the env var is absent
 * (e.g. in a fresh clone before .env is configured).
 */

const MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-507KR9NKFL';

// --------------------------------------------------------------------------
// Internal helper — guards every call so a missing gtag never throws.
// --------------------------------------------------------------------------
const gtag = (...args) => {
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  }
};

// --------------------------------------------------------------------------
// initGA
// Call ONCE on app mount (via useEffect in App.jsx).
// Re-configures the GA4 property so any runtime options can be set here.
// --------------------------------------------------------------------------
export const initGA = () => {
  gtag('config', MEASUREMENT_ID, {
    // Disable automatic page_view — RouteTracker handles this manually.
    send_page_view: false,
  });
};

// --------------------------------------------------------------------------
// trackPageView
// Called by RouteTracker on every React Router location change.
// `path`  — e.g. "/about" or "/blog/my-post?ref=share"
// `title` — optional override; defaults to the current <title> tag value
// --------------------------------------------------------------------------
export const trackPageView = (path, title) => {
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

// --------------------------------------------------------------------------
// trackEvent
// General-purpose event tracker for future conversions, button clicks, etc.
//
// Usage example:
//   trackEvent({ action: 'contact_form_submit', category: 'engagement' });
//   trackEvent({ action: 'cta_click', category: 'conversion', label: 'hero' });
// --------------------------------------------------------------------------
export const trackEvent = ({ action, category, label, value, nonInteraction = false }) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    non_interaction: nonInteraction,
  });
};
