import { theme } from "./content";

/**
 * Turns content/theme.json into the `:root` block that layout.tsx injects.
 *
 * Each key becomes two custom properties: the color itself, and its channels
 * so globals.css can build translucent shades of it —
 *   darkGreen -> --dark-green: #2F3A34;  --dark-green-rgb: 47 58 52;
 *
 * Emitting both for every color means globals.css never needs a raw color
 * value, and nothing has to be special-cased when a new color is added.
 */
export function themeRootCss(): string {
  const lines = Object.entries(theme).map(([key, color]) => {
    const name = toCssName(key);
    return `--${name}: ${color.value}; --${name}-rgb: ${toRgbChannels(color.value)};`;
  });
  return `:root { ${lines.join(" ")} }`;
}

function toCssName(key: string): string {
  return key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}

/** "#2F3A34" -> "47 58 52", the space-separated form `rgb(… / alpha)` wants. */
function toRgbChannels(hex: string): string {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}
