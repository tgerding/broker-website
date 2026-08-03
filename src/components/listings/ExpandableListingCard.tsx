"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ActiveListingSummary } from "@/lib/types";

interface Props {
  listing: ActiveListingSummary;
}

export function ExpandableListingCard({ listing }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="expand-wrap">
      <div className="expand-card">
        <div className="expand-card-photo">
          {listing.image && (
            <Image
              src={listing.image}
              alt={listing.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          )}
          <span className="expand-status">
            {listing.status === "active" ? "Active" : "Pending"}
          </span>
        </div>
        <div className="expand-card-body">
          <div className="expand-type">{listing.propertyType}</div>
          <div className="expand-name">{listing.name}</div>
          <div className="expand-loc">{listing.location}</div>
          <div className="expand-meta">
            <div>
              <div className="meta-label">Units</div>
              <div className="meta-val">{listing.units}</div>
            </div>
            <div>
              <div className="meta-label">Asking price</div>
              <div className="meta-val">{listing.askingPrice}</div>
            </div>
          </div>
        </div>
        <button
          className={`expand-btn${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Hide details ↑" : "View property details ↓"}
        </button>
      </div>
      <div className={`expand-detail${open ? " open" : ""}`}>
        <div className="expand-detail-inner">
          <div className="detail-photos">
            {listing.detailImages.map((img, i) => (
              <div key={i} className="detail-photo">
                {img ? (
                  <Image
                    src={img}
                    alt={`${listing.name} detail ${i + 1}`}
                    width={200}
                    height={130}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                ) : (
                  <span>Photo {i + 1}</span>
                )}
              </div>
            ))}
          </div>
          <div className="detail-two-col">
            <div>
              <span className="detail-section-label">Property details</span>
              <div className="detail-specs">
                <div>
                  <div className="detail-spec-label">Year built</div>
                  <div className="detail-spec-val">{listing.specs.yearBuilt}</div>
                </div>
                <div>
                  <div className="detail-spec-label">Building size</div>
                  <div className="detail-spec-val">{listing.specs.buildingSize}</div>
                </div>
                <div>
                  <div className="detail-spec-label">Lot size</div>
                  <div className="detail-spec-val">{listing.specs.lotSize}</div>
                </div>
                <div>
                  <div className="detail-spec-label">Zoning</div>
                  <div className="detail-spec-val">{listing.specs.zoning}</div>
                </div>
                <div>
                  <div className="detail-spec-label">Cap rate</div>
                  <div className="detail-spec-val">{listing.specs.capRate}</div>
                </div>
                <div>
                  <div className="detail-spec-label">Current NOI</div>
                  <div className="detail-spec-val">{listing.specs.currentNoi}</div>
                </div>
              </div>
              <table className="unit-table" style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Units</th>
                    <th>Avg rent</th>
                  </tr>
                </thead>
                <tbody>
                  {listing.unitMix.map((row, i) => (
                    <tr key={i}>
                      <td>{row.type}</td>
                      <td>{row.units}</td>
                      <td>{row.avgRent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <span className="detail-section-label">Overview</span>
              {listing.overview.map((p, i) => (
                <p key={i} className="detail-desc">
                  {p}
                </p>
              ))}
              {listing.slug && (
                <Link
                  href={`/listings/${listing.slug}`}
                  className="btn-outline"
                  style={{ marginTop: "24px", display: "inline-block" }}
                >
                  Full listing details →
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="detail-cta">
          <span className="detail-cta-text">
            &ldquo;Interested in this property?&rdquo;
          </span>
          <Link
            href="/contact"
            className="btn-outline"
            style={{ padding: "9px 18px", fontSize: "14px" }}
          >
            Request more info
          </Link>
        </div>
      </div>
    </div>
  );
}
