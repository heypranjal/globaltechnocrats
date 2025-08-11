import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Shield } from 'lucide-react';

const SwingGate: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Swing Gate | Global Technocrats</title>
        <meta name="description" content="High-security swing gate with advanced access control for secure entry" />
      </Helmet>

      <div className="container">
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products/gates" className="text-gray-500 hover:text-primary-500">Gates</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Swing Gate</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="w-full h-64 rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/images/Swing-Gate-768x274.jpg" 
                alt="Swing Gate" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Swing Gate</h1>
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-sm font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">Security Gate</span>
            </div>
            <p className="text-gray-700 mb-6">
              Swing gates offer a secure and aesthetically pleasing way to control entry and exit. Available in various materials and designs to match your property's style.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Durable construction with weather-resistant materials</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">High security with advanced access control systems</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Available in steel, aluminum and wood finishes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Can be automated for remote operation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Safety features including obstacle detection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
          <p className="text-gray-700 mb-6">
            Our swing gates are engineered for reliability and security, featuring robust construction and precision engineering. They're available in various materials including steel, aluminum, and wrought iron to match your property's aesthetic.
          </p>
          <p className="text-gray-700">
            The gates can be customized with different automation options, safety features, and access control integrations to meet your specific security requirements. Typical lifespan is 10-30 years depending on material and maintenance.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Link to="/products/gates" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Gates
          </Link>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwingGate;
