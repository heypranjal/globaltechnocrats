import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CookieConsent from '../components/common/CookieConsent';
import ScrollToTop from '../components/common/ScrollToTop';

interface MainLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    if (title) {
      document.title = `${title} | Global Technocrats`;
    }
  }, [title]);
  
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented to cookies
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowCookieConsent(true);
    }
  }, []);
  
  const handleCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Header on all pages */}
      <Header />
      <main className={`flex-grow ${isHomePage ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
      {showCookieConsent && <CookieConsent onAccept={handleCookieConsent} />}
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
