"use client";
import { useRef, useState, type FormEvent } from "react";
import { contactSchema, createDraft, interests } from "@/lib/contact";
import { Icon } from "./Icons";
import { Select } from "./Select";
export function ContactForm({ email }: { email: string }) {
  const [draft, setDraft] = useState<ReturnType<typeof createDraft> | null>(
    null,
  );
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const result = useRef<HTMLDivElement>(null);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = contactSchema.safeParse(entries);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      setDraft(null);
      return;
    }
    setError("");
    setCopied(false);
    setDraft(createDraft(parsed.data, email));
    requestAnimationFrame(() => result.current?.focus());
  }
  async function copy() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${email}\nSubject: ${draft.subject}\n\n${draft.body}`,
      );
      setCopied(true);
    } catch {
      setError(
        "Copy is unavailable. Select the draft below and copy it manually.",
      );
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      onChange={() => {
        if (draft) setDraft(null);
        if (error) setError("");
      }}
    >
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="First and last name"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="organisation">
          Organisation <span>(optional)</span>
        </label>
        <input
          id="organisation"
          name="organisation"
          autoComplete="organization"
          placeholder="Where you work or study"
          maxLength={150}
        />
      </div>
      <div className="form-field">
        <label id="interest-label">What brings you here?</label>
        <Select
          name="interest"
          options={interests}
          defaultValue="General"
          labelledBy="interest-label"
        />
      </div>
      <div className="form-field">
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={15}
          maxLength={3000}
          placeholder="A question, an idea, or something we could explore together…"
        />
      </div>
      {error && (
        <p role="alert" className="field-error">
          {error}
        </p>
      )}
      <button className="button button-dark" type="submit">
        Prepare email draft <Icon name="arrowUp" />
      </button>
      <p className="form-note">
        This prepares a draft on your device. You review and send it from your
        own email app; nothing is submitted or stored by this website.
      </p>
      {draft && (
        <div ref={result} tabIndex={-1} className="form-result">
          <h3>Your draft is ready.</h3>
          <p>
            Open it in your email app, or copy it into Gmail. It has not been
            sent.
          </p>
          <textarea
            aria-label="Prepared email draft"
            readOnly
            value={`To: ${email}\nSubject: ${draft.subject}\n\n${draft.body}`}
          />
          <div className="draft-actions">
            <a className="button button-dark" href={draft.href}>
              Open email draft <Icon name="arrowUp" />
            </a>
            <button
              type="button"
              className="text-link"
              onClick={() => void copy()}
            >
              {copied ? "Copied" : "Copy draft"}
              <Icon name={copied ? "check" : "plus"} />
            </button>
          </div>
          <span className="sr-only" role="status">
            {copied
              ? "Email draft copied to clipboard."
              : "Your email draft is ready to review. It has not been sent."}
          </span>
        </div>
      )}
    </form>
  );
}
