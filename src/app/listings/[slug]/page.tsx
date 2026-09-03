import { notFound } from "next/navigation";
import { getAllListingSlugs, getListingBySlug } from "@/lib/listings";
import { ListingDetail } from "@/components/listings/ListingDetail";

export function generateStaticParams() {
  const slugs = getAllListingSlugs();
  // output: "export" rejects a dynamic route that yields zero params, and
  // content/listings/ is empty whenever nothing is on the market. Emit one
  // inert slug in that case — the component below notFound()s it, and it
  // disappears the moment a real listing file is added.
  return (slugs.length > 0 ? slugs : ["none"]).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const listing = getListingBySlug(slug);
    return {
      title: listing.name,
      description: `${listing.name} — ${listing.units}-unit multifamily property in ${listing.neighborhood}, ${listing.city}, Oregon. Asking ${listing.askingPrice}.`,
    };
  } catch {
    return { title: "Listing" };
  }
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let listing;
  try {
    listing = getListingBySlug(slug);
  } catch {
    notFound();
  }
  return <ListingDetail listing={listing} />;
}
