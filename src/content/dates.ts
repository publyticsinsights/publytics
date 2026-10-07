import type { DatedFact } from "./types";

/* Every date and statutory figure the site cites, with its provenance.
   Corrected on 7 Oct 2026 against the GTM Atlas (section 03):
   - DPDP Rules: gazetted 13 Nov 2025, PIB release 14 Nov 2025 — cite both.
   - Consent Manager registration (Rule 4) is in force from 13 Nov 2026,
     not "June–August 2026".
   - Significant Data Fiduciary duties (annual DPIA and audit, Rule 13) start
     with all other obligations on 13 May 2027, not "Q1 2027".           */

export const FACTS = {
  dpdpNotified: {
    id: "dpdp-notified",
    label: "DPDP Rules notified",
    value: "13 Nov 2025",
    date: "13 Nov 2025",
    source: "Gazette of India; PIB release 14 Nov 2025",
    method: "official notification",
    limitations: "Gazetted 13 Nov 2025; the PIB release is dated 14 Nov 2025. Both are cited.",
  },
  dpdpRule4: {
    id: "dpdp-rule-4",
    label: "Consent Manager registration in force",
    value: "13 Nov 2026",
    date: "13 Nov 2026",
    source: "DPDP Rules 2025, Rule 4",
    method: "commencement 12 months after notification",
  },
  dpdpFull: {
    id: "dpdp-full",
    label: "DPDP obligations apply in full",
    value: "13 May 2027",
    date: "13 May 2027",
    source: "DPDP Rules 2025",
    method: "commencement 18 months after notification",
    limitations:
      "Includes Significant Data Fiduciary duties (annual DPIA and audit, Rule 13). MeitY’s Jan 2026 proposal to shorten the window to 12 months was not notified as of Sep 2026.",
  },
  dpdpPenalty: {
    id: "dpdp-penalty",
    label: "Maximum penalty",
    value: "₹250 crore",
    date: "2023",
    source: "DPDP Act 2023, Schedule",
    method: "statutory maximum penalty",
  },
  tnLowValue: {
    id: "tn-low-value",
    label: "Tamil Nadu low-value procurement line",
    value: "below ₹25 lakh",
    date: "10 Jul 2026",
    source: "G.O. Ms. No.133 (TN Gazette Extraordinary No. 308)",
    method: "TNTIT Rules, Rule 33 as amended",
    limitations:
      "Non-construction procurement, including consultancy. Open e-tender on tntenders.gov.in applies at ₹25 lakh and above.",
  },
  gfrGem: {
    id: "gfr-gem",
    label: "Central GeM thresholds",
    value: "≤ ₹50,000 direct · ₹50,000–10 lakh L1 · > ₹10 lakh bid/RA",
    date: "10 Jul 2024",
    source: "GFR 2017, Rule 149 (OM 10 Jul 2024)",
    method: "General Financial Rules",
  },
  methodStandard: {
    id: "method-standard",
    label: "Method Standard published",
    value: "v1.0",
    date: "4 Sep 2026",
    source: "Publytics",
    method: "published standard",
  },
  tracker1: {
    id: "tracker-1",
    label: "Publytics Tracker 1",
    value: "31 Mar 2027",
    date: "31 Mar 2027",
    source: "Publytics",
    method: "dated public commitment",
    limitations:
      "A commitment, not an achievement. If the date moves, the change is published here with the reason.",
  },
} satisfies Record<string, DatedFact>;

/** The public calendar that frames every engagement (GTM Atlas §08, timelines). */
export const CALENDAR: {
  date: string;
  title: string;
  body: string;
  kind: "statute" | "commitment" | "cycle";
}[] = [
  {
    date: "4 Sep 2026",
    title: "Method Standard v1.0",
    body: "The five-item publication checklist, open and versioned.",
    kind: "commitment",
  },
  {
    date: "13 Nov 2026",
    title: "DPDP Rule 4 in force",
    body: "Consent Manager registration opens, 12 months after notification.",
    kind: "statute",
  },
  {
    date: "Jan–Mar 2027",
    title: "Budget and CSR planning",
    body: "State budget preparation; corporate CSR annual action plans set for the next financial year.",
    kind: "cycle",
  },
  {
    date: "31 Mar 2027",
    title: "Publytics Tracker 1",
    body: "The first public edition, on an announced date, under the Method Standard.",
    kind: "commitment",
  },
  {
    date: "13 May 2027",
    title: "DPDP obligations apply in full",
    body: "Including Significant Data Fiduciary DPIA and audit duties. Penalties up to ₹250 crore.",
    kind: "statute",
  },
];
