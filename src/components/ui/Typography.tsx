/**
 * Typography Component System
 * Global Technocrats Website
 * 
 * Provides consistent typography components that enforce the design system.
 * Use these components instead of raw HTML tags to ensure consistency.
 */

import React from 'react';
import { cn } from '../../lib/utils';

// Typography component prop types
interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

interface BodyProps extends TypographyProps {
  size?: 'xl' | 'lg' | 'base' | 'sm' | 'xs';
}

interface DisplayProps extends TypographyProps {
  size?: 'xl' | 'lg' | 'md' | 'sm';
  gradient?: boolean;
}

interface CaptionProps extends TypographyProps {
  size?: 'lg' | 'base' | 'sm';
}

// Display components for hero sections and major headings
export const Display: React.FC<DisplayProps> = ({ 
  children, 
  size = 'lg', 
  gradient = false, 
  className, 
  as: Component = 'h1' 
}) => {
  const baseClasses = `typography-display-${size}`;
  const gradientClasses = gradient ? 'typography-luxury-gradient' : '';
  
  return (
    <Component className={cn(baseClasses, gradientClasses, className)}>
      {children}
    </Component>
  );
};

// Heading components with semantic levels
export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  level = 1, 
  className, 
  as 
}) => {
  const Component = as || `h${level}`;
  const baseClasses = `typography-heading-${level}`;
  
  return (
    <Component className={cn(baseClasses, className)}>
      {children}
    </Component>
  );
};

// Body text components
export const Body: React.FC<BodyProps> = ({ 
  children, 
  size = 'base', 
  className, 
  as: Component = 'p' 
}) => {
  const baseClasses = `typography-body-${size}`;
  
  return (
    <Component className={cn(baseClasses, className)}>
      {children}
    </Component>
  );
};

// Caption/small text components
export const Caption: React.FC<CaptionProps> = ({ 
  children, 
  size = 'base', 
  className, 
  as: Component = 'span' 
}) => {
  const baseClasses = `typography-caption-${size}`;
  
  return (
    <Component className={cn(baseClasses, className)}>
      {children}
    </Component>
  );
};

// Specialized components for common UI patterns
export const Label: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'label' 
}) => {
  return (
    <Component className={cn('typography-label', className)}>
      {children}
    </Component>
  );
};

export const Badge: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'span' 
}) => {
  return (
    <Component className={cn('typography-badge', className)}>
      {children}
    </Component>
  );
};

export const Link: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'a' 
}) => {
  return (
    <Component className={cn('typography-link', className)}>
      {children}
    </Component>
  );
};

// Pre-configured components for common patterns
export const HeroTitle: React.FC<Omit<TypographyProps, 'as'>> = ({ 
  children, 
  className 
}) => {
  return (
    <h1 className={cn('typography-hero-title', className)}>
      {children}
    </h1>
  );
};

export const HeroSubtitle: React.FC<Omit<TypographyProps, 'as'>> = ({ 
  children, 
  className 
}) => {
  return (
    <p className={cn('typography-hero-subtitle', className)}>
      {children}
    </p>
  );
};

export const SectionTitle: React.FC<Omit<TypographyProps, 'as'>> = ({ 
  children, 
  className 
}) => {
  return (
    <h2 className={cn('typography-section-title', className)}>
      {children}
    </h2>
  );
};

export const SectionSubtitle: React.FC<Omit<TypographyProps, 'as'>> = ({ 
  children, 
  className 
}) => {
  return (
    <p className={cn('typography-section-subtitle', className)}>
      {children}
    </p>
  );
};

export const CardTitle: React.FC<Omit<TypographyProps, 'as'>> = ({ 
  children, 
  className 
}) => {
  return (
    <h3 className={cn('typography-card-title', className)}>
      {children}
    </h3>
  );
};

export const CardContent: React.FC<Omit<TypographyProps, 'as'>> = ({ 
  children, 
  className 
}) => {
  return (
    <p className={cn('typography-card-content', className)}>
      {children}
    </p>
  );
};

// Navigation typography components
export const NavPrimary: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'span' 
}) => {
  return (
    <Component className={cn('typography-nav-primary', className)}>
      {children}
    </Component>
  );
};

export const NavSecondary: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'span' 
}) => {
  return (
    <Component className={cn('typography-nav-secondary', className)}>
      {children}
    </Component>
  );
};

export const Breadcrumb: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'span' 
}) => {
  return (
    <Component className={cn('typography-breadcrumb', className)}>
      {children}
    </Component>
  );
};

// Form typography components
export const FormLabel: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'label' 
}) => {
  return (
    <Component className={cn('typography-form-label', className)}>
      {children}
    </Component>
  );
};

export const FormHelper: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'span' 
}) => {
  return (
    <Component className={cn('typography-form-helper', className)}>
      {children}
    </Component>
  );
};

export const FormError: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'span' 
}) => {
  return (
    <Component className={cn('typography-form-error', className)}>
      {children}
    </Component>
  );
};

// Export all components as a default object for easier importing
export default {
  Display,
  Heading,
  Body,
  Caption,
  Label,
  Badge,
  Link,
  HeroTitle,
  HeroSubtitle,
  SectionTitle,
  SectionSubtitle,
  CardTitle,
  CardContent,
  NavPrimary,
  NavSecondary,
  Breadcrumb,
  FormLabel,
  FormHelper,
  FormError
};