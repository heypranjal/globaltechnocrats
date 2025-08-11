import React from 'react';
import { Helmet } from 'react-helmet';
import { Globe, Shield, Users, Cpu, Briefcase } from 'lucide-react';
import TechHeroSection from '../components/people/TechHeroSection';
import ProductShowcaseMD from '../components/people/ProductShowcaseMD';
import TechLeadershipGrid from '../components/people/TechLeadershipGrid';
import DataDepartmentCards from '../components/people/DataDepartmentCards';
import TechCultureSection from '../components/people/TechCultureSection';
import MinimalTestimonials from '../components/people/MinimalTestimonials';
import TechCTA from '../components/people/TechCTA';

const PeoplePage: React.FC = () => {
  const executives = [
    {
      id: 1,
      name: 'Mr. Atul Aggarwal (MD)',
      position: 'Managing Director',
      bio: 'Mr. Atul Aggarwal, the Managing Director of Global Technocrats, is a visionary entrepreneur with a passion for indigenous defence innovation. His career bridges global manufacturing and high-tech engineering, but it\'s in advanced defence systems that his leadership shines brightest.\n\nUnder his direction, the company has spearheaded projects like a Mobile Mortar Platform, developed under a Technology Transfer Agreement as part of the Make in India initiative. Mr. Aggarwal is also driving the development of Unmanned Ground-Based Vehicles (UGVs) designed for tactical reconnaissance and logistics support in rugged terrains. These cutting-edge systems reflect his commitment to self-reliant defence manufacturing and agile R&D.\n\nToday, with a sharp eye on future warfare needs, he continues to push the boundaries—positioning Global Technocrats as a trusted force in India\'s defence tech ecosystem.',
      image: '/images/Atul-Agarwal-650x650.png'
    },
    {
      id: 2,
      name: 'Mr. Krishna Khanna',
      position: 'GM-Sales & Marketing',
      bio: 'Mr. Krishan Khanna, has navigated a remarkable six-decade career. Starting at Mitsui & Co. Ltd., a leading Japanese multinational, he rapidly rose to significant roles, including Liaison Officer for a pivotal fertilizer project funded by a Japanese Grant. Later, as the General Manager of Global Technocrats Pvt. Ltd., he was instrumental in strengthening India\'s borders, working closely with the defense forces. His journey epitomizes dedication and diverse expertise.',
      image: '/images/Krishna-Khanna.png'
    },
    {
      id: 3,
      name: 'Mr. Surendra Batra',
      position: 'GM-Civil',
      bio: 'Mr. Surendra Batra is a retired AXN from CPWD and held the esteemed position of GM-Civil in Global Technocrats. With over 20 years of dedicated service at the border postings of CPWD in the Northeast region, he boasts profound expertise in the local and working conditions of NE-Indian borders. His academic credentials include an Undergraduate Diploma in Civil and a B.TECH in Civil Engineering, further solidifying his stature in the field.',
      image: '/images/Surinder-Kumar.png'
    },
    {
      id: 4,
      name: 'Mr. Vijay Verma',
      position: 'Business Development-Lead',
      bio: 'With 18 years of experience driving enterprise success, Mr. Vijay blends IT leadership with a passion for sales development to deliver transformative business growth. A strategist in digital transformation and cyber security, He has worked with iconic brands like Oberoi\'s, Audi, Porsche, Apple, and Reliance to align technology with revenue-focused goals. Their innovative approach empowers businesses to unlock new opportunities and achieve sustained success in today\'s competitive market. He is currently with Global Technocrats, focusing on Defence Tech Products.',
      image: '/images/Vijay-Verma.png'
    },
    {
      id: 5,
      name: 'Mr. Vijendra Sharma',
      position: 'GM-Productions',
      bio: 'Mr. Vijender Sharma boasts 35 years in the manufacturing sector, notably as GM Production at M/s Global Technocrats Pvt. Ltd. He\'s adept in managing production, with stints at Sharda Motor Industries, Carrier Air-Con Refrigeration, SUZUKI, and TATA NANO. Key achievements include driving quality, implementing cost-saving measures, hitting production goals, and commissioning powder coating and spray paint plants. His commitment to excellence sets him apart in the industry.',
      image: '/images/vijendra-sharma.png'
    }
  ];

  const departments = [
    {
      id: 'research',
      name: 'Research & Development',
      description: 'Our R&D team drives innovation across all product lines, from physical security systems to advanced AI applications.',
      icon: <Cpu className="w-8 h-8" />,
      members: 45,
      projects: 12,
      locations: ['New Delhi', 'Dubai']
    },
    {
      id: 'engineering',
      name: 'Engineering & Manufacturing',
      description: 'Responsible for transforming innovative concepts into reliable, field-ready products that meet rigorous quality standards.',
      icon: <Shield className="w-8 h-8" />,
      members: 68,
      projects: 15,
      locations: ['Mumbai', 'Delhi NCR']
    },
    {
      id: 'business',
      name: 'Business Development',
      description: 'Our global business team builds strategic relationships with clients and partners across defense, government, and private sectors.',
      icon: <Briefcase className="w-8 h-8" />,
      members: 32,
      projects: 8,
      locations: ['Dubai', 'Riyadh', 'Doha', 'New Delhi']
    },
    {
      id: 'operations',
      name: 'Operations & Support',
      description: 'Ensuring smooth deployment, maintenance, and ongoing support for all our systems deployed in the field.',
      icon: <Globe className="w-8 h-8" />,
      members: 54,
      projects: 20,
      locations: ['All Offices']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our People | Global Technocrats</title>
        <meta name="description" content="Meet the exceptional minds driving innovation in defense technology at Global Technocrats. Discover our leadership team, departments, and company culture." />
        <meta name="keywords" content="Global Technocrats team, leadership, defense technology experts, company culture, careers" />
      </Helmet>

      {/* Ultra-Modern Hero Section */}
      <TechHeroSection />

      {/* Apple-Style MD Showcase */}
      <ProductShowcaseMD executive={executives[0]} />

      {/* Perfect Grid Leadership */}
      <TechLeadershipGrid executives={executives.slice(1)} />

      {/* Interactive Department Data */}
      <DataDepartmentCards departments={departments} />

      {/* Data-Driven Culture */}
      <TechCultureSection />

      {/* Minimal Testimonials */}
      <MinimalTestimonials />

      {/* Modern CTA */}
      <TechCTA />
    </>
  );
};

export default PeoplePage;