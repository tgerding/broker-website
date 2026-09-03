import { readContentDir } from "./content-dir";
import type { ClosedProperty } from "./types";

/** Filenames are numbered 01-, 02-, … so ascending order is the intended order. */
export function getAllClosedPropertys(): ClosedProperty[] {
  return readContentDir<ClosedProperty>("closed", "asc");
}
