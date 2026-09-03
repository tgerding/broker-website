import Link from "next/link";
import { properties } from "@/lib/content";
import { getAllListings } from "@/lib/listings";
import { getAllClosedTransactions } from "@/lib/closed";
import { EyebrowHeader } from "@/components/marketing/EyebrowHeader";
import { ClosedTransactionCard } from "@/components/listings/ClosedTransactionCard";
import { ExpandableListingCard } from "@/components/listings/ExpandableListingCard";
import type { ActiveListingSummary, Listing } from "@/lib/types";

export const metadata = {
  title: "Properties",
  description:
    "Active listings and recent sales — Portland, Willamette Valley multifamily properties represented by Tyler Gerding.",
};

function toSummary(listing: Listing): ActiveListingSummary {
  return {
    slug: listing.slug,
    name: listing.name,
    location: `${listing.neighborhood}, ${listing.city}`,
    propertyType: listing.propertyType,
    units: listing.units,
    askingPrice: listing.askingPrice,
    image: listing.images.hero || undefined,
    status: listing.status === "sold" ? "active" : listing.status,
    overview: listing.description,
    detailImages: listing.images.gallery.slice(0, 3),
    specs: {
      yearBuilt: listing.yearBuilt,
      buildingSize: listing.buildingSize,
      lotSize: listing.lotSize,
      zoning: listing.zoning,
      capRate: listing.capRate,
      currentNoi: listing.currentNoi,
    },
    unitMix: listing.unitMix.map((u) => ({
      type: u.type,
      units: u.units,
      avgRent: u.currentRent,
    })),
  };
}

export default function PropertiesPage() {
  const activeListings = getAllListings()
    .filter((l) => l.status !== "sold")
    .map(toSummary);

  return (
    <>
      <header className="page-hdr page-hdr-grid">
        <div>
          <EyebrowHeader eyebrow={properties.header.eyebrow} />
          <h1
            dangerouslySetInnerHTML={{ __html: properties.header.headlineHtml }}
          />
        </div>
        <div
          className="page-hdr-body"
          dangerouslySetInnerHTML={{
            __html: properties.header.intro.replace(/\n\n/g, "<br /><br />"),
          }}
        />
      </header>

      <section className="active-section">
        <div className="section-hdr">
          <div>
            <EyebrowHeader eyebrow={properties.activeSection.eyebrow} />
            <div className="section-h2">
              {activeListings.length > 0
                ? properties.activeSection.headline
                : properties.activeSection.headlineEmpty}
            </div>
          </div>
          {activeListings.length > 0 && (
            <p className="section-note">{properties.activeSection.note}</p>
          )}
        </div>

        {activeListings.length > 0 && (
          <div className="expand-grid">
            {activeListings.map((l) => (
              <ExpandableListingCard key={l.slug} listing={l} />
            ))}
          </div>
        )}

        <div className="offmarket-box">
          <div>
            <span className="offmarket-label">
              {properties.offMarket.eyebrow}
            </span>
            <div className="offmarket-h">{properties.offMarket.headline}</div>
          </div>
          <div>
            <p className="offmarket-p">{properties.offMarket.body}</p>
            <Link
              href={properties.offMarket.button.href}
              className="btn-outline"
              style={{ marginTop: "22px", display: "inline-block" }}
            >
              {properties.offMarket.button.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="closed-section">
        <div className="section-hdr">
          <div>
            <EyebrowHeader eyebrow={properties.closedSection.eyebrow} />
            <div
              className="section-h2"
              dangerouslySetInnerHTML={{
                __html: properties.closedSection.headline,
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-body)",
              maxWidth: "280px",
              lineHeight: 1.8,
              textAlign: "right",
            }}
          >
            Interested in comparable sales data for your area? I&apos;m happy to
            share details in a conversation.
          </p>
        </div>

        <div className="closed-grid">
          {getAllClosedTransactions().map((t) => (
            <ClosedTransactionCard
              key={t.slug}
              transaction={t}
              variant="properties"
            />
          ))}
        </div>
      </section>

      <div className="prop-cta">
        <div className="prop-cta-inner">
          <div>
            <EyebrowHeader eyebrow={properties.cta.seller.eyebrow} />
            <h2
              dangerouslySetInnerHTML={{
                __html: properties.cta.seller.headlineHtml,
              }}
            />
            <p>{properties.cta.seller.body}</p>
            <Link
              href={properties.cta.seller.button.href}
              className="btn-outline-cream"
            >
              {properties.cta.seller.button.label}
            </Link>
          </div>
          <div
            style={{
              background: "rgba(247,243,236,0.05)",
              border: "0.5px solid rgba(247,243,236,0.12)",
              padding: "44px",
            }}
          >
            <EyebrowHeader eyebrow={properties.cta.buyer.eyebrow} />
            <div
              style={{
                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "26px",
                color: "var(--cream)",
                fontWeight: 300,
                lineHeight: 1.3,
                marginBottom: "16px",
              }}
            >
              {properties.cta.buyer.headline}
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(247,243,236,0.55)",
                lineHeight: 1.85,
                marginBottom: "24px",
              }}
            >
              {properties.cta.buyer.body}
            </p>
            <Link
              href={properties.cta.buyer.button.href}
              className="btn-outline-cream"
              style={{ fontSize: "14px", padding: "10px 18px" }}
            >
              {properties.cta.buyer.button.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
