import React, { useState } from 'react';
import { LinkedinIcon, Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

interface Executive {
  id: number;
  name: string;
  position: string;
  education?: string;
  experience?: string;
  bio: string;
  image: string;
  specialties?: string[];
}

interface ProductShowcaseMDProps {
  executive: Executive;
}

const ProductShowcaseMD: React.FC<ProductShowcaseMDProps> = ({ executive }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'achievements'>('overview');

  const professionalProfile = [
    { label: 'Position', value: executive.position },
    { label: 'Experience', value: executive.experience || '20+ Years' },
    { label: 'Education', value: executive.education || 'BA Honours in Mathematical Statistics' },
    { label: 'Specialization', value: 'Product Development & Business Strategy' },
    { label: 'Industries', value: 'Defense Tech, Manufacturing, Innovation' },
    { label: 'Focus Area', value: 'Indigenous Defense Innovation' }
  ];

  const achievements = [
    { icon: <Award className="w-5 h-5" />, title: 'Make in India', desc: 'Technology Transfer Leadership' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Innovation', desc: 'Mobile Mortar Platform' },
    { icon: <Briefcase className="w-5 h-5" />, title: 'UGV Development', desc: 'Tactical Reconnaissance Systems' },
    { icon: <GraduationCap className="w-5 h-5" />, title: 'Vision', desc: 'Self-Reliant Defence Tech' }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-primary-200/50 rounded-full px-6 py-3 mb-10 text-sm font-semibold text-primary-700 shadow-lg">
            <div className="bg-gradient-to-r from-primary-500 to-orange-500 p-1.5 rounded-full">
              <Award className="w-4 h-4 text-white" />
            </div>
            <span>Leadership Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent font-semibold">
              Visionary
            </span>
            <span className="block">Leadership</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Meet the architect behind Global Technocrats' transformation into India's premier defense technology company
          </p>
        </div>

        {/* Product Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-stretch">
          {/* Product Image - 3 columns */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="relative flex-1">
              {/* Premium Background Element */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-50/60 to-orange-50/40 rounded-3xl blur-sm" />
              <div className="absolute -inset-4 bg-gradient-to-br from-white/80 to-gray-50/60 rounded-3xl" />
              
              {/* Luxury Image Container */}
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-200/50 h-full flex flex-col justify-center backdrop-blur-sm">
                <div className="relative">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full max-w-md mx-auto rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(executive.name)}&size=500&background=072ac8&color=ffffff&bold=true`;
                    }}
                  />
                  
                  {/* Premium Floating Card */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6 shadow-2xl border border-primary-500/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold">20+</div>
                      <div className="text-sm text-primary-100">Years Excellence</div>
                      <div className="text-xs text-primary-200 mt-1">Defense Innovation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details - 2 columns */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            {/* Enhanced Title & Position */}
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-2 tracking-tight">
                {executive.name}
              </h3>
              <div className="flex items-center gap-3">
                <p className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
                  {executive.position}
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-primary-200 to-transparent"></div>
              </div>
              {executive.specialties && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {executive.specialties.map((specialty, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">
                      {specialty}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Premium Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100/80 backdrop-blur-sm rounded-xl p-1.5 border border-gray-200/50">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'experience', label: 'Experience' },
                { key: 'achievements', label: 'Achievements' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-white text-gray-900 shadow-lg border border-gray-200/50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
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
                    <div className="grid grid-cols-1 gap-4">
                      {professionalProfile.map((spec, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-gray-100 last:border-0 gap-1 sm:gap-3">
                          <span className="text-sm text-gray-500 font-medium min-w-[120px] flex-shrink-0">{spec.label}</span>
                          <span className="text-sm font-medium text-gray-900 text-left sm:text-right leading-relaxed">{spec.value}</span>
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

            {/* Premium CTA */}
            <div className="pt-8 border-t border-gray-200 mt-auto">
              <button className="group w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Connect with Leadership</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseMD;