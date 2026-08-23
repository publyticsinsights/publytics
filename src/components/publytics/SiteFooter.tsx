import { Logo } from "./Logo";

const COLUMNS = [
  { title: "Solutions", links: [["Government & public sector", "#government"], ["Enterprise & GCCs", "#enterprise"], ["Civic & research", "#research"]] },
  { title: "Explore", links: [["Product families", "#products"], ["Services", "#services"], ["AI principles", "#ai"], ["Insights", "#insights"]] },
  { title: "Institutional", links: [["Trust & governance", "#trust"], ["Request a briefing", "#contact"], ["Methodology", "#insights"]] },
];

export function SiteFooter() {
  return <footer className="border-t border-inverse-border bg-ink text-inverse"><div className="content-shell py-14"><div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]"><div><Logo/><p className="mt-5 max-w-sm text-sm leading-relaxed text-inverse-muted">Data and AI infrastructure for government, enterprise, and institutions working in the public interest.</p></div>{COLUMNS.map((c) => <nav key={c.title} aria-label={c.title}><h2 className="font-mono text-[0.68rem] uppercase text-live">{c.title}</h2><ul className="mt-5 space-y-3">{c.links.map(([label, href]) => <li key={label}><a href={href} className="text-sm text-inverse-muted transition-colors hover:text-inverse">{label}</a></li>)}</ul></nav>)}</div><div className="mt-14 flex flex-col gap-4 border-t border-inverse-border pt-7 text-xs text-inverse-muted sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Publytics. All rights reserved.</p><div className="flex flex-wrap gap-5"><span>India</span><span>Privacy</span><span>Data governance</span><span>Accessibility</span></div></div></div></footer>;
}