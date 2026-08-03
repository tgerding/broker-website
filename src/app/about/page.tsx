import Link from "next/link";
import Image from "next/image";
import { about } from "@/lib/content";
import { EyebrowHeader } from "@/components/marketing/EyebrowHeader";
import { CalloutQuote } from "@/components/marketing/CalloutQuote";

export const metadata = {
  title: "About Tyler Gerding",
  description:
    "Tyler Gerding is a Portland Principal Broker and multifamily advisor with 15 years of experience and over a decade as an apartment owner himself.",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hdr">
        <EyebrowHeader eyebrow={about.header.eyebrow} />
        <h1 dangerouslySetInnerHTML={{ __html: about.header.headlineHtml }} />
        <p>{about.header.intro}</p>
      </header>

      <section className="bio">
        <div className="bio-photo">
          {about.bio.photo ? (
            <Image
              src={about.bio.photo}
              alt={about.bio.photoAlt ?? about.bio.headline}
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          ) : (
            <div className="bio-photo-placeholder">
              HEADSHOT
              <br />
              COMING SOON
            </div>
          )}
        </div>
        <div className="bio-text">
          <EyebrowHeader eyebrow={about.bio.eyebrow} />
          <h2 className="bio-h2">{about.bio.headline}</h2>
          {about.bio.paragraphs.map((p, i) => (
            <p key={i} className="bio-p">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="creds">
        {about.credentials.map((c) => (
          <div key={c.label} className="cred">
            <span className="cred-label">{c.label}</span>
            <div
              className={c.valueSize === "sm" ? "cred-val-sm" : "cred-val"}
              dangerouslySetInnerHTML={{ __html: c.value }}
            />
            <div className="cred-desc">{c.description}</div>
          </div>
        ))}
      </section>

      <section className="persp">
        <div className="persp-inner">
          <div>
            <EyebrowHeader eyebrow={about.perspective.eyebrow} />
            <h2 className="persp-h2">{about.perspective.headline}</h2>
            <p className="persp-p">{about.perspective.intro}</p>
            <CalloutQuote>{about.perspective.quote}</CalloutQuote>
            {about.perspective.paragraphs.map((p, i) => (
              <p key={i} className="persp-p">
                {p}
              </p>
            ))}
          </div>
          <div>
            <EyebrowHeader eyebrow={about.perspective.approachEyebrow} />
            <h2 className="persp-h2">{about.perspective.approachHeadline}</h2>
            {about.perspective.approachParagraphs.map((p, i) => (
              <p key={i} className="persp-p">
                {p}
              </p>
            ))}
            <Link
              href="/contact"
              className="btn-outline"
              style={{ marginTop: "28px", display: "inline-block" }}
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="neg">
        <div className="neg-inner">
          <div>
            <EyebrowHeader eyebrow={about.negotiation.eyebrow} />
            <h2 className="neg-h2">{about.negotiation.headline}</h2>
            {about.negotiation.paragraphs.map((p, i) => (
              <p key={i} className="neg-p">
                {p}
              </p>
            ))}
          </div>
          <ul className="neg-points">
            {about.negotiation.points.map((pt) => (
              <li key={pt.number} className="np">
                <span className="np-num">{pt.number}</span>
                <div>
                  <div className="np-title">{pt.title}</div>
                  <p className="np-body">{pt.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-cta">
        <EyebrowHeader eyebrow="Ready to talk?" centered />
        <h2>{about.cta.headline}</h2>
        <p>{about.cta.body}</p>
        <Link href={about.cta.button.href} className="btn-outline">
          {about.cta.button.label}
        </Link>
      </section>
    </>
  );
}
