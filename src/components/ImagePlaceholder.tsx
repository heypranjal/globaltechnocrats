import React from 'react';

interface ImagePlaceholderProps {
  text?: string;
  height?: string;
  productType?: 'fencing' | 'gates' | 'default';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  text = 'Image Placeholder', 
  height = 'h-64',
  productType = 'default'
}) => {
  // Different background colors based on product type
  const bgColor = {
    fencing: 'bg-primary-100',
    gates: 'bg-success-100',
    default: 'bg-gray-200'
  }[productType];
  
  return (
    <div className={`w-full ${height} ${bgColor} flex items-center justify-center rounded-lg shadow-sm`}>
      <span className="text-gray-600 font-medium">{text}</span>
    </div>
  );
};
