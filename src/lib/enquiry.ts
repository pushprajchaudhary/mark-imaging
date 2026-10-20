import type { Requirement } from "@/content/types";

/**
 * Business enquiry payload. This form is for organisations only and must never
 * collect patient identifiers or clinical data.
 */
export type Enquiry = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  city: string;
  requirement: Requirement | "";
  message: string;
  /** Page the enquiry was sent from, for attribution. */
  sourcePath: string;
};

export type EnquiryResult = { ok: true } | { ok: false; reason: "not-configured" | "network" | "rejected" };

export const ENQUIRY_ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT?.trim() || "";

/**
 * Sends the enquiry as JSON to NEXT_PUBLIC_ENQUIRY_ENDPOINT. Swap this one
 * function to integrate a CRM, a Next.js Route Handler or a Server Action.
 */
export async function submitEnquiry(data: Enquiry): Promise<EnquiryResult> {
  if (!ENQUIRY_ENDPOINT) return { ok: false, reason: "not-configured" };
  try {
    const res = await fetch(ENQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok ? { ok: true } : { ok: false, reason: "rejected" };
  } catch {
    return { ok: false, reason: "network" };
  }
}

/** Pre-filled email used as a fallback when no endpoint is configured. */
export function enquiryMailto(to: string, data: Enquiry): string {
  const subject = `Enquiry: ${data.requirement || "Radiology services"} – ${data.organization}`;
  const body = [
    `Name: ${data.name}`,
    `Organisation: ${data.organization}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `City: ${data.city}`,
    `Requirement: ${data.requirement}`,
    "",
    data.message,
  ].join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
