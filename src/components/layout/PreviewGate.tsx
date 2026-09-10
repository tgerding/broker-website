"use client";

import { useEffect, useState } from "react";
import { ComingSoon } from "./ComingSoon";

/**
 * While content/settings.json has `enabled: false`, visitors get the Coming
 * Soon page. Adding `?preview=on` to any URL on the live site unlocks the real
 * site in that one browser — remembered in localStorage, so it carries across
 * every page and every visit — which is how copy edits get checked on the real
 * domain before launch. `?preview=off`, or the Exit button, re-locks it.
 *
 * This is a curtain, not a lock: the page source of a locked site still
 * carries the site's content.
 */
const STORAGE_KEY = "gerding-preview";

export function PreviewGate({ children }: { children: React.ReactNode }) {
  // Starts false so the first client render matches the static HTML (Coming
  // Soon); the effect below is what reveals the site.
  const [previewing, setPreviewing] = useState(false);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("preview");
    if (param === "on") window.localStorage.setItem(STORAGE_KEY, "on");
    if (param === "off") window.localStorage.removeItem(STORAGE_KEY);
    if (param !== null) {
      // Drop the parameter so the address bar looks like the finished site.
      window.history.replaceState(null, "", window.location.pathname + window.location.hash);
    }
    setPreviewing(window.localStorage.getItem(STORAGE_KEY) === "on");
  }, []);

  if (!previewing) return <ComingSoon />;

  return (
    <>
      {children}
      <div className="preview-banner">
        <span>Preview mode — visitors still see &ldquo;Coming Soon&rdquo;</span>
        <button
          type="button"
          onClick={() => {
            window.localStorage.removeItem(STORAGE_KEY);
            window.location.reload();
          }}
        >
          Exit
        </button>
      </div>
    </>
  );
}
