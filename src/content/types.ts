/* ══════════════════════════════════════════════════════════════════════
   CONTENT MODEL
   Mirrors the commercial data model in the GTM Atlas (section 04):
   a SEGMENT buys PRODUCT FAMILIES, enters through SERVICES & PROGRAMMES,
   and is shown EVIDENCE. Every page on the site is rendered from these
   records, so a fact is stated once and every page that cites it agrees.

   Public-content rule: only published bands appear as prices. Internal
   estimates, target accounts, bookings and sales tactics from the Atlas
   never enter this layer.
   ══════════════════════════════════════════════════════════════════════ */

export type SystemId = "delivery" | "obligation" | "accountability";

export type FamilySlug =
  | "civic-data"
  | "govtech-workflow"
  | "compliance-regtech"
  | "research-policy"
  | "narrative-media"
  | "fundraising-csr";

export type OfferingSlug =
  | "briefing"
  | "bootcamp"
  | "record-model-workshop"
  | "dpdp-readiness-assessment"
  | "methodology-audit"
  | "forward-deployed-analyst"
  | "use-case-boost"
  | "publytics-comply"
  | "builders"
  | "tracker-network"
  | "fellowship";

export type EvidenceSlug =
  | "trackers"
  | "impact-studies"
  | "method-standard"
  | "benchmarks"
  | "corrections"
  | "refusal-log"
  | "field-notes";

export type SegmentSlug =
  | "government"
  | "municipal"
  | "regulators"
  | "enterprise"
  | "foundations"
  | "universities"
  | "newsrooms"
  | "legislatures";

/** Matrix A: P = primary (lead with it), S = secondary, O = optional, "-" = not offered. */
export type ProductFit = "P" | "S" | "O" | "-";
/** Matrices B and C: H = high fit, M = medium, L = low, "-" = not applicable. */
export type Fit = "H" | "M" | "L" | "-";

/** Lifecycle status of anything the site promises. Never implied, always stated. */
export type Status = "live" | "open" | "scheduled" | "in-preparation" | "in-scoping";

export interface Segment {
  slug: SegmentSlug;
  /** "0.1" … "0.8" — website Solutions-page order. */
  index: string;
  name: string;
  /** Short label for chips and nav, e.g. "Government". */
  short: string;
  /** Who this is: one line, e.g. "Departments, secretariats and state agencies". */
  kicker: string;
  /** One-sentence positioning line (the deep-dive's header line). */
  tagline: string;
  /** The question that starts every engagement, in the buyer's voice. */
  question: { quote: string; by: string };
  systems: SystemId[];
  /** 2–3 sentence public summary used on the hub card. */
  summary: string;
  /** Why now — dated, sourced public context. 2–4 short paragraphs. */
  context: string[];
  /** The five pains, each a short title + one or two sentences. */
  pains: { title: string; body: string }[];
  /** "The solution we give" — one paragraph. */
  solution: string;
  /** Product families as deployed for this segment (use case + typical timeline; NO prices). */
  products: { family: FamilySlug; useCase: string; timeline: string }[];
  /** Families explicitly not offered to this segment, with the reason in a few words. */
  notOffered?: { family: FamilySlug; reason: string }[];
  /** How each service/programme is used for this segment. Only include ones with H or M fit. */
  offerings: { offering: OfferingSlug; use: string }[];
  /** Evidence: what this buyer receives and when. */
  evidence: { type: EvidenceSlug; receives: string; when: string }[];
  /** "What you can hold us to" — the KPIs, phrased as measurable outcomes. */
  measures: string[];
  /** Public engagement path (the playbook, stripped of internal tactics). 5–8 steps. */
  path: { title: string; body: string; duration: string }[];
  /** Plain-language entry offer, e.g. "Free Briefing → credited Bootcamp → Record Model Workshop". */
  entry: string;
  /** Typical sales cycle stated publicly as an expectation, e.g. "6–12 months to a platform contract". */
  cycle: string;
  /** How work of this kind is typically funded (budget heads / sources), public and generic. */
  funding: string[];
  /** Procurement routes — public statutory facts only. */
  procurement: { route: string; detail: string }[];
  /** Roles involved in a decision (generic roles, never named people or institutions as prospects). */
  roles: { role: string; who: string }[];
  /** Objections reframed as public FAQs. */
  faqs: { q: string; a: string }[];
}

export interface Family {
  slug: FamilySlug;
  index: string;
  name: string;
  system: SystemId;
  /** One-line promise. */
  line: string;
  summary: string;
  does: string[];
  doesNot: string[];
  /** Disclosure triptych, generated per product. */
  disclosure: { used: string; notDone: string; review: string };
  /** How it is commercially shaped, without numbers. */
  model: string;
  /** Typical timeline, public. */
  timeline: string;
  /** Build wave from the Atlas roadmap, stated as availability. */
  availability: { status: Status; label: string };
  /** Open components it is assembled from (public credibility, not internal plan). */
  builtOn: string[];
}

export interface Offering {
  slug: OfferingSlug;
  kind: "service" | "programme";
  name: string;
  /** Fixed shape, one line. */
  shape: string;
  summary: string;
  /** Published band, or null when priced on scoping. */
  band: string | null;
  /** The credit rule, stated. */
  credit?: string;
  duration: string;
  status: Status;
  statusLabel: string;
  outputs: string[];
  /** Who it is for, short. */
  for: string;
}

export interface EvidenceType {
  slug: EvidenceSlug;
  index: string;
  name: string;
  kicker: string;
  rule: string;
  proves: string;
  status: Status;
  statusLabel: string;
}

/** A dated, sourced fact. The provenance chip renders from this record. */
export interface DatedFact {
  id: string;
  label: string;
  value: string;
  date: string;
  source: string;
  method: string;
  limitations?: string;
}
