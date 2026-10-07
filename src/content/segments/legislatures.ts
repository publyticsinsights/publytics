import type { Segment } from "../types";
import { SEGMENT_META } from "./meta";

export const legislatures: Segment = {
  ...SEGMENT_META.legislatures,
  context: [
    "The 17th Tamil Nadu Legislative Assembly was constituted on 11 May 2026, and its business is already published on NeVA. A new Assembly and staff turnover mean records leave with the officeholder or personal assistant unless they are held by the office.",
    "Pending assurances are a standing problem: 24% of 17th Lok Sabha assurances were still pending in January 2023.",
    "MLACDS provides ₹3.54 crore per constituency in 2026–27, about ₹828 crore a year across Tamil Nadu’s 234 constituencies, under new guidelines covering 2026–27 to 2030–31. These funds pay for development works, not office software, and works status is spread across district systems and eSAKSHI.",
    "Offices hold sensitive petitioner data, and DPDP enforcement begins in May 2027.",
  ],
  pains: [
    {
      title: "Floor commitments are not tracked to delivery",
      body: "Assurances, answers and announcements are recorded in proceedings, but status and evidence sit in department files, so committees and members chase updates manually.",
    },
    {
      title: "Petitions are rarely closed back to the citizen",
      body: "Constituency petitions arrive in Tamil on paper, by WhatsApp or in person, are forwarded to collectors or departments, and rarely return to the citizen with a dated outcome.",
    },
    {
      title: "No institutional memory across terms",
      body: "A new Assembly and staff turnover mean records leave with the officeholder or personal assistant.",
    },
    {
      title: "Constituency works are hard to see",
      body: "Sanctioned, started, completed and photographed status for MLACDS and MPLADS works is spread across district systems and eSAKSHI, and none of it is readily citable in Tamil.",
    },
    {
      title: "Sensitive data and fear of partisanship",
      body: "Offices handle petitioner data such as ID copies and health or welfare details without DPDP-grade handling, and fear any tool being seen as partisan.",
    },
  ],
  solution:
    "Publytics delivers the Accountability System (Research & Policy Intelligence) to track questions, assurances and constituency works from announcement to delivery, together with the Delivery System (a Civic Data & Constituent Intelligence public-office edition) as a Tamil-first petition and constituent-service record owned by the office. Every status carries provenance and a stated error rate. Publytics sells to institutions, never to contestants: contracts are with the office or Secretariat, paid from public funds for public duties, never with a party or candidate. The record transfers to the next officeholder, not to a campaign, and work in a constituency is suspended while the Model Code of Conduct is in force.",
  products: [
    {
      family: "civic-data",
      useCase:
        "Public-office edition: a Tamil-first petition and constituent-service register for each MLA or MP office, covering intake, routing to the collector or department, a dated outcome and closure back to the citizen. Owned by the office and handed over at term end; no voter-roll, party or campaign data.",
      timeline: "Pilot 6–8 weeks; live in 3 months (estimate)",
    },
    {
      family: "research-policy",
      useCase:
        "Legislative tracking: Assembly questions, answers and government assurances tracked to delivery for the Committee on Government Assurances, plus a constituency MLACDS/MPLADS works tracker (sanctioned → completed) with citable Tamil briefs for the member.",
      timeline: "First tracker edition 10–14 weeks; Assembly-wide 6–9 months (estimate)",
    },
    {
      family: "govtech-workflow",
      useCase:
        "At Secretariat scale: petition-committee and assurance workflows integrated with NeVA, department reply routing with service levels, and a single routing hub linking MLA offices to district collectorates.",
      timeline: "6–9 months (estimate)",
    },
    {
      family: "compliance-regtech",
      useCase:
        "DPDP-grade handling of petitioner personal data, with consent, purpose and retention as fields and a processing register, for the Secretariat and constituency offices ahead of the May 2027 enforcement date.",
      timeline: "8–12 weeks (estimate)",
    },
    {
      family: "narrative-media",
      useCase:
        "Tamil-language monitoring of service-delivery issues in the constituency (water, roads, power, schemes) as reported in local media, routed into the petition record. No political sentiment, opponent tracking or persuasion, by policy.",
      timeline: "Live in 6–8 weeks (estimate)",
    },
    {
      family: "fundraising-csr",
      useCase:
        "Verification of public assets co-funded by CSR alongside MLACDS or MPLADS, such as school buildings, so that what was promised, who paid and what was delivered is on the record. Contracted with the institution, never routed through a party.",
      timeline: "6–10 weeks (estimate)",
    },
  ],
  offerings: [
    {
      offering: "briefing",
      use: "90 minutes with the Principal Secretary or a committee chair, or with an MLA or MP and their personal assistant, on one question the office cannot answer today, such as the status of all assurances given in a session.",
    },
    {
      offering: "bootcamp",
      use: "One day on the office’s own petitions or a session’s assurance list, ending with one working tracker. The fee is credited against a later purchase.",
    },
    {
      offering: "record-model-workshop",
      use: "Declares the record types for the office or Secretariat (question, assurance, petition, work, department reply, outcome) and the obligations behind them, including the handover rule.",
    },
    {
      offering: "tracker-network",
      use: "Licenses the assurance-tracker method to other legislatures on the same Method Standard.",
    },
    {
      offering: "fellowship",
      use: "A legislative-assistant fellow embedded for a year with a committee or constituency office, publishing under their own name and serving the office, never a campaign. Sponsor-funded.",
    },
    {
      offering: "dpdp-readiness-assessment",
      use: "For the Assembly Secretariat, or a cohort of constituency offices assessed together: petitioner data map, DPIA, consent and retention, and a gap plan to May 2027.",
    },
    {
      offering: "methodology-audit",
      use: "An external review of an office’s published annual work report or MLACDS/MPLADS works dashboard against the Method Standard, so that its figures can withstand challenge.",
    },
    {
      offering: "forward-deployed-analyst",
      use: "Embedded with the Assembly Secretariat during the assurance-tracker build, or with a multi-office cohort.",
    },
    {
      offering: "builders",
      use: "Free or near-free access for small offices, legislative-assistant fellows and student researchers covering the Assembly.",
    },
  ],
  evidence: [
    {
      type: "trackers",
      receives:
        "Versioned trackers of assurances, questions and constituency works with downloadable data, the named commissioning office, a stated error rate and a diff against the previous edition.",
      when: "Publytics’ first edition 31 March 2027; commissioned editions 10–14 weeks (estimate)",
    },
    {
      type: "impact-studies",
      receives:
        "One named office, one number on the record, for example median petition-closure days or the share of assurances discharged within the committee’s time limit.",
      when: "Scheduled; 6–12 months after go-live (estimate)",
    },
    {
      type: "method-standard",
      receives:
        "The open 5-item checklist that makes an office’s published numbers checkable by opposition, press and citizens alike.",
      when: "Available now (v1.0, 4 September 2026)",
    },
    {
      type: "benchmarks",
      receives:
        "Tamil civic evaluation set baselines showing how accurately Tamil and code-mixed petitions are classified and routed.",
      when: "In preparation",
    },
    {
      type: "corrections",
      receives:
        "Stated error rates and permanent public corrections, which matter when every figure will be contested across the aisle.",
      when: "Live register (none recorded yet)",
    },
    {
      type: "refusal-log",
      receives:
        "A dated, anonymised record of declined campaign or partisan requests, the clearest evidence of the Boundary for presiding officers and members of every party.",
      when: "Live",
    },
    {
      type: "field-notes",
      receives:
        "Fortnightly notes on legislative accountability design, written for committee staff and legislative assistants.",
      when: "Fortnightly",
    },
  ],
  measures: [
    "Share of floor assurances and answers with a tracked status and evidence link (target: more than 90% of a session within two quarters)",
    "Median days from petition receipt to a dated outcome communicated to the citizen, and the petition closure rate",
    "Share of MLACDS/MPLADS works with a verified sanctioned → completed status and a source citation",
    "Handover completeness: the share of office records transferred intact at an officeholder or staff change",
    "Zero substantiated partisan-use complaints, and all published figures meeting the Method Standard with stated error rates",
  ],
  path: [
    {
      title: "Boundary first",
      body: "The Boundary undertaking and the refusal log are published before any engagement. Contact runs through the Assembly Secretariat and non-partisan legislative research networks, never through party offices.",
      duration: "2–4 weeks",
    },
    {
      title: "Briefing",
      body: "90 minutes with the Principal Secretary or the Assurances Committee chair, showing the pending-assurance status the office cannot produce today.",
      duration: "1 meeting",
    },
    {
      title: "Bootcamp",
      body: "One session’s assurance list, or one office’s petitions, turned into a working Tamil tracker in a day. The fee is credited.",
      duration: "1 day",
    },
    {
      title: "Record Model Workshop",
      body: "Question, assurance, petition and works record types are declared, together with the handover rule and the NIC/NeVA integration points.",
      duration: "1 week",
    },
    {
      title: "Pilot",
      body: "A Secretariat assurance-tracker pilot and a cross-party cohort of MLA offices on the public-office edition, with a Fellow or Forward-Deployed Analyst embedded.",
      duration: "8–12 weeks",
    },
    {
      title: "Publish",
      body: "The first assurance-tracker edition on the Method Standard, tabled or published by the Secretariat, with a stated error rate.",
      duration: "Quarter after pilot",
    },
    {
      title: "Scale",
      body: "Assembly-wide rollout to committees and all willing offices through a Tamil Nadu Transparency in Tenders process aligned to the NeVA DPR.",
      duration: "6–9 months",
    },
    {
      title: "Extend",
      body: "A Tracker Network licence for other legislatures, and a Parliament-side offer for MPs’ offices and the Lok Sabha and Rajya Sabha Secretariats.",
      duration: "Year 2–3",
    },
  ],
  entry:
    "Free Briefing, then a credited Bootcamp building a tracker of one session’s assurances or one office’s petitions. For constituency offices, a cross-party pilot cohort of the public-office edition.",
  cycle:
    "1–3 months for a single office edition; 6–12 months for an Assembly Secretariat engagement (estimate)",
  funding: [
    "The State Legislature demand in the Tamil Nadu budget (Legislative Assembly Secretariat)",
    "The NeVA centrally sponsored scheme (60:40 Centre:State, via the Ministry of Parliamentary Affairs) for digital-legislature modules",
    "Lok Sabha and Rajya Sabha Secretariat budgets",
    "MPs’ Office Expense Allowance (₹75,000 a month since the 2023 revision) and Tamil Nadu MLAs’ allowances (a new ₹25,000 a month personal-assistant allowance from September 2026)",
    "Philanthropic sponsorship of Fellowships",
    "MLACDS and MPLADS fund development works, not office software; Tamil Nadu’s MLACDS guidelines carry no IT or software provision. Any MLACDS works tracker would be procured by the Rural Development & Panchayat Raj Department.",
  ],
  procurement: [
    {
      route: "Assembly Secretariat and RD&PR Department",
      detail:
        "Tamil Nadu Transparency in Tenders Act 1998 and Rules 2000, via tntenders.gov.in. Purchases below ₹25 lakh are low-value (G.O. Ms. No. 133, 10 July 2026); ₹25 lakh and above go to open e-tender, with s.16 exemptions for proprietary or single-source items and ELCOT as an optional nominated agency. Digital-legislature modules can be aligned to the state’s NeVA DPR (MoPA/NIC).",
    },
    {
      route: "Parliament secretariats",
      detail:
        "GFR/GeM: up to ₹50,000 direct purchase; ₹50,000 to ₹10 lakh through L1; above ₹10 lakh by bid or reverse auction; limited tender up to ₹50 lakh.",
    },
    {
      route: "Individual MP and MLA offices",
      detail:
        "Low-value direct purchase within allowances, contracted with the office, not the person or a party, with a handover clause, a no-campaign-use clause, and suspension in that constituency while the Model Code of Conduct is in force.",
    },
    {
      route: "Paperwork",
      detail:
        "Data residency, petitioner-data DPDP terms, a dated sub-processor list and a signed Boundary undertaking.",
    },
  ],
  roles: [
    {
      role: "Sponsor",
      who: "Speaker or Principal Secretary of the Legislative Assembly Secretariat for institutional work; the MLA or MP as head of the public office for office editions",
    },
    {
      role: "Owner",
      who: "Secretary of the Committee on Government Assurances or the Petitions Committee; in offices, the personal assistant or legislative assistant",
    },
    {
      role: "Technical evaluation",
      who: "NIC state unit (NeVA hosting and integration) and the Assembly Secretariat IT cell; for MLACDS works data, the RD&PR Department’s IT/MIS officer",
    },
    {
      role: "Approvals",
      who: "State Finance Department (budget head) and the Assembly’s legal or ethics officers",
    },
  ],
  faqs: [
    {
      q: "Can a party, candidate or campaign use Publytics?",
      a: "No. Publytics sells to institutions, never to contestants. Work is contracted with the public office or Secretariat, paid from public funds and used to discharge public duties. Contracts carry a no-campaign-use clause, there is no voter-roll, party or campaign data, and declined campaign or partisan requests are recorded in the public refusal log.",
    },
    {
      q: "Could this be used by one party against another?",
      a: "Contracts are with the office or Secretariat, never with a party or candidate. The Boundary is in the company articles, declined requests appear in the refusal log, and the method and error rates are public, so any side can check them.",
    },
    {
      q: "What happens during the Model Code of Conduct?",
      a: "Work for a member’s constituency office is suspended in that constituency while the Model Code of Conduct is in force, and the suspension is written into the contract.",
    },
    {
      q: "Members change every five years. Why invest?",
      a: "Because the record belongs to the office, not the officeholder. It is handed to the next officeholder intact, so citizens do not lose their petition history and committees do not lose assurance history.",
    },
    {
      q: "We already have NeVA and OAMS.",
      a: "Publytics complements them. NeVA digitises House business and OAMS logs central assurances; Publytics links each commitment to evidence of delivery by constituency, in Tamil, with provenance, through configuration on top of their data.",
    },
    {
      q: "Can MLACDS or MPLADS funds pay for this?",
      a: "No. MLACDS and MPLADS fund development works only, and Tamil Nadu’s MLACDS guidelines carry no IT or software provision. Work starts with the Secretariat or a sponsored Fellowship cohort; office editions are funded within office allowances or through Secretariat-funded cohorts.",
    },
  ],
};
