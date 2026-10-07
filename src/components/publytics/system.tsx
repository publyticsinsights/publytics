import { useId, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Minus } from "lucide-react";

/* ══════════════════════════════════════════════════════════
   SECTION PRIMITIVES
   ══════════════════════════════════════════════════════════ */

export function Eyebrow({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "steel" | "live" | "seal" | "inverse";
}) {
  const colour = {
    ink: "text-ink",
    steel: "text-steel",
    live: "text-live",
    seal: "text-seal",
    inverse: "text-inverse-faint",
  }[tone];
  return (
    <p className={`t-label flex items-center gap-2 ${colour}`}>
      <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-current" />
      {children}
    </p>
  );
}

/** Two-column asymmetric page header: big title left, short brief right. */
export function PageHeader({
  eyebrow,
  title,
  brief,
  actions,
}: {
  eyebrow?: string;
  title: ReactNode;
  brief?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className="shell pt-10 pb-14 lg:pt-16 lg:pb-20">
      {eyebrow && (
        <div className="mb-8">
          <Eyebrow tone="steel">{eyebrow}</Eyebrow>
        </div>
      )}
      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
        <h1 className="t-display-xl">{title}</h1>
        {brief && <p className="t-lead max-w-md text-graphite lg:pb-2">{brief}</p>}
      </div>
      {actions && <div className="mt-10 flex flex-wrap gap-3">{actions}</div>}
    </header>
  );
}

/** A statement set large in muted grey, with an optional emphasised phrase. */
export function Statement({
  children,
  className = "",
  align = "left",
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={`t-display max-w-5xl text-graphite/80 ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {children}
    </p>
  );
}

/** The emphasised phrase inside a Statement — the Atlas cover's serif italic. */
export function Say({ children }: { children: ReactNode }) {
  return <em className="t-serif-i text-ink">{children}</em>;
}

/* ══════════════════════════════════════════════════════════
   THE PROVENANCE CHIP
   A figure without one does not render. If provenance is
   missing, the number is missing.
   ══════════════════════════════════════════════════════════ */

interface ChipProps {
  source: string;
  method: string;
  date: string;
  live?: boolean;
  version?: string;
  coverage?: string;
  limitations?: string;
}

export function ProvenanceChip({
  source,
  method,
  date,
  live = false,
  version,
  coverage,
  limitations,
}: ChipProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={`chip ${live ? "text-live" : "text-steel"}`}
      >
        <span aria-hidden="true">⌐</span>
        {source} · {live ? "live " : ""}
        {date}
      </button>
      {open && (
        <span
          id={id}
          role="note"
          className="absolute left-0 top-full z-30 mt-2 block w-[min(22rem,80vw)] border border-line bg-surface p-4 text-left shadow-[0_18px_50px_-30px_rgba(27,30,38,.5)]"
        >
          <span className="t-label block text-steel">Provenance record</span>
          <span className="mt-3 block space-y-1.5 font-mono text-[0.6875rem] leading-relaxed text-graphite">
            <span className="block">
              <span className="text-steel">source </span>
              {source}
            </span>
            <span className="block">
              <span className="text-steel">method </span>
              {method}
            </span>
            <span className="block">
              <span className="text-steel">effective </span>
              {date}
              {version ? ` · v${version}` : ""}
            </span>
            {coverage && (
              <span className="block">
                <span className="text-steel">coverage </span>
                {coverage}
              </span>
            )}
            {limitations && (
              <span className="block">
                <span className="text-steel">limits </span>
                {limitations}
              </span>
            )}
          </span>
        </span>
      )}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════
   /0.1  THE NUMBERED CAPABILITY ROW
   ══════════════════════════════════════════════════════════ */

export function IndexRow({
  index,
  kicker,
  title,
  children,
  href,
  linkLabel = "Read more",
}: {
  index: string;
  kicker: string;
  title: string;
  children?: ReactNode;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <article className="index-row group">
      <div>
        <p className="t-micro leading-snug text-graphite">{kicker}</p>
        <p className="t-index mt-6 text-silver">/{index}</p>
      </div>
      <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
        <div>
          <h3 className="t-h2 transition-colors group-hover:text-brand">{title}</h3>
          {children && <div className="t-small mt-4 max-w-xl text-graphite">{children}</div>}
        </div>
        {href && (
          <Link to={href} className="link-arrow mt-6 shrink-0 text-ink lg:mt-2">
            {linkLabel} <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        )}
      </div>
    </article>
  );
}

/* ══════════════════════════════════════════════════════════
   THE OPERATING LOOP — pill tab switcher
   Record · Verify · Publish · Challenge · Correct
   ══════════════════════════════════════════════════════════ */

export const LOOP = [
  {
    step: "Record",
    line: "Capture the commitment as it is made.",
    body: "Every commitment, delivery event, and grievance enters as a typed record at the moment it happens — not reconstructed later from a spreadsheet.",
    points: [
      "One shared definition of a promise, across every department.",
      "Multilingual at the schema, not at the presentation layer.",
      "The record is addressable, so it can be cited.",
    ],
  },
  {
    step: "Verify",
    line: "Check it against something that is not itself.",
    body: "A record is checked against a second, independent source before it is treated as fact. Self-declaration alone does not clear the bar.",
    points: [
      "Source, method, and confidence attach to the fact, not the report.",
      "Conflicting figures are held side by side, not silently reconciled.",
      "Where verification fails, the record says so.",
    ],
  },
  {
    step: "Publish",
    line: "Ship it on a date you announced in advance.",
    body: "Verified records ship on an announced date, versioned, with the method attached — so the figure can be found and cited, not just stated.",
    points: [
      "A machine-readable dataset accompanies every edition.",
      "A diff against the previous edition is published with it.",
      "Reuse terms are stated per output.",
    ],
  },
  {
    step: "Challenge",
    line: "Give the reader the means to disagree.",
    body: "Every published figure carries the means to dispute it: the source, the method, and a route to raise an objection in public.",
    points: [
      "Every number carries a provenance chip.",
      "Stated error rates, not implied precision.",
      "A named person receives and answers the objection.",
    ],
  },
  {
    step: "Correct",
    line: "Publish the error before someone else finds it.",
    body: "Where a challenge is upheld, the correction is published at the same URL as the original, dated, and never quietly edited away.",
    points: [
      "The correction notice is permanent at the original address.",
      "The change log carries what was wrong and how it happened.",
      "Corrections are counted, and the count is published.",
    ],
  },
];

export function OperatingLoop({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [active, setActive] = useState(0);
  const dark = tone === "dark";
  const item = LOOP[active] ?? LOOP[0]!;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {LOOP.map((l, i) => (
          <button
            key={l.step}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={
              dark
                ? `pill-on-dark ${i === active ? "pill-on-dark-active" : ""}`
                : `pill ${i === active ? "pill-active" : ""}`
            }
          >
            {l.step}
          </button>
        ))}
      </div>

      <div className={`mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16 ${dark ? "" : ""}`}>
        <div>
          <h3 className={`t-h3 ${dark ? "text-inverse" : ""}`}>{item.line}</h3>
          <p className={`t-small mt-4 max-w-md ${dark ? "text-inverse-dim" : "text-graphite"}`}>
            {item.body}
          </p>
        </div>
        <ul className={dark ? "" : ""}>
          {item.points.map((p) => (
            <li
              key={p}
              className={`flex gap-4 py-5 text-[0.9375rem] leading-relaxed ${
                dark ? "rule-inverse text-inverse-dim" : "rule text-graphite"
              } last:border-b-0`}
            >
              <Minus
                className={`mt-1.5 h-3 w-3 shrink-0 ${dark ? "text-live-bright" : "text-live"}`}
                strokeWidth={2}
              />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   THE DISCLOSURE TRIPTYCH
   Fixed shape. A page that cannot populate it does not render.
   ══════════════════════════════════════════════════════════ */

export function DisclosureTriptych({
  used,
  notDone,
  review,
  tone = "dark",
}: {
  used: string;
  notDone: string;
  review: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  const rows = [
    { n: "01", label: "Where AI is used", text: used },
    { n: "02", label: "What it does not do", text: notDone },
    { n: "03", label: "Human review", text: review },
  ];
  return (
    <div>
      {rows.map((r) => (
        <div
          key={r.n}
          className={`grid gap-2 py-6 sm:grid-cols-[2.5rem_10rem_1fr] sm:gap-6 ${dark ? "rule-inverse" : "rule"}`}
        >
          <span className={`t-index ${dark ? "text-live-bright" : "text-live"}`}>{r.n}</span>
          <h3 className={`text-[0.9375rem] ${dark ? "text-inverse" : "text-ink"}`}>{r.label}</h3>
          <p
            className={`text-[0.9375rem] leading-relaxed ${dark ? "text-inverse-dim" : "text-graphite"}`}
          >
            {r.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   THE BOUNDARY PANEL — seal reservation
   ══════════════════════════════════════════════════════════ */

export function BoundaryPanel({
  children,
  eyebrow = "Our boundary",
}: {
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="boundary">
      <Eyebrow tone="seal">{eyebrow}</Eyebrow>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function CorrectionNotice({ date, children }: { date: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-seal bg-seal-tint px-6 py-5">
      <p className="t-label text-seal">Corrected {date}</p>
      <p className="t-small mt-2.5 text-graphite">{children}</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   THE INTEGRITY CHECKLIST — versioned, dated, five items
   ══════════════════════════════════════════════════════════ */

const CHECKLIST = [
  "Source and collection method disclosed",
  "Funding or commissioning party named",
  "Update date and version history visible",
  "Limitations stated in plain language",
  "Download format and reuse terms specified",
];

export function IntegrityChecklist({
  version = "1.0",
  date = "4 Sep 2026",
}: {
  version?: string;
  date?: string;
}) {
  return (
    <div className="border border-line bg-surface">
      <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-5">
        <div>
          <p className="t-label text-steel">The Method Standard</p>
          <h3 className="t-h4 mt-1.5">Publication integrity checklist</h3>
        </div>
        <span className="t-label shrink-0 border border-live/30 bg-live-tint px-2.5 py-1.5 text-live">
          v{version}
        </span>
      </div>
      <ol>
        {CHECKLIST.map((item, i) => (
          <li
            key={item}
            className="grid grid-cols-[2.5rem_1fr] items-baseline gap-2 border-b border-line px-6 py-4 last:border-b-0"
          >
            <span className="t-index text-silver">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[0.9375rem] leading-snug text-graphite">{item}</span>
          </li>
        ))}
      </ol>
      <div className="border-t border-line px-6 py-3.5">
        <p className="t-label text-steel">Published {date} · open and versioned</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   THE SERIES ISSUE CARD
   Two panels: a colour field with micro rails, and a
   generative geometric field. One colour per issue.
   ══════════════════════════════════════════════════════════ */

const ISSUE_THEMES: Record<string, { bg: string; art: string; fg: string }> = {
  indigo: { bg: "#1B2A4E", art: "#22335C", fg: "#F2F3F7" },
  teal: { bg: "#0F6B60", art: "#147A6D", fg: "#EAF5F2" },
  seal: { bg: "#8E2A1F", art: "#A03327", fg: "#FBEDEA" },
  slate: { bg: "#3C4048", art: "#474C55", fg: "#F0F1F3" },
};

export function IssueCard({
  series = "Publytics Evidence",
  issue,
  title,
  subtitle,
  theme = "indigo",
  status,
}: {
  series?: string;
  issue: string;
  title: string;
  subtitle: string;
  theme?: keyof typeof ISSUE_THEMES;
  status?: string;
}) {
  const t = ISSUE_THEMES[theme] ?? ISSUE_THEMES["indigo"]!;
  return (
    <article className="issue-card" style={{ background: t.bg, color: t.fg }}>
      <div className="flex flex-col justify-between p-5 lg:p-6">
        <div
          className="flex items-center gap-3 border-b pb-3"
          style={{ borderColor: "rgba(255,255,255,.22)" }}
        >
          <span className="t-label" style={{ opacity: 0.85 }}>
            {series}
          </span>
          <span className="t-label ml-auto" style={{ opacity: 0.85 }}>
            № {issue}
          </span>
        </div>
        <div className="py-8">
          <h3 className="t-h3 flex items-start gap-2" style={{ color: t.fg }}>
            {title}
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0" strokeWidth={1.5} />
          </h3>
          <p className="t-micro mt-3 max-w-xs" style={{ opacity: 0.78 }}>
            — {subtitle}
          </p>
        </div>
        <div
          className="flex items-center gap-4 border-t pt-3"
          style={{ borderColor: "rgba(255,255,255,.22)" }}
        >
          <span className="t-label" style={{ opacity: 0.7 }}>
            Publytics
          </span>
          <span className="t-label ml-auto" style={{ opacity: 0.7 }}>
            {status ?? "publytics.in"}
          </span>
        </div>
      </div>
      <div className="relative hidden overflow-hidden sm:block" style={{ background: t.art }}>
        <IssueArt seed={issue} fg={t.fg} />
      </div>
    </article>
  );
}

/** Generative geometric field — a data-shaped mark, not decoration. */
function IssueArt({ seed, fg }: { seed: string; fg: string }) {
  const n = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const dots: ReactNode[] = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 13; c++) {
      const d = Math.hypot(r - 4, c - 6);
      const on = (r * 13 + c + n) % 3 === 0 && d < 5.6;
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={24 + c * 17}
          cy={26 + r * 17}
          r={on ? 3.1 : 1.15}
          fill={fg}
          opacity={on ? 0.9 : 0.34}
        />,
      );
    }
  }
  return (
    <svg
      viewBox="0 0 260 190"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="130" cy="95" r="76" fill="none" stroke={fg} strokeWidth="0.8" opacity="0.32" />
      <circle cx="130" cy="95" r="54" fill="none" stroke={fg} strokeWidth="0.8" opacity="0.22" />
      {dots}
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════
   THE TWIN MEGA CTA
   ══════════════════════════════════════════════════════════ */

export function MegaCta() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Link to="/company" hash="contact" className="mega-cta card-lift group bg-mist text-ink">
        <span className="t-label text-steel">Government · Enterprise · Research</span>
        <span className="flex items-end justify-between gap-6">
          <span className="t-h2">Request a briefing</span>
          <ArrowRight
            className="mb-1 h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
            strokeWidth={1.25}
          />
        </span>
      </Link>
      <Link to="/public-proof" className="mega-cta card-lift group atmo text-inverse">
        <span className="t-label relative text-inverse-faint">The argument, in full</span>
        <span className="flex items-end justify-between gap-6">
          <span className="t-h2 relative text-inverse">Read Public Proof</span>
          <ArrowRight
            className="relative mb-1 h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
            strokeWidth={1.25}
          />
        </span>
      </Link>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   THE NOTCH-CORNERED QUOTE / FACT CARD
   ══════════════════════════════════════════════════════════ */

export function NotchCard({
  label,
  children,
  tone = "mist",
}: {
  label: string;
  children: ReactNode;
  tone?: "mist" | "surface";
}) {
  return (
    <article
      className={`notch flex h-full flex-col justify-between p-6 ${tone === "mist" ? "bg-mist" : "bg-surface border border-line"}`}
    >
      <p className="t-label text-steel">{label}</p>
      <div className="t-micro mt-16 text-graphite">{children}</div>
    </article>
  );
}
