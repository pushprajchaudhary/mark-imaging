import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Mark Imaging collects, uses and protects information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const { contact } = siteConfig;
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" updated="2026-10-20">
      <p>
        This policy explains how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information collected
        through this website. It does not cover clinical data processed under client contracts, which is governed by
        those contracts.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Enquiry details</strong> you submit through our contact form: name, organisation, work email, phone
          number, city, requirement and message.
        </li>
        <li>
          <strong>Usage data</strong> such as pages visited and device type, collected through analytics tools where
          enabled.
        </li>
      </ul>
      <p>
        Our website enquiry form is intended for business enquiries only. Please do not submit patient information or
        medical records through this website.
      </p>
      <h2>How we use information</h2>
      <ul>
        <li>To respond to your enquiry and prepare quotations.</li>
        <li>To understand how our website is used and improve it.</li>
        <li>To meet legal obligations.</li>
      </ul>
      <h2>Cookies and analytics</h2>
      <p>
        Where enabled, we use analytics services such as Google Analytics or Google Tag Manager, which may set cookies.
        [Legal review: insert cookie list, consent approach and retention periods.]
      </p>
      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We may share information with service providers who help us operate this
        website and respond to enquiries, under appropriate safeguards. [Legal review: list categories of processors.]
      </p>
      <h2>Your rights</h2>
      <p>
        Subject to applicable law, including India&rsquo;s Digital Personal Data Protection Act, 2023, you may request
        access to, correction of or erasure of your personal data. [Legal review: confirm applicable rights, grievance
        officer details and response timelines.]
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${contact.email}`}>{contact.email}</a> or{" "}
        <a href={contact.phoneHref}>{contact.phoneDisplay}</a>. See also our{" "}
        <Link href="/terms-and-conditions">terms and conditions</Link>.
      </p>
    </LegalPage>
  );
}
