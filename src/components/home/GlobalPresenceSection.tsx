import React, { useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const locations = [
  {
    id: 1,
    country: 'India',
    city: 'New Delhi',
    type: 'Headquarters',
    pinPosition: { top: '50%', left: '70%' }
  },
  {
    id: 2,
    country: 'India',
    city: 'Mumbai',
    type: 'Regional Office',
    pinPosition: { top: '60%', left: '67%' }
  },
  {
    id: 3,
    country: 'UAE',
    city: 'Dubai',
    type: 'Regional Office',
    pinPosition: { top: '47%', left: '58%' }
  },
  {
    id: 4,
    country: 'Saudi Arabia',
    city: 'Riyadh',
    type: 'Regional Office',
    pinPosition: { top: '50%', left: '55%' }
  },
  {
    id: 5,
    country: 'Qatar',
    city: 'Doha',
    type: 'Sales Office',
    pinPosition: { top: '48%', left: '57%' }
  }
];

const GlobalPresenceSection: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>();

  return (
    <section 
      ref={sectionRef}
      className={`section section-light opacity-0 transform transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      <div className="container">
        <div className={`section-heading opacity-0 transform transition-all duration-1000 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
        }`}>
          <h2 className="section-title">Our Global Presence</h2>
          <p className="section-subtitle">
            Global Technocrats operates across India and the Middle East, serving governments and organizations with cutting-edge defense technology solutions.
          </p>
        </div>
        
        <div className="mt-12 relative">
          {/* World Map (SVG would be better, but using an image for simplicity) */}
          <div className={`relative opacity-0 transform transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
          }`}>
            <img 
              src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="World Map"
              className="w-full h-auto rounded-xl opacity-70"
            />
            
            {/* Location Pins */}
            {locations.map((location, index) => (
              <div 
                key={location.id}
                className={`absolute animate-pulse opacity-0 transition-all duration-700`}
                style={{ 
                  transitionDelay: `${600 + index * 200}ms`,
                  top: location.pinPosition.top, 
                  opacity: isInView ? 1 : 0,
                  transform: isInView
                    ? 'translate(-50%, -50%) scale(1)'
                    : 'translate(-50%, -50%) scale(0.5)',
                  left: location.pinPosition.left
                }}
              >
                <MapPin className="w-6 h-6 text-primary-500" />
              </div>
            ))}
          </div>
          
          {/* Locations List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location) => (
              <div 
                key={location.id}
                className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex items-start"
              >
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">{location.city}, {location.country}</h4>
                  <p className="text-sm text-gray-600">{location.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
