/**
 * Product Card Component
 * Following existing luxury theme patterns and design consistency
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../../data/products';

// Support both old and new product data structures
type ProductCardData = Product | {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
  features?: string[];
};

interface ProductCardProps {
  product: ProductCardData;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  // Helper to get the main product image
  const getProductImage = () => {
    if ('images' in product && product.images?.length > 0) {
      return product.images[0];
    }
    if ('image' in product && product.image) {
      return product.image;
    }
    return 'https://images.unsplash.com/photo-1567194974473-68d83240a366?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
  };
  
  // Helper to get product link
  const getProductLink = () => {
    if ('link' in product && product.link) {
      return product.link;
    }
    return `/products/${product.category}/${product.id}`;
  };
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex flex-col h-full">
        {/* Product Image */}
        <Link to={getProductLink()} className="block overflow-hidden">
          <div className="relative h-56 md:h-64 overflow-hidden">
            <img 
              src={getProductImage()} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1567194974473-68d83240a366?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
        
        {/* Product Content */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Category Badge */}
          <div className="text-xs font-semibold text-primary-600 uppercase mb-3">
            {product.subcategory || product.category}
          </div>
          
          {/* Product Name */}
          <h3 className="text-xl font-semibold mb-3">
            <Link 
              to={getProductLink()} 
              className="hover:text-primary-600 transition-colors duration-200"
            >
              {product.name}
            </Link>
          </h3>
          
          {/* Product Description */}
          <p className="text-gray-600 text-sm mb-4 flex-grow">
            {product.description}
          </p>
          
          {/* Features (if available) */}
          {product.features && product.features.length > 0 && (
            <div className="mb-4">
              <ul className="text-sm text-gray-600 space-y-1">
                {product.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="w-3 h-3 text-primary-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* View Details Link */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <Link 
              to={getProductLink()}
              className="text-primary-600 font-medium inline-flex items-center group hover:text-primary-700"
            >
              View Details 
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;