import Link from "next/link";
import Image from "next/image";
import { markets } from "@/lib/content";
import { EyebrowHeader } from "@/components/marketing/EyebrowHeader";
import { MarketButtons } from "@/components/marketing/MarketButtons";

export const metadata = {
  title: "Markets",
  description:
    "Tyler Gerding works with apartment owners across Portland Proper, Portland Metro, and the Willamette Valley corridor — Newberg, McMinnville, Salem, and Albany.",
};

export default function MarketsPage() {
  return (
    <>
      <header className="page-hdr">
        <EyebrowHeader eyebrow={markets.header.eyebrow} />
        <h1 dangerouslySetInnerHTML={{ __html: markets.header.headlineHtml }} />
        <p>{markets.header.intro}</p>
      </header>

      <MarketButtons
        linkTo={(slug) => `#${slug}`}
        arrowLabel="Jump to this market ↓"
      />

      <div className="section-break">
        <EyebrowHeader eyebrow={markets.sectionBreak.eyebrow} />
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: "36px",
            fontWeight: 400,
            color: "var(--evergreen)",
            marginBottom: 0,
          }}
        >
          {markets.sectionBreak.headline}
        </h2>
      </div>

      <div className="markets-list" style={{ marginTop: "32px" }}>
        {markets.markets.map((m) => (
          <div
            key={m.slug}
            id={m.slug}
            className={`market-item${m.alt ? " alt" : ""}`}
          >
            <div className="market-item-left">
              <span className="market-item-tag">{m.label}</span>
              <div
                className="market-item-name"
                dangerouslySetInnerHTML={{ __html: m.name }}
              />
              <div
                className="market-item-sub"
                dangerouslySetInnerHTML={{ __html: m.neighborhoods }}
              />
            </div>
            <div className="market-item-right">
              <div className="market-item-photo">
                {m.mapImage ? (
                  <Image
                    src={m.mapImage}
                    alt={m.mapAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                ) : m.photoImage ? (
                  <Image
                    src={m.photoImage}
                    alt={m.photoAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                ) : (
                  <span className="map-placeholder-label">Map coming soon</span>
                )}
              </div>
              {m.paragraphs.map((p, i) => (
                <p key={i} className="market-item-body">
                  {p}
                </p>
              ))}
              <div className="market-details">
                {m.details.map((d) => (
                  <div key={d.label}>
                    <div className="detail-label">{d.label}</div>
                    <div className="detail-val">{d.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mkt-cta">
        <EyebrowHeader eyebrow="Have a property in one of these markets?" centered />
        <h2 dangerouslySetInnerHTML={{ __html: markets.cta.headlineHtml }} />
        <p>{markets.cta.body}</p>
        <Link href={markets.cta.button.href} className="btn-outline-cream">
          {markets.cta.button.label}
        </Link>
      </div>
    </>
  );
}
