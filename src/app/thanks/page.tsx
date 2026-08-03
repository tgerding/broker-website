import Link from "next/link";
import { EyebrowHeader } from "@/components/marketing/EyebrowHeader";

export const metadata = {
  title: "Thanks",
  description: "Your message has been received.",
};

export default function ThanksPage() {
  return (
    <section
      className="about-cta"
      style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <EyebrowHeader eyebrow="Message received" centered />
      <h2>Thank you — I&apos;ll be in touch.</h2>
      <p>
        I typically respond within one business day. In the meantime, feel free to explore recent
        listings or read more about how I approach my work.
      </p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/" className="btn-outline">
          Back to home
        </Link>
        <Link href="/listings" className="btn-outline">
          See current listings
        </Link>
      </div>
    </section>
  );
}
