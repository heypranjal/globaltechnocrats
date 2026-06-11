import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Shield, DoorOpen, Target, Cpu } from 'lucide-react';
import { megaMenuCategories } from '@/data/navigation';

const categoryIcons: Record<string, React.ReactNode> = {
  perimeter: <Shield className="w-4 h-4" />,
  gates: <DoorOpen className="w-4 h-4" />,
  defence: <Target className="w-4 h-4" />,
  technology: <Cpu className="w-4 h-4" />,
};

interface MegaMenuPanelProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: () => void;
}

export function MegaMenuPanel({ isOpen, onMouseEnter, onMouseLeave, onNavigate }: MegaMenuPanelProps) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t-2 border-[#423c81]/10 transition-all duration-200 ease-out ${
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label="Products mega menu"
      aria-hidden={!isOpen}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-5 gap-6 items-start">

          {/* Product category columns */}
          {megaMenuCategories.map((category) => (
            <div key={category.id} className="col-span-1">
              <Link
                to={category.path}
                className="flex items-center gap-2 mb-1 group"
                onClick={onNavigate}
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#423c81]/8 text-[#423c81] group-hover:bg-[#423c81] group-hover:text-white transition-colors">
                  {categoryIcons[category.id]}
                </span>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#423c81] transition-colors uppercase tracking-wide">
                  {category.name}
                </h3>
              </Link>
              <p className="text-xs text-gray-400 mb-3 pl-9 leading-relaxed">{category.description}</p>

              <ul className="space-y-0.5 pl-1">
                {category.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-1 py-1 text-sm text-gray-600 hover:text-[#423c81] group/item transition-colors"
                      onClick={onNavigate}
                    >
                      <ChevronRight className="w-3 h-3 text-gray-300 group-hover/item:text-[#423c81] flex-shrink-0 transition-colors" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                to={category.viewAllPath}
                className="inline-flex items-center gap-1 mt-3 pl-1 text-xs font-semibold text-[#423c81] hover:gap-2 transition-all"
                onClick={onNavigate}
              >
                {category.viewAllLabel}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}

          {/* Featured panel */}
          <div className="col-span-1 rounded-xl overflow-hidden bg-gradient-to-br from-[#423c81] to-[#35306b]">
            <div className="p-5 text-white h-full flex flex-col">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-primary-200 mb-2">
                Why Global Technocrats
              </div>
              <h3 className="text-base font-bold leading-snug mb-2">
                Security Excellence Since 1995
              </h3>
              <p className="text-xs text-primary-100 leading-relaxed mb-4 flex-grow">
                Trusted by defence agencies and critical infrastructure operators across 20+ countries.
              </p>
              <ul className="space-y-1.5 mb-5">
                {[
                  'ISO 9001:2015 Certified',
                  'DRDO Technology Partner',
                  '500+ Projects Delivered',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs text-primary-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-300 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 bg-white text-[#423c81] text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors"
                onClick={onNavigate}
              >
                Get a Quote <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#423c81] hover:text-primary-950 transition-colors"
            onClick={onNavigate}
          >
            Browse All Products <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>Need help choosing the right solution?</span>
            <Link
              to="/contact"
              className="text-[#423c81] font-semibold hover:text-primary-950 transition-colors"
              onClick={onNavigate}
            >
              Talk to an expert →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
