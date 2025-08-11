import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Shield } from 'lucide-react';

const ConcertinaCoilFencePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Concertina Coil Fence | Global Technocrats</title>
        <meta name="description" content="High-security concertina coil fencing designed for perimeter protection." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products/fencing" className="text-gray-500 hover:text-primary-500">Fencing Solutions</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Concertina Coil Fence</span>
        </div>

        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="w-full h-[460px] rounded-lg shadow-sm overflow-hidden"> {/* Changed from h-64 to h-[460px] (80% increase) */}
              <img 
                src="/images/Concertina-coil-Fence-768x274.jpg" 
                alt="Concertina Coil Fence" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Concertina Coil Fence</h1>
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-sm font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">Fencing Solutions</span>
            </div>
            <p className="text-gray-700 mb-6">
              Concertina coil fencing is a high-security barrier system designed for perimeter protection.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">High tensile strength</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Corrosion resistant</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Quick installation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Deterrent against intrusion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats' Concertina Coil Fencing provides high-security perimeter protection for sensitive installations. The razor-sharp edges and robust construction make it extremely difficult to breach, providing excellent protection for military facilities and critical infrastructure.
          </p>
        </div>

        {/* Back Button */}
        <div className="flex justify-between items-center">
          <Link to="/products/fencing" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Fencing Solutions
          </Link>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConcertinaCoilFencePage;
