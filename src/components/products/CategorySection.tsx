/**
 * Product Category Section Component
 * Displays products grouped by category with consistent luxury styling
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Zap, Cpu, Award, Globe } from 'lucide-react';
import ProductCard from './ProductCard';
import type { ProductCategory } from '../../data/products';

interface CategorySectionProps {
  category: ProductCategory;
  showAll?: boolean;
}

const iconMap = {
  ShieldAlert,
  Zap,
  Cpu,
  Award,
  Globe
};

const CategorySection: React.FC<CategorySectionProps> = ({ category, showAll = false }) => {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || ShieldAlert;
  const displayProducts = showAll ? category.products : category.products.slice(0, 6);

  return (
    <section className="mb-16">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="bg-primary-50 p-3 rounded-xl mr-4">
            <IconComponent className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {category.title}
            </h2>
            <p className="text-gray-600">
              {category.description}
            </p>
          </div>
        </div>
        
        {!showAll && category.products.length > 6 && (
          <Link 
            to={category.categoryLink}
            className="hidden md:inline-flex items-center text-primary-600 font-medium group hover:text-primary-700"
          >
            View All <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Mobile View All Link */}
      {!showAll && category.products.length > 6 && (
        <div className="flex justify-center mt-8 md:hidden">
          <Link 
            to={category.categoryLink}
            className="btn btn-outline px-8 py-3"
          >
            View All {category.title}
          </Link>
        </div>
      )}
      
      {/* Show count if more products available */}
      {!showAll && category.products.length > displayProducts.length && (
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Showing {displayProducts.length} of {category.products.length} products
          </p>
        </div>
      )}
    </section>
  );
};

export default CategorySection;