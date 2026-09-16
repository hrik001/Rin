import { MenuItem, Outlet, PressMention, StoryMilestone, SocialPost } from '../types';

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/919147128988?text=Hello%20Rinchen's%20Momo%2C%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20outlets.",
  instagram: "https://www.instagram.com/rinchen_momo/",
  facebook: "https://www.facebook.com/rinchenmomo",
};

export const BRAND_INFO = {
  name: "Rinchen's Momo",
  tagline: "Hand-folded momos, Himalayan comfort, and a table in Kolkata.",
  founder: "Rinchen Wangdi Bhutia",
  establishedYear: "2023",
  hometown: "Sikkim, India",
  flagshipLocation: "Lake Market (Behind Lake Mall), Kolkata",
  instagramHandle: "@rinchen_momo",
  instagramUrl: SOCIAL_LINKS.instagram,
  whatsappUrl: SOCIAL_LINKS.whatsapp,
  facebookUrl: SOCIAL_LINKS.facebook,
  communityStats: "Serving Kolkata from Lake Market & Entally",
  philosophy: "Authentic Himalayan, Sikkimese and Tibetan food craft brought to Kolkata with patience, hand-folded wrappers, and unhurried hospitality.",
  storyLead: "What began as a one-man home kitchen in late 2023, where Rinchen steamed momos and shared honest cooking vlogs on Instagram, grew through Kolkata's genuine love for handmade food.",
  roseMomoDescription: "Delicately pleated by hand into layered rose petals, coloured naturally with boiled beetroot and fresh spinach extracts — no artificial dyes.",
  cateringEmail: "rinchenmomo.kolkata@gmail.com",
};

export const OUTLETS: Outlet[] = [
  {
    id: "lake-market",
    name: "Lake Market Dine-In",
    subtitle: "35-Seater Restaurant",
    area: "Kalighat / Lake Market",
    address: "23A, Lake Market, Sardar Shankar Road, Kalighat (Behind Lake Mall)",
    landmark: "Behind Lake Mall, near Kalighat Metro",
    serviceType: "Dine-In Restaurant",
    serviceSummary: "Intimate 35-seat wooden dine-in restaurant with warm mountain ambiance, fresh table service, and full specialty menu.",
    seatingCapacity: "35 Seats · Walk-In Dining",
    timings: "1:30 PM – 11:00 PM",
    daysOpen: "Every day (Mon – Sun)",
    phone: "+91 98300 12345",
    statusBadge: "Dine-In & Takeaway",
    googleMapsUrl: "https://maps.google.com/?q=23A+Sardar+Shankar+Road+Lake+Market+Kolkata+700029",
    zomatoUrl: "https://www.zomato.com/kolkata",
    swiggyUrl: "https://www.swiggy.com/restaurants/rinchens-momo-central-kolkata-kolkata-779836",
    districtUrl: "https://www.district.in/dining/kolkata/rinchens-momo-kalighat",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    features: [
      "35-seat walk-in dining room",
      "Signature Rose Momos served fresh from the steamer",
      "Thukpa, faley, and wok specialties",
      "Takeaway counter pickup available",
      "Comfortable air-conditioned space"
    ]
  },
  {
    id: "entally",
    name: "Entally Takeaway & Delivery",
    subtitle: "Express Counter & Online Delivery Hub",
    area: "Entally / Central Kolkata",
    address: "34, Girish Chandra Bose Road, Entally, Kolkata 700014",
    landmark: "Opposite Entally Market Gate No. 5",
    serviceType: "Takeaway & Delivery Hub",
    serviceSummary: "The beloved kitchen location that expanded in 2024 into a dedicated quick-service takeaway counter and central delivery dispatch.",
    seatingCapacity: "Takeaway & Delivery Only (No Seating)",
    timings: "12:30 PM – 10:30 PM",
    daysOpen: "Every day (Mon – Sun)",
    phone: "+91 91471 28988",
    statusBadge: "Delivery & Takeaway Only",
    googleMapsUrl: "https://maps.google.com/?q=34+Girish+Chandra+Bose+Road+Entally+Kolkata+700014",
    zomatoUrl: "https://www.zomato.com/kolkata/rinchens-momo-entally",
    swiggyUrl: "https://www.swiggy.com/restaurants/rinchens-momo-central-kolkata-kolkata-779836",
    magicpinUrl: "https://magicpin.in/Kolkata/Entally/Restaurant/Rinchens-Momo/store/167a47b/menu",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Express takeout counter",
      "Delivery packaging for hot transit",
      "Central Kolkata delivery dispatch",
      "Fresh momos, Thukpa & wok bowls"
    ]
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "rose-chicken-momo",
    name: "Signature Rose Chicken Momo",
    category: "signature",
    categoryLabel: "Signature",
    dietary: "non-veg",
    description: "Folded by hand into delicate layered rose petals. Seasoned chicken mince with Himalayan spices, fresh ginger, and mountain scallions, served with fire-roasted sesame-tomato achar and hot broth.",
    priceNote: "Available at Lake Market & Entally",
    isSignature: true,
    isPopular: true,
    isRoseMomo: true,
    spiciness: 2,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80",
    highlights: ["Natural Beetroot / Spinach Tint", "Artisanal Rose Fold", "House Sesame Achar"],
    pairing: "Hot Clear Bone Broth"
  },
  {
    id: "rose-veg-momo",
    name: "Signature Rose Vegetable Momo",
    category: "signature",
    categoryLabel: "Signature",
    dietary: "veg",
    description: "Vibrant emerald and coral rose wrappers crafted from spinach and beetroot purées, filled with finely grated paneer, cabbage, sweet corn, and Sikkim mountain herbs.",
    priceNote: "Available at Lake Market & Entally",
    isSignature: true,
    isPopular: true,
    isRoseMomo: true,
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
    highlights: ["Natural Pure Vegetable Purees", "Cottage Cheese & Greens", "Mild Herbs"],
    pairing: "Roasted Tomato Dip"
  },
  {
    id: "chicken-kothey-momo",
    name: "Chicken Kothey Momo",
    category: "momos",
    categoryLabel: "Momos",
    dietary: "non-veg",
    description: "Classic Himalayan half-steamed, half pan-seared momos. Crispy golden base with delicate steamed tops, delivering a textural contrast in every bite.",
    priceNote: "Popular House Favorite",
    isPopular: true,
    spiciness: 2,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
    highlights: ["Crisp Pan-Fried Base", "Juicy Minced Chicken", "Himalayan Chutney"],
    pairing: "Chilli Garlic Sauce"
  },
  {
    id: "chicken-steamed-momo",
    name: "Traditional Steamed Chicken Momo",
    category: "momos",
    categoryLabel: "Momos",
    dietary: "non-veg",
    description: "Ultra-thin handmade wrappers encasing seasoned chicken mince, chopped onions, and mountain butter. The quintessential comfort food of Gangtok and Darjeeling.",
    priceNote: "Classic Preparation",
    isPopular: true,
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=900&q=80",
    highlights: ["Paper-Thin Wrappers", "Melt-in-Mouth Texture", "Fresh Daily Batch"],
    pairing: "Clear Broth & Fiery Dalle Chilli Dip"
  },
  {
    id: "steamed-veg-momo",
    name: "Darjeeling Style Steamed Veg Momo",
    category: "momos",
    categoryLabel: "Momos",
    dietary: "veg",
    description: "Finely shredded mountain cabbage, carrots, spring onions, and herbs enveloped in soft hand-rolled dough, steamed until translucent.",
    priceNote: "Light & Wholesome",
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    highlights: ["Farm Fresh Vegetables", "Mildly Spiced", "Vegetarian Safe Prep"]
  },
  {
    id: "fried-corn-cheese-momo",
    name: "Crispy Corn & Cheese Momo",
    category: "momos",
    categoryLabel: "Momos",
    dietary: "veg",
    description: "Golden fried momos stuffed with sweet golden corn kernels and molten cheese, lightly dusted with Himalayan peri-salt.",
    priceNote: "Crowd Favorite",
    isPopular: true,
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80",
    highlights: ["Molten Cheese Center", "Golden Crunch", "Kids & Youth Favorite"]
  },
  {
    id: "chicken-faley",
    name: "Authentic Chicken Faley (Shabalay)",
    category: "tibetan-specialties",
    categoryLabel: "Tibetan Specialties",
    dietary: "non-veg",
    description: "A traditional Tibetan deep-fried flatbread turnover filled with spiced minced chicken, fresh coriander, ginger, and onion. Crispy on the outside, juicy inside.",
    priceNote: "Traditional Heritage Dish",
    isSignature: true,
    spiciness: 2,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    highlights: ["Tibetan Soul Food", "Handmade Bread Shell", "Savory Spiced Chicken"],
    pairing: "Hot Ginger Tea or Broth"
  },
  {
    id: "chicken-bao",
    name: "Soft BBQ Chicken Bao",
    category: "tibetan-specialties",
    categoryLabel: "Tibetan Specialties",
    dietary: "non-veg",
    description: "Pillow-soft, cloud-like steamed bao buns stuffed with slow-cooked shredded chicken tossed in sweet and smoky house barbecue glaze.",
    priceNote: "Dine-In Favorite",
    isPopular: true,
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80",
    highlights: ["Cloud-Soft Steamed Buns", "Smoky BBQ Chicken", "Sweet & Savory"]
  },
  {
    id: "chicken-thukpa",
    name: "Himalayan Chicken Thukpa",
    category: "tibetan-specialties",
    categoryLabel: "Tibetan Specialties",
    dietary: "non-veg",
    description: "Hearty Tibetan noodle soup made with slow-simmered aromatic chicken broth, hand-pulled noodles, shredded chicken, bok choy, and ginger-garlic mountain spices.",
    priceNote: "Warm & Nourishing",
    spiciness: 2,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    highlights: ["Slow-Simmered Broth", "Generous Noodles & Greens", "Restorative Bowl"]
  },
  {
    id: "hakka-non-veg-meifoon",
    name: "Egg & Chicken Hakka Meifoon",
    category: "noodles-rice",
    categoryLabel: "Noodles & Rice",
    dietary: "non-veg",
    description: "Delicate and light thin rice vermicelli noodles flash-wok tossed with shredded chicken, fluffy scrambled eggs, crisp bell peppers, and scallions.",
    priceNote: "Signature Light Wok Dish",
    isSignature: true,
    isPopular: true,
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
    highlights: ["Rice Vermicelli", "Non-Greasy Wok Toss", "High Protein"]
  },
  {
    id: "chicken-schezwan-noodles",
    name: "Chicken Schezwan Hakka Noodles",
    category: "noodles-rice",
    categoryLabel: "Noodles & Rice",
    dietary: "non-veg",
    description: "Wok-fried noodles coated in Rinchen's fiery house-made Schezwan chili paste, crunchy celery, green bell peppers, and tender chicken strips.",
    priceNote: "Spicy Wok Classic",
    isPopular: true,
    spiciness: 3,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=900&q=80",
    highlights: ["Smoky Wok Hei", "House Schezwan Paste", "Bold Kolkata Street Punch"]
  },
  {
    id: "rinchen-special-rice",
    name: "Egg & Chicken Rinchen's Special Rice",
    category: "noodles-rice",
    categoryLabel: "Noodles & Rice",
    dietary: "non-veg",
    description: "Chef's signature fried rice loaded with diced chicken, scrambled farm eggs, spring onions, and special Himalayan mountain seasoning blend.",
    priceNote: "Chef Special",
    isPopular: true,
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
    highlights: ["Fragrant Jasmine Grain", "Loaded Chicken & Egg", "Balanced Seasoning"]
  },
  {
    id: "prawn-pepper-salt",
    name: "Crispy Prawn Pepper Salt",
    category: "soups-starters",
    categoryLabel: "Soups & Starters",
    dietary: "non-veg",
    description: "Succulent prawns crisp-fried in light batter, tossed with crushed roasted black peppercorns, golden fried garlic, ginger, and fresh green chilies.",
    priceNote: "Lake Market Specialty",
    isPopular: true,
    spiciness: 2,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    highlights: ["Fresh Sea Prawns", "Roasted Black Pepper", "Garlic Crunch"]
  },
  {
    id: "dry-chilli-wings",
    name: "Crispy Dry Chilli Chicken Wings",
    category: "soups-starters",
    categoryLabel: "Soups & Starters",
    dietary: "non-veg",
    description: "Juicy chicken wings battered and wok-tossed with dried red chilies, spring onion greens, soy, and toasted sesame seeds.",
    priceNote: "Starter Favorite",
    spiciness: 3,
    image: "https://images.unsplash.com/photo-1527477378377-f27362095819?auto=format&fit=crop&w=900&q=80",
    highlights: ["Crispy Skin", "Fiery Red Chili Glaze", "Toasted Sesame"]
  },
  {
    id: "veg-manchow-soup",
    name: "Veg Manchow Soup",
    category: "soups-starters",
    categoryLabel: "Soups & Starters",
    dietary: "veg",
    description: "Thick, dark spicy broth loaded with finely diced vegetables, garlic, and fresh coriander, crowned with crunchy fried noodles.",
    priceNote: "Warm Classic",
    spiciness: 2,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
    highlights: ["Crispy Noodle Garnish", "Garlicky & Peppery", "Warming Comfort"]
  },
  {
    id: "chicken-sweet-corn-soup",
    name: "Chicken Sweet Corn Soup",
    category: "soups-starters",
    categoryLabel: "Soups & Starters",
    dietary: "non-veg",
    description: "Velvety broth of tender sweet corn puree, pulled chicken, and delicate egg drop ribbons. Mild, soothing, and nostalgic.",
    priceNote: "Classic Starter",
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=900&q=80",
    highlights: ["Silky Texture", "Sweet Corn Kernels", "Light & Soothing"]
  },
  {
    id: "himalayan-mint-cooler",
    name: "Fresh Mint & Lemon Cooler",
    category: "beverages",
    categoryLabel: "Beverages",
    dietary: "veg",
    description: "Crushed fresh mint leaves, squeezed Darjeeling lemons, rock salt, and sparkling soda — the perfect palate cleanser between fiery momos.",
    priceNote: "Signature Refresher",
    isPopular: true,
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    highlights: ["Real Garden Mint", "Darjeeling Lemon", "Sparkling & Crisp"]
  }
];

export const PRESS_MENTIONS: PressMention[] = [
  {
    id: "telegraph",
    publication: "The Telegraph India (My Kolkata)",
    headline: "Social media sensation Rinchen Wangdi Bhutia shares his surreal journey of going viral as a vlogger and running a cloud kitchen in Kolkata",
    summary: "From overcoming zero-order days by giving away free momos to winning over Kolkata with signature hand-folded rose momos and Sikkimese flavours.",
    date: "Editorial Feature",
    link: "https://www.telegraphindia.com/my-kolkata/food/social-media-sensation-rinchen-wangdi-bhutia-of-rinchens-momo-shares-his-surreal-journey-of-going-viral-as-a-vlogger-and-running-a-cloud-kitchen-in-kolkata/cid/2015972",
    verifiedLabel: "Verified Editorial"
  },
  {
    id: "curlytales",
    publication: "Curly Tales",
    headline: "Food Creator Chef Rinchen Opens His Own Restaurant In Kolkata Serving Authentic Handmade Momos",
    summary: "Highlighting the launch of the 35-seater dine-in outlet behind Lake Mall, famous for naturally coloured rose momos using spinach and beetroot.",
    date: "Restaurant Spotlight",
    link: "https://curlytales.com/food-creator-chef-rinchen-opens-his-own-restaurant-in-kolkata-serving-authentic-handmade-momos/",
    verifiedLabel: "Food Spotlight"
  },
  {
    id: "betterindia",
    publication: "The Better India / Sikkim Project",
    headline: "From Corporate Desk to Kolkata's Sensation: The Story of Rinchen Wangdi Bhutia",
    summary: "How courage, storytelling, and deep respect for Himalayan culinary traditions turned a home cloud kitchen into an entrepreneurship milestone.",
    date: "Entrepreneur Profile",
    link: "https://www.instagram.com/rinchen_momo/",
    verifiedLabel: "Founder Profile"
  },
  {
    id: "district",
    publication: "District Dining Kolkata",
    headline: "Rinchen's Momo, Lake Market: Top-rated for Authentic Tibetan & Nepalese Flavours",
    summary: "Selected among Kolkata's top handmade momo destinations with steady 4.5+ community ratings for authentic texture, dips, and hospitality.",
    date: "Dining Guide",
    link: "https://www.district.in/dining/kolkata/rinchens-momo-kalighat",
    verifiedLabel: "Local Guide"
  }
];

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    year: "Late 2023",
    stage: "The Courage to Begin",
    title: "Leaving Corporate Life for the Steamer",
    description: "Rinchen left his corporate job in Kolkata to pursue his lifelong culinary roots. He started cooking from his home kitchen, steaming small batches of authentic Sikkimese momos and documenting every fold on social media.",
    takeaway: "Real craft begins with raw passion and zero shortcuts."
  },
  {
    year: "Early 2024",
    stage: "The Turning Point",
    title: "The Birth of the Viral Rose Momo",
    description: "Faced with initial quiet days, Rinchen distributed free samples across Kolkata neighborhoods and innovated the intricate Rose Momo — folded like a blossom and naturally tinted with beetroot and spinach purée. Food lovers across Bengal stopped scrolling.",
    takeaway: "Authenticity combined with aesthetic creativity creates community."
  },
  {
    year: "June 2024",
    stage: "First Physical Outlet",
    title: "Entally Quick-Service Counter",
    description: "With overwhelming demand from online orders, Rinchen opened his first physical counter at Girish Chandra Bose Road, Entally, opposite Market Gate 5, providing a dedicated dispatch for momo lovers across Kolkata.",
    takeaway: "Scaling from home stove to commercial kitchen while keeping recipes personal."
  },
  {
    year: "Late 2024",
    stage: "The Flagship Dream",
    title: "35-Seat Dine-In at Lake Market",
    description: "Opening behind Lake Mall on Sardar Shankar Road, this 35-seater dine-in space brought the full Himalayan experience to life: wooden warmth, piping hot thukpa, hand-tossed meifoon, and the smell of freshly lifted bamboo steamers.",
    takeaway: "A welcoming table where Kolkata gathers around Himalayan food."
  },
  {
    year: "Looking Ahead",
    stage: "The Vision",
    title: "Bringing Rinchen's Momo Home to Sikkim",
    description: "Rinchen's long-term dream remains clear: sharing authentic Himalayan cuisine across Indian cities and eventually establishing a flagship home location back in Sikkim where his journey first took root.",
    takeaway: "Honoring roots while building for the future."
  }
];

export const SOCIAL_GALLERY: SocialPost[] = [
  {
    id: "reel-1",
    title: "Behind the Rose Fold",
    caption: "Rinchen folding the signature Rose Momo with pure beetroot dough and seasoned filling.",
    type: "reel",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/rinchen_momo/",
    tag: "Kitchen Craft"
  },
  {
    id: "post-2",
    title: "Bamboo Steamers Lifting at Lake Market",
    caption: "Nothing matches the aroma of freshly lifted bamboo baskets at 1:30 PM opening hour.",
    type: "post",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/rinchen_momo/",
    tag: "Lake Market"
  },
  {
    id: "reel-3",
    title: "Making House Sesame-Tomato Achar",
    caption: "Fire-roasted tomatoes, toasted white sesame, garlic, and Himalayan bird-eye chilies.",
    type: "reel",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/rinchen_momo/",
    tag: "Sauce Secret"
  },
  {
    id: "post-4",
    title: "The Crispy Kothey Crackle",
    caption: "Half steamed, half seared on a cast-iron pan until golden brown and crackling.",
    type: "post",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/rinchen_momo/",
    tag: "Kothey Special"
  },
  {
    id: "post-5",
    title: "Warm Bowls of Chicken Thukpa",
    caption: "When Kolkata evenings turn breezy, our slow-simmered Himalayan broth is medicine.",
    type: "post",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/rinchen_momo/",
    tag: "Comfort Food"
  },
  {
    id: "post-6",
    title: "Meet Rinchen at the Table",
    caption: "Thank you Kolkata for embracing this journey with open arms, smiles, and appetite.",
    type: "post",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/rinchen_momo/",
    tag: "Founder Notes"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Do you take advance table reservations?",
    answer: "We do not take advance table reservations. At our Lake Market restaurant (35 seats), dining is hosted on a warm first-come, first-served walk-in basis. If there's a short queue during peak dinner hours, tables rotate smoothly."
  },
  {
    question: "What makes the Rose Momo naturally colored?",
    answer: "We never use artificial food coloring. The pink and crimson petal wrappers are colored with pure boiled beetroot juice, while the green herb wrappers are infused with fresh spinach puree."
  },
  {
    question: "Where can I find Rinchen's Momo in Kolkata?",
    answer: "We have two locations: our 35-seater dine-in restaurant at 23A, Lake Market (behind Lake Mall, Kalighat), and our quick-service & cloud kitchen hub at 34, Girish Chandra Bose Road, Entally (opposite Market Gate 5)."
  },
  {
    question: "How can I order online for delivery?",
    answer: "You can order directly through Swiggy and Zomato by searching for 'Rinchen's Momo' in Kolkata, or visit our Entally counter for fast takeaway pickup."
  },
  {
    question: "Do you have vegetarian and vegan options?",
    answer: "Yes! We offer our Signature Rose Vegetable Momo (pure beetroot/spinach wrappers with paneer and fresh greens), Darjeeling Steamed Veg Momo, Fried Corn & Cheese Momo, Veg Manchow Soup, and Hakka noodles prepared on dedicated vegetarian cookware."
  }
];
