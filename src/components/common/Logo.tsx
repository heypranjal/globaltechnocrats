import React from 'react';

const Logo: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <img 
        src="https://pbkxpylwatscfjzbmwur.supabase.co/storage/v1/object/public/globaltechnocrats//Global%20Technocrat%20Logo.png"
        alt="Global Technocrats Logo"
        className="h-20 w-auto"
      />
      <div className="block group">
        <div className="flex flex-col">
          <span className={`font-heading font-bold text-2xl transition-colors ${isScrolled ? 'text-gray-900 group-hover:text-primary-900' : 'text-white group-hover:text-primary-200'}`}>GLOBAL</span>
          <span className={`font-heading font-bold text-2xl transition-colors ${isScrolled ? 'text-primary-900 group-hover:text-primary-700' : 'text-primary-900 group-hover:text-primary-700'}`}>TECHNOCRATS</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
