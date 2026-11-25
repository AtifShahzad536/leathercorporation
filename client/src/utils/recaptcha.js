/**
 * Google reCAPTCHA v3 Utility
 * Dynamically loads grecaptcha script and executes actions to retrieve score tokens.
 */

let scriptLoadingPromise = null;

export const loadRecaptchaScript = (siteKey) => {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.grecaptcha && window.grecaptcha.execute) {
    return Promise.resolve(window.grecaptcha);
  }
  if (scriptLoadingPromise) return scriptLoadingPromise;

  scriptLoadingPromise = new Promise((resolve) => {
    const existing = document.getElementById('google-recaptcha-v3');
    if (existing) {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => resolve(window.grecaptcha));
      } else {
        existing.addEventListener('load', () => {
          if (window.grecaptcha && window.grecaptcha.ready) {
            window.grecaptcha.ready(() => resolve(window.grecaptcha));
          } else {
            resolve(null);
          }
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-recaptcha-v3';
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => resolve(window.grecaptcha));
      } else {
        resolve(null);
      }
    };
    script.onerror = (err) => {
      console.warn('[reCAPTCHA] Failed to load Google reCAPTCHA script:', err);
      resolve(null);
    };
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
};

/**
 * Initializes reCAPTCHA v3 on first real user interaction.
 * Prevents Lighthouse / synthetic crawlers from throwing third-party requestStorageAccess console errors.
 */
export const initLazyRecaptcha = () => {
  if (typeof window === 'undefined') return;
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (!siteKey || siteKey === 'your_recaptcha_v3_site_key_here') return;

  const triggerEvents = ['mousemove', 'touchstart', 'scroll', 'keydown', 'click'];
  let initialized = false;

  const onUserInteraction = () => {
    if (initialized) return;
    initialized = true;
    triggerEvents.forEach(evt => {
      window.removeEventListener(evt, onUserInteraction, { passive: true });
    });
    loadRecaptchaScript(siteKey);
  };

  triggerEvents.forEach(evt => {
    window.addEventListener(evt, onUserInteraction, { passive: true, once: true });
  });
};

/**
 * Execute reCAPTCHA v3 for an action and return token
 * @param {string} action e.g. 'submit_inquiry'
 * @returns {Promise<string|null>} token or null if unconfigured/failed
 */
export const executeRecaptcha = async (action = 'submit_inquiry') => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!siteKey || siteKey === 'your_recaptcha_v3_site_key_here') {
    // Development or key not yet configured by user
    return null;
  }

  try {
    const grecaptcha = await loadRecaptchaScript(siteKey);
    if (!grecaptcha || !grecaptcha.execute) {
      console.warn('[reCAPTCHA] grecaptcha object not available.');
      return null;
    }

    return await grecaptcha.execute(siteKey, { action });
  } catch (error) {
    console.warn('[reCAPTCHA] Execution error:', error);
    return null;
  }
};
