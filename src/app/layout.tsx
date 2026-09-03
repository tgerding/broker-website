import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/layout/ComingSoon";
import { NetlifyFormsHidden } from "@/components/forms/NetlifyFormsHidden";
import { settings, site } from "@/lib/content";
import { themeRootCss } from "@/lib/theme-css";
import { fontVariableClassName } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: `${site.brand} — ${site.tagline}`,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariableClassName()}>
      <head>
        {/* Colors come from content/theme.json — edit that file, not this. */}
        <style dangerouslySetInnerHTML={{ __html: themeRootCss() }} />
      </head>
      <body>
        {settings.enabled ? (
          <>
            <Nav />
            {children}
            <Footer />
            <NetlifyFormsHidden />
          </>
        ) : (
          <ComingSoon />
        )}
      </body>
    </html>
  );
}
