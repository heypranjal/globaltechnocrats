import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { contactLocations } from '../../data/contact';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Ready to secure your future? Contact our team of experts to discuss your 
          defense and security technology needs. We're here to help you find the 
          perfect solution.
        </p>
      </div>

      {/* Contact Locations */}
      <div className="space-y-8">
        {contactLocations.map((location, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {location.name}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                    <div>
                      <p>{location.address}</p>
                      <p>{location.city}, {location.country}</p>
                    </div>
                  </div>
                  
                  {location.phone && (
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <a 
                        href={`tel:${location.phone}`} 
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {location.phone}
                      </a>
                    </div>
                  )}
                  
                  {location.email && (
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <a 
                        href={`mailto:${location.email}`} 
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {location.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Contact Info */}
      <div className="border-t pt-8">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Contact</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Globe className="w-5 h-5 mr-3 text-primary-600" />
            <a 
              href="https://globaltechnocrats.in" 
              className="text-primary-600 hover:text-primary-700"
            >
              www.globaltechnocrats.in
            </a>
          </div>
          
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-primary-600" />
            <a 
              href="mailto:info@globaltechnocrats.in" 
              className="text-primary-600 hover:text-primary-700"
            >
              info@globaltechnocrats.in
            </a>
          </div>
          
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-primary-600" />
            <a 
              href="tel:+91-124-4982000" 
              className="text-primary-600 hover:text-primary-700"
            >
              +91-124-4982000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;