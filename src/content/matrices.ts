import type { EvidenceSlug, FamilySlug, Fit, OfferingSlug, ProductFit, SegmentSlug } from "./types";

/* The three fit matrices from the GTM Atlas (section 06), transcribed from
   the rendered pages. Rows follow the website's Solutions order (0.1–0.8).
   Every "who leads with what" statement on the site is derived from here —
   never typed into a page. */

export const SEGMENT_ORDER: SegmentSlug[] = [
  "government",
  "municipal",
  "regulators",
  "enterprise",
  "foundations",
  "universities",
  "newsrooms",
  "legislatures",
];

export const FAMILY_ORDER: FamilySlug[] = [
  "civic-data",
  "govtech-workflow",
  "compliance-regtech",
  "research-policy",
  "narrative-media",
  "fundraising-csr",
];

export const OFFERING_ORDER: OfferingSlug[] = [
  "briefing",
  "bootcamp",
  "record-model-workshop",
  "dpdp-readiness-assessment",
  "methodology-audit",
  "forward-deployed-analyst",
  "use-case-boost",
  "publytics-comply",
  "builders",
  "tracker-network",
  "fellowship",
];

export const EVIDENCE_ORDER: EvidenceSlug[] = [
  "trackers",
  "impact-studies",
  "method-standard",
  "benchmarks",
  "corrections",
  "refusal-log",
  "field-notes",
];

/** Matrix A — segment × product family. Columns follow FAMILY_ORDER. */
const A: Record<SegmentSlug, ProductFit[]> = {
  government: ["P", "S", "S", "P", "O", "O"],
  municipal: ["P", "P", "S", "S", "O", "O"],
  regulators: ["S", "S", "P", "S", "O", "O"],
  enterprise: ["-", "-", "P", "S", "O", "S"],
  foundations: ["O", "O", "S", "S", "O", "P"],
  universities: ["O", "-", "S", "P", "S", "O"],
  newsrooms: ["-", "-", "O", "P", "P", "O"],
  legislatures: ["P", "S", "S", "P", "O", "O"],
};

/** Matrix B — segment × service/programme. Columns follow OFFERING_ORDER. */
const B: Record<SegmentSlug, Fit[]> = {
  government: ["H", "H", "H", "M", "H", "H", "M", "M", "M", "M", "M"],
  municipal: ["H", "H", "H", "M", "M", "H", "L", "L", "H", "M", "M"],
  regulators: ["H", "H", "H", "H", "H", "H", "M", "L", "L", "M", "M"],
  enterprise: ["H", "H", "M", "H", "L", "M", "M", "M", "-", "-", "L"],
  foundations: ["H", "H", "H", "M", "H", "M", "M", "-", "M", "M", "H"],
  universities: ["H", "M", "M", "M", "H", "L", "L", "L", "H", "H", "H"],
  newsrooms: ["H", "M", "L", "M", "M", "L", "L", "-", "H", "M", "H"],
  legislatures: ["H", "H", "H", "M", "M", "M", "L", "-", "M", "H", "H"],
};

/** Matrix C — segment × evidence. Columns follow EVIDENCE_ORDER. */
const C: Record<SegmentSlug, Fit[]> = {
  government: ["H", "H", "H", "M", "H", "M", "M"],
  municipal: ["H", "H", "H", "M", "H", "M", "M"],
  regulators: ["H", "M", "H", "H", "H", "M", "M"],
  enterprise: ["L", "M", "M", "M", "H", "M", "M"],
  foundations: ["H", "H", "H", "M", "H", "H", "M"],
  universities: ["H", "M", "H", "H", "H", "M", "M"],
  newsrooms: ["H", "M", "H", "M", "H", "H", "M"],
  legislatures: ["H", "M", "H", "M", "H", "H", "M"],
};

export const productFit = (s: SegmentSlug, f: FamilySlug): ProductFit =>
  A[s][FAMILY_ORDER.indexOf(f)]!;
export const offeringFit = (s: SegmentSlug, o: OfferingSlug): Fit =>
  B[s][OFFERING_ORDER.indexOf(o)]!;
export const evidenceFit = (s: SegmentSlug, e: EvidenceSlug): Fit =>
  C[s][EVIDENCE_ORDER.indexOf(e)]!;

/** Segments that lead with (P) or expand into (S) a family. */
export function segmentsForFamily(f: FamilySlug): { segment: SegmentSlug; fit: ProductFit }[] {
  return SEGMENT_ORDER.map((segment) => ({ segment, fit: productFit(segment, f) }))
    .filter((r) => r.fit === "P" || r.fit === "S")
    .sort((a, b) => (a.fit === b.fit ? 0 : a.fit === "P" ? -1 : 1));
}

/** Segments for which a service or programme is a high or medium fit. */
export function segmentsForOffering(o: OfferingSlug): { segment: SegmentSlug; fit: Fit }[] {
  return SEGMENT_ORDER.map((segment) => ({ segment, fit: offeringFit(segment, o) }))
    .filter((r) => r.fit === "H" || r.fit === "M")
    .sort((a, b) => (a.fit === b.fit ? 0 : a.fit === "H" ? -1 : 1));
}

export const FIT_LABEL: Record<ProductFit, string> = {
  P: "Primary",
  S: "Secondary",
  O: "Optional",
  "-": "Not offered",
};
export const LEVEL_LABEL: Record<Fit, string> = {
  H: "High fit",
  M: "Medium fit",
  L: "Low fit",
  "-": "Not applicable",
};
