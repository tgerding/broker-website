import type { PastTransaction } from "@/lib/types";

interface Props {
  transaction: PastTransaction;
}

export function PastTransactionCard({ transaction }: Props) {
  return (
    <div className="past-card">
      <div className="past-card-type">{transaction.type}</div>
      <div className="past-card-name">{transaction.name}</div>
      <div className="past-card-location">{transaction.location}</div>
      <div className="past-card-detail">{transaction.detail}</div>
    </div>
  );
}
