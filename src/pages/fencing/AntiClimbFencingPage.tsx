import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Shield } from 'lucide-react';
import { ImagePlaceholder } from '../../components/ImagePlaceholder';

const AntiClimbFencingPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Anti Climb Fencing | Global Technocrats</title>
        <meta name="description" content="Anti Climb Fencing: Safeguarding Your Premises with Advanced Security Solutions. Effective and reliable solution for deterring intruders and providing robust perimeter protection." />
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
          <span className="text-gray-800">Anti Climb Fencing</span>
        </div>

        {/* Product Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="w-full [460px] rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/images/Anti-Climb-Fencing-2.jpg" 
                alt="Anti Climb Fencing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Anti Climb Fencing</h1>
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-sm font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full">Fencing Solutions</span>
            </div>
            <p className="text-gray-700 mb-6">
              High-security anti-climb fencing designed to prevent unauthorized access to restricted areas. The specialized mesh design makes climbing extremely difficult while maintaining visibility for surveillance.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">High-strength steel construction</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Anti-cut and anti-climb design</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="ml-2">Corrosion-resistant coating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          
          <h3 className="text-xl font-semibold mb-3">Introduction</h3>
          <p className="text-gray-700 mb-6">
            When it comes to safeguarding your property and ensuring public safety, security fencing plays a crucial role. Among various security fencing options available today, Anti Climb Fencing has emerged as an effective and reliable solution for deterring intruders and providing robust perimeter protection. In this article, we will explore the features, benefits, applications, and considerations related to Anti Climb Fencing, guiding you in making informed decisions about your security needs.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">The Importance of Secure Perimeters</h3>
          <p className="text-gray-700 mb-6">
            Secure perimeters are the first line of defense against un authorized access and potential threats. Whether it's a commercial property or a public facility, having a strong and secure perimeter ensures that your assets and people remain protected. Anti Climb Fencing serves as a proactive measure to prevent intrusions and acts as a visual deterrent to potential wrongdoers.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Characteristics of Anti Climb Fencing</h3>
          <p className="text-gray-700 mb-6">
            Anti Climb Fencing is designed to be difficult to scale or tamper with due to its unique construction. Typically made from high-quality steel, the fencing features narrow gaps and smooth surfaces, making it challenging for intruders to find footholds or handholds for climbing. The height and material options can vary to suit different security requirements.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Types of Anti Climb Fencing</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Welded Mesh Fencing:</strong> This type of fencing consists of welded wire mesh panels that are difficult to cut or penetrate, offering an excellent balance of security and visibility.</li>
            <li><strong>High-Security Palisade Fencing:</strong> Palisade fencing is characterized by its sharp-pointed tops, making it extremely difficult and dangerous for intruders to climb over.</li>
            <li><strong>Razor Wire Fencing:</strong> Adding an extra layer of security, razor wire fencing features sharp-edged wires that deter even the most determined intruders.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Applications of Anti Climb Fencing</h3>
          <p className="text-gray-700 mb-3">Anti Climb Fencing finds application in various settings, including:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Securing Commercial Properties:</strong> Retail stores, warehouses, and industrial facilities benefit from the added security that Anti Climb Fencing provides.</li>
            <li><strong>Protecting Critical Infrastructure:</strong> Sensitive sites such as power plants and data centers rely on Anti Climb Fencing to prevent potential threats.</li>
            <li><strong>Usage in Public Areas:</strong> Public parks, schools, and government buildings use Anti Climb Fencing to ensure safety and protection.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
          <p className="text-gray-700 mb-3"><strong>Case Study 1: Industrial Complex</strong></p>
          <p className="text-gray-700 mb-4">
            In a recent implementation of Anti Climb Fencing at an industrial complex, instances of unauthorized access and theft reduced significantly. The strong visual deterrent and physical barrier prevented potential intruders from attempting any security breaches.
          </p>
          
          <p className="text-gray-700 mb-3"><strong>Case Study 2: Government Facility</strong></p>
          <p className="text-gray-700 mb-6">
            A government facility sought to enhance its security infrastructure, and Anti Climb Fencing was chosen as a critical component. The fencing's effectiveness was demonstrated by the absence of any successful security breaches over the past two years.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Conclusion</h3>
          <p className="text-gray-700">
            Anti Climb Fencing serves as a reliable and robust security solution for protecting your property and ensuring public safety. With its formidable deterrent capabilities and resistant construction, it provides peace of mind, knowing that your premises are well-protected. Investing in professional installation and regular maintenance will ensure the fence's long-term effectiveness, delivering value for years to come.
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

export default AntiClimbFencingPage;