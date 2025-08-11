/**
 * Home Page with luxury section borders and corner accents
 * Updated: 2025-07-11 - Added subtle blue theme luxury styling and reduced vertical spacing by 30%
 */
import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import HeroSection from '../components/home/HeroSection';
import ProductCategoriesSection from '../components/home/ProductCategoriesSection';
import FeaturedProductsSection from '../components/home/FeaturedProductsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GlobalPresenceSection from '../components/home/GlobalPresenceSection';
import NewsSection from '../components/home/NewsSection';
import CTASection from '../components/home/CTASection';
import ClientsSection from '../components/home/ClientsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Global Technocrats | Leading Defence Tech Company</title>
        <meta name="description" content="Global Technocrats - Leading Defence Tech Company operating in India and Middle East, providing innovative security and defense solutions." />
      </Helmet>
      
      <HeroSection />
      <div className="relative bg-white z-20">
        <ClientsSection />
        <ProductCategoriesSection />
        <FeaturedProductsSection />
        <TestimonialsSection />
        <GlobalPresenceSection />
        <NewsSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;
