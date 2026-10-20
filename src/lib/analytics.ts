type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/**
 * Pushes a conversion event to the GTM/GA4 dataLayer, if one exists.
 * Never include personal data (names, emails, phone numbers) in events.
 */
export function trackEvent(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
