import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { megaMenuCategories, mainNavigation } from '@/data/navigation';

interface MobileNavProps {
  onNavigate: () => void;
}

export function MobileNav({ onNavigate }: MobileNavProps) {
  const location = useLocation();
  const [productsOpen, setProductsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const toggleCategory = (id: string) =>
    setOpenCategory((prev) => (prev === id ? null : id));

  return (
    <nav
      className="flex flex-col divide-y divide-gray-100"
      role="navigation"
      aria-label="Mobile navigation"
    >
      {mainNavigation.map((item) => {
        if (item.hasMegaMenu) {
          return (
            <div key={item.name}>
              <button
                className={`w-full flex items-center justify-between px-5 py-4 text-base font-medium text-left ${
                  isActive(item.path) ? 'text-[#072ac8]' : 'text-gray-800'
                }`}
                onClick={() => setProductsOpen((v) => !v)}
                aria-expanded={productsOpen}
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    productsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="bg-gray-50/70 border-t border-gray-100">
                  {megaMenuCategories.map((category) => {
                    const isCatOpen = openCategory === category.id;
                    return (
                      <div key={category.id} className="border-b border-gray-100 last:border-0">
                        <button
                          className="w-full flex items-center justify-between px-6 py-3 text-sm font-semibold text-gray-700 text-left"
                          onClick={() => toggleCategory(category.id)}
                          aria-expanded={isCatOpen}
                        >
                          <span>{category.name}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                              isCatOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isCatOpen && (
                          <div className="px-6 pb-3 space-y-0.5">
                            {category.items.map((product) => (
                              <Link
                                key={product.path}
                                to={product.path}
                                className="flex items-center gap-1.5 py-1.5 text-sm text-gray-600 hover:text-[#072ac8] transition-colors"
                                onClick={onNavigate}
                              >
                                <ChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
                                {product.name}
                              </Link>
                            ))}
                            <Link
                              to={category.viewAllPath}
                              className="flex items-center gap-1 pt-1.5 pb-0.5 text-xs font-bold text-[#072ac8]"
                              onClick={onNavigate}
                            >
                              {category.viewAllLabel} →
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div className="px-6 py-3">
                    <Link
                      to="/products"
                      className="text-sm font-bold text-[#072ac8]"
                      onClick={onNavigate}
                    >
                      Browse All Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-5 py-4 text-base font-medium transition-colors ${
              isActive(item.path)
                ? 'text-[#072ac8] bg-blue-50/40'
                : 'text-gray-800 hover:text-[#072ac8] hover:bg-gray-50'
            }`}
            onClick={onNavigate}
          >
            {item.name}
          </Link>
        );
      })}

      {/* Footer actions */}
      <div className="px-5 py-5 space-y-3">
        <a
          href="tel:+911146067000"
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#072ac8] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#072ac8]" />
          +91 11 4606 7000
        </a>
        <Link
          to="/contact"
          className="btn btn-primary w-full text-center typography-button"
          onClick={onNavigate}
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
