import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Global Technocrats</title>
        <meta name="description" content="Get in touch with Global Technocrats for defense and security technology solutions. Contact our experts for consultations, support, and partnership opportunities." />
        <meta name="keywords" content="contact, defense technology, security solutions, consultation, support" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Let's Build the Future of{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Security Together
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to transform your security infrastructure? Our team of experts 
              is here to help you navigate the complex world of defense technology 
              and find solutions tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form" 
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                Start Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              
              <a 
                href="tel:+91-124-4982000" 
                className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Call Now: +91-124-4982000
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <ContactInfo />
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Global Technocrats?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">24/7</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">
                  Round-the-clock technical support and consultation services
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">15+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Years Experience</h3>
                <p className="text-gray-600 text-sm">
                  Deep expertise in defense and security technology solutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">50+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Projects</h3>
                <p className="text-gray-600 text-sm">
                  Successfully delivered projects across multiple continents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;