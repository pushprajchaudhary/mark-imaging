"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Info, Loader2 } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { REQUIREMENTS, type Requirement } from "@/content/types";
import { trackEvent } from "@/lib/analytics";
import { enquiryMailto, submitEnquiry, type Enquiry } from "@/lib/enquiry";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "fallback"; mailto: string }
  | { state: "error" };

const inputClass =
  "mt-2 block w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-[0.9375rem] text-ink-900 placeholder:text-ink-400 transition-colors hover:border-ink-300 focus:border-brand-700 focus:ring-2 focus:ring-brand-100 focus:outline-none user-invalid:border-brand-700";

function Field({
  id,
  label,
  optional,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-semibold text-ink-800">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-ink-500">(optional)</span>
        ) : (
          <span className="ml-0.5 text-brand-700" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-500">
          {hint}
        </p>
      )}
    </div>
  );
}

/** Maps ?service=<slug> on the contact URL to a requirement option. */
const serviceToRequirement: Record<string, Requirement> = {
  "ct-reporting": "CT Reporting",
  "mri-reporting": "MRI Reporting",
  "x-ray-reporting": "X-Ray Reporting",
  "radiologist-staffing": "Radiologist Staffing",
  "second-opinion-reporting": "Second Opinion",
  "pacs-ris-his-solutions": "PACS / RIS / HIS",
  "pre-reads": "Pre-Reads",
};

export function ContactForm() {
  const params = useSearchParams();
  const preselected = serviceToRequirement[params.get("service") ?? ""] ?? "";
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (fd.get("company_website")) {
      setStatus({ state: "success" });
      return;
    }

    const data: Enquiry = {
      name: String(fd.get("name") ?? "").trim(),
      organization: String(fd.get("organization") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      city: String(fd.get("city") ?? "").trim(),
      requirement: String(fd.get("requirement") ?? "") as Enquiry["requirement"],
      message: String(fd.get("message") ?? "").trim(),
      sourcePath: window.location.pathname,
    };

    setStatus({ state: "submitting" });
    const result = await submitEnquiry(data);

    if (result.ok) {
      trackEvent("generate_lead", { requirement: data.requirement || "unspecified" });
      form.reset();
      setStatus({ state: "success" });
    } else if (result.reason === "not-configured") {
      setStatus({ state: "fallback", mailto: enquiryMailto(siteConfig.contact.email, data) });
    } else {
      setStatus({ state: "error" });
    }
  }

  if (status.state === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-emerald-700" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold">Thank you, your enquiry has been sent</h3>
        <p className="mt-2 text-ink-600">
          Our team will get back to you. For anything urgent, call{" "}
          <a href={siteConfig.contact.phoneHref} className="font-semibold text-brand-700 underline underline-offset-4">
            {siteConfig.contact.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  const submitting = status.state === "submitting";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" aria-describedby="form-privacy-note">
      <Field id="name" label="Full name">
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </Field>
      <Field id="organization" label="Hospital / organisation">
        <input id="organization" name="organization" type="text" required autoComplete="organization" className={inputClass} />
      </Field>
      <Field id="email" label="Work email">
        <input id="email" name="email" type="email" required autoComplete="email" inputMode="email" className={inputClass} />
      </Field>
      <Field id="phone" label="Phone number">
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+\-\s()]{7,20}"
          title="Please enter a valid phone number"
          className={inputClass}
        />
      </Field>
      <Field id="city" label="City">
        <input id="city" name="city" type="text" required autoComplete="address-level2" className={inputClass} />
      </Field>
      <Field id="requirement" label="Requirement">
        <select id="requirement" name="requirement" required defaultValue={preselected} className={cn(inputClass, "appearance-auto")}>
          <option value="" disabled>
            Select a requirement
          </option>
          {REQUIREMENTS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>
      <Field
        id="message"
        label="Message"
        optional
        hint="Modalities, approximate volumes and hours of cover help us prepare an accurate quote. Please do not include any patient information."
        className="sm:col-span-2"
      >
        <textarea id="message" name="message" rows={5} aria-describedby="message-hint" className={inputClass} />
      </Field>

      {/* Honeypot, hidden from users and assistive technology */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-privacy-note" className="max-w-md text-xs leading-relaxed text-ink-500">
          This form is for business enquiries from hospitals, diagnostic centres and healthcare organisations. Do not
          share patient details. See our <Link href="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.
        </p>
        <button type="submit" disabled={submitting} className={buttonClasses("primary", "lg", "w-full shrink-0 sm:w-auto")}>
          {submitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {submitting ? "Sending…" : "Get a Quote"}
        </button>
      </div>

      <div aria-live="polite" className="sm:col-span-2">
        {status.state === "fallback" && (
          <div className="flex gap-3 rounded-xl border border-ink-200 bg-ink-50 p-4 text-sm text-ink-700">
            <Info className="mt-0.5 size-4 shrink-0 text-ink-500" aria-hidden="true" />
            <p>
              Online submission is not available right now.{" "}
              <a href={status.mailto} className="font-semibold text-brand-700 underline underline-offset-4">
                Send your enquiry by email
              </a>{" "}
              (your details are pre-filled) or call{" "}
              <a href={siteConfig.contact.phoneHref} className="font-semibold text-brand-700 underline underline-offset-4">
                {siteConfig.contact.phoneDisplay}
              </a>
              .
            </p>
          </div>
        )}
        {status.state === "error" && (
          <p className="rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-900">
            Something went wrong while sending. Please try again, email{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold underline underline-offset-4">
              {siteConfig.contact.email}
            </a>{" "}
            or call {siteConfig.contact.phoneDisplay}.
          </p>
        )}
      </div>
    </form>
  );
}
