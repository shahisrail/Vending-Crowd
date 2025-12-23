export type NavItem = {
  title: string;
  path: string;
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "How It Works", path: "/how-it-works" },
  { title: "FAQ's", path: "/faq" },
  { title: "Services", path: "/services" },
  { title: "Pricing", path: "/pricing" },
  { title: "Contact", path: "/contact" },
];

export type SocialLink = {
  name: string;
  path: string;
  icon: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "instagram", path: "#", icon: "/logo/instagram.svg" },
  { name: "facebook", path: "#", icon: "/logo/facebook.svg" },
  { name: "youtube", path: "#", icon: "/logo/youtube.svg" },
];

export const HERO_BADGE = "A solution for better vending";
export const HERO_TITLE = "The Amazon of Vending Machine Operations";
export const HERO_DESCRIPTION =
  "We provide a vast network vending machine attendants highly trained to restock, repair, and service your machines, including cash collection and transport.";

export type HeroHighlight = {
  logo: string;
  text: string;
};

export const HERO_HIGHLIGHTS: HeroHighlight[] = [
  { logo: "/icons/check-filled-green.svg", text: "Lorem ipsum dolor" },
  { logo: "/icons/check-filled-green.svg", text: "Lorem ipsum dolor2" },
  { logo: "/icons/check-filled-green.svg", text: "Lorem ipsum dolor3" },
];

export const HERO_IMAGE = {
  src: "/images/background/hero-bg.png",
  alt: "Filled vending machine with colorful emoji products — Owner-Operators Love Us!",
};

export type VisualBlueHighlight = string;

export const VISUAL_BLUE_HIGHLIGHTS: VisualBlueHighlight[] = [
  "Move at your own pace",
  "Perfect for beginners",
  "We help you find your first location",
  "Learn the fundamentals about vending",
  "Access to one-on-one help from experts",
];

export type NewComerAvatar = string;

export const NEW_COMER_AVATARS: NewComerAvatar[] = [
  "/images/users/user5.jpg",
  "/images/users/user4.jpg",
  "/images/users/user3.jpg",
  "/images/users/user2.png",
  "/images/users/user1.png",
];

export type ServiceFeature = {
  icon: string;
  text: string;
};

export const NEW_COMER_FEATURES: ServiceFeature[] = [
  { icon: "/icons/four-squers.svg", text: "filling vending machines" },
  { icon: "/icons/magic.svg", text: "fixing vending machines" },
  { icon: "/icons/swap.svg", text: "moving vending machines" },
  { icon: "/icons/cash.svg", text: "collecting cash deposits " },
];

export type FeatureCard = {
  title: string;
  des: string;
  image: string;
  color?: string;
  light?: boolean;
};

export const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "Machine Transport",
    des: "We transport your vending machines using a network of logistics experts.",
    image: "/images/background/feature-bg-1.png",
    color: "#FFE1A6",
  },
  {
    title: "Inventory Restocking",
    des: "Your vending machines are kept fully stocked through on-demand or scheduled restocking.",
    image: "/images/background/feature-bg-2.png",
    color: "#FFC8A6",
  },
  {
    title: "Inventory Storage",
    des: "Products for restocking are stored at convenient locations near your machines.",
    image: "/images/background/feature-bg-3.png",
    light: true,
  },
  {
    title: "Keyholder Services",
    des: "Our local Keyholders provide inventory storage and key management for faster service.",
    image: "/images/background/feature-bg-4.png",
    color: "#9BF3BD",
  },
  {
    title: "Maintenance Assessment",
    des: "We send an attendant to assess and report on any vending machine issues.",
    image: "/images/background/feature-bg-5.png",
    color: "#FFCEED",
  },
  {
    title: "Maintenance Services",
    des: "Our trained attendants handle all your vending machine maintenance needs.",
    image: "/images/background/feature-bg-6.png",
    color: "#C8D7FF",
  },
];

export type HowItWorksStep = {
  title: string;
  image: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: "A vending machine operator submits a work order.",
    image: "/images/background/how-it-works-1.png",
  },
  {
    title: "One of our machine attendants has been assigned the work order.",
    image: "/images/background/how-it-works-2.png",
  },
  {
    title: "The machine attendant travels to the designated location to carry out the task.",
    image: "/images/background/how-it-works-3.png",
  },
  {
    title: "The attendant returns the key to the local keyholder upon completion of the work.",
    image: "/images/background/how-it-works-4.png",
  },
];

export type VisualPinkHighlight = {
  title: string;
  icon: string;
};

export const VISUAL_PINK_HIGHLIGHTS: VisualPinkHighlight[] = [
  { title: "Move at your own pace", icon: "icons/price-value.svg" },
  { title: "Perfect for beginners", icon: "icons/growing.svg" },
  { title: "We help you find your first location", icon: "icons/location-pin.svg" },
  { title: "Learn the fundamentals about vending", icon: "icons/expert.svg" },
  { title: "Learn to leverage VendingCrowd to grow", icon: "icons/trend.svg" },
  { title: "Access to one-on-one help from experts", icon: "icons/top-team.svg" },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "1",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "3",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "4",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "5",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const FAQ_SCHEMA_ITEMS: FaqItem[] = [
  {
    id: "1",
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    question: "How does VendingCrowd dispatch attendants?",
    answer: "Attendants are dispatched remotely based on location and availability.",
  },
  {
    id: "3",
    question: "Can I track my machine?",
    answer: "Yes, our dashboard provides real-time tracking of all services.",
  },
];

export const META_DEFAULTS = {
  title: "VendingCrowd — The Amazon of Vending Machine Operations",
  description:
    "VendingCrowd allows vending machine operators to remotely dispatch attendants to restock, repair, and collect cash from machines.",
  canonical: "https://vendingcrowd.com/",
  socialImage: "https://vendingcrowd.com/images/background/hero-bg.png",
  twitterCard: "summary_large_image",
};

export const HERO_SOCIAL_META = {
  facebook: {
    title: META_DEFAULTS.title,
    description: META_DEFAULTS.description,
    type: "website",
    url: META_DEFAULTS.canonical,
    image: META_DEFAULTS.socialImage,
  },
  twitter: {
    title: META_DEFAULTS.title,
    description: META_DEFAULTS.description,
    image: META_DEFAULTS.socialImage,
    card: META_DEFAULTS.twitterCard,
  },
};

export const HOME_BADGE = "HOW WE HELP";

export const ACADEMY_PLAN_FEATURES: string[] = [
  "Training Videos",
  "Sample Contracts",
  "Marketing Materials",
  "One-on-One Sessions",
  "Service Fee",
  "Location Assistance",
];

export const ACADEMY_PLAN_PRICE = "$89.99/mth";
export const ACADEMY_PLAN_NOTE =
  "You will need a computer or laptop to participate in this plan";

export type SchemaHowToStep = {
  title: string;
  image: string;
};

export const buildHowToJsonLd = (steps: SchemaHowToStep[]) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How VendingCrowd Works",
  description: "Step-by-step process for vending machine operators using VendingCrowd.",
  image: "/images/background/how-it-works-1.jpg",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    name: `Step ${index + 1}: ${step.title}`,
    text: step.title,
    image: step.image,
    position: index + 1,
  })),
});

export const buildFaqJsonLd = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
