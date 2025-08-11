import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Cpu } from 'lucide-react';

const DeepSocmintPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>DeepSocmint | Global Technocrats</title>
        <meta name="description" content="Advanced social media intelligence tool for threat detection and security monitoring." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products/ai" className="text-gray-500 hover:text-primary-500">Advanced AI Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">DeepSocmint</span>
        </div>

        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="w-full h-[460px] rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/images/Image Enhancer_files/GT-website-logo-261x57.png" 
                alt="DeepSocmint" 
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">DeepSocmint</h1>
            <div className="flex items-center mb-6">
              <Cpu className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-sm font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">Advanced AI Products</span>
            </div>
            <p className="text-gray-700 mb-6">
              Advanced social media intelligence tool for threat detection and security monitoring. DeepSocmint analyzes patterns across social platforms to identify potential security threats and provide early warning.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Multi-platform monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Natural language processing</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Sentiment analysis and threat scoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats' DeepSocmint is a comprehensive social media intelligence platform designed for security agencies and defense organizations. The system continuously monitors multiple social media platforms, forums, and messaging services to identify potential security threats, track disinformation campaigns, and analyze public sentiment.
          </p>
          <p className="text-gray-700">
            Using advanced natural language processing and machine learning algorithms, DeepSocmint can detect subtle patterns that might indicate coordinated activities, emerging threats, or significant shifts in public discourse. The platform provides real-time alerts, detailed reports, and visualization tools to help security professionals respond quickly to developing situations.
          </p>
        </div>

        {/* Back Button */}
        <div className="flex justify-between items-center">
          <Link to="/products/ai" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Advanced AI Products
          </Link>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeepSocmintPage;