import {
  listContentSlugs,
  readContentDir,
  readContentFile,
} from "./content-dir";
import type { Listing } from "./types";

export function getAllListingSlugs(): string[] {
  return listContentSlugs("listings");
}

export function getListingBySlug(slug: string): Listing {
  return readContentFile<Listing>("listings", slug);
}

/** Slugs are date-prefixed, so descending filename order is newest-first. */
export function getAllListings(): Listing[] {
  return readContentDir<Listing>("listings", "desc");
}
