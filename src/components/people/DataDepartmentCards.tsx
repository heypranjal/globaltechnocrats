import React, { useState, useEffect } from 'react';
import { MapPin, ArrowUpRight, TrendingUp } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  description: string;
  icon: React.ReactElement;
  locations: string[];
  highlights?: string[];
}

interface DataDepartmentCardsProps {
  departments: Department[];
}

const DataDepartmentCards: React.FC<DataDepartmentCardsProps> = ({ departments }) => {
  const [animatedNumbers, setAnimatedNumbers] = useState<{ [key: string]: number }>({});
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  // Animate numbers when cards become visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            if (cardId && !visibleCards.has(cardId)) {
              setVisibleCards(prev => new Set([...prev, cardId]));
              
              // Animate numbers for this card
              const dept = departments.find(d => d.id === cardId);
              if (dept) {
                animateNumber(`${cardId}-locations`, dept.locations.length);
              }
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [departments, visibleCards]);

  const animateNumber = (key: string, target: number) => {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 50);
  };

  const getGrowthPercentage = (): number => {
    // Simulate growth percentages for capabilities expansion
    return 15;
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-600">
            <TrendingUp className="w-4 h-4" />
            Department Analytics
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our <span className="text-blue-600">Divisions</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Data-driven insights into our specialized teams and their impact
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((department) => (
            <div
              key={department.id}
              data-card-id={department.id}
              className="group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                      {React.cloneElement(department.icon, { className: "w-6 h-6" })}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors duration-300">
                        {department.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        +{getGrowthPercentage()}% capabilities growth
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0" />
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {department.description}
                </p>

                {/* Key Highlights */}
                {department.highlights && (
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Key Capabilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {department.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center bg-gradient-to-r from-primary-50 to-orange-50 text-primary-700 px-3 py-1.5 rounded-full text-xs font-medium border border-primary-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Data Visualization */}
                <div className="space-y-4">
                  {/* Locations */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl group-hover:bg-primary-50/50 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Operating Locations</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {animatedNumbers[`${department.id}-locations`] || 0}
                      </div>
                      <div className="text-xs text-gray-500">Sites</div>
                    </div>
                  </div>
                </div>

                {/* Location Tags */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Presence</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {department.locations.map((location, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 p-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {[...new Set(departments.flatMap(dept => dept.locations))].length}
              </div>
              <div className="text-sm font-medium text-gray-600">Operating Locations</div>
              <div className="text-xs text-gray-500 mt-1">Strategic presence</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {departments.length}
              </div>
              <div className="text-sm font-medium text-gray-600">Specialized Divisions</div>
              <div className="text-xs text-gray-500 mt-1">Expert teams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDepartmentCards;