import type { IconName } from "@/components/ui/icons";
import type { FaqItem, ServiceSlug } from "./types";

/**
 * Teleradiology explainer content shared by Home and Services.
 * Facts about Mark Imaging come from the brochure. Where the brochure is
 * silent (turnaround times, critical-result escalation), the copy says these
 * are agreed per contract rather than inventing numbers.
 */

/** Study categories, taken from the brochure's reporting-charge structure. */
export const modalities: Array<{
  name: string;
  slug: ServiceSlug;
  icon: IconName;
  availability?: string;
  categories: string[];
}> = [
  {
    name: "CT",
    slug: "ct-reporting",
    icon: "scan",
    availability: "24×7 on demand",
    categories: ["CT head", "CT other body parts", "Special CT studies"],
  },
  {
    name: "MRI",
    slug: "mri-reporting",
    icon: "brain",
    availability: "24×7 on demand",
    categories: ["MRI brain & spine", "MRI other body parts", "Special MRI studies"],
  },
  {
    name: "X-ray & mammography",
    slug: "x-ray-reporting",
    icon: "bone",
    categories: ["X-ray", "Special X-ray studies", "Mammography"],
  },
];

/** Situations where teleradiology and related services help. */
export const applications: Array<{ icon: IconName; title: string; description: string; slug: ServiceSlug; link: string }> = [
  {
    icon: "clock",
    title: "Night, weekend and emergency scans",
    description:
      "CT and MRI scans done after hours are reported on demand, 24×7, instead of waiting for the morning list.",
    slug: "ct-reporting",
    link: "24×7 CT reporting",
  },
  {
    icon: "layers",
    title: "High or unpredictable volumes",
    description:
      "Work is spread across multiple radiologist groups, so a busy day does not depend on one or two people.",
    slug: "mri-reporting",
    link: "MRI reporting",
  },
  {
    icon: "user-plus",
    title: "Radiologist leave or vacancy",
    description: "Hire a radiologist on contract by the hour or by the day while you recruit or cover leave.",
    slug: "radiologist-staffing",
    link: "Radiologist staffing",
  },
  {
    icon: "users",
    title: "Complex and pre-surgical cases",
    description:
      "Have a difficult study discussed again with a senior expert radiologist or a group of radiologists.",
    slug: "second-opinion-reporting",
    link: "Second opinion reporting",
  },
  {
    icon: "monitor",
    title: "New or upgrading imaging set-ups",
    description: "Get PACS, RIS and HIS requirements addressed alongside reporting, by the same partner.",
    slug: "pacs-ris-his-solutions",
    link: "PACS, RIS & HIS",
  },
  {
    icon: "file-check",
    title: "Initial reads to support your workflow",
    description: "Pre-reads by verified radiologists, with the scope agreed around how your department works.",
    slug: "pre-reads",
    link: "Pre-reads",
  },
];

/**
 * Common problems hospitals report with teleradiology, and how Mark Imaging's
 * brochure commitments address each one.
 */
export const challenges: Array<{ challenge: string; answer: string }> = [
  {
    challenge: "The reporting panel keeps changing",
    answer:
      "Typical providers rely on a few hired radiologists. Mark Imaging partners with multiple Radiology Associates, giving a larger, steadier supply of doctors.",
  },
  {
    challenge: "Not knowing who is reporting your patients",
    answer:
      "Every radiologist passes a strict verification process, and their relevant documents are furnished on demand.",
  },
  {
    challenge: "Reports written without clinical context",
    answer:
      "Your team gets PACS access to update patient history for every study uploaded, so the radiologist sees the clinical question.",
  },
  {
    challenge: "No previous scans to compare against",
    answer: "Each study is stored for one year for future reference when the same patient returns.",
  },
  {
    challenge: "Chasing several contacts when something goes wrong",
    answer: "A dedicated relationship manager is your single point of contact across the whole network.",
  },
  {
    challenge: "Separate vendors for reporting, staffing and software",
    answer: "Reporting, radiologist hiring and PACS/RIS/HIS are all available under one roof, on one contract.",
  },
];

/** What to ask any teleradiology partner, with Mark Imaging's position. */
export const partnerChecklist: Array<{ question: string; answer: string }> = [
  {
    question: "Who exactly reports our studies, and can we verify them?",
    answer: "Verified radiologists from partner Radiology Associates. Documents are available on demand.",
  },
  {
    question: "Which modalities and hours are covered?",
    answer: "CT and MRI 24×7 on demand, plus X-ray, special X-ray and mammography reporting.",
  },
  {
    question: "What turnaround times will you commit to?",
    answer: "Turnaround expectations are discussed by study type and urgency, and agreed in your contract.",
  },
  {
    question: "How are urgent or critical findings communicated?",
    answer: "The escalation route is agreed during onboarding and owned by your relationship manager.",
  },
  {
    question: "What do we need to install?",
    answer: "A system at your premises networked with your modalities and online, for a third-party cloud PACS.",
  },
  {
    question: "How long are studies kept, and how is billing done?",
    answer: "Studies are stored for one year. Invoices are cleared by the 15th of the subsequent month.",
  },
];

/** Educational FAQs about teleradiology in general, plus Mark Imaging specifics. */
export const teleradiologyFaqs: FaqItem[] = [
  {
    question: "What is teleradiology?",
    answer:
      "Teleradiology is the remote reporting of medical images. A scan such as a CT, MRI or X-ray is done at the hospital or imaging centre, transmitted securely, and read by a qualified radiologist working elsewhere.",
  },
  {
    question: "What are the benefits of teleradiology for a hospital?",
    answer:
      "It gives access to radiologists outside working hours, helps manage high or unpredictable volumes, reduces dependence on a single in-house radiologist, and can make it easier to get a second opinion on complex cases.",
  },
  {
    question: "What are the limitations of teleradiology, and how do you address them?",
    answer:
      "Common concerns are changing reporting panels, missing clinical history, lack of previous scans and unclear accountability. Mark Imaging addresses these with multiple partner radiologist groups, PACS access to update patient history, one-year study storage and a dedicated relationship manager.",
  },
  {
    question: "What is a radiology report?",
    answer:
      "A radiology report is the radiologist's written interpretation of an imaging study. It describes the relevant findings and gives an impression that the treating doctor uses alongside the patient's clinical picture.",
  },
  {
    question: "Is teleradiology a replacement for in-house radiologists?",
    answer:
      "Not necessarily. Many hospitals keep in-house radiologists for daytime work and use teleradiology for nights, weekends, peaks or specific modalities. Contract radiologist staffing is another option for predictable gaps.",
  },
];
