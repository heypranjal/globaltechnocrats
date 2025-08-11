import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  Download,
  Phone
} from 'lucide-react';

// Mock product data (in a real app, this would come from an API)
const productsData = [
  {
    id: 'anti-climb-fencing',
    name: 'Anti Climb Fencing',
    category: 'Fencing Solutions',
    description: 'High-security anti-climb fencing designed to prevent unauthorized access to restricted areas.',
    longDescription: 'Global Technocrats\' Anti Climb Fencing is an advanced security solution designed to protect high-security installations from unauthorized access. The specialized mesh design makes climbing extremely difficult while maintaining visibility for surveillance. The system features specialized anti-cut materials, corrosion-resistant coating, and optional integration with electronic security systems.',
    features: [
      'High-strength steel construction',
      'Anti-cut and anti-climb design',
      'Corrosion-resistant coating',
      'Tamper-resistant fixings',
      'Optional sensor integration',
      'Rapid installation system',
      'Customizable heights from 2m to 5m'
    ],
    applications: [
      'Military installations',
      'Government facilities',
      'Critical infrastructure',
      'Border security',
      'Correctional facilities',
      'Industrial complexes'
    ],
    specifications: [
      { name: 'Height Range', value: '2-5 meters' },
      { name: 'Post Spacing', value: '2.4 meters (standard)' },
      { name: 'Material', value: 'High-tensile steel' },
      { name: 'Mesh Size', value: '12.7mm x 76.2mm' },
      { name: 'Wire Diameter', value: '4mm' },
      { name: 'Coating', value: 'Zinc + polymer' },
      { name: 'Coating Thickness', value: '300 microns minimum' },
      { name: 'Corrosion Resistance', value: '2000 hours salt spray test' },
      { name: 'Security Rating', value: 'Level 4 (SR4)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1567513177553-5e1049591218?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606566900856-740da422aad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    relatedProducts: ['razor-mesh-fencing', 'crash-rated-fence', 'concertina-coil-fence']
  },
  {
    id: 'mobile-mortar-system',
    name: 'Mobile Mortar System',
    category: 'Defence Tech',
    description: 'Advanced mobile mortar system providing indirect fire support with enhanced mobility and accuracy.',
    longDescription: 'The Mobile Mortar System by Global Technocrats is a state-of-the-art indirect fire support platform designed for rapid deployment and superior accuracy. The system integrates advanced ballistic computing, GPS positioning, and automated loading to deliver exceptional firepower in a highly mobile package. Designed for operational flexibility, it can be transported by vehicle, helicopter, or parachute drop.',
    features: [
      'Advanced fire control system',
      'GPS-guided targeting',
      'Semi-automatic loading mechanism',
      'Reduced crew requirement (2-3 operators)',
      'Quick setup and teardown (under 2 minutes)',
      'Integrated ballistic computer',
      'Multiple caliber options'
    ],
    applications: [
      'Infantry fire support',
      'Special operations',
      'Rapid reaction forces',
      'Border security operations',
      'Counter-insurgency operations'
    ],
    specifications: [
      { name: 'Caliber Options', value: '60mm, 81mm, 120mm' },
      { name: 'Range (81mm)', value: 'Up to 6,200 meters' },
      { name: 'Rate of Fire', value: '16 rounds per minute (rapid)' },
      { name: 'Setup Time', value: '< 2 minutes' },
      { name: 'Crew', value: '2-3 personnel' },
      { name: 'Total System Weight', value: '162 kg (81mm configuration)' },
      { name: 'Traverse', value: '360 degrees' },
      { name: 'Elevation', value: '45 to 85 degrees' },
      { name: 'Fire Control', value: 'Digital w/ manual backup' },
      { name: 'Transport Options', value: 'Vehicle-mounted or towed' }
    ],
    images: [
      'https://images.unsplash.com/photo-1687348747353-0c42d3c05983?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1569241641262-d5d7beb96d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553708881-112abc53fe54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    relatedProducts: ['bhukhari', 'vajra']
  },
  {
    id: 'image-enhancer',
    name: 'Image Enhancer',
    category: 'Advanced AI Products',
    description: 'AI-powered image enhancement technology for improving surveillance and reconnaissance capabilities.',
    longDescription: 'Image Enhancer is Global Technocrats\' cutting-edge AI-powered software solution designed to dramatically improve image quality from surveillance cameras, drones, and other imaging systems. Using advanced deep learning algorithms, it can restore clarity to degraded images affected by low light, distance, weather conditions, or poor-quality sensors. The system operates in near real-time and can be deployed on edge devices or centralized processing centers.',
    features: [
      'Real-time processing capability',
      'Low-light enhancement',
      'Fog and haze removal',
      'Motion blur correction',
      'Resolution upscaling',
      'Noise reduction',
      'Automatic contrast optimization',
      'Integration with existing CCTV systems'
    ],
    applications: [
      'Security surveillance',
      'Border monitoring',
      'Military reconnaissance',
      'Law enforcement investigations',
      'Critical infrastructure protection',
      'Forensic image analysis'
    ],
    specifications: [
      { name: 'Supported Input Formats', value: 'JPEG, PNG, TIFF, RAW, H.264, H.265' },
      { name: 'Processing Time', value: '20-500ms per frame (resolution dependent)' },
      { name: 'Enhancement Level', value: 'Up to 6x improvement in perceptual quality' },
      { name: 'Resolution Support', value: 'Up to 4K' },
      { name: 'Minimum Hardware', value: 'NVIDIA GPU with 8GB VRAM or equivalent' },
      { name: 'API Support', value: 'REST, RTSP, JSON-RPC' },
      { name: 'Deployment Options', value: 'On-premises, cloud, or hybrid' },
      { name: 'Operating System Support', value: 'Windows, Linux, Android (selected devices)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    relatedProducts: ['deepsocmint']
  }
];

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProduct = () => {
      setLoading(true);
      // Find product by ID
      const foundProduct = productsData.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
      }
      
      setLoading(false);
    };
    
    fetchProduct();
    // Reset to first image and description tab when product changes
    setActiveImage(0);
    setActiveTab('description');
    
    window.scrollTo(0, 0);
  }, [productId]);
  
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  const relatedProducts = product.relatedProducts
    .map((id: string) => productsData.find(p => p.id === id))
    .filter(Boolean);
  
  return (
    <>
      <Helmet>
        <title>{product.name} | Global Technocrats</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-500">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link to="/products" className="text-gray-500 hover:text-primary-500">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link to={`/products/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 hover:text-primary-500">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    className={`block rounded-lg overflow-hidden border-2 ${
                      activeImage === index ? 'border-primary-500' : 'border-transparent'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>
              
              <div className="border-t border-gray-200 my-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Military-Grade</h3>
                      <p className="text-sm text-gray-600">Built to withstand extreme conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Advanced Technology</h3>
                      <p className="text-sm text-gray-600">Cutting-edge defense solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/contact" 
                    className="btn btn-primary"
                  >
                    <Phone className="w-4 h-4 mr-2" /> Request Quote
                  </Link>
                  <button 
                    className="btn btn-secondary"
                  >
                    <Download className="w-4 h-4 mr-2" /> Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === 'description' 
                      ? 'border-primary-500 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === 'features' 
                      ? 'border-primary-500 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
                <button
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === 'specifications' 
                      ? 'border-primary-500 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Specifications
                </button>
                <button
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === 'applications' 
                      ? 'border-primary-500 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('applications')}
                >
                  Applications
                </button>
              </div>
            </div>
            
            <div className="py-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-lg">{product.longDescription}</p>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        {product.specifications.map((spec: any, index: number) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{spec.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {activeTab === 'applications' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Applications</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((application: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct: any) => (
                <div 
                  key={relatedProduct.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transition duration-300"
                >
                  <Link to={`/products/${relatedProduct.id}`} className="block overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover transition duration-500 hover:scale-105"
                    />
                  </Link>
                  
                  <div className="p-6">
                    <div className="text-sm font-medium text-primary-600 mb-2">
                      {relatedProduct.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      <Link to={`/products/${relatedProduct.id}`} className="hover:text-primary-600 transition duration-200">
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{relatedProduct.description}</p>
                    
                    <Link 
                      to={`/products/${relatedProduct.id}`}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need More Information?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our defense technology experts are ready to answer your questions and provide detailed specifications for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn btn-primary">
                  Contact Sales Team
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;