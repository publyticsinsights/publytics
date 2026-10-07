import type { Family, FamilySlug } from "./types";

/* Six product families. Each is a configuration of the shared core, which is
   why a second family costs less than the first. Prices are not published here:
   every family is scoped after a Record Model Workshop or a DPDP Readiness
   Assessment, and pilots are scoped to fit public low-value procurement lines. */

export const FAMILIES: Family[] = [
  {
    slug: "civic-data",
    index: "0.1",
    name: "Civic Data & Constituent Intelligence",
    system: "delivery",
    line: "A governed record of what was committed, what was delivered, and where.",
    summary:
      "A governed registry and relationship layer for departments, corporations and public offices that should not have to build one from scratch. Promises, schemes, beneficiaries, grievances and delivery events are joined to the registries an institution already runs, and can be queried in Tamil by district or ward.",
    does: [
      "Holds promises, schemes, beneficiaries and delivery events as typed records, joined to existing registries and dashboard feeds.",
      "Answers “what was committed, what was verified, where” by district or ward, in Tamil or English.",
      "Classifies petition and grievance themes across Tamil, English and code-mixed text, with a stated error rate.",
      "Keeps the record with the office when the officeholder changes — the public-office edition passes to the successor.",
    ],
    doesNot: [
      "Replace the dashboards, helplines or portals an institution already runs — it sits beneath them.",
      "Decide eligibility for any scheme or benefit.",
      "Profile or segment citizens for political purposes.",
    ],
    disclosure: {
      used: "Classification of petition and grievance themes, multilingual retrieval over civic records, and record matching across registries.",
      notDone:
        "It does not decide eligibility, prioritise individuals, or alter a source registry.",
      review:
        "A named officer reviews classifications below the stated confidence threshold and signs every published figure.",
    },
    model:
      "Fixed-scope pilot in one department, district or zone, then an annual subscription per department with district or ward add-ons.",
    timeline: "Pilot 8–12 weeks · department-wide rollout 6–9 months",
    availability: { status: "open", label: "Department, district and ward pilots open" },
    builtOn: [
      "PostgreSQL + PostGIS for ward geometry",
      "Local Government Directory (LGD) codes as the master key",
      "OpenG2P registry concepts",
      "Apache Superset for embedded views",
    ],
  },
  {
    slug: "govtech-workflow",
    index: "0.2",
    name: "GovTech Workflow & Identity",
    system: "delivery",
    line: "Service and grievance workflows whose every event becomes evidence.",
    summary:
      "Permit, grievance and service-request workflows with service-level clocks by district and ward, connected to existing public digital infrastructure rather than replacing it. Every case opened, routed, closed or breached becomes a delivery-event record in the evidence ledger.",
    does: [
      "Connects to existing grievance channels and portals, and turns their events into delivery records.",
      "Runs service-level clocks by district and ward, so a notified service has a visible compliance record.",
      "Verifies closure with photo, location or citizen confirmation, with a reopen path.",
      "Suggests Tamil grievance routing — as decision support only.",
    ],
    doesNot: [
      "Replace an existing grievance or permit platform where one is already in use.",
      "Issue identity, perform KYC or e-sign itself — it uses DigiLocker, API Setu and licensed e-sign providers.",
      "Determine eligibility or close a case without a named officer.",
    ],
    disclosure: {
      used: "Routing suggestions for Tamil and code-mixed grievances, and duplicate detection across channels.",
      notDone: "It does not close cases, determine eligibility, or decide entitlements.",
      review:
        "The receiving officer accepts or overrides every routing suggestion; overrides are logged.",
    },
    model:
      "Milestone-billed implementation after the record model is in place, then an annual run fee. Delivered with an implementation partner where scale requires one.",
    timeline: "4–9 months after the record model is in place",
    availability: {
      status: "in-scoping",
      label: "Scoped per engagement, with an implementation partner",
    },
    builtOn: [
      "eGov DIGIT public grievance modules",
      "DigiLocker and API Setu",
      "Aadhaar e-Sign through a licensed provider",
      "Existing state and central grievance systems via connectors",
    ],
  },
  {
    slug: "compliance-regtech",
    index: "0.3",
    name: "Compliance & Regtech",
    system: "obligation",
    line: "Show the regulator the discharge, not the intention.",
    summary:
      "Regulatory obligations held as typed, dated records — starting with the Digital Personal Data Protection Act and Rules, whose obligations apply from 13 May 2027. A live data map, processing register, DPIAs as versioned artefacts, and the evidence pack an auditor asks for, with provenance attached.",
    does: [
      "Maps DPDP Act and Rules obligations as typed, dated records against your actual processing — not a generic feed.",
      "Maintains a live data map and processing register.",
      "Produces Data Protection Impact Assessments as versioned artefacts, not documents.",
      "Records consent, purpose and retention as fields rather than as commitments.",
      "Generates the auditor evidence pack, with a stated error rate on every automated classification.",
    ],
    doesNot: [
      "Replace your legal counsel or provide legal advice.",
      "Act as a registered Consent Manager — it integrates with the consent records of those that are.",
      "Cover jurisdictions outside India, or operate without a named data protection officer on your side.",
    ],
    disclosure: {
      used: "Classification of personal data in data stores, retrieval across policies and filings, and anomaly detection on processing records.",
      notDone:
        "It does not determine whether you are compliant, produce legal advice, or file on your behalf.",
      review: "A named accountable person signs every assessment and every submission.",
    },
    model:
      "Entered through the DPDP Readiness Assessment, credited toward the first year. Annual subscription tiered by entity and data-store count; supervisory builds for regulators are scoped separately.",
    timeline: "Assessment 3–4 weeks · platform live 8–12 weeks",
    availability: { status: "open", label: "DPDP Readiness Assessments open now" },
    builtOn: [
      "Microsoft Presidio with recognisers for Aadhaar, PAN and Indian phone numbers",
      "OpenMetadata for the data map",
      "Integrations with existing Consent Manager records",
      "The core record model’s regulation and obligation types",
    ],
  },
  {
    slug: "research-policy",
    index: "0.4",
    name: "Research & Policy Intelligence",
    system: "accountability",
    line: "Trackers and research that survive a challenge.",
    summary:
      "Commissioned trackers and studies for schemes, commitments, assurances and service levels — published on announced dates under the Method Standard, with downloadable data, a named commissioning party, a stated error rate and a diff against the previous edition. The most widely shared family: it is the lead product for four of the eight institutions we serve.",
    does: [
      "Builds versioned trackers for named schemes, commitment sets, assurances or ward service levels.",
      "Publishes each edition on an announced date with its dataset, method, commissioning party and error rate.",
      "Runs field verification and legislative tracking with reproducible transforms.",
      "Co-publishes editions with research partners, with citable, reusable data.",
    ],
    doesNot: [
      "Score manifestos or rate political parties.",
      "Publish a figure without its provenance, or quietly revise one — corrections are permanent notices.",
      "Let the commissioning party edit findings; it controls the publication date, not the result.",
    ],
    disclosure: {
      used: "Coding of documents and Assembly answers, Tamil retrieval across sources, and anomaly detection in submitted data.",
      notDone: "It does not draw conclusions, assign blame, or publish without human sign-off.",
      review: "A named methods lead signs every edition; every correction names who issued it.",
    },
    model:
      "Per-edition fixed fee with the commissioning party named under the Method Standard, plus an optional annual data subscription.",
    timeline: "First edition 10–14 weeks · then on announced dates",
    availability: {
      status: "open",
      label: "Commissioned editions open · Publytics Tracker 1 publishes 31 Mar 2027",
    },
    builtOn: [
      "The publication engine and disclosure gate",
      "dbt for reproducible transforms",
      "ODK / KoboToolbox for field research",
      "data.gov.in OGD, PRS and Assembly records as sources",
    ],
  },
  {
    slug: "narrative-media",
    index: "0.5",
    name: "Narrative & Media Intelligence",
    system: "accountability",
    line: "Hear delivery failures early, in the languages people use.",
    summary:
      "Multilingual monitoring of how schemes and public services are discussed in Tamil media and public channels — linked to the delivery record, so what people say about a scheme can be read against what the data shows. For institutions finding service failures early, never for persuasion.",
    does: [
      "Monitors Tamil, English and code-mixed news and public channels by policy topic.",
      "Classifies scheme and service sentiment with a stated error rate.",
      "Links discourse to records: what is said about scheme X, read against its delivery data.",
      "Gives data desks Tamil-first monitoring with the method published.",
    ],
    doesNot: [
      "Operate as a political persuasion, targeting or influence system — excluded by the boundary.",
      "Profile individual citizens or journalists.",
      "Run on behalf of parties, candidates or campaigns.",
    ],
    disclosure: {
      used: "Tamil and code-mixed topic classification, sentiment classification, and retrieval across licensed and public sources.",
      notDone: "It does not generate or place content, target audiences, or profile individuals.",
      review:
        "An analyst reviews every report before it is shared; institutional-use-only guardrails are enforced in configuration.",
    },
    model:
      "Annual subscription by languages, sources and seats. Free tier for independent and nonprofit desks through Publytics for Builders.",
    timeline: "Live in 4–8 weeks",
    availability: { status: "in-scoping", label: "Scoped per engagement" },
    builtOn: [
      "Licensed news ingestion and public feeds",
      "The language layer’s Tamil classifiers",
      "Apache Superset for views",
    ],
  },
  {
    slug: "fundraising-csr",
    index: "0.6",
    name: "Fundraising & CSR Infrastructure",
    system: "accountability",
    line: "From CSR mandate to programme to verified outcome.",
    summary:
      "A donor and grant layer that connects a CSR mandate or grant to an accountable programme, with provenance on every reported number. It verifies outcomes and integrates with the grant platforms funders already use, rather than replacing them.",
    does: [
      "Links each CSR mandate or grant to programmes and to verified outcomes.",
      "Verifies programme outcomes with a stated method and error rate.",
      "Maps programmes to Schedule VII activities and supports impact-assessment evidence.",
      "Publishes impact studies under the Method Standard where the funder chooses to.",
    ],
    doesNot: [
      "Disburse funds or replace a grant-management system — it integrates with the one in use.",
      "Rate or rank implementing partners publicly without their knowledge.",
      "Report an outcome it has not verified.",
    ],
    disclosure: {
      used: "Extraction from programme reports, matching of reported outcomes to field evidence, and anomaly detection on submitted figures.",
      notDone:
        "It does not decide funding, score partners for funding decisions, or certify compliance with CSR law.",
      review:
        "A named verification lead signs every verified outcome; the funder approves what is published.",
    },
    model:
      "Per-programme verification fee, or an annual platform fee tiered by CSR spend under management and number of programmes.",
    timeline: "One programme 8–12 weeks · portfolio 4–6 months",
    availability: {
      status: "open",
      label: "Programme verification open · platform scoped per engagement",
    },
    builtOn: [
      "Integrations with existing grant platforms via CSV or API",
      "MCA CSR data for Schedule VII mapping",
      "ODK for field verification",
      "The evidence ledger and publication engine",
    ],
  },
];

export const familyBySlug = (slug: FamilySlug): Family => FAMILIES.find((f) => f.slug === slug)!;
