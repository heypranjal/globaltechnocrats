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

// Fencing Solution Pages
import AntiClimbFencingPage from './pages/fencing/AntiClimbFencingPage';
import RazorMeshFencingPage from './pages/fencing/RazorMeshFencingPage';
import DecorativeFencingPage from './pages/fencing/DecorativeFencingPage';
import CrashRatedFencePage from './pages/fencing/CrashRatedFencePage';
import ConcertinaCoilFencePage from './pages/fencing/ConcertinaCoilFencePage';
import SSConcertinaCoilPage from './pages/fencing/SSConcertinaCoilPage';
import GIConcertinaCoilPage from './pages/fencing/GIConcertinaCoilPage';
import ChainLinkFencePage from './pages/fencing/ChainLinkFencePage';
import BarbedWireFencePage from './pages/fencing/BarbedWireFencePage';

import FencingSolutionsPage from './pages/FencingSolutionsPage';
import GatesAndBarriersPage from './pages/GatesAndBarriersPage';
import AdvancedAIProductsPage from './pages/AdvancedAIProductsPage';
import DRDOTOTPage from './pages/DRDOTOTPage';
import DefenceTechPage from './pages/DefenceTechPage';

// Gates & Barriers Pages
import SwingGatesPage from './pages/gates/SwingGatesPage';
import SlidingGatesPage from './pages/gates/SlidingGatesPage';
import CollapsibleBarrierPage from './pages/gates/CollapsibleBarrierPage';
import ArchitecturalGabionsPage from './pages/gates/ArchitecturalGabionsPage';
import HescoBoxPage from './pages/gates/HescoBoxPage';

// AI Product Pages
import ImageEnhancerPage from './pages/ai/ImageEnhancerPage';
import DeepSocmintPage from './pages/ai/DeepSocmintPage';

// DRDO TOT Product Pages
import BukhariPage from './pages/drdo/BukhariPage';
import VajraPage from './pages/drdo/VajraPage';

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
          <Route path="products/:productId" element={<ProductDetailPage />} />
          
          {/* Category Pages */}
          <Route path="products/gates" element={<GatesAndBarriersPage />} />
          <Route path="products/ai" element={<AdvancedAIProductsPage />} />
          <Route path="products/drdo" element={<DRDOTOTPage />} />
          <Route path="products/defence" element={<DefenceTechPage />} />
          
          {/* Fencing Solutions as Parent Page */}
          <Route path="products/fencing" element={<FencingSolutionsPage />} />
          <Route path="products/fencing/anti-climb" element={<AntiClimbFencingPage />} />
          <Route path="products/fencing/razor-mesh" element={<RazorMeshFencingPage />} />
          <Route path="products/fencing/decorative" element={<DecorativeFencingPage />} />
          <Route path="products/fencing/crash-rated-fence" element={<CrashRatedFencePage />} />
          <Route path="products/fencing/concertina-coil-fence" element={<ConcertinaCoilFencePage />} />
          <Route path="products/fencing/ss-concertina-coil" element={<SSConcertinaCoilPage />} />
          <Route path="products/fencing/gi-concertina-coil" element={<GIConcertinaCoilPage />} />
          <Route path="products/fencing/chain-link-fence" element={<ChainLinkFencePage />} />
          <Route path="products/fencing/barbed-wire-fence" element={<BarbedWireFencePage />} />
          
          {/* Gates & Barriers as Parent Page */}
          <Route path="products/gates/swing-gates" element={<SwingGatesPage />} />
          <Route path="products/gates/sliding-gates" element={<SlidingGatesPage />} />
          <Route path="products/gates/collapsible-barrier" element={<CollapsibleBarrierPage />} />
          <Route path="products/gates/architectural-gabions" element={<ArchitecturalGabionsPage />} />
          <Route path="products/gates/hesco-box" element={<HescoBoxPage />} />
          
          {/* AI Products as Parent Page */}
          <Route path="products/ai/image-enhancer" element={<ImageEnhancerPage />} />
          <Route path="products/ai/deepsocmint" element={<DeepSocmintPage />} />
          
          {/* DRDO TOT Products as Parent Page */}
          <Route path="products/drdo/bukhari" element={<BukhariPage />} />
          <Route path="products/drdo/vajra" element={<VajraPage />} />
          
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
