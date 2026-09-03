import type { PastProperty } from "@/lib/types";

interface Props {
  property: PastProperty;
}

export function PastPropertyCard({ property }: Props) {
  return (
    <div className="past-card">
      <div className="past-card-type">{property.type}</div>
      <div className="past-card-name">{property.name}</div>
      <div className="past-card-location">{property.location}</div>
      <div className="past-card-detail">{property.detail}</div>
    </div>
  );
}
