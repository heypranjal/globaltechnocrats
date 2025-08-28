# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build & Development
```bash
npm run dev          # Start development server (Vite)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint code checking
```

### Development Server
- Development server runs on `http://localhost:5173` (Vite default)
- Hot module replacement (HMR) enabled
- TypeScript compilation integrated

## Project Architecture

### Technology Stack
- **React 18.3.1** with TypeScript
- **Vite 6.3.4** for build tooling
- **Tailwind CSS 3.4.1** for styling
- **React Router DOM 6.22.3** for routing
- **Framer Motion** for animations

### Key Libraries
- `@radix-ui/react-menubar` - Accessible menu components
- `@stagewise/toolbar-react` - Development toolbar (Stagewise integration)
- `lucide-react` - Icon library
- `react-helmet` - SEO meta tag management
- `react-intersection-observer` - Scroll animations

### Project Structure
```
src/
├── components/
│   ├── common/           # Header, Footer, CookieConsent
│   ├── home/            # HomePage sections (Hero, Products, CTA, etc.)
│   ├── navigation/      # Menu components (Main, Mobile, Fencing submenu)
│   ├── people/          # People page components
│   ├── products/        # Product-related components
│   └── ui/              # Reusable UI components
├── data/
│   ├── navigation.ts    # Navigation configuration
│   └── products.ts      # Product data and interfaces
├── hooks/               # Custom React hooks
├── layouts/
│   └── MainLayout.tsx   # Main page wrapper
├── pages/               # Route-level components
├── theme/               # Theme configuration (colors, typography)
└── utils/               # Utility functions
```

### Architecture Principles

#### Component Organization
- **Component Limit**: Keep components under 300 lines - split into multiple components if larger
- **Feature-based Structure**: Group related components by domain (home, products, people)
- **Reusable UI**: Common components in `src/components/ui/`
- **Page Components**: Route-level components in `src/pages/`

#### Data Management
- **Centralized Product Data**: All product information in `src/data/products.ts`
- **Navigation Config**: Menu structure in `src/data/navigation.ts`
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures

#### Routing Structure
- **Main Routes**: `/`, `/products`, `/our-story`, `/people`, `/contact`
- **Product Categories**: 
  - `/products/fencing` - Fencing Solutions
  - `/products/gates` - Gates & Barriers
  - `/products/ai` - Advanced AI Products
  - `/products/drdo` - DRDO TOT Products
  - `/products/defence` - Defence Tech
- **Dynamic Product Routes**: `/products/:category/:productId`

### Design System

#### Theme Configuration
- **Colors**: Defined in `src/theme/colors.ts` and Tailwind config
- **Typography**: Custom font stacks - Plus Jakarta Sans (body), Playfair Display (headings)
- **Brand Colors**:
  - Primary: `#072ac8` (brand-primary)
  - Primary Light: `#e1e9ff` 
  - Accent: Orange tones for CTAs

#### Styling Approach
- **Tailwind-first**: Utility classes for styling
- **Custom Design Tokens**: Extended Tailwind config with custom colors, spacing, animations
- **Responsive Design**: Mobile-first responsive approach
- **Animation System**: Custom keyframes and Framer Motion integration

### State Management
- **Local State**: React useState for component-level state
- **Props Drilling**: Minimal - keep state local to components
- **Custom Hooks**: Reusable state logic in `src/hooks/`
- **Context**: Limited use - mainly for theme or global UI state

### Key Components

#### Layout System
- **MainLayout**: Wraps all pages with Header/Footer
- **Header**: Navigation with product dropdown menus
- **Footer**: Company information and links

#### Home Page Sections
- **HeroSection**: Video background with CTA
- **ProductCategoriesSection**: Product showcase cards
- **ClientsSection**: Client logos and testimonials
- **GlobalPresenceSection**: Geographic presence
- **TestimonialsSection**: Customer testimonials
- **NewsSection**: Company news/updates
- **CTASection**: Contact call-to-action

#### Product System
- **ProductCard**: Reusable product display component
- **CategorySection**: Product category pages
- **ProductFilters**: Filter/search functionality
- **Product Interface**: TypeScript interface in `src/data/products.ts`

### Development Guidelines

#### Code Quality
- **TypeScript Strict**: All files use TypeScript with strict mode
- **ESLint Configuration**: Uses React and TypeScript ESLint rules
- **Component Props**: Always define TypeScript interfaces for props
- **Import Organization**: Use absolute imports with `@/` alias (configured in Vite)

#### Performance
- **Lazy Loading**: Route-based code splitting via React Router
- **Image Optimization**: Use responsive images and proper formats
- **Bundle Optimization**: Vite handles automatic code splitting and tree shaking

#### Accessibility
- **Semantic HTML**: Use proper semantic elements
- **ARIA Labels**: Include accessibility attributes where needed
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Screen Reader**: Test with screen readers

### Stagewise Integration
- **Toolbar**: Development toolbar integrated via `@stagewise/toolbar-react`
- **React Plugin**: Uses `@stagewise-plugins/react` for enhanced development
- **Configuration**: Stagewise config in `stagewise.json`

### Content Management
- **Product Data**: Centralized in `src/data/products.ts` with comprehensive TypeScript interfaces
- **Navigation**: Configured in `src/data/navigation.ts`
- **SEO**: React Helmet for dynamic meta tags and titles
- **Images**: Store in `public/images/` or use external URLs

### Testing Strategy
- **No Current Tests**: Project doesn't have test setup yet
- **Future Testing**: Structure supports Jest + React Testing Library
- **Component Testing**: Components designed for easy testing with clear props interfaces

### Deployment Notes
- **Static Build**: Generates static files via Vite build
- **Asset Optimization**: Vite handles minification and bundling
- **Environment Variables**: Use Vite's env variable system
- **CDN Ready**: Optimized for CDN deployment

### Common Development Patterns

#### Adding New Pages
1. Create page component in `src/pages/`
2. Add route to `App.tsx`
3. Update navigation in `src/data/navigation.ts` if needed
4. Ensure proper TypeScript typing

#### Adding Product Categories
1. Update product data in `src/data/products.ts`
2. Add category route to `App.tsx`
3. Create category page if needed
4. Update navigation dropdowns

#### Component Development
1. Keep components under 300 lines
2. Use TypeScript interfaces for props
3. Follow existing naming conventions
4. Use Tailwind for styling
5. Consider reusability and composition