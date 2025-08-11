/**
 * Centralized Theme Color System
 * Global Technocrats Website
 * 
 * This file manages all color tokens for the website theme.
 * Primary color: #072ac8 (requested blue)
 */

// Helper function to generate color variations
const generateColorScale = (baseColor: string, name: string) => {
  // For #072ac8, we'll create a proper color scale
  const scales = {
    primary: {
      50: '#f0f4ff',
      100: '#e1e9ff',
      200: '#c8d6ff',
      300: '#a3b8ff',
      400: '#7b94ff',
      500: '#5570ff',
      600: '#3d4ff5',
      700: '#2937d8',
      800: '#1f2bb0',
      900: '#072ac8', // Base color
      950: '#051f94'
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    accent: {
      50: '#fef7f0',
      100: '#feeee1',
      200: '#fdd9c2',
      300: '#fbbe96',
      400: '#f89868',
      500: '#f57c45',
      600: '#e65c2b',
      700: '#c14822',
      800: '#9a3a23',
      900: '#7c3321',
      950: '#431a0e'
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16'
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03'
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712'
    }
  };

  return scales[name as keyof typeof scales] || scales.primary;
};

// Main color palette with #072ac8 as primary
export const colors = {
  // Primary brand colors (based on #072ac8)
  primary: {
    50: '#f0f4ff',
    100: '#e1e9ff',
    200: '#c8d6ff',
    300: '#a3b8ff',
    400: '#7b94ff',
    500: '#5570ff',
    600: '#3d4ff5',
    700: '#2937d8',
    800: '#1f2bb0',
    900: '#072ac8', // Main brand color
    950: '#051f94'
  },
  
  // Secondary colors (neutral grays)
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
  },

  // Accent colors (warm orange/red)
  accent: {
    50: '#fef7f0',
    100: '#feeee1',
    200: '#fdd9c2',
    300: '#fbbe96',
    400: '#f89868',
    500: '#f57c45',
    600: '#e65c2b',
    700: '#c14822',
    800: '#9a3a23',
    900: '#7c3321',
    950: '#431a0e'
  },

  // Semantic colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03'
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a'
  },

  // Gray scale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712'
  }
};

// Semantic color mapping for components
export const themeColors = {
  // Brand colors
  brand: {
    primary: colors.primary[900], // #072ac8
    primaryLight: colors.primary[100],
    primaryDark: colors.primary[950],
    secondary: colors.secondary[500],
    accent: colors.accent[500]
  },

  // Text colors
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    muted: colors.gray[400],
    inverse: '#ffffff',
    brand: colors.primary[900]
  },

  // Background colors
  background: {
    primary: '#ffffff',
    secondary: colors.gray[50],
    muted: colors.gray[100],
    dark: colors.gray[900],
    brand: colors.primary[900]
  },

  // Border colors
  border: {
    primary: colors.gray[200],
    secondary: colors.gray[300],
    muted: colors.gray[100],
    brand: colors.primary[900]
  },

  // State colors
  state: {
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    info: colors.primary[500]
  }
};

// Export individual color tokens for easy access
export const brandColors = {
  primary: colors.primary[900], // #072ac8
  primaryHover: colors.primary[800],
  primaryActive: colors.primary[950],
  primaryText: '#ffffff',
  
  secondary: colors.secondary[500],
  secondaryHover: colors.secondary[600],
  secondaryActive: colors.secondary[700],
  
  accent: colors.accent[500],
  accentHover: colors.accent[600],
  accentActive: colors.accent[700]
};

// Type definitions for theme colors
export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type ThemeColors = typeof colors;
export type BrandColors = typeof brandColors;

// Default export
export default {
  colors,
  themeColors,
  brandColors
};