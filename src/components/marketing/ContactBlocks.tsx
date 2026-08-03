import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = {
  phone: (
    <svg viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 9.27 19.79 19.79 0 01.88 4.64 2 2 0 012.86 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l.91-1.01a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

interface Props {
  variant?: "home" | "contact";
  className?: string;
  locationSub?: string;
}

export function ContactBlocks({ variant = "home", className, locationSub }: Props) {
  const { broker } = site;

  return (
    <ul
      className={cn(
        "ci-list",
        variant === "contact" && "contact-ci-list",
        className,
      )}
    >
      <li className="ci">
        <div className="ci-icon">{icons.phone}</div>
        <div>
          <span className="ci-label">Phone</span>
          <div className="ci-val">
            <a href={`tel:${broker.phone.replace(/\./g, "")}`}>{broker.phone}</a>
          </div>
        </div>
      </li>
      <li className="ci">
        <div className="ci-icon">{icons.email}</div>
        <div>
          <span className="ci-label">Email</span>
          <div className="ci-val">
            <a href={`mailto:${broker.email}`}>{broker.email}</a>
          </div>
        </div>
      </li>
      <li className="ci">
        <div className="ci-icon">{icons.location}</div>
        <div>
          <span className="ci-label">{variant === "contact" ? "Location" : "Based in"}</span>
          <div className="ci-val">
            {broker.location}
            {locationSub && (
              <>
                <br />
                <span style={{ fontSize: "14px", color: "rgba(247,243,236,0.45)" }}>
                  {locationSub}
                </span>
              </>
            )}
          </div>
        </div>
      </li>
      <li className="ci">
        <div className="ci-icon">{icons.linkedin}</div>
        <div>
          <span className="ci-label">LinkedIn</span>
          <div className="ci-val">
            <a href={broker.linkedIn} target="_blank" rel="noopener">
              {broker.linkedInLabel}
              {variant === "contact" && " →"}
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
}
