import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight, Search } from 'lucide-react';

// Mock product data
const products = [
  // Fencing Solutions
  {
    id: 'anti-climb-fencing',
    name: 'Anti Climb Fencing',
    category: 'Fencing Solutions',
    description: 'High-security anti-climb fencing designed to prevent unauthorized access to restricted areas.',
    image: 'https://images.unsplash.com/photo-1567513177553-5e1049591218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/fencing/anti-climb-fencing'
  },
  {
    id: 'razor-mesh-fencing',
    name: 'Razor Mesh Fencing',
    category: 'Fencing Solutions',
    description: 'Advanced razor mesh fencing providing maximum security for sensitive installations and perimeters.',
    image: 'https://images.unsplash.com/photo-1571486158272-21cf1eead2cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/fencing/razor-mesh-fencing'
  },
  {
    id: 'decorative-fencing',
    name: 'Decorative Fencing',
    category: 'Fencing Solutions',
    description: 'Aesthetically pleasing fencing solutions that combine security with architectural elegance.',
    image: 'https://images.unsplash.com/photo-1587471384760-e5c3366010ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/fencing/decorative-fencing'
  },
  {
    id: 'crash-rated-fence',
    name: 'Crash Rated Fence',
    category: 'Fencing Solutions',
    description: 'High-impact resistance fencing designed to withstand vehicular attacks and protect critical infrastructure.',
    image: 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/fencing/crash-rated-fence'
  },
  {
    id: 'concertina-coil-fence',
    name: 'Concertina Coil Fence',
    category: 'Fencing Solutions',
    description: 'Rapid-deployment security barrier providing effective perimeter protection with razor-sharp coils.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/fencing/concertina-coil-fence'
  },
  
  // Gates & Barriers
  {
    id: 'swing-gates',
    name: 'Swing Gates',
    category: 'Gates & Barriers',
    description: 'High-security swing gates with advanced access control integration for controlled entry points.',
    image: 'https://images.unsplash.com/photo-1554166693-8b132a5696e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/gates/swing-gates'
  },
  {
    id: 'sliding-gates',
    name: 'Sliding Gates',
    category: 'Gates & Barriers',
    description: 'Space-efficient sliding security gates designed for locations with limited clearance space.',
    image: 'https://images.unsplash.com/photo-1567194974473-68d83240a366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/gates/sliding-gates'
  },
  {
    id: 'collapsible-barrier',
    name: 'Collapsible Barrier',
    category: 'Gates & Barriers',
    description: 'Rapidly deployable security barriers for temporary or emergency access control scenarios.',
    image: 'https://images.unsplash.com/photo-1516906561371-53f48df9fa54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/gates/collapsible-barrier'
  },
  
  // Advanced AI Products
  {
    id: 'image-enhancer',
    name: 'Image Enhancer',
    category: 'Advanced AI Products',
    description: 'AI-powered image enhancement technology for improving surveillance and reconnaissance capabilities.',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/ai/image-enhancer'
  },
  {
    id: 'deepsocmint',
    name: 'DeepSocmint',
    category: 'Advanced AI Products',
    description: 'Advanced social media intelligence tool for threat detection and security monitoring.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/ai/deepsocmint'
  },
  
  // DRDO TOT
  {
    id: 'bhukhari',
    name: 'Bhukhari',
    category: 'DRDO TOT',
    description: 'Advanced heating solution for extreme cold environments, developed with DRDO technology.',
    image: 'https://images.unsplash.com/photo-1542731947-7d5f042bbc50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/drdo/bhukhari'
  },
  {
    id: 'vajra',
    name: 'Vajra',
    category: 'DRDO TOT',
    description: 'High-durability protective equipment for specialized defense operations.',
    image: 'https://images.unsplash.com/photo-1553708881-112abc53fe54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/drdo/vajra'
  },
  
  // Defence Tech
  {
    id: 'mobile-mortar-system',
    name: 'Mobile Mortar System',
    category: 'Defence Tech',
    description: 'Advanced mobile mortar system providing indirect fire support with enhanced mobility and accuracy.',
    image: 'https://images.unsplash.com/photo-1687348747353-0c42d3c05983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/products/defence/mobile-mortar-system'
  }
];

const categories = [
  'All Categories',
  'Fencing Solutions',
  'Gates & Barriers',
  'Advanced AI Products',
  'DRDO TOT',
  'Defence Tech'
];

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Products & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our comprehensive range of defence and security solutions designed to meet the highest standards of protection and reliability.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-700 bg-secondary-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">All Products</h2>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
              
              <div className={`md:flex space-y-3 md:space-y-0 md:space-x-3 ${showFilters ? 'block' : 'hidden'}`}>
                {/* Category Select */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transition duration-300"
                >
                  <Link to={product.link} className="block overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 object-cover transition duration-500 hover:scale-105"
                    />
                  </Link>
                  
                  <div className="p-6">
                    <div className="text-sm font-medium text-primary-600 mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      <Link to={product.link} className="hover:text-primary-600 transition duration-200">
                        {product.name}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <Link 
                      to={product.link}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found. Try adjusting your search criteria.</p>
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