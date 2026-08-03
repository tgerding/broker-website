import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/lib/types";

interface Props {
  listing: Listing;
}

const statusLabel: Record<Listing["status"], string> = {
  active: "Active",
  pending: "Pending",
  sold: "Sold",
};

export function ListingCard({ listing }: Props) {
  return (
    <article className="listing-card">
      <div className="listing-photo">
        {listing.images.hero && (
          <Image
            src={listing.images.hero}
            alt={listing.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        )}
        <span className={`listing-status status-${listing.status}`}>
          {statusLabel[listing.status]}
        </span>
      </div>
      <div className="listing-body">
        <div className="listing-type">{listing.propertyType}</div>
        <div className="listing-name">{listing.name}</div>
        <div className="listing-location">
          {listing.neighborhood}, {listing.city}
        </div>
        <div className="listing-details">
          <div>
            <div className="listing-detail-label">Units</div>
            <div className="listing-detail-val">{listing.units}</div>
          </div>
          <div>
            <div className="listing-detail-label">Asking price</div>
            <div className="listing-detail-val">{listing.askingPrice}</div>
          </div>
          <div>
            <div className="listing-detail-label">Year built</div>
            <div className="listing-detail-val">{listing.yearBuilt}</div>
          </div>
          <div>
            <div className="listing-detail-label">Cap rate</div>
            <div className="listing-detail-val">{listing.capRate}</div>
          </div>
        </div>
        <Link href={`/listings/${listing.slug}`} className="btn-outline">
          View property
        </Link>
      </div>
    </article>
  );
}
