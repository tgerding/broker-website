import Link from "next/link";
import Image from "next/image";
import { home } from "@/lib/content";
import { EyebrowHeader } from "@/components/marketing/EyebrowHeader";
import { CalloutQuote } from "@/components/marketing/CalloutQuote";
import { ContactBlocks } from "@/components/marketing/ContactBlocks";
import { MarketButtons } from "@/components/marketing/MarketButtons";
import { ClosedTransactionCard } from "@/components/listings/ClosedTransactionCard";
import { getAllClosedTransactions } from "@/lib/closed";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <EyebrowHeader eyebrow={home.hero.eyebrow} />
          <h1
            className="hero-h1"
            dangerouslySetInnerHTML={{ __html: home.hero.headlineHtml }}
          />
          <p className="hero-sub">{home.hero.sub}</p>
          <div className="hero-actions">
            <Link href={home.hero.primaryCta.href} className="btn-outline">
              {home.hero.primaryCta.label}
            </Link>
            <Link
              href={home.hero.secondaryCta.href}
              className="btn-text-link"
            >
              {home.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <Image
            src={home.hero.image}
            alt={home.hero.imageAlt}
            fill
            style={{ objectFit: "cover", objectPosition: "52% center" }}
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <div className="hero-fade" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="phil">
        <div className="phil-inner">
          <div>
            <EyebrowHeader eyebrow={home.philosophy.eyebrow} />
          </div>
          <div>
            <h2 className="phil-h2">{home.philosophy.headline}</h2>
            <p className="phil-p">{home.philosophy.body}</p>
          </div>
        </div>
      </section>

      {/* OWNER */}
      <section className="owner">
        <div className="owner-photo">
          <Image
            src={home.owner.image}
            alt={home.owner.imageAlt}
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="owner-text">
          <EyebrowHeader eyebrow={home.owner.eyebrow} />
          <h2 className="owner-h2">{home.owner.headline}</h2>
          <p className="owner-p">{home.owner.intro}</p>
          <CalloutQuote>{home.owner.quote}</CalloutQuote>
          <p className="owner-p">{home.owner.outro}</p>
          <Link
            href={home.owner.cta.href}
            className="btn-outline"
            style={{ marginTop: "28px", alignSelf: "flex-start" }}
          >
            {home.owner.cta.label}
          </Link>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="how">
        <div className="how-hdr">
          <div>
            <EyebrowHeader eyebrow={home.howIWork.eyebrow} />
            <h2
              className="how-h2"
              dangerouslySetInnerHTML={{ __html: home.howIWork.headline }}
            />
          </div>
          <p className="how-sub">{home.howIWork.sub}</p>
        </div>
        <div className="how-steps">
          {home.howIWork.steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-num">{step.number}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-body">{step.body}</p>
            </div>
          ))}
        </div>
        <CalloutQuote variant="on-dark">{home.howIWork.quote}</CalloutQuote>
      </section>

      {/* MARKET BUTTONS */}
      <MarketButtons />

      {/* RECENTLY CLOSED */}
      <section className="closed">
        <div className="closed-hdr">
          <div>
            <EyebrowHeader eyebrow={home.recentlyClosed.eyebrow} />
            <div
              className="closed-h2"
              dangerouslySetInnerHTML={{
                __html: home.recentlyClosed.headline,
              }}
            />
          </div>
          <Link href="/properties" className="closed-link">
            {home.recentlyClosed.viewAllLabel}
          </Link>
        </div>
        <div className="closed-grid">
          {getAllClosedTransactions()
            .slice(0, home.recentlyClosed.limit)
            .map((t) => (
              <ClosedTransactionCard key={t.slug} transaction={t} />
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div>
            <EyebrowHeader eyebrow={home.cta.eyebrow} />
            <h2
              className="cta-h2"
              dangerouslySetInnerHTML={{ __html: home.cta.headlineHtml }}
            />
            <p className="cta-p">{home.cta.body}</p>
            <Link href={home.cta.button.href} className="btn-outline-cream">
              {home.cta.button.label}
            </Link>
          </div>
          <ContactBlocks variant="home" />
        </div>
      </section>
    </>
  );
}
