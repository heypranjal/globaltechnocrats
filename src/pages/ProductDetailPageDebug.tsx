import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProductDetailPageDebug: React.FC = () => {
  const { category, productId } = useParams<{ category: string; productId: string }>();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <h1>Debug Product Page</h1>
        <p><strong>Category:</strong> {category || 'undefined'}</p>
        <p><strong>Product ID:</strong> {productId || 'undefined'}</p>
        <p><strong>URL:</strong> {window.location.pathname}</p>
        
        <Link to="/products" className="btn btn-primary mt-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPageDebug;