/**
 * Product Categories Section with luxury blue borders and corner accents
 * Updated: 2025-07-11 - Added subtle luxury styling and reduced vertical spacing by 30%
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Globe, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const categories = [
  {
    id: 'defence',
    title: 'Defence Tech',
    description: 'Advanced defense technology solutions for military and defense applications.',
    icon: <Globe className="w-10 h-10 text-primary-500" />,
    products: [
      { name: 'Mobile Mortar System', path: '/products/defence/mobile-mortar-system' },
      { name: 'DRDO TOT Products', path: '/products/drdo' },
      { name: 'Bhukhari', path: '/products/defence/bhukhari' },
      { name: 'Vajra', path: '/products/defence/vajra' }
    ],
    image: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777679/defenceteck1_irr6dw.png',
    link: '/products/defence'
  },
  {
    id: 'fencing',
    title: 'Fencing Solutions',
    description: 'High-security fencing systems designed to protect sensitive installations and critical infrastructure.',
    icon: <ShieldAlert className="w-10 h-10 text-primary-500" />,
    products: [
      { name: 'Anti Climb Fencing', path: '/products/fencing/anti-climb' },
      { name: 'Razor Mesh Fencing', path: '/products/fencing/razor-mesh' },
      { name: 'Crash Rated Fence', path: '/products/fencing/crash-rated-fence' },
      { name: 'Concertina Coil Fence', path: '/products/fencing/concertina-coil-fence' },
      { name: 'Chain Link Fence', path: '/products/fencing/chain-link-fence' },
      { name: 'Barbed Wire Fence', path: '/products/fencing/barbed-wire-fence' }
    ],
    image: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1787288769/fencingsolution_wujd0v.jpg',
    link: '/products/fencing'
  },
  {
    id: 'gates',
    title: 'Gates & Barriers',
    description: 'Secure access control solutions for controlled entry and exit management.',
    icon: <Zap className="w-10 h-10 text-primary-500" />,
    products: [
      { name: 'Swing Gates', path: '/products/gates/swing-gates' },
      { name: 'Sliding Gates', path: '/products/gates/sliding-gates' },
      { name: 'Collapsible Barrier', path: '/products/gates/collapsible-barrier' },
      { name: 'Architectural Gabions', path: '/products/gates/architectural-gabions' },
      { name: 'Hesco Box', path: '/products/gates/hesco-box' }
    ],
    image: 'https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/globaltechnocrats//thumb-hp-slidinggate.png',
    link: '/products/gates'
  }
];

const ProductCategoriesSection: React.FC = () => {
  const [sectionRef, isInView] = useInView() as [React.RefObject<HTMLElement>, boolean];

  return (
    <section
      id="product-categories"
      ref={sectionRef}
      className={`section section-dark-luxury section-corner-accent opacity-0 transform transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      <div className="container max-w-[1200px]">
        <div className={`section-heading opacity-0 transform transition-all duration-1000 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
        }`}>
          <span className="typography-badge inline-block text-primary-600 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">COMPREHENSIVE SOLUTIONS</span>
          <h2 className="typography-section-title mb-4">Defense Technology Solutions</h2>
          <p className="typography-section-subtitle">
            Explore our comprehensive range of defense and security solutions designed to meet the highest standards of protection and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`card-luxury rounded-2xl sm:rounded-3xl overflow-hidden shadow-custom hover:shadow-xl group transform transition-all duration-700 opacity-0 ${
                isInView ? 'opacity-100 translate-x-0' : index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="flex flex-col h-full">
                <Link to={category.link} className="block">
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <div className="bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-lg">
                        {category.icon}
                      </div>
                      <h3 className="typography-card-title text-white ml-3">{category.title}</h3>
                    </div>
                  </div>
                </Link>
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <p className="typography-card-content mb-4">{category.description}</p>
                  <div className="mb-4 flex-grow">
                    <h4 className="typography-badge text-primary-600 uppercase mb-3">Featured Products</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-primary-500 mr-2 flex-shrink-0" />
                          <Link to={product.path} className="typography-body-sm hover:text-primary-600 transition-colors">
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={category.link}
                    className="typography-link inline-flex items-center mt-auto group/link border-t border-gray-100 pt-4"
                  >
                    Explore {category.title} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link to="/products" className="btn btn-primary px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;