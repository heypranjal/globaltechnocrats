import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Target, Award, TrendingUp, Users, Globe, Factory, Building2, CheckCircle, Lightbulb, Lock, Zap } from 'lucide-react';
import { getImageUrl, getImageAlt } from '../data/mediaAssets';

const OurStoryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Story | Global Technocrats</title>
        <meta name="description" content="Learn about the history, mission, and values of Global Technocrats - a leading defense technology company with a commitment to innovation and excellence." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white rounded-full py-2 px-6 mb-8 text-sm font-medium border border-white/20">
              <Award className="w-4 h-4 mr-2" /> 
              20+ Years of Defense Excellence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Unlocking the 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Future
              </span>
              <br />of Security
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming India's premier defense technology company, 
              specializing in AI-driven security solutions and innovative defense systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                ISO Certified Manufacturing
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                60,000+ MT Annual Capacity
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-orange-400" />
                DRDO Collaborations
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-orange-50 text-primary-700 rounded-full py-2 px-6 mb-8 text-sm font-medium border border-primary-100">
                  <Shield className="w-5 h-5 mr-2" /> Our Purpose
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Mission & Vision
                </h2>
              </div>
              
              <div className="space-y-10">
                <div className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        To pioneer innovative defense and security solutions that safeguard our nation's borders, 
                        critical infrastructure, and strategic installations. We combine cutting-edge AI technology 
                        with engineering excellence to deliver comprehensive security systems that exceed our clients' expectations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        To be the most trusted name in defense technology, recognized globally for pushing 
                        technological boundaries and setting new standards in security innovation. We envision 
                        a future where our solutions contribute to national security and global peace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-orange-500/10 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src={getImageUrl('company', 'story', 'team-meeting')} 
                  alt={getImageAlt('company', 'story', 'team-meeting')} 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-2xl shadow-2xl max-w-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">20+ Years</p>
                      <p className="text-primary-100">of Excellence</p>
                    </div>
                  </div>
                  <p className="text-sm text-primary-100 leading-relaxed">
                    Pioneering defense technology with AI-driven innovations and strategic partnerships with DRDO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our History Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <Award className="w-4 h-4 mr-1" /> Our Journey
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our History</h2>
            
            <p className="text-lg text-gray-600">
              The story of Global Technocrats is one of innovation, determination, and a relentless pursuit of excellence in defense technology.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2003</h3>
                  <h4 className="text-xl font-bold mb-3">Founding & Early Vision</h4>
                  <p className="text-gray-600">
                    Global Technocrats was established with a vision to become India's leading defense technology company. 
                    Starting with specialized engineering expertise, we began developing innovative security solutions for 
                    borders and high-security installations.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <img 
                  src={getImageUrl('company', 'story', 'innovation')} 
                  alt={getImageAlt('company', 'story', 'innovation')} 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <img 
                  src={getImageUrl('company', 'story', 'manufacturing')} 
                  alt={getImageAlt('company', 'story', 'manufacturing')} 
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div className="md:col-span-1 order-1 md:order-2">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2010</h3>
                  <h4 className="text-xl font-bold mb-3">Manufacturing Excellence</h4>
                  <p className="text-gray-600">
                    Established our first manufacturing unit with ISO 9001, 45001, and 14001 certifications. 
                    Developed in-house coating plant for enhanced product durability and began scaling operations 
                    to meet growing demand for defense solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2015</h3>
                  <h4 className="text-xl font-bold mb-3">DRDO Collaboration</h4>
                  <p className="text-gray-600">
                    Formed strategic partnerships with DRDO and Parallel Flight Technologies, marking our entry 
                    into advanced defense technology. Began development of specialized products like the Mobile Mortar 
                    Solution and DRDO Bhukhari systems.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <img 
                  src={getImageUrl('company', 'story', 'quality-control')} 
                  alt={getImageAlt('company', 'story', 'quality-control')} 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <img 
                  src={getImageUrl('company', 'story', 'global-reach')} 
                  alt={getImageAlt('company', 'story', 'global-reach')} 
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div className="md:col-span-1 order-1 md:order-2">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2020</h3>
                  <h4 className="text-xl font-bold mb-3">AI & Innovation</h4>
                  <p className="text-gray-600">
                    Launched AI-powered threat assessment systems and expanded into Heavy Lift Drones technology. 
                    Established second manufacturing unit, bringing our annual capacity to over 60,000 metric tons 
                    to serve growing defense sector demands.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2023-Present</h3>
                  <h4 className="text-xl font-bold mb-3">Leading the Future</h4>
                  <p className="text-gray-600">
                    Today we stand as India's premier defense technology company, with comprehensive solutions 
                    including Anti Riot Vehicle Vajra, Crash Rated Fencing, and advanced AI systems. Our 20+ years 
                    of expertise continues to drive innovation in border security and defense technology.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <img 
                  src={getImageUrl('company', 'story', 'future-vision')} 
                  alt={getImageAlt('company', 'story', 'future-vision')} 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <Users className="w-4 h-4 mr-1" /> Our Principles
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Values</h2>
            
            <p className="text-lg text-gray-600">
              These fundamental principles guide everything we do at Global Technocrats, from product development to customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="inline-flex w-16 h-16 items-center justify-center bg-primary-500 rounded-lg mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest ethical standards in all aspects of our business. Transparency and honesty form the foundation of our relationships with clients, partners, and employees.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="inline-flex w-16 h-16 items-center justify-center bg-primary-500 rounded-lg mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality in everything we do. We continuously strive to exceed expectations and set new standards in defense technology.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="inline-flex w-16 h-16 items-center justify-center bg-primary-500 rounded-lg mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We foster a culture of innovation and creative problem-solving. We invest heavily in R&D to develop forward-thinking solutions that address emerging security challenges.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="inline-flex w-16 h-16 items-center justify-center bg-primary-500 rounded-lg mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnership. We work closely with our clients, understanding their unique needs and co-creating solutions that deliver real value.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="inline-flex w-16 h-16 items-center justify-center bg-primary-500 rounded-lg mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsibility</h3>
              <p className="text-gray-600">
                We recognize the importance of our role in security and defense. We develop our technologies with a deep sense of responsibility toward the societies we help protect.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="inline-flex w-16 h-16 items-center justify-center bg-primary-500 rounded-lg mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients' success is our success. We are dedicated to understanding their challenges, responding to their needs, and providing solutions that help them achieve their security objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Capabilities Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-orange-50 text-primary-700 rounded-full py-2 px-6 mb-8 text-sm font-medium border border-primary-100">
              <Factory className="w-5 h-5 mr-2" /> Our Capabilities
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              World-Class Infrastructure
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              With over 20 years of expertise in defense technology, we maintain state-of-the-art 
              manufacturing facilities and quality systems that meet international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">ISO Certified</h3>
                <p className="text-gray-600 mb-4">ISO 9001, 45001, 14001 compliant manufacturing processes</p>
                <div className="text-sm text-primary-600 font-semibold">Quality Assured</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">60,000+ MT</h3>
                <p className="text-gray-600 mb-4">Annual manufacturing capacity across two units</p>
                <div className="text-sm text-orange-600 font-semibold">High Capacity</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">In-House Coating</h3>
                <p className="text-gray-600 mb-4">Advanced coating plant for enhanced durability</p>
                <div className="text-sm text-blue-600 font-semibold">Self Sufficient</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">DRDO Partnership</h3>
                <p className="text-gray-600 mb-4">Strategic collaborations with defense research</p>
                <div className="text-sm text-green-600 font-semibold">Innovative</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Message Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full translate-y-48 -translate-x-48"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl transform rotate-6"></div>
                  <div className="relative">
                    <img 
                      src={getImageUrl('company', 'story', 'leadership-team')} 
                      alt={getImageAlt('company', 'story', 'leadership-team')} 
                      className="rounded-3xl shadow-2xl w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full py-2 px-6 mb-8 text-sm font-medium border border-white/20">
                  <Award className="w-5 h-5 mr-2" /> Leadership Message
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Director's Vision
                </h2>
                
                <blockquote className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                  "Our commitment to innovation and national development drives everything we do. 
                  We push technological boundaries to deliver excellence in every project, 
                  believing that collaborative success creates lasting impact.
                  <br /><br />
                  With over two decades in defense technology, we've built partnerships with DRDO 
                  and established manufacturing excellence that serves our nation's security needs. 
                  Our vision extends beyond products – we're building the future of defense technology."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="mr-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-2xl mb-1">Leadership Team</p>
                    <p className="text-white/70 text-lg">Global Technocrats Directors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-orange-50 text-primary-700 rounded-full py-2 px-6 mb-8 text-sm font-medium border border-primary-100">
              <Target className="w-5 h-5 mr-2" /> Join Our Mission
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Be Part of Our Journey
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join us as we continue to unlock the future of security through innovation. 
              Discover opportunities to contribute to India's defense technology advancement.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/careers" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Careers
              </a>
              <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Us
              </a>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Border Security</h3>
                  <p className="text-gray-600 text-sm">Advanced fencing & AI surveillance</p>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Defense Tech</h3>
                  <p className="text-gray-600 text-sm">DRDO partnerships & innovations</p>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Manufacturing</h3>
                  <p className="text-gray-600 text-sm">60,000+ MT annual capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStoryPage;