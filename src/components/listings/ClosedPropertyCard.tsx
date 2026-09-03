import Link from "next/link";
import Image from "next/image";
import type { ClosedProperty } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  property: ClosedProperty;
  variant?: "home" | "properties";
}

export function ClosedPropertyCard({ property, variant = "home" }: Props) {
  const isProperties = variant === "properties";
  return (
    <div className={isProperties ? "closed-card" : "card"}>
      <div className={cn(isProperties ? "closed-photo" : "card-photo")}>
        {property.image && (
          <Image
            src={property.image}
            alt={property.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        )}
        <span className="rep-badge">{property.repType}</span>
      </div>
      <div className={isProperties ? "closed-body" : "card-body"}>
        <div className={isProperties ? "closed-type" : "card-type"}>
          {property.propertyType}
        </div>
        <div className={isProperties ? "closed-name" : "card-name"}>
          {property.name}
        </div>
        <div className={isProperties ? "closed-loc" : "card-loc"}>
          {property.location}
        </div>
        <div className={isProperties ? "closed-meta" : "card-meta"}>
          <div>
            <div className={isProperties ? "closed-meta-label" : "meta-label"}>Built</div>
            <div className={isProperties ? "closed-meta-val" : "meta-val"}>
              {property.yearBuilt}
            </div>
          </div>
          <div>
            <div className={isProperties ? "closed-meta-label" : "meta-label"}>Units</div>
            <div className={isProperties ? "closed-meta-val" : "meta-val"}>
              {property.units}
            </div>
          </div>
          <div>
            <div className={isProperties ? "closed-meta-label" : "meta-label"}>
              Price/unit
            </div>
            <div className={isProperties ? "closed-meta-val" : "meta-val"}>
              {property.pricePerUnit}
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
