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
          <div className="max-w-none">
            {/* Main Description */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl mb-8 border border-slate-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                Product Overview
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">{product.longDescription}</p>
              </div>
            </div>

            {/* Technical Description */}
            {product.technicalDescription && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  Technical Excellence
                </h4>
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">{product.technicalDescription}</div>
                </div>
              </div>
            )}

            {/* Key Benefits */}
            {product.keyBenefits && product.keyBenefits.length > 0 && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200/50">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  Strategic Advantages
                </h4>
                <div className="grid gap-4">
                  {product.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start bg-white/70 p-4 rounded-xl">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 'features':
        return (
          <div>
            {product.features && product.features.length > 0 ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Engineering Features</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Cutting-edge security technology proven in India's most demanding defense environments
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                            <CheckCircle className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-800 leading-relaxed text-base">
                              {feature.split(':')[0] && (
                                <span className="font-semibold text-gray-900 block mb-2">
                                  {feature.split(':')[0]}
                                </span>
                              )}
                              <span className="text-gray-700">
                                {feature.includes(':') ? feature.split(':').slice(1).join(':').trim() : feature}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative gradient border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Feature highlight section */}
                <div className="mt-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-2xl border border-blue-200/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Trusted by India's Elite Security Forces</h4>
                    <p className="text-gray-600">
                      Every feature has been battle-tested across India's most challenging security environments, 
                      from border installations to nuclear facilities.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">No features available for this product.</p>
              </div>
            )}
          </div>
        );
      
      case 'specifications':
        return (
          <div>
            {product.specifications && product.specifications.length > 0 ? (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Technical Specifications</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Precision-engineered to meet the highest standards of security and performance
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="group">
                      <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <TrendingUp className="w-5 h-5 text-slate-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <dt className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                              {spec.name}
                            </dt>
                            <dd className="text-gray-700 leading-relaxed break-words">{spec.value}</dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certification highlights */}
                <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-2xl border border-amber-200/50 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <Shield className="w-8 h-8 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Government Certified Quality</h4>
                    <p className="text-gray-600 mb-4">
                      All specifications comply with Indian Standards (IS codes) and international security protocols
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <span className="bg-white/70 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                        ISO 9001:2015
                      </span>
                      <span className="bg-white/70 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                        Make in India
                      </span>
                      <span className="bg-white/70 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                        ASTM Compliant
                      </span>
                      <span className="bg-white/70 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                        BIS Certified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">No specifications available for this product.</p>
              </div>
            )}
          </div>
        );
      
      case 'applications':
        return (
          <div>
            {product.applications && product.applications.length > 0 ? (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission-Critical Applications</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Protecting India's most vital installations and strategic assets across diverse sectors
                  </p>
                </div>

                <div className="grid gap-6">
                  {product.applications.map((application, index) => (
                    <div key={index} className="group">
                      <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                            <Shield className="w-6 h-6 text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-800 leading-relaxed">
                              {application.split(':')[0] && (
                                <h4 className="font-bold text-gray-900 text-lg mb-3">
                                  {application.split(':')[0]}
                                </h4>
                              )}
                              <p className="text-gray-700 text-base">
                                {application.includes(':') ? application.split(':').slice(1).join(':').trim() : application}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Subtle hover effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary statistics */}
                <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 p-8 rounded-2xl border border-primary-200/50 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <Shield className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Nationwide Security Coverage</h4>
                    <p className="text-gray-600 mb-6">
                      Our anti-climb fencing systems are deployed across multiple critical infrastructure 
                      projects throughout India, from border regions to urban centers.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="bg-white/70 rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary-600 mb-1">358</div>
                          <div className="text-sm text-gray-600">Security Mesh Standard</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/70 rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary-600 mb-1">4mm</div>
                          <div className="text-sm text-gray-600">Wire Diameter</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/70 rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary-600 mb-1">ASTM M5</div>
                          <div className="text-sm text-gray-600">Security Rating</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/70 rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary-600 mb-1">25+</div>
                          <div className="text-sm text-gray-600">Year Warranty</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">No applications listed for this product.</p>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="mt-16">
      {/* Tab Navigation - Sticky */}
      <div className="sticky top-[89px] lg:top-[105px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200/60 mb-12 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="-mb-px flex justify-between w-full">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center justify-center py-6 px-4 border-b-3 font-bold text-base transition-all duration-300 flex-1 ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-white bg-blue-600'
                      : 'border-transparent text-black/70 hover:text-black hover:border-gray-400 hover:bg-gray-50/30'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="min-h-[600px] pb-16">
        <div className="animate-fade-in">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;