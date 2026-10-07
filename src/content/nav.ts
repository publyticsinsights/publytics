import { SEGMENT_LIST as SEGMENTS } from "./segments/meta";
import { FAMILIES } from "./families";
import { SERVICES, PROGRAMMES } from "./offerings";
import { EVIDENCE } from "./evidence";

/* Navigation and the search index, derived from the registries — a page
   added to a registry appears in the menu, the footer and search at once. */

export interface NavLink {
  label: string;
  href: string;
  hint?: string;
  /** Extra text the search palette matches on (not displayed). */
  keywords?: string;
}

const EVIDENCE_HREF: Record<string, string> = {
  "method-standard": "/evidence/method-standard",
  "refusal-log": "/evidence/refusal-log",
  corrections: "/evidence/corrections",
};
export const evidenceHref = (slug: string) => EVIDENCE_HREF[slug] ?? `/evidence#${slug}`;

export const PRIMARY_NAV: NavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Services & Programmes", href: "/services" },
  { label: "Evidence", href: "/evidence" },
  { label: "Trust", href: "/trust" },
  { label: "Company", href: "/company" },
];

export const UTILITY_NAV: NavLink[] = [
  { label: "Public Proof", href: "/public-proof", hint: "The argument" },
  { label: "How to engage", href: "/engage", hint: "Ladder, procurement, timelines" },
  {
    label: "DPDP 2027",
    href: "/dpdp",
    hint: "Obligations from 13 May 2027",
    keywords: "data protection privacy consent DPIA significant data fiduciary audit penalty",
  },
];

export const NAV_COLUMNS: { title: string; href: string; links: NavLink[] }[] = [
  {
    title: "Solutions",
    href: "/solutions",
    links: SEGMENTS.map((s) => ({
      label: s.name,
      href: `/solutions/${s.slug}`,
      hint: s.kicker,
      keywords: `${s.tagline} ${s.summary} ${s.question.quote}`,
    })),
  },
  {
    title: "Products",
    href: "/products",
    links: FAMILIES.map((f) => ({
      label: f.name,
      href: `/products/${f.slug}`,
      hint: f.line,
      keywords: f.summary,
    })),
  },
  {
    title: "Services",
    href: "/services",
    links: SERVICES.map((o) => ({
      label: o.name,
      href: `/services/${o.slug}`,
      hint: o.shape,
      keywords: o.summary,
    })),
  },
  {
    title: "Programmes",
    href: "/services#programmes",
    links: PROGRAMMES.map((o) => ({
      label: o.name,
      href: `/services/${o.slug}`,
      hint: o.shape,
      keywords: o.summary,
    })),
  },
  {
    title: "Evidence",
    href: "/evidence",
    links: EVIDENCE.map((e) => ({
      label: e.name,
      href: evidenceHref(e.slug),
      hint: e.kicker,
      keywords: e.rule,
    })),
  },
  {
    title: "Trust & Company",
    href: "/trust",
    links: [
      { label: "AI principles", href: "/trust#ai-principles" },
      { label: "The boundary", href: "/trust#boundary" },
      { label: "Data governance & DPDP", href: "/trust#data-governance" },
      { label: "Security & residency", href: "/trust#security" },
      { label: "Accessibility", href: "/trust#accessibility" },
      { label: "About", href: "/company#about" },
      { label: "Leadership", href: "/company#leadership" },
      { label: "How we are funded", href: "/company#funding" },
      { label: "Contact", href: "/company#contact" },
    ],
  },
];

export const SEARCH_INDEX: ({ group: string } & NavLink)[] = [
  ...[
    { label: "Home", href: "/", hint: "Publytics — Public Proof" },
    ...UTILITY_NAV,
    ...PRIMARY_NAV,
  ].map((l) => ({ group: "Pages", ...l })),
  ...NAV_COLUMNS.flatMap((c) => c.links.map((l) => ({ group: c.title, ...l }))),
];
