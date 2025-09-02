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
      url: '/images/Atul-Agarwal-650x650.png',
      alt: 'Atul Agarwal - Global Technocrats'
    },
    'krishna-khanna': {
      url: '/images/Krishna-Khanna.png', 
      alt: 'Krishna Khanna - Global Technocrats'
    },
    'surinder-kumar': {
      url: '/images/Surinder-Kumar.png',
      alt: 'Surinder Kumar - Global Technocrats'
    },
    'vijay-verma': {
      url: '/images/Vijay-Verma.png',
      alt: 'Vijay Verma - Global Technocrats'
    },
    'vijendra-sharma': {
      url: '/images/vijendra-sharma.png',
      alt: 'Vijendra Sharma - Global Technocrats'
    }
  },

  products: {
    'anti-climb-fencing': {
      url: '/images/Anti-Climb-Fencing-2.jpg',
      alt: 'Anti Climb Fencing Solution'
    },
    'razor-mesh-fencing': {
      url: '/images/Razor-Mesh-Fencing-2.jpg', 
      alt: 'Razor Mesh Fencing Solution'
    },
    'crash-rated-security': {
      url: '/images/Crash-Rated-Security-Fencing-768x274.jpg',
      alt: 'Crash Rated Security Fencing'
    },
    'concertina-coil': {
      url: '/images/Concertina-coil-Fence-768x274.jpg',
      alt: 'Concertina Coil Fence'
    },
    'chain-link': {
      url: '/images/Chain-Link-Fence-1-1024x366.jpg',
      alt: 'Chain Link Fence'
    },
    'barbed-wire': {
      url: '/images/Barbed-Wire-2-1024x366.jpg',
      alt: 'Barbed Wire Fencing'
    },
    'ss-concertina': {
      url: '/images/SS-Concertina-coil-768x274.jpg',
      alt: 'Stainless Steel Concertina Coil'
    },
    'gi-concertina': {
      url: '/images/GI-Concertina-Coil-768x274.png',
      alt: 'GI Concertina Coil'
    },
    'swing-gates': {
      url: '/images/Swing-Gates-768x274.jpg',
      alt: 'Swing Gates'
    },
    'sliding-gates': {
      url: '/images/Sliding-Gates-768x274.jpg',
      alt: 'Sliding Gates'
    },
    'gabion': {
      url: '/images/Gabion-768x274.jpg',
      alt: 'Gabion Barriers'
    },
    'bukhari': {
      url: '/images/Bukhari-768x384.png',
      alt: 'Bukhari DRDO Product'
    },
    'vajra': {
      url: '/images/Vajra-1-1536x768.png',
      alt: 'Vajra DRDO Product'
    },
    'placeholder': {
      url: '/images/placeholder.jpg',
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
 * Helper function to get image alt text
 */
export const getImageAlt = (category: keyof MediaAssets, key: string, subKey?: string): string => {
  return getMediaAsset(category, key, subKey).alt || 'Image';
};