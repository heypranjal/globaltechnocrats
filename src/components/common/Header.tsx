import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Search } from 'lucide-react';
import Logo from './Logo';
import { MainMenubar } from '@/components/navigation/MainMenubar';
import { MobileMenubar } from '@/components/navigation/MobileMenubar';

const closeTimer: ReturnType<typeof setTimeout> | null = null;

const Header: React.FC = () => {
  useEffect(() => {
    return () => {
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100/50 py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
          <Logo isScrolled={isScrolled} />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-grow">
          <MainMenubar isScrolled={isScrolled} onNavigate={closeMenu} />
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
          <button className={`hover:text-primary-900 ${isScrolled ? 'text-gray-600' : 'text-white drop-shadow-lg'}`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`hover:text-primary-900 ${isScrolled ? 'text-gray-600' : 'text-white drop-shadow-lg'}`}>
            <Globe className="w-5 h-5" />
          </button>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6 typography-button">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`flex lg:hidden items-center justify-center p-2 focus:outline-none ${
            isScrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container py-6">
          <MobileMenubar onNavigate={closeMenu} />
          
          <div className="pt-6 border-t border-gray-100 mt-6">
            <Link to="/contact" className="btn btn-primary w-full text-center typography-button" onClick={closeMenu}>
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
