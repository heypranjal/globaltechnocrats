import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Shield } from 'lucide-react';

const SwingGatesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Swing Gates | Global Technocrats</title>
        <meta name="description" content="High-security swing gates with advanced access control integration for secure entry points." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products/gates" className="text-gray-500 hover:text-primary-500">Gates & Barriers</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Swing Gates</span>
        </div>

        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="w-full h-64 rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/images/Swing-Gates-768x274.jpg" 
                alt="Swing Gates" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Swing Gates</h1>
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-sm font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">Gates & Barriers</span>
            </div>
            <p className="text-gray-700 mb-6">
              High-security swing gates with advanced access control integration. Our swing gates provide reliable security while ensuring efficient traffic flow for authorized personnel and vehicles.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Advanced access control integration</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Durable construction for long-term reliability</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Customizable designs for various security needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats' Swing Gates are designed to provide secure access control for various applications. From residential properties to high-security installations, our swing gates combine robust security with elegant design. The gates can be integrated with various access control systems including card readers, biometric scanners, and remote controls.
          </p>
          <p className="text-gray-700">
            Available in both manual and automated configurations, our swing gates can be customized to meet specific site requirements. The automated versions feature smooth operation, adjustable speed control, and safety sensors to prevent accidents during operation.
          </p>
        </div>

        {/* Back Button */}
        <div className="flex justify-between items-center">
          <Link to="/products/gates" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Gates & Barriers
          </Link>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwingGatesPage;