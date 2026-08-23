import { ArrowRight, Building2, Landmark, Microscope, ShieldCheck } from "lucide-react";

const AUDIENCES = [
  { icon: Landmark, label: "Government & public sector", href: "#government" },
  { icon: Building2, label: "Enterprise & GCCs", href: "#enterprise" },
  { icon: Microscope, label: "Civic & research institutions", href: "#research" },
];

const SIGNALS = [42, 57, 49, 66, 61, 74, 68, 82, 77, 86, 80, 91];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-hero pt-28 lg:pt-36">
      <div aria-hidden="true" className="data-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-10 lg:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Public-interest data infrastructure
          </p>
          <h1 className="mt-7 text-4xl leading-[1.06] font-semibold text-balance sm:text-5xl lg:text-6xl">
            The data and AI infrastructure public institutions run on.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Publytics is the layer between government, the people it serves, and the organisations that
            work alongside both—built for public-sector reality, institutional accountability, and India’s
            multilingual context.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#government" className="action-primary">
              Explore solutions <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="action-secondary">Request a briefing</a>
          </div>
        </div>

        <div className="signal-panel" aria-label="Illustrative public systems signal monitor">
          <div className="flex items-center justify-between border-b border-strong pb-4">
            <div>
              <p className="font-mono text-[0.68rem] uppercase text-ink-muted">Public systems monitor</p>
              <p className="mt-1 text-sm font-semibold">Service signal overview</p>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase text-live">
              <span className="h-2 w-2 rounded-full bg-live motion-safe:animate-pulse" /> Live
            </span>
          </div>
          <div className="mt-6 flex h-32 items-end gap-2" aria-hidden="true">
            {SIGNALS.map((height, index) => (
              <span key={index} className="flex-1 bg-live-muted" style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-strong pt-4 text-xs">
            <div><p className="font-mono text-ink-muted">SIGNALS</p><p className="mt-1 font-semibold">12 active</p></div>
            <div><p className="font-mono text-ink-muted">LANGUAGE</p><p className="mt-1 font-semibold">Multilingual</p></div>
            <div><p className="font-mono text-ink-muted">REVIEW</p><p className="mt-1 font-semibold">Human-led</p></div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">Illustrative interface. No client or citizen data is shown.</p>
        </div>
      </div>

      <div className="relative border-t border-border bg-surface/70">
        <nav aria-label="Solutions by audience" className="mx-auto grid max-w-7xl md:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <a key={audience.label} href={audience.href} className="group flex items-center justify-between gap-4 border-b border-border px-6 py-5 transition-colors hover:bg-surface md:border-r md:border-b-0 md:last:border-r-0 lg:px-10">
              <span className="flex items-center gap-3 text-sm font-semibold">
                <audience.icon className="h-5 w-5 text-primary" aria-hidden="true" /> {audience.label}
              </span>
              <ArrowRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}