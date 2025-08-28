import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, ArrowRight } from 'lucide-react';
import { getImageUrl } from '../data/mediaAssets';

const DRDOTOTPage: React.FC = () => {
  const products = [
    { 
      name: 'Bukhari', 
      path: '/products/drdo/bukhari', 
      description: 'Advanced heating solution for extreme cold environments, developed with DRDO technology.',
      image: getImageUrl('products', 'bukhari')
    },
    { 
      name: 'Vajra', 
      path: '/products/drdo/vajra', 
      description: 'High-durability protective equipment for specialized defense operations.',
      image: getImageUrl('products', 'vajra')
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>DRDO TOT Products | Global Technocrats</title>
        <meta name="description" content="Defense products developed through Transfer of Technology (TOT) from the Defence Research and Development Organisation (DRDO)." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">DRDO TOT Products</span>
        </div>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-primary-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">DRDO TOT Products</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Defense products developed through Transfer of Technology (TOT) from the Defence Research and Development Organisation (DRDO). These products represent cutting-edge Indian defense technology made available for wider deployment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.path} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transition duration-300 border border-gray-100">
              <Link to={product.path} className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Category Description */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">About DRDO TOT Products</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats is proud to be an authorized manufacturer and supplier of defense products developed by the Defence Research and Development Organisation (DRDO) of India. Through the Transfer of Technology (TOT) program, we bring these innovative solutions to a wider market.
          </p>
          <p className="text-gray-700">
            These products represent years of research and development by India's premier defense R&D organization, adapted for production and deployment by Global Technocrats. Each product maintains the high standards set by DRDO while benefiting from our manufacturing expertise and distribution capabilities.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in DRDO Technology?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact our team to learn more about our DRDO TOT products and how they can enhance your defense and security capabilities.
          </p>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DRDOTOTPage;