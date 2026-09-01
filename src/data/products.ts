/**
 * Comprehensive Products Data Structure
 * Global Technocrats - Unified product data for template system
 */

export interface ProductSpec {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  longDescription: string;
  technicalDescription?: string;
  keyBenefits?: string[];
  features: string[];
  applications: string[];
  specifications: ProductSpec[];
  images: string[];
  relatedProducts: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

export const productsData: Product[] = [
  {
    id: 'anti-climb',
    name: 'Anti Climb Fencing',
    category: 'fencing',
    subcategory: 'Fencing Solutions',
    description: 'Advanced 358 security mesh fencing system designed to meet the stringent requirements of India\'s defense and security organizations for maximum perimeter protection.',
    longDescription: 'Global Technocrats\' Anti-Climb Fencing represents advanced perimeter security technology, engineered to meet demanding defense and security requirements. Our 358 security mesh system is designed for high-security installations, suitable for deployment across India\'s diverse climate conditions from extreme cold to desert heat.\n\nOur anti-climb fencing technology is engineered to meet the stringent requirements typically demanded by organizations like the Border Security Force (BSF), Central Industrial Security Force (CISF), and Defense Research and Development Organisation (DRDO). The system employs proven \'Anti-Cut Anti-Climb\' design principles that are widely recognized in border security applications.\n\nThe fencing system is designed to protect sensitive installations including nuclear facilities, space establishments, airports, research laboratories, and classified defense facilities. Our technology incorporates features specifically developed for India\'s challenging environmental conditions, from high-altitude installations to coastal environments.\n\nThe system meets the technical standards required for critical infrastructure protection, including forward operating bases, research facilities, and strategic installations. Our weather-resistant technology is engineered to maintain security integrity across India\'s diverse geographic and climatic conditions.',
    technicalDescription: 'Our Anti-Climb Fencing system employs the globally recognized 358 security mesh configuration, where the designation represents the precise engineering specifications: 3" × 0.5" × 8 gauge (76.2mm × 12.7mm × 4mm). This mathematical precision creates apertures so small that human fingers cannot penetrate, while the 4mm high-tensile steel wire construction makes cutting attempts virtually impossible with standard hand tools.\n\nThe resistance welding process, employing 540-690 N/mm² weld strength, creates molecular bonds between wire intersections that exceed the strength of the base material itself. Our hot-dip galvanizing process, conforming to IS 4759 standards, applies a minimum 610g/m² zinc coating before the application of a 120+ micron polyester powder coating, ensuring decades of maintenance-free operation in India\'s diverse climate conditions.\n\nEvery panel undergoes rigorous quality testing including tensile strength analysis, corrosion resistance evaluation, and anti-climb performance verification. Our manufacturing process is ISO 9001:2015 certified and complies with Make in India guidelines, supporting the nation\'s self-reliance in critical security infrastructure.',
    keyBenefits: [
      'Professional Engineering: Designed to meet stringent security requirements for critical infrastructure applications',
      'Industry Standards Compliance: Engineered to meet government security standards and defense organization specifications',
      'Climate Resilience: Built for extreme Indian conditions from high-altitude cold to desert heat with durable construction',
      'Economic Efficiency: Low total cost of ownership with minimal maintenance requirements and extended service life',
      'Rapid Deployment: Efficient installation system designed for quick deployment in various terrain conditions',
      'Quality Manufacturing: Full adherence to IS 278, IS 1786, and IS 4759 ensuring consistent quality with national standards',
      'Multi-Threat Protection: Comprehensive defense against climbing, cutting, and impact attempts with optional sensor integration',
      'Professional Support: Complete after-sales service including inspections, maintenance, and technical support'
    ],
    features: [
      'Anti-Cut Technology: Advanced cut-resistant mesh design engineered to prevent breach attempts using standard tools',
      'Security-Grade 358 Mesh: Precision 12.7mm apertures prevent finger penetration while maintaining visibility for surveillance',
      'Superior Corrosion Protection: Marine-grade coating system designed to withstand India\'s diverse coastal and inland conditions',
      'Electronic System Integration: Seamless compatibility with surveillance systems including CCTV, motion sensors, and perimeter detection',
      'Rapid Deployment System: Engineered for efficient installation across various terrain and environmental conditions',
      'Multi-Height Configuration: Customizable from 2m to 5m heights to meet varying security threat levels and site requirements',
      'Critical Infrastructure Grade: Designed to meet stringent requirements for transportation, industrial, and government facilities',
      'All-Weather Design: Engineered for extreme Indian climate conditions from high-altitude cold to desert heat environments'
    ],
    applications: [
      'Border Security Applications: Suitable for international border protection requiring anti-infiltration and anti-smuggling capabilities',
      'Critical Infrastructure Protection: Designed for airports, nuclear facilities, space centers, and other sensitive government installations',
      'Research & Development Facilities: High-security perimeter protection for sensitive research establishments and classified facilities',
      'Military & Defense Installations: Suitable for forward operating bases, command posts, and strategic military locations',
      'Transportation Security: Railway corridors, metro systems, and critical transportation infrastructure protection',
      'Paramilitary Facilities: Training academies, operational bases, and specialized force installations',
      'Government Buildings: Central and state government facilities requiring enhanced perimeter security',
      'Industrial Security: Oil refineries, power plants, mining sites, steel plants, and critical industrial infrastructure',
      'Judicial & Administrative: High courts, legislative buildings, administrative complexes requiring security protocols',
      'Defense Manufacturing: Aerospace, electronics, and defense production facilities under security regulations',
      'Port & Maritime Security: Coastal installations and port authorities requiring ISPS Code compliance',
      'Educational Institutions: Universities, research institutes, and campuses requiring perimeter security against unauthorized access'
    ],
    specifications: [
      { name: 'Wire Diameter', value: '4mm high-tensile steel (conforming to IS 280 - Mild Steel Wire)' },
      { name: 'Mesh Pattern', value: '358 Security (76.2mm × 12.7mm apertures) - Industry standard configuration' },
      { name: 'Panel Dimensions', value: '2.5m W × 3.0m H standard | Custom sizes available for specific requirements' },
      { name: 'Wire Spacing', value: '12.7mm vertical × 76.2mm horizontal (finger-proof design)' },
      { name: 'Weld Strength', value: '540-690 N/mm² resistance welded joints (exceeds IS 1786 requirements)' },
      { name: 'Security Rating', value: 'ASTM M5 compliant high-security grade | Designed for government specifications' },
      { name: 'Surface Treatment', value: 'Hot-dip galvanized per IS 4759 + powder coating per IS 101' },
      { name: 'Coating Thickness', value: '120+ micron polyester powder coat | 610 g/m² zinc coating minimum' },
      { name: 'Indian Standards Compliance', value: 'IS 278 (Galvanized Wire) | IS 1786 (Steel Bars) | IS 4759 (Hot-dip Galvanizing)' },
      { name: 'Height Range', value: '2.0m (Standard) | 3.0m (Medium Security) | 4.0m (High Security) | 5.0m (Maximum Security)' },
      { name: 'Post Specifications', value: '60×60×3mm SHS posts | 2.5m spacing | Concrete foundation 600×600×800mm' },
      { name: 'Material Grade', value: 'Galvanized steel (IS 4759) | SS316 marine grade option | Aluminum for radar-transparent applications' },
      { name: 'Anti-Cut Rating', value: 'Bolt cutter resistant | Hand tool penetration time >10 minutes (industry tested)' },
      { name: 'Temperature Range', value: '-40°C to +70°C (extreme climate deployment capable)' },
      { name: 'Wind Load Resistance', value: '200 km/h wind speed (cyclone-resistant design for coastal environments)' },
      { name: 'Installation Standards', value: 'Government-grade installation procedures | Defense installation guidelines ready' },
      { name: 'Quality Certifications', value: 'ISO 9001:2015 quality management | Make in India initiative | Government standards compliant' },
      { name: 'Maintenance Schedule', value: 'Annual inspection | 5-year coating warranty | 25-year structural warranty' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1787364042/WhatsApp_Image_2026-08-21_at_12.06.59_fmxyuj.jpg',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775127/anticlimbing1_urt06c.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775127/anticlimbing2_kmuxz3.png'
    ],
    relatedProducts: ['razor-mesh', 'crash-rated-fence', 'concertina-coil'],
    seoTitle: 'Anti Climb Fencing | Global Technocrats',
    seoDescription: 'Anti Climb Fencing: Safeguarding Your Premises with Advanced Security Solutions. Effective and reliable solution for deterring intruders and providing robust perimeter protection.'
  },
  {
    id: 'bukhari',
    name: 'Bukhari',
    category: 'drdo',
    subcategory: 'DRDO TOT Products',
    description: 'Space heating device designed and developed by DIPAS (DRDO) with multiple safety features and high efficiency.',
    longDescription: 'Bukhari is a space heating device designed and developed by DIPAS (DRDO) with multiple safety features, high efficiency, and environmental benefits for extreme cold environments. The device incorporates advanced safety mechanisms to prevent back-draft related accidents and provides efficient heating using minimal fuel consumption.',
    features: [
      'Multiple level safety features',
      'Two-chambered design with solar-powered DC fan',
      'Three burner stove for cooking and heating',
      'Environmentally friendly operation',
      'Back-draft resistant exhaust vent',
      'No auto ignition safety feature',
      'Controllable blue flame with no soot formation'
    ],
    applications: [
      'Military installations in extreme cold',
      'Border outposts heating',
      'Emergency shelter heating', 
      'High-altitude accommodations',
      'Remote location heating and cooking'
    ],
    specifications: [
      { name: 'Fuel Consumption', value: '500-700 ml kerosene per hour' },
      { name: 'Heating Method', value: 'Convective and radiative' },
      { name: 'Design Type', value: 'Two-chambered system' },
      { name: 'Fan Type', value: 'Solar-powered DC fan' },
      { name: 'Burner Configuration', value: 'Three burner stove' },
      { name: 'Safety Features', value: 'Multiple level protection' },
      { name: 'Environmental Impact', value: 'Prevents 1 ton CO2 annually' },
      { name: 'Flame Control', value: 'Controllable blue flame' }
    ],
    images: [
      '/images/Bukhari-768x384.png',
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    relatedProducts: ['vajra'],
    seoTitle: 'Bukhari | DRDO TOT Products | Global Technocrats',
    seoDescription: 'Bukhari is a space heating device designed and developed by DIPAS (DRDO) with multiple safety features and high efficiency.'
  },
  // Existing products from ProductDetailPage.tsx
  {
    id: 'mobile-mortar-system',
    name: 'Mobile Mortar System',
    category: 'defence-tech',
    subcategory: 'Defence Tech',
    description: 'Advanced mobile mortar system providing indirect fire support with enhanced mobility and accuracy.',
    longDescription: 'The Mobile Mortar System by Global Technocrats is a state-of-the-art indirect fire support platform designed for rapid deployment and superior accuracy. The system integrates advanced ballistic computing, GPS positioning, and automated loading to deliver exceptional firepower in a highly mobile package.',
    features: [
      'Advanced fire control system',
      'GPS-guided targeting',
      'Semi-automatic loading mechanism',
      'Reduced crew requirement (2-3 operators)',
      'Quick setup and teardown (under 2 minutes)',
      'Integrated ballistic computer',
      'Multiple caliber options'
    ],
    applications: [
      'Infantry fire support',
      'Special operations',
      'Rapid reaction forces',
      'Border security operations',
      'Counter-insurgency operations'
    ],
    specifications: [
      { name: 'Caliber Options', value: '60mm, 81mm, 120mm' },
      { name: 'Range (81mm)', value: 'Up to 6,200 meters' },
      { name: 'Rate of Fire', value: '16 rounds per minute (rapid)' },
      { name: 'Setup Time', value: '< 2 minutes' },
      { name: 'Crew', value: '2-3 personnel' },
      { name: 'Total System Weight', value: '162 kg (81mm configuration)' },
      { name: 'Traverse', value: '360 degrees' },
      { name: 'Elevation', value: '45 to 85 degrees' },
      { name: 'Fire Control', value: 'Digital w/ manual backup' },
      { name: 'Transport Options', value: 'Vehicle-mounted or towed' }
    ],
    images: [
      'https://images.unsplash.com/photo-1687348747353-0c42d3c05983?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1569241641262-d5d7beb96d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    relatedProducts: ['bukhari', 'vajra']
  },

  {
    id: 'image-enhancer',
    name: 'Image Enhancer', 
    category: 'ai',
    subcategory: 'Advanced AI Products',
    description: 'AI-powered image enhancement technology for improving surveillance and reconnaissance capabilities.',
    longDescription: 'Image Enhancer is Global Technocrats cutting-edge AI-powered software solution designed to dramatically improve image quality from surveillance cameras, drones, and other imaging systems using advanced deep learning algorithms.',
    features: [
      'Real-time processing capability',
      'Low-light enhancement',
      'Fog and haze removal',
      'Motion blur correction',
      'Resolution upscaling',
      'Noise reduction',
      'Automatic contrast optimization',
      'Integration with existing CCTV systems'
    ],
    applications: [
      'Security surveillance',
      'Border monitoring', 
      'Military reconnaissance',
      'Law enforcement investigations',
      'Critical infrastructure protection',
      'Forensic image analysis'
    ],
    specifications: [
      { name: 'Supported Input Formats', value: 'JPEG, PNG, TIFF, RAW, H.264, H.265' },
      { name: 'Processing Time', value: '20-500ms per frame' },
      { name: 'Enhancement Level', value: 'Up to 6x improvement' },
      { name: 'Resolution Support', value: 'Up to 4K' },
      { name: 'Hardware Requirements', value: 'NVIDIA GPU with 8GB VRAM' },
      { name: 'API Support', value: 'REST, RTSP, JSON-RPC' },
      { name: 'Deployment', value: 'On-premises, cloud, or hybrid' }
    ],
    images: [
      'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    relatedProducts: ['deepsocmint']
  },

  {
    id: 'deepsocmint',
    name: 'DeepSocmint',
    category: 'ai',
    subcategory: 'Advanced AI Products',
    description: 'AI-driven social media monitoring platform for enhanced intelligence and operational analysis.',
    longDescription: 'DEEPSOCMINT is an autonomous AI-powered social media monitoring platform that harnesses the power of Language Processing, Graph Analytics, and Deep Learning. Designed specifically to boost operational efficiency, DEEPSOCMINT provides comprehensive social media intelligence collection and analysis tools for security and intelligence purposes.',
    features: [
      'Multi-platform crawler (Twitter, Facebook, Instagram, Discord)',
      'User profiling and behavioral analysis',
      'Advanced post analysis and trend identification',
      'Context classifier for religious, financial, and political content',
      'Threat assessment model with risk scoring',
      'Linguistic similarity calculator for bot detection',
      'Optical Character Recognition and color extraction',
      'Info2Intel natural language reporting'
    ],
    applications: [
      'Intelligence collection and analysis',
      'Social media monitoring and surveillance',
      'Threat assessment and early warning',
      'Trend analysis and sentiment monitoring',
      'Counter-propaganda operations',
      'National security applications'
    ],
    specifications: [
      { name: 'Platform Coverage', value: 'Twitter, Facebook, Instagram, Discord, and more' },
      { name: 'Analysis Types', value: 'User profiling, post analysis, trend analysis' },
      { name: 'AI Technologies', value: 'NLP, Graph Analytics, Deep Learning' },
      { name: 'Threat Assessment', value: 'Automated risk scoring and classification' },
      { name: 'Bot Detection', value: 'Linguistic similarity analysis' },
      { name: 'Reporting', value: 'Automated intelligence brief generation' },
      { name: 'Interface', value: 'GUI-based with tabulated results' },
      { name: 'Deployment', value: 'On-premises or secure cloud' }
    ],
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    relatedProducts: ['image-enhancer'],
    seoTitle: 'DeepSocmint | AI Social Media Intelligence Platform | Global Technocrats',
    seoDescription: 'Advanced AI-powered social media monitoring and intelligence platform with deep learning capabilities for security operations.'
  },

  // Additional fencing products for testing
  {
    id: 'razor-mesh',
    name: 'Razor Mesh Fencing',
    category: 'fencing',
    subcategory: 'Fencing Solutions',
    description: 'Advanced razor mesh fencing providing maximum security for sensitive installations and perimeters.',
    longDescription: 'Razor Mesh Fencing combines the visibility benefits of traditional mesh with enhanced security features. The razor-sharp edges integrated into the mesh design provide additional deterrent against unauthorized access while maintaining excellent visibility for surveillance purposes.',
    features: [
      'Razor-sharp integrated mesh design',
      'High visibility for surveillance',
      'Cut-resistant construction',
      'Weather-resistant coating',
      'Quick installation system',
      'Low maintenance requirements'
    ],
    applications: [
      'Perimeter security',
      'Industrial facilities',
      'Commercial properties', 
      'Government installations',
      'Airport security'
    ],
    specifications: [
      { name: 'Height Range', value: '1.8-4 meters' },
      { name: 'Material', value: 'Galvanized steel with razor elements' },
      { name: 'Mesh Opening', value: '50mm x 50mm' },
      { name: 'Wire Thickness', value: '3-4mm' },
      { name: 'Coating', value: 'Hot-dip galvanized' },
      { name: 'Post Spacing', value: '2.5 meters' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775130/razormeshfencing1_wmbutx.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775127/razormeshfencing2_svetj7.png'
    ],
    relatedProducts: ['anti-climb', 'concertina-coil']
  },

  {
    id: 'vajra',
    name: 'Vajra',
    category: 'drdo',
    subcategory: 'DRDO TOT Products',
    description: 'High-durability protective equipment for specialized defense operations and personnel safety.',
    longDescription: 'Vajra is a high-durability protective equipment system designed for specialized defense operations. Developed using DRDO technology transfer, it provides comprehensive protection for personnel in high-risk environments while maintaining operational mobility and effectiveness.',
    features: [
      'High durability materials',
      'Lightweight construction',
      'Modular design system',
      'Enhanced mobility features',
      'Multi-threat protection',
      'Ergonomic design',
      'DRDO certified technology'
    ],
    applications: [
      'Special operations',
      'Counter-terrorism units',
      'Border security forces',
      'Elite military units',
      'High-risk operations'
    ],
    specifications: [
      { name: 'Weight', value: 'Lightweight design' },
      { name: 'Material', value: 'Advanced composite materials' },
      { name: 'Protection Level', value: 'Multi-threat rated' },
      { name: 'Modularity', value: 'Configurable system' },
      { name: 'Mobility', value: 'Enhanced operational mobility' },
      { name: 'Certification', value: 'DRDO approved' }
    ],
    images: [
      '/images/Vajra-1-1536x768.png',
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    relatedProducts: ['bukhari'],
    seoTitle: 'Vajra | DRDO TOT Products | Global Technocrats',
    seoDescription: 'Vajra: High-durability protective equipment for specialized defense operations and personnel safety.'
  },

  // Additional Fencing Products
  {
    id: 'decorative-fencing',
    name: 'Decorative Fencing',
    category: 'fencing',
    subcategory: 'Fencing Solutions',
    description: 'Elegant and aesthetically pleasing fencing solutions that add elegance and security to your landscape.',
    longDescription: 'Decorative fencing is a versatile and aesthetically pleasing option for homeowners looking to add a touch of elegance to their landscapes. Available in wrought iron, vinyl, and wooden varieties, these fences provide both security and visual appeal while complementing any architectural style.',
    features: [
      'Multiple material options (wrought iron, vinyl, wood)',
      'Customizable designs and heights',
      'Weather-resistant finishes',
      'Low maintenance requirements',
      'Enhanced curb appeal',
      'Privacy and security benefits',
      'Integration with landscaping'
    ],
    applications: [
      'Residential properties',
      'Garden enclosures',
      'Property boundary marking',
      'Pool area security',
      'Commercial landscaping',
      'Estate entrances'
    ],
    specifications: [
      { name: 'Material Options', value: 'Wrought iron, vinyl, wood' },
      { name: 'Height Range', value: '3-8 feet customizable' },
      { name: 'Design Styles', value: 'Classic picket, lattice, geometric' },
      { name: 'Coating', value: 'Powder-coated for durability' },
      { name: 'Installation', value: 'Professional or DIY options' },
      { name: 'Maintenance', value: 'Low to minimal' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776290/WhatsApp_Image_2026-05-25_at_14.19.20_vnymai.jpg',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776289/WhatsApp_Image_2026-05-25_at_14.16.43_xycfsh.jpg'
    ],
    relatedProducts: ['anti-climb', 'razor-mesh'],
    seoTitle: 'Decorative Fencing | Elegant Security Solutions | Global Technocrats',
    seoDescription: 'Decorative fencing solutions combining elegance and security. Available in wrought iron, vinyl, and wood with customizable designs.'
  },

  {
    id: 'crash-rated-fence',
    name: 'Crash Rated Fence',
    category: 'fencing',
    subcategory: 'Fencing Solutions',
    description: 'K4 rated crash-rated fence designed to prevent vehicle intrusion and protect critical infrastructure.',
    longDescription: 'Global Technocrats\' Kronos fence (Palisade Fence) system is designed to withstand vehicle crashes and has been verified by government labs according to ASTM and PAS 68 standards. This K4 rated crash-rated fence provides robust protection against vehicle-borne threats, making it essential for data centers and critical infrastructure.',
    features: [
      'K4 rating according to ASTM F2656 and PAS 68',
      'Vehicle crash tested and certified',
      'High-impact collision resistance',
      'Government lab verified design',
      'Customizable panel configuration',
      'Integration with access control systems',
      'Aesthetic design options'
    ],
    applications: [
      'Data centers',
      'Government facilities',
      'Critical infrastructure',
      'Defense installations',
      'High-security commercial buildings',
      'Industrial facilities'
    ],
    specifications: [
      { name: 'Rating', value: 'K4 (ASTM F2656/PAS 68)' },
      { name: 'Impact Resistance', value: 'High-velocity vehicle impact' },
      { name: 'Material', value: 'High-strength steel palisade' },
      { name: 'Height Options', value: '2-4 meters' },
      { name: 'Foundation', value: 'Reinforced concrete required' },
      { name: 'Certification', value: 'Government lab verified' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237967/WhatsApp_Image_2026-08-21_at_14.07.57_pnjt96.jpg',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775130/crashratedfence1_lqdc8g.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775130/crashratedfence2_a7w2bn.png'
    ],
    relatedProducts: ['anti-climb', 'concertina-coil'],
    seoTitle: 'K4 Crash Rated Fence | Vehicle Impact Protection | Global Technocrats',
    seoDescription: 'K4 rated crash-rated fence system for critical infrastructure protection. Government lab verified and ASTM/PAS 68 certified.'
  },

  {
    id: 'concertina-coil',
    name: 'Concertina Coil',
    category: 'fencing',
    subcategory: 'Fencing Solutions',
    description: 'High-security concertina coil fencing in Standard, Stainless Steel (SS304/SS316), and Galvanized Iron variants for every security requirement.',
    longDescription: 'Concertina coil fences provide an unmatched level of protection and act as a strong deterrent to potential intruders. Available in Standard galvanized steel, Stainless Steel (SS304/SS316) for marine environments, and Galvanized Iron for cost-effective wide-area deployment.',
    features: [
      'Three variants: Standard, SS Concertina, and GI Concertina',
      'Razor blade and single/double coil configurations',
      'Crossed spiral design maintains structural integrity',
      'Hot-dip galvanized and SS304/SS316 material options',
      'Clip fastener rapid-deployment installation system',
      'Coil diameters from 450mm to 980mm',
      'Low maintenance requirements'
    ],
    applications: [
      'Military and defense facilities',
      'Border security',
      'Coastal and marine installations',
      'Industrial and commercial properties',
      'Correctional facilities',
      'Residential and agricultural security'
    ],
    specifications: [
      { name: 'Variants', value: 'Standard GI · SS Concertina (SS304/SS316) · GI Concertina' },
      { name: 'Wire Diameter', value: '2.5mm high-carbon or stainless steel' },
      { name: 'Coil Diameter', value: '450mm, 600mm, 700mm, 980mm' },
      { name: 'Tensile Strength', value: 'Up to 1270–1570 N/mm² (SS grade)' },
      { name: 'Installation', value: 'Clip fastener system' },
      { name: 'Finish', value: 'Hot-dip galvanized / SS304 / SS316' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777398/ConcertinaCoilFence1_truxp8.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777433/ConcertinaCoilFence2_rqdlc7.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775911/SSConcertinaCoil1_uwgha6.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776018/SsImage2_lgojr8.png'
    ],
    relatedProducts: ['razor-mesh', 'barbed-wire-fence', 'anti-climb'],
    seoTitle: 'Concertina Coil | Standard · SS · GI Variants | Global Technocrats',
    seoDescription: 'Concertina coil fencing in Standard, Stainless Steel, and Galvanized Iron variants for defence, border, industrial, and residential security.'
  },

  {
    id: 'chain-link-fence',
    name: 'Chain Link Fence',
    category: 'fencing',
    subcategory: 'Fencing Solutions',
    description: 'Durable and cost-effective chain link fencing for commercial, industrial, and residential applications.',
    longDescription: 'Chain link fences are made from steel wire interwoven in a diamond pattern, known for their strength, affordability, and versatility. Available in galvanized steel and vinyl-coated options, these fences provide reliable security and boundary marking for various applications.',
    features: [
      'Galvanized steel and vinyl-coated options',
      'Diamond mesh pattern for strength',
      'Cost-effective and durable construction',
      'Easy installation and maintenance',
      'Weather resistant finish',
      'Various height options available',
      'Suitable for multiple applications'
    ],
    applications: [
      'Residential property boundaries',
      'Commercial and industrial sites',
      'Sports fields and playgrounds',
      'Parking lot security',
      'Agricultural applications',
      'Temporary construction sites'
    ],
    specifications: [
      { name: 'Material', value: 'Galvanized steel wire' },
      { name: 'Mesh Pattern', value: 'Diamond weave' },
      { name: 'Height Range', value: '3-12 feet' },
      { name: 'Wire Gauge', value: '6-14 gauge' },
      { name: 'Coating Options', value: 'Galvanized or vinyl-coated' },
      { name: 'Post Spacing', value: '6-10 feet intervals' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237967/WhatsApp_Image_2026-08-21_at_14.13.53_i7xomq.jpg',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775129/chainlinkfence1_vhosi4.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775129/chainlinkfence2_fsswl8.png'
    ],
    relatedProducts: ['barbed-wire-fence', 'decorative-fencing'],
    seoTitle: 'Chain Link Fence | Affordable Perimeter Security | Global Technocrats',
    seoDescription: 'Durable chain link fencing for residential, commercial, and industrial security. Available in galvanized and vinyl-coated options.'
  },

  {
    id: 'barbed-wire-fence',
    name: 'Barbed Wire Fence',
    category: 'fencing',
    subcategory: 'Fencing Solutions',
    description: 'Traditional and effective barbed wire fencing for agricultural, livestock, and perimeter security applications.',
    longDescription: 'Barbed wire fence is an iconic deterrent that has served various purposes for generations, from marking territorial boundaries to safeguarding livestock and property. Made from high-quality steel with strategically placed barbs, it provides cost-effective security and animal containment.',
    features: [
      'High-strength steel construction',
      'Single and double strand options',
      'Cost-effective security solution',
      'Easy installation and maintenance',
      'Galvanized for corrosion resistance',
      'Suitable for large perimeter areas',
      'Effective livestock containment'
    ],
    applications: [
      'Agricultural boundaries',
      'Livestock containment',
      'Rural property marking',
      'Industrial perimeter security',
      'Temporary security barriers',
      'Cost-sensitive applications'
    ],
    specifications: [
      { name: 'Material', value: 'High-tensile steel wire' },
      { name: 'Barb Spacing', value: '4-6 inch intervals' },
      { name: 'Wire Gauge', value: '12.5-15.5 gauge' },
      { name: 'Coating', value: 'Galvanized zinc coating' },
      { name: 'Roll Length', value: '1320 feet (quarter mile)' },
      { name: 'Tensile Strength', value: '1400-2000 lbs' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775128/barbedwirefence1_bhxu8k.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775127/barbedwirefence2_xajctr.png'
    ],
    relatedProducts: ['chain-link-fence', 'concertina-coil'],
    seoTitle: 'Barbed Wire Fence | Agricultural & Livestock Security | Global Technocrats',
    seoDescription: 'Traditional barbed wire fencing for agricultural boundaries, livestock containment, and cost-effective perimeter security.'
  },

  // Gates & Barriers Products
  {
    id: 'swing-gates',
    name: 'Swing Gates',
    category: 'gates',
    subcategory: 'Gates & Barriers',
    description: 'Versatile swing gate systems offering secure access control with manual or automated operation.',
    longDescription: 'Swing gates are a popular access control solution offering efficient design and versatility in various settings. Available in single or double swing configurations, these gates can be crafted from wood, steel, or aluminum with optional automation for enhanced security and convenience.',
    features: [
      'Single or double swing configurations',
      'Multiple material options (wood, steel, aluminum)',
      'Manual or automated operation available',
      'Customizable designs and sizes',
      'Weather-resistant finishes',
      'Safety sensors and obstacle detection',
      'Integration with access control systems'
    ],
    applications: [
      'Residential driveways and estates',
      'Commercial building entrances',
      'Industrial facility access',
      'Gated communities',
      'Parking lot control',
      'Estate and property boundaries'
    ],
    specifications: [
      { name: 'Configuration', value: 'Single or double swing' },
      { name: 'Materials', value: 'Wood, steel, aluminum' },
      { name: 'Opening Width', value: '3-20 feet' },
      { name: 'Height Range', value: '4-10 feet' },
      { name: 'Automation', value: 'Optional gate opener systems' },
      { name: 'Weight Capacity', value: 'Up to 1500 lbs per leaf' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776218/swingGates1_enitpo.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776510/swinggates2_rznfaj.png'
    ],
    relatedProducts: ['sliding-gates', 'architectural-gabions'],
    seoTitle: 'Swing Gates | Automated Access Control Systems | Global Technocrats',
    seoDescription: 'Professional swing gate systems for residential and commercial access control with automation options and security features.'
  },

  {
    id: 'sliding-gates',
    name: 'Sliding Gates',
    category: 'gates',
    subcategory: 'Gates & Barriers',
    description: 'Space-efficient sliding gate systems combining security, elegance, and automated convenience.',
    longDescription: 'Sliding gates represent the perfect fusion of security and elegance, offering practical and stylish solutions for modern properties. These gates are ideal for areas with limited space, providing enhanced security while maintaining aesthetic appeal through various design options and automation capabilities.',
    features: [
      'Space-efficient lateral movement design',
      'Single-panel and bi-parting options',
      'Cantilever and track-guided systems',
      'Automated operation with remote control',
      'Safety features and obstacle detection',
      'Weather-resistant construction',
      'Integration with smart home systems'
    ],
    applications: [
      'Residential properties with limited space',
      'Commercial establishments',
      'Industrial facilities',
      'Gated communities',
      'Parking facilities',
      'High-security installations'
    ],
    specifications: [
      { name: 'Panel Types', value: 'Single-panel, bi-parting, cantilever' },
      { name: 'Maximum Width', value: 'Up to 40 feet opening' },
      { name: 'Height Range', value: '4-12 feet' },
      { name: 'Materials', value: 'Steel, aluminum, composite' },
      { name: 'Automation', value: 'Electric motor with safety sensors' },
      { name: 'Opening Speed', value: '12-24 inches per second' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776789/sliddinggate2_uazh3b.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776757/slidingGate1_kj77om.png'
    ],
    relatedProducts: ['swing-gates', 'collapsible-barrier'],
    seoTitle: 'Sliding Gates | Automated Space-Efficient Access Control | Global Technocrats',
    seoDescription: 'Professional sliding gate systems offering space-efficient automated access control for residential and commercial properties.'
  },

  {
    id: 'architectural-gabions',
    name: 'Architectural Gabions',
    category: 'gates',
    subcategory: 'Gates & Barriers',
    description: 'Stone-filled wire mesh structures providing both functional barriers and aesthetic landscape features.',
    longDescription: 'Architectural Gabions are essentially cages or boxes filled with rocks, concrete, or decorative materials. Originally used for civil engineering purposes, they have found their place in modern architectural designs for both aesthetic and functional reasons, serving as retaining walls, noise barriers, and decorative landscape features.',
    features: [
      'Galvanized steel or PVC coated construction',
      'Customizable sizes and configurations',
      'Variety of fill material options',
      'Weather-resistant and durable',
      'Eco-friendly and sustainable',
      'Low maintenance requirements',
      'Natural drainage properties'
    ],
    applications: [
      'Retaining walls and slope stabilization',
      'Decorative landscape features',
      'Noise barriers along highways',
      'Building facades and cladding',
      'Public seating and benches',
      'Erosion control structures'
    ],
    specifications: [
      { name: 'Material', value: 'Galvanized steel, PVC coated steel, stainless steel' },
      { name: 'Standard Sizes', value: '1m x 1m x 1m to 2m x 1m x 0.5m' },
      { name: 'Mesh Type', value: 'Hexagonal or square' },
      { name: 'Wire Diameter', value: '2.7mm to 3.5mm' },
      { name: 'Fill Materials', value: 'Rocks, boulders, concrete debris' },
      { name: 'Lifespan', value: '50-100 years with proper maintenance' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776974/ArchitecturalGabions1_p567th.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776998/ArchitecturalGabions2_vhdv6f.png'
    ],
    relatedProducts: ['hesco-box', 'collapsible-barrier'],
    seoTitle: 'Architectural Gabions | Decorative Stone Barriers | Global Technocrats',
    seoDescription: 'Professional architectural gabion systems for retaining walls, landscape features, and decorative stone barriers.'
  },

  {
    id: 'collapsible-barrier',
    name: 'Collapsible Barrier',
    category: 'gates',
    subcategory: 'Gates & Barriers',
    description: 'Portable and adaptable barrier systems for crowd control, traffic management, and temporary security.',
    longDescription: 'Collapsible barriers offer convenient solutions for controlling crowds, managing traffic, and ensuring security across different industries. These innovative barriers provide a flexible way to create temporary boundaries with easy setup and storage capabilities, making them invaluable for events, construction sites, and emergency situations.',
    features: [
      'Lightweight and portable design',
      'Quick setup and easy storage',
      'Expandable and retractable configurations',
      'Multiple material options (steel, aluminum, plastic)',
      'Customizable branding and colors',
      'Interlocking system for continuous barriers',
      'Weather-resistant construction'
    ],
    applications: [
      'Crowd control at events and venues',
      'Traffic control and road work zones',
      'Construction site safety barriers',
      'Emergency response and security',
      'Queue management systems',
      'Temporary access control'
    ],
    specifications: [
      { name: 'Materials', value: 'Steel, aluminum, high-impact plastic' },
      { name: 'Extended Length', value: '6-12 feet per unit' },
      { name: 'Height Options', value: '3-6 feet' },
      { name: 'Weight', value: '15-45 lbs depending on material' },
      { name: 'Setup Time', value: 'Under 1 minute per unit' },
      { name: 'Storage', value: 'Compact folded design' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777149/CollapsibleBarrier2_kvw9kv.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777142/CollapsibleBarrier1_gk9cfv.png'
    ],
    relatedProducts: ['swing-gates', 'sliding-gates'],
    seoTitle: 'Collapsible Barriers | Portable Crowd Control Solutions | Global Technocrats',
    seoDescription: 'Professional collapsible barrier systems for crowd control, traffic management, and temporary security applications.'
  },

  {
    id: 'hesco-box',
    name: 'Hesco Box',
    category: 'gates',
    subcategory: 'Gates & Barriers',
    description: 'Military-grade collapsible barriers for blast protection, flood control, and perimeter security.',
    longDescription: 'Hesco boxes are modern gabion-like structures used for force protection and flood control. They consist of collapsible wire mesh containers with heavy-duty fabric liners, designed for rapid deployment in military, emergency, and security applications where quick barrier establishment is critical.',
    features: [
      'Rapid deployment capability',
      'Collapsible wire mesh with fabric liner',
      'High blast and impact resistance',
      'Suitable for sand, dirt, or gravel fill',
      'Reusable and relocatable',
      'Military-grade construction',
      'Minimal manpower required for setup'
    ],
    applications: [
      'Military base perimeter security',
      'Blast walls and force protection',
      'Emergency flood control barriers',
      'Erosion control and soil stabilization',
      'Traffic control in conflict zones',
      'Critical infrastructure protection'
    ],
    specifications: [
      { name: 'Material', value: 'Galvanized steel mesh with geotextile liner' },
      { name: 'Standard Size', value: '4\'6" x 3\'6" x 32\' (height x width x length)' },
      { name: 'Fill Material', value: 'Sand, dirt, gravel' },
      { name: 'Deployment Time', value: 'Minutes with minimal crew' },
      { name: 'Blast Rating', value: 'Military specification' },
      { name: 'Reusability', value: 'Multiple deployment cycles' }
    ],
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777263/HescoBox11_avwixf.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777286/HescoBox2_echlf3.png'
    ],
    relatedProducts: ['architectural-gabions', 'collapsible-barrier'],
    seoTitle: 'Hesco Box | Military-Grade Blast Barriers | Global Technocrats',
    seoDescription: 'Professional Hesco box barrier systems for military force protection, flood control, and emergency security applications.'
  }
];

// Helper functions for data access
export const getProductById = (id: string): Product | undefined => {
  return productsData.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return productsData.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(productsData.map(product => product.category))];
};

export const getCategoryTitle = (category: string): string => {
  const categoryTitles: Record<string, string> = {
    'fencing': 'Fencing Solutions',
    'gates': 'Gates & Barriers', 
    'ai': 'Advanced AI Products',
    'drdo': 'DRDO TOT Products',
    'defence-tech': 'Defence Tech'
  };
  return categoryTitles[category] || category;
};

// Category filter options for ProductFilters component
export const categoryFilters = [
  'All Categories',
  'Fencing Solutions',
  'Gates & Barriers',
  'Advanced AI Products',
  'DRDO TOT Products',
  'Defence Tech'
];

// All products flat list for search functionality
export const allProducts = productsData;

// Product categories for category view (keeping old structure for compatibility)
export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  products: Product[];
  categoryLink: string;
}

// Pre-computed category products - eliminate O(n) filtering per render
const FENCING_ORDER = [
  'crash-rated-fence',
  'chain-link-fence',
  'anti-climb',
  'decorative-fencing',
  'razor-mesh',
  'concertina-coil',
  'barbed-wire-fence',
];
const fencingProducts = FENCING_ORDER
  .map(id => productsData.find(p => p.id === id))
  .filter((p): p is Product => p !== undefined);
const gatesProducts = productsData.filter(p => p.category === 'gates');
const drdoProducts = productsData.filter(p => p.category === 'drdo');
const defenceProducts = productsData.filter(p => p.category === 'defence-tech');
const aiProducts = productsData.filter(p => p.category === 'ai');

export const productCategories: ProductCategory[] = [
  {
    id: 'fencing',
    title: 'Fencing Solutions',
    description: 'High-security fencing systems designed to protect sensitive installations and critical infrastructure.',
    icon: 'ShieldAlert',
    products: fencingProducts,
    categoryLink: '/products/fencing'
  },
  {
    id: 'gates',
    title: 'Gates & Barriers',
    description: 'Professional gate systems and barrier solutions for access control and perimeter security.',
    icon: 'DoorOpen',
    products: gatesProducts,
    categoryLink: '/products/gates'
  },
  {
    id: 'drdo',
    title: 'DRDO TOT Products',
    description: 'Technology transfer products developed in collaboration with Defence Research and Development Organisation.',
    icon: 'Award',
    products: drdoProducts,
    categoryLink: '/products/drdo'
  },
  {
    id: 'defence-tech',
    title: 'Defence Tech',
    description: 'Advanced defense technology solutions for military and defense applications.',
    icon: 'Globe',
    products: defenceProducts,
    categoryLink: '/products/defence'
  },
  {
    id: 'ai',
    title: 'Advanced AI Products',
    description: 'Cutting-edge artificial intelligence solutions for security and surveillance applications.',
    icon: 'Cpu',
    products: aiProducts,
    categoryLink: '/products/ai'
  }
];