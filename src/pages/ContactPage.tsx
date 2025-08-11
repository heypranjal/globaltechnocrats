import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Globe, Send, ArrowRight, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    subject: '',
    message: '',
    consent: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        subject: '',
        message: '',
        consent: false
      });
    }, 1500);
  };
  
  const offices = [
    {
      id: 1,
      city: 'New Delhi',
      country: 'India',
      address: 'Corporate Headquarters, Sector 44, Gurugram, Delhi NCR',
      email: 'info@globaltechnocrats.com',
      phone: '+91 1234 567 890'
    },
    {
      id: 2,
      city: 'Dubai',
      country: 'UAE',
      address: 'Dubai Silicon Oasis, Dubai, United Arab Emirates',
      email: 'dubai@globaltechnocrats.com',
      phone: '+971 4 123 4567'
    },
    {
      id: 3,
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'King Fahd Road, Riyadh, Kingdom of Saudi Arabia',
      email: 'riyadh@globaltechnocrats.com',
      phone: '+966 11 123 4567'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Contact Us | Global Technocrats</title>
        <meta name="description" content="Contact Global Technocrats for innovative defense and security solutions. Our team of experts is ready to help with your defense technology needs." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary-900 py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our team of defense technology experts is ready to answer your questions and provide solutions tailored to your security needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map(office => (
              <div 
                key={office.id}
                className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:shadow-custom transition duration-300"
              >
                <div className="flex items-start mb-6">
                  <MapPin className="w-6 h-6 text-primary-500 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold">{office.city}, {office.country}</h3>
                    <p className="text-gray-600 mt-1">{office.address}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary-500 mr-3" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-primary-600">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary-500 mr-3" />
                    <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-primary-600">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-custom overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Contact Form */}
              <div className="p-8 lg:p-12 lg:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below, and our team will get back to you as soon as possible.
                </p>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700 mb-4">
                      Your message has been sent successfully. We'll respond to your inquiry as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="btn bg-green-600 hover:bg-green-700 text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                          required
                        />
                        <span className="text-sm text-gray-600">
                          I consent to Global Technocrats processing my personal data in accordance with the Privacy Policy. *
                        </span>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-full flex items-center justify-center"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Information Sidebar */}
              <div className="bg-primary-600 p-8 lg:p-12 text-white lg:col-span-2">
                <h3 className="text-xl font-bold mb-6">How We Can Help</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold mb-2">Product Inquiries</h4>
                    <p className="text-primary-100 mb-2">
                      Need detailed information about our defense technology solutions?
                    </p>
                    <a href="#" className="inline-flex items-center text-white hover:underline">
                      Request Product Details <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Technical Support</h4>
                    <p className="text-primary-100 mb-2">
                      Existing customers can reach our technical support team.
                    </p>
                    <a href="#" className="inline-flex items-center text-white hover:underline">
                      Contact Support <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Partnership Opportunities</h4>
                    <p className="text-primary-100 mb-2">
                      Interested in becoming a distributor or technology partner?
                    </p>
                    <a href="#" className="inline-flex items-center text-white hover:underline">
                      Partner With Us <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Global Inquiries</h4>
                    <p className="text-primary-100 mb-2">
                      For international business inquiries and opportunities.
                    </p>
                    <div className="flex items-center mt-4">
                      <Globe className="w-5 h-5 mr-2" />
                      <span>www.globaltechnocrats.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What are your delivery timeframes?</h3>
                <p className="text-gray-600">
                  Delivery timeframes vary depending on the product and destination. For standard products, delivery typically takes 4-6 weeks. Custom solutions may require 8-12 weeks. Contact us for specific delivery estimates for your region.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Do you provide installation services?</h3>
                <p className="text-gray-600">
                  Yes, we offer complete installation services for all our security and defense products. Our team of experienced technicians can handle installation, testing, and training for your personnel.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What warranty do your products come with?</h3>
                <p className="text-gray-600">
                  Our products come with a standard 2-year warranty covering manufacturing defects. Extended warranty options are available for most products. Consumable items may have different warranty terms.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Can your products be customized for specific requirements?</h3>
                <p className="text-gray-600">
                  Absolutely. We specialize in customizing our solutions to meet specific operational requirements. Our engineering team can work with you to develop custom specifications for your unique security challenges.
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