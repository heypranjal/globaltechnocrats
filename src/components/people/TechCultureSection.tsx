import React, { useState, useEffect } from 'react';
import { Shield, Users, Globe, TrendingUp, Award, Target, ArrowRight } from 'lucide-react';

const TechCultureSection: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({});
  const [isVisible, setIsVisible] = useState(false);

  const cultureMetrics = [
    { key: 'satisfaction', value: 96, label: 'Employee Satisfaction', unit: '%' },
    { key: 'retention', value: 94, label: 'Retention Rate', unit: '%' },
    { key: 'growth', value: 87, label: 'Internal Promotions', unit: '%' },
    { key: 'diversity', value: 42, label: 'Team Diversity', unit: '%' }
  ];

  const cultureValues = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Innovation-Driven",
      description: "Encouraging creative thinking and providing resources for breakthrough solutions",
      metric: "15+ Patents Filed"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Excellence",
      description: "Cross-functional teams bringing diverse perspectives to complex challenges",
      metric: "8 Global Teams"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "International career growth across India and Middle East operations",
      metric: "6 Countries"
    }
  ];

  const benefits = [
    { icon: <Award className="w-5 h-5" />, title: "Performance Bonuses", desc: "Merit-based rewards" },
    { icon: <Target className="w-5 h-5" />, title: "Skills Development", desc: "Continuous learning" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Career Growth", desc: "Clear progression paths" },
    { icon: <Globe className="w-5 h-5" />, title: "Global Exposure", desc: "International projects" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Animate metrics
            cultureMetrics.forEach((metric) => {
              animateNumber(metric.key, metric.value);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('culture-metrics');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumber = (key: string, target: number) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 40);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-600">
            <Users className="w-4 h-4" />
            Culture Analytics
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Data-Driven <span className="text-blue-600">Culture</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Measurable insights into our work environment and team satisfaction
          </p>
        </div>

        {/* Culture Metrics */}
        <div id="culture-metrics" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {cultureMetrics.map((metric) => (
            <div key={metric.key} className="text-center">
              <div className="relative mb-4">
                {/* Circular Progress */}
                <div className="relative w-24 h-24 mx-auto">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-100"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - (animatedStats[metric.key] || 0) / 100)}`}
                      className="text-blue-600 transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      {animatedStats[metric.key] || 0}{metric.unit}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{metric.label}</h3>
              <p className="text-sm text-gray-500">Industry Leading</p>
            </div>
          ))}
        </div>

        {/* Culture Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {cultureValues.map((value, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
              <div className="inline-flex items-center bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {value.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Employee Benefits & Growth
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive benefits package designed to support your professional and personal development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="group bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
              Explore Career Opportunities
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCultureSection;