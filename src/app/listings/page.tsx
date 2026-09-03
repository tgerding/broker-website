import Link from "next/link";
import { listingsPage } from "@/lib/content";
import { getAllListings } from "@/lib/listings";
import { EyebrowHeader } from "@/components/marketing/EyebrowHeader";
import { ListingCard } from "@/components/listings/ListingCard";
import { PastTransactionCard } from "@/components/listings/PastTransactionCard";
import { NotifyForm } from "@/components/forms/NotifyForm";

export const metadata = {
  title: "Listings",
  description:
    "Multifamily properties across Portland and the Willamette Valley currently represented by Tyler Gerding.",
};

export default function ListingsPage() {
  const active = getAllListings().filter((l) => l.status !== "sold");

  return (
    <>
      <header className="page-header">
        <EyebrowHeader eyebrow={listingsPage.header.eyebrow} />
        <h1
          dangerouslySetInnerHTML={{ __html: listingsPage.header.headlineHtml }}
        />
        <p>{listingsPage.header.intro}</p>
      </header>

      <section className="listings-section">
        <EyebrowHeader eyebrow={listingsPage.active.eyebrow} />

        <div className="listings-grid">
          {active.length > 0 ? (
            active.map((l) => <ListingCard key={l.slug} listing={l} />)
          ) : (
            <div className="listings-empty">
              <h3>{listingsPage.active.emptyStateTitle}</h3>
              <p>{listingsPage.active.emptyStateBody}</p>
              <Link
                href={listingsPage.active.emptyStateCta.href}
                className="btn-outline"
              >
                {listingsPage.active.emptyStateCta.label}
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="past-listings">
        <EyebrowHeader eyebrow={listingsPage.past.eyebrow} />
        <h2
          style={{
            fontFamily:
              "var(--font-headings), serif",
            fontSize: "34px",
            fontWeight: 400,
            marginBottom: "8px",
            color: "var(--evergreen)",
          }}
        >
          {listingsPage.past.headline}
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-body)",
            lineHeight: 1.85,
            maxWidth: "560px",
          }}
        >
          {listingsPage.past.intro}
        </p>

        <div className="past-grid">
          {listingsPage.past.transactions.map((t, i) => (
            <PastTransactionCard key={i} transaction={t} />
          ))}
        </div>
      </section>

      <section className="notify">
        <div>
          <EyebrowHeader eyebrow={listingsPage.notify.eyebrow} />
          <h2>{listingsPage.notify.headline}</h2>
          <p>{listingsPage.notify.body}</p>
        </div>
        <NotifyForm />
      </section>
    </>
  );
}
