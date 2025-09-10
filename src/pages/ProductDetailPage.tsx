import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, type Product } from '../data/products';
import FencingProductTemplate from '../templates/FencingProductTemplate';

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
    <FencingProductTemplate
      product={product}
      category={category}
      activeImage={activeImage}
      onImageChange={setActiveImage}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};

export default ProductDetailPage;