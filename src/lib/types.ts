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

/**
 * One file per transaction in content/closed/ — see src/lib/closed.ts.
 *
 * Ordering comes from the filename's number prefix, not from anything in
 * here, and nothing links to an individual closed transaction, so unlike
 * Listing this has no slug at all.
 */
export interface ClosedTransaction {
  name: string;
  location: string;
  propertyType: string;
  yearBuilt: string;
  units: number | string;
  pricePerUnit: string;
  repType: string;
  image?: string;
}

/* ============================================================
   theme.json
   ============================================================ */
/** One editable color. `usedFor` is documentation for whoever edits the file. */
export interface ThemeColor {
  value: string;
  usedFor: string;
}

/** One editable font slot. `options` lists the accepted values as documentation. */
export interface ThemeFont {
  value: string;
  options: string;
  usedFor: string;
}

/**
 * Everything visual that is editable without touching code — see
 * content/theme.json, where each entry documents what it affects.
 */
export interface ThemeContent {
  /** Typeface choice. Valid values come from the registry in src/lib/fonts.ts. */
  fonts: {
    headings: ThemeFont;
    bodyText: ThemeFont;
  };
  colors: ThemeColors;
}

/**
 * Every color on the site. Keys become CSS custom properties in kebab-case
 * (darkGreen -> --dark-green), injected by src/app/layout.tsx. globals.css
 * derives its translucent shades from these and must not hardcode colors.
 */
export interface ThemeColors {
  darkGreen: ThemeColor;
  darkGreenLight: ThemeColor;
  photoBackdrop: ThemeColor;
  cream: ThemeColor;
  panelCream: ThemeColor;
  panelCreamDark: ThemeColor;
  gold: ThemeColor;
  bodyText: ThemeColor;
  footerGreen: ThemeColor;
  comingSoonBackground: ThemeColor;
  errorRed: ThemeColor;
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
    /** Replaces `headline` when there are no active listings. */
    headlineEmpty: string;
    /** Shown alongside the listings; hidden when there are none to click. */
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

/**
 * A listing as authored in content/listings/*.json.
 *
 * Deliberately has no `slug`. The filename is the slug and therefore the page
 * URL — readContentFile spreads it in last, so a `slug` written into the file
 * is silently overwritten. Authoring one would only mislead.
 */
export interface ListingFile {
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

/** A listing as read back, carrying its filename-derived slug. */
export type Listing = ListingFile & { slug: string };
