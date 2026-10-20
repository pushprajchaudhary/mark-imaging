import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Medical Disclaimer",
  description:
    "Mark Imaging provides radiology services to healthcare organisations. Website content is general information, not medical advice.",
  path: "/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <LegalPage title="Medical Disclaimer" path="/medical-disclaimer" updated="2026-10-20">
      <p>
        {siteConfig.name} provides radiology reporting and related services to hospitals, diagnostic centres, imaging
        centres and other healthcare organisations under contract.
      </p>
      <h2>Not medical advice</h2>
      <p>
        Information on this website, including articles and guides, is provided for general information about our
        services and the radiology field. It is not medical advice and must not be used to diagnose or treat any
        condition.
      </p>
      <h2>No direct patient services through this website</h2>
      <p>
        This website does not offer diagnosis, report interpretation or medical consultations to individuals. If you
        have questions about your own imaging or health, please speak to your treating doctor or a qualified healthcare
        professional. In an emergency, contact your local emergency services immediately.
      </p>
      <h2>Clinical responsibility</h2>
      <p>
        Radiology reports and second opinions support clinical decision-making by the treating team. Responsibility for
        diagnosis and treatment decisions remains with the treating clinician.
      </p>
      <h2>Questions</h2>
      <p>
        Healthcare organisations with questions about our services can <Link href="/contact">contact our team</Link>.
      </p>
    </LegalPage>
  );
}
