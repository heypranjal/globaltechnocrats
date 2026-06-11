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
    return active
      ? 'text-[#423c81] bg-primary-100/60 font-semibold'
      : 'text-gray-900 hover:text-[#423c81] hover:bg-stone-200/70';
  };

  return (
    <nav
      className="flex items-center gap-0.5"
      role="navigation"
      aria-label="Main navigation"
    >
      {mainNavigation.map((item, idx) => {
        if (item.hasMegaMenu) {
          return (
            <React.Fragment key={item.name}>
              {idx > 0 && <span className="w-px h-4 bg-gray-400 flex-shrink-0" aria-hidden="true" />}
              <div
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
                {(isMegaMenuOpen || isActive(item.path)) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#423c81]" />
                )}
              </div>
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={item.name}>
            {idx > 0 && <span className="w-px h-4 bg-gray-400 flex-shrink-0" aria-hidden="true" />}
            <Link
              to={item.path}
              className={`${baseLinkClass} ${colorClass(item.path)}`}
              onClick={onNavigate}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#423c81]" />
              )}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
