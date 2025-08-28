import React from 'react';
import { Users, Award, Heart } from 'lucide-react';

const CareersHero: React.FC = () => {
  return (
    <section className="bg-secondary-900 py-24 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Join Our Mission to{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Secure Tomorrow
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Be part of a team that's revolutionizing defense and security technologies. 
            We're looking for passionate individuals who want to make a real impact on global security.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaborative Culture</h3>
              <p className="text-gray-300 text-sm">
                Work with brilliant minds in a supportive, innovative environment
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Career Growth</h3>
              <p className="text-gray-300 text-sm">
                Continuous learning opportunities and clear advancement paths
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Meaningful Work</h3>
              <p className="text-gray-300 text-sm">
                Contribute to projects that protect communities and nations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;