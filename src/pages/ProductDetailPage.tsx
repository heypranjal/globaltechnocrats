import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { getProductById, type Product } from '../data/products';
import ProductHeader from '../components/products/ProductHeader';
import ProductImageGallery from '../components/products/ProductImageGallery';
import ProductTabs from '../components/products/ProductTabs';

const ProductDetailPage: React.FC = () => {
  const { category, productId } = useParams<{ category: string; productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      const foundProduct = getProductById(productId || '');
      setProduct(foundProduct || null);
      setLoading(false);
      
      // Reset state when product changes
      setActiveImage(0);
      setActiveTab('description');
    };
    
    fetchProduct();
    window.scrollTo(0, 0);
  }, [productId]);
  
  // Error handling for missing params
  if (!category || !productId) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Invalid URL</h1>
          <p className="text-gray-600">Please check the product URL and try again.</p>
        </div>
      </div>
    );
  }
  
  // Loading state
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  // Product not found
  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-4">The requested product could not be found.</p>
          <a href="/products" className="text-primary-600 hover:text-primary-700 font-medium">
            Browse All Products
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{product.seoTitle || `${product.name} | Global Technocrats`}</title>
        <meta name="description" content={product.seoDescription || product.description} />
        <meta name="keywords" content={product.seoKeywords || `${product.name}, ${product.category}, security, defense`} />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container py-8">
          <ProductHeader product={product} category={category} />
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div>
              <ProductImageGallery
                product={product}
                activeImage={activeImage}
                onImageChange={setActiveImage}
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="lg:sticky lg:top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Overview</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                  
                  {product.keyBenefits && product.keyBenefits.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {product.keyBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <ProductTabs
            product={product}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;