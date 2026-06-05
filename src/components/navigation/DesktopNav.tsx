import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';

interface DesktopNavProps {
  isScrolled: boolean;
  isMegaMenuOpen: boolean;
  onMegaMenuOpen: () => void;
  onMegaMenuClose: () => void;
  onNavigate: () => void;
}

export function DesktopNav({
  isScrolled,
  isMegaMenuOpen,
  onMegaMenuOpen,
  onMegaMenuClose,
  onNavigate,
}: DesktopNavProps) {
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const baseLinkClass = 'relative flex items-center gap-0.5 px-3 py-2 text-sm font-black rounded-md transition-all duration-200';

  const colorClass = (path: string) => {
    const active = isActive(path);
    if (isScrolled) {
      return active
        ? 'text-[#072ac8] bg-blue-100/60 font-semibold'
        : 'text-gray-900 hover:text-[#072ac8] hover:bg-stone-200/70';
    }
    return active
      ? 'text-white font-semibold bg-white/20'
      : 'text-white/90 hover:text-white hover:bg-white/15';
  };

  return (
    <nav
      className="flex items-center gap-0.5"
      role="navigation"
      aria-label="Main navigation"
    >
      {mainNavigation.map((item) => {
        if (item.hasMegaMenu) {
          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={onMegaMenuOpen}
              onMouseLeave={onMegaMenuClose}
            >
              <Link
                to={item.path}
                className={`${baseLinkClass} ${colorClass(item.path)}`}
                onClick={onNavigate}
                aria-haspopup="true"
                aria-expanded={isMegaMenuOpen}
              >
                {item.name}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isMegaMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </Link>
              {/* Active/open indicator */}
              {(isMegaMenuOpen || isActive(item.path)) && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#072ac8]"
                />
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.name}
            to={item.path}
            className={`${baseLinkClass} ${colorClass(item.path)}`}
            onClick={onNavigate}
          >
            {item.name}
            {isActive(item.path) && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#072ac8]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
