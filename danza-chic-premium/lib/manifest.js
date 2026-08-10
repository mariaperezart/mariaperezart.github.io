/* Danza Chic — Library Manifest */

(function() {
  'use strict';

  // GSAP CDN (with cache-buster)
  const GSAP_URL = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js?v=20250809';
  const SCROLL_TRIGGER_URL = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js?v=20250809';

  // Load external library
  function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback || function() {};
    script.onerror = function() {
      console.warn(`Failed to load: ${url}`);
      if (callback) callback();
    };
    document.head.appendChild(script);
  }

  // Initialize libraries on page load
  window.__loadLibraries = function() {
    // Load GSAP first
    loadScript(GSAP_URL, function() {
      if (typeof gsap !== 'undefined') {
        console.log('✓ GSAP loaded');
        // Load ScrollTrigger plugin
        loadScript(SCROLL_TRIGGER_URL, function() {
          if (typeof ScrollTrigger !== 'undefined') {
            console.log('✓ ScrollTrigger loaded');
            gsap.registerPlugin(ScrollTrigger);
          }
        });
      }
    });
  };

  // Load on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.__loadLibraries);
  } else {
    window.__loadLibraries();
  }
})();
