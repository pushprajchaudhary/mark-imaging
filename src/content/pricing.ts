/**
 * Indicative charges from the Mark Imaging brochure. Not shown publicly unless
 * siteConfig.features.showPricing is true. Update values here only.
 */

export type PriceRow = { item: string; price: string };
export type PriceGroup = { title: string; unit: string; rows: PriceRow[]; note?: string };

export const pricingLastReviewed = "2026-10-20";

export const reportingCharges: PriceGroup[] = [
  {
    title: "CT reporting",
    unit: "per study",
    rows: [
      { item: "CT head", price: "INR 225" },
      { item: "CT other parts", price: "INR 350" },
      { item: "CT special", price: "INR 550" },
    ],
  },
  {
    title: "MRI reporting",
    unit: "per study",
    rows: [
      { item: "MRI brain / spine", price: "INR 350" },
      { item: "MRI other parts", price: "INR 450" },
      { item: "MRI special", price: "INR 650" },
    ],
  },
  {
    title: "X-ray reporting",
    unit: "per study",
    rows: [
      { item: "X-ray", price: "INR 50" },
      { item: "X-ray special", price: "INR 150" },
      { item: "Mammography", price: "INR 200" },
    ],
  },
];

export const otherCharges: PriceGroup[] = [
  {
    title: "Radiologist hiring on contract",
    unit: "",
    rows: [
      { item: "Per day", price: "INR 20,000–30,000" },
      { item: "Per hour", price: "INR 4,000–6,000" },
    ],
    note: "Actual quotation depends on the timings of the service required.",
  },
  {
    title: "Software (PACS, RIS, HIS)",
    unit: "",
    rows: [{ item: "Software solutions", price: "As per requirement" }],
  },
];
