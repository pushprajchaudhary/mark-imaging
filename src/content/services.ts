import type { Point, Service, ServiceSlug } from "./types";

/**
 * Service content. Facts (24×7 for CT/MR, contract staffing hourly or daily,
 * second opinions from senior radiologists or groups, PACS/RIS/HIS, pre-reads,
 * study categories, process, standards) come from the brochure. Everything
 * else is explanatory copy and must not introduce new claims such as
 * turnaround times, accreditations, volumes or named clients.
 */

const onboarding: Point[] = [
  {
    title: "Share your requirement",
    description:
      "Tell us your modalities, expected volumes and the hours you need covered. We agree commercials and sign a contract.",
  },
  {
    title: "Cloud PACS set-up",
    description:
      "A third-party cloud PACS is installed at your premises on a system connected to your modalities and the internet.",
  },
  {
    title: "Push studies from the console",
    description:
      "Your radiographer sends cases directly from the machine console and updates patient history in the PACS for each study.",
  },
  {
    title: "Receive reports",
    description:
      "Studies are reported by radiologists from our partner network, and your relationship manager stays your single point of contact.",
  },
];

const networkWhy: Point = {
  title: "A network, not a small panel",
  description:
    "Studies are reported through multiple Radiology Associates, registered firms of radiologist groups across India, rather than a handful of employed radiologists.",
};

const verificationWhy: Point = {
  title: "Verified radiologists, documents on request",
  description:
    "Every reporting radiologist passes a strict verification process, and their relevant documents can be furnished whenever you ask.",
};

const rmWhy: Point = {
  title: "One relationship manager",
  description:
    "A dedicated relationship manager coordinates onboarding, daily operations and escalations, so you are not chasing multiple contacts.",
};

export const services: Service[] = [
  {
    slug: "ct-reporting",
    name: "CT Reporting",
    nameInSentence: "CT reporting",
    icon: "scan",
    serviceType: "Teleradiology CT reporting",
    requirement: "CT Reporting",
    metaTitle: "24×7 CT Reporting Services for Hospitals",
    metaDescription:
      "Outsourced CT reporting for hospitals and diagnostic centres, on demand 24×7. Push studies from your CT console through cloud PACS to verified radiologists.",
    h1: "24×7 CT reporting for hospitals and diagnostic centres",
    lede: "On-demand CT reporting around the clock, delivered by verified radiologists from a network of radiology provider groups across India.",
    summary:
      "On-demand CT reporting, 24×7, for CT head, other body regions and special studies.",
    badge: "Available 24×7",
    intro: [
      "A CT scanner does not stop at the end of a shift, and neither do the emergencies that need it. Mark Imaging provides on-demand CT reporting as a 24×7 service, so your scans can be reported at night, on weekends and on holidays without keeping a radiologist on site for every hour.",
      "Studies are sent from your CT console to a cloud PACS installed at your premises and are reported by radiologists from our partner Radiology Associates. You keep one contract, one relationship manager and one invoice.",
    ],
    whatItIs: {
      heading: "What outsourced CT reporting covers",
      paragraphs: [
        "Outsourced CT reporting, often called CT teleradiology, means the images acquired on your scanner are interpreted remotely by qualified radiologists who are not on your premises. Your team continues to scan patients; the reporting step is handled by Mark Imaging's network.",
        "Reporting is organised into three study categories, each with its own per-study charge. Your quote is built around the mix of studies you actually perform.",
      ],
      list: [
        { title: "CT head", description: "Head studies, which are frequently time-sensitive in emergency settings." },
        { title: "CT of other body parts", description: "Chest, abdomen, pelvis, spine, extremities and other regions." },
        { title: "Special CT studies", description: "Studies classified as special, which carry a separate category." },
      ],
    },
    audience: [
      {
        title: "Hospitals with emergency CT",
        description: "Keep CT reporting running overnight and on weekends without a resident radiologist for every shift.",
      },
      {
        title: "Diagnostic and imaging centres",
        description: "Report CT volumes reliably when an in-house radiologist is unavailable, on leave or at capacity.",
      },
      {
        title: "Growing CT services",
        description: "Start or expand CT services before demand justifies a full-time radiologist.",
      },
    ],
    benefits: [
      {
        title: "Round-the-clock coverage",
        description: "On-demand CT reporting is offered as a 24×7 service, so scans are not held until the morning.",
      },
      {
        title: "Capacity that flexes with demand",
        description: "Because work is spread across multiple radiologist groups, volume spikes do not depend on one or two individuals.",
      },
      {
        title: "Clinical history travels with the study",
        description: "Your team updates patient history in the PACS for each upload, giving the reporting radiologist the context they need.",
      },
      {
        title: "Prior studies on hand",
        description: "Each study is stored for one year, so previous scans are available when the same patient returns.",
      },
      {
        title: "Predictable per-study billing",
        description: "Charges follow the study category, and invoices are cleared by the 15th of the subsequent month.",
      },
    ],
    steps: onboarding,
    why: [networkWhy, verificationWhy, rmWhy],
    faqs: [
      {
        question: "Is CT reporting available 24×7?",
        answer:
          "Yes. On-demand CT and MRI reporting is offered as a 24×7 service, including nights, weekends and holidays.",
      },
      {
        question: "How are CT studies sent for reporting?",
        answer:
          "A third-party cloud PACS is installed at your premises on a system networked with your modalities and connected to the internet. Your radiographer pushes cases directly from the CT console.",
      },
      {
        question: "Which CT studies can be reported?",
        answer:
          "Reporting covers CT head, CT of other body parts and special CT studies. Share your study mix during the requirement discussion and we will confirm coverage.",
      },
      {
        question: "How is clinical history shared with the radiologist?",
        answer:
          "You receive software access to update patient history through the PACS for each study you upload.",
      },
      {
        question: "How is CT reporting priced?",
        answer:
          "Charges are per study and depend on the category: CT head, other body parts or special studies. Request a quote with your expected volumes for exact pricing.",
      },
      {
        question: "Can we review the credentials of the reporting radiologist?",
        answer:
          "Yes. Radiologists go through a strict verification process, and all relevant documents of the reporting radiologist can be furnished on demand.",
      },
    ],
    related: ["mri-reporting", "x-ray-reporting", "pre-reads", "second-opinion-reporting"],
  },
  {
    slug: "mri-reporting",
    name: "MRI Reporting",
    nameInSentence: "MRI reporting",
    icon: "brain",
    serviceType: "Teleradiology MRI reporting",
    requirement: "MRI Reporting",
    metaTitle: "24×7 MRI Reporting Services | Outsourced MRI",
    metaDescription:
      "On-demand MRI reporting, 24×7, for hospitals, MRI centres and diagnostic centres. Brain, spine, other body parts and special MRI studies via cloud PACS.",
    h1: "MRI reporting services, on demand and around the clock",
    lede: "Outsourced MRI reporting for hospitals and imaging centres, with brain, spine, body and special studies reported by verified radiologists.",
    summary: "On-demand MRI reporting, 24×7, for brain and spine, other body parts and special studies.",
    badge: "Available 24×7",
    intro: [
      "MRI studies are detailed, multi-sequence and often depend on clinical context to interpret well. Reporting them consistently requires radiologists who are available when the scan is done, not days later.",
      "Mark Imaging offers on-demand MRI reporting as a 24×7 service. Your studies are pushed from the scanner console through a cloud PACS and reported by radiologists from our network of Radiology Associates across India.",
    ],
    whatItIs: {
      heading: "How MRI teleradiology works with Mark Imaging",
      paragraphs: [
        "MRI teleradiology separates image acquisition from interpretation. Your technologists run the protocol and push the study; radiologists in our partner network read it remotely and return the report.",
        "Because MRI interpretation leans heavily on the clinical question, your team updates patient history in the PACS for each study. Reporting is organised into three categories with separate per-study charges.",
      ],
      list: [
        { title: "MRI brain and spine", description: "Neuro and spine studies, among the most commonly requested MRI examinations." },
        { title: "MRI of other body parts", description: "Musculoskeletal, abdominal, pelvic and other regions." },
        { title: "Special MRI studies", description: "Studies classified as special, reported under their own category." },
      ],
    },
    audience: [
      {
        title: "Standalone MRI centres",
        description: "Report every shift's volume without depending on a single radiologist's schedule.",
      },
      {
        title: "Hospitals with in-house MRI",
        description: "Extend reporting to nights and weekends so inpatient and emergency MRI is not left waiting.",
      },
      {
        title: "Multi-modality diagnostic centres",
        description: "Use one partner for MRI alongside CT and X-ray reporting, under one contract.",
      },
    ],
    benefits: [
      {
        title: "Reporting when scans happen",
        description: "MRI reporting is available 24×7 on demand, matching the hours your scanner actually runs.",
      },
      {
        title: "Fewer panel changes",
        description: "Working with multiple radiologist groups avoids the frequent panel changes common with small, fixed teams.",
      },
      {
        title: "Context for every read",
        description: "Patient history updated in the PACS gives radiologists the clinical question behind each study.",
      },
      {
        title: "Comparison with priors",
        description: "Studies are stored for one year, supporting comparison when follow-up scans are done.",
      },
    ],
    steps: onboarding,
    why: [
      networkWhy,
      verificationWhy,
      {
        title: "Complex cases can be escalated",
        description:
          "Where a case needs more discussion, our second opinion service can bring in a senior expert radiologist or a group of radiologists.",
      },
    ],
    faqs: [
      {
        question: "Do you offer MRI reporting at night and on weekends?",
        answer: "Yes. On-demand CT and MRI reporting is a 24×7 service.",
      },
      {
        question: "What MRI studies can you report?",
        answer:
          "Reporting is organised into MRI brain and spine, MRI of other body parts and special MRI studies. Share your typical study mix and we will confirm coverage during onboarding.",
      },
      {
        question: "Do we need to buy new software for MRI teleradiology?",
        answer:
          "A third-party cloud PACS is installed at your premises on a system connected to your modalities and the internet. Commercial details are agreed as part of the contract.",
      },
      {
        question: "How is MRI reporting charged?",
        answer:
          "MRI reporting is charged per study by category. Request a quote with your expected monthly volumes for exact pricing.",
      },
      {
        question: "Can a complex MRI case get a second opinion?",
        answer:
          "Yes. Complex medical or surgical cases can be discussed again with a senior expert radiologist or a group of radiologists through our second opinion reporting service.",
      },
    ],
    related: ["ct-reporting", "second-opinion-reporting", "x-ray-reporting", "pacs-ris-his-solutions"],
  },
  {
    slug: "x-ray-reporting",
    name: "X-Ray Reporting",
    nameInSentence: "X-ray reporting",
    icon: "bone",
    serviceType: "Teleradiology X-ray and mammography reporting",
    requirement: "X-Ray Reporting",
    metaTitle: "X-Ray & Mammography Reporting Services",
    metaDescription:
      "Outsourced X-ray, special X-ray and mammography reporting for hospitals and diagnostic centres. Push studies via cloud PACS and get verified radiologist reports.",
    h1: "X-ray and mammography reporting for high-volume imaging",
    lede: "Remote reporting for routine X-ray, special X-ray studies and mammography, through the same cloud PACS workflow as your CT and MRI.",
    summary: "Remote reporting for X-ray, special X-ray studies and mammography.",
    intro: [
      "X-ray is usually the highest-volume modality in any hospital or diagnostic centre. Each study is quick to acquire, but unreported films build up fast when radiologist time is short.",
      "Mark Imaging reports X-ray, special X-ray studies and mammography through the same cloud PACS workflow used for cross-sectional imaging, so your team does not need a separate process for plain films.",
    ],
    whatItIs: {
      heading: "What X-ray reporting includes",
      paragraphs: [
        "Your radiographers push studies from the X-ray system to the PACS, add patient history, and radiologists from our partner network report them remotely.",
        "Reporting is organised into three categories, each with its own per-study charge:",
      ],
      list: [
        { title: "X-ray", description: "Routine radiographs such as chest, spine and extremity studies." },
        { title: "Special X-ray", description: "Studies classified as special X-ray examinations." },
        { title: "Mammography", description: "Mammography studies reported as a separate category." },
      ],
    },
    audience: [
      {
        title: "Diagnostic centres with high X-ray volume",
        description: "Keep plain-film reporting moving without tying up your in-house radiologist.",
      },
      {
        title: "Hospitals",
        description: "Report OPD, inpatient and casualty X-rays alongside your CT and MRI under one partner.",
      },
      {
        title: "Centres offering mammography",
        description: "Have mammography studies reported as a distinct category with its own pricing.",
      },
    ],
    benefits: [
      {
        title: "One workflow for every modality",
        description: "X-ray, CT and MRI move through the same PACS, so your radiographers learn one process.",
      },
      {
        title: "Costs that scale with volume",
        description: "Per-study pricing by category means you pay for the studies you send.",
      },
      {
        title: "History and priors in one place",
        description: "Patient history is updated in the PACS and studies are stored for a year for repeat patients.",
      },
      {
        title: "Verified reporting radiologists",
        description: "Radiologists pass a strict verification process, with documents available on demand.",
      },
    ],
    steps: onboarding,
    why: [networkWhy, rmWhy, verificationWhy],
    faqs: [
      {
        question: "Do you report mammography?",
        answer: "Yes. Mammography is reported as a separate category alongside X-ray and special X-ray studies.",
      },
      {
        question: "Can X-ray reporting be combined with CT and MRI reporting?",
        answer:
          "Yes. All modalities use the same cloud PACS workflow and can be covered under one contract with one relationship manager.",
      },
      {
        question: "How is X-ray reporting priced?",
        answer:
          "Charges are per study and differ for X-ray, special X-ray and mammography. Request a quote with your expected volumes.",
      },
      {
        question: "How do our radiographers send X-rays?",
        answer:
          "Cases are pushed directly from the machine console to the cloud PACS installed at your premises, and patient history is updated for each study.",
      },
    ],
    related: ["ct-reporting", "mri-reporting", "radiologist-staffing", "pacs-ris-his-solutions"],
  },
  {
    slug: "second-opinion-reporting",
    name: "Second Opinion Reporting",
    nameInSentence: "second opinion reporting",
    icon: "users",
    serviceType: "Radiology second opinion",
    requirement: "Second Opinion",
    metaTitle: "Second Opinion Radiology Reporting",
    metaDescription:
      "Second opinion radiology reporting for hospitals: complex medical and surgical cases discussed again with a senior expert radiologist or a group of radiologists.",
    h1: "Second opinion radiology reporting for complex and surgical cases",
    lede: "When a case is complex or a surgical decision depends on the imaging, have it discussed again with a senior expert radiologist or a group of radiologists.",
    summary:
      "Complex medical and surgical cases discussed again with a senior expert radiologist or a group of radiologists.",
    intro: [
      "Some imaging findings carry more weight than others. Before major surgery, or when a case does not fit a straightforward pattern, treating teams often want another experienced radiologist to look at the study.",
      "Mark Imaging's second opinion reporting service lets hospitals and clinicians have complex medical cases or surgery cases discussed again with a senior expert radiologist, or with a group of radiologists.",
    ],
    whatItIs: {
      heading: "What a radiology second opinion is, and is not",
      paragraphs: [
        "A second opinion is an independent review of an imaging study that has already been reported. The reviewing radiologist looks at the images and the clinical question and gives their own interpretation, which the treating team can weigh alongside the original report.",
        "It supports clinical decision-making; it does not replace it. The treating clinician remains responsible for diagnosis and management, and a second opinion does not guarantee a particular outcome.",
      ],
    },
    audience: [
      {
        title: "Surgical teams",
        description: "Review imaging again before a planned procedure where findings directly shape the surgical plan.",
      },
      {
        title: "Hospitals handling complex cases",
        description: "Escalate studies with unusual or ambiguous findings to a senior expert or a group of radiologists.",
      },
      {
        title: "Diagnostic centres",
        description: "Offer referring clinicians access to a further expert review when they ask for one.",
      },
    ],
    benefits: [
      {
        title: "Senior expertise on demand",
        description: "Cases are discussed with a senior expert radiologist, or with a group of radiologists where useful.",
      },
      {
        title: "Drawn from a wide network",
        description: "Multiple radiologist groups across India give a broader pool of experience to call on.",
      },
      {
        title: "Same secure workflow",
        description: "Studies are shared through the same PACS your team already uses for routine reporting.",
      },
      {
        title: "Documented credentials",
        description: "Relevant documents of the reviewing radiologist can be furnished on demand.",
      },
    ],
    steps: [
      {
        title: "Raise the case",
        description: "Tell your relationship manager which study needs a second opinion and why.",
      },
      {
        title: "Share images and history",
        description: "The study and the clinical question are made available through the PACS.",
      },
      {
        title: "Expert discussion",
        description: "The case is reviewed by a senior expert radiologist or discussed within a group of radiologists.",
      },
      {
        title: "Opinion returned",
        description: "The second opinion is shared with your team to support the clinical decision.",
      },
    ],
    why: [
      networkWhy,
      verificationWhy,
      {
        title: "Fits alongside routine reporting",
        description:
          "Second opinions can be added to a CT, MRI or X-ray reporting engagement, so escalation does not mean a new vendor.",
      },
    ],
    faqs: [
      {
        question: "Who provides the second opinion?",
        answer:
          "Cases are discussed again with a senior expert radiologist or a group of radiologists from Mark Imaging's partner network.",
      },
      {
        question: "Which cases are suitable for a second opinion?",
        answer:
          "The service is intended for complex medical cases and surgery cases where the treating team wants a further expert review of the imaging.",
      },
      {
        question: "Does a second opinion replace the original report or the treating doctor's judgement?",
        answer:
          "No. A second opinion is an additional expert interpretation to support decision-making. Diagnosis and treatment decisions remain with the treating clinician.",
      },
      {
        question: "Can patients request a second opinion directly?",
        answer:
          "Mark Imaging works with hospitals, diagnostic centres and healthcare organisations. Patients should speak to their treating doctor, who can arrange a second opinion through their institution.",
      },
    ],
    related: ["mri-reporting", "ct-reporting", "pre-reads", "radiologist-staffing"],
  },
  {
    slug: "radiologist-staffing",
    name: "Radiologist Staffing",
    nameInSentence: "radiologist staffing",
    icon: "user-plus",
    serviceType: "Radiologist staffing on contract",
    requirement: "Radiologist Staffing",
    metaTitle: "Radiologist Staffing: Hire on Contract",
    metaDescription:
      "Hire a radiologist on contract, on an hourly or daily basis. Radiologist staffing for hospitals and diagnostic centres, sourced through verified radiologist groups.",
    h1: "Radiologist staffing: hire a radiologist on contract, by the hour or day",
    lede: "Fill radiologist gaps on your terms, with contract radiologists engaged on an hourly or daily basis through Mark Imaging's partner network.",
    summary: "Hire a radiologist on contract, on an hourly or daily basis.",
    intro: [
      "Recruiting a full-time radiologist takes time, and the need is not always permanent. A planned leave, a new service line or a seasonal rise in volume can leave a department short for weeks rather than years.",
      "Mark Imaging's radiologist staffing solution lets you hire a radiologist on contract, on an hourly or daily basis. Because we work with multiple groups of radiologists, we can match your requirement from a wider pool than a single agency or panel.",
    ],
    whatItIs: {
      heading: "How contract radiologist staffing works",
      paragraphs: [
        "You tell us when you need radiologist cover, for how long and for what kind of work. We source a suitable radiologist from our partner Radiology Associates and agree the engagement with you.",
        "Engagements are priced per hour or per day. The actual quotation depends on the timings of the service you require, so a short evening session and a full day are quoted differently.",
      ],
    },
    audience: [
      {
        title: "Hospitals covering leave or vacancies",
        description: "Keep the department running while a permanent radiologist is on leave or being recruited.",
      },
      {
        title: "Diagnostic centres with peak hours",
        description: "Add radiologist capacity for the hours or days when your volumes peak.",
      },
      {
        title: "New or expanding departments",
        description: "Staff a new modality or service line before committing to a permanent hire.",
      },
    ],
    benefits: [
      {
        title: "Hourly or daily engagement",
        description: "Pay for the radiologist time you actually need, not a full-time salary.",
      },
      {
        title: "Wider supply of radiologists",
        description: "Partnerships with multiple radiologist groups widen the pool we can draw from.",
      },
      {
        title: "Verified before engagement",
        description: "Radiologists pass a strict verification process, with documents furnished on demand.",
      },
      {
        title: "Combine with teleradiology",
        description: "Use contract staffing for some hours and outsourced reporting for others, through one partner.",
      },
    ],
    steps: [
      {
        title: "Define the requirement",
        description: "Share the days, hours and type of work you need covered.",
      },
      {
        title: "Receive a quotation",
        description: "We quote on an hourly or daily basis depending on the timings required.",
      },
      {
        title: "Radiologist matched",
        description: "A verified radiologist from our partner network is matched to your requirement.",
      },
      {
        title: "Engagement begins",
        description: "Your relationship manager stays in touch to adjust cover as your needs change.",
      },
    ],
    why: [networkWhy, verificationWhy, rmWhy],
    faqs: [
      {
        question: "Can we hire a radiologist for a few hours?",
        answer: "Yes. Radiologists can be hired on contract on an hourly or a daily basis.",
      },
      {
        question: "How is contract radiologist staffing priced?",
        answer:
          "Staffing is priced per hour or per day. The actual quotation depends on the timings of the service you require.",
      },
      {
        question: "Where do your radiologists come from?",
        answer:
          "Mark Imaging partners with multiple Radiology Associates, registered firms of groups of radiologists, across India.",
      },
      {
        question: "Can we see the radiologist's documents before the engagement?",
        answer:
          "Yes. All relevant documents of the radiologist can be furnished on demand, and every radiologist goes through a strict verification process.",
      },
    ],
    related: ["ct-reporting", "mri-reporting", "x-ray-reporting", "second-opinion-reporting"],
  },
  {
    slug: "pacs-ris-his-solutions",
    name: "PACS, RIS & HIS",
    nameInSentence: "PACS, RIS and HIS",
    icon: "monitor",
    serviceType: "Healthcare imaging software solutions (PACS, RIS, HIS)",
    requirement: "PACS / RIS / HIS",
    metaTitle: "PACS, RIS & HIS Solutions for Hospitals",
    metaDescription:
      "PACS, RIS and HIS requirements fulfilled for hospitals and diagnostic centres, with cloud PACS deployment for teleradiology and solutions scoped to your needs.",
    h1: "PACS, RIS and HIS solutions for hospitals and diagnostic centres",
    lede: "Mark Imaging fulfils PACS, RIS and HIS requirements, so your imaging software and your reporting partner work together from day one.",
    summary: "PACS, RIS and HIS requirements fulfilled and scoped to how you work.",
    intro: [
      "Reporting depends on software. Images need to move from the scanner to the radiologist, worklists need managing, and patient and billing records need to stay connected to the hospital's wider systems.",
      "Alongside reporting and staffing, Mark Imaging fulfils PACS, RIS and HIS requirements. We act as consultants, understanding how your department works and bringing a solution that fits, rather than a single fixed product.",
    ],
    whatItIs: {
      heading: "PACS, RIS and HIS explained",
      paragraphs: [
        "These three systems are often discussed together but solve different problems. A complete radiology set-up usually involves some combination of them.",
      ],
      list: [
        {
          title: "PACS (Picture Archiving and Communication System)",
          description: "Stores, retrieves and distributes medical images, and is the system radiologists read from.",
        },
        {
          title: "RIS (Radiology Information System)",
          description: "Manages the radiology workflow: scheduling, worklists, tracking and reports.",
        },
        {
          title: "HIS (Hospital Information System)",
          description: "Manages hospital-wide administrative, clinical and financial information.",
        },
      ],
    },
    audience: [
      {
        title: "Hospitals upgrading imaging IT",
        description: "Address PACS, RIS or HIS needs with a partner who also understands the reporting workflow.",
      },
      {
        title: "Diagnostic centres starting teleradiology",
        description: "Get the cloud PACS set-up needed to push studies for remote reporting.",
      },
      {
        title: "New imaging facilities",
        description: "Plan imaging software alongside reporting and staffing from the outset.",
      },
    ],
    benefits: [
      {
        title: "Software and reporting from one partner",
        description: "Avoid gaps between your software vendor and your reporting provider.",
      },
      {
        title: "Cloud PACS for teleradiology",
        description: "For reporting engagements, a third-party cloud PACS is installed at your site and connected to your modalities.",
      },
      {
        title: "Scoped to requirement",
        description: "Software is priced as per your requirement, not as a one-size-fits-all package.",
      },
    ],
    steps: [
      {
        title: "Understand the requirement",
        description: "We map your modalities, workflow and the systems you already use.",
      },
      {
        title: "Recommend a solution",
        description: "We propose how your PACS, RIS or HIS requirement can be met.",
      },
      {
        title: "Agree and deploy",
        description: "Commercials are agreed as per requirement and the solution is put in place.",
      },
    ],
    why: [
      {
        title: "Consultative approach",
        description: "We act as consultants and bring customised solutions to your radiology needs.",
      },
      {
        title: "Built around reporting",
        description: "Our software work is informed by how studies actually move from console to report.",
      },
      rmWhy,
    ],
    faqs: [
      {
        question: "Do you provide your own PACS software?",
        answer:
          "For reporting engagements, Mark Imaging installs a third-party cloud PACS at your premises. For broader PACS, RIS and HIS requirements, we scope a solution to your needs.",
      },
      {
        question: "How are software solutions priced?",
        answer: "Software is priced as per requirement. Share your needs and we will prepare a quotation.",
      },
      {
        question: "What does the cloud PACS installation need on our side?",
        answer:
          "A system at your premises that is networked with your imaging modalities and has internet access.",
      },
    ],
    related: ["ct-reporting", "mri-reporting", "x-ray-reporting", "radiologist-staffing"],
  },
  {
    slug: "pre-reads",
    name: "Pre-Reads",
    nameInSentence: "pre-reads",
    icon: "clock",
    serviceType: "Radiology pre-reads",
    requirement: "Pre-Reads",
    metaTitle: "Radiology Pre-Reads Service",
    metaDescription:
      "Radiology pre-reads for hospitals and diagnostic centres, scoped to your workflow and delivered through Mark Imaging's network of verified radiologist groups.",
    h1: "Radiology pre-reads, scoped to your workflow",
    lede: "Pre-reads delivered by verified radiologists from Mark Imaging's partner network, defined around how your department works.",
    summary: "Pre-reads by verified radiologists, scoped to your workflow.",
    intro: [
      "In radiology, a pre-read is an initial review of a study by a radiologist, carried out before the final report is issued or as an input to another clinician's review. How pre-reads are used varies from one institution to another.",
      "Mark Imaging offers pre-reads as one of its radiology services. The scope, modalities and workflow are defined with you during the requirement discussion, so the service fits the way your department already operates.",
    ],
    whatItIs: {
      heading: "How pre-reads fit into your department",
      paragraphs: [
        "Because pre-read workflows differ between organisations, we do not apply a single fixed model. We start by understanding where a pre-read adds value in your process and agree the details in the contract.",
        "Pre-reads run through the same cloud PACS set-up as our other reporting services, with patient history updated for each study.",
      ],
    },
    audience: [
      {
        title: "Hospitals",
        description: "Add an initial radiologist review into departmental workflows where it is useful.",
      },
      {
        title: "Diagnostic centres",
        description: "Use pre-reads alongside your existing reporting arrangements.",
      },
      {
        title: "Healthcare organisations",
        description: "Define a pre-read model that matches your internal review processes.",
      },
    ],
    benefits: [
      {
        title: "Defined around you",
        description: "Scope and workflow are agreed during onboarding rather than imposed.",
      },
      {
        title: "Verified radiologists",
        description: "Pre-reads are performed by radiologists who have passed strict verification.",
      },
      {
        title: "One partner for everything else",
        description: "Combine pre-reads with reporting, second opinions, staffing and software.",
      },
    ],
    steps: onboarding.slice(0, 3).concat({
      title: "Pre-reads begin",
      description: "Pre-reads run according to the scope agreed in your contract, coordinated by your relationship manager.",
    }),
    why: [networkWhy, verificationWhy, rmWhy],
    faqs: [
      {
        question: "What is a radiology pre-read?",
        answer:
          "A pre-read is an initial review of an imaging study by a radiologist. How it is used varies by institution, so Mark Imaging defines the scope with each client.",
      },
      {
        question: "Which modalities are covered for pre-reads?",
        answer:
          "Modalities and scope are agreed during the requirement discussion. Tell us what you need and we will confirm what can be offered.",
      },
      {
        question: "Can pre-reads be combined with full reporting?",
        answer:
          "Yes. Pre-reads can sit alongside CT, MRI and X-ray reporting, second opinions and staffing under one engagement.",
      },
    ],
    related: ["ct-reporting", "mri-reporting", "second-opinion-reporting", "radiologist-staffing"],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServices(slugs: ServiceSlug[]): Service[] {
  return slugs.map((s) => getService(s)).filter((s): s is Service => Boolean(s));
}
