/**
 * All JSON content shapes for the site.
 * These interfaces validate content/*.json at build time via tsc.
 */

/* ============================================================
   SHARED
   ============================================================ */
export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfoBlock {
  label: string;
  value: string;
  href?: string;
  icon: "phone" | "email" | "location" | "linkedin";
}

/** One file per transaction in content/closed/ — see src/lib/closed.ts */
export interface ClosedTransaction {
  name: string;
  location: string;
  propertyType: string;
  yearBuilt: string;
  units: number | string;
  pricePerUnit: string;
  repType: string;
  image?: string;
  /** Injected from the filename by readContentDir. */
  slug?: string;
}

/* ============================================================
   settings.json
   ============================================================ */
export interface SettingsContent {
  enabled: boolean;
}

/* ============================================================
   site.json
   ============================================================ */
export interface SiteContent {
  brand: string;
  tagline: string;
  description: string;
  broker: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    linkedIn: string;
    linkedInLabel: string;
    photo?: string;
  };
  nav: NavLink[];
  footer: {
    tagline: string;
    legalLinks: NavLink[];
    smallPrint: string;
    copyright: string;
  };
}

/* ============================================================
   home.json
   ============================================================ */
export interface HomeContent {
  hero: {
    eyebrow: string;
    headlineHtml: string;
    sub: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
    image: string;
    imageAlt: string;
  };
  philosophy: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  owner: {
    eyebrow: string;
    headline: string;
    intro: string;
    quote: string;
    outro: string;
    cta: NavLink;
    image: string;
    imageAlt: string;
  };
  howIWork: {
    eyebrow: string;
    headline: string;
    sub: string;
    steps: Array<{ number: string; title: string; body: string }>;
    quote: string;
  };
  markets: Array<{
    slug: string;
    label: string;
    nameHtml: string;
    sub: string;
    image: string;
    imageAlt: string;
  }>;
  recentlyClosed: {
    eyebrow: string;
    headline: string;
    viewAllLabel: string;
    /** How many of content/closed/ to feature on the home page. */
    limit: number;
  };
  cta: {
    eyebrow: string;
    headlineHtml: string;
    body: string;
    button: NavLink;
  };
}

/* ============================================================
   about.json
   ============================================================ */
export interface AboutContent {
  header: {
    eyebrow: string;
    headlineHtml: string;
    intro: string;
  };
  bio: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    photo?: string;
    photoAlt?: string;
  };
  credentials: Array<{
    label: string;
    value: string;
    valueSize?: "sm";
    description: string;
  }>;
  perspective: {
    eyebrow: string;
    headline: string;
    intro: string;
    quote: string;
    paragraphs: string[];
    approachEyebrow: string;
    approachHeadline: string;
    approachParagraphs: string[];
  };
  negotiation: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    points: Array<{ number: string; title: string; body: string }>;
  };
  cta: {
    headline: string;
    body: string;
    button: NavLink;
  };
}

/* ============================================================
   markets.json
   ============================================================ */
export interface MarketProfile {
  slug: string;
  label: string;
  name: string;
  neighborhoods: string;
  mapImage: string;
  mapAlt: string;
  photoImage: string;
  photoAlt: string;
  paragraphs: string[];
  details: Array<{ label: string; value: string }>;
  alt?: boolean;
}

export interface MarketsContent {
  header: {
    eyebrow: string;
    headlineHtml: string;
    intro: string;
  };
  sectionBreak: {
    eyebrow: string;
    headline: string;
    intro: string;
  };
  markets: MarketProfile[];
  cta: {
    headlineHtml: string;
    body: string;
    button: NavLink;
  };
}

/* ============================================================
   contact.json
   ============================================================ */
export interface ContactContent {
  left: {
    eyebrow: string;
    headlineHtml: string;
    intro: string;
    note: string;
  };
  form: {
    title: string;
    interestOptions: string[];
    disclaimer: string;
    submitLabel: string;
  };
  reassurance: Array<{ title: string; body: string }>;
}

/* ============================================================
   properties.json (the "/properties" page — active + closed)
   ============================================================ */
export interface ActiveListingSummary {
  slug: string;
  name: string;
  location: string;
  propertyType: string;
  units: number;
  askingPrice: string;
  image?: string;
  status: "active" | "pending";
  overview: string[];
  detailImages: string[];
  specs: {
    yearBuilt: string;
    buildingSize: string;
    lotSize: string;
    zoning: string;
    capRate: string;
    currentNoi: string;
  };
  unitMix: Array<{
    type: string;
    units: number | string;
    avgRent: string;
  }>;
}

export interface PropertiesContent {
  header: {
    eyebrow: string;
    headlineHtml: string;
    intro: string;
  };
  activeSection: {
    eyebrow: string;
    headline: string;
    note: string;
  };
  offMarket: {
    eyebrow: string;
    headline: string;
    body: string;
    button: NavLink;
  };
  closedSection: {
    eyebrow: string;
    headline: string;
  };
  cta: {
    seller: {
      eyebrow: string;
      headlineHtml: string;
      body: string;
      button: NavLink;
    };
    buyer: {
      eyebrow: string;
      headline: string;
      body: string;
      button: NavLink;
    };
  };
}

/* ============================================================
   listings-page.json (the "/listings" directory + past + notify)
   ============================================================ */
export interface PastTransaction {
  type: string;
  name: string;
  location: string;
  detail: string;
}

export interface ListingsPageContent {
  header: {
    eyebrow: string;
    headlineHtml: string;
    intro: string;
  };
  active: {
    eyebrow: string;
    headline: string;
    intro: string;
    emptyStateTitle: string;
    emptyStateBody: string;
    emptyStateCta: NavLink;
  };
  past: {
    eyebrow: string;
    headline: string;
    intro: string;
    transactions: PastTransaction[];
  };
  notify: {
    eyebrow: string;
    headline: string;
    body: string;
    submitLabel: string;
  };
}

/* ============================================================
   /content/listings/*.json (individual listing pages)
   ============================================================ */
export interface UnitMixRow {
  type: string;
  units: number | string;
  avgSqFt: string;
  currentRent: string;
  marketRent: string;
}

export interface Listing {
  slug: string;
  name: string;
  status: "active" | "pending" | "sold";
  neighborhood: string;
  city: string;
  propertyType: string;
  units: number;
  askingPrice: string;
  yearBuilt: string;
  buildingSize: string;
  lotSize: string;
  zoning: string;
  capRate: string;
  currentNoi: string;
  pricePerUnit: string;
  grm: string;
  description: string[];
  unitMix: UnitMixRow[];
  legalDisclaimer: string;
  images: {
    hero: string;
    gallery: string[];
  };
}
