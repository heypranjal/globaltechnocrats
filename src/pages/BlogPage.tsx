import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronRight, Search, Filter } from 'lucide-react';

// Mock blog data
const blogPosts = [
  {
    id: 'next-generation-mobile-mortar-system',
    title: 'Global Technocrats Unveils Next-Generation Mobile Mortar System',
    excerpt: 'The new system offers improved mobility, accuracy, and rapid deployment capabilities for defense forces.',
    content: 'Global Technocrats today unveiled its next-generation Mobile Mortar System, setting a new standard for indirect fire support platforms. The system features advanced ballistic computing, GPS positioning, and an innovative semi-automatic loading mechanism that significantly reduces crew requirements while enhancing operational efficiency.\n\nDeveloped after extensive field testing and feedback from military users, the system can be deployed in under two minutes and operated by just 2-3 personnel, compared to traditional systems that typically require 4-5 operators. The integrated fire control system ensures first-round accuracy, while the lightweight design allows for transportation via vehicle, helicopter, or parachute drop.\n\n"Our new Mobile Mortar System represents a major leap forward in indirect fire support technology," said Dr. Vikram Singh, Chief Technology Officer at Global Technocrats. "We\'ve focused on making it more mobile, more accurate, and easier to operate, even in the most challenging conditions."\n\nThe system will be available in 60mm, 81mm, and 120mm configurations to meet diverse operational requirements. Initial deliveries to defense forces are scheduled to begin in Q3 2025.',
    date: 'June 15, 2025',
    author: 'Defence Technology Today',
    category: 'Product Launch',
    tags: ['Mobile Mortar System', 'Defence Tech', 'Military Technology'],
    image: 'https://images.unsplash.com/photo-1569241641262-d5d7beb96d8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ai-powered-image-enhancement',
    title: 'AI-Powered Image Enhancement Technology Revolutionizes Surveillance Capabilities',
    excerpt: 'Global Technocrats\' advanced AI image enhancement technology provides unprecedented clarity for critical security operations.',
    content: 'Global Technocrats has released its revolutionary AI-powered Image Enhancer technology, designed to dramatically improve the quality and usability of imagery captured under challenging conditions. The system uses deep learning algorithms to restore clarity to images affected by low light, distance, weather conditions, or poor-quality sensors.\n\nInitial deployments of the technology have shown remarkable results, with security agencies reporting up to 6x improvement in perceptual quality and significant increases in positive identifications from surveillance footage. The system\'s ability to process imagery in near real-time makes it particularly valuable for time-sensitive security operations.\n\n"Traditional image enhancement relies on predetermined filters and adjustments, but our AI system continuously learns and adapts to different degradation factors," explained Dr. Ananya Patel, Head of AI Research at Global Technocrats. "This allows it to recover details that would be permanently lost with conventional enhancement techniques."\n\nThe technology can be deployed as an on-premises solution for highly secure environments or as a cloud-based service for wider accessibility. It supports integration with existing CCTV systems and command centers, allowing organizations to enhance their surveillance capabilities without replacing existing infrastructure.',
    date: 'May 28, 2025',
    author: 'Tech Security Review',
    category: 'Technology',
    tags: ['Artificial Intelligence', 'Surveillance', 'Image Processing'],
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'expansion-to-qatar',
    title: 'Global Technocrats Expands Operations to Qatar',
    excerpt: 'The company continues its strategic expansion in the Middle East with a new office in Doha to serve growing regional demand.',
    content: 'Global Technocrats has announced the opening of its new office in Doha, Qatar, further strengthening its presence in the Middle East region. The expansion comes in response to growing demand for advanced security and defense solutions in the Gulf Cooperation Council (GCC) countries.\n\nThe new office will serve as a regional hub for sales, technical support, and customer service, allowing the company to provide faster response times and more personalized support to its growing client base in Qatar and neighboring countries.\n\n"The Middle East, particularly the Gulf region, represents one of our fastest-growing markets," said Rajiv Mehta, CEO of Global Technocrats. "Our new Doha office demonstrates our commitment to the region and will enable us to build stronger relationships with our customers and partners."\n\nThe company has already secured several major contracts in Qatar, including perimeter security solutions for critical infrastructure facilities and advanced surveillance systems for urban security applications. The new office will initially employ a team of 15 professionals, with plans to double that number by 2026.\n\nGlobal Technocrats now maintains offices in New Delhi and Mumbai (India), Dubai (UAE), Riyadh (Saudi Arabia), and Doha (Qatar), providing comprehensive coverage across the Indian subcontinent and the Middle East.',
    date: 'April 10, 2025',
    author: 'Business Standard',
    category: 'Company News',
    tags: ['International Expansion', 'Qatar', 'Middle East'],
    image: 'https://images.unsplash.com/photo-1534370228499-97e7d9db9458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fencing-solutions-border-security',
    title: 'Advanced Fencing Solutions Enhance Border Security',
    excerpt: 'Global Technocrats delivers comprehensive perimeter protection systems for national border security projects.',
    content: 'Global Technocrats has successfully completed the deployment of its advanced Anti-Climb and Razor Mesh Fencing systems along a 120-kilometer stretch of international border for a major national security project. The comprehensive solution integrates physical barriers with electronic surveillance and intrusion detection systems to create a highly effective security perimeter.\n\nThe project, which took 18 months to complete, employed the company\'s most advanced physical security technologies, including specialized anti-cut materials, tamper-resistant fixings, and corrosion-resistant coatings designed to withstand extreme environmental conditions.\n\n"Border security presents unique challenges that require integrated approaches," said Col. (Ret.) Sanjay Kumar, Head of Perimeter Security at Global Technocrats. "Our solution combines robust physical barriers with smart technology to create a security system that is both highly effective and operationally efficient."\n\nThe installation includes sensor systems that can detect climbing or cutting attempts and automatically alert security personnel through an integrated command and control center. The entire perimeter is also monitored by a network of surveillance cameras with advanced video analytics capabilities.\n\nGlobal Technocrats has established itself as a leading provider of border security solutions, with similar projects completed or underway in multiple countries across Asia and the Middle East.',
    date: 'March 22, 2025',
    author: 'Security & Border Management Today',
    category: 'Case Study',
    tags: ['Border Security', 'Fencing Solutions', 'Perimeter Protection'],
    image: 'https://images.unsplash.com/photo-1567513177553-5e1049591218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'partnership-with-aerospace-corporation',
    title: 'Global Technocrats Announces Strategic Partnership with Aerospace Corporation',
    excerpt: 'The collaboration will focus on developing integrated security solutions for aviation and aerospace infrastructure.',
    content: 'Global Technocrats has entered into a strategic partnership with International Aerospace Corporation (IAC) to develop and deploy specialized security solutions for airports, aircraft manufacturing facilities, and other critical aerospace infrastructure.\n\nThe partnership will combine Global Technocrats\' expertise in perimeter security and surveillance with IAC\'s deep understanding of aerospace operational requirements and regulations. The initial focus will be on creating tailored security packages for airports in emerging markets, where rapid growth in air travel is driving significant infrastructure development.\n\n"Aerospace facilities face unique security challenges that require specialized solutions," said Aisha Rahman, Vice President of Strategic Partnerships at Global Technocrats. "By partnering with IAC, we can ensure our technologies are optimized for the specific needs of this sector."\n\nThe first project under this partnership will be the deployment of a comprehensive security system at a major international airport in Southeast Asia, scheduled to begin construction in late 2025. The system will include crash-rated perimeter fencing, vehicle barriers, and advanced surveillance capabilities.\n\n"Security is a critical concern for the entire aerospace industry," said Thomas Chen, Chief Security Officer at IAC. "Our partnership with Global Technocrats will help raise the standard for aerospace infrastructure protection globally."\n\nThe companies will also establish a joint research and development team to explore innovative solutions for emerging threats in aviation security.',
    date: 'February 8, 2025',
    author: 'Aviation Weekly',
    category: 'Partnership',
    tags: ['Aerospace', 'Aviation Security', 'Strategic Partnership'],
    image: 'https://images.unsplash.com/photo-1559066653-edab1ce1848d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'annual-defense-technology-summit',
    title: 'Global Technocrats to Host Annual Defense Technology Summit',
    excerpt: 'The three-day event will showcase innovations in security and defense technology and feature industry experts from around the world.',
    content: 'Global Technocrats has announced that it will host its Annual Defense Technology Summit from September 15-17, 2025, in New Delhi, India. The event will bring together military officials, security experts, technology developers, and policy makers to discuss emerging trends and innovations in defense technology.\n\nThe summit will feature product demonstrations, technical workshops, panel discussions, and keynote addresses from leading figures in the defense and security sectors. Special focus areas for this year\'s event include AI applications in defense, next-generation perimeter security, and counter-drone technologies.\n\n"Our annual summit has become a key platform for knowledge exchange and collaboration in the defense technology community," said Dr. Rajiv Mehta, CEO of Global Technocrats. "It provides a unique opportunity for stakeholders to explore the latest innovations and discuss how technology can address evolving security challenges."\n\nLast year\'s summit attracted over 1,200 attendees from 28 countries, and this year\'s event is expected to be even larger. The company will use the occasion to unveil several new products and showcase enhancements to its existing portfolio.\n\n"We\'re particularly excited about the technology demonstration zone, where attendees can experience our latest innovations firsthand," said Priya Singh, Director of Events at Global Technocrats. "Nothing compares to seeing these systems in action."\n\nRegistration for the summit is now open, with early bird discounts available until June 30, 2025.',
    date: 'January 25, 2025',
    author: 'Defence Technology Today',
    category: 'Event',
    tags: ['Summit', 'Defense Technology', 'Industry Event'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  }
];

const categories = ['All Categories', 'Product Launch', 'Technology', 'Company News', 'Case Study', 'Partnership', 'Event'];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <>
      <Helmet>
        <title>Blog | Global Technocrats</title>
        <meta name="description" content="Stay informed about the latest news, product updates, and innovations in defense technology from Global Technocrats." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary-900 py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog & News
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay informed about our latest innovations, company news, industry insights, and trends in defense technology.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-700 bg-secondary-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Latest Articles</h2>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
              
              <div className={`md:flex space-y-3 md:space-y-0 md:space-x-3 ${showFilters ? 'block' : 'hidden'}`}>
                {/* Category Select */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-custom transition duration-300"
                >
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-56 object-cover transition duration-500 hover:scale-105"
                    />
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary-600 transition duration-200">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles found. Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary-50 rounded-xl p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 mb-6">
                  Get the latest updates, industry insights, and news from Global Technocrats delivered directly to your inbox.
                </p>
                
                <form className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;