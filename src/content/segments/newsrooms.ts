import type { Segment } from "../types";
import { SEGMENT_META } from "./meta";

export const newsrooms: Segment = {
  ...SEGMENT_META.newsrooms,
  context: [
    "Official numbers on the same question routinely conflict across a press statement, an Assembly reply and a public address, as with the three irreconcilable MoU-conversion figures. Reporters spend days reconciling GOs, policy notes and Assembly replies before they can publish.",
    "The DPDP Rules 2025 carry no explicit journalism exemption, and the Editors Guild’s 35 questions to MeitY were still unanswered as of November 2025. Media houses that hold subscriber, app and contributor data need an evidence pack before May 2027.",
    "The Publytics Method Standard v1.0 was published on 4 September 2026, and the first Publytics tracker edition is due on 31 March 2027, with an embargoed pre-release briefing for desks.",
  ],
  pains: [
    {
      title: "Official numbers conflict",
      body: "A press statement, an Assembly reply and a public address give different figures with no evidence chain, so reporters spend days reconciling GOs, policy notes and Assembly replies before they can publish.",
    },
    {
      title: "Tamil monitoring at scale is hard",
      body: "TV debates, YouTube, WhatsApp forwards, district editions and Tamil-English code-mixing are difficult to follow. English-first commercial tools are priced for corporate brands and are weak on Tamil.",
    },
    {
      title: "Thin desks, short-term funding",
      body: "Data desks are small, and their funding comes from project grants and philanthropic patrons rather than steady editorial budgets.",
    },
    {
      title: "Legal exposure under DPDP",
      body: "The DPDP Rules 2025 carry no explicit journalism exemption, which makes desks wary of datasets containing personal data.",
    },
    {
      title: "No time to rebuild the evidence chain",
      body: "Primary sources are in Tamil, and desks lack the time and staff to verify an official figure from source before deadline.",
    },
  ],
  solution:
    "Publytics gives newsrooms the Accountability System as a public good they can check: versioned tracker datasets with method, commissioning party, stated error rate and edition diffs, released with embargoed briefings for desks. Narrative & Media Intelligence adds Tamil-first monitoring of how schemes and policies are discussed across TV, print and social media, offered through Publytics for Builders. Larger groups can add a desk subscription, a Methodology Audit of their own trackers, or DPDP readiness for subscriber data. Publytics publishes data and method, and newsrooms keep the right to disagree in print; Publytics never edits, approves or asks for coverage, and commissioned stories are never paid for by Publytics clients.",
  products: [
    {
      family: "research-policy",
      useCase:
        "Desk access to tracker datasets, Tamil Nadu Assembly question and reply tracking, scheme and budget-line records and manifesto tracking, all with provenance, so a reporter can verify an official figure in hours.",
      timeline:
        "Desk onboarding 1–2 weeks; full value from the first tracker edition (31 March 2027)",
    },
    {
      family: "narrative-media",
      useCase:
        "Tamil-first monitoring of how named schemes, departments and policies are discussed across Tamil TV, YouTube, print and social media, with alerts on claim spikes for fact-check desks. It handles code-mixing, transliteration and dialect.",
      timeline: "Pilot 6–8 weeks on one desk; group rollout 3–4 months",
    },
    {
      family: "compliance-regtech",
      useCase:
        "For a media house acting as data fiduciary for e-paper subscribers, app users, CRM and source or contributor data: a processing register, consent and retention fields and an evidence pack before May 2027. The buyer is the finance or legal team, not the newsroom.",
      timeline: "Assessment 3–4 weeks; full rollout 4–6 months",
    },
    {
      family: "fundraising-csr",
      useCase:
        "For nonprofit newsrooms reporting provenance-backed reach or impact outcomes to donors.",
      timeline: "6–8 weeks",
    },
  ],
  notOffered: [
    {
      family: "civic-data",
      reason:
        "An internal registry for departments; newsrooms see its outputs only where a government client publishes ward-level data through a tracker.",
    },
    {
      family: "govtech-workflow",
      reason: "Newsrooms do not run citizen service workflows.",
    },
  ],
  offerings: [
    {
      offering: "briefing",
      use: "90 minutes with a data editor on one live verification problem; also run as a Chennai data-editors roundtable before each tracker release.",
    },
    {
      offering: "builders",
      use: "The main route for newsrooms: free or near-free datasets, Tamil monitoring seats and publishing tools for newsrooms, fact-checkers and student journalists. A free tier is available to independent, nonprofit and fact-check desks.",
    },
    {
      offering: "fellowship",
      use: "Data journalists embedded for a year on real institutional data work, with bylines on the output; sponsored by a journalism grant-maker, a foundation or a media group.",
    },
    {
      offering: "bootcamp",
      use: "One day with a desk’s own story data, ending in one working monitor, for example a scheme-claims monitor before a budget session. It can be sponsor-funded as a training cohort.",
    },
    {
      offering: "dpdp-readiness-assessment",
      use: "For large media houses: a subscriber and app data map, DPIA, consent architecture and a gap plan to May 2027, given the absence of an explicit journalism exemption.",
    },
    {
      offering: "methodology-audit",
      use: "An external review of a newsroom’s own promise tracker, election dashboard or data product against the Method Standard, with a public credibility badge.",
    },
    {
      offering: "tracker-network",
      use: "A multi-state media group or a regional data outlet licenses the method to publish its own tracker on the Method Standard.",
    },
  ],
  evidence: [
    {
      type: "trackers",
      receives:
        "Downloadable, versioned data with method, named commissioning party, stated error rate and edition diff, with an embargoed pre-release briefing for desks.",
      when: "First edition 31 March 2027",
    },
    {
      type: "impact-studies",
      receives:
        "One named institution, one number, on the record; journalists can report it or challenge it.",
      when: "Scheduled",
    },
    {
      type: "method-standard",
      receives:
        "A free 5-item checklist desks can apply to any official number, or to their own data stories.",
      when: "v1.0 published 4 September 2026",
    },
    {
      type: "benchmarks",
      receives:
        "Named baselines, including the Tamil civic evaluation set, so desks can see how accurate Tamil classification and summarisation are before relying on monitoring.",
      when: "In preparation",
    },
    {
      type: "corrections",
      receives:
        "Permanent correction notices at the original URL that reporters can hold us to and cite.",
      when: "Live policy; none recorded yet",
    },
    {
      type: "refusal-log",
      receives:
        "A dated record of declined engagements and the criteria applied, which shows that Publytics does not work for contestants.",
      when: "Live",
    },
    {
      type: "field-notes",
      receives: "Fortnightly notes that serve as story leads and give context on data gaps.",
      when: "Fortnightly",
    },
  ],
  measures: [
    "Stories per month that cite or use Publytics data with a method link",
    "Time to verify an official figure, measured in hours rather than days",
    "Tamil monitoring precision and recall against the stated benchmark, and alert latency",
    "Challenges raised by newsrooms, and the share resolved by a published correction or defence within the stated window",
    "Cost per desk compared with commercial monitoring alternatives",
  ],
  path: [
    {
      title: "Method first",
      body: "The Method Standard and Field notes are shared with data editors and fact-checkers, and a Chennai data-editors Briefing roundtable is held.",
      duration: "0–1 month",
    },
    {
      title: "Builders access",
      body: "Tamil and English desks, including fact-checkers, receive dataset access and one monitoring seat each through Publytics for Builders.",
      duration: "1–2 months",
    },
    {
      title: "Training session",
      body: "A session on reading and challenging civic data in Tamil, run with a journalism training network or a journalism school.",
      duration: "1 day–2 weeks",
    },
    {
      title: "Embargoed release",
      body: "Desks are briefed under embargo, not exclusivity, before the first tracker edition. Method and data are published at release.",
      duration: "2–3 weeks before 31 March 2027",
    },
    {
      title: "Challenge and correct",
      body: "Every newsroom challenge is logged, and a correction or a defence is published at the original URL.",
      duration: "1–3 months after release",
    },
    {
      title: "Group subscription",
      body: "Larger media groups that need more than the Builders tier move to group monitoring and research subscriptions.",
      duration: "2–4 months",
    },
    {
      title: "Further work",
      body: "Sponsored data-journalism Fellows, a Methodology Audit of the group’s own trackers, DPDP readiness for subscriber data, and a Tracker Network licence for editions in other states.",
      duration: "6–12 months",
    },
  ],
  entry:
    "Free Publytics for Builders newsroom access: open-licence tracker datasets, an embargoed pre-release briefing and a Tamil monitoring seat for one desk, plus a standing invitation to challenge us in print.",
  cycle: "1–3 months for Builders desks; 3–6 months for media-group subscriptions",
  funding: [
    "Newsroom technology or editorial budgets at larger groups, for monitoring and research tools",
    "Election and budget-coverage budgets",
    "Journalism grants, such as the Google News Initiative and IPSMF, and philanthropic patrons",
    "Foundation or grant-maker sponsorship of data-journalism Fellows",
    "Commissioned stories are never paid for by Publytics clients, under the editorial firewall",
  ],
  procurement: [
    {
      route: "Private media companies",
      detail:
        "No public tender. Purchases go through a direct contract or purchase order approved by the editor or CEO, with board or owner sign-off for larger annual contracts, and monthly or annual GST invoices.",
    },
    {
      route: "Nonprofit newsrooms",
      detail: "Paid from grant line items under the donor’s reporting rules.",
    },
    {
      route: "Paperwork",
      detail:
        "Data licence and reuse terms (Method Standard item 5: format and reuse), an attribution clause, a co-publication or embargo MoU with an explicit editorial-independence clause (no coverage obligations; the right to criticise Publytics), and a DPDP processing addendum if Publytics processes any newsroom data.",
    },
    {
      route: "Boundary check",
      detail:
        "Ownership screening runs before any contract. Party-owned or party-affiliated outlets are excluded under the Boundary.",
    },
  ],
  roles: [
    {
      role: "Sponsor",
      who: "Editor-in-chief or CEO/publisher; for nonprofit newsrooms, the managing trustee or grant holder",
    },
    {
      role: "Owner",
      who: "Data editor, head of the fact-check desk or investigations editor",
    },
    {
      role: "Technical evaluation",
      who: "Newsroom product or technology lead and a senior data journalist, who test Tamil accuracy and data formats",
    },
    {
      role: "Approvals",
      who: "Legal counsel or standards editor (DPDP, defamation, attribution)",
    },
  ],
  faqs: [
    {
      q: "Why trust a company that also works with government?",
      a: "Every tracker names its commissioning party, method and error rate. The refusal log is public, the Boundary (never sell to contestants) is in the company articles, and corrections are published at the original URL. Newsrooms receive the same downloadable data and can disagree in print.",
    },
    {
      q: "Does Publytics edit or approve our journalism?",
      a: "No. Publytics publishes data and method. Embargoed briefings carry no exclusivity and no coverage obligation, and co-publication agreements include an explicit editorial-independence clause and the right to criticise Publytics. Commissioned stories are never paid for by Publytics clients.",
    },
    {
      q: "We cannot pay for tools.",
      a: "Public trackers are free, and Publytics for Builders has a free tier for independent, nonprofit and fact-check desks. Only large commercial media groups pay commercial rates.",
    },
    {
      q: "Is there DPDP risk if we use your datasets?",
      a: "Datasets carry their source and processing basis, are aggregated wherever possible and pass through the disclosure gate. Publytics does not replace your legal counsel.",
    },
    {
      q: "AI on Tamil text will get things wrong.",
      a: "Review is human-led, accuracy is benchmarked against a named Tamil civic evaluation set, error rates are stated, and every output carries the AI disclosure triptych. AI is never used for persuasion.",
    },
  ],
};
