export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobListings: JobListing[] = [
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

export const getUniqueLocations = () => {
  return ['All Locations', ...new Set(jobListings.map(job => job.location.split(',')[0].trim()))];
};

export const getUniqueDepartments = () => {
  return ['All Departments', ...new Set(jobListings.map(job => job.department))];
};

export const getJobById = (id: string): JobListing | undefined => {
  return jobListings.find(job => job.id === id);
};