import type { Segment, SegmentSlug } from "../types";
import { SEGMENT_ORDER } from "../matrices";

/* The light fields of each segment — enough for menus, search, cards and
   forms — kept apart from the full deep-dive content so that every page
   does not download all eight deep-dives. Each segment file spreads its
   record from here; nothing is stated twice.
   `systems` is the lead-system column of the Atlas commercial summary (Matrix D). */

export type SegmentMeta = Pick<
  Segment,
  "slug" | "index" | "name" | "short" | "kicker" | "tagline" | "question" | "systems" | "summary"
>;

export const SEGMENT_META: Record<SegmentSlug, SegmentMeta> = {
  government: {
    slug: "government",
    index: "0.1",
    name: "Government & public sector",
    short: "Government",
    kicker: "State departments, secretariats, directorates and state agencies",
    tagline:
      "Built around procurement, empanelment, residency and audit — not retrofitted enterprise SaaS.",
    question: {
      quote:
        "We have the announcement and the spend. We cannot produce the line between them, by ward, in Tamil, on the day someone asks.",
      by: "Secretary, State Department",
    },
    systems: ["delivery", "accountability"],
    summary:
      "State departments can report the announcement and the spend, but not the evidence chain between them. Publytics installs that chain beneath existing dashboards: what was committed, what was verified, by whom, when and with what stated limits, by district or ward and in Tamil. It is procured on state terms, with residency, an audit trail and named human review.",
  },
  municipal: {
    slug: "municipal",
    index: "0.2",
    name: "Municipal & urban bodies",
    short: "Municipal",
    kicker:
      "Municipal corporations, municipalities, town panchayats and the state bodies that run them",
    tagline:
      "Ward-level service delivery, grievance routing and civic records, built for the operating rhythm of local government.",
    question: {
      quote:
        "Complaints reach us through 1913, the app, councillors and social media, and they get closed. We cannot show, ward by ward, what was actually fixed, when and by whom.",
      by: "Commissioner, Municipal Corporation",
    },
    systems: ["delivery"],
    summary:
      "Urban local bodies need ward-level proof: complaints arrive in Tamil through many channels and are closed without verifiable resolution. Publytics gives a corporation a ward-typed civic record with verified closure, connected to its existing grievance systems. It then publishes ward service levels on announced dates, with evidence a councillor, auditor or citizen can check.",
  },
  regulators: {
    slug: "regulators",
    index: "0.3",
    name: "Regulators & supervisory bodies",
    short: "Regulators",
    kicker: "Statutory regulators, quasi-judicial commissions and supervisory bodies",
    tagline:
      "Hold a regulated population's compliance posture as a live, comparable, inspectable record.",
    question: {
      quote:
        "Returns arrive on a cycle, self-declared, in formats that resist comparison. We are supervising a population we cannot see.",
      by: "Supervisory body",
    },
    systems: ["obligation"],
    summary:
      "Regulators supervise thousands of entities through periodic, self-declared returns that arrive in formats that resist comparison. Publytics turns each regulated entity's obligations, filings, deviations, notices and orders into a typed, versioned record with provenance, with Tamil-first triage and anomaly flags reviewed by named officers. The regulator can then show, on demand, each entity's record and defend each published number against a challenge.",
  },
  enterprise: {
    slug: "enterprise",
    index: "0.4",
    name: "Enterprise & GCCs",
    short: "Enterprise",
    kicker: "Indian enterprises and Global Capability Centres that hold Indian personal data",
    tagline: "Show the regulator the discharge, not the intention.",
    question: {
      quote:
        "We have a policy. What we do not have is a record that would survive an inspection in May 2027.",
      by: "Compliance officer, GCC",
    },
    systems: ["obligation"],
    summary:
      "Insurers, NBFCs, banks, hospital chains and Global Capability Centres hold large volumes of Indian personal data. Most have a privacy policy and a GDPR-shaped tool at headquarters, but not a live, India-specific record of processing, consent and retention that would survive an inspection. Publytics keeps that record, and produces a dated, versioned evidence pack on demand.",
  },
  foundations: {
    slug: "foundations",
    index: "0.5",
    name: "Foundations & philanthropy",
    short: "Foundations",
    kicker:
      "Corporate CSR foundations, implementing trusts and independent or family philanthropies",
    tagline:
      "An evidence layer for grant-makers: every grant and milestone linked to a verified outcome with provenance.",
    question: {
      quote:
        "Our partners report outputs; the board asks for outcomes. We cannot show which programme produced which result — or how sure we are of it.",
      by: "Head of Impact, CSR foundation",
    },
    systems: ["accountability"],
    summary:
      "Money flows into CSR and philanthropic programmes are well recorded; the outcomes they buy are mostly self-reported by grantees and rarely verifiable. Publytics links each mandate, grant and milestone to a verified outcome record — source, method, verifier, date and error rate — in Tamil and English. The CSR committee and board can then sign off impact assessments and annual-report disclosures from a single evidence chain.",
  },
  universities: {
    slug: "universities",
    index: "0.6",
    name: "Universities & research",
    short: "Universities",
    kicker: "University departments, ICSSR-sponsored institutes, policy schools and think tanks",
    tagline:
      "A versioned, citable base of civic records for research on public programmes, with an open method to publish against.",
    question: {
      quote:
        "Every project rebuilds the same dataset from Tamil sources, and it dies with the grant. We need data we can cite, reuse — and disagree with.",
      by: "Centre head, research institute",
    },
    systems: ["accountability"],
    summary:
      "Research projects on public programmes rebuild the same government dataset from scattered orders, Assembly replies and Tamil-language notices, and the dataset ends with the grant. Publytics gives research institutions typed, versioned civic records with an evidence ledger and Tamil-first retrieval, and the open Method Standard as a publication checklist. Student researchers and small labs use it free through Publytics for Builders.",
  },
  newsrooms: {
    slug: "newsrooms",
    index: "0.7",
    name: "Newsrooms & media",
    short: "Newsrooms",
    kicker:
      "Data desks, investigative teams, fact-checkers, and Tamil and English dailies and TV channels",
    tagline:
      "Versioned trackers with downloadable data, a published method and stated error rates, plus Tamil-first monitoring, open to challenge in print.",
    question: {
      quote: "We need the dataset, the method, and the ability to disagree with you in print.",
      by: "Data editor",
    },
    systems: ["accountability"],
    summary:
      "Official figures conflict, primary sources are in Tamil, and desks lack the time and staff to rebuild the evidence chain before deadline. Publytics gives newsrooms versioned tracker datasets with method, commissioning party, stated error rate and edition diffs, plus Tamil-first monitoring through Publytics for Builders. Every challenge a newsroom raises is resolved through a published correction or a published defence.",
  },
  legislatures: {
    slug: "legislatures",
    index: "0.8",
    name: "Legislatures & public offices",
    short: "Legislatures",
    kicker:
      "Legislature secretariats, their committees, and MLA and MP offices acting as public offices",
    tagline:
      "An inspectable, Tamil-first record of what was promised, asked, routed and delivered, owned by the office and handed to the next officeholder.",
    question: {
      quote:
        "Assurances given on the floor, petitions handed in at the office — we cannot show what became of them, and the record leaves when the term ends.",
      by: "Legislature secretariat",
    },
    systems: ["delivery", "accountability"],
    summary:
      "Commitments made on the floor and citizen petitions handled by offices live in files, WhatsApp threads and staff memory, and the record leaves when the officeholder or staff changes. Publytics works only with the public office, paid from public funds and discharging public duties, to turn questions, assurances, petitions and constituency works into an inspectable, Tamil-first record owned by the office. The record passes to the office’s successor; nothing is built for campaigns, parties or candidates, and work pauses while the Model Code of Conduct is in force.",
  },
};

export const SEGMENT_LIST: SegmentMeta[] = SEGMENT_ORDER.map((slug) => SEGMENT_META[slug]);
