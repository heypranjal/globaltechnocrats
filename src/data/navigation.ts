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
      { name: 'Anti-Climb Fencing', path: '/products/fencing/anti-climb' },
      { name: 'Razor Mesh Fencing', path: '/products/fencing/razor-mesh' },
      { name: 'Chain Link Fence', path: '/products/fencing/chain-link-fence' },
      { name: 'Barbed Wire Fence', path: '/products/fencing/barbed-wire-fence' },
      { name: 'Concertina Coil Fence', path: '/products/fencing/concertina-coil-fence' },
      { name: 'GI Concertina Coil', path: '/products/fencing/gi-concertina-coil' },
      { name: 'SS Concertina Coil', path: '/products/fencing/ss-concertina-coil' },
    ],
    viewAllPath: '/products/fencing',
    viewAllLabel: 'View All Fencing',
  },
  {
    id: 'gates',
    name: 'Gates & Barriers',
    path: '/products/gates',
    description: 'Automated and manual gate systems for access control',
    items: [
      { name: 'Sliding Gates', path: '/products/gates/sliding-gates' },
      { name: 'Swing Gates', path: '/products/gates/swing-gates' },
      { name: 'Collapsible Barriers', path: '/products/gates/collapsible-barrier' },
      { name: 'Crash Rated Gates', path: '/products/fencing/crash-rated-fence' },
      { name: 'Architectural Gabions', path: '/products/gates/architectural-gabions' },
    ],
    viewAllPath: '/products/gates',
    viewAllLabel: 'View All Gates',
  },
  {
    id: 'defence',
    name: 'Defence Solutions',
    path: '/products/defence',
    description: 'Military-grade protection for strategic assets',
    items: [
      { name: 'Hesco Barriers', path: '/products/gates/hesco-box' },
      { name: 'Gabion Systems', path: '/products/gates/architectural-gabions' },
      { name: 'Blast Protection Systems', path: '/products/defence' },
      { name: 'Military Security Solutions', path: '/products/defence' },
      { name: 'DRDO TOT: Bukhari', path: '/products/drdo/bukhari' },
      { name: 'DRDO TOT: Vajra', path: '/products/drdo/vajra' },
    ],
    viewAllPath: '/products/defence',
    viewAllLabel: 'View All Defence',
  },
  {
    id: 'technology',
    name: 'Technology & AI',
    path: '/products/ai',
    description: 'Advanced intelligence and surveillance technologies',
    items: [
      { name: 'Deep Socmint', path: '/products/ai/deepsocmint' },
      { name: 'Image Enhancer', path: '/products/ai/image-enhancer' },
      { name: 'Project Consulting', path: '/contact' },
      { name: 'Custom Security Design', path: '/contact' },
    ],
    viewAllPath: '/products/ai',
    viewAllLabel: 'View All Technology',
  },
];

export const mainNavigation: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products', hasMegaMenu: true },
  { name: 'Industries', path: '/industries' },
  { name: 'Projects', path: '/projects' },
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
    phone: '+91 11 4606 7000',
    phoneHref: 'tel:+911146067000',
  },
};
