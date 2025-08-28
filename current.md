# Current System - Product & Media Management

## Overview
Centralized data management system with single source of truth for all products and media assets.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      PRESENTATION LAYER                         │
├─────────────────────────────────────────────────────────────────┤
│  Pages: PeoplePage, ProductDetailPage, FencingSolutionsPage     │
│  Components: HeroSection, ProductCard, etc.                     │
└─────────────────┬───────────────────────────────┬───────────────┘
                  │                               │
                  ▼                               ▼
┌─────────────────────────────────┐ ┌─────────────────────────────────┐
│         PRODUCT DATA            │ │         MEDIA DATA              │
├─────────────────────────────────┤ ├─────────────────────────────────┤
│  src/data/products.ts           │ │  src/data/mediaAssets.ts        │
│  - Product interfaces           │ │  - Media asset interfaces       │
│  - Product data array           │ │  - Centralized asset URLs       │
│  - Helper functions             │ │  - Helper functions             │
└─────────────────┬───────────────┘ └─────────────────┬───────────────┘
                  │                                   │
                  ▼                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                      PHYSICAL ASSETS                            │
├─────────────────────────────────────────────────────────────────┤
│  public/images/ - Local image files                             │
│  External URLs  - Unsplash, Supabase, CDN                      │
└─────────────────────────────────────────────────────────────────┘
```

## File Structure

```
project/
├── src/
│   ├── data/
│   │   ├── products.ts          # Product management
│   │   └── mediaAssets.ts       # Media management
│   ├── pages/
│   │   ├── ProductDetailPage.tsx
│   │   ├── PeoplePage.tsx
│   │   └── ...
│   └── components/
│       └── ...
├── public/
│   ├── images/                  # Local image assets
│   │   ├── people/
│   │   ├── products/
│   │   └── ...
│   └── videos/                  # Local video assets
└── current.md                   # This file
```

## Product Management System

### Data Structure
Location: `src/data/products.ts`

```typescript
interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  // ... other fields
}
```

### How to Add/Edit Products

1. **Add new product:**
```typescript
// In src/data/products.ts
export const productsData: Product[] = [
  {
    id: 'new-product',
    name: 'New Security System',
    category: 'security',
    description: 'Advanced security solution...',
    images: [
      getImageUrl('products', 'new-security-main'),
      getImageUrl('products', 'new-security-detail')
    ],
    // ... other fields
  }
]
```

2. **Update existing product:**
   - Find product by ID in `productsData` array
   - Modify fields directly
   - Changes reflect automatically in all components

### Helper Functions
```typescript
getProductById(id: string)           # Get single product
getCategoryTitle(category: string)   # Get category display name
```

## Media Management System

### Data Structure
Location: `src/data/mediaAssets.ts`

```typescript
interface MediaAsset {
  url: string;
  alt?: string;
  fallback?: string;
}

interface MediaAssets {
  heroes: { video: string; images: Record<string, MediaAsset>; };
  people: Record<string, MediaAsset>;
  products: Record<string, MediaAsset>;
  company: { story: Record<string, MediaAsset>; };
}
```

### Asset Categories

| Category | Purpose | Example Key |
|----------|---------|-------------|
| `heroes` | Hero videos/images | `video`, `main` |
| `people` | Executive photos | `atul-agarwal` |
| `products` | Product images | `anti-climb-fencing` |
| `company.story` | About page images | `team-meeting` |

### How to Add/Replace Media

**Step 1: Update Data Reference**
```typescript
// In src/data/mediaAssets.ts
products: {
  'new-product': {
    url: '/images/new-product.jpg',
    alt: 'New Product Description'
  }
}
```

**Step 2: Add Physical File**
```bash
# Place image file
public/images/new-product.jpg
```

**Step 3: Use in Components**
```typescript
import { getImageUrl } from '../data/mediaAssets';

// In component
<img src={getImageUrl('products', 'new-product')} />
```

### Helper Functions
```typescript
getImageUrl(category, key)          # Get image URL with fallback
getImageAlt(category, key)          # Get alt text
getMediaAsset(category, key)        # Get full asset object
```

## Usage Examples

### Display Product with Image
```typescript
// Component code
const product = getProductById('anti-climb');
<img src={getImageUrl('products', 'anti-climb-fencing')} 
     alt={getImageAlt('products', 'anti-climb-fencing')} />
```

### Add New Executive
```typescript
// 1. Add to mediaAssets.ts
people: {
  'jane-smith': {
    url: '/images/jane-smith.jpg',
    alt: 'Jane Smith - VP Engineering'
  }
}

// 2. Add image file: public/images/jane-smith.jpg
// 3. Use: getImageUrl('people', 'jane-smith')
```

### Replace Hero Video
```typescript
// 1. Update mediaAssets.ts
heroes: {
  video: "/videos/new-hero.mp4"  // Changed URL
}

// 2. Add file: public/videos/new-hero.mp4
// Component automatically uses new video
```

## Benefits

✅ **Single Source of Truth** - All data/media in central files  
✅ **Type Safety** - TypeScript interfaces prevent errors  
✅ **Automatic Fallbacks** - Broken assets show placeholder  
✅ **Easy Maintenance** - Update once, works everywhere  
✅ **No Scattered References** - No hardcoded paths in components  
✅ **Development Speed** - Helper functions simplify usage  

## Quick Reference

| Task | File | Action |
|------|------|--------|
| Add product | `products.ts` | Add to `productsData` array |
| Add image | `mediaAssets.ts` + `public/images/` | Add reference + file |
| Replace image | `mediaAssets.ts` | Change URL, optionally replace file |
| Use in component | Any `.tsx` file | `getImageUrl('category', 'key')` |