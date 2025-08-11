import React from 'react';
import { LinkedinIcon } from 'lucide-react';

interface Executive {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface LuxuryExecutiveProfileProps {
  executive: Executive;
  isMD?: boolean;
}

const LuxuryExecutiveProfile: React.FC<LuxuryExecutiveProfileProps> = ({ executive, isMD = false }) => {
  if (isMD) {
    return (
      <div className="max-w-4xl mx-auto mb-20">
        <div className="relative">
          {/* Luxury Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-primary-50/20 rounded-3xl"></div>
          <div className="absolute -inset-1 bg-gradient-to-br from-primary-100/40 via-transparent to-primary-100/40 rounded-3xl blur-sm"></div>
          
          {/* Main Card */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-primary-100/50">
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            
            <div className="p-8 md:p-12">
              {/* Profile Image with Luxury Frame */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Outer Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary-200/30 to-primary-300/20 rounded-full blur-lg"></div>
                  
                  {/* Premium Frame */}
                  <div className="relative w-48 h-48 p-1 bg-gradient-to-br from-primary-400 via-primary-300 to-primary-500 rounded-full">
                    <div className="w-full h-full bg-white p-2 rounded-full">
                      <img
                        src={executive.image}
                        alt={executive.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary-400 rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary-400 rounded-bl-lg"></div>
                </div>
              </div>

              {/* Executive Information */}
              <div className="text-center mb-8">
                <h3 className="text-4xl font-heading font-bold text-gray-900 mb-3 tracking-tight">
                  {executive.name}
                </h3>
                <div className="relative inline-block">
                  <p className="text-xl text-primary-600 font-semibold px-6 py-2 bg-primary-50 rounded-full border border-primary-100">
                    {executive.position}
                  </p>
                </div>
              </div>

              {/* Bio with Luxury Typography */}
              <div className="prose prose-lg max-w-none text-center mb-8">
                <p className="text-gray-700 leading-relaxed font-light text-lg whitespace-pre-line">
                  {executive.bio}
                </p>
              </div>
              
              {/* LinkedIn Link */}
              <div className="flex justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group">
      <div className="relative">
        {/* Luxury Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/60 rounded-2xl transition-all duration-500 group-hover:from-primary-50/30 group-hover:via-white group-hover:to-primary-50/20"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-100/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Main Card */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100/80 group-hover:border-primary-200/60 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
          {/* Profile Image */}
          <div className="flex justify-center pt-8 mb-6">
            <div className="relative">
              {/* Premium Frame */}
              <div className="w-32 h-32 p-1 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 group-hover:from-primary-300 group-hover:via-primary-200 group-hover:to-primary-400 rounded-full transition-all duration-500">
                <div className="w-full h-full bg-white p-1 rounded-full">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-8">
            {/* Executive Information */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 tracking-tight">
                {executive.name}
              </h3>
              <p className="text-primary-600 font-medium bg-primary-50 px-4 py-1 rounded-full border border-primary-100 inline-block">
                {executive.position}
              </p>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                {executive.bio}
              </p>
            </div>
            
            {/* LinkedIn Link */}
            <div className="flex justify-center">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200 group-hover:text-primary-700"
              >
                <LinkedinIcon className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryExecutiveProfile;