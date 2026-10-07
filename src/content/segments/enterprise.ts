import type { Segment } from "../types";
import { SEGMENT_META } from "./meta";

export const enterprise: Segment = {
  ...SEGMENT_META.enterprise,
  context: [
    "The Digital Personal Data Protection Rules, 2025 were gazetted on 13 Nov 2025 (PIB release, 14 Nov 2025), under the DPDP Act 2023. Consent Manager registration under Rule 4 comes into force on 13 Nov 2026. All other obligations apply from 13 May 2027, and the maximum penalty is ₹250 crore.",
    "From 13 May 2027, any entity notified as a Significant Data Fiduciary must also carry out an annual DPIA and an independent data-protection audit under Rule 13.",
    "MeitY's Jan 2026 proposal to shorten the 18-month window to 12 months had not been notified as of Sep 2026. The obligations are the same whichever date applies; what an inspection asks for is evidence that each control was verified, by whom and when.",
  ],
  pains: [
    {
      title: "No live record of processing",
      body: "Data maps are one-off consultant spreadsheets that go stale within a quarter and cannot be shown to the Data Protection Board as a running record.",
    },
    {
      title: "Global privacy stacks do not model DPDP",
      body: "Tools built for GDPR do not cover DPDP-specific items: notices in English or any Eighth Schedule language, Consent Manager interoperability, one-year inactivity erasure with 48-hour notice, and two-tier breach intimation (immediate, plus a 72-hour report).",
    },
    {
      title: "The section 17(1)(d) split is undocumented",
      body: "GCCs cannot say which flows qualify for the section 17(1)(d) exemption for foreign data processed under contract, and which are fully in scope, such as Indian employees, applicants, vendors and India-facing customers. They either over-comply or carry unknown exposure.",
    },
    {
      title: "SDF duties without an evidence trail",
      body: "Likely Significant Data Fiduciaries in health, credit and large consumer bases face an annual DPIA and independent audit from 13 May 2027, but no evidence trail links each control to who verified it and when.",
    },
    {
      title: "Tamil and code-mixed interactions are out of reach",
      body: "Customer interactions in Tamil and code-mixed language, from call centres, branch forms and WhatsApp, sit outside English-only discovery and classification tooling.",
    },
  ],
  solution:
    "Publytics' Obligation System gives an enterprise or GCC a live, India-specific DPDP record. It maps every processing activity, declares section 17(1)(d)-exempt versus in-scope flows, holds DPIAs, consent, purpose and retention as auditable fields, and produces an auditor evidence pack with provenance for each item ahead of 13 May 2027 and any SDF audit. The Accountability System then extends to the same company's CSR reporting and regulatory-change tracking.",
  products: [
    {
      family: "compliance-regtech",
      useCase:
        "A live DPDP data map and processing register, section 17(1)(d) scoping for GCC flows, DPIAs as artefacts, consent, purpose and retention fields, a breach-intimation workflow (immediate and 72-hour report), multilingual notices, and an auditor evidence pack for Board inquiries and the SDF annual audit. Entered through the fixed-scope DPDP Readiness Assessment.",
      timeline:
        "Assessment in 3–4 weeks; platform live in 8–12 weeks; steady state before 13 May 2027",
    },
    {
      family: "research-policy",
      useCase:
        "A regulatory-change tracker for Legal and Public Affairs covering DPDP Rules amendments, MeitY consultations, SDF notifications and sectoral (RBI, IRDAI, CERT-In) circulars, mapped to the client's obligations register.",
      timeline: "Live in 4–6 weeks after Compliance & Regtech go-live",
    },
    {
      family: "fundraising-csr",
      useCase:
        "For the company's CSR team, where the company is obligated under section 135: one portfolio record linking the CSR Annual Action Plan to verified programme outcomes, plus impact-assessment evidence for projects of ₹1 crore or more.",
      timeline: "Pilot on one programme in 8–12 weeks",
    },
    {
      family: "narrative-media",
      useCase:
        "Tamil, English and code-mixed monitoring of customer complaints, breach discussion and regulatory discourse about the brand, for example after an incident, feeding the breach-response and grievance playbook. Single-brand scope.",
      timeline: "4–6 weeks to set up",
    },
  ],
  notOffered: [
    {
      family: "civic-data",
      reason:
        "Enterprises and GCCs do not run constituent registries or public service delivery; community data needs are served through Fundraising & CSR Infrastructure.",
    },
    {
      family: "govtech-workflow",
      reason:
        "Not relevant to the enterprise buyer; Indian software firms selling into state departments are served through Publytics Comply.",
    },
  ],
  offerings: [
    {
      offering: "briefing",
      use: "A 90-minute session with the DPO or CISO: the organisation's DPDP exposure framed against the 13 May 2027 date and section 17(1)(d) scoping. No deck.",
    },
    {
      offering: "bootcamp",
      use: "One day on one real system, such as HR and applicant tracking or claims, ending with a working processing-register monitor. It proves the record model on the client's own data; the fee is credited against a later purchase.",
    },
    {
      offering: "dpdp-readiness-assessment",
      use: "The starting engagement: data map, DPIA, consent architecture, the section 17(1)(d) exempt-versus-in-scope split, and a gap plan to May 2027.",
    },
    {
      offering: "record-model-workshop",
      use: "One week declaring the client's record types (processing activity, purpose, consent, retention rule, processor, DPIA) and obligations. Used when the readiness gap plan shows a complex multi-entity estate.",
    },
    {
      offering: "forward-deployed-analyst",
      use: "One analyst embedded with the DPO office through go-live and the first audit cycle, maintaining the register and evidence pack.",
    },
    {
      offering: "use-case-boost",
      use: "High-touch acceleration so the client's own privacy and IT team can run DPIAs and evidence packs in-house after the first year.",
    },
    {
      offering: "publytics-comply",
      use: "Only for Indian software and IT-services firms selling into state departments: they operate inside a pre-built DPDP, residency and state-procurement security perimeter. Status: in scoping.",
    },
  ],
  evidence: [
    {
      type: "trackers",
      receives:
        "A public DPDP and regulatory-calendar view the client's Legal team can cite. Civic trackers show the publication engine working on announced dates.",
      when: "First edition 31 Mar 2027",
    },
    {
      type: "impact-studies",
      receives:
        "One enterprise, one number on the record, such as the days needed to produce an auditor evidence pack, before and after. Published with consent.",
      when: "After the first full audit cycle (about 9–12 months)",
    },
    {
      type: "method-standard",
      receives:
        "An open five-item checklist the client can apply, free of charge, to its own published ESG, BRSR and privacy figures.",
      when: "Available now (v1.0, 4 Sep 2026)",
    },
    {
      type: "benchmarks",
      receives:
        "Anonymised DPDP-readiness baselines across peer GCCs and BFSI firms, plus the Tamil civic evaluation set as evidence of Tamil and code-mixed classification accuracy for customer-data discovery.",
      when: "In preparation",
    },
    {
      type: "corrections",
      receives:
        "A stated error rate on every classification and a permanent correction log, so auditors and the DPO can see exactly how reliable automated data discovery is.",
      when: "Live with each deliverable",
    },
    {
      type: "refusal-log",
      receives:
        "Evidence of the boundary Publytics keeps, including no political work and no work for electoral contestants, which risk committees can review.",
      when: "Live",
    },
    {
      type: "field-notes",
      receives:
        "Fortnightly notes on the DPDP timeline: Rules amendments, SDF notifications and Board guidance.",
      when: "Fortnightly",
    },
  ],
  measures: [
    "Time to produce a complete auditor or Board evidence pack: from days to under 24 hours.",
    "Share of processing activities in a live register with owner, purpose, lawful basis, retention and section 17(1)(d) status: 95% or more before 13 May 2027.",
    "DPIAs completed and signed off for all high-risk processing before the first SDF audit window (from 13 May 2027).",
    "Data-principal requests (access, correction, erasure, grievance) closed within the client's SLA, with an audit trail.",
    "Breach drill: time to initial intimation and to the 72-hour Board report within the Rules' timelines, and zero material audit findings.",
  ],
  path: [
    {
      title: "Briefing",
      body: "A 90-minute session with the DPO or CISO framing the organisation's exposure against the May 2027 date, SDF audits and section 17(1)(d) scope.",
      duration: "Weeks 0–2",
    },
    {
      title: "Bootcamp",
      body: "One day on one live system, such as HR and applicant tracking, claims or loan origination, ending with a working processing-register monitor.",
      duration: "Weeks 2–5",
    },
    {
      title: "Readiness Assessment",
      body: "A fixed-scope assessment: data map, DPIA, consent architecture, the exempt-versus-in-scope split and a gap plan to 13 May 2027, presented to the CFO or General Counsel and the Risk Committee.",
      duration: "3–4 weeks",
    },
    {
      title: "Vendor onboarding",
      body: "NDA, registration on the buyer's procurement system, InfoSec review (SIG or CAIQ questionnaire), sub-processor list and residency clause, then MSA, SOW and DPA. Runs in parallel with the assessment.",
      duration: "4–8 weeks, in parallel",
    },
    {
      title: "Platform contract",
      body: "The gap plan becomes a Compliance & Regtech annual subscription, at the SDF tier where applicable. The Bootcamp fee is credited.",
      duration: "Months 2–4",
    },
    {
      title: "Go-live and dry-run audit",
      body: "Live register, DPIAs, consent and retention fields, and a breach-intimation drill, producing the first auditor evidence pack. A Forward-Deployed Analyst is added if needed.",
      duration: "8–12 weeks",
    },
    {
      title: "Audit cycle and renewal",
      body: "Support for the first independent DPDP audit (for SDFs, from 13 May 2027) and Board inquiries. An impact study is published with consent.",
      duration: "Months 9–12",
    },
    {
      title: "Extend",
      body: "Optional additions: Research & Policy Intelligence as a regulatory tracker, Fundraising & CSR Infrastructure for the CSR team, and Narrative monitoring. For GCCs, the record can be replicated to sister entities.",
      duration: "Months 12–24",
    },
  ],
  entry:
    "Free Briefing → optional one-day Bootcamp on one real system (credited) → DPDP Readiness Assessment (3–4 weeks) → Compliance & Regtech subscription",
  cycle:
    "DPDP Readiness Assessment in 3–4 weeks; 3–6 months to an annual subscription for Indian enterprises, 6–9 months where headquarters privacy or procurement sign-off is needed, and 9–12 months for public-sector banks buying through GeM or tender",
  funding: [
    "A Board- or Risk Committee-approved DPDP programme budget under legal and compliance operating expenditure, often co-funded from the CISO's IT-security budget.",
    "For RBI- and IRDAI-regulated entities, frequently part of IT-governance and outsourcing-risk spend.",
    "For GCCs, annual site operating expenditure under the cost-plus transfer-pricing model, recharged to the parent; spend above threshold needs headquarters privacy or procurement approval.",
    "Readiness assessments are usually booked as one-time advisory spend, and the platform as recurring software operating expenditure.",
  ],
  procurement: [
    {
      route: "Private procurement",
      detail:
        "Not a tender. NDA, then vendor registration on the buyer's procure-to-pay system (such as SAP Ariba or Coupa), InfoSec due diligence, then MSA, SOW and a Data Processing Agreement (a processor contract under DPDP section 8(2)), then a purchase order.",
    },
    {
      route: "InfoSec due diligence",
      detail:
        "SIG Lite or CAIQ questionnaire, ISO 27001 or SOC 2 evidence or compensating controls, a VAPT report, data-residency confirmation and a dated sub-processor list. Expect 4–8 weeks of InfoSec and legal review, run in parallel with the assessment.",
    },
    {
      route: "Regulated entities",
      detail:
        "RBI-regulated lenders also apply RBI IT-outsourcing vendor due diligence, and insurers apply the IRDAI outsourcing regulations.",
    },
    {
      route: "Public-sector banks",
      detail: "Buy through GeM or an open tender.",
    },
  ],
  roles: [
    {
      role: "Sponsor",
      who: "The CFO or General Counsel in an Indian enterprise; in a GCC, the Site Head or Managing Director, with sign-off from the headquarters global privacy office.",
    },
    {
      role: "Owner",
      who: "The Data Protection Officer, Head of Privacy or Chief Compliance Officer.",
    },
    {
      role: "Technical evaluation",
      who: "The CISO or Head of InfoSec, and the enterprise data architect (data discovery, identity and access, log retention).",
    },
    {
      role: "Approvals",
      who: "The headquarters global privacy office, procurement and vendor-risk, and the organisation's existing DPDP legal advisers.",
    },
  ],
  faqs: [
    {
      q: "Our headquarters already licenses a global privacy platform. Why add another?",
      a: "Global platforms are typically built for GDPR. Publytics covers only the India layer: DPDP Rules artefacts, notices in Eighth Schedule languages, Consent Manager interoperability, the section 17(1)(d) split and a DPDP-mapped evidence pack. It exports into the headquarters tool rather than replacing it.",
    },
    {
      q: "We are a GCC. Does section 17(1)(d) exempt us?",
      a: "Only for foreign data processed under contract. Indian employee, applicant and vendor data are fully in scope, and security safeguards and breach intimation apply regardless. The assessment documents exactly which flows are exempt, which usually narrows the compliance scope.",
    },
    {
      q: "Our law firm is already advising us on DPDP.",
      a: "Legal advisers give the opinion; Publytics keeps the running record they audit against. Publytics does not replace legal counsel, and a live evidence pack makes their review faster.",
    },
    {
      q: "Publytics also works with government. Is it secure enough for an enterprise?",
      a: "Data residency is written into the contract, the sub-processor list is published and dated, and client data is never used to train models outside the client environment. Publytics states openly what is and is not certified, with compensating controls for the InfoSec review.",
    },
    {
      q: "When do the DPDP obligations apply?",
      a: "The Rules were gazetted on 13 Nov 2025. Consent Manager registration under Rule 4 comes into force on 13 Nov 2026. All other obligations, including the annual DPIA and independent audit for Significant Data Fiduciaries under Rule 13, apply from 13 May 2027. The maximum penalty is ₹250 crore.",
    },
  ],
};
