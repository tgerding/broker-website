import { notFound } from "next/navigation";
import { getAllListingSlugs, getListingBySlug } from "@/lib/listings";
import { ListingDetail } from "@/components/listings/ListingDetail";

export function generateStaticParams() {
  return getAllListingSlugs().map((slug) => ({ slug }));
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
