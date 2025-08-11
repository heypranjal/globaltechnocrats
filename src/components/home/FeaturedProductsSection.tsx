import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, AlertTriangle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const products = [
  {
    id: 'anti-climb-fencing',
    name: 'Anti Climb Fencing',
    category: 'Fencing Solutions',
    description: 'High-security anti-climb fencing designed to prevent unauthorized access to restricted areas.',
    image: 'https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/globaltechnocrats//thumb-hp-anticlimb.jpg',
    icon: <Shield className="w-5 h-5" />,
    link: '/products/fencing/anti-climb-fencing'
  },
  {
    id: 'mobile-mortar-system',
    name: 'Mobile Mortar System',
    category: 'Defence Tech',
    description: 'Advanced mobile mortar system providing indirect fire support with enhanced mobility and accuracy.',
    image: 'https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/globaltechnocrats//thumb-hp-defenceproducts.png',
    icon: <AlertTriangle className="w-5 h-5" />,
    link: '/products/defence/mobile-mortar-system'
  },
  {
    id: 'image-enhancer',
    name: 'Image Enhancer',
    category: 'Advanced AI Products',
    description: 'AI-powered image enhancement technology for improving surveillance and reconnaissance capabilities.',
    image: 'https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/globaltechnocrats//thumb-hp-imageenhancer.webp',
    icon: <Lock className="w-5 h-5" />,
    link: '/products/ai/image-enhancer'
  }
];

const FeaturedProductsSection: React.FC = () => {
  const [sectionRef, isInView] = useInView();

  return (
    <section 
      ref={sectionRef}
      className={`section section-gradient-luxury section-luxury opacity-0 transform transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      <div className="container max-w-[1200px]">
        <div className={`section-heading opacity-0 transform transition-all duration-1000 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
        }`}>
          <span className="inline-block text-primary-600 font-medium text-sm tracking-wider px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">FEATURED SOLUTIONS</span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Discover our most innovative and sought-after security and defense solutions trusted by governments and organizations worldwide.
          </p>
        </div>
        
        <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`group card-luxury rounded-2xl sm:rounded-3xl overflow-hidden shadow-subtle hover:shadow-custom transform transition-all duration-700 opacity-0 ${
                isInView ? 'opacity-100 translate-y-0 scale-100' : 'translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden h-56 sm:h-64 md:h-72">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center shadow-lg">
                  {product.icon}
                  <span className="ml-1.5">{product.category}</span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">{product.description}</p>
                <Link 
                  to={product.link}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 border-t border-gray-100 pt-6"
                >
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-14">
          <Link to="/products" className="btn btn-primary px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;