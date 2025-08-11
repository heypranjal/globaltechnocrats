import React, { useState } from 'react';
import { LinkedinIcon, Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

interface Executive {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface ProductShowcaseMDProps {
  executive: Executive;
}

const ProductShowcaseMD: React.FC<ProductShowcaseMDProps> = ({ executive }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'achievements'>('overview');

  const professionalProfile = [
    { label: 'Position', value: 'Managing Director' },
    { label: 'Experience', value: '25+ Years' },
    { label: 'Education', value: 'BA Honours, SP Jain' },
    { label: 'Specialization', value: 'Defence Innovation' },
    { label: 'Key Projects', value: 'Mobile Mortar Platform, UGVs' },
    { label: 'Focus Area', value: 'Indigenous Defence Tech' }
  ];

  const achievements = [
    { icon: <Award className="w-5 h-5" />, title: 'Make in India', desc: 'Technology Transfer Leadership' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Innovation', desc: 'Mobile Mortar Platform' },
    { icon: <Briefcase className="w-5 h-5" />, title: 'UGV Development', desc: 'Tactical Reconnaissance Systems' },
    { icon: <GraduationCap className="w-5 h-5" />, title: 'Vision', desc: 'Self-Reliant Defence Tech' }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-600">
            Leadership Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Visionary Leadership
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Meet the architect behind Global Technocrats' success story
          </p>
        </div>

        {/* Product Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-stretch">
          {/* Product Image - 3 columns */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="relative flex-1">
              {/* Background Element */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-50/50 to-gray-50/50 rounded-3xl" />
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-center">
                <div className="relative">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full max-w-md mx-auto rounded-xl"
                  />
                  
                  {/* Floating Info Card */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">25+</div>
                      <div className="text-sm text-gray-500">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details - 2 columns */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            {/* Title & Position */}
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-2 tracking-tight">
                {executive.name.replace(' (MD)', '')}
              </h3>
              <p className="text-lg text-blue-600 font-medium">{executive.position}</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'experience', label: 'Experience' },
                { key: 'achievements', label: 'Achievements' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    A visionary entrepreneur with a passion for indigenous defence innovation, 
                    driving cutting-edge systems development and self-reliant manufacturing.
                  </p>
                  
                  {/* Professional Profile */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Professional Profile</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {professionalProfile.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                          <span className="text-sm text-gray-500">{spec.label}</span>
                          <span className="text-sm font-medium text-gray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">Indigenous Defence Innovation</h4>
                      <p className="text-sm text-gray-600">Leading advanced defence systems development with focus on self-reliant manufacturing</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">Make in India Initiative</h4>
                      <p className="text-sm text-gray-600">Technology Transfer Agreements for Mobile Mortar Platform development</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">Unmanned Ground Vehicles</h4>
                      <p className="text-sm text-gray-600">Driving UGV development for tactical reconnaissance and logistics support</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-100 mt-auto">
              <button className="group w-full bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                <LinkedinIcon className="w-5 h-5" />
                Connect on LinkedIn
                <div className="absolute inset-0 rounded-xl bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseMD;