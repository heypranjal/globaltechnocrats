import React from 'react';
import { Shield, Users, Globe } from 'lucide-react';

const PremiumCultureSection: React.FC = () => {
  const cultureFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Innovation-Driven",
      description: "We encourage creative thinking and provide resources for our team members to explore new ideas and approaches."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Environment", 
      description: "Cross-functional teams work together, bringing diverse perspectives to solve complex challenges."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "With offices across India and the Middle East, we offer international career growth opportunities."
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Team collaboration",
      className: "h-60 mb-6"
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Office space", 
      className: "h-72"
    },
    {
      url: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Engineering team",
      className: "h-72 mb-6"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Product testing",
      className: "h-60"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/10 via-transparent to-primary-50/10"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary-100/30 to-primary-200/20 rounded-full blur-2xl"></div>
            
            <div className="relative">
              {/* Section Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-primary-100/50 text-primary-700 rounded-full py-2 px-4 mb-8 text-sm font-medium border border-primary-200/50">
                <Users className="w-4 h-4 mr-2" /> 
                Our Culture
              </div>
              
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                Life at 
                <span className="block text-primary-600">Global Technocrats</span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                We've created a work environment that fosters innovation, collaboration, and professional growth. Our culture is built on mutual respect, intellectual curiosity, and a shared commitment to excellence.
              </p>
              
              {/* Culture Features */}
              <div className="space-y-8 mb-12">
                {cultureFeatures.map((feature, index) => (
                  <div key={index} className="group flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      {/* Premium Icon Container */}
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-50 via-primary-100/70 to-primary-50 rounded-2xl flex items-center justify-center border border-primary-200/50 group-hover:border-primary-300/70 transition-all duration-300 group-hover:shadow-lg">
                          <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                            {feature.icon}
                          </div>
                        </div>
                        {/* Corner Accent */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary-400/50 rounded-tr-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="relative">
                <a 
                  href="/careers" 
                  className="group inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <span>Explore Careers</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Gallery Section */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-100/20 rounded-3xl blur-3xl"></div>
            
            <div className="relative grid grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="space-y-6">
                {galleryImages.slice(0, 2).map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-primary-800/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                    
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className={`${image.className} w-full object-cover group-hover:scale-105 transition-transform duration-700`}
                    />
                    
                    {/* Luxury Border */}
                    <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
                  </div>
                ))}
              </div>
              
              {/* Column 2 with offset */}
              <div className="pt-12 space-y-6">
                {galleryImages.slice(2, 4).map((image, index) => (
                  <div key={index + 2} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-primary-800/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                    
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className={`${image.className} w-full object-cover group-hover:scale-105 transition-transform duration-700`}
                    />
                    
                    <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCultureSection;