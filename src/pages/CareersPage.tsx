import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Clock, 
  ChevronDown, 
  Check, 
  Users, 
  GraduationCap, 
  Heart, 
  Award, 
  Filter,
  Search
} from 'lucide-react';

// Mock job listings data
const jobListings = [
  {
    id: 'sr-ai-engineer',
    title: 'Senior AI Engineer',
    department: 'Research & Development',
    location: 'New Delhi, India',
    type: 'Full-time',
    experience: '5+ years',
    posted: '2 weeks ago',
    description: 'We are seeking an experienced AI Engineer to join our Advanced AI Products team. In this role, you will develop and implement computer vision and machine learning algorithms for our security and surveillance solutions.',
    responsibilities: [
      'Design and develop computer vision and image processing algorithms',
      'Implement deep learning models for object detection and tracking',
      'Optimize algorithms for deployment on edge devices',
      'Collaborate with cross-functional teams to integrate AI capabilities into our products',
      'Stay current with the latest research and developments in AI and computer vision'
    ],
    requirements: [
      'Master\'s or Ph.D. in Computer Science, AI, or related field',
      '5+ years of experience in developing AI/ML solutions',
      'Strong programming skills in Python and C++',
      'Experience with deep learning frameworks (TensorFlow, PyTorch)',
      'Knowledge of computer vision algorithms and techniques',
      'Experience with model optimization for edge deployment'
    ]
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    department: 'Engineering & Manufacturing',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '3+ years',
    posted: '1 week ago',
    description: 'We are looking for a skilled Mechanical Engineer to join our Engineering team. You will design and develop mechanical components and systems for our security and defense products.',
    responsibilities: [
      'Design mechanical components and systems using CAD software',
      'Develop prototypes and conduct testing',
      'Optimize designs for manufacturability and cost-effectiveness',
      'Collaborate with electrical engineers for integrated product development',
      'Support manufacturing teams during product transition to production'
    ],
    requirements: [
      'Bachelor\'s or Master\'s degree in Mechanical Engineering',
      '3+ years of experience in product design and development',
      'Proficiency in CAD software (SolidWorks, AutoCAD)',
      'Knowledge of manufacturing processes and materials',
      'Experience with design for manufacturing (DFM) principles',
      'Strong problem-solving and analytical skills'
    ]
  },
  {
    id: 'business-development-manager',
    title: 'Business Development Manager - Middle East',
    department: 'Business Development',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '7+ years',
    posted: '3 days ago',
    description: 'We are seeking an experienced Business Development Manager to expand our presence in the Middle East region. You will identify new business opportunities, build relationships with key stakeholders, and drive growth in this strategic market.',
    responsibilities: [
      'Develop and implement business development strategies for the Middle East market',
      'Identify and pursue new business opportunities in defense and security sectors',
      'Build and maintain relationships with key clients, partners, and stakeholders',
      'Represent the company at industry events, exhibitions, and conferences',
      'Collaborate with technical teams to develop tailored solutions for client needs',
      'Prepare and deliver compelling presentations and proposals'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Engineering, or related field',
      '7+ years of experience in business development in the defense/security industry',
      'Strong network and relationships in the Middle East region',
      'Understanding of defense procurement processes in GCC countries',
      'Excellent communication and negotiation skills',
      'Willingness to travel extensively within the region'
    ]
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    department: 'Operations',
    location: 'New Delhi, India',
    type: 'Full-time',
    experience: '5+ years',
    posted: '1 month ago',
    description: 'We are looking for an experienced Project Manager to oversee the planning, execution, and delivery of complex security and defense projects. You will coordinate cross-functional teams and ensure project success from conception to completion.',
    responsibilities: [
      'Plan, execute, and deliver projects on time, within scope, and on budget',
      'Develop detailed project plans, schedules, and resource allocations',
      'Coordinate cross-functional teams and manage stakeholder expectations',
      'Monitor project progress and implement corrective actions as needed',
      'Conduct risk assessments and develop mitigation strategies',
      'Manage client relationships and communication throughout the project lifecycle'
    ],
    requirements: [
      'Bachelor\'s degree in Engineering, Business, or related field',
      '5+ years of experience managing complex technical projects',
      'PMP certification or equivalent',
      'Experience in defense or security industry preferred',
      'Strong leadership, communication, and problem-solving skills',
      'Proficiency in project management tools and methodologies'
    ]
  },
  {
    id: 'systems-engineer',
    title: 'Systems Engineer',
    department: 'Engineering & Manufacturing',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-time',
    experience: '3+ years',
    posted: '2 weeks ago',
    description: 'We are seeking a Systems Engineer to join our team in Riyadh. You will be responsible for designing, implementing, and maintaining complex systems for our security and defense solutions.',
    responsibilities: [
      'Design and develop integrated systems for security and defense applications',
      'Define system requirements and architecture',
      'Conduct system analysis, testing, and validation',
      'Troubleshoot and resolve complex system issues',
      'Collaborate with cross-functional teams throughout the product lifecycle',
      'Provide technical guidance and support to clients'
    ],
    requirements: [
      'Bachelor\'s or Master\'s degree in Systems Engineering, Electrical Engineering, or related field',
      '3+ years of experience in systems engineering',
      'Knowledge of systems engineering methodologies and tools',
      'Experience with security or defense systems preferred',
      'Strong analytical and problem-solving skills',
      'Excellent documentation and communication abilities'
    ]
  },
  {
    id: 'marketing-specialist',
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'New Delhi, India',
    type: 'Full-time',
    experience: '2+ years',
    posted: '1 week ago',
    description: 'We are looking for a Marketing Specialist to join our marketing team. You will help develop and implement marketing strategies to promote our defense and security solutions to target audiences.',
    responsibilities: [
      'Develop and execute marketing campaigns for security and defense products',
      'Create compelling content for various channels (website, brochures, presentations)',
      'Manage digital marketing initiatives and social media presence',
      'Coordinate participation in industry events and trade shows',
      'Track and analyze marketing metrics to optimize campaigns',
      'Collaborate with sales and product teams on go-to-market strategies'
    ],
    requirements: [
      'Bachelor\'s degree in Marketing, Communications, or related field',
      '2+ years of experience in B2B marketing, preferably in technology or defense sectors',
      'Strong writing and content creation skills',
      'Experience with digital marketing tools and analytics',
      'Knowledge of marketing automation platforms',
      'Creativity and attention to detail'
    ]
  }
];

const CareersPage: React.FC = () => {
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [showFilters, setShowFilters] = useState(false);
  
  // Extract unique locations and departments for filters
  const locations = ['All Locations', ...new Set(jobListings.map(job => job.location.split(',')[0].trim()))];
  const departments = ['All Departments', ...new Set(jobListings.map(job => job.department))];
  
  // Filter job listings based on search term and filters
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = 
      locationFilter === 'All Locations' || 
      job.location.includes(locationFilter);
    
    const matchesDepartment = 
      departmentFilter === 'All Departments' || 
      job.department === departmentFilter;
    
    return matchesSearch && matchesLocation && matchesDepartment;
  });
  
  const toggleJobDetails = (jobId: string) => {
    setActiveJobId(activeJobId === jobId ? null : jobId);
  };
  
  return (
    <>
      <Helmet>
        <title>Careers | Global Technocrats</title>
        <meta name="description" content="Explore career opportunities at Global Technocrats. Join our team and work on cutting-edge defense and security technologies." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary-900 py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a team that's pushing the boundaries of defense technology and making the world safer through innovation.
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
                placeholder="Search positions..."
                className="w-full pl-10 pr-4 py-3 border border-gray-700 bg-secondary-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <Users className="w-4 h-4 mr-1" /> Our Culture
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Global Technocrats</h2>
            
            <p className="text-lg text-gray-600">
              We offer a dynamic work environment that fosters innovation, collaboration, and professional growth, along with competitive benefits and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Growth</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Continuous learning and development programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Leadership and technical skill training</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Career advancement opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mentorship programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>International exposure and experience</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Competitive salary and performance bonuses</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Health insurance for employees and dependents</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Retirement savings plans</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Paid time off and parental leave</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Relocation assistance for international roles</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inspiring Environment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Work on cutting-edge defense technologies</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Collaborative and innovative culture</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>State-of-the-art facilities and resources</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Diverse and inclusive work environment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Work with purpose and meaningful impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Current Openings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <Briefcase className="w-4 h-4 mr-1" /> Opportunities
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Openings</h2>
            
            <p className="text-lg text-gray-600">
              Explore our current job opportunities and find a role that matches your skills and aspirations.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
            <h3 className="text-xl font-bold mb-4 md:mb-0">Available Positions</h3>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
              
              <div className={`md:flex space-y-3 md:space-y-0 md:space-x-3 ${showFilters ? 'block' : 'hidden'}`}>
                {/* Location Filter */}
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                
                {/* Department Filter */}
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleJobDetails(job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="inline-flex items-center text-sm text-gray-600">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="inline-flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="inline-flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="inline-flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-1" />
                            Posted {job.posted}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform ${activeJobId === job.id ? 'rotate-180' : ''}`} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {activeJobId === job.id && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-gray-600 mb-6">{job.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="btn btn-primary">
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center">
              <p className="text-gray-600 mb-4">No positions matching your criteria are currently available.</p>
              <p className="text-gray-600">Please try adjusting your search or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Application Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <Users className="w-4 h-4 mr-1" /> Join Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Application Process</h2>
            
            <p className="text-lg text-gray-600">
              Our recruitment process is designed to identify talented individuals who align with our values and have the skills to contribute to our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 relative">
                <span className="text-xl font-bold text-primary-600">1</span>
              </div>
              <div className="absolute top-8 left-8 w-full h-0.5 bg-primary-100 hidden md:block"></div>
              <h3 className="text-xl font-bold mb-3">Application</h3>
              <p className="text-gray-600">
                Submit your application online with your resume and a cover letter explaining why you're interested in joining Global Technocrats.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 relative">
                <span className="text-xl font-bold text-primary-600">2</span>
              </div>
              <div className="absolute top-8 left-8 w-full h-0.5 bg-primary-100 hidden md:block"></div>
              <h3 className="text-xl font-bold mb-3">Initial Screening</h3>
              <p className="text-gray-600">
                Our HR team will review your application and contact qualified candidates for an initial phone or video interview.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 relative">
                <span className="text-xl font-bold text-primary-600">3</span>
              </div>
              <div className="absolute top-8 left-8 w-full h-0.5 bg-primary-100 hidden md:block"></div>
              <h3 className="text-xl font-bold mb-3">Technical Assessment</h3>
              <p className="text-gray-600">
                Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your skills and expertise.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 relative">
                <span className="text-xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Final Interview</h3>
              <p className="text-gray-600">
                Selected candidates will be invited for a final interview with the hiring manager and team members to assess cultural fit and technical capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact HR Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
            <p className="text-lg text-primary-100 mb-8">
              If you have any questions about our career opportunities or the application process, please don't hesitate to contact our HR team.
            </p>
            <div className="bg-primary-700 rounded-xl p-8 inline-block">
              <p className="mb-2 text-primary-100">Email:</p>
              <p className="text-xl font-bold mb-4">careers@globaltechnocrats.com</p>
              <p className="mb-2 text-primary-100">Phone:</p>
              <p className="text-xl font-bold">+91 1234 567 890</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;