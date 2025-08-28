/**
 * Enhanced Products Page - Categorized Display
 * Global Technocrats - Following luxury theme patterns
 * Pragmatic approach: enhance existing rather than rebuild
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import CategorySection from '../components/products/CategorySection';
import ProductFilters from '../components/products/ProductFilters';
import ProductCard from '../components/products/ProductCard';
import { productCategories, allProducts, categoryFilters } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products for search results
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Show categorized view when no search term, filtered view when searching
  const showCategorizedView = !searchTerm && selectedCategory === 'All Categories';
  
  return (
    <>
      <Helmet>
        <title>Products | Global Technocrats</title>
        <meta name="description" content="Explore our comprehensive range of defence and security solutions including fencing, gates, advanced AI products, and defence technology." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary-900 py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-100 px-6 py-3 rounded-full bg-primary-600/20 border border-primary-400/30 mb-6 text-sm font-semibold">
              COMPLETE SOLUTIONS CATALOG
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Products & Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Discover our comprehensive range of defence and security solutions designed to meet the highest standards of protection and reliability.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[1200px]">
          {/* Filters */}
          <ProductFilters
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            showFilters={showFilters}
            onSearchChange={setSearchTerm}
            onCategoryChange={setSelectedCategory}
            onToggleFilters={() => setShowFilters(!showFilters)}
          />
          
          {showCategorizedView ? (
            /* Categorized View - Default Layout */
            <div className="space-y-16">
              {productCategories.map((category) => (
                <CategorySection key={category.id} category={category} showAll={true} />
              ))}
            </div>
          ) : (
            /* Filtered Results View */
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {searchTerm ? `Search Results for "${searchTerm}"` : `${selectedCategory} Products`}
                </h3>
                <p className="text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="bg-white rounded-xl p-12 shadow-sm">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search criteria or browse our categories below.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All Categories');
                      }}
                      className="btn btn-primary"
                    >
                      View All Products
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-primary-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts can help design specialized security and defense solutions tailored to your specific requirements.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;