import Image from "next/image";
import { site } from "@/lib/content";

export function ComingSoon() {
  return (
    <main className="coming-soon">
      <Image
        src="/images/logo-dark.png"
        alt={site.brand}
        width={432}
        height={216}
        priority
      />
      <p className="coming-soon-label">Coming Soon</p>
    </main>
  );
}
