/**
 * Product Filters Component
 * Search and category filtering with responsive design
 */
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { categoryFilters } from '../../data/products';

interface ProductFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  showFilters: boolean;
  onSearchChange: (term: string) => void;
  onCategoryChange: (category: string) => void;
  onToggleFilters: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchTerm,
  selectedCategory,
  showFilters,
  onSearchChange,
  onCategoryChange,
  onToggleFilters
}) => {
  return (
    <div className="mb-12">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-11 pr-4 py-4 border border-gray-200 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm"
          />
        </div>
      </div>
      
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-900">
            All Products
          </h3>
          <p className="text-sm text-gray-600">
            Browse our comprehensive range of defense and security solutions
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          {/* Mobile Filter Toggle */}
          <button
            onClick={onToggleFilters}
            className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
          
          {/* Category Filter */}
          <div className={`md:flex ${showFilters ? 'block' : 'hidden'}`}>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-w-[180px]"
            >
              {categoryFilters.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;