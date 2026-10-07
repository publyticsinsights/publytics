import type { FamilySlug, SystemId } from "./types";

/* Three systems — the shape a buyer purchases. Colour is the SYSTEM KEY:
   used only on system tags, matrix headers and diagram strokes. It is
   deliberately distinct from the two reserved colours (live verdigris,
   seal red), which keep their single meanings. */

export interface System {
  id: SystemId;
  name: string;
  tag: string;
  line: string;
  body: string;
  families: FamilySlug[];
  /** CSS custom property holding the system key colour. */
  colour: string;
}

export const SYSTEMS: System[] = [
  {
    id: "delivery",
    name: "Delivery system",
    tag: "GovTech",
    line: "Know who you serve, and prove how you served them.",
    body: "Registries connected, cases routed and closed, service levels visible by district and ward, commitments tracked from announcement to commissioning.",
    families: ["civic-data", "govtech-workflow"],
    colour: "var(--sys-delivery)",
  },
  {
    id: "obligation",
    name: "Obligation system",
    tag: "RegTech",
    line: "Show the regulator the discharge, not the intention.",
    body: "Regulatory obligations held as typed, dated records — built around India’s compliance calendar and the DPDP obligations that apply from 13 May 2027.",
    families: ["compliance-regtech"],
    colour: "var(--sys-obligation)",
  },
  {
    id: "accountability",
    name: "Accountability system",
    tag: "Evidence",
    line: "Publish a number that survives a challenge.",
    body: "Commissioned trackers and research, multilingual narrative monitoring, and the verification layer that connects a CSR mandate to a programme outcome.",
    families: ["research-policy", "narrative-media", "fundraising-csr"],
    colour: "var(--sys-accountability)",
  },
];

export const systemById = (id: SystemId): System => SYSTEMS.find((s) => s.id === id)!;

/* The shared core — five layers every family addresses. The second purchase
   is configuration, not a new implementation. */

export interface CoreLayer {
  index: string;
  name: string;
  kicker: string;
  body: string;
  /** What Publytics owns outright versus assembles from open infrastructure. */
  ownership: "Proprietary" | "Assembled on open models";
}

export const CORE: CoreLayer[] = [
  {
    index: "0.1",
    name: "Civic record model",
    kicker: "One way to say “a promise”, in every department",
    body: "A typed model — promise, scheme, obligation, department, ward, grievance, delivery event, beneficiary, regulation — that all six product families address. Tamil and English labels at the schema, not the presentation layer.",
    ownership: "Proprietary",
  },
  {
    index: "0.2",
    name: "Evidence ledger",
    kicker: "Every fact carries the record of how we know it",
    body: "Source, collection method, version, effective date, confidence and error rate attach to the fact, not to the report. Corrections are permanent notices at the original address. No number renders without them.",
    ownership: "Proprietary",
  },
  {
    index: "0.3",
    name: "Language layer",
    kicker: "Tamil-first means benchmarked, not translated",
    body: "Retrieval, classification and summarisation over Tamil, Tamil–English code-mixing, dialect and transliterated civic text. Assembled on open Indic models; the Tamil civic evaluation set and its published benchmark are ours.",
    ownership: "Assembled on open models",
  },
  {
    index: "0.4",
    name: "Publication engine",
    kicker: "A date you can hold us to",
    body: "Ships a tracker on an announced date, versioned, with a diff against the previous edition and a machine-readable dataset that can be cross-listed on open-data portals.",
    ownership: "Assembled on open models",
  },
  {
    index: "0.5",
    name: "Disclosure gate",
    kicker: "A workflow that cannot produce its disclosure does not ship",
    body: "Where AI is used, what it does not do, and who reviews it — with the Method Standard checklist enforced as rules. A publish is blocked if any rule fails.",
    ownership: "Proprietary",
  },
];
