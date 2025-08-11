/**
 * Theme Utilities
 * Global Technocrats Website
 * 
 * This file provides utility functions and hooks for using theme colors
 * throughout the application.
 */

import { colors, themeColors, brandColors } from './colors';
import { 
  typography, 
  typographyScale, 
  typographyComponents, 
  typographyPresets, 
  getTypographyClasses,
  buildResponsiveTypography,
  buildTypographyClass
} from './typography';

// CSS Custom Properties for runtime theme switching
export const cssVariables = {
  '--color-primary': brandColors.primary,
  '--color-primary-hover': brandColors.primaryHover,
  '--color-primary-active': brandColors.primaryActive,
  '--color-primary-text': brandColors.primaryText,
  '--color-secondary': brandColors.secondary,
  '--color-secondary-hover': brandColors.secondaryHover,
  '--color-accent': brandColors.accent,
  '--color-accent-hover': brandColors.accentHover,
  '--color-text-primary': themeColors.text.primary,
  '--color-text-secondary': themeColors.text.secondary,
  '--color-text-muted': themeColors.text.muted,
  '--color-background-primary': themeColors.background.primary,
  '--color-background-secondary': themeColors.background.secondary,
  '--color-border-primary': themeColors.border.primary,
  '--color-border-secondary': themeColors.border.secondary,
};

// Utility function to get theme color
export const getThemeColor = (colorPath: string): string => {
  const pathParts = colorPath.split('.');
  let color: any = colors;
  
  for (const part of pathParts) {
    if (color[part]) {
      color = color[part];
    } else {
      console.warn(`Theme color path "${colorPath}" not found`);
      return '#000000'; // fallback color
    }
  }
  
  return typeof color === 'string' ? color : '#000000';
};

// Predefined color combinations for common UI patterns
export const colorCombinations = {
  // Primary button
  primaryButton: {
    background: 'bg-primary-900',
    text: 'text-white',
    hover: 'hover:bg-primary-800',
    active: 'active:bg-primary-950',
    focus: 'focus:ring-4 focus:ring-primary-200',
    disabled: 'disabled:bg-gray-300 disabled:text-gray-500'
  },
  
  // Secondary button
  secondaryButton: {
    background: 'bg-white',
    text: 'text-primary-900',
    border: 'border border-primary-200',
    hover: 'hover:bg-primary-50 hover:border-primary-300',
    active: 'active:bg-primary-100',
    focus: 'focus:ring-4 focus:ring-primary-200',
    disabled: 'disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200'
  },
  
  // Text on primary background
  primaryText: {
    primary: 'text-white',
    secondary: 'text-primary-100',
    muted: 'text-primary-200'
  },
  
  // Text on light background
  lightText: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-400',
    brand: 'text-primary-900'
  },
  
  // Cards and containers
  card: {
    background: 'bg-white',
    border: 'border border-gray-200',
    shadow: 'shadow-sm',
    hover: 'hover:shadow-md hover:border-gray-300',
    focus: 'focus:outline-none focus:ring-2 focus:ring-primary-500'
  },
  
  // Navigation
  navigation: {
    background: 'bg-white',
    text: 'text-gray-700',
    hover: 'hover:text-primary-900',
    active: 'text-primary-900',
    border: 'border-b border-gray-100'
  },
  
  // Form inputs
  input: {
    background: 'bg-white',
    border: 'border border-gray-300',
    text: 'text-gray-900',
    placeholder: 'placeholder-gray-400',
    focus: 'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
    error: 'border-red-500 focus:ring-red-500 focus:border-red-500'
  }
};

// Utility function to combine classes
export const combineClasses = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Theme class builder
export const buildThemeClasses = (pattern: keyof typeof colorCombinations): string => {
  const combination = colorCombinations[pattern];
  return Object.values(combination).join(' ');
};

// Export everything for easy importing
export {
  colors,
  themeColors,
  brandColors,
  typography,
  typographyScale,
  typographyComponents,
  typographyPresets,
  getTypographyClasses,
  buildResponsiveTypography,
  buildTypographyClass
};

// Default export
export default {
  colors,
  themeColors,
  brandColors,
  typography,
  typographyScale,
  typographyComponents,
  typographyPresets,
  getTypographyClasses,
  cssVariables,
  getThemeColor,
  colorCombinations,
  combineClasses,
  buildThemeClasses,
  buildResponsiveTypography,
  buildTypographyClass
};