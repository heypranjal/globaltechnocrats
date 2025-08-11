/**
 * Main navigation menubar for Global Technocrats
 * Built with shadcn/ui menubar component - Updated design
 * Created: 2025-07-11
 * Updated: 2025-07-11 - Fixed dropdown hover behavior with proper MenubarSub structure
 */

import { Link, useLocation } from 'react-router-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface MainMenubarProps {
  isScrolled?: boolean;
  onNavigate?: () => void;
}

export function MainMenubar({ isScrolled = false, onNavigate }: MainMenubarProps) {
  const location = useLocation();

  const handleNavigation = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  const fencingProducts = [
    { name: 'Anti-Climb Fencing', path: '/products/fencing/anti-climb' },
    { name: 'Barbed Wire Fence', path: '/products/fencing/barbed-wire-fence' },
    { name: 'Chain Link Fence', path: '/products/fencing/chain-link-fence' },
    { name: 'Concertina Coil Fence', path: '/products/fencing/concertina-coil-fence' },
    { name: 'Crash Rated Fencing', path: '/products/fencing/crash-rated-fence' },
    { name: 'Decorative Fencing', path: '/products/fencing/decorative' },
    { name: 'GI Concertina Coil', path: '/products/fencing/gi-concertina-coil' },
    { name: 'Razor Mesh Fencing', path: '/products/fencing/razor-mesh' },
    { name: 'SS Concertina Coil', path: '/products/fencing/ss-concertina-coil' },
  ];

  const gatesProducts = [
    { name: 'Swing Gates', path: '/products/gates/swing-gates' },
    { name: 'Sliding Gates', path: '/products/gates/sliding-gates' },
    { name: 'Collapsible Barrier', path: '/products/gates/collapsible-barrier' },
    { name: 'Architectural Gabions', path: '/products/gates/architectural-gabions' },
    { name: 'Hesco Box', path: '/products/gates/hesco-box' },
  ];

  const aiProducts = [
    { name: 'Deep Socmint', path: '/products/ai/deepsocmint' },
    { name: 'Image Enhancer', path: '/products/ai/image-enhancer' },
  ];

  const drdoProducts = [
    { name: 'Bukhari', path: '/products/drdo/bukhari' },
    { name: 'Vajra', path: '/products/drdo/vajra' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-lg shadow-sm px-2 py-1">
      <Menubar className="bg-transparent border-none h-auto p-0 space-x-1">
        <MenubarMenu>
          <MenubarTrigger 
            className={`px-3 py-2 text-sm font-medium bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100 rounded-md transition-colors text-gray-700 hover:text-gray-900 ${
              location.pathname === '/' ? 'bg-gray-100 text-gray-900' : ''
            }`}
          >
            <Link to="/" onClick={handleNavigation}>Home</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger 
            className={`px-3 py-2 text-sm font-medium bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100 rounded-md transition-colors text-gray-700 hover:text-gray-900 ${
              location.pathname.startsWith('/products') ? 'bg-gray-100 text-gray-900' : ''
            }`}
          >
            Products
          </MenubarTrigger>
          <MenubarContent className="min-w-[280px]">
            <MenubarSub>
              <MenubarSubTrigger className="w-full justify-between text-sm">
                Fencing Solutions
              </MenubarSubTrigger>
              <MenubarSubContent className="min-w-[200px]">
                {fencingProducts.map((product) => (
                  <MenubarItem key={product.path}>
                    <Link 
                      to={product.path} 
                      className="w-full text-sm"
                      onClick={handleNavigation}
                    >
                      {product.name}
                    </Link>
                  </MenubarItem>
                ))}
                <MenubarSeparator />
                <MenubarItem>
                  <Link 
                    to="/products/fencing" 
                    className="w-full font-medium text-primary-900 text-sm"
                    onClick={handleNavigation}
                  >
                    View All Fencing
                  </Link>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger className="w-full justify-between text-sm">
                Gates & Barriers
              </MenubarSubTrigger>
              <MenubarSubContent className="min-w-[200px]">
                {gatesProducts.map((product) => (
                  <MenubarItem key={product.path}>
                    <Link 
                      to={product.path} 
                      className="w-full text-sm"
                      onClick={handleNavigation}
                    >
                      {product.name}
                    </Link>
                  </MenubarItem>
                ))}
                <MenubarSeparator />
                <MenubarItem>
                  <Link 
                    to="/products/gates" 
                    className="w-full font-medium text-primary-900 text-sm"
                    onClick={handleNavigation}
                  >
                    View All Gates
                  </Link>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger className="w-full justify-between text-sm">
                Advanced AI Products
              </MenubarSubTrigger>
              <MenubarSubContent className="min-w-[180px]">
                {aiProducts.map((product) => (
                  <MenubarItem key={product.path}>
                    <Link 
                      to={product.path} 
                      className="w-full text-sm"
                      onClick={handleNavigation}
                    >
                      {product.name}
                    </Link>
                  </MenubarItem>
                ))}
                <MenubarSeparator />
                <MenubarItem>
                  <Link 
                    to="/products/ai" 
                    className="w-full font-medium text-primary-900 text-sm"
                    onClick={handleNavigation}
                  >
                    View All AI Products
                  </Link>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger className="w-full justify-between text-sm">
                DRDO TOT
              </MenubarSubTrigger>
              <MenubarSubContent className="min-w-[150px]">
                {drdoProducts.map((product) => (
                  <MenubarItem key={product.path}>
                    <Link 
                      to={product.path} 
                      className="w-full text-sm"
                      onClick={handleNavigation}
                    >
                      {product.name}
                    </Link>
                  </MenubarItem>
                ))}
                <MenubarSeparator />
                <MenubarItem>
                  <Link 
                    to="/products/drdo" 
                    className="w-full font-medium text-primary-900 text-sm"
                    onClick={handleNavigation}
                  >
                    View All DRDO
                  </Link>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarItem>
              <Link 
                to="/products/defence" 
                className="w-full text-sm"
                onClick={handleNavigation}
              >
                Defence Tech
              </Link>
            </MenubarItem>

            <MenubarSeparator />
            <MenubarItem>
              <Link 
                to="/products" 
                className="w-full font-medium text-primary-900 text-sm"
                onClick={handleNavigation}
              >
                View All Products
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger 
            className={`px-3 py-2 text-sm font-medium bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100 rounded-md transition-colors text-gray-700 hover:text-gray-900 ${
              location.pathname === '/our-story' ? 'bg-gray-100 text-gray-900' : ''
            }`}
          >
            <Link to="/our-story" onClick={handleNavigation}>Our Story</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger 
            className={`px-3 py-2 text-sm font-medium bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100 rounded-md transition-colors text-gray-700 hover:text-gray-900 ${
              location.pathname === '/people' ? 'bg-gray-100 text-gray-900' : ''
            }`}
          >
            <Link to="/people" onClick={handleNavigation}>People</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger 
            className={`px-3 py-2 text-sm font-medium bg-transparent hover:bg-gray-100 focus:bg-gray-100 data-[state=open]:bg-gray-100 rounded-md transition-colors text-gray-700 hover:text-gray-900 ${
              location.pathname === '/contact' ? 'bg-gray-100 text-gray-900' : ''
            }`}
          >
            <Link to="/contact" onClick={handleNavigation}>Contact Us</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}