import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BlogPage from './pages/BlogPage';
import OurStoryPage from './pages/OurStoryPage';
import PeoplePage from './pages/PeoplePage';
import CareersPage from './pages/CareersPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Category Pages
import FencingSolutionsPage from './pages/FencingSolutionsPage';
import GatesAndBarriersPage from './pages/GatesAndBarriersPage';
import AdvancedAIProductsPage from './pages/AdvancedAIProductsPage';
import DRDOTOTPage from './pages/DRDOTOTPage';
import DefenceTechPage from './pages/DefenceTechPage';
import CrashRatedFencePage from './pages/CrashRatedFencePage';
import ChainLinkFencePage from './pages/ChainLinkFencePage';
import AntiClimbFencePage from './pages/AntiClimbFencePage';


function App() {
  return (
    <>
      <Helmet>
        <title>Global Technocrats | Defence Tech Company</title>
        <meta name="description" content="Global Technocrats - Leading Defence Tech Company operating in India and Middle East, providing innovative security and defense solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          {/* Parent page — before the dynamic catch-all */}
          <Route path="products/fencing/crash-rated-fence" element={<CrashRatedFencePage />} />
          <Route path="products/fencing/chain-link-fence" element={<ChainLinkFencePage />} />
          <Route path="products/fencing/anti-climb" element={<AntiClimbFencePage />} />
          <Route path="products/:category/:productId" element={<ProductDetailPage />} />
          
          {/* Category Pages */}
          <Route path="products/fencing" element={<FencingSolutionsPage />} />
          <Route path="products/gates" element={<GatesAndBarriersPage />} />
          <Route path="products/ai" element={<AdvancedAIProductsPage />} />
          <Route path="products/drdo" element={<DRDOTOTPage />} />
          <Route path="products/defence" element={<DefenceTechPage />} />
          
          <Route path="blog" element={<BlogPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="investor-relations" element={<InvestorRelationsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
