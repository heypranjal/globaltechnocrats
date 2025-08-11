// Navigation data for Global Technocrats website
// Used by Header component and HeroSection

export const productCategories = [
  { name: 'Fencing Solutions', path: '/products/fencing', hasSubmenu: false },
  { name: 'Gates & Barriers', path: '/products/gates' },
  { name: 'Advanced AI Products', path: '/products/ai' },
  { name: 'DRDO TOT', path: '/products/drdo' },
  { name: 'Defence Tech', path: '/products/defence' },
];

export const mainNavigation = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products', hasDropdown: true },
  { name: 'Our Story', path: '/our-story' },
  { name: 'People', path: '/people' },
  { name: 'Contact Us', path: '/contact' },
];

export const navigationConfig = {
  productCategories,
  mainNavigation,
  ctaButton: {
    text: 'Get a Quote',
    path: '/contact'
  }
};