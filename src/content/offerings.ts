import type { Offering, OfferingSlug } from "./types";

/* Seven services (the way in) and four programmes (the reach).
   Bands are the published bands. The Forward-Deployed Analyst band and the
   credit rules are published here for the first time (GTM Atlas §03, §08).
   The Method Standard is an evidence item, not a programme — it lives in
   evidence.ts so it appears once. */

export const OFFERINGS: Offering[] = [
  {
    slug: "briefing",
    kind: "service",
    name: "The Briefing",
    shape: "90 minutes. Your problem, framed. No deck.",
    summary:
      "A working session on one commitment, obligation or figure your institution cannot evidence today. We frame the question, agree the dataset, and decide together whether a Bootcamp is worth running.",
    band: "Free",
    duration: "90 minutes",
    status: "open",
    statusLabel: "Open",
    outputs: [
      "One institutional question, framed precisely",
      "The dataset a Bootcamp would use",
      "A written note of what was agreed",
    ],
    for: "Every institution — it is the first step in every engagement.",
  },
  {
    slug: "bootcamp",
    kind: "service",
    name: "The Bootcamp",
    shape: "One day. Your own data. One working monitor by close.",
    summary:
      "One day on your institution’s own data, producing one working monitor — for example, district-wise delivery of one scheme, or ward-wise grievance closure — before the day ends. The fee is credited against what follows.",
    band: "₹2–4 L",
    credit: "100% credited against a pilot or annual subscription signed within 6 months.",
    duration: "1 day, after about 2 weeks for data access",
    status: "open",
    statusLabel: "Open",
    outputs: ["A working monitor on your own data", "A data-quality note", "A scoped next step"],
    for: "Government departments, corporations, regulators, enterprises and foundations proving the approach on their own data.",
  },
  {
    slug: "record-model-workshop",
    kind: "service",
    name: "Record Model Workshop",
    shape: "One week. Declares your record types and obligations.",
    summary:
      "A one-week workshop that declares your institution’s record types — promise, scheme, beneficiary, ward, grievance, delivery event, obligation — and the duties attached to them. The output becomes the specification annexed to the pilot work order.",
    band: "₹8–12 L",
    credit: "50% credited against the pilot.",
    duration: "1 week",
    status: "open",
    statusLabel: "Open",
    outputs: [
      "Declared record types and relationships",
      "An obligation register",
      "A pilot specification ready to annex to a work order",
    ],
    for: "Institutions moving from a Bootcamp to a pilot.",
  },
  {
    slug: "dpdp-readiness-assessment",
    kind: "service",
    name: "DPDP Readiness Assessment",
    shape: "3–4 weeks. Data map, DPIA, consent architecture, gap plan to 13 May 2027.",
    summary:
      "A fixed-scope assessment against the Digital Personal Data Protection Act and Rules: a data map, a Data Protection Impact Assessment, a consent and legitimate-use architecture, and a dated gap plan to 13 May 2027 — delivered as a live record, not a report.",
    band: "₹6–12 L",
    credit: "Credited toward the first year of Compliance & Regtech.",
    duration: "3–4 weeks",
    status: "open",
    statusLabel: "Open",
    outputs: [
      "Data map and processing register",
      "A DPIA as a versioned artefact",
      "Consent and legitimate-use architecture",
      "A dated gap plan to 13 May 2027",
    ],
    for: "Enterprises and GCCs, regulators, and departments holding large citizen datasets.",
  },
  {
    slug: "methodology-audit",
    kind: "service",
    name: "Methodology Audit",
    shape: "External review of your published tracker or dashboard, against the Method Standard.",
    summary:
      "An independent review of an existing tracker, dashboard or impact report against the five items of the Method Standard, before it is cited in an Assembly, a board paper or a grant report. It is also the route to certification.",
    band: "₹4–8 L",
    duration: "2–4 weeks per edition",
    status: "open",
    statusLabel: "Open",
    outputs: [
      "Item-by-item findings against the Method Standard",
      "A remediation list",
      "Certification where every item passes",
    ],
    for: "Departments, corporations, foundations and research centres that already publish figures.",
  },
  {
    slug: "forward-deployed-analyst",
    kind: "service",
    name: "Forward-Deployed Analyst",
    shape: "One person, embedded, building in the product.",
    summary:
      "One analyst embedded with your team during a pilot and rollout, keeping the evidence ledger current and answering the questions that arrive — an Assembly question, an RTI, a board query — from the record.",
    band: "₹2.5–4.5 L per analyst-month",
    credit: "Minimum engagement of 6 months.",
    duration: "6–12 months",
    status: "open",
    statusLabel: "Open",
    outputs: [
      "A current evidence ledger",
      "Answers to institutional queries, sourced",
      "Capacity that stays when the engagement ends",
    ],
    for: "Institutions in pilot or rollout, particularly through peak periods such as the monsoon season or a budget session.",
  },
  {
    slug: "use-case-boost",
    kind: "service",
    name: "Use Case Boost",
    shape: "High-touch acceleration for your own team.",
    summary:
      "For institutions with an in-house data team building their own use case on the platform: a short, high-touch engagement that gets the first use case into production with the method attached.",
    band: "₹5–10 L",
    duration: "4–6 weeks",
    status: "open",
    statusLabel: "Open",
    outputs: [
      "One use case in production",
      "Method and disclosure attached",
      "A handover to your team",
    ],
    for: "Institutions with their own data team, such as a state e-governance agency or a GCC analytics unit.",
  },
  {
    slug: "publytics-comply",
    kind: "programme",
    name: "Publytics Comply",
    shape: "The compliance perimeter, rented.",
    summary:
      "Every company selling software to a state department carries the same fixed cost: DPDP obligations, data residency, state procurement security conditions and departmental audit. Comply is that perimeter, already built and reviewed — the vendor’s product runs inside it, and the department’s audit burden falls.",
    band: null,
    duration: "Vendor onboarding 4–6 weeks",
    status: "in-scoping",
    statusLabel: "In scoping",
    outputs: [
      "A pre-reviewed DPDP, residency and security perimeter",
      "Audit evidence generated automatically",
      "Procurement-ready contract templates",
    ],
    for: "Software vendors selling into government departments, and the departments that buy from them.",
  },
  {
    slug: "builders",
    kind: "programme",
    name: "Publytics for Builders",
    shape: "For the organisations that cannot pay.",
    summary:
      "Newsrooms, student researchers, district-level bodies and small civic organisations use the platform free or near free, with capped usage. Their work builds the evidence base this category does not yet have.",
    band: "Free tier",
    duration: "Onboarding 1–2 weeks",
    status: "open",
    statusLabel: "Open",
    outputs: [
      "Access to public trackers and datasets",
      "Capped platform use",
      "A paid tier for API and volume when needed",
    ],
    for: "Individuals, student researchers, district bodies, newsrooms and small civic organisations.",
  },
  {
    slug: "tracker-network",
    kind: "programme",
    name: "The Tracker Network",
    shape: "Run your own edition, on our standard.",
    summary:
      "The method, packaged and licensed, so an institution in another state publishes its own tracker against the same Method Standard — comparable across states, without Publytics opening an office anywhere. Certification runs through the Methodology Audit.",
    band: null,
    duration: "First licensed edition 8–12 weeks",
    status: "open",
    statusLabel: "Open",
    outputs: [
      "A licensed tracker edition",
      "The shared benchmark and Method Standard",
      "Comparability with every other edition in the network",
    ],
    for: "Monitoring agencies, corporations, legislatures and research centres outside Tamil Nadu.",
  },
  {
    slug: "fellowship",
    kind: "programme",
    name: "The Fellowship",
    shape: "A year on real institutional work, with your name on what you publish.",
    summary:
      "A fellow embedded for a year in a department’s monitoring cell, a corporation’s grievance cell, a newsroom or a research centre — building in the product, with their name on what is published. It builds capacity that survives officer transfers. Free to the fellow; sponsored by an institution or a CSR programme.",
    band: "Free to the fellow",
    duration: "12 months per cohort",
    status: "open",
    statusLabel: "Applications open",
    outputs: [
      "One fellow, embedded for 12 months",
      "Published work under the fellow’s name",
      "Institutional capacity that stays",
    ],
    for: "Graduates and early-career researchers; host institutions and CSR sponsors.",
  },
];

export const SERVICES = OFFERINGS.filter((o) => o.kind === "service");
export const PROGRAMMES = OFFERINGS.filter((o) => o.kind === "programme");
export const offeringBySlug = (slug: OfferingSlug): Offering =>
  OFFERINGS.find((o) => o.slug === slug)!;

/** The credit ladder: one way in, for every institution. */
export const LADDER: { step: string; title: string; band: string; note: string; href?: string }[] =
  [
    { step: "01", title: "Briefing", band: "Free", note: "90 minutes", href: "/services/briefing" },
    {
      step: "02",
      title: "Bootcamp",
      band: "₹2–4 L",
      note: "100% credited within 6 months",
      href: "/services/bootcamp",
    },
    {
      step: "03",
      title: "Record Model Workshop or DPDP Readiness Assessment",
      band: "₹8–12 L · ₹6–12 L",
      note: "Credited against what follows",
      href: "/services/record-model-workshop",
    },
    {
      step: "04",
      title: "Pilot",
      band: "Scoped",
      note: "Within the public low-value line",
      href: "/engage",
    },
    {
      step: "05",
      title: "Annual platform",
      band: "By institution",
      note: "Annual price written into the pilot",
      href: "/engage",
    },
    {
      step: "06",
      title: "Expand",
      band: "Configuration",
      note: "A second family or department",
      href: "/products",
    },
  ];
