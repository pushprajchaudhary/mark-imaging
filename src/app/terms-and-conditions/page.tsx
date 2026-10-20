import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Terms governing use of the Mark Imaging website, including information use, indicative pricing, intellectual property and governing law.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" path="/terms-and-conditions" updated="2026-10-20">
      <p>
        These terms govern your use of this website operated by {siteConfig.name}. By using the website you agree to
        them. Services provided to clients are governed by separate written contracts.
      </p>
      <h2>Use of this website</h2>
      <p>
        This website provides general information about Mark Imaging&rsquo;s radiology outsourcing services for
        hospitals, diagnostic centres and healthcare organisations. You agree not to misuse the website or attempt to
        interfere with its operation.
      </p>
      <h2>No medical advice</h2>
      <p>
        Content on this website is not medical advice. Please read our{" "}
        <Link href="/medical-disclaimer">medical disclaimer</Link>.
      </p>
      <h2>Quotations and pricing</h2>
      <p>
        Any pricing information is indicative. Binding prices and terms are set out only in a signed contract.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The Mark Imaging name, logo and website content belong to Mark Imaging unless stated otherwise and may not be
        reused without permission.
      </p>
      <h2>Limitation of liability</h2>
      <p>[Legal review: insert limitation of liability clause appropriate to Mark Imaging.]</p>
      <h2>Governing law</h2>
      <p>[Legal review: confirm governing law and jurisdiction, for example the courts of Delhi, India.]</p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. The date at the top shows when they last changed.</p>
    </LegalPage>
  );
}
