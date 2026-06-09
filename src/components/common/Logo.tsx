import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <div className="flex items-center">
      <img
        src="https://res.cloudinary.com/dy93kgo03/image/upload/v1780980064/123_b1bpcz.png"
        alt="Global Technocrats Logo"
        className="h-44 w-auto -my-12 transition-all duration-300"
      />
    </div>
  );
};

export default Logo;
