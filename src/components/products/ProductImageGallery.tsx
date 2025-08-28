import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Product } from '../../data/products';
import { getImageUrl } from '../../data/mediaAssets';

interface ProductImageGalleryProps {
  product: Product;
  activeImage: number;
  onImageChange: (index: number) => void;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  product,
  activeImage,
  onImageChange
}) => {
  const images = product.images || [];
  
  const nextImage = () => {
    onImageChange((activeImage + 1) % images.length);
  };
  
  const prevImage = () => {
    onImageChange(activeImage === 0 ? images.length - 1 : activeImage - 1);
  };
  
  if (images.length === 0) {
    return (
      <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-white rounded-lg border overflow-hidden">
        <img
          src={getImageUrl(images[activeImage])}
          alt={`${product.name} - Image ${activeImage + 1}`}
          className="w-full h-full object-contain"
        />
        
        {/* Navigation arrows for multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {activeImage + 1} / {images.length}
            </div>
          </>
        )}
      </div>
      
      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageChange(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                index === activeImage 
                  ? 'border-primary-500 ring-2 ring-primary-200' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={getImageUrl(image)}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;