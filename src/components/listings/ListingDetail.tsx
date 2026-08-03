import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/lib/types";
import { site } from "@/lib/content";

interface Props {
  listing: Listing;
}

const statusLabel: Record<Listing["status"], string> = {
  active: "Active Listing",
  pending: "Pending",
  sold: "Sold",
};

export function ListingDetail({ listing }: Props) {
  const { broker } = site;

  return (
    <>
      <div
        className="listing-hero"
        style={
          listing.images.hero
            ? {
                backgroundImage: `url(${listing.images.hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div className="listing-hero-overlay" />
        <div className="listing-hero-content">
          <div>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              {listing.status === "active" ? "Active · " : ""}Multifamily
            </span>
            <h1 className="listing-hero-title">{listing.name}</h1>
            <div className="listing-hero-location">
              {listing.neighborhood} · {listing.city}, Oregon
            </div>
          </div>
          <div className="listing-hero-price">
            <div className="listing-hero-price-label">Asking price</div>
            <div className="listing-hero-price-val">{listing.askingPrice}</div>
          </div>
        </div>
      </div>

      <div className="listing-page-body">
        <div className="listing-main">
          {listing.images.gallery.length > 0 && (
            <div className="listing-photos">
              {listing.images.gallery.slice(0, 3).map((img, i) => (
                <div key={i} className="listing-photo-item">
                  <Image
                    src={img}
                    alt={`${listing.name} photo ${i + 1}`}
                    width={600}
                    height={i === 0 ? 280 : 200}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="highlights">
            <div className="highlight">
              <div className="highlight-label">Total units</div>
              <div className="highlight-val">{listing.units}</div>
            </div>
            <div className="highlight">
              <div className="highlight-label">Year built</div>
              <div className="highlight-val">{listing.yearBuilt}</div>
            </div>
            <div className="highlight">
              <div className="highlight-label">Lot size</div>
              <div className="highlight-val">{listing.lotSize}</div>
            </div>
            <div className="highlight">
              <div className="highlight-label">Building size</div>
              <div className="highlight-val">{listing.buildingSize}</div>
            </div>
            <div className="highlight">
              <div className="highlight-label">Current NOI</div>
              <div className="highlight-val">{listing.currentNoi}</div>
            </div>
            <div className="highlight">
              <div className="highlight-label">Cap rate</div>
              <div className="highlight-val">{listing.capRate}</div>
            </div>
          </div>

          <div className="listing-section-title">Property overview</div>
          <div className="rule" />
          {listing.description.map((p, i) => (
            <p key={i} className="listing-description">
              {p}
            </p>
          ))}

          <div style={{ marginTop: "40px" }}>
            <div className="listing-section-title">Unit mix</div>
            <div className="rule" />
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "0.5px solid var(--border-mid)" }}>
                  <th style={cellHeader}>Type</th>
                  <th style={cellHeader}>Units</th>
                  <th style={cellHeader}>Avg. sq ft</th>
                  <th style={cellHeader}>Current rent</th>
                  <th style={cellHeader}>Market rent</th>
                </tr>
              </thead>
              <tbody>
                {listing.unitMix.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid var(--border-light)" }}>
                    <td style={cellFirst}>{row.type}</td>
                    <td style={cell}>{row.units}</td>
                    <td style={cell}>{row.avgSqFt}</td>
                    <td style={cell}>{row.currentRent}</td>
                    <td style={cell}>{row.marketRent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="legal-disclaimer">{listing.legalDisclaimer}</p>
        </div>

        <aside className="listing-sidebar">
          <div className="sidebar-status">{statusLabel[listing.status]}</div>
          <div className="sidebar-price-label">Asking price</div>
          <div className="sidebar-price">{listing.askingPrice}</div>

          <div className="sidebar-details">
            <div className="sidebar-detail">
              <span className="sidebar-detail-label">Units</span>
              <span className="sidebar-detail-val">{listing.units}</span>
            </div>
            <div className="sidebar-detail">
              <span className="sidebar-detail-label">Year built</span>
              <span className="sidebar-detail-val">{listing.yearBuilt}</span>
            </div>
            <div className="sidebar-detail">
              <span className="sidebar-detail-label">Price per unit</span>
              <span className="sidebar-detail-val">{listing.pricePerUnit}</span>
            </div>
            <div className="sidebar-detail">
              <span className="sidebar-detail-label">Cap rate</span>
              <span className="sidebar-detail-val">{listing.capRate}</span>
            </div>
            <div className="sidebar-detail">
              <span className="sidebar-detail-label">GRM</span>
              <span className="sidebar-detail-val">{listing.grm}</span>
            </div>
            <div className="sidebar-detail">
              <span className="sidebar-detail-label">Zoning</span>
              <span className="sidebar-detail-val">{listing.zoning}</span>
            </div>
          </div>

          <div className="sidebar-cta">
            <Link href={`/contact?property=${listing.slug}`} className="btn-outline">
              Request more info
            </Link>
            <a
              href={`mailto:${broker.email}?subject=Interest in ${listing.name}`}
              className="btn-outline-gold"
            >
              Email {broker.name.split(" ")[0]}
            </a>
            <a
              href={`tel:${broker.phone.replace(/\./g, "")}`}
              style={{
                textAlign: "center",
                fontSize: "14px",
                color: "var(--text-body)",
                padding: "10px 0",
                display: "block",
              }}
            >
              or call {broker.phone}
            </a>
          </div>

          <div className="sidebar-broker">
            <div className="sidebar-broker-photo">
              {broker.photo ? (
                <Image src={broker.photo} alt={broker.name} width={44} height={44} />
              ) : (
                broker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              )}
            </div>
            <div>
              <div className="sidebar-broker-name">{broker.name}</div>
              <div className="sidebar-broker-title">{broker.title} · Multifamily Advisor</div>
            </div>
          </div>
        </aside>
      </div>

      <div className="listing-back">
        <Link href="/listings">← Back to all listings</Link>
      </div>
    </>
  );
}

const cellHeader: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 0",
  fontSize: "14px",
  letterSpacing: "0.16em",
  color: "var(--text-muted)",
  fontWeight: 400,
  textTransform: "uppercase",
};
const cellFirst: React.CSSProperties = { padding: "12px 0", color: "var(--evergreen)" };
const cell: React.CSSProperties = { padding: "12px 0", color: "var(--text-body)" };
