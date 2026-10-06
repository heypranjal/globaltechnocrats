import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, MapPin, ExternalLink } from 'lucide-react';
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
                href="tel:+919810282636"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Call Now: +91 9810282636
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
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Visit Our Office</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Global Technocrats Limited — 139-140, Kapashera, South West Delhi - 110037, India
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Global Technocrats Limited — Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.319762620001!2d77.08243207549704!3d28.530106975720816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzQ4LjQiTiA3N8KwMDUnMDYuMCJF!5e0!3m2!1sen!2sin!4v1791265100219!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-[450px] border-0"
                  allowFullScreen
                />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Global Technocrats Limited
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    139-140, Kapashera<br />
                    South West Delhi - 110037<br />
                    India
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong className="text-gray-900">Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</p>
                    <p><strong className="text-gray-900">Phone:</strong> +91 9810282636</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=139-140,+Kapashera,+South+West+Delhi,+110037,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
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