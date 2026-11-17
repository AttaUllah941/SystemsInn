"use client";

import { useEffect, useState } from "react";
import { PREFILL_EVENT } from "@/components/ui/LearnMoreLink";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { company } from "@/data/company";
import { EMAIL_PATTERN, cn } from "@/lib/utils";

/**
 * Delivery: set NEXT_PUBLIC_FORM_ENDPOINT to a form service URL that accepts a JSON POST
 * (e.g. a Formspree form endpoint). Without it, the form opens the visitor's email app via
 * mailto and never claims the message was delivered.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Fields = "name" | "email" | "subject" | "message";
type Values = Record<Fields, string>;
type Errors = Partial<Record<Fields, string>>;
type Status =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "sent" }
  | { state: "mailto" }
  | { state: "error"; message: string };

const empty: Values = { name: "", email: "", subject: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  else if (values.message.trim().length < 10) errors.message = "Please add a little more detail (10+ characters).";
  return errors;
}

const inputClass =
  "w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-brand-mist/50 transition-colors focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-brand-cyan/60";

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  // A service card's "Learn More" pre-fills the subject, unless the visitor already typed one.
  useEffect(() => {
    const onPrefill = (event: Event) => {
      const subject = (event as CustomEvent<string>).detail;
      setValues((current) => (current.subject.trim() ? current : { ...current, subject }));
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const update = (field: Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    if (errors[field]) setErrors({ ...errors, [field]: validate(next)[field] });
  };

  const onBlur = (field: Fields) => () => {
    if (values[field] || errors[field]) setErrors({ ...errors, [field]: validate(values)[field] });
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = (["name", "email", "subject", "message"] as Fields[]).find((f) => found[f]);
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    const honeypot = (event.currentTarget.elements.namedItem("company_site") as HTMLInputElement | null)?.value;
    if (honeypot) return;

    if (!FORM_ENDPOINT) {
      const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
        values.subject.trim(),
      )}&body=${encodeURIComponent(body)}`;
      setStatus({ state: "mailto" });
      return;
    }

    setStatus({ state: "loading" });
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      setValues(empty);
      setStatus({ state: "sent" });
    } catch {
      setStatus({
        state: "error",
        message: `We couldn't send your message. Please try again or email us at ${company.email}.`,
      });
    }
  }

  const field = (id: Fields, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={`contact-${id}`} className="mb-2 block text-sm font-medium text-white">
        {label} <span aria-hidden className="text-brand-cyan">*</span>
      </label>
      <input
        id={`contact-${id}`}
        name={id}
        value={values[id]}
        onChange={update(id)}
        onBlur={onBlur(id)}
        required
        aria-required="true"
        aria-invalid={errors[id] ? "true" : undefined}
        aria-describedby={errors[id] ? `contact-${id}-error` : undefined}
        className={cn(inputClass, errors[id] ? "border-red-400/70" : "border-white/10 hover:border-white/25")}
        {...props}
      />
      {errors[id] && (
        <p id={`contact-${id}-error`} className="mt-1.5 text-sm text-red-300">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-3xl p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Full Name", { type: "text", autoComplete: "name", placeholder: "Your name" })}
        {field("email", "Email Address", { type: "email", autoComplete: "email", placeholder: "you@company.com" })}
      </div>
      {field("subject", "Subject", { type: "text", placeholder: "How can we help?" })}
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white">
          Message <span aria-hidden className="text-brand-cyan">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          onBlur={onBlur("message")}
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="Tell us about your project or challenge"
          className={cn(inputClass, "resize-y", errors.message ? "border-red-400/70" : "border-white/10 hover:border-white/25")}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-sm text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="company_site" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status.state === "loading"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan px-7 py-3 font-semibold text-brand-navy shadow-[0_8px_30px_-8px_rgb(8_123_255/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-6px_rgb(22_201_245/0.7)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status.state === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>

      <div aria-live="polite" role="status">
        {status.state === "sent" && (
          <p className="flex items-start gap-2.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            Thank you — your message has been sent. We&apos;ll get back to you soon.
          </p>
        )}
        {status.state === "mailto" && (
          <p className="flex items-start gap-2.5 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-4 text-sm text-brand-mist">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
            <span>
              Your email app should now open with your message ready. It is only sent once you send it
              from there. If nothing opens, email us directly at{" "}
              <a className="font-medium text-brand-cyan underline" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              .
            </span>
          </p>
        )}
        {status.state === "error" && (
          <p className="flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
