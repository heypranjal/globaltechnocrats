import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Shield } from 'lucide-react';

const CrashRatedFencePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Crash Rated Fence | Global Technocrats</title>
        <meta name="description" content="High-impact resistance fencing designed to withstand vehicular attacks and protect critical infrastructure." />
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
          <span className="text-gray-800">Crash Rated Fence</span>
        </div>

        {/* Submenu Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Fencing Solutions</h3>
            
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Product Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/2">
              <div className="w-full h-[460px] rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="/images/Crash-Rated-Security-Fencing-768x274.jpg" 
                  alt="Crash Rated Fence" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Crash Rated Fence</h1>
              <div className="flex items-center mb-6">
                <Shield className="w-5 h-5 text-primary-500 mr-2" />
                <span className="text-sm font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">Fencing Solutions</span>
              </div>
              <p className="text-gray-700 mb-6">
                High-security crash rated fencing system designed to withstand vehicular impacts and protect critical infrastructure. Meets international standards for hostile vehicle mitigation.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="ml-2">Certified to STOP standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="ml-2">Heavy-duty steel construction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="ml-2">Anti-ram vehicle protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold mb-6">Product Description</h2>
            <p className="text-gray-700 mb-6">
              Global Technocrats' Crash Rated Fencing System provides superior protection against forced vehicle entry attempts. Engineered with reinforced steel components and deep foundation systems, it's ideal for securing government buildings, military installations, and high-value infrastructure.
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
    </div>
  );
};

export default CrashRatedFencePage;