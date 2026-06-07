/**
 * Scroll utility — routes all scroll-to-section calls through Lenis
 * so there's a single smooth-scroll engine (no browser vs Lenis conflict).
 */

/**
 * Smoothly scroll to a CSS selector target using Lenis.
 * Falls back to native scrollIntoView if Lenis isn't available.
 *
 * @param {string} selector  – e.g. "#about", "#story"
 * @param {object} [opts]    – optional overrides for lenis.scrollTo
 */
export function scrollTo(selector, opts = {}) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(selector, {
      offset: 0,
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...opts,
    });
  } else {
    // Fallback: instant jump (no dual-smoothing)
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView();
  }
}
