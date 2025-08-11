import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50">
      <div className="container py-4 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <p className="text-gray-600 text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className="text-sm text-primary-600 underline hover:text-primary-700"
            >
              Privacy Policy
            </a>
            <button
              onClick={onAccept}
              className="btn btn-primary py-2 px-4 text-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;