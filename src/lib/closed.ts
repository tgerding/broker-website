import { readContentDir } from "./content-dir";
import type { ClosedTransaction, ClosedTransactionFile } from "./types";

/** Filenames are numbered 01-, 02-, … so ascending order is the intended order. */
export function getAllClosedTransactions(): ClosedTransaction[] {
  return readContentDir<ClosedTransactionFile>("closed", "asc");
}
