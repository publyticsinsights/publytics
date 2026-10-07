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

/** Standard head() payload for a page: title, description, canonical, OG. */
export function pageHead(opts: { title: string; description: string; path: string }) {
  const url = absoluteUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl("/og.png") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
