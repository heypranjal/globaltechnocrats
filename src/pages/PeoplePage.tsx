import React from 'react';
import { Helmet } from 'react-helmet';
import { Globe, Shield, Users, Cpu, Briefcase } from 'lucide-react';
import TechHeroSection from '../components/people/TechHeroSection';
import ProductShowcaseMD from '../components/people/ProductShowcaseMD';
import TechLeadershipGrid from '../components/people/TechLeadershipGrid';
import DataDepartmentCards from '../components/people/DataDepartmentCards';
import TechCultureSection from '../components/people/TechCultureSection';
import { getImageUrl, getImageAlt } from '../data/mediaAssets';

const PeoplePage: React.FC = () => {
  const executives = [
    {
      id: 1,
      name: 'Mr. Atul Aggarwal',
      position: 'Managing Director',
      education: 'BA Honours in Mathematical Statistics, SP Jain Business School, Delhi University',
      bio: 'An experienced businessman with expertise in product development across diverse industries including organic farming, specialty dyes, leather, and defense technology. Mr. Aggarwal brings a unique blend of business acumen and technical expertise to lead Global Technocrats into new frontiers of defense innovation.\n\nUnder his visionary leadership, the company has evolved from a traditional manufacturing firm to a cutting-edge defense technology company, pioneering solutions like Mobile Mortar Systems and AI-powered security solutions. His strategic vision focuses on indigenous defense innovation and self-reliant manufacturing.\n\nWith deep roots in mathematical statistics and business strategy, he continues to drive the company\'s expansion into advanced defense systems, positioning Global Technocrats as a key player in India\'s defense tech ecosystem.',
      image: getImageUrl('people', 'atul-agarwal'),
      specialties: ['Product Development', 'Business Strategy', 'Defense Innovation', 'Manufacturing Excellence']
    },
    {
      id: 2,
      name: 'Mr. Krishna Khanna',
      position: 'GM-Sales & Marketing',
      experience: '6 decades of industry leadership',
      bio: 'Mr. Krishna Khanna brings an unprecedented six decades of industry experience, having navigated a remarkable career across multinational corporations and defense sectors. His journey began at Mitsui & Co. Ltd., a leading Japanese multinational, where he rapidly ascended to significant leadership roles.\n\nHis expertise encompasses international business development, strategic partnerships, and complex project management. As Liaison Officer for a pivotal fertilizer project funded by Japanese Grant, he demonstrated exceptional diplomatic and technical skills.\n\nAt Global Technocrats, he has been instrumental in strengthening India\'s border security infrastructure, working closely with defense forces to deliver critical security solutions. His vast experience and deep industry relationships continue to drive the company\'s market expansion.',
      image: getImageUrl('people', 'krishna-khanna'),
      specialties: ['International Business', 'Strategic Partnerships', 'Defense Relations', 'Project Management']
    },
    {
      id: 3,
      name: 'Mr. Vijay Verma',
      position: 'Business Development Lead',
      experience: '18 years driving enterprise success',
      bio: 'Mr. Vijay Verma combines 18 years of enterprise leadership with cutting-edge expertise in digital transformation and cybersecurity. His unique blend of IT leadership and sales acumen has consistently delivered transformative business growth across diverse industries.\n\nHis impressive portfolio includes strategic engagements with iconic brands including Oberoi Hotels, Audi, Porsche, Apple, and Reliance, where he successfully aligned advanced technology solutions with revenue-focused business objectives. His innovative approach to business development has consistently unlocked new market opportunities.\n\nAt Global Technocrats, he spearheads business development for Defense Tech Products, leveraging his deep understanding of enterprise needs and technology trends to expand our market presence and forge strategic partnerships.',
      image: getImageUrl('people', 'vijay-verma'),
      specialties: ['Digital Transformation', 'Cybersecurity', 'Enterprise Sales', 'Strategic Partnerships']
    },
    {
      id: 4,
      name: 'Mr. Vijendra Sharma',
      position: 'GM-Productions',
      experience: '35 years in manufacturing excellence',
      bio: 'Mr. Vijendra Sharma brings 35 years of manufacturing expertise, with a distinguished career spanning leading automotive and industrial companies including Sharda Motor Industries, Carrier Air-Conditioning & Refrigeration, SUZUKI, and TATA NANO projects.\n\nHis exceptional track record includes driving quality improvements, implementing cost-saving initiatives, consistently achieving production targets, and successfully commissioning advanced manufacturing facilities including powder coating and spray paint plants. His operational excellence has set new industry benchmarks.\n\nAs GM-Productions at Global Technocrats, he oversees our advanced manufacturing operations, ensuring that every product meets the highest quality standards while optimizing production efficiency. His commitment to manufacturing excellence positions our products as industry leaders.',
      image: getImageUrl('people', 'vijendra-sharma'),
      specialties: ['Manufacturing Excellence', 'Quality Control', 'Production Optimization', 'Industrial Engineering']
    }
  ];

  const departments = [
    {
      id: 'research',
      name: 'Research & Development',
      description: 'Pioneering next-generation defense technologies including AI-powered threat assessment, Heavy Lift Drones, and advanced security systems through strategic partnerships with DRDO.',
      icon: <Cpu className="w-8 h-8" />,
      locations: ['New Delhi', 'Kapashera'],
      highlights: ['AI Threat Assessment', 'DRDO Collaborations', 'Advanced Materials']
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Production',
      description: 'Operating ISO-certified facilities with 60,000+ MT annual capacity, featuring in-house coating plants and advanced manufacturing systems for defense products.',
      icon: <Shield className="w-8 h-8" />,
      locations: ['Kapashera', 'Delhi NCR'],
      highlights: ['60,000+ MT Capacity', 'ISO Certified', 'In-house Coating']
    },
    {
      id: 'business',
      name: 'Business Development',
      description: 'Building strategic relationships with defense forces, government agencies, and international partners to expand our global footprint in security solutions.',
      icon: <Briefcase className="w-8 h-8" />,
      locations: ['New Delhi', 'Regional Offices'],
      highlights: ['Defense Contracts', 'Border Security', 'International Expansion']
    },
    {
      id: 'engineering',
      name: 'Civil & Infrastructure',
      description: 'Specialized team with extensive border posting experience, designing and implementing security infrastructure for challenging frontier environments.',
      icon: <Globe className="w-8 h-8" />,
      locations: ['Northeast Borders', 'Field Operations'],
      highlights: ['Border Expertise', 'Infrastructure Design', 'Field Operations']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our People | Global Technocrats - Defense Technology Leaders</title>
        <meta name="description" content="Meet the visionary leaders and expert teams behind India's premier defense technology company. 20+ years of expertise in AI-powered security solutions, border infrastructure, and defense innovation." />
        <meta name="keywords" content="Global Technocrats team, defense technology leaders, Atul Aggarwal, Krishna Khanna, border security experts, DRDO partnerships, manufacturing excellence" />
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
    </>
  );
};

export default PeoplePage;