import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Shield } from 'lucide-react';

const RazorMeshFencingPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Razor Mesh Fencing | Global Technocrats</title>
        <meta name="description" content="Advanced razor mesh fencing providing maximum security with sharp-edged design for high-security applications including perimeter security, military installations, and correctional facilities." />
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
          <span className="text-gray-800">Razor Mesh Fencing</span>
        </div>

        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="w-full [460px] rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/images/Razor-Mesh-Fencing-2.jpg" 
                alt="Razor Mesh Fencing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Razor Mesh Fencing</h1>
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-sm font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">Fencing Solutions</span>
            </div>
            <p className="text-gray-700 mb-6">
              Razor mesh fencing, also known as razor wire mesh or concertina wire, is a highly effective security fencing solution widely used for its formidable deterrent and protection capabilities. Designed to deter and prevent unauthorized access with its sharp edges and robust construction.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Sharp razor edges for maximum deterrence</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">High-tensile steel construction for durability</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Weather-resistant galvanized coating</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Cost-effective security solution</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Easy installation and minimal maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats' Razor Mesh Fencing is designed for high-security applications where maximum deterrence is required. The razor-sharp edges and robust construction make it extremely difficult to breach, providing excellent protection for sensitive installations, military facilities, and critical infrastructure.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Types of Razor Mesh Fencing</h3>
          <p className="text-gray-700 mb-4">We offer several types of razor mesh fencing, each designed to serve specific security needs:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Welded Razor Mesh Fencing:</strong> Consists of razor barbed wire welded onto a grid pattern of metal panels, providing a rigid and robust barrier.</li>
            <li><strong>Flat Wrap Razor Mesh Fencing:</strong> Features flat razor wire coils packaged in a compact manner, suitable for installations where space is limited.</li>
            <li><strong>Concertina Razor Mesh Fencing:</strong> Comprises interconnected razor wire coils in a concertina shape, offering high-security barriers that are difficult to breach.</li>
            <li><strong>Mobile Razor Mesh Fencing:</strong> A versatile and temporary fencing solution ideal for events or construction sites that require frequent relocation.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Applications</h3>
          <p className="text-gray-700 mb-4">Our razor mesh fencing solutions are widely used in various settings:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Perimeter Security for Residential Areas:</strong> Securing residential properties and estates due to its effectiveness in preventing unauthorized access.</li>
            <li><strong>Industrial and Commercial Sites:</strong> Safeguarding facilities and protecting valuable assets in industrial and business settings.</li>
            <li><strong>Border and Military Installations:</strong> Enhancing border security and restricting unauthorized crossings for government and military entities.</li>
            <li><strong>Prisons and Correctional Facilities:</strong> Forming an essential part of high-security prisons, ensuring inmate containment and preventing escapes.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Installation Process</h3>
          <p className="text-gray-700 mb-4">Our professional installation process includes:</p>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Site Assessment and Preparation:</strong> Thorough site assessment to identify potential challenges and plan the fencing layout.</li>
            <li><strong>Choosing the Right Type:</strong> Selecting the most appropriate type of razor mesh fencing based on security requirements.</li>
            <li><strong>Installing Posts and Supports:</strong> Properly installing sturdy posts and supports to ensure stability and effectiveness.</li>
            <li><strong>Securing the Razor Mesh Panels:</strong> Carefully attaching the razor mesh panels to the support structure for a tight and secure fit.</li>
          </ol>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Maintenance</h3>
          <p className="text-gray-700 mb-4">To ensure the longevity and effectiveness of your razor mesh fencing:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Schedule routine inspections to identify any damage, corrosion, or breaches.</li>
            <li>Clean the fencing regularly and apply anti-rust coatings to prolong its lifespan.</li>
            <li>Address any damages promptly to maintain the fencing's integrity and effectiveness.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Safety Considerations</h3>
          <p className="text-gray-700 mb-4">When using razor mesh fencing, consider these safety precautions:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Install warning signs to alert people to the presence of razor mesh fencing.</li>
            <li>Ensure proper safety measures are followed when handling and installing razor wire.</li>
            <li>Comply with local laws and regulations regarding the use of razor mesh fencing.</li>
          </ul>
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

export default RazorMeshFencingPage;