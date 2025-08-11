import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, ArrowRight } from 'lucide-react';

const DefenceTechPage: React.FC = () => {
  const products = [
    { name: 'Mobile Mortar System', path: '/defence/mobile-mortar-system', description: 'Advanced mobile mortar system providing indirect fire support with enhanced mobility and accuracy.' },
    { name: 'DRDO TOT Products', path: '/products/drdo', description: 'Defense products developed through Transfer of Technology from DRDO.' },
    { name: 'Bhukhari', path: '/drdo/bhukhari', description: 'Advanced heating solution for extreme cold environments, developed with DRDO technology.' },
    { name: 'Vajra', path: '/drdo/vajra', description: 'High-durability protective equipment for specialized defense operations.' },
  ];

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Defence Tech | Global Technocrats</title>
        <meta name="description" content="Advanced defense technology solutions for military and defense applications." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Defence Tech</span>
        </div>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Globe className="w-6 h-6 text-primary-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Defence Tech</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Advanced defense technology solutions for military and defense applications. Our defense tech products are designed to enhance operational capabilities while ensuring reliability in the most demanding environments.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.path} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transition duration-300 border border-gray-100">
              <Link to={product.path} className="block p-6">
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Category Description */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">About Our Defence Tech</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats develops and supplies advanced defense technology solutions designed to meet the evolving needs of modern military and security forces. Our defense tech products combine innovative engineering with robust construction to perform reliably in the most challenging operational environments.
          </p>
          <p className="text-gray-700">
            From mobile weapon systems to specialized equipment for extreme conditions, our defense tech portfolio addresses critical capability gaps for defense forces. Each product undergoes rigorous testing and quality control to ensure it meets or exceeds military standards for performance and durability.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need Specialized Defense Technology?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team of defense technology experts can help identify and implement solutions to address your specific operational requirements.
          </p>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DefenceTechPage;