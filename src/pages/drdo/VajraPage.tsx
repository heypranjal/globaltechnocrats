import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Shield, Truck } from 'lucide-react';

const VajraPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Vajra | DRDO TOT Products | Global Technocrats</title>
        <meta name="description" content="Vajra and Mini Vajra light vehicles for law enforcement and security forces transportation, equipped with advanced features for tactical operations." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products/drdo" className="text-gray-500 hover:text-primary-500">DRDO TOT Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Vajra</span>
        </div>

        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="w-full h-[460px] rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/images/Vajra-1-1536x768.png" 
                alt="Vajra Security Vehicle" 
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Vajra</h1>
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-sm font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">DRDO TOT Product</span>
            </div>
            <p className="text-gray-700 mb-6">
              Vajra and Mini Vajra are purpose-built light vehicles designed for law enforcement and security forces transportation. These vehicles come equipped with advanced features for tactical operations and crowd control.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Capacity for 26 troops</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Multi-tube tear gas launchers</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Intercom and public address system</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Enhanced safety features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          
          <p className="text-gray-700 mb-6">
            In an ever-evolving landscape of security challenges, law enforcement agencies and security forces need robust, versatile, and efficient vehicles to carry out their duties effectively. Recognising this need, the introduction of the 'Vajra' and 'Mini Vajra' light vehicles has proven to be a game-changer in law enforcement operations and transportation of security forces to affected areas.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Salient Features</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Capacity for 26 Troops:</strong> Spacious interiors capable of accommodating up to 26 troops comfortably, allowing for rapid deployment and swift response to critical situations.</li>
            <li><strong>Multi-Tube Tear Gas Launchers:</strong> Mounted on the vehicle's roof, providing a non-lethal but highly effective means of dispersing rioters and controlling unruly crowds.</li>
            <li><strong>Riot Control Gear and Rifle Storage:</strong> Equipped with storage compartments for riot control gear and racks to securely hold rifles, enabling quick access to necessary equipment.</li>
            <li><strong>Four Flood Lights:</strong> Powerful flood lights for improved visibility in low-light or night-time scenarios.</li>
            <li><strong>Intercom Set and Public Address Equipment:</strong> Enabling clear and concise communication both inside the vehicle and with individuals outside.</li>
            <li><strong>In-Built Power Source:</strong> Reliable 2.4 kVA power source ensuring continuous operation of electronic devices and equipment.</li>
            <li><strong>Firing Ports for Retaliation:</strong> Allowing personnel inside to retaliate if necessary while maintaining a secure position.</li>
            <li><strong>Fuel Tank with Explosive Suppression Material:</strong> Specially designed for added safety and protection in high-risk situations.</li>
            <li><strong>Additional Accessories:</strong> Including fire extinguishers, foldable stretchers for medical emergencies, and a wind direction indicator to assist tactical decisions.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Applications</h3>
          <p className="text-gray-700 mb-6">
            The Vajra and Mini Vajra vehicles represent a significant advancement in law enforcement and security force transportation. With their versatility and purpose-built design, they have become indispensable assets in modern-day law enforcement and security operations, including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Riot control and crowd management</li>
            <li>Rapid deployment of security personnel</li>
            <li>Border security operations</li>
            <li>High-risk area patrols</li>
            <li>Emergency response situations</li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="flex justify-between items-center">
          <Link to="/products/drdo" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to DRDO TOT Products
          </Link>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Request Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VajraPage;