import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const CTASection: React.FC = () => {
  const [sectionRef, isInView] = useInView();

  return (
    <section 
      ref={sectionRef}
      className={`py-14 md:py-20 section-primary relative overflow-hidden opacity-0 transform transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMTJoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bS02LTI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptLTYtMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      
      <div className="container relative z-10">
        <div className={`max-w-3xl mx-auto bg-white rounded-2xl shadow-custom overflow-hidden opacity-0 transform transition-all duration-1000 delay-300 ${
          isInView ? 'opacity-100 scale-100' : 'scale-95'
        }`}>
          <div className="px-8 py-16 md:p-16 text-center">
            <div className="inline-flex items-center bg-primary-50 border border-primary-100 rounded-full py-1.5 px-4 mb-8">
              <Shield className="w-4 h-4 text-primary-500 mr-2" />
              <span className="text-sm font-medium text-gray-800">Military-Grade Security Solutions</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Enhance Your Defense Capabilities?
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Contact our team of defense technology experts to discuss your security needs and discover how our innovative solutions can protect your critical infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact" 
                className="btn btn-primary px-8 py-3.5 shadow-subtle"
              >
                Request Consultation
              </Link>
              <Link 
                to="/products" 
                className="btn btn-secondary px-8 py-3.5"
              >
                Explore Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;