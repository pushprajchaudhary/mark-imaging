import type { IconName } from "@/components/ui/icons";
import type { Point } from "./types";

/**
 * Company content taken from the Mark Imaging brochure. Keep wording faithful
 * to the source; edit here and every page that uses it updates.
 */

export const about = {
  leadership:
    "Mark Imaging is led by veterans of medical imaging technology, imaging services and telemedicine, with a decade of cumulative experience between them.",
  mission:
    "To bridge the demand–supply gap in radiology by offering innovative solutions built on technology and new distribution models.",
  promise: "A one-stop solution for all radiology requirements.",
  consultants:
    "We act as consultants, bringing customised and effective solutions to each organisation's radiology needs.",
};

/** The brochure's "How are we different" section, verbatim in substance. */
export const differentiators: Point[] = [
  {
    title: "The problem with a small fixed panel",
    description:
      "Typical teleradiology providers hire a few radiologists. That tends to mean low retention and frequent changes to the reporting panel your clinicians deal with.",
  },
  {
    title: "Multiple radiologist groups behind one partner",
    description:
      "Mark Imaging partners with multiple groups of radiologists, giving a larger supply of doctors and the flexibility to meet changing demand.",
  },
  {
    title: "Quality first, levers adjusted to need",
    description:
      "We prioritise quality and adjust our levers to your demand and your quality expectations, rather than fitting every client into one model.",
  },
];

export type ProcessStep = { title: string; description: string; detail?: string; icon: IconName };

/** The brochure's three-step onboarding process. */
export const processSteps: ProcessStep[] = [
  {
    title: "Requirement, agreement and contract",
    description:
      "We understand your requirement, agree commercials and close the engagement with a signed contract.",
    detail:
      "This is where modalities, expected volumes, timings and services (reporting, staffing, second opinion, pre-reads or software) are discussed.",
    icon: "handshake",
  },
  {
    title: "Cloud PACS installed at your premises",
    description:
      "A third-party cloud PACS is installed at your site on a system that is networked with your imaging modalities and has internet access.",
    detail: "Once installed, your radiographer can push cases directly from the machine console.",
    icon: "server",
  },
  {
    title: "Reporting begins",
    description:
      "Reporting starts. You receive software access so that patient history can be updated through the PACS for every study uploaded.",
    detail: "Each study is stored for one year for future reference when patients return.",
    icon: "file-check",
  },
];

/** The brochure's "Ethics & Standards" section. */
export const standards: Array<Point & { icon: IconName }> = [
  {
    icon: "shield-check",
    title: "Strict radiologist verification",
    description:
      "Every reporting radiologist goes through a strict verification process before reporting for Mark Imaging clients.",
  },
  {
    icon: "file-text",
    title: "Credentials furnished on demand",
    description:
      "All relevant documents of the radiologist reporting your studies can be furnished on request, for your own credentialing and records.",
  },
  {
    icon: "user-round",
    title: "Dedicated relationship manager",
    description:
      "One named relationship manager is your point of contact for onboarding, day-to-day coordination and escalations.",
  },
  {
    icon: "archive",
    title: "One-year study storage",
    description:
      "Each study is stored for one year so that previous imaging is available for reference when patients return.",
  },
  {
    icon: "receipt",
    title: "Clear billing cycle",
    description:
      "Invoices are to be cleared by the 15th of the subsequent month, so finance teams have a predictable cycle to plan around.",
  },
];

/** "Benefits for hospitals" — everything the brochure places under one roof. */
export const underOneRoof: Array<{ label: string; description: string; href: string }> = [
  {
    label: "Radiology Associates",
    description: "Registered firms of radiologist groups providing reporting",
    href: "/about#why-mark-imaging",
  },
  { label: "Radiologist hiring", description: "Contract staffing, hourly or daily", href: "/services/radiologist-staffing" },
  { label: "Software", description: "PACS, RIS and HIS requirements", href: "/services/pacs-ris-his-solutions" },
];
