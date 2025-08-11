/**
 * Hero section for Global Technocrats homepage
 * Contains video background and hero content only
 * Updated: 2025-07-11 - Removed duplicate navigation
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: 'scale(1.3)',
            transformOrigin: 'center center'
          }}
        >
          <source src="https://sivirxabbuldqkckjwmu.supabase.co/storage/v1/object/public/rover//hero-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-start justify-center h-full text-white pt-32">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="typography-display-xl text-white drop-shadow-2xl animate-slideUp mb-8">
            <div className="animate-slide-up-delayed">A Defence Tech</div>
            <div className="animate-slide-up-delayed-2">Company</div>
          </h1>
          <p className="typography-hero-subtitle text-white/90 drop-shadow-lg animate-fade-in opacity-0 animation-delay-300 mb-12">
            Pioneering Security Solutions with Advanced Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in opacity-0 animation-delay-600">
            <Link 
              to="/products" 
              className="btn btn-primary typography-button text-lg px-8 py-4 group hover:scale-105 transition-transform duration-300"
            >
              Explore Products <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/our-story" 
              className="btn btn-secondary typography-button text-lg px-8 py-4 backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;