import type { Segment } from "../types";
import { SEGMENT_META } from "./meta";

export const universities: Segment = {
  ...SEGMENT_META.universities,
  context: [
    "The ICSSR 2025-26 call funds Major Research Projects of up to ₹30 L over 24 months and Minor Research Projects of up to ₹15 L over 12 months. Datasets built on grants of this length are rarely maintained after the project closes.",
    "Funders, journals and ethics committees increasingly expect provenance, open data and replication. Official figures on Tamil Nadu schemes and promises conflict across press notes, Assembly replies and speeches, and none of them is versioned.",
    "State planning and evaluation bodies are being reconstituted in 2026. Researchers need a neutral, published method that stays credible across governments.",
    "The Method Standard v1.0, an open 5-item checklist, was published on 4 Sep 2026. The first public tracker edition is scheduled for 31 Mar 2027.",
  ],
  pains: [
    {
      title: "The same dataset, rebuilt every project",
      body: "Official figures on Tamil Nadu schemes and promises conflict across press notes, Assembly replies and speeches, and none is versioned. Each project spends weeks reconstructing and reconciling the same dataset.",
    },
    {
      title: "Primary sources in Tamil",
      body: "Government orders, Assembly proceedings, district notices and Tamil media are hard to search, classify and code at scale with English-first tools.",
    },
    {
      title: "Datasets that end with the grant",
      body: "Funders, journals and ethics committees expect provenance, open data and replication, yet datasets built on short ICSSR grants are rarely maintained after the project closes.",
    },
    {
      title: "Grant-sized, rule-bound budgets",
      body: "Procurement follows GFR and GeM for central and ICSSR institutes and the Tamil Nadu Transparency in Tenders Act for state universities. That rules out enterprise data tools and slows any purchase above a few lakh.",
    },
    {
      title: "An unstable state counterpart",
      body: "State planning and evaluation bodies are being reconstituted in 2026. Researchers need a neutral, published method that stays credible across governments.",
    },
  ],
  solution:
    "Publytics gives research institutions the Accountability System as research infrastructure. Research & Policy Intelligence provides typed, versioned civic records with an evidence ledger and Tamil-first retrieval, and the open Method Standard serves as the publication checklist, so a centre stops rebuilding datasets and publishes numbers that survive a challenge. Students and small labs get access free through Publytics for Builders. Centres co-author trackers, co-develop the Tamil civic benchmark, host Fellows, and can license the method through the Tracker Network.",
  products: [
    {
      family: "research-policy",
      useCase:
        "Versioned Tamil Nadu civic datasets — promises, schemes, Assembly questions and replies, budget lines — with provenance; Tamil-first search and classification over government orders and proceedings; policy dashboards; and co-authored tracker editions. Free for student researchers and small labs through Publytics for Builders.",
      timeline:
        "Builders access in 1–2 weeks; pilot in 8–12 weeks; first co-published edition aligned to the first public tracker (31 Mar 2027)",
    },
    {
      family: "compliance-regtech",
      useCase:
        "The university as a data fiduciary under DPDP: a processing register for student, staff, applicant and research-participant data, consent and retention fields, DPIAs for research projects, and an evidence pack ahead of full enforcement in May 2027. The buyer is the Registrar, not the researcher.",
      timeline: "Assessment in 3–4 weeks; register live in 2–3 months; full rollout in 6 months",
    },
    {
      family: "narrative-media",
      useCase:
        "A Tamil and Tamil-English code-mixed corpus of how schemes and policies are discussed in print, TV transcripts and social media, for media studies, political science and computational social science. A sample corpus is available through Builders.",
      timeline: "Corpus access in 2–4 weeks; research-grade extracts in 6–8 weeks",
    },
    {
      family: "civic-data",
      useCase:
        "Research access to aggregated or anonymised ward- or district-level delivery records that a government client has chosen to share, under a three-way data-sharing agreement for evaluation studies.",
      timeline: "4–8 weeks to set up the data-sharing agreement once the department consents",
    },
    {
      family: "fundraising-csr",
      useCase:
        "For research centres raising CSR or philanthropic money under Schedule VII item (ix) that must show donors provenance-backed outcomes for funded programmes.",
      timeline: "6–10 weeks per programme verification",
    },
  ],
  notOffered: [
    {
      family: "govtech-workflow",
      reason:
        "Universities do not run citizen permit or grievance workflows; independent evaluation of a deployment is covered under impact studies.",
    },
  ],
  offerings: [
    {
      offering: "briefing",
      use: "90 minutes with a centre head or principal investigator to frame one research data problem, such as reconciling Tamil Nadu investment MoU figures; the standard opener.",
    },
    {
      offering: "methodology-audit",
      use: "External pre-publication review of a centre's index, dashboard or tracker against the Method Standard; a credibility signal for funders and journals.",
    },
    {
      offering: "builders",
      use: "Free or near-free access for student researchers, PhD scholars and small labs to datasets, the Tamil language layer and publishing tools.",
    },
    {
      offering: "tracker-network",
      use: "A university or think tank in another state licenses the method and publishes its own tracker on the Method Standard; academic partners are the natural first nodes outside Tamil Nadu.",
    },
    {
      offering: "fellowship",
      use: "Universities supply fellows and co-sponsor them; fellows spend a year on real institutional work with their name on what they publish. Free to the fellow.",
    },
    {
      offering: "bootcamp",
      use: "One day with a lab's own dataset, ending in one working monitor or versioned dataset; typically paid from a grant's contingency or services head.",
    },
    {
      offering: "record-model-workshop",
      use: "For a large centre, such as an ANRF Convergence Centre of Excellence, declaring its record types and obligations before building a multi-year dataset.",
    },
    {
      offering: "dpdp-readiness-assessment",
      use: "For the Registrar's office: a data map across admissions, examinations, hostels and research projects, a DPIA, consent architecture and a gap plan to May 2027.",
    },
  ],
  evidence: [
    {
      type: "trackers",
      receives:
        "Versioned editions with downloadable data, a named commissioning party, a stated error rate and a diff against the previous edition; citable and reusable in research, with co-authorship for partner centres.",
      when: "First edition 31 Mar 2027",
    },
    {
      type: "impact-studies",
      receives:
        "A place for a university as independent reviewer or co-author of a study that names one institution and one number on the record.",
      when: "Scheduled; 3–6 months per study (estimate)",
    },
    {
      type: "method-standard",
      receives:
        "The open, versioned 5-item checklist (v1.0, 4 Sep 2026), to adopt in a centre's publications and teach in methods courses, with certification through a Methodology Audit.",
      when: "Available now",
    },
    {
      type: "benchmarks",
      receives:
        "Research access to named baselines, including the Tamil civic evaluation set, and the opportunity to co-develop it with Indic NLP research groups. The benchmark itself remains proprietary.",
      when: "In preparation",
    },
    {
      type: "corrections",
      receives:
        "Stated error rates and permanent correction notices at the original URL, which researchers need for replication and for footnoting data limits.",
      when: "Live policy; none recorded yet",
    },
    {
      type: "refusal-log",
      receives:
        "A dated, anonymised record of declined engagements and the criteria applied, which gives ethics committees and faculty a basis for judging independence.",
      when: "Live",
    },
    {
      type: "field-notes",
      receives: "Fortnightly notes usable as teaching cases and research leads.",
      when: "Fortnightly",
    },
  ],
  measures: [
    "Number of co-published outputs — tracker editions, papers, policy briefs — using Publytics data that pass the Method Standard.",
    "Researcher time to assemble a clean, sourced Tamil Nadu dataset, including coverage of Tamil-language sources: from weeks to days.",
    "Reuse of versioned datasets: downloads, citations and successful replications.",
    "Fellows and Builders placed and published under their own names.",
    "Stated error rate and correction turnaround on data a partner relied on.",
  ],
  path: [
    {
      title: "Briefing",
      body: "A Briefing with the centre head or principal investigator on one research data problem in a live ICSSR, ANRF or foundation-funded project on public programmes, AI ethics or Indic NLP.",
      duration: "2–4 weeks",
    },
    {
      title: "Builders onboarding",
      body: "One lab or class receives free access to datasets, the Tamil language layer and the Method Standard checklist, and agrees one research question.",
      duration: "4–6 weeks",
    },
    {
      title: "Research partnership agreement",
      body: "A research collaboration agreement covering co-authorship, data sharing, Institutional Ethics Committee clearance, the right to disagree in print, and firewall and independence clauses.",
      duration: "4–8 weeks",
    },
    {
      title: "Budget line",
      body: "Services such as a Bootcamp, Methodology Audit or subscription are written into the next ICSSR, ANRF or foundation proposal, or paid from existing contingency within purchase-committee or GeM thresholds.",
      duration: "1–3 months, tied to grant calls",
    },
    {
      title: "Co-published pilot",
      body: "One methodology-audited index or tracker chapter is delivered with the partner's name on it.",
      duration: "8–12 weeks",
    },
    {
      title: "Subscription or audit",
      body: "A departmental Research & Policy Intelligence subscription or a Methodology Audit, typically through GeM direct purchase.",
      duration: "4–8 weeks",
    },
    {
      title: "Extend",
      body: "Fellowship co-sponsorship, a Tracker Network node in another state through a partner university, and, for the Registrar's office, DPDP Readiness Assessment and compliance.",
      duration: "6–12 months",
    },
  ],
  entry:
    "Free Briefing and a Publytics for Builders allocation for one centre or lab → research-partnership agreement (co-authorship of a tracker chapter, Method Standard adoption, access to the Tamil civic dataset)",
  cycle: "3–9 months; up to 12 months when a purchase waits on a grant call",
  funding: [
    "ICSSR Major and Minor Research Projects (2025-26 call: up to ₹30 L over 24 months and ₹15 L over 12 months), under services, data or contingency heads.",
    "ANRF Convergence Research Centres of Excellence: up to ₹25 Cr over 5 years, housed in a social-science or humanities department with an S&T co-PI.",
    "Philanthropic centre grants.",
    "Library and database subscription budgets, which already pay for India data products.",
    "Evaluation studies commissioned by Tamil Nadu departments or the State Planning Commission (in flux in 2026).",
    "CSR to publicly funded universities and IITs under Companies Act Schedule VII item (ix), and foundation or corporate CSR sponsorship of Fellows.",
  ],
  procurement: [
    {
      route: "Central and ICSSR-funded institutes (GFR 2017, as amended in 2024)",
      detail:
        "Purchase without quotation up to ₹50,000; Local Purchase Committee from ₹50,000 to ₹5 L for non-GeM items; GeM direct purchase up to ₹10 L (L1 among 3 sellers above ₹50,000) and GeM bid or reverse auction above ₹10 L; limited tender up to ₹50 L; consultancy expression of interest required above ₹50 L.",
    },
    {
      route: "State universities (Tamil Nadu Transparency in Tenders Act and Rules)",
      detail:
        "Open tenders at ₹25 L and above go through TN e-procurement; the low-value limit was raised to ₹25 L in July 2026.",
    },
    {
      route: "Private universities",
      detail: "Their own purchase policies, through a research collaboration agreement.",
    },
    {
      route: "Paperwork",
      detail:
        "MoU or research collaboration agreement (co-authorship, IP, right to publish disagreements), data-sharing agreement, Institutional Ethics Committee approval where personal data is involved, a DPDP processing addendum, a GST invoice, and empanelment or vendor registration where required.",
    },
  ],
  roles: [
    {
      role: "Sponsor",
      who: "Director of the institute, Dean of sponsored research, or Registrar or Finance Officer at state universities; in practice, the grant PI's sanctioned budget.",
    },
    {
      role: "Owner",
      who: "Faculty principal investigator or centre head working on public programmes, AI ethics or Indic NLP.",
    },
    {
      role: "Technical evaluation",
      who: "Research data manager or librarian responsible for data subscriptions, and CS or NLP faculty for the Tamil language layer.",
    },
    {
      role: "Approvals",
      who: "Purchase committee or Finance Officer (GFR, GeM, state tender rules), the Institutional Ethics Committee (personal data, DPDP), and the funder's grant conditions on IP and data sharing.",
    },
  ],
  faqs: [
    {
      q: "We have no budget for software.",
      a: "Publytics for Builders is free or near-free for student researchers and small labs. Paid services are sized to fit grant heads and GFR thresholds, and a Bootcamp fee is credited against a later purchase. Commissioned tracker editions are paid by the funder, not the department.",
    },
    {
      q: "Does partnering with a commercial company compromise academic independence?",
      a: "The method is open (Method Standard v1.0) and the commissioning party is named on every output. The refusal log is public, the firewall clauses with Think TN Foundation are published, and partners keep co-authorship and the right to disagree with Publytics in print.",
    },
    {
      q: "Is research on government data politically sensitive?",
      a: "Publytics sells to institutions, never to contestants, and this boundary is in its articles. Trackers cover commitments across governments with stated limits and error rates, and that neutrality protects the researcher.",
    },
    {
      q: "We already use open Indic language models and existing India data services.",
      a: "That is complementary. The Publytics language layer is built on open Indic models. Publytics adds the typed civic record model, the evidence ledger and versioned publication, which those sources do not provide, and cites them as sources.",
    },
    {
      q: "What paperwork does a research partnership involve?",
      a: "An MoU or research collaboration agreement covering co-authorship, IP and the right to publish disagreements; a data-sharing agreement; Institutional Ethics Committee approval where personal data is involved; and a DPDP processing addendum.",
    },
  ],
};
