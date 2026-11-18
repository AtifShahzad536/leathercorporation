import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowPopup(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleResponse = (status) => {
    localStorage.setItem('cookie_consent', status);
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating Action Button - Bottom Left */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[90] w-10 h-10 sm:w-12 sm:h-12 bg-[var(--primary)] rounded-[3px] flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-[var(--secondary)]/10 group"
        aria-label="Privacy settings"
      >
        <Cookie size={20} className="text-[var(--secondary)] group-hover:rotate-12 transition-transform sm:w-6 sm:h-6" strokeWidth={1.5} />
      </button>

      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-[var(--secondary)]/40 backdrop-blur-sm p-3 sm:p-4 animate-fade-in">
          <div className="bg-[var(--primary)] rounded-[3px] w-full sm:max-w-[600px] shadow-2xl relative flex flex-col items-center
                          px-5 py-7 sm:p-10">

            <Cookie size={24} className="mb-4 sm:mb-6 text-[var(--secondary)] sm:w-8 sm:h-8" strokeWidth={2} />

            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight text-center text-[var(--secondary)]">
              We respect your privacy
            </h2>

            <p className="text-[13px] sm:text-[15px] font-medium text-[var(--secondary)] leading-relaxed mb-5 sm:mb-6 text-center max-w-full sm:max-w-[500px]">
              We use cookies and similar technologies to personalise content and measure
              performance. By giving your consent, you allow us to use this data; you can
              change your settings by clicking Preferences.{' '}
              <a href="#" className="underline mt-1 inline-block hover:text-[var(--accent)] transition-colors">
                Read more about our cookie policy
              </a>
            </p>

            {/* Buttons row — stacks on very small, row on sm+ */}
            <div className="flex flex-col sm:flex-row w-full sm:justify-between sm:items-center gap-3 sm:gap-0 mt-2 sm:mt-4">
              <button
                className="text-xs sm:text-sm font-bold text-[var(--secondary)] hover:text-[var(--accent)] transition-colors tracking-wide text-center sm:text-left"
                onClick={() => handleResponse('preferences')}
              >
                Preferences
              </button>

              <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
                <button
                  className="flex-1 sm:flex-none px-5 sm:px-10 py-2.5 sm:py-3 border-[1.5px] border-[var(--secondary)] text-[var(--secondary)] font-bold text-xs sm:text-sm tracking-wide hover:bg-[var(--secondary)] hover:text-white transition-colors"
                  onClick={() => handleResponse('accepted')}
                >
                  Accept
                </button>
                <button
                  className="flex-1 sm:flex-none px-5 sm:px-10 py-2.5 sm:py-3 border-[1.5px] border-[var(--secondary)] text-[var(--secondary)] font-bold text-xs sm:text-sm tracking-wide hover:bg-[var(--secondary)] hover:text-white transition-colors"
                  onClick={() => handleResponse('declined')}
                >
                  Decline
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
