# Typography System Documentation
## Global Technocrats Website

This document provides comprehensive guidelines for using the typography system across the Global Technocrats website. The system ensures consistent, premium styling and maintains accessibility standards.

## Overview

The typography system consists of:
- **Theme Configuration** (`src/theme/typography.ts`)
- **CSS Utility Classes** (`src/index.css`)
- **React Components** (`src/components/ui/Typography.tsx`)
- **Tailwind Configuration** (`tailwind.config.js`)

## Font Families

### Primary Font Stack
- **Sans-serif (Body)**: Plus Jakarta Sans - Used for body text, buttons, navigation
- **Serif (Headings)**: Playfair Display - Used for headlines and major headings
- **Monospace**: System monospace - Used for code and technical content

### Usage Guidelines
```tsx
// ✅ Correct - Use theme classes
<h1 className="typography-heading-1">Main Heading</h1>
<p className="typography-body-base">Body content</p>

// ❌ Avoid - Direct font family classes
<h1 className="font-heading text-4xl">Main Heading</h1>
```

## Typography Scale

### Display Text (Hero Sections)
```tsx
// Extra Large - Hero sections
<h1 className="typography-display-xl">Hero Title</h1>

// Large - Major section headers
<h1 className="typography-display-lg">Section Hero</h1>

// Medium - Sub-hero content
<h2 className="typography-display-md">Featured Content</h2>

// Small - Compact display text
<h3 className="typography-display-sm">Card Headers</h3>
```

### Semantic Headings
```tsx
<h1 className="typography-heading-1">Page Title</h1>
<h2 className="typography-heading-2">Section Title</h2>
<h3 className="typography-heading-3">Subsection Title</h3>
<h4 className="typography-heading-4">Component Title</h4>
<h5 className="typography-heading-5">Small Heading</h5>
<h6 className="typography-heading-6">Caption Heading</h6>
```

### Body Text
```tsx
<p className="typography-body-xl">Lead paragraph</p>
<p className="typography-body-lg">Large body text</p>
<p className="typography-body-base">Standard body text</p>
<p className="typography-body-sm">Small body text</p>
<p className="typography-body-xs">Fine print</p>
```

### Caption Text
```tsx
<span className="typography-caption-lg">Large caption</span>
<span className="typography-caption-base">Standard caption</span>
<span className="typography-caption-sm">Small caption</span>
```

## React Components

Use the Typography components for consistent styling:

```tsx
import Typography from '@/components/ui/Typography';
import { HeroTitle, SectionTitle, Body } from '@/components/ui/Typography';

// Pre-configured components
<HeroTitle>Welcome to Global Technocrats</HeroTitle>
<SectionTitle>Our Products</SectionTitle>
<Body size="lg">Large body text content</Body>

// Flexible components
<Typography.Display size="xl" gradient>
  Hero with Gradient
</Typography.Display>

<Typography.Heading level={2}>
  Section Heading
</Typography.Heading>

<Typography.Body size="base">
  Standard paragraph content
</Typography.Body>
```

## Specialized Components

### Navigation
```tsx
<span className="typography-nav-primary">Main Navigation</span>
<span className="typography-nav-secondary">Secondary Navigation</span>
<span className="typography-breadcrumb">Home / Products / Fencing</span>
```

### UI Elements
```tsx
<label className="typography-form-label">Form Label</label>
<span className="typography-badge">New</span>
<a className="typography-link">Standard Link</a>
<button className="typography-button">Button Text</button>
```

### Luxury Effects
```tsx
<h1 className="typography-display-xl typography-luxury-gradient">
  Gradient Hero Text
</h1>

<h2 className="typography-heading-2 typography-luxury-shadow">
  Text with Shadow
</h2>

<span className="typography-luxury-glow">
  Glowing Text Effect
</span>
```

## Preset Combinations

Use these preset classes for common UI patterns:

```tsx
// Hero Section
<h1 className="typography-hero-title">Hero Title</h1>
<p className="typography-hero-subtitle">Hero Subtitle</p>

// Section Headers
<h2 className="typography-section-title">Section Title</h2>
<p className="typography-section-subtitle">Section Description</p>

// Card Content
<h3 className="typography-card-title">Card Title</h3>
<p className="typography-card-content">Card content text</p>

// Forms
<label className="typography-form-label">Label</label>
<span className="typography-form-helper">Helper text</span>
<span className="typography-form-error">Error message</span>
```

## Responsive Design

All display and heading classes are responsive by default:

```css
/* Automatic responsive scaling */
.typography-display-xl {
  /* Mobile: text-5xl */
  /* Tablet: text-6xl */
  /* Desktop: text-7xl */
}

.typography-heading-1 {
  /* Mobile: text-2xl */
  /* Tablet: text-3xl */
  /* Desktop: text-4xl */
}
```

## Color Guidelines

### Text Colors
- **Primary Text**: `text-gray-900` (Headings)
- **Secondary Text**: `text-gray-700` (Large body)
- **Body Text**: `text-gray-600` (Standard text)
- **Muted Text**: `text-gray-500` (Captions, helpers)
- **Light Text**: `text-gray-400` (Disabled, placeholders)

### Brand Colors
- **Primary Links**: `text-primary-600` → `hover:text-primary-700`
- **Brand Text**: Use gradient classes for special emphasis

## Accessibility

### Font Size Guidelines
- Minimum readable size: `text-sm` (14px)
- Recommended body size: `text-base` (16px)
- Maximum line length: 65-75 characters
- Line height: 1.5 for body text, 1.25 for headings

### Color Contrast
All text color combinations meet WCAG AA standards:
- Primary text on white: ✅ 4.5:1 ratio
- Secondary text on white: ✅ 4.5:1 ratio
- Body text on white: ✅ 4.5:1 ratio

## Migration Guide

### From Old System
```tsx
// ❌ Old inconsistent approach
<h1 className="text-4xl font-bold text-gray-900">Title</h1>
<p className="text-lg text-gray-600">Description</p>

// ✅ New consistent approach
<h1 className="typography-heading-1">Title</h1>
<p className="typography-body-lg">Description</p>
```

### Component Updates
1. Replace hardcoded font classes with typography utilities
2. Use semantic heading levels consistently
3. Apply appropriate text colors from the palette
4. Ensure responsive sizing for display text

## Best Practices

### Do's ✅
- Use semantic HTML tags (`h1`, `h2`, `p`, etc.)
- Apply typography classes consistently
- Follow the established hierarchy
- Use responsive classes for display text
- Test on multiple screen sizes

### Don'ts ❌
- Don't use hardcoded font sizes
- Don't skip heading levels (h1 → h3)
- Don't use display classes for body text
- Don't override typography styles inline
- Don't mix font families arbitrarily

## Performance Considerations

### Font Loading
- Fonts are loaded via Google Fonts with `display=swap`
- Critical text uses system fallbacks during load
- Preload hints optimize first paint

### CSS Bundle Size
- Typography utilities are generated only for used classes
- Purge unused styles in production builds
- Optimize for minimal CSS payload

## Examples

### Landing Page Hero
```tsx
<section className="section-luxury">
  <div className="container">
    <h1 className="typography-hero-title mb-6">
      Advanced Defense Solutions
    </h1>
    <p className="typography-hero-subtitle mb-8">
      Pioneering security technology for modern challenges
    </p>
    <button className="btn btn-primary typography-button">
      Explore Products
    </button>
  </div>
</section>
```

### Product Card
```tsx
<div className="card-luxury">
  <h3 className="typography-card-title mb-4">
    Vajra Defense System
  </h3>
  <p className="typography-card-content mb-6">
    Advanced perimeter security solution with integrated AI monitoring.
  </p>
  <span className="typography-badge bg-primary-100 text-primary-700">
    Featured
  </span>
</div>
```

### Article Content
```tsx
<article>
  <h1 className="typography-heading-1 mb-4">
    The Future of Defense Technology
  </h1>
  <p className="typography-body-lg mb-6">
    Lead paragraph with larger text to draw reader attention.
  </p>
  <p className="typography-body-base mb-4">
    Standard body paragraph with optimal readability.
  </p>
  <aside className="typography-caption-lg">
    Published on July 14, 2025
  </aside>
</article>
```

This typography system ensures consistent, accessible, and premium styling across the entire Global Technocrats website. Always refer to this guide when implementing new components or updating existing ones.