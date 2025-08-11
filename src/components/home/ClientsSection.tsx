import React from 'react';
import { Shield, Globe, Award } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ClientsSection: React.FC = () => {
  const [sectionRef, isInView] = useInView();

  return (
    <section 
      ref={sectionRef}
      className={`py-11 section-alternate-luxury section-luxury opacity-0 transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className={`mb-10 lg:mb-0 lg:w-1/3 opacity-0 transition-all duration-1000 delay-200 text-center lg:text-left ${
            isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
          }`}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Trusted by Leading Organizations</h3>
            <p className="text-gray-600">
              Our solutions are deployed by defense forces, government agencies, and security organizations worldwide.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 lg:w-2/3 opacity-0 transition-all duration-1000 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
          }`}>
            <div className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-50 rounded-full mb-3 sm:mb-4 shadow-subtle opacity-0 transition-all duration-700 delay-600 ${
                isInView ? 'opacity-100 scale-100' : 'scale-50'
              }`}>
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <span className="text-base sm:text-lg font-semibold text-gray-900">Defence Forces</span>
              <div className="mt-2 text-sm text-gray-600 flex flex-col gap-1">
                <span>Indian Army</span>
                <span>Indian Navy</span>
                <span>Vayusena</span>
                
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full mb-4 shadow-subtle opacity-0 transition-all duration-700 delay-800 ${
                isInView ? 'opacity-100 scale-100' : 'scale-50'
              }`}>
                <Globe className="w-8 h-8 text-primary-500" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Government Agencies</span>
              <div className="mt-2 text-sm text-gray-600 flex flex-col gap-1">
                <span>BSF</span>
                <span>CISF</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full mb-4 shadow-subtle opacity-0 transition-all duration-700 delay-1000 ${
                isInView ? 'opacity-100 scale-100' : 'scale-50'
              }`}>
                <Award className="w-8 h-8 text-primary-500" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Security Organizations</span>
              <div className="mt-2 text-sm text-gray-600 flex flex-col gap-1">
                <span>J&K Police</span>
                <span>Jharkhand Police</span>
                <span>Mahendra Defence Systems</span>
                <span>Reliance Industries Limited</span>
                <span>Larsen & Toubro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;