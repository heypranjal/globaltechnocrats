import React from 'react';

interface Department {
  id: string;
  name: string;
  description: string;
  icon: React.ReactElement;
  members: number;
  projects: number;
  locations: string[];
}

interface LuxuryDepartmentCardProps {
  department: Department;
}

const LuxuryDepartmentCard: React.FC<LuxuryDepartmentCardProps> = ({ department }) => {
  return (
    <div className="group h-full">
      <div className="relative h-full">
        {/* Luxury Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white rounded-3xl"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-100/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        
        {/* Glass Morphism Card */}
        <div className="relative h-full bg-white/70 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-3 overflow-hidden">
          {/* Subtle Top Accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent"></div>
          
          <div className="p-8 h-full flex flex-col">
            {/* Icon Section with Luxury Treatment */}
            <div className="mb-8">
              <div className="relative inline-block">
                {/* Icon Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary-50 via-primary-100/50 to-primary-50 rounded-2xl flex items-center justify-center border border-primary-200/50 group-hover:border-primary-300/70 transition-all duration-500">
                  <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                    {React.cloneElement(department.icon, { className: "w-8 h-8" })}
                  </div>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary-400/60 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                {department.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                {department.description}
              </p>
              
              {/* Statistics with Luxury Design */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative group/stat">
                  <div className="bg-gradient-to-br from-primary-50/80 via-white to-primary-50/60 rounded-2xl p-4 text-center border border-primary-100/50 group-hover/stat:border-primary-200/70 transition-all duration-300 group-hover/stat:shadow-lg">
                    {/* Stat Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-all duration-300"></div>
                    
                    <div className="relative">
                      <span className="block text-2xl font-bold text-primary-600 mb-1 group-hover/stat:text-primary-700 transition-colors duration-300">
                        {department.members}
                      </span>
                      <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                        Members
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative group/stat">
                  <div className="bg-gradient-to-br from-primary-50/80 via-white to-primary-50/60 rounded-2xl p-4 text-center border border-primary-100/50 group-hover/stat:border-primary-200/70 transition-all duration-300 group-hover/stat:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-all duration-300"></div>
                    
                    <div className="relative">
                      <span className="block text-2xl font-bold text-primary-600 mb-1 group-hover/stat:text-primary-700 transition-colors duration-300">
                        {department.projects}
                      </span>
                      <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                        Projects
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative group/stat">
                  <div className="bg-gradient-to-br from-primary-50/80 via-white to-primary-50/60 rounded-2xl p-4 text-center border border-primary-100/50 group-hover/stat:border-primary-200/70 transition-all duration-300 group-hover/stat:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-all duration-300"></div>
                    
                    <div className="relative">
                      <span className="block text-2xl font-bold text-primary-600 mb-1 group-hover/stat:text-primary-700 transition-colors duration-300">
                        {department.locations.length}
                      </span>
                      <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                        Locations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary-300/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryDepartmentCard;