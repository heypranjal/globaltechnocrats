import React, { useEffect, useState } from 'react';
import { Users, ArrowDown } from 'lucide-react';

const TechHeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.1}deg)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-600/15 rounded-full animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.08}px)`,
            animationDelay: '2s'
          }}
        />
        
        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-12 text-sm font-medium text-gray-600">
          <Users className="w-4 h-4" />
          Global Technocrats Team
        </div>

        {/* Hero Typography with 3D Effect */}
        <div className="space-y-8 mb-16">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light text-gray-900 tracking-tight leading-none">
            <span className="block opacity-90">Our</span>
            <span 
              className="block text-blue-600 font-medium"
              style={{
                textShadow: '0 4px 8px rgba(59, 130, 246, 0.1)',
                transform: `translateZ(${scrollY * 0.01}px)`
              }}
            >
              People
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            Meet the exceptional minds driving innovation in defense technology
          </p>
        </div>

        {/* Minimal CTA */}
        <div className="flex flex-col items-center gap-8">
          <button className="group relative bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <span>Explore Team</span>
            <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-light tracking-wide">Scroll to discover</span>
            <ArrowDown 
              className="w-5 h-5 animate-bounce" 
              style={{ animationDuration: '2s' }}
            />
          </div>
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
    </section>
  );
};

export default TechHeroSection;