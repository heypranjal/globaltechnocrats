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
    name: 'Global Headquarters',
    address: 'Tower B, 4th Floor, Spaze iTech Park, Sector 49',
    city: 'Gurugram, Haryana 122018',
    country: 'India',
    phone: '+91-124-4982000',
    email: 'info@globaltechnocrats.in',
    coordinates: { lat: 28.4089, lng: 77.0671 }
  },
  {
    type: 'regional',
    name: 'Middle East Operations',
    address: 'Dubai International Financial Centre',
    city: 'Dubai',
    country: 'United Arab Emirates',
    phone: '+971-4-1234567',
    email: 'middleeast@globaltechnocrats.in'
  },
  {
    type: 'regional',
    name: 'European Operations',
    address: 'London Office Park',
    city: 'London',
    country: 'United Kingdom',
    phone: '+44-20-1234567',
    email: 'europe@globaltechnocrats.in'
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