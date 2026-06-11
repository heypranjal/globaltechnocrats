import React from 'react';
import { LinkedinIcon, MapPin, Calendar, Award, ArrowUpRight } from 'lucide-react';

interface Executive {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface TechLeadershipGridProps {
  executives: Executive[];
}

const TechLeadershipGrid: React.FC<TechLeadershipGridProps> = ({ executives }) => {
  const getExperienceYears = (bio: string): string => {
    if (bio.includes('six-decade')) return '60+ years';
    if (bio.includes('35 years')) return '35+ years';
    if (bio.includes('20 years')) return '20+ years';
    if (bio.includes('18 years')) return '18+ years';
    return '15+ years';
  };

  const getSpecialty = (position: string): string => {
    if (position.includes('Sales')) return 'Sales & Marketing';
    if (position.includes('Civil')) return 'Civil Engineering';
    if (position.includes('Business')) return 'Business Development';
    if (position.includes('Production')) return 'Manufacturing';
    return 'Leadership';
  };

  const getKeyStrength = (bio: string): string => {
    if (bio.includes('Japanese multinational')) return 'International Relations';
    if (bio.includes('CPWD')) return 'Infrastructure Development';
    if (bio.includes('digital transformation')) return 'Digital Innovation';
    if (bio.includes('manufacturing')) return 'Production Excellence';
    return 'Strategic Leadership';
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-600">
            <Award className="w-4 h-4" />
            Leadership Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Executive <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Industry veterans driving innovation across every division
          </p>
          
          {/* Decorative Separator */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Executive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {executives.map((executive, index) => (
            <div
              key={executive.id}
              className="group relative"
            >
              {/* Luxury Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                
                {/* Top Accent Line */}
                <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative p-8">
                  {/* Executive Header */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Professional Profile Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 border-2 border-white shadow-lg group-hover:shadow-xl transition-all duration-500">
                        <img
                          src={executive.image}
                          alt={executive.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(executive.name)}&size=200&background=423c81&color=ffffff&bold=true`;
                          }}
                        />
                      </div>
                      
                      {/* Status Indicator */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-sm">
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>

                    {/* Executive Information */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                        {executive.name.replace(' (MD)', '')}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3 text-lg">{executive.position}</p>
                      
                      {/* Quick Stats */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>{getExperienceYears(executive.bio)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>India</span>
                        </div>
                      </div>
                    </div>

                    {/* Corner Arrow */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div className="space-y-4 mb-6">
                    {/* Specialty Badge */}
                    <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-all duration-300">
                      <Award className="w-4 h-4" />
                      {getSpecialty(executive.position)}
                    </div>

                    {/* Key Strength */}
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-gray-700">Key Strength:</span> {getKeyStrength(executive.bio)}
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-blue-100 transition-all duration-300">
                    {/* Connect Button */}
                    <button className="group/btn flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                      <LinkedinIcon className="w-4 h-4" />
                      Connect
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>

                    {/* View Profile Link */}
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                      View Profile
                    </button>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-10">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm font-light">
              Meet our complete leadership team
            </p>
            <button className="group bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5">
              <span>View All Executives</span>
              <ArrowUpRight className="inline-block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechLeadershipGrid;