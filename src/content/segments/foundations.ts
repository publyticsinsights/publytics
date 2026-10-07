import type { Segment } from "../types";
import { SEGMENT_META } from "./meta";

export const foundations: Segment = {
  ...SEGMENT_META.foundations,
  context: [
    "Companies obligated under Companies Act s.135 spent ₹29,988 Cr on CSR in FY2022-23, of which ₹1,562 Cr went to Tamil Nadu (MCA data via Lok Sabha, Feb 2025). Within Tamil Nadu, CSR is concentrated in Chennai and Coimbatore, with about 1% reaching aspirational districts (Sattva).",
    "Companies with an average CSR obligation of ₹10 Cr or more must commission an independent impact assessment for every project of ₹1 Cr or more (CSR Rule 8(3)). The cost may be booked up to 2% of the year's CSR spend or ₹50 L, whichever is higher (Rule 8(3)(c)).",
    "Money flows are recorded in CSR-2 filings and annual reports; outcomes are not. They arrive from grantees as self-reported spreadsheets and PDFs, often in Tamil, without a source, method or verifier attached.",
    "Beneficiary data on children, health and self-help-group members now carries DPDP obligations, including verifiable parental consent for children, for both the foundation and its NGO partners, ahead of full enforcement in May 2027.",
  ],
  pains: [
    {
      title: "Impact assessments that cannot be re-checked",
      body: "Statutory impact assessments under Rule 8(3) are one-off consultant reports, commissioned a year after completion. They cannot be re-checked and do not feed the next funding decision.",
    },
    {
      title: "Grantee data without provenance",
      body: "Outcome data arrives in inconsistent spreadsheets and PDFs, often in Tamil, with no source, method or verifier attached. Programme officers spend reporting cycles reconciling data instead of managing programmes.",
    },
    {
      title: "Portfolio blind spots",
      body: "There is no ward-, village- or district-level view of where CSR money lands against need. In Tamil Nadu, CSR is concentrated in Chennai and Coimbatore, with about 1% reaching aspirational districts (Sattva).",
    },
    {
      title: "Tools that manage money, not evidence",
      body: "Grant-management platforms and spreadsheets handle the money and the workflow. None publishes a method, an error rate or corrections for the outcomes reported.",
    },
    {
      title: "New obligations on beneficiary data",
      body: "Data on children, health and self-help-group members triggers DPDP obligations, including verifiable parental consent for children, for both the foundation and its NGO partners.",
    },
  ],
  solution:
    "Publytics delivers the Accountability System to grant-makers. Fundraising & CSR Infrastructure links each mandate, grant and milestone to a verified outcome with provenance. Research & Policy Intelligence produces independent trackers and impact studies under the Method Standard that meet the Rule 8(3) impact-assessment requirement and can be published. Tamil-first field capture reduces the reporting burden on grantees, and the Obligation System covers DPDP for beneficiary data.",
  products: [
    {
      family: "fundraising-csr",
      useCase:
        "The donor and grant layer: CSR mandate → Annual Action Plan → grant → milestone → verified outcome, each with source, method, verifier and date. Covers grantee onboarding with Tamil-first capture, portfolio and district views, and board-ready CSR annual-report and impact-assessment annexures.",
      timeline: "Pilot on one programme in 8–12 weeks; full portfolio rollout in 4–6 months",
    },
    {
      family: "compliance-regtech",
      useCase:
        "DPDP for beneficiary data held by the foundation and its NGO partners: data map, children's data and verifiable parental consent, retention and breach workflow, with a light portfolio-wide tier for grantees.",
      timeline: "Assessment in 3–4 weeks; live in 6–8 weeks",
    },
    {
      family: "research-policy",
      useCase:
        "Independent commissioned trackers and impact studies, such as outcomes across a CSR portfolio in Tamil Nadu districts, structured as the statutory Rule 8(3) impact assessment and publishable under the Method Standard.",
      timeline: "8–16 weeks per edition",
    },
    {
      family: "civic-data",
      useCase:
        "Where a foundation co-funds a government partnership, such as a district education or health programme, it funds a district-level registry and service-delivery record so the programme's outcomes are verifiable inside the state system.",
      timeline: "Pilot of about 3 months; scale-up decided by government",
    },
    {
      family: "govtech-workflow",
      useCase:
        "Philanthropic funding of a government grievance or service workflow tied to a funded programme, such as scheme-entitlement follow-up for self-help-group members. Relevant only where the foundation underwrites state digital infrastructure.",
      timeline: "6–9 months implementation",
    },
    {
      family: "narrative-media",
      useCase:
        "Tamil-language monitoring of public discourse on the funded issue — water, school learning or women's livelihoods — to inform strategy and advocacy, without political persuasion work.",
      timeline: "4–6 weeks setup",
    },
  ],
  offerings: [
    {
      offering: "briefing",
      use: "90 minutes with the Head of Impact or CSR: the latest CSR annual-report annexure and impact assessments read against the evidence chain (committed → verified → by whom → when → limits).",
    },
    {
      offering: "bootcamp",
      use: "One day on one programme's real grantee data, ending with one working outcome monitor carrying provenance chips.",
    },
    {
      offering: "record-model-workshop",
      use: "One week declaring the foundation's record types (mandate, grant, milestone, outcome, beneficiary cohort, verifier) and obligations; the prerequisite for portfolio rollout.",
    },
    {
      offering: "methodology-audit",
      use: "External review of the foundation's existing impact dashboard or published impact numbers against the Method Standard. A low-risk first step that also shows which gaps the platform closes.",
    },
    {
      offering: "fellowship",
      use: "Foundations sponsor fellow-years embedded on real institutional work, such as a district education or water programme, building public-interest data talent with the fellow's name on what is published.",
    },
    {
      offering: "dpdp-readiness-assessment",
      use: "For foundations holding children's, health or livelihood beneficiary data: data map, DPIA, consent architecture including parental consent, and a gap plan to May 2027 for the foundation and key grantees.",
    },
    {
      offering: "forward-deployed-analyst",
      use: "One analyst embedded with the MEL team through the first reporting or impact-assessment cycle, onboarding grantees and maintaining the evidence ledger.",
    },
    {
      offering: "use-case-boost",
      use: "After the first year, acceleration for the foundation's own MEL team to run verification and publication in-house.",
    },
    {
      offering: "builders",
      use: "Foundations can underwrite free or near-free access for smaller NGO grantees, district bodies or student researchers, extending the evidence layer across the portfolio.",
    },
    {
      offering: "tracker-network",
      use: "National funders can license the Tamil Nadu tracker method so partner institutions in other states publish on the same Method Standard.",
    },
  ],
  evidence: [
    {
      type: "trackers",
      receives:
        "Versioned, dated trackers with downloadable data, a named commissioning party and a stated error rate. Funders see the publication standard their own portfolio outputs would meet.",
      when: "First edition 31 Mar 2027",
    },
    {
      type: "impact-studies",
      receives:
        "One named institution, one number, on the record. A funder can commission one as its statutory impact assessment, and it becomes a citable reference.",
      when: "Scheduled; 8–16 weeks per commissioned study (estimate)",
    },
    {
      type: "method-standard",
      receives:
        "The open 5-item checklist (v1.0, 4 Sep 2026): source and method, funder named, version history, plain-language limits, download and reuse terms. Funders can require it of grantees at no cost.",
      when: "Available now",
    },
    {
      type: "benchmarks",
      receives:
        "Named baselines, including the Tamil civic evaluation set, showing how accurately Tamil and code-mixed field data is classified and summarised.",
      when: "In preparation",
    },
    {
      type: "corrections",
      receives:
        "A stated error rate on every outcome figure and permanent correction notices at the original URL, so the board can defend the numbers in the annual report.",
      when: "Live with each deliverable",
    },
    {
      type: "refusal-log",
      receives:
        "A dated, anonymised record of declined engagements and the criteria used, as evidence of independence and non-partisanship (no contestants, no political persuasion).",
      when: "Live",
    },
    {
      type: "field-notes",
      receives:
        "Fortnightly notes from Tamil Nadu institutional work, useful to programme officers for district context.",
      when: "Fortnightly",
    },
  ],
  measures: [
    "Share of reported outcomes carrying full provenance (source, method, verifier, date, error rate): at least 90% of the portfolio in year 1.",
    "Time to produce the board-ready CSR annual-report annexure and Rule 8(3) impact-assessment evidence: from weeks to days.",
    "Grantee reporting burden, in hours per reporting cycle per NGO: reduced by at least 30%.",
    "District and village coverage: the share of CSR spend mapped to verified outcomes by district, including aspirational districts.",
    "Published corrections, and zero unresolved challenges to published outcome numbers.",
  ],
  path: [
    {
      title: "Briefing",
      body: "We read the foundation's CSR-2 or annual-report annexure and published impact assessment, then hold a 90-minute Briefing with the Head of Impact or CSR showing where the evidence chain breaks.",
      duration: "Weeks 0–3",
    },
    {
      title: "Bootcamp",
      body: "One day on one programme's grantee data, ending with a working outcome monitor carrying provenance chips.",
      duration: "Weeks 3–6",
    },
    {
      title: "First verified result",
      body: "A Methodology Audit of the existing impact dashboard, or evidence verification on one programme that falls under Rule 8(3) and counts toward its impact assessment.",
      duration: "4–12 weeks",
    },
    {
      title: "Record Model Workshop",
      body: "Declare grant, milestone, outcome, verifier and beneficiary record types across the portfolio, and agree publication terms.",
      duration: "1 week",
    },
    {
      title: "Annual Action Plan and approval",
      body: "The platform and impact-assessment line is written into the next financial year's Annual Action Plan for CSR Committee and board approval, followed by a service agreement with milestones and DPDP clauses.",
      duration: "Aligned to the Feb–Apr planning cycle (1–3 months)",
    },
    {
      title: "Portfolio rollout",
      body: "Grantees are onboarded with Tamil-first capture, with Builders access for small NGOs and an optional Forward-Deployed Analyst, ending in the first board-ready portfolio report.",
      duration: "4–6 months",
    },
    {
      title: "Publish and extend",
      body: "An impact study or tracker is published under the Method Standard. The work can extend to DPDP for beneficiary data, Fellowship sponsorship, co-funded government pilots and, for national funders, a Tracker Network licence.",
      duration: "Months 9–24",
    },
  ],
  entry:
    "Free Briefing on the latest CSR annexure → Methodology Audit of existing impact numbers, or evidence verification on one programme",
  cycle:
    "4–9 months, set by the Annual Action Plan and CSR Committee calendar (usually approved Feb–Apr for the coming financial year); 2–3 months for a Methodology Audit or a single-programme pilot",
  funding: [
    "Corporate foundations: the impact-assessment head under CSR Rule 8(3)(c), which allows up to 2% of the year's CSR spend or ₹50 L, whichever is higher.",
    "Corporate foundations: CSR administrative overheads, capped at 5% of CSR expenditure (Rule 7(1)), for the platform.",
    "Corporate foundations: monitoring, evaluation and learning lines inside individual project budgets in the board-approved Annual Action Plan (Schedule VII projects).",
    "Independent and family foundations: operating or MEL budgets, and field-building or public-goods grant lines.",
    "International donors pay for services under contract, so no FCRA grant route is needed for a commercial service.",
    "Large commissioned studies may be co-funded by several funders.",
  ],
  procurement: [
    {
      route: "Direct service agreement or limited RFP",
      detail:
        "A consultancy or service agreement, or a limited RFP (typically three quotes) run by the CSR or MEL team.",
    },
    {
      route: "Vendor due diligence",
      detail:
        "Incorporation, GST, PAN, references and a conflict-of-interest declaration; for impact assessment, independence from the implementing agency.",
    },
    {
      route: "CSR Committee approval",
      detail:
        "Approval inside the Annual Action Plan, usually given Feb–Apr for the coming financial year.",
    },
    {
      route: "Service agreement and invoicing",
      detail:
        "Milestone-linked payments, data-sharing and DPDP clauses, IP and publication terms, and GST invoices against milestones.",
    },
    {
      route: "Service provider, not implementing agency",
      detail:
        "Publytics is a commercial company, so it is paid as a service provider, not as a CSR-1-registered implementing agency.",
    },
    {
      route: "Independent foundations",
      detail:
        "A similar contract, with a programme-officer sponsor and sign-off by a grants or finance committee.",
    },
  ],
  roles: [
    {
      role: "Sponsor",
      who: "Foundation CEO or Executive Director; in corporate foundations, the CSR Head, with CSR Committee (board) approval inside the Annual Action Plan.",
    },
    {
      role: "Owner",
      who: "Head of Monitoring, Evaluation & Learning, Head of Impact, or a senior Programme Officer.",
    },
    {
      role: "Technical evaluation",
      who: "MEL data lead or foundation IT head: data model, grantee onboarding and DPDP posture.",
    },
    {
      role: "Approvals",
      who: "Finance and the statutory auditor, on whether the spend is CSR-eligible and under which head.",
    },
  ],
  faqs: [
    {
      q: "We already use a grant-management platform or spreadsheets. Do we have to replace them?",
      a: "No. Grant-management tools manage money and workflow. Publytics adds the evidence layer: source, method, verifier, date and error rate on each outcome, plus a publishable output. Data is imported from the system you already use.",
    },
    {
      q: "Can this be booked as CSR spend?",
      a: "Statutory impact assessment can be booked up to 2% of CSR spend or ₹50 L, whichever is higher (Rule 8(3)(c)), and platform or administrative costs fall within the 5% overhead cap (Rule 7(1)). The scope of work is drawn up to fit these heads, and your statutory auditor confirms the treatment.",
    },
    {
      q: "Our NGO partners cannot take on more reporting.",
      a: "Capture is Tamil-first and designed for field use, and it replaces existing spreadsheet requests rather than adding to them. Small grantees can receive free or near-free access through Publytics for Builders.",
    },
    {
      q: "Will publishing errors and limitations embarrass us?",
      a: "You decide what is published. Numbers with stated limits and a correction log are what boards, regulators and the media can check; a number nobody can check is a reputational liability.",
    },
    {
      q: "How is independence assured when the funder commissions the study?",
      a: "The commissioning party is named on every output, and impact assessments are kept independent of implementing agencies. A dated, anonymised refusal log records declined engagements and the criteria applied.",
    },
  ],
};
