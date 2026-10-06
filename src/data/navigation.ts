// Navigation data for Global Technocrats website

export interface NavProduct {
  name: string;
  path: string;
}

export interface MegaMenuCategory {
  id: string;
  name: string;
  path: string;
  description: string;
  items: NavProduct[];
  viewAllPath: string;
  viewAllLabel: string;
}

export interface NavItem {
  name: string;
  path: string;
  hasMegaMenu?: boolean;
}

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    id: 'perimeter',
    name: 'Perimeter Security',
    path: '/products/fencing',
    description: 'High-security fencing for critical infrastructure',
    items: [
      { name: 'Crash Rated Fencing', path: '/products/fencing/crash-rated-fence' },
      { name: 'Chain Link Fence', path: '/products/fencing/chain-link-fence' },
      { name: 'Anti-Climb Fencing', path: '/products/fencing/anti-climb' },
      { name: 'Decorative Fencing', path: '/products/fencing/decorative-fencing' },
      { name: 'Razor Mesh Fencing', path: '/products/fencing/razor-mesh' },
      { name: 'Concertina Coil', path: '/products/fencing/concertina-coil' },
      { name: 'Barbed Wire Fence', path: '/products/fencing/barbed-wire-fence' },
    ],
    viewAllPath: '/products/fencing',
    viewAllLabel: 'View All Fencing',
  },
  {
    id: 'gates',
    name: 'Engineered Gate Solutions',
    path: '/products/gates',
    description: 'Automated and manual gate systems for access control',
    items: [
      { name: 'Swing Gates', path: '/products/gates/swing-gates' },
      { name: 'Cantilever Gates', path: '/products/gates/cantilever-gates' },
    ],
    viewAllPath: '/products/gates',
    viewAllLabel: 'View All Gates',
  },
];

export const mainNavigation: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products', hasMegaMenu: true },
  { name: 'About Us', path: '/our-story' },
  { name: 'Resources', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

// Legacy export – kept for any existing consumers
export const productCategories = megaMenuCategories.map((c) => ({
  name: c.name,
  path: c.path,
  hasSubmenu: false,
}));

export const navigationConfig = {
  megaMenuCategories,
  mainNavigation,
  productCategories,
  ctaButton: { text: 'Get a Quote', path: '/contact' },
  contactInfo: {
    phone: '+91 9810282636',
    phoneHref: 'tel:+919810282636',
  },
};
