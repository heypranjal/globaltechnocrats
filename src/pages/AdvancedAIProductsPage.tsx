import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Cpu, ArrowRight } from 'lucide-react';

const AdvancedAIProductsPage: React.FC = () => {
  const products = [
    { name: 'Image Enhancer', path: '/products/ai/image-enhancer', description: 'AI-powered image enhancement technology for improving surveillance and reconnaissance capabilities.' },
    { name: 'DeepSocmint', path: '/products/ai/deepsocmint', description: 'Advanced social media intelligence tool for threat detection and security monitoring.' },
  ];

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Advanced AI Products | Global Technocrats</title>
        <meta name="description" content="Cutting-edge artificial intelligence solutions for security and surveillance applications." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Advanced AI Products</span>
        </div>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Cpu className="w-6 h-6 text-primary-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Advanced AI Products</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Cutting-edge artificial intelligence solutions for security and surveillance applications. Our AI products leverage the latest advancements in machine learning to enhance threat detection and intelligence gathering capabilities.
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
          <h2 className="text-2xl font-bold mb-6">About Our AI Solutions</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats is at the forefront of applying artificial intelligence to defense and security challenges. Our AI products are designed to process and analyze vast amounts of data to identify patterns, detect anomalies, and provide actionable intelligence.
          </p>
          <p className="text-gray-700">
            From enhancing low-quality surveillance footage to monitoring social media for potential threats, our AI solutions provide security agencies with powerful tools to stay ahead of evolving threats. Each product undergoes rigorous testing and continuous improvement to ensure optimal performance in real-world scenarios.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom AI Solution?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team of AI experts and security specialists can develop tailored artificial intelligence solutions to address your specific security challenges.
          </p>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIProductsPage;