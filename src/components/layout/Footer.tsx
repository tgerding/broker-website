import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/content";

export function Footer() {
  const { broker, footer, brand } = site;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="footer-logo">
            <Image
              src="/images/logo-footer.png"
              alt={brand}
              width={208}
              height={104}
            />
          </Link>
          <p
            className="footer-tagline"
            dangerouslySetInnerHTML={{
              __html: footer.tagline.replace(/\n/g, "<br />"),
            }}
          />
        </div>
        <div>
          <span className="footer-col-label">Navigate</span>
          <ul className="footer-links-list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-col-label">Get in touch</span>
          <a
            href={`tel:${broker.phone.replace(/\./g, "")}`}
            className="footer-contact-item"
          >
            {broker.phone}
          </a>
          <a
            href={`mailto:${broker.email}`}
            className="footer-contact-item"
          >
            {broker.email}
          </a>
          <span className="footer-contact-item">{broker.location}</span>
          <a
            href={broker.linkedIn}
            target="_blank"
            rel="noopener"
            className="footer-contact-item"
            style={{ marginTop: "8px" }}
          >
            LinkedIn →
          </a>
          <span className="footer-contact-item footer-small">
            {footer.smallPrint}
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">{footer.copyright}</span>
        <div className="footer-legal">
          {footer.legalLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
