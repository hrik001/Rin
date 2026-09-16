export type PageRoute = 'home' | 'menu' | 'story' | 'locations' | 'contact';

export type DietaryType = 'veg' | 'non-veg' | 'egg';

export type MenuCategory = 
  | 'all'
  | 'signature'
  | 'momos'
  | 'tibetan-specialties'
  | 'noodles-rice'
  | 'soups-starters'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryLabel: string;
  dietary: DietaryType;
  description: string;
  price?: number;
  priceNote?: string;
  isSignature?: boolean;
  isPopular?: boolean;
  isRoseMomo?: boolean;
  spiciness?: 1 | 2 | 3; // 1: Mild, 2: Spicy, 3: Fiery
  image: string;
  highlights?: string[];
  pairing?: string;
}

export interface Outlet {
  id: string;
  name: string;
  subtitle: string;
  area: string;
  address: string;
  landmark: string;
  serviceType: 'Dine-In Restaurant' | 'Quick-Service & Cloud Kitchen' | 'Takeaway & Delivery Hub';
  serviceSummary: string;
  seatingCapacity?: string;
  timings: string;
  daysOpen: string;
  phone?: string;
  statusBadge: string;
  googleMapsUrl: string;
  zomatoUrl?: string;
  swiggyUrl?: string;
  districtUrl?: string;
  magicpinUrl?: string;
  image: string;
  features: string[];
}

export interface PressMention {
  id: string;
  publication: string;
  headline: string;
  summary: string;
  date: string;
  link: string;
  verifiedLabel: string;
}

export interface StoryMilestone {
  year: string;
  stage: string;
  title: string;
  description: string;
  takeaway: string;
}

export interface SocialPost {
  id: string;
  title: string;
  caption: string;
  type: 'reel' | 'post';
  image: string;
  link: string;
  tag: string;
}
