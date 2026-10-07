import type { EvidenceSlug, EvidenceType } from "./types";

/* Seven kinds of evidence. Status is stated, never implied: what is live is
   marked live; what is scheduled carries its date; what is in preparation says
   so. Evidence is free and public — it is how a young company earns trust. */

export const EVIDENCE: EvidenceType[] = [
  {
    slug: "trackers",
    index: "0.1",
    name: "Trackers",
    kicker: "Method-led public evidence products",
    rule: "Published on an announced date. Versioned. Downloadable data. Named commissioning party. Stated error rate. Diff against the previous edition.",
    proves: "Proves method",
    status: "scheduled",
    statusLabel: "Tracker 1 · 31 Mar 2027",
  },
  {
    slug: "impact-studies",
    index: "0.2",
    name: "Impact studies",
    kicker: "Outcomes, named and on the record",
    rule: "One named institution, one number, on the record — before and after. Never an anonymised “a leading department”.",
    proves: "Proves outcome",
    status: "scheduled",
    statusLabel: "Scheduled",
  },
  {
    slug: "method-standard",
    index: "0.3",
    name: "The Method Standard",
    kicker: "The checklist others can certify against",
    rule: "Five items, versioned and dated, with a change log. Open for anyone to apply to their own published work.",
    proves: "Proves the bar",
    status: "live",
    statusLabel: "v1.0 · 4 Sep 2026",
  },
  {
    slug: "benchmarks",
    index: "0.4",
    name: "Benchmarks",
    kicker: "Baselines declared with the task",
    rule: "Named baselines declared in the same document that defines the task — including the Tamil civic evaluation set, so a technical evaluator can check accuracy before acceptance.",
    proves: "Proves accuracy",
    status: "in-preparation",
    statusLabel: "In preparation",
  },
  {
    slug: "corrections",
    index: "0.5",
    name: "Error rates & corrections",
    kicker: "Published, unprompted",
    rule: "A stated error rate on every published figure. A correction notice stays permanently at the original URL, dated, with what was wrong and how it happened. The count is published.",
    proves: "Proves honesty",
    status: "live",
    statusLabel: "Policy live · none recorded",
  },
  {
    slug: "refusal-log",
    index: "0.6",
    name: "The refusal log",
    kicker: "Every engagement we declined",
    rule: "Anonymised, dated, with the criteria applied — so the boundary can be checked rather than believed.",
    proves: "Proves the boundary",
    status: "live",
    statusLabel: "Log open",
  },
  {
    slug: "field-notes",
    index: "0.7",
    name: "Field notes",
    kicker: "Observations from practice",
    rule: "Short notes on method and delivery data from implementation, standards work and institutional practice — circulated freely.",
    proves: "Proves practice",
    status: "open",
    statusLabel: "Fortnightly",
  },
];

export const evidenceBySlug = (slug: EvidenceSlug): EvidenceType =>
  EVIDENCE.find((e) => e.slug === slug)!;

/** The Method Standard v1.0 — the five items. */
export const METHOD_STANDARD = {
  version: "1.0",
  date: "4 Sep 2026",
  items: [
    {
      t: "Source and collection method disclosed",
      b: "Where the figure came from, and how it was collected — named, not described.",
    },
    {
      t: "Funding or commissioning party named",
      b: "Who paid for the output, or asked for it. A commissioning party controls the date, never the finding.",
    },
    {
      t: "Update date and version history visible",
      b: "When the output last changed, what changed, and every earlier version, reachable.",
    },
    {
      t: "Limitations stated in plain language",
      b: "What the figure cannot tell you, and its stated error rate — in words a non-specialist can use.",
    },
    {
      t: "Download format and reuse terms specified",
      b: "A machine-readable dataset and the terms on which anyone may reuse it.",
    },
  ],
  changelog: [{ version: "1.0", date: "4 Sep 2026", note: "First published version. Five items." }],
};

/** The criteria the refusal log applies. Drawn from the boundary policy. */
export const REFUSAL_CRITERIA = [
  "The buyer is a political party, a candidate, or a campaign — or is acting for one.",
  "The output would be used for political targeting, persuasion or voter profiling.",
  "The work concerns an election and would not be published openly.",
  "The engagement is with an officeholder personally rather than with the public office, or is not paid from public funds for public duties.",
  "The output could not carry its provenance, its limitations and a named reviewer.",
];
