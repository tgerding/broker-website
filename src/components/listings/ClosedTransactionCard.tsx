import Link from "next/link";
import Image from "next/image";
import type { ClosedTransaction } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  transaction: ClosedTransaction;
  variant?: "home" | "properties";
}

export function ClosedTransactionCard({ transaction, variant = "home" }: Props) {
  const isProperties = variant === "properties";
  return (
    <div className={isProperties ? "closed-card" : "card"}>
      <div className={cn(isProperties ? "closed-photo" : "card-photo")}>
        {transaction.image && (
          <Image
            src={transaction.image}
            alt={transaction.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        )}
        <span className="sold-badge">Sold</span>
        <span className="rep-badge">{transaction.repType}</span>
      </div>
      <div className={isProperties ? "closed-body" : "card-body"}>
        <div className={isProperties ? "closed-type" : "card-type"}>
          {transaction.propertyType}
        </div>
        <div className={isProperties ? "closed-name" : "card-name"}>
          {transaction.name}
        </div>
        <div className={isProperties ? "closed-loc" : "card-loc"}>
          {transaction.location}
        </div>
        <div className={isProperties ? "closed-meta" : "card-meta"}>
          <div>
            <div className={isProperties ? "closed-meta-label" : "meta-label"}>Built</div>
            <div className={isProperties ? "closed-meta-val" : "meta-val"}>
              {transaction.yearBuilt}
            </div>
          </div>
          <div>
            <div className={isProperties ? "closed-meta-label" : "meta-label"}>Units</div>
            <div className={isProperties ? "closed-meta-val" : "meta-val"}>
              {transaction.units}
            </div>
          </div>
          <div>
            <div className={isProperties ? "closed-meta-label" : "meta-label"}>
              Price/unit
            </div>
            <div className={isProperties ? "closed-meta-val" : "meta-val"}>
              {transaction.pricePerUnit}
            </div>
          </div>
        </div>
      </div>
      <div className={isProperties ? "closed-inquiry" : "card-inquiry"}>
        <span>Want comparable data?</span>
        <Link href="/contact">Let&apos;s talk →</Link>
      </div>
    </div>
  );
}
