/**
 * Centralized Media Assets Management
 * Single source of truth for all images, videos, and media references
 */

export interface MediaAsset {
  url: string;
  alt?: string;
  fallback?: string;
}

export interface MediaAssets {
  heroes: {
    video: string;
    images: Record<string, MediaAsset>;
  };
  people: Record<string, MediaAsset>;
  products: Record<string, MediaAsset>;
  company: {
    story: Record<string, MediaAsset>;
  };
}

export const mediaAssets: MediaAssets = {
  heroes: {
    video: "https://www.youtube.com/embed/niq8UN4bT8M?autoplay=1&mute=1&loop=1&playlist=niq8UN4bT8M&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1",
    images: {
      main: {
        url: "/GT Hero Image.png",
        alt: "Global Technocrats Hero",
        fallback: "/GT Hero Image-whitebg.jpg"
      },
      whiteBg: {
        url: "/GT Hero Image-whitebg.jpg", 
        alt: "Global Technocrats Hero - White Background"
      },
      jpeg: {
        url: "/Hero Image.jpeg",
        alt: "Global Technocrats Hero"
      }
    }
  },

  people: {
    'atul-agarwal': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1778130121/Atul-Agarwal-650x650_rvpgul.png',
      alt: 'Atul Agarwal - Global Technocrats'
    },
    'krishna-khanna': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1792065184/Mr_Krishna_khanna_pggvkc.jpg',
      alt: 'Krishna Khanna - Global Technocrats'
    },
    'surinder-kumar': {
      url: '/images/Surinder-Kumar.png',
      alt: 'Surinder Kumar - Global Technocrats'
    },
    'vijay-verma': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1792065208/WhatsApp_Image_2026-10-12_at_16.10.09_zy4xuu.jpg',
      alt: 'Vijay Verma - Global Technocrats'
    },
    'vijendra-sharma': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1792065186/vijendra_hhdh2d.jpg',
      alt: 'Vijendra Sharma - Global Technocrats'
    }
  },

  products: {
    'anti-climb-fencing': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1787364042/WhatsApp_Image_2026-08-21_at_12.06.59_fmxyuj.jpg',
      alt: 'Anti Climb Fencing Solution'
    },
    'razor-mesh-fencing': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730040/1.a_wmnrwz.png',
      alt: 'Razor Mesh Fencing Solution'
    },
    'crash-rated-security': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237967/WhatsApp_Image_2026-08-21_at_14.07.57_pnjt96.jpg',
      alt: 'Crash Rated Security Fencing'
    },
    'concertina-coil': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777398/ConcertinaCoilFence1_truxp8.png',
      alt: 'Concertina Coil Fence'
    },
    'chain-link': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237967/WhatsApp_Image_2026-08-21_at_14.13.53_i7xomq.jpg',
      alt: 'Chain Link Fence'
    },
    'barbed-wire': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775128/barbedwirefence1_bhxu8k.png',
      alt: 'Barbed Wire Fencing'
    },
    'ss-concertina': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777398/ConcertinaCoilFence1_truxp8.png',
      alt: 'Stainless Steel Concertina Coil'
    },
    'gi-concertina': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777433/ConcertinaCoilFence2_rqdlc7.png',
      alt: 'GI Concertina Coil'
    },
    'swing-gates': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776218/swingGates1_enitpo.png',
      alt: 'Swing & Cantilever Gates'
    },
    'sliding-gates': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776290/WhatsApp_Image_2026-05-25_at_14.19.20_vnymai.jpg',
      alt: 'Sliding Gates'
    },
    'gabion': {
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Gabion Barriers'
    },
    'bukhari': {
      url: 'https://images.unsplash.com/photo-1687348747353-0c42d3c05983?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Bukhari DRDO Product'
    },
    'vajra': {
      url: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Vajra DRDO Product'
    },
    'placeholder': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775127/anticlimbing1_urt06c.png',
      alt: 'Product placeholder image'
    }
  },

  company: {
    story: {
      'team-meeting': {
        url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
        alt: "Advanced security and defense technology operations"
      },
      'innovation': {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        alt: "Engineering innovation and design"
      },
      'manufacturing': {
        url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
        alt: "Precision manufacturing and fabrication"
      },
      'quality-control': {
        url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
        alt: "Engineering collaboration and quality assurance"
      },
      'global-reach': {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Global connectivity and reach"
      },
      'future-vision': {
        url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
        alt: "Future defence technology"
      },
      'leadership-team': {
        url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        alt: "Leadership team"
      }
    }
  }
};

/**
 * Helper function to get media asset with fallback
 */
export const getMediaAsset = (category: keyof MediaAssets, key: string, subKey?: string): MediaAsset => {
  const categoryData = mediaAssets[category];
  
  if (category === 'heroes' && subKey) {
    const asset = (categoryData as any)[key]?.[subKey];
    return asset || { url: '/images/placeholder.jpg', alt: 'Placeholder' };
  }
  
  const asset = (categoryData as any)[key];
  return asset || { url: '/images/placeholder.jpg', alt: 'Placeholder' };
};

/**
 * Helper function to get image URL with fallback
 */
export const getImageUrl = (category: keyof MediaAssets, key: string, subKey?: string): string => {
  return getMediaAsset(category, key, subKey).url;
};

/**
 * Helper function to handle product image URLs (direct strings or media asset keys)
 */
export const getProductImageUrl = (imageUrl: string): string => {
  // If it's already a full URL (starts with http/https or /), return as-is
  if (imageUrl.startsWith('http') || imageUrl.startsWith('/')) {
    return imageUrl;
  }
  
  // Otherwise, try to get it from media assets
  return getImageUrl('products', imageUrl);
};

/**
 * Helper function to get image alt text
 */
export const getImageAlt = (category: keyof MediaAssets, key: string, subKey?: string): string => {
  return getMediaAsset(category, key, subKey).alt || 'Image';
};