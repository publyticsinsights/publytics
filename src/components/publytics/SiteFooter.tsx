import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Platform",
    links: ["Votics", "VotEngage", "VotBot", "VotReady", "VotCMS", "VotNxt", "VotFund"],
  },
  {
    title: "Services",
    links: ["Research", "Analytics", "Strategy", "Enablement"],
  },
  {
    title: "Ecosystem",
    links: ["Marketplace", "Academy", "Network"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              Political Research, Strategy &amp; Action. Data-driven insights that transform political
              landscapes and empower change-makers.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="eyebrow">{col.title}</h2>
              <ul className="mt-5 space-y-3 text-sm text-ink-muted">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#platform" className="transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Publytics. All rights reserved.</p>
          <p>India · United States · Europe</p>
        </div>
      </div>
    </footer>
  );
}
