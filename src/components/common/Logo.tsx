import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <div className="flex items-center gap-4">
      <div className={`relative ${!isScrolled ? 'drop-shadow-lg' : ''}`}>
        <img 
          src="https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/globaltechnocrats//Global%20Technocrat%20Logo.png"
          alt="Global Technocrats Logo"
          className={`h-20 w-auto transition-all duration-300 ${
            !isScrolled ? 'filter brightness-0 invert' : ''
          }`}
        />
      </div>
      <div className="block group">
        <div className="flex flex-col">
          <span className={`font-heading font-bold text-2xl transition-colors drop-shadow-sm ${isScrolled ? 'text-gray-900 group-hover:text-primary-900' : 'text-white group-hover:text-primary-200'}`}>GLOBAL</span>
          <span className={`font-heading font-bold text-2xl transition-colors drop-shadow-sm ${isScrolled ? 'text-primary-900 group-hover:text-primary-700' : 'text-white group-hover:text-primary-200'}`}>TECHNOCRATS</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
