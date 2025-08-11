import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Target, Award, TrendingUp, Users, Globe } from 'lucide-react';

const OurStoryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Story | Global Technocrats</title>
        <meta name="description" content="Learn about the history, mission, and values of Global Technocrats - a leading defense technology company with a commitment to innovation and excellence." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary-900 py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The journey of Global Technocrats from a small engineering firm to a leading defense technology company.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
                <Shield className="w-4 h-4 mr-1" /> Our Purpose
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission & Vision</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary-50 p-3 rounded-full">
                      <Target className="w-6 h-6 text-primary-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To develop and deliver innovative defense and security solutions that protect people, assets, and critical infrastructure against evolving threats. We strive to combine cutting-edge technology with practical expertise to create effective security systems that meet the specific needs of our clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary-50 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-primary-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the most trusted and innovative partner in defense technology across India and the Middle East, setting new standards for security solutions that contribute to a safer world. We envision a future where our technology helps defense and security agencies stay ahead of emerging threats while operating with maximum efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Global Technocrats Headquarters" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-lg font-bold mb-2">15+ Years of Excellence</p>
                <p className="text-sm text-primary-100">
                  Since our founding in 2010, we've established ourselves as leaders in defense technology innovation.
                </p>
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
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2010</h3>
                  <h4 className="text-xl font-bold mb-3">Founding & Early Years</h4>
                  <p className="text-gray-600">
                    Global Technocrats was founded by a team of defense technology experts with a vision to create innovative security solutions for the modern world. Starting with a small team in Delhi, the company focused initially on physical security systems.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Technocrats Founding Team" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Technocrats Research Center" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div className="md:col-span-1 order-1 md:order-2">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2015</h3>
                  <h4 className="text-xl font-bold mb-3">Expansion & Innovation</h4>
                  <p className="text-gray-600">
                    With several successful projects under our belt, we expanded our operations and established our first R&D center. This period saw the development of our innovative fencing solutions and the beginning of our AI research program.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2018</h3>
                  <h4 className="text-xl font-bold mb-3">International Expansion</h4>
                  <p className="text-gray-600">
                    We established our first international office in Dubai, UAE, marking the beginning of our expansion into the Middle East market. This strategic move helped us better serve regional clients and understand local security challenges.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1582653291997-079b4f122685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Technocrats Dubai Office" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1622219809260-ce065fc5277e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Technocrats Defense Technology" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div className="md:col-span-1 order-1 md:order-2">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2020</h3>
                  <h4 className="text-xl font-bold mb-3">Defense Tech Focus</h4>
                  <p className="text-gray-600">
                    We secured our first major defense contract and formed a specialized Defense Technology Division. This period saw the development of our Mobile Mortar System and other advanced military technologies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">2023-Present</h3>
                  <h4 className="text-xl font-bold mb-3">AI & Advanced Solutions</h4>
                  <p className="text-gray-600">
                    Recent years have seen our greatest technological advancements, with the launch of our AI-powered surveillance solutions, expanded international operations, and a strengthened focus on R&D to stay at the cutting edge of defense technology.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Technocrats AI Technology" 
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
      
      {/* Leadership Message Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Dr. Rajiv Mehta - CEO of Global Technocrats" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div className="md:col-span-2">
                <div className="inline-flex items-center bg-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
                  <Award className="w-4 h-4 mr-1" /> Leadership Message
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">From Our CEO</h2>
                
                <blockquote className="text-lg mb-6 text-primary-100">
                  "At Global Technocrats, we are driven by a simple but powerful mission: to make the world safer through innovation. We understand the critical nature of security challenges in today's complex geopolitical environment, and we are committed to providing solutions that help our clients stay ahead of emerging threats.
                  <br /><br />
                  Our journey has been one of continuous learning and adaptation. We've grown from a small team with big ideas to an international company with a proven track record of delivering cutting-edge defense technology. Throughout this evolution, we've remained true to our core values and our commitment to excellence.
                  <br /><br />
                  The future holds exciting possibilities as we continue to push the boundaries of what's possible in defense technology. I'm proud of what we've achieved so far, but even more excited about what lies ahead."
                </blockquote>
                
                <div>
                  <p className="font-bold text-xl">Dr. Rajiv Mehta</p>
                  <p className="text-primary-200">Founder & CEO, Global Technocrats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Be Part of Our Journey</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us as we continue to push the boundaries of what's possible in defense technology. Explore career opportunities or partnership possibilities with Global Technocrats.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/careers" className="btn btn-primary">
                Explore Careers
              </a>
              <a href="/contact" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStoryPage;