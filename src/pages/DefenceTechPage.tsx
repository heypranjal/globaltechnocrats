import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, ArrowRight, ImageIcon } from 'lucide-react';

const DefenceTechPage: React.FC = () => {
  const products: Array<{
    name: string;
    path: string;
    description: string;
    image?: string;
    fit: 'contain' | 'cover';
    placeholder?: boolean;
  }> = [
    {
      name: 'DRDO TOT Products',
      path: '/products/drdo',
      description: 'Defense products developed through Transfer of Technology from DRDO — Bukhari and Riot Control Vehicle (Vajra).',
      image: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1792574361/WhatsApp_Image_2026-10-21_at_14.25.26_towycz.jpg',
      fit: 'contain',
    },
    {
      name: 'ATV Panther',
      path: '/products/defence/panther',
      description: 'Military-grade all-terrain electric mobility platform — 2WD/4WD, silent electric drive and lithium battery system.',
      image: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1792565626/WhatsApp_Image_2026-10-21_at_11.01.47_hlx67k.jpg',
      fit: 'contain',
    },
    {
      name: 'ATV Cabin Design',
      path: '/products/defence/atv-cabin-design',
      description: 'All-terrain command and surveillance platform with mast-mounted cameras, radar, surveillance drone, DG set, dual-screen control room and anti-drone gun.',
      image: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1792408809/Screenshot_2026-10-19_at_4.48.58_PM_sox6bn.png',
      fit: 'contain',
    },
    {
      name: 'Anti Drone Cage',
      path: '/products/defence/anti-drone-cage',
      description: 'Woven, double-twisted hexagonal wire mesh — a high-tensile anti-drone cage that arrests drones up to 80 kg at 250 km/h and contains ~5 kg explosive payloads.',
      image: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1792576122/Screenshot_2026-10-21_at_3.18.27_PM_jc4xro.png',
      fit: 'contain',
    },
    {
      name: 'Mobile Mortar System',
      path: '/products/defence/mobile-mortar-system',
      description: 'Next-generation mobile artillery platform combining mobility, firepower and precision for the modern battlefield.',
      fit: 'cover',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Defence Tech | Global Technocrats</title>
        <meta name="description" content="Advanced defense technology solutions for military and defense applications." />
      </Helmet>

      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800">Defence Tech</span>
        </div>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Globe className="w-6 h-6 text-primary-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Defence Tech</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Advanced defense technology solutions for military and defense applications. Our defense tech products are designed to enhance operational capabilities while ensuring reliability in the most demanding environments.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.path} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transition duration-300 border border-gray-100">
              <Link to={product.path} className="flex flex-col sm:flex-row h-full">
                {product.image ? (
                  <div className={`sm:w-2/5 flex-shrink-0 h-48 sm:h-auto overflow-hidden ${product.fit === 'contain' ? 'bg-gray-50 p-4' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full ${product.fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 hover:scale-105`}
                    />
                  </div>
                ) : product.placeholder ? (
                  <div className="sm:w-2/5 flex-shrink-0 h-48 sm:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-2 text-gray-400">
                    <ImageIcon className="w-10 h-10" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Image coming soon</span>
                  </div>
                ) : null}
                <div className={`${product.image || product.placeholder ? 'sm:w-3/5' : 'w-full'} p-6 flex flex-col justify-center`}>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
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
          <h2 className="text-2xl font-bold mb-6">About Our Defence Tech</h2>
          <p className="text-gray-700 mb-6">
            Global Technocrats develops and supplies advanced defense technology solutions designed to meet the evolving needs of modern military and security forces. Our defense tech products combine innovative engineering with robust construction to perform reliably in the most challenging operational environments.
          </p>
          <p className="text-gray-700">
            From mobile weapon systems to specialized equipment for extreme conditions, our defense tech portfolio addresses critical capability gaps for defense forces. Each product undergoes rigorous testing and quality control to ensure it meets or exceeds military standards for performance and durability.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need Specialized Defense Technology?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team of defense technology experts can help identify and implement solutions to address your specific operational requirements.
          </p>
          <Link to="/contact" className="btn btn-primary py-2.5 px-6">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DefenceTechPage;