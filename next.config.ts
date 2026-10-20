import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Pin the workspace root so a lockfile in a parent directory is never picked up.
  turbopack: { root: process.cwd() },
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Permanent (308) redirects for short or likely-mistyped URLs so that every
  // topic has exactly one canonical address. Add legacy URLs here when migrating.
  async redirects() {
    return [
      { source: "/blog", destination: "/resources/blog", permanent: true },
      { source: "/blog/:slug", destination: "/resources/blog/:slug", permanent: true },
      { source: "/services/ct", destination: "/services/ct-reporting", permanent: true },
      { source: "/services/mri", destination: "/services/mri-reporting", permanent: true },
      { source: "/services/mr-reporting", destination: "/services/mri-reporting", permanent: true },
      { source: "/services/xray-reporting", destination: "/services/x-ray-reporting", permanent: true },
      { source: "/services/second-opinion", destination: "/services/second-opinion-reporting", permanent: true },
      { source: "/services/staffing", destination: "/services/radiologist-staffing", permanent: true },
      { source: "/services/pacs", destination: "/services/pacs-ris-his-solutions", permanent: true },
      { source: "/hospitals", destination: "/for-hospitals", permanent: true },
      // Merged into the About Us page (four-tab site structure).
      { source: "/why-mark-imaging", destination: "/about#why-mark-imaging", permanent: true },
      { source: "/how-it-works", destination: "/about#how-it-works", permanent: true },
      { source: "/quality-and-standards", destination: "/about#quality", permanent: true },
      { source: "/quality", destination: "/about#quality", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions", permanent: true },
    ];
  },
};

export default nextConfig;
