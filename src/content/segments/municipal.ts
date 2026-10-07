import type { Segment } from "../types";
import { SEGMENT_META } from "./meta";

/* Source: Publytics GTM Atlas (Oct 2026), section 10, deep-dive 0.2, pp. 24–29.
   Public layer only: no prices, no named prospects, no internal tactics. */

export const municipal: Segment = {
  ...SEGMENT_META.municipal,
  context: [
    "In Swachh Survekshan 2024-25, Madurai ranked 40th and Chennai 38th of 40 cities above 10 lakh population. Corporations need an evidence base to diagnose such results, or to contest them.",
    "The 16th Finance Commission (2026–31) makes provisional and audited accounts in the public domain an entry condition for urban local body grants of ₹3.56 lakh crore nationally, and ties performance grants to own-source revenue growth.",
    "Urban local body elections are expected in early 2027, and DPDP obligations take full effect in May 2027 for citizen data such as property tax, civil registration, grievance and CCTV records.",
  ],
  pains: [
    {
      title: "Closure figures that are not trusted",
      body: "Grievances are closed without resolution and without a reopen path. Citizens cannot track status across 1913, Namma Chennai and councillor channels, so closure figures are not trusted.",
    },
    {
      title: "No ward-level service record",
      body: "There is no ward-level service record for garbage collection, streetlights or stormwater desilting that survives scrutiny by councillors, Local Fund Audit or the press, especially during the north-east monsoon.",
    },
    {
      title: "Rankings without an evidence base",
      body: "External benchmarks such as Swachh Survekshan 2024-25 rank the city, but the corporation has no evidence base to diagnose the result or contest it.",
    },
    {
      title: "Grant conditions tied to disclosure",
      body: "The 16th Finance Commission (2026–31) requires provisional and audited accounts in the public domain, and own-source revenue growth for performance grants.",
    },
    {
      title: "Manual routing of Tamil complaints",
      body: "Tamil and Tamil-English code-mixed complaints, photos and voice notes are classified by hand and routed to the wrong department or zone.",
    },
  ],
  solution:
    "Publytics deploys the Delivery System for a corporation: a ward-typed civic record (Civic Data & Constituent Intelligence) and grievance and service workflows (GovTech Workflow & Identity), connected to 1913, Namma Chennai, the Urban Tree Information System and the Integrated Command and Control Centre, with Tamil-first classification and verified closure. The Accountability System then publishes a versioned ward service-level tracker on announced dates, giving councillors, auditors and Finance Commission conditions the same evidenced record.",
  products: [
    {
      family: "civic-data",
      useCase:
        "A ward-level civic record of grievances, delivery events (desilting, streetlight repair, waste collection), assets and council assurances, tied to zone and ward officers. Tamil query by ward and theme; a pilot covers one zone of roughly 15–20 wards.",
      timeline: "Pilot 8–12 weeks; corporation-wide 6–9 months",
    },
    {
      family: "govtech-workflow",
      useCase:
        "Grievance routing and verified closure, with photo and geo evidence, citizen confirmation and a reopen path, layered on 1913, Namma Chennai and the Urban Tree Information System. Permit and trade-licence service clocks by ward.",
      timeline: "4–6 months after the record model",
    },
    {
      family: "compliance-regtech",
      useCase:
        "DPDP posture for citizen data held by the corporation, including property tax, birth and death records, grievance complainant identities and CCTV through the command centre. A processing register, a breach-response record and complainant-identity protection.",
      timeline: "Assessment 3–4 weeks; live in 2–3 months",
    },
    {
      family: "research-policy",
      useCase:
        "A published ward service-level and grievance tracker, with Swachh Survekshan readiness evidence. Disclosure support for 16th Finance Commission entry conditions, including accounts in the public domain, and own-source revenue tracking.",
      timeline: "First edition 10–12 weeks",
    },
    {
      family: "narrative-media",
      useCase:
        "Tamil social and news monitoring of civic complaints, such as monsoon flooding or garbage hotspots, to surface ward issues not logged in formal channels.",
      timeline: "4–6 weeks",
    },
    {
      family: "fundraising-csr",
      useCase:
        "Provenance for CSR and community contributions into ward works, such as parks, schools and Namakku Naame Thittam (Urban), so each contribution links to a verified outcome.",
      timeline: "8–10 weeks",
    },
  ],
  offerings: [
    {
      offering: "briefing",
      use: "90 minutes with the Commissioner or a Deputy Commissioner on one ward-level question they cannot answer today, such as verified grievance closure in one zone.",
    },
    {
      offering: "bootcamp",
      use: "One day on a zone's grievance export, ending with a working ward-wise closure monitor in Tamil. Within the Commissioner's low-value sanction.",
    },
    {
      offering: "record-model-workshop",
      use: "Declares ward, grievance, asset and delivery-event record types and the corporation's service obligations. The output becomes the tender specification.",
    },
    {
      offering: "forward-deployed-analyst",
      use: "An analyst embedded with Regional Deputy Commissioners during the pilot and the monsoon season, keeping ward evidence current.",
    },
    {
      offering: "builders",
      use: "A free or near-free tier for municipalities and town panchayats that cannot fund a platform, supporting state-wide adoption.",
    },
    {
      offering: "dpdp-readiness-assessment",
      use: "A data map and gap plan to May 2027 for property-tax, civil registration, grievance and CCTV data.",
    },
    {
      offering: "methodology-audit",
      use: "Independent review of the corporation's published dashboards or grievance statistics against the Method Standard, before council or Swachh Survekshan use.",
    },
    {
      offering: "tracker-network",
      use: "A licence for a city corporation in another state to publish its own ward tracker on the Method Standard.",
    },
    {
      offering: "fellowship",
      use: "A fellow embedded in a corporation's grievance cell or command centre for a year. The sponsor can be a CSR programme or a foundation.",
    },
  ],
  evidence: [
    {
      type: "trackers",
      receives:
        "A versioned ward service-level and grievance-closure tracker with downloadable data, the named commissioning corporation, a stated error rate and a diff against the previous edition.",
      when: "First Publytics edition 31 Mar 2027; municipal editions monthly or quarterly",
    },
    {
      type: "impact-studies",
      receives:
        "One named corporation, one number on the record, such as verified closure rate or reopen rate before and after.",
      when: "6–9 months after go-live",
    },
    {
      type: "method-standard",
      receives:
        "The open checklist the corporation adopts for its own dashboards and council reports. Free; certification is through a Methodology Audit.",
      when: "Available now (v1.0)",
    },
    {
      type: "benchmarks",
      receives:
        "Tamil civic evaluation set baselines showing classification accuracy on Tamil and code-mixed complaints, and cross-ward comparability.",
      when: "In preparation",
    },
    {
      type: "corrections",
      receives:
        "Stated error rates on ward figures and permanent correction notices, which give the figures standing with councillors, residents' welfare associations and the press.",
      when: "From first publication",
    },
    {
      type: "refusal-log",
      receives:
        "Proof, under The Boundary, that Publytics does not work for councillors or candidates as contestants. This matters ahead of the local body elections expected in early 2027.",
      when: "Live",
    },
    {
      type: "field-notes",
      receives:
        "Fortnightly notes on ward-level delivery data, useful to residents' welfare associations, civic groups and officials.",
      when: "Fortnightly",
    },
  ],
  measures: [
    "Verified grievance closure rate by ward: closure with evidence and no reopen within 30 days.",
    "Median time to resolution by ward and category, published on schedule.",
    "Ward tracker editions published on announced dates, with stated error rates.",
    "Routing accuracy on Tamil and code-mixed complaints, and a measurable reduction in mis-routed complaints.",
    "Movement in external benchmarks (Swachh Survekshan components) and compliance with 16th Finance Commission disclosure conditions.",
  ],
  path: [
    {
      title: "Request",
      body: "A corporation requests a Briefing through its Commissioner or a Deputy Commissioner when a trigger is live: a Swachh Survekshan rank, a monsoon grievance surge or a 16th Finance Commission disclosure condition.",
      duration: "2–4 weeks",
    },
    {
      title: "Briefing",
      body: "Frames one ward-level question. The corporation and Publytics agree on a zone's grievance export.",
      duration: "1 meeting",
    },
    {
      title: "Bootcamp",
      body: "A one-day build ending with a verified-closure monitor by ward. The fee is credited against later purchase.",
      duration: "1 day (plus 1–2 weeks for data access)",
    },
    {
      title: "Record Model Workshop",
      body: "Declares ward, grievance and asset record types and service obligations, and produces a tender-ready specification.",
      duration: "1 week",
    },
    {
      title: "Zone pilot",
      body: "A Commissioner-sanctioned or e-tendered pilot across one zone, with a Forward-Deployed Analyst, integrated with exports from 1913, Namma Chennai and the Urban Tree Information System.",
      duration: "8–12 weeks",
    },
    {
      title: "Publication",
      body: "The first ward tracker is published on an announced date, after a self-check against the Method Standard, and presented to the Standing Committee.",
      duration: "2–4 weeks",
    },
    {
      title: "Corporation rollout",
      body: "A Council-approved annual platform, with GovTech Workflow for verified closure and service clocks.",
      duration: "3–6 months",
    },
    {
      title: "State-wide configuration",
      body: "Municipalities and town panchayats are added through the Commissionerate of Municipal Administration or the Directorate of Town Panchayats as configuration. The Builders tier serves small local bodies; the Tracker Network extends the standard to cities in other states.",
      duration: "6–12 months",
    },
  ],
  entry:
    "Free Briefing → credited one-day Bootcamp on one zone's grievance data, producing a ward-wise verified-closure monitor in Tamil → Record Model Workshop → a zone pilot. The first steps sit within the Commissioner's low-value sanction.",
  cycle:
    "4–9 months to a corporation contract; 9–15 months to a state-wide contract through the Commissionerate of Municipal Administration.",
  funding: [
    "Corporation general fund and own-source revenue (property and professional tax).",
    "15th Finance Commission grants (to 2025-26) and 16th Finance Commission urban local body grants for 2026–31 (₹3.56 lakh crore nationally: basic, performance, special infrastructure and urbanisation premium).",
    "State Finance Commission devolution (7th State Finance Commission tenure extended to 31 Dec 2026).",
    "Capacity-building and reform components of Swachh Bharat Mission-Urban 2.0 and AMRUT 2.0.",
    "Residual Smart City SPV funds and command-centre O&M (the Smart Cities Mission closed on 31 Mar 2025).",
    "Externally aided programmes: the World Bank Tamil Nadu Climate Resilient Urban Development Program, the Tamil Nadu Sustainable Urban Development Project, and KfW/TNUDF funding through TNUIFSL.",
    "Namakku Naame Thittam (Urban) community contributions for ward works.",
  ],
  procurement: [
    {
      route: "Procuring entity",
      detail:
        "Local bodies are procuring entities under the Tamil Nadu Transparency in Tenders Act (Schedule: 'Local Bodies in the State').",
    },
    {
      route: "Low-value procurement",
      detail:
        "Below ₹25 lakh (non-construction 'low value', G.O. Ms. No.133, 10 Jul 2026): the Commissioner's sanction with quotations. This covers the Bootcamp, Record Model Workshop, Methodology Audit and DPDP Readiness Assessment.",
    },
    {
      route: "Open e-tender",
      detail:
        "At ₹25 lakh and above: open e-tender on tntenders.gov.in, with a 15-day minimum bid period up to ₹2 crore, and a Council or Standing Committee resolution for the work order.",
    },
    {
      route: "GeM",
      detail: "An optional mode; G.O. 119 and G.O. 154 of 2018 cover local bodies.",
    },
    {
      route: "State-wide route",
      detail:
        "A rate contract or central platform procurement by the Commissionerate of Municipal Administration covering all corporations and municipalities, as with the Urban Tree Information System.",
    },
    {
      route: "Externally aided funds",
      detail:
        "World Bank and KfW funding follows the lender's procurement rules, typically QCBS for consultancy and software services.",
    },
    {
      route: "Typical paperwork",
      detail:
        "Council resolution; administrative sanction; EMD and performance security; data-residency and security audit clauses; an integration undertaking with the Urban Tree Information System and existing grievance systems.",
    },
  ],
  roles: [
    {
      role: "Sponsor",
      who: "Corporation Commissioner, with Council or Standing Committee approval. For multi-ULB contracts, the Commissioner of Municipal Administration and the Secretary, Municipal Administration & Water Supply Department.",
    },
    {
      role: "Owner",
      who: "Deputy Commissioners (Revenue & Finance, Health or Works), Regional Deputy Commissioners and Zonal Officers who own grievance closure; the Smart City SPV or command-centre head.",
    },
    {
      role: "Technical evaluation",
      who: "The corporation's IT and systems wing, the state Urban Tree Information System team, and the state e-governance and IT agencies for hosting and security standards.",
    },
    {
      role: "Approvals",
      who: "Council and Standing Committee; the Accounts Officer and Local Fund Audit; the Commissionerate of Municipal Administration where state-wide standard platforms apply.",
    },
  ],
  faqs: [
    {
      q: "We already have 1913, Namma Chennai and the Urban Tree Information System. Why add anything?",
      a: "Publytics connects to them; it does not replace them. It adds ward-level verified closure, a reopen path and a published evidence record, which those systems do not provide. Integration is configuration.",
    },
    {
      q: "Council elections are coming. Can a corporation commit now?",
      a: "The first steps sit within the Commissioner's low-value sanction. The record stays with the corporation through council changes, and The Boundary means it is never used by a candidate or party.",
    },
    {
      q: "How is this funded?",
      a: "The Bootcamp fee is credited against later purchase. Pilots fit Finance Commission, Swachh Bharat Mission-Urban 2.0 or World Bank reform components, and published accounts and ward data support 16th Finance Commission entry and performance conditions.",
    },
    {
      q: "Our complaints are in mixed Tamil and English. Can the system handle them?",
      a: "The Tamil-first language layer handles code-mixing, dialect and transliteration. Accuracy is measured against the Tamil civic evaluation set, and routing is subject to named human review.",
    },
    {
      q: "How does procurement work for a corporation?",
      a: "Below the low-value threshold set by G.O. Ms. No.133 of 10 July 2026, the Commissioner can sanction work against quotations. Above it, work goes to open e-tender on tntenders.gov.in with a Council or Standing Committee resolution. GeM is an optional mode for local bodies.",
    },
    {
      q: "What happens to complainants' personal data?",
      a: "Compliance & Regtech maintains a processing register, a breach-response record and complainant-identity protection. A DPDP Readiness Assessment maps property-tax, civil registration, grievance and CCTV data against the May 2027 enforcement date, and contracts carry data-residency and security audit clauses.",
    },
  ],
};
