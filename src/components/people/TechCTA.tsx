import React from 'react';
import { ArrowRight, Users, MessageCircle, ExternalLink } from 'lucide-react';

const TechCTA: React.FC = () => {
  const ctaOptions = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Our Team",
      description: "Explore current openings and shape the future of defense technology",
      action: "View Positions",
      link: "/careers",
      primary: true
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Connect with HR",
      description: "Have questions? Our HR team is here to help with your career journey",
      action: "Contact HR",
      link: "/contact",
      primary: false
    }
  ];

  const quickLinks = [
    { label: "Careers Portal", href: "/careers" },
    { label: "Employee Benefits", href: "/benefits" },
    { label: "Company Culture", href: "/culture" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gray-50 rounded-full blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-600">
            <Users className="w-4 h-4" />
            Ready to Join Us?
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Start Your <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            Take the next step in your career with Global Technocrats. Join a team that values innovation, 
            excellence, and meaningful impact in defense technology.
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {ctaOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                option.primary
                  ? 'bg-gray-900 text-white border-gray-800 hover:shadow-2xl'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Background Gradient for Primary */}
              {option.primary && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}

              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  option.primary
                    ? 'bg-white/10 text-white group-hover:bg-white/20'
                    : 'bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                }`}>
                  {option.icon}
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-semibold mb-3 transition-colors duration-300 ${
                  option.primary ? 'text-white' : 'text-gray-900 group-hover:text-gray-800'
                }`}>
                  {option.title}
                </h3>
                
                <p className={`text-lg leading-relaxed mb-8 transition-colors duration-300 ${
                  option.primary ? 'text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  {option.description}
                </p>

                {/* CTA Button */}
                <a
                  href={option.link}
                  className={`group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    option.primary
                      ? 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                  }`}
                >
                  {option.action}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Explore More
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about opportunities, benefits, and life at Global Technocrats
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
              >
                {link.label}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-sm text-gray-500">Team Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">96%</div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
            <div className="text-sm text-gray-500">Global Offices</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCTA;