import React, { useEffect, useState } from 'react';
import { Users, ArrowDown, Award, Shield, Zap } from 'lucide-react';

const TechHeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Premium Floating Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-primary-500/30 to-orange-500/30 rounded-full animate-pulse blur-sm"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-2 h-2 bg-gradient-to-r from-orange-400/40 to-primary-400/40 rounded-full animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.1}deg)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-gradient-to-r from-primary-600/25 to-blue-600/25 rounded-full animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.08}px)`,
            animationDelay: '2s'
          }}
        />
        
        {/* Luxury Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        {/* Elegant Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(7, 42, 200, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7, 42, 200, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-12 text-sm font-semibold text-white shadow-lg">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-primary-500 to-orange-500 p-1.5 rounded-full">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span>20+ Years of Excellence</span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <span className="text-gray-300">Defense Technology Leaders</span>
        </div>

        {/* Luxury Hero Typography */}
        <div className="space-y-12 mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none">
            <span className="block opacity-90 mb-4">Meet Our</span>
            <span 
              className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold"
              style={{
                textShadow: '0 8px 16px rgba(251, 146, 60, 0.15)',
                transform: `translateZ(${scrollY * 0.01}px)`
              }}
            >
              Visionary Team
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            The exceptional minds behind India's premier defense technology company, 
            pioneering AI-driven security solutions and innovative defense systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/80">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium">DRDO Partnerships</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium">60,000+ MT Capacity</span>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="flex flex-col items-center gap-10">
          <button className="group relative bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-2xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-primary-500/20">
            <span className="relative z-10">Explore Our Team</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm font-light tracking-wide">Scroll to discover</span>
            <ArrowDown 
              className="w-5 h-5 animate-bounce" 
              style={{ animationDuration: '2s' }}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechHeroSection;