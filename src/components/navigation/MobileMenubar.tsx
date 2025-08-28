/**
 * Mobile navigation menubar for Global Technocrats
 * Mobile-optimized version of the main navigation
 * Created: 2025-07-11
 */

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MobileMenubarProps {
  onNavigate?: () => void;
}

export function MobileMenubar({ onNavigate }: MobileMenubarProps) {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const handleNavigation = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  const toggleMenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  const fencingProducts = [
    { name: 'Anti-Climb Fencing', path: '/products/fencing/anti-climb' },
    { name: 'Barbed Wire Fence', path: '/products/fencing/barbed-wire-fence' },
    { name: 'Chain Link Fence', path: '/products/fencing/chain-link-fence' },
    { name: 'Concertina Coil Fence', path: '/products/fencing/concertina-coil-fence' },
    { name: 'Crash Rated Fencing', path: '/products/fencing/crash-rated-fence' },
    { name: 'Decorative Fencing', path: '/products/fencing/decorative' },
    { name: 'GI Concertina Coil', path: '/products/fencing/gi-concertina-coil' },
    { name: 'Razor Mesh Fencing', path: '/products/fencing/razor-mesh' },
    { name: 'SS Concertina Coil', path: '/products/fencing/ss-concertina-coil' },
  ];

  const gatesProducts = [
    { name: 'Swing Gates', path: '/products/gates/swing-gates' },
    { name: 'Sliding Gates', path: '/products/gates/sliding-gates' },
    { name: 'Collapsible Barrier', path: '/products/gates/collapsible-barrier' },
    { name: 'Architectural Gabions', path: '/products/gates/architectural-gabions' },
    { name: 'Hesco Box', path: '/products/gates/hesco-box' },
  ];

  const aiProducts = [
    { name: 'Deep Socmint', path: '/products/ai/deepsocmint' },
    { name: 'Image Enhancer', path: '/products/ai/image-enhancer' },
  ];

  const drdoProducts = [
    { name: 'Bukhari', path: '/products/drdo/bukhari' },
    { name: 'Vajra', path: '/products/drdo/vajra' },
  ];

  return (
    <nav className="flex flex-col space-y-4">
      <Link 
        to="/"
        className={`text-base font-medium hover:text-primary-900 transition-colors ${
          location.pathname === '/' ? 'text-primary-900' : 'text-gray-700'
        }`}
        onClick={handleNavigation}
      >
        Home
      </Link>

      {/* Products Menu */}
      <div>
        <div className="flex items-center">
          <Link 
            to="/products"
            className={`flex-1 text-base font-medium hover:text-primary-900 transition-colors ${
              location.pathname.startsWith('/products') ? 'text-primary-900' : 'text-gray-700'
            }`}
            onClick={handleNavigation}
          >
            Products
          </Link>
          <button 
            className="ml-2 p-1 text-gray-700 hover:text-primary-900"
            onClick={() => toggleMenu('products')}
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedMenu === 'products' ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {expandedMenu === 'products' && (
          <div className="mt-3 pl-4 space-y-3">
            {/* Fencing Solutions */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-sm font-medium text-gray-600 hover:text-primary-900"
                onClick={() => toggleMenu('fencing')}
              >
                Fencing Solutions
                <ChevronDown className={`w-3 h-3 transition-transform ${expandedMenu === 'fencing' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'fencing' && (
                <div className="mt-2 pl-3 space-y-2">
                  {fencingProducts.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block text-xs text-gray-600 hover:text-primary-900"
                      onClick={handleNavigation}
                    >
                      {product.name}
                    </Link>
                  ))}
                  <Link
                    to="/products/fencing"
                    className="block text-xs font-medium text-primary-900"
                    onClick={handleNavigation}
                  >
                    View All Fencing
                  </Link>
                </div>
              )}
            </div>

            {/* Gates & Barriers */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-sm font-medium text-gray-600 hover:text-primary-900"
                onClick={() => toggleMenu('gates')}
              >
                Gates & Barriers
                <ChevronDown className={`w-3 h-3 transition-transform ${expandedMenu === 'gates' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'gates' && (
                <div className="mt-2 pl-3 space-y-2">
                  {gatesProducts.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block text-xs text-gray-600 hover:text-primary-900"
                      onClick={handleNavigation}
                    >
                      {product.name}
                    </Link>
                  ))}
                  <Link
                    to="/products/gates"
                    className="block text-xs font-medium text-primary-900"
                    onClick={handleNavigation}
                  >
                    View All Gates
                  </Link>
                </div>
              )}
            </div>

            {/* AI Products */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-sm font-medium text-gray-600 hover:text-primary-900"
                onClick={() => toggleMenu('ai')}
              >
                Advanced AI Products
                <ChevronDown className={`w-3 h-3 transition-transform ${expandedMenu === 'ai' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'ai' && (
                <div className="mt-2 pl-3 space-y-2">
                  {aiProducts.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block text-xs text-gray-600 hover:text-primary-900"
                      onClick={handleNavigation}
                    >
                      {product.name}
                    </Link>
                  ))}
                  <Link
                    to="/products/ai"
                    className="block text-xs font-medium text-primary-900"
                    onClick={handleNavigation}
                  >
                    View All AI Products
                  </Link>
                </div>
              )}
            </div>

            {/* DRDO TOT */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-sm font-medium text-gray-600 hover:text-primary-900"
                onClick={() => toggleMenu('drdo')}
              >
                DRDO TOT
                <ChevronDown className={`w-3 h-3 transition-transform ${expandedMenu === 'drdo' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'drdo' && (
                <div className="mt-2 pl-3 space-y-2">
                  {drdoProducts.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block text-xs text-gray-600 hover:text-primary-900"
                      onClick={handleNavigation}
                    >
                      {product.name}
                    </Link>
                  ))}
                  <Link
                    to="/products/drdo"
                    className="block text-xs font-medium text-primary-900"
                    onClick={handleNavigation}
                  >
                    View All DRDO
                  </Link>
                </div>
              )}
            </div>

            {/* Defence Tech */}
            <Link
              to="/products/defence"
              className="block text-sm font-medium text-gray-600 hover:text-primary-900"
              onClick={handleNavigation}
            >
              Defence Tech
            </Link>

            {/* View All Products */}
            <Link
              to="/products"
              className="block text-sm font-medium text-primary-900"
              onClick={handleNavigation}
            >
              View All Products
            </Link>
          </div>
        )}
      </div>

      <Link 
        to="/our-story"
        className={`text-base font-medium hover:text-primary-900 transition-colors ${
          location.pathname === '/our-story' ? 'text-primary-900' : 'text-gray-700'
        }`}
        onClick={handleNavigation}
      >
        Our Story
      </Link>

      <Link 
        to="/people"
        className={`text-base font-medium hover:text-primary-900 transition-colors ${
          location.pathname === '/people' ? 'text-primary-900' : 'text-gray-700'
        }`}
        onClick={handleNavigation}
      >
        People
      </Link>

      <Link 
        to="/contact"
        className={`text-base font-medium hover:text-primary-900 transition-colors ${
          location.pathname === '/contact' ? 'text-primary-900' : 'text-gray-700'
        }`}
        onClick={handleNavigation}
      >
        Contact Us
      </Link>
    </nav>
  );
}