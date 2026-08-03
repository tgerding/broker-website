"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { contact } from "@/lib/content";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries()) as Record<
      string,
      string
    >;

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });
      if (!response.ok) throw new Error(`Netlify responded ${response.status}`);
      router.push("/thanks/");
    } catch (err) {
      setSubmitting(false);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email tyler@gerdingcre.com directly.",
      );
    }
  };

  return (
    <form
      className="form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="row2">
        <div className="fg">
          <label className="flabel" htmlFor="c-first">
            First name
          </label>
          <input
            className="fi"
            type="text"
            id="c-first"
            name="firstName"
            placeholder="Jane"
            required
          />
        </div>
        <div className="fg">
          <label className="flabel" htmlFor="c-last">
            Last name
          </label>
          <input
            className="fi"
            type="text"
            id="c-last"
            name="lastName"
            placeholder="Smith"
            required
          />
        </div>
      </div>

      <div className="fg">
        <label className="flabel" htmlFor="c-email">
          Email address
        </label>
        <input
          className="fi"
          type="email"
          id="c-email"
          name="email"
          placeholder="jane@example.com"
          required
        />
      </div>

      <div className="fg">
        <label className="flabel" htmlFor="c-phone">
          Phone number
        </label>
        <input
          className="fi"
          type="tel"
          id="c-phone"
          name="phone"
          placeholder="503.000.0000"
        />
      </div>

      <div className="fg">
        <label className="flabel" htmlFor="c-reason">
          What brings you here?
        </label>
        <select
          className="fselect"
          id="c-reason"
          name="interest"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select one
          </option>
          {contact.form.interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="fg">
        <label className="flabel" htmlFor="c-property">
          Property address (if applicable)
        </label>
        <input
          className="fi"
          type="text"
          id="c-property"
          name="propertyAddress"
          placeholder="1234 NE Alberta St, Portland OR"
        />
      </div>

      <div className="fg">
        <label className="flabel" htmlFor="c-message">
          Anything else you&apos;d like me to know?
        </label>
        <textarea
          className="ftextarea"
          id="c-message"
          name="message"
          placeholder="Tell me a bit about your situation — no detail is too small."
        />
      </div>

      <div className="submit-row">
        <button type="submit" className="btn-outline" disabled={submitting}>
          {submitting ? "Sending…" : contact.form.submitLabel}
        </button>
        <p className="disclaimer">{contact.form.disclaimer}</p>
      </div>

      {error && (
        <p style={{ color: "#b34747", fontSize: "14px", marginTop: "8px" }}>
          {error}
        </p>
      )}
    </form>
  );
}
