/**
 * Typography Theme System
 * Global Technocrats Website
 * 
 * Centralized typography definitions for consistent, premium styling across the website.
 * All font sizes, weights, and line heights are defined here for maintainability.
 * 
 * Typography Hierarchy:
 * - Display: Largest text (hero sections, landing pages)
 * - Headings: H1-H6 semantic hierarchy
 * - Body: Standard paragraph text
 * - Caption: Small supporting text
 * - Label: Form labels, tags, badges
 */

// Base typography configuration
export const typography = {
  // Font families
  fontFamily: {
    sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
    heading: ['Playfair Display', 'serif'],
    mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
  },

  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  },

  // Line heights for optimal readability
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  },

  // Letter spacing for premium feel
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
} as const;

// Typography scale - responsive font sizes
export const typographyScale = {
  // Display text - for hero sections and major headings
  display: {
    xl: {
      desktop: 'text-7xl', // 72px
      tablet: 'text-6xl',  // 60px
      mobile: 'text-5xl'   // 48px
    },
    lg: {
      desktop: 'text-6xl', // 60px
      tablet: 'text-5xl',  // 48px
      mobile: 'text-4xl'   // 36px
    },
    md: {
      desktop: 'text-5xl', // 48px
      tablet: 'text-4xl',  // 36px
      mobile: 'text-3xl'   // 30px
    },
    sm: {
      desktop: 'text-4xl', // 36px
      tablet: 'text-3xl',  // 30px
      mobile: 'text-2xl'   // 24px
    }
  },

  // Headings - semantic hierarchy
  heading: {
    h1: {
      desktop: 'text-4xl', // 36px
      tablet: 'text-3xl',  // 30px
      mobile: 'text-2xl'   // 24px
    },
    h2: {
      desktop: 'text-3xl', // 30px
      tablet: 'text-2xl',  // 24px
      mobile: 'text-xl'    // 20px
    },
    h3: {
      desktop: 'text-2xl', // 24px
      tablet: 'text-xl',   // 20px
      mobile: 'text-lg'    // 18px
    },
    h4: {
      desktop: 'text-xl',  // 20px
      tablet: 'text-lg',   // 18px
      mobile: 'text-base'  // 16px
    },
    h5: {
      desktop: 'text-lg',  // 18px
      tablet: 'text-base', // 16px
      mobile: 'text-sm'    // 14px
    },
    h6: {
      desktop: 'text-base', // 16px
      tablet: 'text-sm',   // 14px
      mobile: 'text-xs'    // 12px
    }
  },

  // Body text
  body: {
    xl: 'text-xl',   // 20px
    lg: 'text-lg',   // 18px
    base: 'text-base', // 16px
    sm: 'text-sm',   // 14px
    xs: 'text-xs'    // 12px
  },

  // Caption text
  caption: {
    lg: 'text-sm',   // 14px
    base: 'text-xs', // 12px
    sm: 'text-xs'    // 12px
  }
} as const;

// Typography component classes for consistent styling
export const typographyComponents = {
  // Display text classes
  display: {
    xl: 'font-heading font-bold tracking-tight leading-tight',
    lg: 'font-heading font-bold tracking-tight leading-tight',
    md: 'font-heading font-semibold tracking-tight leading-snug',
    sm: 'font-heading font-semibold tracking-tight leading-snug'
  },

  // Heading classes
  heading: {
    h1: 'font-heading font-bold tracking-tight leading-tight text-gray-900',
    h2: 'font-heading font-semibold tracking-tight leading-snug text-gray-900',
    h3: 'font-heading font-semibold tracking-tight leading-snug text-gray-800',
    h4: 'font-sans font-semibold tracking-wide leading-normal text-gray-800',
    h5: 'font-sans font-medium tracking-wide leading-normal text-gray-700',
    h6: 'font-sans font-medium tracking-wider leading-normal text-gray-700'
  },

  // Body text classes
  body: {
    xl: 'font-sans font-normal leading-relaxed text-gray-700',
    lg: 'font-sans font-normal leading-relaxed text-gray-700',
    base: 'font-sans font-normal leading-normal text-gray-600',
    sm: 'font-sans font-normal leading-normal text-gray-600',
    xs: 'font-sans font-normal leading-snug text-gray-500'
  },

  // Caption classes
  caption: {
    lg: 'font-sans font-medium tracking-wide leading-snug text-gray-500',
    base: 'font-sans font-medium tracking-wider leading-snug text-gray-400',
    sm: 'font-sans font-medium tracking-widest leading-tight text-gray-400'
  },

  // Special purpose classes
  label: 'font-sans font-medium tracking-wide leading-snug text-gray-700',
  badge: 'font-sans font-semibold tracking-wider leading-tight text-xs',
  button: 'font-sans font-semibold tracking-wide leading-snug',
  link: 'font-sans font-medium tracking-normal leading-normal text-primary-600 hover:text-primary-700',
  
  // Premium text effects
  luxury: {
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent',
    shadow: 'text-shadow-sm',
    glow: 'text-white drop-shadow-lg'
  }
} as const;

// Responsive typography utility builder
export const buildResponsiveTypography = (
  scaleKey: keyof typeof typographyScale.heading | keyof typeof typographyScale.display,
  type: 'heading' | 'display' = 'heading'
): string => {
  const scale = typographyScale[type][scaleKey];
  if (!scale) return '';
  
  return `${scale.mobile} md:${scale.tablet} lg:${scale.desktop}`;
};

// Typography class builders for components
export const buildTypographyClass = (
  element: 'display' | 'heading' | 'body' | 'caption',
  size: string,
  responsive: boolean = true
): string => {
  const baseClass = typographyComponents[element][size as keyof typeof typographyComponents[typeof element]];
  
  if (!responsive || element === 'body' || element === 'caption') {
    const sizeClass = element === 'body' ? typographyScale.body[size as keyof typeof typographyScale.body] :
                     element === 'caption' ? typographyScale.caption[size as keyof typeof typographyScale.caption] :
                     '';
    return `${baseClass} ${sizeClass}`;
  }
  
  // For display and heading elements, add responsive sizes
  const responsiveSize = buildResponsiveTypography(size, element);
  return `${baseClass} ${responsiveSize}`;
};

// Utility functions for dynamic typography
export const getTypographyClasses = {
  // Get display classes
  display: (size: 'xl' | 'lg' | 'md' | 'sm') => 
    buildTypographyClass('display', size, true),

  // Get heading classes
  heading: (level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => 
    buildTypographyClass('heading', level, true),

  // Get body classes
  body: (size: 'xl' | 'lg' | 'base' | 'sm' | 'xs') => 
    buildTypographyClass('body', size, false),

  // Get caption classes
  caption: (size: 'lg' | 'base' | 'sm') => 
    buildTypographyClass('caption', size, false),

  // Get special classes
  label: () => typographyComponents.label,
  badge: () => typographyComponents.badge,
  button: () => typographyComponents.button,
  link: () => typographyComponents.link
};

// Typography presets for common UI patterns
export const typographyPresets = {
  // Hero section
  hero: {
    title: getTypographyClasses.display('xl'),
    subtitle: getTypographyClasses.body('xl'),
    description: getTypographyClasses.body('lg')
  },

  // Section headers
  section: {
    title: getTypographyClasses.heading('h2'),
    subtitle: getTypographyClasses.body('lg'),
    description: getTypographyClasses.body('base')
  },

  // Card content
  card: {
    title: getTypographyClasses.heading('h3'),
    subtitle: getTypographyClasses.heading('h5'),
    content: getTypographyClasses.body('sm'),
    caption: getTypographyClasses.caption('base')
  },

  // Article/Blog content
  article: {
    title: getTypographyClasses.heading('h1'),
    subtitle: getTypographyClasses.heading('h3'),
    lead: getTypographyClasses.body('lg'),
    body: getTypographyClasses.body('base'),
    caption: getTypographyClasses.caption('lg')
  },

  // Navigation
  navigation: {
    primary: 'font-sans font-medium text-base tracking-normal text-gray-700 hover:text-primary-600',
    secondary: 'font-sans font-normal text-sm tracking-wide text-gray-600 hover:text-primary-600',
    breadcrumb: 'font-sans font-normal text-sm tracking-normal text-gray-500'
  },

  // Form elements
  form: {
    label: 'font-sans font-medium text-sm tracking-wide text-gray-700',
    input: 'font-sans font-normal text-base tracking-normal text-gray-900',
    helper: 'font-sans font-normal text-xs tracking-normal text-gray-500',
    error: 'font-sans font-medium text-xs tracking-normal text-red-600'
  }
} as const;

export default {
  typography,
  typographyScale,
  typographyComponents,
  buildResponsiveTypography,
  buildTypographyClass,
  getTypographyClasses,
  typographyPresets
};