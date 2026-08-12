import {
  AlertTriangle,
  BarChart3,
  Bot,
  Compass,
  Database,
  FileText,
  Gauge,
  GraduationCap,
  HandCoins,
  Users,
  Megaphone,
  MapPinned,
  Network,
  Radar,
  ShieldAlert,
  Store,
  Target,
  TrendingUp,
} from "lucide-react";

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold text-balance sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-muted">{intro}</p>}
    </div>
  );
}

/* ------------------------------ Problem ------------------------------ */

const PROBLEMS = [
  {
    icon: Compass,
    title: "Intuition-based decision making",
    body: "Campaign capital is committed on instinct and anecdote, with no measurable link between spend and movement.",
  },
  {
    icon: Users,
    title: "Inefficient volunteer management",
    body: "Field forces are deployed statically, without live signals to re-task people toward the constituencies that matter.",
  },
  {
    icon: Gauge,
    title: "Poor real-time visibility",
    body: "Leadership operates on lagging reports instead of a live command view of ground reality across booths.",
  },
  {
    icon: BarChart3,
    title: "Unsupported poll insights",
    body: "Forecasts rest on thin samples and opinion, disconnected from historical results and hyperlocal signals.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The gap"
          title="Modern campaigns are still run on yesterday's instruments."
          intro="Four structural failures cost mandates every cycle. Publytics was built to close each one with an intelligence-infused operating model."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <article key={p.title} className="bg-surface px-7 py-9">
              <p.icon className="h-6 w-6 text-signal-soft" aria-hidden="true" />
              <h3 className="mt-5 text-base font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Platform ------------------------------ */

const PRODUCTS = [
  {
    name: "Votics",
    icon: Database,
    tag: "Data core",
    role: "Unified voter data, voter intelligence, customization & extensibility",
    caps: ["Granular behavioural data", "Voter analytics", "Governance & privacy", "Integrations"],
    featured: true,
  },
  {
    name: "VotEngage",
    icon: Megaphone,
    tag: "Outreach",
    role: "Voter outreach & marketing automation",
    caps: ["Journey orchestration", "Engagement optimization", "Field team enablement", "Compliance"],
  },
  {
    name: "VotBot",
    icon: Bot,
    tag: "Conversational AI",
    role: "Prospecting & conversational AI",
    caps: ["Natural language understanding", "Multilingual support", "Persona-based targeting", "Omnichannel access"],
  },
  {
    name: "VotReady",
    icon: MapPinned,
    tag: "Field ops",
    role: "Micro-targeting & booth management",
    caps: ["Booth workforce management", "Voter outreach tools", "Polling site operations", "AI assistance"],
  },
  {
    name: "VotCMS",
    icon: FileText,
    tag: "Content",
    role: "Content creation & content management",
    caps: ["Content authoring", "Content optimization", "Omnichannel publishing", "Compliance guardrails"],
  },
  {
    name: "VotNxt",
    icon: Radar,
    tag: "War room",
    role: "Monitoring, alerts & war room management",
    caps: ["Unified command dashboard", "Prediction engine", "AI-powered analytics", "Localization engine"],
  },
  {
    name: "VotFund",
    icon: HandCoins,
    tag: "Finance",
    role: "Fund raising & donation management",
    caps: ["Donor intelligence", "Predictive analytics", "Omni-channel activation", "Compliance database"],
  },
];

const ECOSYSTEM = [
  { icon: Store, title: "Marketplace", body: "Find integrations, templates and services." },
  { icon: GraduationCap, title: "Academy", body: "Learn new skills and gain credentials." },
  { icon: Network, title: "Network", body: "Join our community and grow your craft." },
];

export function PlatformSection() {
  return (
    <section id="platform" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="VotHub platform"
          title="One AI-powered suite, from voter insight to war room command."
          intro="VotHub is an end-to-end integrated suite of seven AI-powered SaaS products for orchestrating data-driven campaigns — spanning voter insights, field execution and command centre capability on a single intelligence core."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className={`surface-panel rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                p.featured ? "lg:col-span-3 lg:flex lg:items-start lg:gap-10" : ""
              }`}
            >
              <div className={p.featured ? "lg:w-1/2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                    <p.icon className="h-5 w-5 text-signal" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    <p className="eyebrow mt-0.5">{p.tag}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-muted">{p.role}</p>
              </div>
              <ul
                className={`mt-6 grid gap-2 text-sm text-ink-muted ${
                  p.featured ? "lg:mt-0 lg:w-1/2 lg:grid-cols-2" : ""
                }`}
              >
                {p.caps.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {ECOSYSTEM.map((e) => (
            <div key={e.title} className="bg-surface px-7 py-7">
              <e.icon className="h-5 w-5 text-signal-soft" aria-hidden="true" />
              <h3 className="mt-4 text-base font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Use cases ------------------------------ */

const USE_CASES = [
  {
    icon: Target,
    title: "Hyper-personalized voter outreach",
    body: "Build targeted voter segments using an aggregated 360-degree analytical data asset.",
  },
  {
    icon: Users,
    title: "Volunteer utilization optimization",
    body: "Collect real-time canvassing inputs through mobile apps, guiding dynamic re-tasking.",
  },
  {
    icon: FileText,
    title: "Intelligent campaign content strategy",
    body: "Conduct data-driven audience research using Votics to determine messaging resonance.",
  },
  {
    icon: HandCoins,
    title: "Donor and financing management",
    body: "Build a 360-degree donor view leveraging transaction and interaction data using VotFund.",
  },
  {
    icon: TrendingUp,
    title: "Election results prediction",
    body: "Refine electoral forecasts in Votics with predictive algorithms using historical data and hyperlocal signals.",
  },
  {
    icon: ShieldAlert,
    title: "Media monitoring & misinformation mitigation",
    body: "Enable rapid response actions using bot assistants to counter fake propaganda.",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="border-t border-border bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Use cases"
          title="Where intelligence converts into mandate."
          intro="Deployed patterns that campaign leadership, field directors and finance teams put to work from day one."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u) => (
            <article key={u.title} className="group rounded-xl border border-border bg-surface p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary transition-colors group-hover:bg-primary">
                <u.icon
                  className="h-5 w-5 text-signal transition-colors group-hover:text-primary-foreground"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-6 text-base font-bold">{u.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{u.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Votics spotlight ------------------------------ */

const VOTICS_PILLARS = [
  "Granular behavioural data collection",
  "Voter analytics",
  "Activation and personalization",
  "Governance and privacy",
  "Monitoring and optimization",
  "Integrations",
];

export function VoticsSection() {
  return (
    <section id="votics" className="relative overflow-hidden border-t border-border py-24">
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="eyebrow">Votics · the intelligence core</p>
          <h2 className="mt-4 text-3xl font-extrabold text-balance sm:text-4xl">
            Revolutionizing politics with data-driven engagement.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Every VotHub product writes to and reads from Votics — a single, governed voter data asset.
            One resolved voter identity, one analytics layer, one compliance posture across outreach,
            field, content, war room and fundraising.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {VOTICS_PILLARS.map((p) => (
              <li
                key={p}
                className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-ink-muted"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-panel rounded-2xl p-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="font-display text-sm font-bold tracking-[0.18em]">VOTICS</p>
            <span className="eyebrow">Live constituency view</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { k: "Voter file", v: "4.82M" },
              { k: "Resolved", v: "98.4%" },
              { k: "Segments", v: "312" },
            ].map((s) => (
              <div key={s.k} className="rounded-md bg-navy-deep px-4 py-4">
                <p className="font-display text-xl font-extrabold">{s.v}</p>
                <p className="mt-1 text-xs text-ink-muted">{s.k}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex h-40 items-end gap-2 rounded-md bg-navy-deep p-4">
            {[38, 55, 34, 72, 48, 88, 61, 76, 44, 92, 67, 58].map((h, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="flex-1 rounded-t-sm bg-[image:var(--gradient-signal)] opacity-90"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-muted">
            Illustrative interface. Turnout propensity by booth cluster, refreshed hourly.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Services ------------------------------ */

const SERVICES = [
  {
    title: "Research services",
    items: [
      "Policy landscape analysis",
      "Public opinion polling",
      "Voter psychographic studies",
      "Feasibility assessment",
    ],
  },
  {
    title: "Analytics services",
    items: [
      "Campaign effectiveness audits",
      "Microtargeting model development",
      "Predictive intelligence configuration",
      "Custom reporting dashboards",
    ],
  },
  {
    title: "Strategic services",
    items: [
      "Scenario planning workshops",
      "Communication plan formulation",
      "Field program blueprinting",
      "Misinformation wargaming",
    ],
  },
  {
    title: "Enablement services",
    items: [
      "Platform implementation",
      "Managed end-to-end execution",
      "Hypercare & rapid response support",
      "Administrator & end user training",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Intelligence services"
          title="Platform plus practitioners."
          intro="Technology alone does not win elections. Our research, analytics, strategy and enablement practices stand behind every deployment."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="bg-surface px-7 py-9">
              <p className="font-mono text-xs text-signal">0{i + 1}</p>
              <h3 className="mt-4 text-base font-bold">{s.title}</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
                {s.items.map((item) => (
                  <li key={item} className="border-t border-border pt-2.5 first:border-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Market ------------------------------ */

const MARKETS = [
  { region: "India", size: "$3B", note: "by 2025 · 17% CAGR" },
  { region: "USA", size: "$5B", note: "14% CAGR" },
  { region: "Global", size: "$10B", note: "15% CAGR" },
];

const SEGMENTS = [
  { name: "Voter data management", value: "$1B", pct: 100 },
  { name: "Field automation", value: "$800M", pct: 80 },
  { name: "Voter engagement", value: "$500M", pct: 50 },
  { name: "Donations management", value: "$300M", pct: 30 },
  { name: "Command centre ops", value: "$200M", pct: 20 },
  { name: "Content production", value: "$100M", pct: 10 },
  { name: "Conversational AI", value: "$50M", pct: 6 },
];

export function MarketSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Category outlook"
          title="A massive, compounding global market."
          intro="Political technology spend is consolidating around integrated, intelligence-led platforms — exactly the position VotHub occupies."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {MARKETS.map((m) => (
            <div key={m.region} className="surface-panel rounded-xl px-8 py-9">
              <p className="eyebrow">{m.region}</p>
              <p className="mt-3 font-display text-4xl font-extrabold text-gradient-signal">{m.size}</p>
              <p className="mt-2 text-sm text-ink-muted">{m.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-8">
          <p className="eyebrow">Addressable segments</p>
          <ul className="mt-7 space-y-5">
            {SEGMENTS.map((s) => (
              <li key={s.name}>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="font-mono text-ink-muted">{s.value}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-deep">
                  <span
                    aria-hidden="true"
                    className="block h-full rounded-full bg-[image:var(--gradient-signal)]"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Team ------------------------------ */

const TEAM = [
  { name: "M. K. Elango", role: "Founder & Chief Strategist" },
  { name: "Poonthamil", role: "Co-founder & CMO" },
  { name: "Thedal Anandhan", role: "Co-founder & CRO" },
  { name: "Dr. Sethuraman", role: "Co-founder & CDO" },
  { name: "Giridharan P", role: "Co-founder & CTO" },
];

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TeamSection() {
  return (
    <section id="company" className="border-t border-border bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Core team"
          title="Operators, data scientists and campaign strategists."
          intro="A founding bench that has carried research, technology and go-to-market responsibility across contested mandates."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {TEAM.map((t) => (
            <article key={t.name} className="rounded-xl border border-border bg-surface p-7 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border bg-navy-deep font-display text-lg font-bold text-signal">
                {initials(t.name)}
              </span>
              <h3 className="mt-5 text-sm font-bold">{t.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{t.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */

import { BriefingForm } from "./BriefingForm";

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90"
      />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="eyebrow">Engage Publytics</p>
          <h2 className="mt-4 text-3xl font-extrabold text-balance sm:text-4xl">
            Bring evidence to your next mandate.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
            Request a confidential executive briefing. We will walk your leadership through the VotHub
            platform, a constituency-level intelligence sample and a deployment roadmap for your cycle.
          </p>
        </div>

        <div className="mt-10">
          <BriefingForm />
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-ink-muted">
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
          All engagements operate under strict confidentiality and electoral compliance guardrails.
        </p>
      </div>
    </section>
  );
}
