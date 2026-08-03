import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/content";
import { MobileNavToggle } from "./MobileNavToggle";

export function Nav() {
  return (
    <nav className="site-nav">
      <Link href="/" className="nav-logo" aria-label={site.brand}>
        <Image
          src="/images/logo-dark.png"
          alt={site.brand}
          width={216}
          height={108}
          priority
        />
      </Link>
      <ul className="nav-links">
        {site.nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <li>
          <Link href="/contact" className="btn-outline btn-nav-cta">
            Let&apos;s Talk
          </Link>
        </li>
      </ul>
      <MobileNavToggle />
    </nav>
  );
}
