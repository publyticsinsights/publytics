import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_COLUMNS, PRIMARY_NAV, UTILITY_NAV } from "@/content/nav";

/* The palette (cmdk + dialog) is loaded on first use, not on every page. */
const SearchPalette = lazy(() => import("./search"));
import { FACTS } from "@/content/dates";

/* ─────────────────────────────────────────────────────────────
   Announcement bar. Near-black, 12px, centred, dismissible.
   Carries the nearest dated commitment, not a slogan.
   ───────────────────────────────────────────────────────────── */
export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-60 bg-ink-deep text-inverse">
      <div className="flex items-center justify-center px-10 py-2.5 text-center">
        <p className="text-[0.8125rem] leading-5">
          <span className="text-inverse-dim">DPDP obligations apply in full on {FACTS.dpdpFull.value}.</span>{" "}
          <Link to="/dpdp" className="border-b border-inverse-dim pb-px hover:border-inverse">
            Readiness, with the dates corrected
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

/* ─────────────────────────────────────────────────────────────
   Header. Inset from the page edges, floating over the hero.
   Desktop shows the primary IA inline; the full index opens as
   a full-screen menu. `tone="dark"` over a dark hero.
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
  const [searchOpen, setSearchOpenState] = useState(false);
  const [searchUsed, setSearchUsed] = useState(false);
  const setSearchOpen = (o: boolean) => {
    if (o) setSearchUsed(true);
    setSearchOpenState(o);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement | null)?.closest("input, textarea, select, [contenteditable]");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onDark = tone === "dark" && !scrolled;

  return (
    <>
      <a href="#main" className="sr-only z-[90] bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <div className="sticky top-0 z-50">
        <div className={`transition-colors duration-200 ${scrolled ? "border-b border-line bg-paper/90 backdrop-blur-xl" : ""}`}>
          <div className="px-3 pt-3 pb-3 sm:px-5 sm:pt-4 sm:pb-4">
            <div
              className={`mx-auto flex h-14 max-w-[84.5rem] items-center justify-between gap-6 px-4 transition-colors duration-200 sm:h-15 sm:px-5 ${
                onDark ? "bg-ink/55 backdrop-blur-md" : "bg-transparent"
              }`}
            >
              <div className="flex min-w-0 items-center gap-3">
                <Link to="/" aria-label="Publytics home" className="shrink-0">
                  <Logo className={onDark ? "text-inverse" : "text-ink"} />
                </Link>
                {section && (
                  <p className={`hidden truncate text-[0.9375rem] md:block xl:hidden ${onDark ? "text-inverse-dim" : "text-steel"}`}>
                    <span className="mr-2">/</span>
                    {section}
                  </p>
                )}
              </div>

              <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
                {PRIMARY_NAV.map((n) => (
                  <Link
                    key={n.href}
                    to={n.href}
                    activeProps={{ "aria-current": "page", className: onDark ? "!text-inverse" : "!text-ink" }}
                    className={`text-[0.9375rem] transition-colors ${onDark ? "text-inverse-dim hover:text-inverse" : "text-steel hover:text-ink"}`}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>

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
                    onClick={() => setSearchOpen(true)}
                    aria-label="Search (Ctrl+K)"
                    aria-haspopup="dialog"
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
                    aria-controls="site-menu"
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
          <div className={`transition-colors duration-200 ${scrolled ? "border-b border-line bg-paper/90 backdrop-blur-xl" : "bg-paper"}`}>
            <div className="shell">
              <nav aria-label="Section navigation" className="flex gap-x-6 overflow-x-auto py-3 [scrollbar-width:none]">
                {subnav.map((s) => (
                  <a key={s.label} href={s.href} className="shrink-0 text-[0.9375rem] text-steel transition-colors hover:text-ink">
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {searchUsed && (
        <Suspense fallback={null}>
          <SearchPalette open={searchOpen} onOpenChange={setSearchOpen} />
        </Suspense>
      )}

      {/* Full-screen menu — the complete index */}
      {menuOpen && (
        <div id="site-menu" role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-70 overflow-y-auto bg-ink text-inverse">
          <div className="px-3 pt-3 sm:px-5 sm:pt-4">
            <div className="mx-auto flex h-14 max-w-[84.5rem] items-center justify-between px-4 sm:h-15 sm:px-5">
              <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Publytics home">
                <Logo className="text-inverse" />
              </Link>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex h-10 items-center gap-2 border border-white/25 px-3 text-[0.875rem] text-inverse-dim transition-colors hover:bg-white/10 hover:text-inverse"
                >
                  <Search className="h-4 w-4" strokeWidth={1.5} /> Search
                </button>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  autoFocus
                  className="flex h-10 w-10 items-center justify-center border border-white/25 text-inverse transition-colors hover:bg-white/10"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          <div className="shell pt-10 pb-20 lg:pt-14">
            <div className="grid gap-px bg-line-inverse md:grid-cols-3">
              {UTILITY_NAV.map((u) => (
                <Link
                  key={u.href}
                  to={u.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-end justify-between gap-6 bg-ink p-6 transition-colors hover:bg-ink-raised"
                >
                  <span>
                    <span className="t-label block text-inverse-faint">{u.hint}</span>
                    <span className="t-h3 mt-3 block text-inverse">{u.label}</span>
                  </span>
                  <ArrowRight className="mb-1 h-5 w-5 shrink-0 text-inverse-dim transition-transform group-hover:translate-x-1" strokeWidth={1.25} />
                </Link>
              ))}
            </div>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-8">
              {NAV_COLUMNS.map((col) => (
                <div key={col.title}>
                  <Link to={col.href} onClick={() => setMenuOpen(false)} className="t-label text-inverse-faint hover:text-inverse">
                    {col.title}
                  </Link>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          to={l.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-[0.9375rem] leading-snug text-inverse-dim transition-colors hover:text-inverse"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rule-inverse mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 pt-8">
              <p className="t-micro max-w-xl text-inverse-faint">
                We sell to institutions. Never to contestants.
              </p>
              <span className="t-label ml-auto text-inverse-faint">
                <span lang="ta" className="normal-case">தமிழ்</span> edition in preparation
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Footer. Dense multi-column index derived from the registries,
   so it always agrees with the pages it links to.
   ───────────────────────────────────────────────────────────── */
export function SiteFooter() {
  return (
    <footer className="rule bg-paper">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[17rem_1fr] lg:gap-16">
          <div>
            <Logo className="text-ink" />
            <p className="t-micro mt-5 max-w-[15rem] text-graphite">
              The data and AI infrastructure public institutions run on. One evidence chain, from commitment to delivery.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              {UTILITY_NAV.map((u) => (
                <Link key={u.href} to={u.href} className="link-arrow text-[0.875rem] text-ink">
                  {u.label} <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6">
            {NAV_COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="t-label text-steel">
                  <Link to={col.href} className="hover:text-ink">
                    {col.title}
                  </Link>
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="text-[0.875rem] leading-snug text-graphite transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="rule mt-14 flex flex-col gap-4 pt-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="t-micro text-steel">© {new Date().getFullYear()} Publytics · Registered in India</p>
            <p className="t-micro text-steel">
              EN · <span lang="ta">தமிழ்</span> in preparation
            </p>
          </div>
          <p className="t-micro max-w-xl text-steel lg:text-center">
            Publytics does not provide political targeting or persuasion systems to political parties or candidates.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 t-micro text-steel">
            <Link to="/trust" hash="data-governance" className="hover:text-ink">Privacy &amp; DPDP</Link>
            <Link to="/trust" hash="accessibility" className="hover:text-ink">Accessibility</Link>
            <Link to="/evidence/corrections" className="hover:text-ink">Corrections</Link>
            <a href="/sitemap.xml" className="hover:text-ink">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page frame — every route renders inside this.
   ───────────────────────────────────────────────────────────── */
export function PageFrame({
  children,
  tone,
  section,
  subnav,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  section?: string;
  subnav?: { label: string; href: string }[];
}) {
  useReveal();
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader tone={tone ?? "light"} {...(section ? { section } : {})} {...(subnav ? { subnav } : {})} />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}

/** Arms `[data-reveal]` blocks only after hydration, so no-JS readers see everything. */
function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of els) {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("reveal-armed");
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, []);
}
