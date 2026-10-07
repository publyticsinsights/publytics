import type { Segment } from "../types";
import { SEGMENT_META } from "./meta";

/* Source: Publytics GTM Atlas (Oct 2026), section 10, deep-dive 0.1, pp. 18–23.
   Public layer only: no prices, no named prospects, no internal tactics. */

export const government: Segment = {
  ...SEGMENT_META.government,
  context: [
    "Departments are being asked to track new commitments to delivery: the White Paper on state finances released in June 2026, the proposed Right to Services Act, and the AI-enabled governance reforms announced in the 2026-27 State Budget on 5 August 2026.",
    "The Digital Personal Data Protection Rules were gazetted on 13 November 2025 (PIB release, 14 November 2025), with obligations applying in full from 13 May 2027. Departments holding large citizen datasets need a data map, a processing register and a breach-response record before that date.",
    "Since G.O. Ms. No.133 of 10 July 2026, non-construction procurement below the low-value threshold under the Tamil Nadu Transparency in Tenders Rules proceeds by quotation or limited enquiry. A department can start on its own data without a tender.",
  ],
  pains: [
    {
      title: "Irreconcilable official figures",
      body: "Different official sources report different figures for the same commitment, and no single evidence chain stands behind any of them.",
    },
    {
      title: "Dashboards without provenance",
      body: "State dashboards — some spanning dozens of departments and hundreds of views — report inputs and progress, but not provenance, version history or stated error rates. A number without them is hard to defend when challenged.",
    },
    {
      title: "Commitments without delivery tracking",
      body: "New commitments, including the proposed Right to Services Act and White Paper follow-through, need delivery tracked by district and ward from announcement to commissioning, against service-level deadlines that will become legally enforceable.",
    },
    {
      title: "Manual handling of Tamil grievances",
      body: "Petitions arrive in Tamil and Tamil-English code-mix across CM Helpline 1100, district petition camps and departmental portals. Classification, routing and theme analysis are manual and inconsistent.",
    },
    {
      title: "DPDP obligations without a record",
      body: "DPDP obligations apply to departments holding large citizen datasets, with full enforcement from May 2027. Most have no data map, processing register or breach-response record.",
    },
  ],
  solution:
    "Publytics installs the Delivery System (Civic Data & Constituent Intelligence with GovTech Workflow connectors) beneath existing state dashboards and grievance channels, so every scheme commitment carries an evidence chain from announcement to commissioning, by district and ward, queryable in Tamil. The Accountability System (Research & Policy Intelligence) then publishes versioned scheme and commitment trackers on announced dates under the Method Standard. DPDP readiness from the Obligation System runs as a parallel track.",
  products: [
    {
      family: "civic-data",
      useCase:
        "A governed record of promises, schemes, beneficiaries and delivery events for one department, joined to existing registries such as the State Family Database and CM Dashboard feeds. Tamil-first query of what was committed, what was verified and where, by district or ward, with petition theme classification.",
      timeline: "Pilot 10–12 weeks; department-wide rollout 6–9 months",
    },
    {
      family: "research-policy",
      useCase:
        "Commissioned trackers for flagship schemes and announced commitments, such as MoU-to-operation, White Paper follow-through and Right to Services compliance. Field verification and Assembly-assurance tracking, published under the Method Standard.",
      timeline: "First edition 10–14 weeks; then on announced dates",
    },
    {
      family: "govtech-workflow",
      useCase:
        "Service-request and grievance workflows with service-level clocks by district and ward, to support the proposed Right to Services Act. Connectors into CM Helpline 1100, e-Sevai and departmental portals, rather than replacing them.",
      timeline: "6–9 months after the record model is in place",
    },
    {
      family: "compliance-regtech",
      useCase:
        "DPDP posture for departments holding large citizen datasets: a live data map, processing register, DPIAs, retention as fields and a breach-response record, with an evidence pack for audit.",
      timeline:
        "Assessment 3–4 weeks; platform live in 2–3 months, aligned to May 2027 enforcement",
    },
    {
      family: "narrative-media",
      useCase:
        "Multilingual monitoring of how schemes and services are discussed in Tamil media and public channels, for a public relations department or a scheme owner. It exists to find delivery failures early; political persuasion is excluded by The Boundary.",
      timeline: "Live in 4–6 weeks",
    },
    {
      family: "fundraising-csr",
      useCase:
        "Where departments or district collectorates converge CSR funds into government programmes, a provenance layer that links each CSR rupee to a verified programme outcome.",
      timeline: "8–12 weeks",
    },
  ],
  offerings: [
    {
      offering: "briefing",
      use: "A 90-minute framing session with a Secretary or Commissioner on one commitment the department cannot currently evidence. No deck.",
    },
    {
      offering: "bootcamp",
      use: "One day on the department's own scheme data, ending with one working monitor, for example district-wise delivery of one scheme. Within the low-value procurement threshold.",
    },
    {
      offering: "record-model-workshop",
      use: "Declares the department's record types (promise, scheme, beneficiary, delivery event) and obligations. The output becomes the specification annexed to the pilot work order.",
    },
    {
      offering: "methodology-audit",
      use: "External review of an existing published dashboard or scheme report against the Method Standard, before it is cited in the Assembly or in a White Paper follow-up.",
    },
    {
      offering: "forward-deployed-analyst",
      use: "One analyst embedded with the department or its monitoring cell during pilot and rollout, keeping the evidence ledger current and answering Assembly and RTI questions.",
    },
    {
      offering: "dpdp-readiness-assessment",
      use: "Data map, DPIA, consent and legitimate-use architecture, and a gap plan to May 2027 for departments and agencies holding citizen data.",
    },
    {
      offering: "use-case-boost",
      use: "High-touch acceleration for a state e-governance agency or a department's in-house data team building its own use case on the platform.",
    },
    {
      offering: "publytics-comply",
      use: "Lets a department require that software vendors selling to it run inside a pre-built DPDP, residency and procurement-security perimeter. Paid by the vendor; reduces the department's audit burden. Status: in scoping.",
    },
    {
      offering: "builders",
      use: "A free or near-free tier for district-level bodies, such as a collectorate's petition analysis, as a low-friction proof point before state-level adoption.",
    },
    {
      offering: "tracker-network",
      use: "A licence for another state's department or monitoring agency to publish its own tracker on the same Method Standard.",
    },
    {
      offering: "fellowship",
      use: "A fellow embedded for a year in a department's monitoring cell, building in the product with their name on what is published. Builds internal capacity that survives officer transfers.",
    },
  ],
  evidence: [
    {
      type: "trackers",
      receives:
        "A versioned public tracker for a named scheme or commitment set: announced publication date, downloadable dataset, named commissioning department, stated error rate and a diff against the previous edition.",
      when: "First Publytics edition 31 Mar 2027; commissioned editions quarterly or half-yearly",
    },
    {
      type: "impact-studies",
      receives:
        "One named department, one number, on the record, such as time to answer an Assembly question before and after. It serves as a reference case for other departments.",
      when: "6–12 months after go-live",
    },
    {
      type: "method-standard",
      receives:
        "The open five-item checklist (v1.0, 4 Sep 2026), which the department can adopt as its own publication rule for dashboards and reports. Free; certification is through a Methodology Audit.",
      when: "Available now",
    },
    {
      type: "benchmarks",
      receives:
        "Named baselines, including the Tamil civic evaluation set, so the technical evaluator can check Tamil classification and retrieval accuracy before acceptance.",
      when: "In preparation; shared at evaluation stage",
    },
    {
      type: "corrections",
      receives:
        "A stated error rate on every published figure, and permanent correction notices at the original URL. This is the defence when a figure is challenged in the Assembly or the press.",
      when: "From first publication",
    },
    {
      type: "refusal-log",
      receives:
        "A public, dated, anonymised log of declined engagements, showing The Boundary: Publytics sells to institutions, never to contestants. The work stays non-partisan across changes of administration.",
      when: "Live",
    },
    {
      type: "field-notes",
      receives:
        "Fortnightly notes on method and delivery data that officers can circulate internally.",
      when: "Fortnightly",
    },
  ],
  measures: [
    "Share of announced commitments in scope with a complete evidence chain: committed → verified → by whom → when → limits.",
    "Time to answer an Assembly question, RTI or citizen query with a sourced figure, reduced from days to hours.",
    "Tracker editions published on the announced date, with a stated error rate and zero uncorrected errors.",
    "Tamil and code-mixed petition classification accuracy against the Tamil civic evaluation set, with the human-review rate stated.",
    "District- and ward-level service-level compliance visible for services notified under Right to Services.",
  ],
  path: [
    {
      title: "Request",
      body: "A department requests a Briefing through its Secretary when a pressure point is live: Right to Services commitments, White Paper follow-through, or an Assembly question with conflicting figures.",
      duration: "2–4 weeks",
    },
    {
      title: "Briefing",
      body: "A 90-minute session framing one commitment. The department and Publytics agree the dataset for a Bootcamp.",
      duration: "1 meeting",
    },
    {
      title: "Bootcamp",
      body: "A one-day build on the department's data, ending with a working district-wise monitor. The Bootcamp fee is credited against later purchase.",
      duration: "1 day (plus 2 weeks for data access)",
    },
    {
      title: "Record Model Workshop",
      body: "Declares record types and obligations. The output becomes the technical specification for the pilot order.",
      duration: "1 week",
    },
    {
      title: "Pilot procurement",
      body: "The pilot is procured through GeM (custom bid) or through the state IT or e-governance agency. The CERT-In empanelled security audit and the residency clause are completed in parallel.",
      duration: "6–12 weeks",
    },
    {
      title: "Pilot delivery",
      body: "One department or district for about three months, with a Forward-Deployed Analyst. The first tracker edition is published on an announced date.",
      duration: "10–12 weeks",
    },
    {
      title: "Department rollout",
      body: "An annual platform contract through open tender or the state IT agency. GovTech Workflow is added for service-level tracking, with a DPDP Readiness Assessment.",
      duration: "4–6 months",
    },
    {
      title: "Further departments",
      body: "A second department is added as configuration, not a new build. The Method Standard can be adopted across departments, and the Tracker Network extends the same standard to other states.",
      duration: "6–12 months",
    },
  ],
  entry:
    "Free Briefing → credited Bootcamp on the department's own data → Record Model Workshop → a department or district pilot. The first steps sit within the low-value procurement threshold, so no tender is needed to start.",
  cycle:
    "Bootcamp and Record Model Workshop in 4–8 weeks; 6–12 months to an annual platform contract, aligned with budget preparation for the next financial year.",
  funding: [
    "Departmental demands for grants: computerisation, IT and monitoring components within each department's budget.",
    "IT & Digital Services Department grants to the state e-governance agency.",
    "Tamil Nadu AI Mission (TNAIM): ₹13.93 crore sanctioned in February 2024 for two years.",
    "Special programme implementation and scheme-monitoring budgets.",
    "AI-enabled governance reforms announced in the 2026-27 State Budget (5 Aug 2026; allocation not itemised publicly).",
    "Administrative, MIS and M&E components of centrally sponsored schemes, and M&E components of externally aided projects.",
    "For central ministries: IT and monitoring-and-evaluation budget heads, and central evaluation budgets.",
  ],
  procurement: [
    {
      route: "Low-value procurement",
      detail:
        "Under the Tamil Nadu Transparency in Tenders Rules, non-construction procurement below ₹25 lakh is low value (Rule 33 as amended by G.O. Ms. No.133, 10 Jul 2026) and proceeds by quotation or limited enquiry. This covers the Bootcamp, Record Model Workshop, DPDP Readiness Assessment and Methodology Audit.",
    },
    {
      route: "GeM",
      detail:
        "An optional mode for Tamil Nadu entities, with the Commissioner of Treasuries & Accounts as State Nodal Officer (G.O. Ms. 119 Finance, 4 Apr 2018). G.O. 154 of 3 May 2018 extended GeM to high-value procurement.",
    },
    {
      route: "Central buyers (GFR Rule 149)",
      detail:
        "Up to ₹50,000 by direct purchase; ₹50,000 to ₹10 lakh on L1; above ₹10 lakh, bid or reverse auction is mandatory.",
    },
    {
      route: "Open e-tender",
      detail:
        "On tntenders.gov.in at ₹25 lakh and above, with a minimum of 15 days to bid up to ₹2 crore and 30 days above.",
    },
    {
      route: "Through a state agency",
      detail:
        "Section 16(c) of the Tamil Nadu Transparency in Tenders Act exempts procurement from government departments and PSUs, so departments can route through ELCOT (Optional Procurement Agency, G.O. 58 Finance, 16 Feb 1999) or TNeGA, with Publytics as sub-vendor. The agency itself tenders under the Act.",
    },
    {
      route: "Typical paperwork",
      detail:
        "EMD and performance security; turnover and experience criteria (with DPIIT-startup relaxations on GeM); a data-residency clause; a CERT-In empanelled security audit before hosting on the Tamil Nadu State Data Centre; an NDA; a DPDP posture statement; and a dated sub-processor list.",
    },
  ],
  roles: [
    {
      role: "Sponsor",
      who: "Additional Chief Secretary, Principal Secretary or Secretary of the administrative department, with Finance Department concurrence for new expenditure.",
    },
    {
      role: "Owner",
      who: "Director or Commissioner of the implementing directorate, or the officer responsible for special programme implementation and governance reform.",
    },
    {
      role: "Technical evaluation",
      who: "The state e-governance agency's technology and data analytics team, the state IT agency and the NIC State Centre. A CERT-In empanelled auditor reviews security before hosting on the State Data Centre.",
    },
    {
      role: "Approvals",
      who: "Finance Department for expenditure sanction; IT & Digital Services Department for hosting and security standards; the department's legal and RTI cell for data sharing.",
    },
  ],
  faqs: [
    {
      q: "We already have a state dashboard and analytics team. Where does this fit?",
      a: "Beneath them. The dashboard shows progress; Publytics attaches source, version, verifier and error rate to each figure so it holds when challenged. Integration is configuration, and the state's e-governance agency remains the platform owner.",
    },
    {
      q: "Will publishing limitations and error rates expose the department?",
      a: "The department controls publication, on dates it announces. Stated limits and permanent corrections are what make a figure defensible in the Assembly. The refusal log and The Boundary show that Publytics does not work for contestants.",
    },
    {
      q: "Can a department start without a long tender?",
      a: "Yes. The Bootcamp, Record Model Workshop and DPDP Readiness Assessment sit below the low-value threshold set by G.O. Ms. No.133 of 10 July 2026. Larger work proceeds through GeM, an optional mode in Tamil Nadu since 2018, or through ELCOT or TNeGA under section 16(c) of the Tamil Nadu Transparency in Tenders Act.",
    },
    {
      q: "Does citizen data leave the state's control?",
      a: "No. Residency is written into the contract. Hosting is on the Tamil Nadu State Data Centre or an Indian region after a CERT-In empanelled audit. Each deployment carries a dated sub-processor list and an AI disclosure triptych, and client data is never used to train models outside the client environment.",
    },
    {
      q: "How does this help with DPDP obligations?",
      a: "The DPDP Rules were gazetted on 13 November 2025 (PIB release, 14 November 2025), with obligations applying in full from 13 May 2027. A DPDP Readiness Assessment produces a data map, DPIA, consent and legitimate-use architecture and a gap plan in 3–4 weeks. Compliance & Regtech then maintains the processing register and breach-response record.",
    },
    {
      q: "Is the work politically neutral?",
      a: "Yes. Publytics sells to institutions, never to contestants, and publishes a dated log of declined engagements. The work is delivery assurance: it tracks what was committed and what was delivered, not manifesto scoring.",
    },
  ],
};
