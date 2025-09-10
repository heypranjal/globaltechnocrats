import React from 'react';
import { Helmet } from 'react-helmet';
import type { Product } from '../data/products';
import ProductHeader from '../components/products/ProductHeader';
import ProductImageGallery from '../components/products/ProductImageGallery';
import ProductTabs from '../components/products/ProductTabs';

interface FencingProductTemplateProps {
  product: Product;
  category: string;
  activeImage: number;
  onImageChange: (index: number) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const FencingProductTemplate: React.FC<FencingProductTemplateProps> = ({
  product,
  category,
  activeImage,
  onImageChange,
  activeTab,
  onTabChange
}) => {
  return (
    <>
      <Helmet>
        <title>{product.seoTitle || `${product.name} | Global Technocrats`}</title>
        <meta name="description" content={product.seoDescription || product.description} />
        <meta name="keywords" content={product.seoKeywords || `${product.name}, ${product.category}, security, defense`} />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container py-8 px-4 md:px-6 lg:px-8">
          <ProductHeader product={product} category={category} />
          
          {/* Product Images - Full Width */}
          <div className="mb-12">
            <ProductImageGallery
              product={product}
              activeImage={activeImage}
              onImageChange={onImageChange}
            />
          </div>
          
          {/* Product Overview - Below Images */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Description */}
              <div className="prose max-w-none">
                <h3 className="font-semibold text-gray-900 mb-3">Technical Excellence</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                
                {product.technicalDescription && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Advanced Engineering</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {product.technicalDescription.substring(0, 500)}...
                    </p>
                  </div>
                )}
              </div>
              
              {/* Right Column - Key Benefits */}
              {product.keyBenefits && product.keyBenefits.length > 0 && (
                <div className="h-full flex flex-col">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                  <ul className="space-y-3 flex-1">
                    {product.keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Product Tabs */}
          <ProductTabs
            product={product}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />
        </div>
      </div>
    </>
  );
};

export default FencingProductTemplate;