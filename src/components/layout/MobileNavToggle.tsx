"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/lib/content";

export function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="nav-mobile-btn" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-cream p-0 border-l-0">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <button
          className="absolute top-4 right-4 p-2 text-dark-green"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
        <ul className="nav-mobile-links">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="btn-outline"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
