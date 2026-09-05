import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";

/* ─────────────────────────────────────────────────────────────
   Announcement bar. Near-black, 12px, centred, dismissible.
   ───────────────────────────────────────────────────────────── */
export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-60 bg-ink-deep text-inverse">
      <div className="flex items-center justify-center px-10 py-2.5 text-center">
        <p className="text-[0.8125rem] leading-5">
          The Method Standard v1.0 is published.{" "}
          <Link to="/evidence" className="border-b border-inverse-dim pb-px hover:border-inverse">
            Read the standard
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-inverse-dim transition-colors hover:text-inverse"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

const NAV: { label: string; href: string }[] = [
  { label: "Public Proof", href: "/public-proof" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Services & Programmes", href: "/services" },
  { label: "Evidence", href: "/evidence" },
  { label: "Trust", href: "/trust" },
  { label: "Company", href: "/company" },
];

const MENU_COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "Public Proof",
    links: [
      ["The argument", "/public-proof"],
      ["The operating loop", "/public-proof"],
      ["The Platform", "/products"],
      ["Publytics Is Not a Dashboard Company", "/public-proof"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Government & public sector", "/solutions"],
      ["Municipal & urban bodies", "/solutions"],
      ["Regulators & supervisory bodies", "/solutions"],
      ["Enterprise & GCCs", "/solutions"],
      ["Foundations & philanthropy", "/solutions"],
      ["Universities & research", "/solutions"],
      ["Newsrooms & media", "/solutions"],
      ["Legislatures & public offices", "/solutions"],
    ],
  },
  {
    title: "Products",
    links: [
      ["Civic Data & Constituent Intelligence", "/products"],
      ["GovTech Workflow & Identity", "/products"],
      ["Compliance & Regtech", "/products"],
      ["Research & Policy Intelligence", "/products"],
      ["Narrative & Media Intelligence", "/products"],
      ["Fundraising & CSR Infrastructure", "/products"],
    ],
  },
  {
    title: "Evidence & Trust",
    links: [
      ["Trackers", "/evidence"],
      ["The Method Standard", "/evidence"],
      ["Error rates & corrections", "/evidence"],
      ["The refusal log", "/evidence"],
      ["AI principles", "/trust"],
      ["The boundary", "/trust"],
      ["Data governance & DPDP", "/trust"],
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   Header. Inset from the page edges, floating over the hero.
   `tone="dark"` when it sits on a dark hero, `light` otherwise.
   `section` renders the breadcrumb + sub-nav row for interiors.
   ───────────────────────────────────────────────────────────── */
export function SiteHeader({
  tone = "light",
  section,
  subnav,
}: {
  tone?: "dark" | "light";
  section?: string;
  subnav?: { label: string; href: string }[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const onDark = tone === "dark" && !scrolled;

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className={`transition-colors duration-200 ${scrolled ? "bg-paper/92 backdrop-blur-xl" : ""}`}>
          <div className="px-3 pt-3 sm:px-5 sm:pt-4">
            <div
              className={`mx-auto flex h-14 max-w-[84.5rem] items-center justify-between gap-6 px-4 transition-colors duration-200 sm:h-15 sm:px-5 ${
                onDark ? "bg-ink/55 backdrop-blur-md" : scrolled ? "" : "bg-transparent"
              }`}
            >
              <div className="flex min-w-0 items-center gap-3">
                <Link to="/" aria-label="Publytics home" className="shrink-0">
                  <Logo className={onDark ? "text-inverse" : "text-ink"} />
                </Link>
                {section && (
                  <p className={`hidden truncate text-[0.9375rem] md:block ${onDark ? "text-inverse-dim" : "text-steel"}`}>
                    <span className="mr-2">/</span>
                    {section}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to="/company"
                  hash="contact"
                  className={`btn h-10 min-h-0 px-5 text-[0.9375rem] ${onDark ? "btn-on-dark" : "btn-solid"}`}
                >
                  <span className="hidden sm:inline">Request a briefing</span>
                  <span className="sm:hidden">Briefing</span>
                </Link>
                <div className={`flex ${onDark ? "border border-white/25" : "border border-line-strong"}`}>
                  <button
                    type="button"
                    aria-label="Search"
                    className={`flex h-10 w-10 items-center justify-center transition-colors ${
                      onDark ? "text-inverse hover:bg-white/10" : "text-ink hover:bg-mist"
                    }`}
                  >
                    <Search className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                    className={`flex h-10 w-10 items-center justify-center border-l transition-colors ${
                      onDark ? "border-white/25 text-inverse hover:bg-white/10" : "border-line-strong text-ink hover:bg-mist"
                    }`}
                  >
                    <Menu className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contextual sub-navigation for interior sections */}
        {subnav && (
          <div className={`${scrolled ? "" : "bg-transparent"}`}>
            <div className="shell">
              <nav aria-label="Section navigation" className="flex flex-wrap gap-x-6 gap-y-1 py-3">
                {subnav.map((s) => (
                  <Link
                    key={s.label}
                    to={s.href}
                    className="text-[0.9375rem] text-steel transition-colors hover:text-ink"
                  >
                    {s.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-70 overflow-y-auto bg-ink text-inverse">
          <div className="px-3 pt-3 sm:px-5 sm:pt-4">
            <div className="mx-auto flex h-14 max-w-[84.5rem] items-center justify-between px-4 sm:h-15 sm:px-5">
              <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Publytics home">
                <Logo className="text-inverse" />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center border border-white/25 text-inverse transition-colors hover:bg-white/10"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="shell pt-12 pb-20 lg:pt-16">
            <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
              {MENU_COLUMNS.map((col) => (
                <div key={col.title}>
                  <p className="t-label text-inverse-faint">{col.title}</p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map(([label, href]) => (
                      <li key={label}>
                        <Link
                          to={href}
                          onClick={() => setMenuOpen(false)}
                          className="text-[1.0625rem] leading-snug text-inverse-dim transition-colors hover:text-inverse"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rule-inverse mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 pt-8">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  to={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="t-label text-inverse-faint transition-colors hover:text-inverse"
                >
                  {n.label}
                </Link>
              ))}
              <span lang="ta" className="t-label ml-auto text-live-bright">தமிழ்</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Footer. Dense multi-column index, pill social buttons,
   locale row — the reference's information-dense close.
   ───────────────────────────────────────────────────────────── */
const FOOTER: { title: string; links: [string, string][] }[] = [
  {
    title: "Solutions",
    links: [
      ["Government & public sector", "/solutions"],
      ["Municipal & urban bodies", "/solutions"],
      ["Regulators & supervisory bodies", "/solutions"],
      ["Enterprise & GCCs", "/solutions"],
      ["Foundations & philanthropy", "/solutions"],
      ["Universities & research", "/solutions"],
      ["Newsrooms & media", "/solutions"],
      ["Legislatures & public offices", "/solutions"],
    ],
  },
  {
    title: "Products",
    links: [
      ["Civic Data & Constituent Intelligence", "/products"],
      ["GovTech Workflow & Identity", "/products"],
      ["Compliance & Regtech", "/products"],
      ["Research & Policy Intelligence", "/products"],
      ["Narrative & Media Intelligence", "/products"],
      ["Fundraising & CSR Infrastructure", "/products"],
    ],
  },
  {
    title: "Services & Programmes",
    links: [
      ["The Briefing", "/services"],
      ["The Bootcamp", "/services"],
      ["DPDP Readiness Assessment", "/services"],
      ["Methodology Audit", "/services"],
      ["Publytics Comply", "/services"],
      ["Publytics for Builders", "/services"],
      ["The Tracker Network", "/services"],
      ["The Fellowship", "/services"],
    ],
  },
  {
    title: "Evidence",
    links: [
      ["Trackers", "/evidence"],
      ["Impact studies", "/evidence"],
      ["The Method Standard", "/evidence"],
      ["Benchmarks", "/evidence"],
      ["Error rates & corrections", "/evidence"],
      ["The refusal log", "/evidence"],
      ["Field notes", "/evidence"],
    ],
  },
  {
    title: "Trust & Company",
    links: [
      ["AI principles", "/trust"],
      ["The boundary", "/trust"],
      ["Data governance & DPDP", "/trust"],
      ["Security & residency", "/trust"],
      ["Accessibility", "/trust"],
      ["About", "/company"],
      ["Leadership", "/company"],
      ["How we are funded", "/company"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="rule bg-paper">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <div>
            <p className="t-micro text-steel">
              © {new Date().getFullYear()} Publytics. All rights reserved.
            </p>
            <div className="rule mt-6 pt-6">
              <p className="t-micro text-steel">Registered in India</p>
            </div>
            <div className="rule mt-6 flex gap-4 pt-6 t-micro text-steel">
              <span className="text-ink">EN</span>
              <span lang="ta">தமிழ்</span>
            </div>
            <div className="mt-8 flex flex-col items-start gap-2.5">
              {["LinkedIn", "X", "GitHub", "Newsroom"].map((s) => (
                <span
                  key={s}
                  className="t-label inline-flex min-w-[8.5rem] items-center justify-center rounded-full border border-line-strong px-4 py-2 text-steel transition-colors hover:border-ink hover:text-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {FOOTER.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="t-label text-steel">{col.title}</h2>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <Link to={href} className="text-[0.9375rem] leading-snug text-graphite transition-colors hover:text-ink">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="rule mt-14 flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-micro max-w-xl text-steel">
            Publytics does not provide political targeting or persuasion systems to political parties or candidates.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 t-micro text-steel">
            <Link to="/trust" className="hover:text-ink">Privacy</Link>
            <Link to="/trust" className="hover:text-ink">DPDP statement</Link>
            <Link to="/trust" className="hover:text-ink">Accessibility</Link>
            <Link to="/evidence" className="hover:text-ink">Corrections</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
