/* Site-wide constants. Nothing here is a claim; claims live in the registries. */

export const SITE_URL = "https://publytics.in";
export const SITE_NAME = "Publytics";

/**
 * Where briefing requests go. The form POSTs JSON to VITE_BRIEFING_ENDPOINT when it is
 * set at build time (e.g. a Formspree/Web3Forms endpoint) and otherwise opens the
 * visitor's mail client, pre-filled, to CONTACT_EMAIL. It never reports success for a
 * request it did not send.
 */
export const CONTACT_EMAIL: string =
  (import.meta.env["VITE_CONTACT_EMAIL"] as string | undefined) ?? "hello@publytics.in";
export const BRIEFING_ENDPOINT: string | undefined =
  (import.meta.env["VITE_BRIEFING_ENDPOINT"] as string | undefined) || undefined;

/** The date this content was last reconciled against its sources. Rendered on dated pages. */
export const CONTENT_AS_OF = "7 Oct 2026";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

/**
 * Meta descriptions are cut at a sentence boundary, never mid-word:
 * whole sentences while they fit in `max`, else the first sentence
 * trimmed to the last whole word.
 */
export function metaDescription(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sentences = clean.match(/[^.!?]+[.!?]+(?:\s|$)/g) ?? [clean];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  out = out.trim();
  if (out.length >= 50) return out;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}\u2026`;
}

/** The default social-card image (an Atlas cover, generated at build time). */
export const OG_IMAGE = {
  path: "/og.png",
  width: "1200",
  height: "630",
  alt: "Publytics \u2014 Eight institutions. Six product families. One evidence chain.",
};

/** Standard head() payload for a page: title, description, canonical, OG, robots. */
export function pageHead(opts: { title: string; description: string; path: string }) {
  const url = absoluteUrl(opts.path);
  const description = metaDescription(opts.description);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: absoluteUrl(OG_IMAGE.path) },
      { property: "og:image:width", content: OG_IMAGE.width },
      { property: "og:image:height", content: OG_IMAGE.height },
      { property: "og:image:alt", content: OG_IMAGE.alt },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/* ── JSON-LD helpers. Every claim in a schema block must already be
   stated on the page it annotates \u2014 schema never says more than the
   page does. ── */

export function ldScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export const ORG_ID = `${SITE_URL}/#organization`;

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
