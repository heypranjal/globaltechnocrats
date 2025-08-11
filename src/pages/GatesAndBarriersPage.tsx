import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, ArrowRight } from 'lucide-react';

const GatesAndBarriersPage: React.FC = () => {
  const products = [
    { 
      name: 'Swing Gates', 
      path: '/products/gates/swing-gates', 
      description: 'High-security swing gates with advanced access control integration.',
      image: '/images/Swing-Gates-768x274.jpg'
    },
    { 
      name: 'Sliding Gates', 
      path: '/products/gates/sliding-gates', 
      description: 'Space-efficient sliding security gates for locations with limited clearance.',
      image: '/images/Sliding-Gates-768x274.jpg'
    },
    { 
      name: 'Collapsible Barrier', 
      path: '/products/gates/collapsible-barrier', 
      description: 'Rapidly deployable security barriers for temporary or emergency scenarios.',
      image: '/images/Gabion-768x274.jpg' // Using a similar barrier image
    },
    { 
      name: 'Architectural Gabions', 
      path: '/products/gates/architectural-gabions', 
      description: 'Decorative yet functional security barriers for perimeter protection.',
      image: '/images/Gabion-768x274.jpg'
    },
    { 
      name: 'Hesco Box', 
      path: '/products/gates/hesco-box', 
      description: 'Military-grade defensive barriers for rapid deployment in high-risk areas.',
      image: '/images/Gabion-768x274.jpg' // Using a similar barrier image
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Gates & Barriers | Global Technocrats</title>
        <meta name="description" content="Secure access control solutions for controlled entry and exit management." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Gates & Barriers</span>
        </div>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Zap className="w-6 h-6 text-primary-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Gates & Barriers</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Secure access control solutions for controlled entry and exit management. Our gates and barriers provide reliable security while ensuring efficient traffic flow for authorized personnel and vehicles.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.path} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transition duration-300 border border-gray-100">
              <Link to={product.path} className="block p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 flex-shrink-0 overflow-hidden rounded-sm">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
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
          <h2 className="text-2xl font-bold mb-6">About Our Gates & Barriers</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats provides a comprehensive range of gates and barrier systems designed to control access to secure facilities while maintaining efficient operations. Our solutions range from manual to fully automated systems with advanced access control integration.
          </p>
          <p className="text-gray-700">
            Each gate and barrier system is engineered for reliability, durability, and security. We offer customization options to meet specific site requirements, including integration with existing security systems, remote operation capabilities, and emergency override functions.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Access Control Solution?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team of experts can help design specialized gate and barrier systems tailored to your specific security requirements and operational needs.
          </p>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GatesAndBarriersPage;