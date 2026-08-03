import Link from "next/link";
import Image from "next/image";
import { home } from "@/lib/content";
import { cn } from "@/lib/utils";

interface Props {
  linkTo?: (slug: string) => string;
  arrowLabel?: string;
  className?: string;
}

export function MarketButtons({
  linkTo = (slug) => `/markets#${slug}`,
  arrowLabel = "Explore this market →",
  className,
}: Props) {
  return (
    <div className={cn("markets", className)}>
      {home.markets.map((mkt, i) => (
        <Link key={mkt.slug} href={linkTo(mkt.slug)} className="mkt-btn">
          <Image
            src={mkt.image}
            alt={mkt.imageAlt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 100vw, 33vw"
          />
          <div className="mkt-overlay">
            <div className="mkt-label">{mkt.label}</div>
            <div
              className="mkt-name"
              dangerouslySetInnerHTML={{ __html: mkt.nameHtml }}
            />
            <div className="mkt-sub">{mkt.sub}</div>
            <div className="mkt-arrow">{arrowLabel}</div>
          </div>
          {i < home.markets.length - 1 && <div className="mkt-divider" />}
        </Link>
      ))}
    </div>
  );
}
