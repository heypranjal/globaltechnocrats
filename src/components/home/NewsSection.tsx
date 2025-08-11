import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const news = [
  {
    id: 1,
    title: 'Global Technocrats Unveils Next-Generation Mobile Mortar System',
    excerpt: 'The new system offers improved mobility, accuracy, and rapid deployment capabilities for defense forces.',
    date: 'June 15, 2025',
    author: 'Defence Technology Today',
    image: 'https://images.unsplash.com/photo-1569241641262-d5d7beb96d8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/blog/next-generation-mobile-mortar-system'
  },
  {
    id: 2,
    title: 'AI-Powered Image Enhancement Technology Revolutionizes Surveillance Capabilities',
    excerpt: 'Global Technocrats\' advanced AI image enhancement technology provides unprecedented clarity for critical security operations.',
    date: 'May 28, 2025',
    author: 'Tech Security Review',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/blog/ai-powered-image-enhancement'
  },
  {
    id: 3,
    title: 'Global Technocrats Expands Operations to Qatar',
    excerpt: 'The company continues its strategic expansion in the Middle East with a new office in Doha to serve growing regional demand.',
    date: 'April 10, 2025',
    author: 'Business Standard',
    image: 'https://images.unsplash.com/photo-1534370228499-97e7d9db9458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    link: '/blog/expansion-to-qatar'
  }
];

const NewsSection: React.FC = () => {
  const [sectionRef, isInView] = useInView();

  return (
    <section 
      ref={sectionRef}
      className={`section section-gradient opacity-0 transform transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      <div className="container">
        <div className={`section-heading opacity-0 transform transition-all duration-1000 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
        }`}>
          <h2 className="section-title">Latest News & Updates</h2>
          <p className="section-subtitle">
            Stay informed about our latest innovations, company news, and industry insights.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div 
              key={item.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transform transition-all duration-700 opacity-0 ${
                isInView ? 'opacity-100 translate-x-0' : '-translate-x-20'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <Link to={item.link} className="block overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition duration-500 hover:scale-105"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{item.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  <Link to={item.link} className="hover:text-primary-600 transition duration-200">
                    {item.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                
                <Link 
                  to={item.link}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/blog" className="btn btn-primary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;