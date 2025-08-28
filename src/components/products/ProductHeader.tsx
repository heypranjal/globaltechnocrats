import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Phone, Download } from 'lucide-react';
import { getCategoryTitle, type Product } from '../../data/products';

interface ProductHeaderProps {
  product: Product;
  category: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ product, category }) => {
  return (
    <div className="border-b border-gray-200 pb-8 mb-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to={`/products/${category}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {getCategoryTitle(category)}
        </Link>
      </div>

      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-700">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to="/products" className="hover:text-gray-700">Products</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to={`/products/${category}`} className="hover:text-gray-700">
          {getCategoryTitle(category)}
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Product Title and Info */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div className="flex-1">
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              {product.subcategory || product.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {product.summary || product.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-8 lg:w-64">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2" />
            Request Quote
          </button>
          
          {product.brochureUrl && (
            <a
              href={product.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;