// Centralized configuration and content data for Dahuja Furnishers
// Allows showroom management to easily update details, photography, and links.

export interface FurnitureProduct {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  materialHighlight: string;
  image: string;
  dimensionsHint?: string;
  isFeatured?: boolean;
}

export interface FurnitureCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemCountDesc: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living' | 'Bedroom' | 'Dining' | 'Office' | 'Showroom';
  image: string;
  caption: string;
}

export const SHOWROOM_INFO = {
  name: 'Dahuja Furnishers',
  tagline: 'Define Your Space',
  phone: '+91 98554 50060',
  phoneRaw: '+919855450060',
  whatsapp: '+91 98554 50060',
  whatsappRaw: '919855450060',
  whatsappPreFill: 'Hello Dahuja Furnishers, I would like to enquire about your furniture collection.',
  email: 'contact@dahujafurnishers.com',
  address: {
    street: 'Near Railway Flyover, Malout Rd',
    city: 'Abohar',
    state: 'Punjab',
    postalCode: '152116',
    country: 'India',
    fullFormatted: 'Near Railway Flyover, Malout Rd, Abohar, Punjab 152116, India',
  },
  hours: [
    { days: 'Monday – Sunday', time: '10:00 AM – 8:30 PM' },
    { days: 'Open All 7 Days', time: 'Consultants available at showroom' },
  ],
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Near+Railway+Flyover+Malout+Rd+Abohar+Punjab+152116',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.513470779261!2d74.1994!3d30.1453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917a78377e8d77d%3A0x7d0a28f8045610b2!2sMalout%20Rd%2C%20Abohar%2C%20Punjab%20152116!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
  socialMedia: {
    instagram: '#', // Ready to be filled with official Instagram handle
    facebook: '#',  // Ready to be filled with official Facebook page
    youtube: '#',   // Ready to be filled with official YouTube channel
  },
};

// Generated luxury imagery paths
export const IMAGES = {
  hero: '/src/assets/images/hero_luxury_living_1790144185365.jpg',
  showroom: '/src/assets/images/showroom_gallery_space_1790144201524.jpg',
  bedroom: '/src/assets/images/bedroom_master_suite_1790144216431.jpg',
  dining: '/src/assets/images/dining_sculptural_marble_1790144233239.jpg',
  office: '/src/assets/images/office_executive_lounge_1790144245461.jpg',
};

// Comprehensive furniture categories
export const FURNITURE_CATEGORIES: FurnitureCategory[] = [
  {
    id: 'sofas',
    name: 'Sofas & Sectionals',
    tagline: 'Architectural Comfort',
    description: 'Bespoke modular loungers, L-shaped sectionals, Chesterfield styles, and imported fabric suites.',
    image: IMAGES.hero,
    itemCountDesc: 'Over 40+ curated designs on display',
  },
  {
    id: 'beds',
    name: 'Beds & Headboards',
    tagline: 'Restful Sanctuary',
    description: 'King and queen platform beds with fluted acoustic paneling, hydraulic storage, and designer upholstery.',
    image: IMAGES.bedroom,
    itemCountDesc: 'Solid wood & upholstered beds',
  },
  {
    id: 'dining',
    name: 'Dining Tables & Chairs',
    tagline: 'Epicurean Gathering',
    description: 'Sculptural Calacatta marble tops, solid teak and walnut tables with ergonomic textured dining chairs.',
    image: IMAGES.dining,
    itemCountDesc: '4, 6 & 8 seater setups',
  },
  {
    id: 'living-room',
    name: 'Living Room Sets',
    tagline: 'The Centerpiece of Living',
    description: 'Complete living room ensembles, coffee tables, console tables, and integrated media units.',
    image: IMAGES.hero,
    itemCountDesc: 'Complete coordinated suites',
  },
  {
    id: 'wardrobes',
    name: 'Wardrobes & Closets',
    tagline: 'Sleek Organization',
    description: 'Floor-to-ceiling modular wardrobes, fluted glass sliding shutters, and custom interior cabinetry.',
    image: IMAGES.bedroom,
    itemCountDesc: 'Custom configurations available',
  },
  {
    id: 'recliners',
    name: 'Recliners & Accent Chairs',
    tagline: 'Personal Indulgence',
    description: 'Motorized power recliners, sculptural occasional swivel chairs, and velvet reading armchairs.',
    image: IMAGES.showroom,
    itemCountDesc: 'Ergonomic lounge comfort',
  },
  {
    id: 'office',
    name: 'Office & Executive Suites',
    tagline: 'Productive Sophistication',
    description: 'Prestigious executive desks, boardroom tables, ergonomic task chairs, and reception credenzas.',
    image: IMAGES.office,
    itemCountDesc: 'For corporate & home study',
  },
  {
    id: 'tables-cabinets',
    name: 'Tables & Cabinets',
    tagline: 'Tactile Storage & Display',
    description: 'Bar cabinets, shoe units, sideboards, nesting tables, and accent centerpieces.',
    image: IMAGES.dining,
    itemCountDesc: 'Artisanal storage pieces',
  },
  {
    id: 'mattresses',
    name: 'Mattresses & Sleep Systems',
    tagline: 'Orthopedic Spine Support',
    description: 'Premium memory foam, pocket spring, natural latex, and hotel-grade luxury mattresses.',
    image: IMAGES.bedroom,
    itemCountDesc: 'Tested sleep comfort zones',
  },
  {
    id: 'home-decor',
    name: 'Home Décor & Accents',
    tagline: 'Curated Textures',
    description: 'Architectural mirrors, decorative screens, mood lighting fixtures, and artistic centerpieces.',
    image: IMAGES.showroom,
    itemCountDesc: 'Finishing touches for luxury homes',
  },
];

// Product showcase catalog for visual discovery and inquiry
export const SHOWCASE_PRODUCTS: FurnitureProduct[] = [
  {
    id: 'aurora-modular-sofa',
    name: 'Aurora Modular Grand Sectional',
    category: 'Sofas',
    subCategory: 'Living Room',
    description: 'Sculptural low-profile sectional upholstered in spill-resistant textured boucle with high-resilience foam core.',
    materialHighlight: 'Performance Italian Boucle · Teak Internal Frame',
    image: IMAGES.hero,
    isFeatured: true,
  },
  {
    id: 'monolith-calacatta-dining',
    name: 'Monolith Calacatta Marble Dining Set',
    category: 'Dining',
    subCategory: 'Dining Room',
    description: 'Solid Calacatta marble dining slab with beveled edges resting on dual sculptural fluted pedestals.',
    materialHighlight: 'Natural Calacatta Marble · Brushed Brass Trims',
    image: IMAGES.dining,
    isFeatured: true,
  },
  {
    id: 'celeste-fluted-bed',
    name: 'Celeste Master Wingback Platform Bed',
    category: 'Beds',
    subCategory: 'Bedroom',
    description: 'Architectural king platform bed featuring full-height acoustic fluted headboard panels and discreet LED coves.',
    materialHighlight: 'Velvet Chenille Upholstery · Hydraulic Storage',
    image: IMAGES.bedroom,
    isFeatured: true,
  },
  {
    id: 'apex-executive-desk',
    name: 'Apex Architectural Executive Suite',
    category: 'Office Furniture',
    subCategory: 'Commercial & Study',
    description: 'Substantial executive workstation crafted from dark American walnut with wireless charging integration and leather inlay.',
    materialHighlight: 'American Walnut Veneer · Top-Grain Saddle Leather',
    image: IMAGES.office,
    isFeatured: true,
  },
  {
    id: 'solace-power-recliner',
    name: 'Solace Ergonomic Motorized Recliner',
    category: 'Recliners',
    subCategory: 'Living Room',
    description: 'Whisper-quiet dual-motor recliner with adjustable lumbar support, zero-gravity position, and USB-C port.',
    materialHighlight: 'Supple Nappa Leather · Steel Articulated Chassis',
    image: IMAGES.showroom,
    isFeatured: false,
  },
  {
    id: 'elysium-accent-credenza',
    name: 'Elysium Fluted Sideboard Credenza',
    category: 'Cabinets',
    subCategory: 'Living & Dining',
    description: 'Curved credenza with vertical wood tambour louvers, soft-close hardware, and Nero Marquina marble top.',
    materialHighlight: 'Solid Teak Louvers · Nero Marquina Marble',
    image: IMAGES.dining,
    isFeatured: false,
  },
  {
    id: 'velour-lounge-armchair',
    name: 'Velour Curved Occasional Armchair',
    category: 'Chairs',
    subCategory: 'Living Room',
    description: 'Organic cocoon armchair with 360-degree silent swivel base and deep pocketed seating posture.',
    materialHighlight: 'Textured Wool Blend · Matte Powder-Coated Base',
    image: IMAGES.hero,
    isFeatured: false,
  },
  {
    id: 'lumina-master-wardrobe',
    name: 'Lumina Smoked Glass Modular Wardrobe',
    category: 'Wardrobes',
    subCategory: 'Bedroom',
    description: 'Contemporary sliding wardrobe with anti-glare smoked glass panels, anodized bronze frame, and sensory lighting.',
    materialHighlight: 'Tempered Fluted Glass · Anodized Bronze Hardware',
    image: IMAGES.bedroom,
    isFeatured: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Great Room Living Collection',
    category: 'Living',
    image: IMAGES.hero,
    caption: 'Curated living ensemble showcasing modular seating and ambient architectural lighting.',
  },
  {
    id: 'gal-2',
    title: 'Flagship Showroom Floor',
    category: 'Showroom',
    image: IMAGES.showroom,
    caption: 'Spacious exhibition gallery at Malout Road, Abohar with full-scale room concepts.',
  },
  {
    id: 'gal-3',
    title: 'Sanctuary Master Bedroom Suite',
    category: 'Bedroom',
    image: IMAGES.bedroom,
    caption: 'Custom upholstered wingback king bed with fluted wall panels and floating bedside tables.',
  },
  {
    id: 'gal-4',
    title: 'Monolithic Marble Dining Suite',
    category: 'Dining',
    image: IMAGES.dining,
    caption: 'Natural Calacatta marble dining table surrounded by sculptural comfort dining armchairs.',
  },
  {
    id: 'gal-5',
    title: 'Executive Boardroom & Study',
    category: 'Office',
    image: IMAGES.office,
    caption: 'Premium ergonomic executive seating and architectural American walnut workstation.',
  },
];
