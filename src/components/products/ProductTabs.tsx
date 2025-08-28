import React from 'react';
import { Shield, TrendingUp, CheckCircle } from 'lucide-react';
import type { Product } from '../../data/products';

interface ProductTabsProps {
  product: Product;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  product,
  activeTab,
  onTabChange
}) => {
  const tabs = [
    { id: 'description', label: 'Description', icon: Shield },
    { id: 'features', label: 'Features', icon: CheckCircle },
    { id: 'specifications', label: 'Specifications', icon: TrendingUp },
    { id: 'applications', label: 'Applications', icon: Shield }
  ];
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            {product.technicalDescription && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technical Details</h4>
                <p className="text-gray-700 leading-relaxed">{product.technicalDescription}</p>
              </div>
            )}
          </div>
        );
      
      case 'features':
        return (
          <div>
            {product.features && product.features.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No features listed for this product.</p>
            )}
          </div>
        );
      
      case 'specifications':
        return (
          <div>
            {product.specifications && Object.keys(product.specifications).length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-3">
                    <dt className="font-medium text-gray-900 mb-1">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </dt>
                    <dd className="text-gray-700">{value}</dd>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No specifications available for this product.</p>
            )}
          </div>
        );
      
      case 'applications':
        return (
          <div>
            {product.applications && product.applications.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {product.applications.map((application, index) => (
                  <div key={index} className="flex items-start">
                    <Shield className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No applications listed for this product.</p>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="mt-12">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="min-h-[200px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;