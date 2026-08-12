import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, ShieldCheck } from "lucide-react";

const METRICS = [
  { value: "7", label: "AI-powered products in VotHub" },
  { value: "360°", label: "Unified voter data asset" },
  { value: "$10B", label: "Global addressable market" },
  { value: "15%", label: "Global category CAGR" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] opacity-80"
      />
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Political Research, Strategy &amp; Action
          </p>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl">
            Win with evidence.
            <span className="block text-gradient-signal">Not intuition.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Publytics leverages data-driven insights to transform political landscapes and empower
            change-makers — combining <strong className="font-semibold text-foreground">VotHub</strong>, an
            integrated suite of seven AI-powered campaign products, with senior research, analytics and
            strategy counsel.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-signal)] transition-opacity hover:opacity-90"
            >
              Request an executive briefing
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Explore the VotHub platform
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-navy-deep/80 px-6 py-7 backdrop-blur">
              <dt className="font-display text-3xl font-extrabold text-foreground">{m.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-ink-muted">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
