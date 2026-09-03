import {
  Cormorant_Garamond,
  DM_Sans,
  EB_Garamond,
  Inter,
  Jost,
  Lora,
  Playfair_Display,
  Work_Sans,
} from "next/font/google";
import { theme } from "./content";

/**
 * The typefaces content/theme.json can choose between.
 *
 * next/font is statically analysed: each family must be named literally,
 * assigned to its own module-scope const, and given a fully literal options
 * object (no shared constants, no spreads) — hence the repetition below. A
 * face has to be declared here before theme.json can select it.
 *
 * preload is off on every family deliberately. next/font preloads each family
 * it instantiates, so leaving it on pushed all eight — 500KB — at every
 * visitor regardless of which two were in use. With it off, the browser
 * fetches only the pair the page actually renders with, still same-origin,
 * and next/font's metric-matched fallback covers the swap so nothing shifts.
 * The unused families cost build size and ~60KB of @font-face CSS, not
 * page weight.
 *
 * Weights differ by family: Cormorant and the sans faces have a 300, while
 * EB Garamond, Playfair and Lora start at 400. The stylesheet asks for
 * 300/400/500 and the browser picks the nearest weight available.
 *
 * Every heading face publishes to the same CSS variable (--font-headings), so
 * choosing one is only a question of which className reaches <html>. Likewise
 * --font-body for the sans faces.
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-headings",
  display: "swap",
  preload: false,
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-headings",
  display: "swap",
  preload: false,
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-headings",
  display: "swap",
  preload: false,
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-headings",
  display: "swap",
  preload: false,
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});

const HEADING_FONTS = { cormorant, ebGaramond, playfair, lora };
const BODY_FONTS = { jost, inter, workSans, dmSans };

/**
 * The className defining --font-headings and --font-body, for <html>.
 *
 * An unrecognised name in theme.json fails the build rather than quietly
 * falling back, so a typo surfaces as a failed deploy naming the valid
 * options instead of a silently wrong typeface on the live site.
 */
export function fontVariableClassName(): string {
  const headings = pick(HEADING_FONTS, theme.fonts.headings.value, "fonts.headings");
  const body = pick(BODY_FONTS, theme.fonts.bodyText.value, "fonts.bodyText");
  return `${headings.variable} ${body.variable}`;
}

function pick<T>(registry: Record<string, T>, name: string, field: string): T {
  const font = registry[name];
  if (!font) {
    throw new Error(
      `content/theme.json: ${field}.value is "${name}", which is not an available font. ` +
        `Use one of: ${Object.keys(registry).join(", ")}.`,
    );
  }
  return font;
}
