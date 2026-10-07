import type { Segment } from "../types";
import { SEGMENT_META } from "./meta";

export const regulators: Segment = {
  ...SEGMENT_META.regulators,
  context: [
    "The Digital Personal Data Protection Rules, 2025 were gazetted on 13 Nov 2025 (PIB release, 14 Nov 2025). Consent Manager registration under Rule 4 comes into force on 13 Nov 2026; all other obligations, including the annual DPIA and audit for Significant Data Fiduciaries under Rule 13, apply from 13 May 2027. The maximum penalty under the Act is ₹250 crore.",
    "Regulators are themselves data fiduciaries: they hold complainant, appellant and licensee personal data. Section 44(3) of the DPDP Act amends section 8(1)(j) of the RTI Act, which adds personal-information reasoning to each information commission order.",
    "MeitY's Jan 2026 proposal to shorten the 18-month implementation window to 12 months had not been notified as of Sep 2026. Either way, a regulator's readiness is shown by a record that already exists, not by a plan to a date.",
  ],
  pains: [
    {
      title: "Returns arrive on a cycle, in formats that do not compare",
      body: "Self-declared returns arrive as PDF quarterly reports and scanned affidavits, so entity-level posture is invisible between cycles and peer comparison is manual.",
    },
    {
      title: "Backlogs without a public, versioned disposal record",
      body: "Appeals and complaints accumulate with no versioned record of disposal times.",
    },
    {
      title: "Data exists but is not a record",
      body: "Real-time monitoring feeds and portal filings are not linked to consent conditions, deviations, notices and orders, so they cannot be inspected as one chain.",
    },
    {
      title: "Tamil and code-mixed complaints cannot be read at volume",
      body: "Complaints from homebuyers, consumers and residents near industries arrive in Tamil and Tamil-English, and cannot be triaged, deduplicated or trend-analysed at scale.",
    },
    {
      title: "The regulator's own DPDP posture is undocumented",
      body: "Regulators are data fiduciaries for complainant and appellant data, and their own posture before 13 May 2027 is rarely written down as evidence.",
    },
  ],
  solution:
    "Publytics delivers the Obligation System (Compliance & Regtech as supervisory technology) on the shared platform core. Every regulated entity's obligations, filings, deviations, notices and orders become a typed, versioned record in the evidence ledger, with Tamil-first triage of complaints and anomaly flags reviewed by named officers. The Accountability System (Research & Policy Intelligence) then publishes supervisory trackers, such as disposal times and project delivery against registered timelines, that meet the Method Standard and can withstand a challenge.",
  products: [
    {
      family: "compliance-regtech",
      useCase:
        "A supervisory posture record that ingests returns, quarterly progress reports, continuous-monitoring feeds and orders into one comparable entity record. It flags late, missing or anomalous filings for officer review, keeps a live processing register for the regulator's own DPDP duties, and produces an inspection-ready evidence pack per entity.",
      timeline: "Pilot on one return type in 10–12 weeks; full rollout in 9–15 months",
    },
    {
      family: "civic-data",
      useCase:
        "A governed registry of the regulated population (promoters and projects, consent holders, licensees, cooperative societies) and of complainants and appellants, deduplicated across portals with Tamil transliteration.",
      timeline: "Pilot in 8–12 weeks; rollout in 4–6 months",
    },
    {
      family: "govtech-workflow",
      useCase:
        "Complaint and appeal intake, hearing scheduling, case routing and order publication workflows that connect to the regulator's existing portals instead of replacing them.",
      timeline: "6–9 months",
    },
    {
      family: "research-policy",
      useCase:
        "Published supervisory trackers, such as an information commission disposal-time tracker, a real-estate project-delay tracker or an industry-cluster compliance tracker, with versioned data and stated error rates.",
      timeline: "First edition in 10–16 weeks; then quarterly or half-yearly",
    },
    {
      family: "narrative-media",
      useCase:
        "Tamil-language monitoring of public complaints in news and social media, such as homebuyer distress, pollution incidents or power outages, as an early-warning input to officers. It is never used as evidence for an enforcement decision.",
      timeline: "Live in 6–8 weeks",
    },
    {
      family: "fundraising-csr",
      useCase:
        "A narrow fit: verifying the discharge of Corporate Environmental Responsibility or environmental-compensation commitments attached to consents or orders. It is not a core regulator need.",
      timeline: "6–10 weeks per programme",
    },
  ],
  offerings: [
    {
      offering: "briefing",
      use: "A 90-minute framing with the Chairperson or Secretary on one supervised population and one return type. No deck.",
    },
    {
      offering: "bootcamp",
      use: "One day on the regulator's own filings, such as one quarter of project progress reports, ending with one working monitor of late or missing filings.",
    },
    {
      offering: "record-model-workshop",
      use: "Declares the regulator's record types (entity, obligation, filing, deviation, notice, order) and the statutory obligations behind them. This is the blueprint for the supervisory build.",
    },
    {
      offering: "dpdp-readiness-assessment",
      use: "Covers the regulator's own complainant, appellant and licensee data: the data map, DPIA, consent and purpose architecture, RTI section 8(1)(j) handling after the DPDP amendment, and a gap plan to May 2027.",
    },
    {
      offering: "methodology-audit",
      use: "An external review, against the Method Standard, of the regulator's existing public dashboards or statistics, such as continuous-monitoring public data, project dashboards or annual-report figures.",
    },
    {
      offering: "forward-deployed-analyst",
      use: "One analyst embedded with the enforcement or monitoring team during pilot and rollout, building monitors inside the product.",
    },
    {
      offering: "use-case-boost",
      use: "High-touch acceleration for a regulator's in-house or NIC team that is building one supervisory use case itself.",
    },
    {
      offering: "tracker-network",
      use: "Makes a proven supervisory tracker available to real-estate regulators or information commissions in other states, on the same Method Standard.",
    },
    {
      offering: "fellowship",
      use: "A sponsor-funded fellow embedded for a year in a regulator's monitoring cell, with their name on published trackers.",
    },
  ],
  evidence: [
    {
      type: "trackers",
      receives:
        "Versioned supervisory trackers with downloadable data, the commissioning party named, a stated error rate and a diff against the previous edition. This is the public face of the supervisory record.",
      when: "Publytics' first edition 31 Mar 2027; regulator-commissioned editions in 10–16 weeks",
    },
    {
      type: "impact-studies",
      receives:
        "One regulator, one number on the record, such as median appeal-disposal days or the share of projects filing on time, before and after.",
      when: "Scheduled; 6–12 months after go-live",
    },
    {
      type: "method-standard",
      receives:
        "An open five-item checklist the regulator can adopt for its own published statistics: source, funder, version history, limitations and reuse terms.",
      when: "Available now (v1.0, 4 Sep 2026)",
    },
    {
      type: "benchmarks",
      receives:
        "Named baselines, including the Tamil civic evaluation set, showing classification accuracy on Tamil and code-mixed complaints before AI triage is trusted.",
      when: "In preparation",
    },
    {
      type: "corrections",
      receives:
        "A stated error rate on every published figure and a permanent correction notice at the original URL, which quasi-judicial credibility depends on.",
      when: "Live register (none recorded yet)",
    },
    {
      type: "refusal-log",
      receives:
        "A record of the engagements Publytics declines, such as using AI for enforcement or eligibility decisions, or surveillance outside the mandate.",
      when: "Live",
    },
    {
      type: "field-notes",
      receives:
        "Fortnightly notes on the supervisory design problems Publytics is working on, usable as briefing material for officers.",
      when: "Fortnightly",
    },
  ],
  measures: [
    "Share of the regulated population with a live, comparable posture record: above 80% of one return type within a year of go-live.",
    "Median days from a filing deadline to a flag on a late, missing or anomalous return: measured in days, not in cycles.",
    "Backlog and median disposal time of complaints and appeals, published quarterly with version history.",
    "Share of published supervisory figures meeting all five Method Standard items, with zero uncorrected errors.",
    "Officer review rate of AI flags (100% human-reviewed) and Tamil triage accuracy against the published benchmark.",
  ],
  path: [
    {
      title: "First contact",
      body: "The conversation starts from a public question about the supervised population, such as a case backlog or delayed projects, raised with the regulator's leadership.",
      duration: "2–4 weeks",
    },
    {
      title: "Briefing",
      body: "A 90-minute framing with the Chairperson or Secretary on one supervised population and one return type. Together we agree a single question the regulator cannot answer today.",
      duration: "1 meeting",
    },
    {
      title: "Bootcamp",
      body: "One day on the regulator's own filings, ending with one working monitor. The Bootcamp fee is credited against the next purchase.",
      duration: "1 day, plus 1 week of preparation",
    },
    {
      title: "Diagnostic",
      body: "A DPDP Readiness Assessment or Record Model Workshop, procured under quotation or limited-tender limits. It delivers the record model and the list of obligations.",
      duration: "1–4 weeks",
    },
    {
      title: "Scoped pilot",
      body: "A Compliance & Regtech pilot on one return type, with a Forward-Deployed Analyst, hosted on NIC or a State Data Centre, with a CERT-In audit plan.",
      duration: "10–12 weeks",
    },
    {
      title: "Tender and build",
      body: "Where the regulator proceeds, it issues an outcome-based RFP under the Tamil Nadu Transparency in Tenders Act or GFR, informed by the pilot's results. If selected, Publytics builds the full supervisory record and workflows.",
      duration: "3–6 months to award; 9–15 months to build",
    },
    {
      title: "Publish",
      body: "The first supervisory tracker is published on the Method Standard, followed by a Methodology Audit of legacy dashboards.",
      duration: "The quarter after go-live",
    },
    {
      title: "Extend",
      body: "Further return types, a Research & Policy subscription and Narrative monitoring are added. Through the Tracker Network, the method can be made available to peer regulators in other states.",
      duration: "Years 2–3",
    },
  ],
  entry:
    "Free Briefing → DPDP Readiness Assessment or Record Model Workshop on one return type (both within quotation or limited-tender limits) → scoped Compliance & Regtech pilot",
  cycle:
    "Diagnostic in 1–4 weeks; 6–12 months to a first paid pilot; 12–18 months to a full supervisory build",
  funding: [
    "The regulator's own statutory fund or budget, such as the Real Estate Regulatory Fund under section 75 of the RERA Act, or the State Commission Fund under the Electricity Act.",
    "Consent fees and own funds of pollution control boards.",
    "State Finance Department grant-in-aid under the parent department's demand.",
    "For national bodies, their own budgets or MeitY grants.",
    "Co-funding from centrally sponsored schemes where relevant, such as cooperative PACS computerisation or NCAP and 15th Finance Commission air-quality grants.",
  ],
  procurement: [
    {
      route: "State regulators: Tamil Nadu Transparency in Tenders Act",
      detail:
        "The Tamil Nadu Transparency in Tenders Act 1998 and Rules 2000, via tntenders.gov.in. Procurements below ₹25 lakh are low-value (G.O. Ms. No.133, 10 Jul 2026); ₹25 lakh and above go to open e-tender. Section 16 exemptions apply to proprietary or single-source items and notified services.",
    },
    {
      route: "State regulators: nominated procurement agency",
      detail:
        "ELCOT is an optional nominated procurement agency (G.O. Ms. 58, 1999), which still tenders.",
    },
    {
      route: "Central bodies: GFR and GeM",
      detail:
        "Direct purchase up to ₹50,000; L1 among sellers above ₹50,000 up to ₹10 lakh; bid or reverse auction above ₹10 lakh (2024 amendment). Limited tender is allowed up to ₹50 lakh. RBI and SEBI run their own procurement policies and EoI/RFP routes.",
    },
    {
      route: "Paperwork",
      detail:
        "A data-residency clause, NIC, State Data Centre or MeitY-empanelled cloud hosting, a CERT-In empanelled security audit, a dated sub-processor list, an NDA covering regulated-entity data, and Publytics' stated DPDP posture, including what is not certified.",
    },
  ],
  roles: [
    {
      role: "Sponsor",
      who: "The Chairperson or Member-Secretary of the commission or authority; for central bodies, the Executive Director or Chief General Manager of supervision.",
    },
    {
      role: "Owner",
      who: "The Secretary or Deputy Director who owns returns and case management (enforcement, monitoring or IT), or the officer in charge of continuous monitoring.",
    },
    {
      role: "Technical evaluation",
      who: "The NIC state unit or state e-governance agency technical officer, with the regulator's CISO or IT head; security audit by a CERT-In empanelled auditor.",
    },
    {
      role: "Approvals",
      who: "The Legal Adviser (confidentiality of filings, quasi-judicial independence), Finance or the FA&CAO, the state Finance Department where the budget head sits, and the in-house or NIC portal team.",
    },
  ],
  faqs: [
    {
      q: "Our filings are confidential and our work is quasi-judicial. Can the data stay in our environment?",
      a: "Yes. Deployment is on NIC, a State Data Centre or MeitY-empanelled cloud, with residency written into the contract. Client data is never used to train models outside the client environment, and only what the regulator chooses goes through the publication engine.",
    },
    {
      q: "We already have a portal. Do we need another system?",
      a: "No. Integration is configuration: Publytics sits on top of existing portals and turns their filings into a comparable, versioned record. Nothing is replaced.",
    },
    {
      q: "Does AI make enforcement decisions?",
      a: "No, and the disclosure gate enforces this in code. AI only classifies, retrieves and flags anomalies; a named officer reviews every flag. Publytics declines eligibility or enforcement decisioning, and records those refusals in the refusal log.",
    },
    {
      q: "We have no budget head for this. How can we start?",
      a: "Start with a diagnostic sized to fit quotation or limited-tender limits and funded from the regulator's own fund. The pilot's results can then support the case for a budget line in the next financial year.",
    },
    {
      q: "What documentation accompanies a procurement?",
      a: "A data-residency clause, the hosting arrangement (NIC, State Data Centre or MeitY-empanelled cloud), a CERT-In empanelled security audit, a dated sub-processor list, an NDA covering regulated-entity data, and Publytics' stated DPDP posture, including what is not certified.",
    },
  ],
};
