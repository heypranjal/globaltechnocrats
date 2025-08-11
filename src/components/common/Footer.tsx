import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram, 
  ArrowRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 text-gray-800">
      <div className="container">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-primary-500" />
              <div className="ml-2">
                <span className="font-heading font-bold text-lg text-gray-900">GLOBAL</span>
                <span className="font-heading font-bold text-lg text-primary-500">TECHNOCRATS</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Leading Defence Tech Company operating in India and Middle East, providing innovative security and defense solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                <span className="text-gray-600">
                  Corporate Headquarters, Delhi NCR, India
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3" />
                <span className="text-gray-600">+91 1234 567 890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3" />
                <span className="text-gray-600">info@globaltechnocrats.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-200 pb-3">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Our Story
                </Link>
              </li>
              <li>
                <Link to="/people" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> People
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Careers
                </Link>
              </li>
              <li>
                <Link to="/investor-relations" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-200 pb-3">Product Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/fencing" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Fencing Solutions
                </Link>
              </li>
              <li>
                <Link to="/products/gates" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Gates & Barriers
                </Link>
              </li>
              <li>
                <Link to="/products/ai" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Advanced AI Products
                </Link>
              </li>
              <li>
                <Link to="/products/drdo" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> DRDO TOT
                </Link>
              </li>
              <li>
                <Link to="/products/defence" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Defence Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-200 pb-3">Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive updates on new products, company news, and industry insights.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary py-3"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center mt-6 space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Global Technocrats. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-primary-600">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-primary-600">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 text-sm hover:text-primary-600">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;