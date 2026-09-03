import fs from "node:fs";
import path from "node:path";

/**
 * Reads every .json file in a content/<dirName> folder at build time, injecting
 * each file's basename as `slug`. Ordering is by filename, which is how content
 * folders control display order: content/listings uses date prefixes and reads
 * "desc" for newest-first, content/closed uses 01-, 02- prefixes and reads "asc".
 */
export function readContentDir<T>(
  dirName: string,
  order: "asc" | "desc",
): (T & { slug: string })[] {
  return listContentSlugs(dirName)
    .sort((a, b) => (order === "asc" ? a.localeCompare(b) : b.localeCompare(a)))
    .map((slug) => readContentFile<T>(dirName, slug));
}

export function listContentSlugs(dirName: string): string[] {
  const dir = contentDir(dirName);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

export function readContentFile<T>(
  dirName: string,
  slug: string,
): T & { slug: string } {
  const raw = fs.readFileSync(
    path.join(contentDir(dirName), `${slug}.json`),
    "utf8",
  );
  return { ...(JSON.parse(raw) as T), slug };
}

function contentDir(dirName: string): string {
  return path.join(process.cwd(), "content", dirName);
}
