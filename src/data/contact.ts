export interface ContactInfo {
  type: 'headquarters' | 'regional';
  name: string;
  address: string;
  city: string;
  country: string;
  phone?: string;
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const contactLocations: ContactInfo[] = [
  {
    type: 'headquarters',
    name: 'Global Technocrats Limited',
    address: '139-140, Kapashera',
    city: 'South West Delhi - 110037',
    country: 'India',
    phone: '+91 9810282636',
    email: 'info@globaltechnocrats.in',
    coordinates: { lat: 28.5108, lng: 77.0654 }
  }
];

export const inquiryTypes = [
  'General Inquiry',
  'Product Information',
  'Technical Support',
  'Partnership Opportunity',
  'Investor Relations',
  'Career Opportunity',
  'Media Inquiry'
];

export const countries = [
  'India', 'United States', 'United Kingdom', 'United Arab Emirates',
  'Saudi Arabia', 'Germany', 'France', 'Australia', 'Singapore',
  'South Korea', 'Japan', 'Other'
];