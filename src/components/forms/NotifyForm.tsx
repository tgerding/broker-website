"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { listingsPage } from "@/lib/content";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export function NotifyForm() {
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
        body: encode({ "form-name": "notify", ...data }),
      });
      if (!response.ok) throw new Error(`Netlify responded ${response.status}`);
      router.push("/thanks/");
    } catch (err) {
      setSubmitting(false);
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  };

  return (
    <form
      className="notify-form"
      name="notify"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="notify" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Email address" required />
      <input
        type="text"
        name="criteria"
        placeholder="What are you looking for? (e.g. 8–20 units, NE Portland)"
      />
      <button
        type="submit"
        className="btn-outline-cream"
        disabled={submitting}
      >
        {submitting ? "Submitting…" : listingsPage.notify.submitLabel}
      </button>
      {error && (
        <p style={{ color: "var(--cream-strong)", fontSize: "14px" }}>
          {error}
        </p>
      )}
    </form>
  );
}
