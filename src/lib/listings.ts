import fs from "node:fs";
import path from "node:path";
import type { Listing } from "./types";

const listingsDir = path.join(process.cwd(), "content", "listings");

export function getAllListingSlugs(): string[] {
  if (!fs.existsSync(listingsDir)) return [];
  return fs
    .readdirSync(listingsDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

export function getListingBySlug(slug: string): Listing {
  const filePath = path.join(listingsDir, `${slug}.json`);
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw) as Listing;
  return { ...data, slug };
}

export function getAllListings(): Listing[] {
  return getAllListingSlugs()
    .map(getListingBySlug)
    .sort((a, b) => b.slug.localeCompare(a.slug));
}
