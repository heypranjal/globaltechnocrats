import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Product } from '../../data/products';
import { getProductImageUrl } from '../../data/mediaAssets';

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
    <div className="space-y-4 p-[10px] bg-gray-200 rounded-lg">
      {/* Horizontal Layout: 1 Large + 2 Small Technical Images */}
      {images.length >= 3 ? (
        <div className="grid grid-cols-3 gap-4">
          {/* Main Large Image - spans 2 columns */}
          <button 
            onClick={() => onImageChange(0)}
            className="col-span-2 relative aspect-[4/3] bg-white rounded-lg border overflow-hidden hover:border-primary-300 transition-colors cursor-pointer"
          >
            <img
              src={getProductImageUrl(images[activeImage])}
              alt={`${product.name} - Main Image`}
              className="w-full h-full object-cover"
            />
          </button>
          
          {/* Two Technical Images Stacked */}
          <div className="space-y-4">
            <button 
              onClick={() => onImageChange(1)}
              className="relative aspect-[4/3] bg-white rounded-lg border overflow-hidden hover:border-primary-300 transition-colors cursor-pointer"
            >
              <img
                src={getProductImageUrl(images[1])}
                alt={`${product.name} - Technical Image 1`}
                className="w-full h-full object-cover"
              />
            </button>
            <button 
              onClick={() => onImageChange(2)}
              className="relative aspect-[4/3] bg-white rounded-lg border overflow-hidden hover:border-primary-300 transition-colors cursor-pointer"
            >
              <img
                src={getProductImageUrl(images[2])}
                alt={`${product.name} - Technical Image 2`}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      ) : (
        /* Fallback for products with fewer than 3 images */
        <div className="relative aspect-[4/3] bg-white rounded-lg border overflow-hidden">
          <img
            src={getProductImageUrl(images[activeImage] || images[0])}
            alt={`${product.name} - Image ${activeImage + 1}`}
            className="w-full h-full object-cover"
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
      )}
      
      {/* Small thumbnails for reference */}
      {images.length > 1 && (
        <div className="flex gap-2 pt-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageChange(index)}
              className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                index === activeImage 
                  ? 'border-primary-500 ring-2 ring-primary-200' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={getProductImageUrl(image)}
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