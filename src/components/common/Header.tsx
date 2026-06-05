import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { DesktopNav } from '@/components/navigation/DesktopNav';
import { MobileNav } from '@/components/navigation/MobileNav';
import { MegaMenuPanel } from '@/components/navigation/MegaMenuPanel';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openMegaMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsMegaMenuOpen(true);
  };

  const scheduleMegaMenuClose = () => {
    closeTimerRef.current = setTimeout(() => setIsMegaMenuOpen(false), 200);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsMegaMenuOpen(false);
  };

  const headerBg = isScrolled
    ? 'bg-[#f7f2eb]/97 backdrop-blur-md shadow-md border-b border-stone-200'
    : 'bg-primary-900 shadow-lg';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}>

      {/* Main nav bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="container flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeAll}>
            <Logo isScrolled={isScrolled} />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <DesktopNav
              isScrolled={isScrolled}
              isMegaMenuOpen={isMegaMenuOpen}
              onMegaMenuOpen={openMegaMenu}
              onMegaMenuClose={scheduleMegaMenuClose}
              onNavigate={closeAll}
            />
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <a
              href="tel:+911146067000"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-[#072ac8]'
                  : 'text-white/90 hover:text-white'
              }`}
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              +91 11 4606 7000
            </a>
            <Link
              to="/contact"
              className="btn btn-primary py-2 px-5 text-sm font-semibold"
              onClick={closeAll}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`flex lg:hidden items-center justify-center p-2 rounded-lg transition-all duration-200 ${
              isScrolled
                ? 'text-gray-900 hover:text-[#072ac8] hover:bg-stone-200'
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mega menu – desktop, full-width */}
      <MegaMenuPanel
        isOpen={isMegaMenuOpen}
        onMouseEnter={openMegaMenu}
        onMouseLeave={scheduleMegaMenuClose}
        onNavigate={closeAll}
      />

      {/* Mobile menu dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#f7f2eb] shadow-xl border-t border-stone-200 transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <MobileNav onNavigate={closeAll} />
      </div>

    </header>
  );
};

export default Header;
