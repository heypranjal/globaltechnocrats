import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldAlert, ArrowRight } from 'lucide-react';

const FencingSolutionsPage: React.FC = () => {
  const products = [
    { 
      name: 'Anti Climb Fencing', 
      path: '/products/fencing/anti-climb', 
      description: 'High-security anti-climb fencing designed to prevent unauthorized access.',
      image: '/images/Anti-Climb-Fencing-2.jpg'
    },
    { 
      name: 'Razor Mesh Fencing', 
      path: '/products/fencing/razor-mesh', 
      description: 'Advanced razor mesh fencing providing maximum security for sensitive installations.',
      image: '/images/Razor-Mesh-Fencing-2.jpg'
    },
    { 
      name: 'Crash Rated Fence', 
      path: '/products/fencing/crash-rated-fence', 
      description: 'High-impact resistance fencing designed to withstand vehicular attacks.',
      image: '/images/Crash-Rated-Security-Fencing-768x274.jpg'
    },
    { 
      name: 'Concertina Coil Fence', 
      path: '/products/fencing/concertina-coil-fence', 
      description: 'Rapid-deployment security barrier providing effective perimeter protection.',
      image: '/images/Concertina-coil-Fence-768x274.jpg'
    },
    { 
      name: 'Chain Link Fence', 
      path: '/products/fencing/chain-link-fence', 
      description: 'Durable and versatile chain link fencing solutions for various applications.',
      image: '/images/Chain-Link-Fence-1-1024x366.jpg'
    },
    { 
      name: 'Barbed Wire Fence', 
      path: '/products/fencing/barbed-wire-fence', 
      description: 'Traditional security fencing with sharp wire barbs for deterrence.',
      image: '/images/Barbed-Wire-2-1024x366.jpg'
    },
    { 
      name: 'SS Concertina Coil', 
      path: '/products/fencing/ss-concertina-coil', 
      description: 'High-quality stainless steel concertina coil for maximum durability.',
      image: '/images/SS-Concertina-coil-768x274.jpg'
    },
    { 
      name: 'GI Concertina Coil', 
      path: '/products/fencing/gi-concertina-coil', 
      description: 'Cost-effective galvanized iron concertina coil for perimeter security.',
      image: '/images/GI-Concertina-Coil-768x274.png'
    },
    { 
      name: 'Swing Gates', 
      path: '/products/fencing/swing-gates', 
      description: 'High-quality swing gates for secure and convenient access control.',
      image: '/images/Swing-Gates-768x274.jpg'
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Fencing Solutions | Global Technocrats</title>
        <meta name="description" content="High-security fencing systems designed to protect sensitive installations and critical infrastructure." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Fencing Solutions</span>
        </div>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <ShieldAlert className="w-6 h-6 text-primary-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Fencing Solutions</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            High-security fencing systems designed to protect sensitive installations and critical infrastructure. Our fencing solutions combine durability, security, and aesthetics to meet the diverse needs of our clients.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.path} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transition duration-300 border border-gray-100">
              <Link to={product.path} className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Category Description */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6">About Our Fencing Solutions</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats offers a comprehensive range of high-security fencing solutions designed to meet the most demanding security requirements. Our fencing systems are engineered to provide robust perimeter protection while maintaining aesthetic appeal.
          </p>
          <p className="text-gray-700">
            From anti-climb and anti-cut designs to crash-rated barriers, our fencing solutions are deployed at critical infrastructure, government facilities, military installations, and high-security commercial properties worldwide. Each product is manufactured to the highest standards using premium materials and advanced engineering techniques.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Fencing Solution?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team of experts can help design specialized fencing systems tailored to your specific security requirements and site conditions.
          </p>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FencingSolutionsPage;