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
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1778130122/Krishna-Khanna_e4fc4x.png', 
      alt: 'Krishna Khanna - Global Technocrats'
    },
    'surinder-kumar': {
      url: '/images/Surinder-Kumar.png',
      alt: 'Surinder Kumar - Global Technocrats'
    },
    'vijay-verma': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1778130121/Vijay-Verma_g5nrjo.png',
      alt: 'Vijay Verma - Global Technocrats'
    },
    'vijendra-sharma': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1778130121/vijendra-sharma_la9amd.png',
      alt: 'Vijendra Sharma - Global Technocrats'
    }
  },

  products: {
    'anti-climb-fencing': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1787364042/WhatsApp_Image_2026-08-21_at_12.06.59_fmxyuj.jpg',
      alt: 'Anti Climb Fencing Solution'
    },
    'razor-mesh-fencing': {
      url: 'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775130/razormeshfencing1_wmbutx.png',
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
        url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Team meeting and collaboration"
      },
      'innovation': {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Innovation and technology"
      },
      'manufacturing': {
        url: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Manufacturing facility"
      },
      'quality-control': {
        url: "https://images.unsplash.com/photo-1582653291997-079b4f122685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Quality control and testing"
      },
      'global-reach': {
        url: "https://images.unsplash.com/photo-1622219809260-ce065fc5277e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Global presence and reach"
      },
      'future-vision': {
        url: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Future vision and growth"
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