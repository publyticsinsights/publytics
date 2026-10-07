import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
import { SYSTEMS, systemById } from "@/content/systems";
import { familyBySlug } from "@/content/families";
import { SEGMENT_LIST as SEGMENTS } from "@/content/segments/meta";
import { LADDER } from "@/content/offerings";
import { CALENDAR } from "@/content/dates";
import { FAMILY_ORDER, FIT_LABEL, LEVEL_LABEL, productFit } from "@/content/matrices";
import type { Fit, ProductFit, SegmentSlug, Status, SystemId } from "@/content/types";
import { Eyebrow } from "./system";

/** Structured data rendered in the body — for schema whose source data
   lives in a code-split chunk. head() must stay on light metadata only,
   because route head/loader code is NOT split. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

/* ══════════════════════════════════════════════════════════
   SYSTEM KEY
   ══════════════════════════════════════════════════════════ */

export function sysStyle(id: SystemId): CSSProperties {
  return { "--sys": systemById(id).colour } as CSSProperties;
}

export function SystemTag({ id, label }: { id: SystemId; label?: string }) {
  const s = systemById(id);
  return (
    <span className="sys-tag" style={sysStyle(id)}>
      {label ?? s.name}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════
   FIT MARKS — the Atlas matrix notation
   ══════════════════════════════════════════════════════════ */

export function FitDot({ fit, className = "" }: { fit: ProductFit | Fit; className?: string }) {
  const shape =
    fit === "P" || fit === "H"
      ? "fit-full"
      : fit === "S" || fit === "M"
        ? "fit-half"
        : fit === "-"
          ? "fit-none"
          : "";
  const label =
    fit in FIT_LABEL && (fit === "P" || fit === "S" || fit === "O")
      ? FIT_LABEL[fit as ProductFit]
      : LEVEL_LABEL[fit as Fit];
  return (
    <span role="img" aria-label={label} title={label} className={`fit-dot ${shape} ${className}`} />
  );
}

export function FitLegend({ kind = "product" }: { kind?: "product" | "level" }) {
  const items: [ProductFit | Fit, string][] =
    kind === "product"
      ? [
          ["P", "Primary — lead with it"],
          ["S", "Secondary — expand into it"],
          ["O", "Optional — on request"],
          ["-", "Not offered"],
        ]
      : [
          ["H", "High fit"],
          ["M", "Medium"],
          ["L", "Low"],
          ["-", "Not applicable"],
        ];
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {items.map(([f, l]) => (
        <li key={l} className="t-micro flex items-center gap-2 text-steel">
          <FitDot fit={f} className="text-ink" /> {l}
        </li>
      ))}
    </ul>
  );
}

/* ══════════════════════════════════════════════════════════
   STATUS — live / open / scheduled / in preparation / in scoping
   Live keeps the reserved verdigris; nothing else may use it.
   ══════════════════════════════════════════════════════════ */

export function StatusBadge({ status, label }: { status: Status; label: string }) {
  const live = status === "live";
  return (
    <span
      className={`t-label inline-flex items-center gap-1.5 border px-2 py-1 ${
        live ? "border-live/30 bg-live-tint text-live" : "border-line-strong text-steel"
      }`}
    >
      {live && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-live-mark" />}
      {label}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION HEAD — the recurring two-column opener
   ══════════════════════════════════════════════════════════ */

export function SectionHead({
  eyebrow,
  title,
  brief,
  id,
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  brief?: ReactNode;
  id?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      id={id}
      className="grid scroll-mt-32 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16"
    >
      <div>
        <Eyebrow tone={dark ? "inverse" : "steel"}>{eyebrow}</Eyebrow>
        <h2 className={`t-h2 mt-6 max-w-2xl ${dark ? "text-inverse" : ""}`}>{title}</h2>
      </div>
      {brief && (
        <p className={`t-small max-w-md lg:pb-1 ${dark ? "text-inverse-dim" : "text-graphite"}`}>
          {brief}
        </p>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   THE SOLUTION MATRIX — segment × product family (Atlas Matrix A)
   Hover or focus a row to read what that institution buys; every
   cell is derived from the matrix, never typed.
   ══════════════════════════════════════════════════════════ */

export function SolutionMatrix({ highlight }: { highlight?: SegmentSlug }) {
  const [active, setActive] = useState<SegmentSlug | null>(highlight ?? null);
  return (
    <div>
      <div className="overflow-x-auto border border-line bg-surface">
        <table className="w-full min-w-[54rem] border-collapse text-left">
          <caption className="sr-only">Which product family each institution leads with</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="t-label w-[17rem] border-b border-line px-5 py-4 align-bottom font-medium text-steel"
              >
                Institution
              </th>
              {FAMILY_ORDER.map((f) => {
                const fam = familyBySlug(f);
                return (
                  <th
                    key={f}
                    scope="col"
                    className="border-b border-line px-3 pt-0 pb-4 align-bottom font-normal"
                    style={sysStyle(fam.system)}
                  >
                    <span
                      className="mb-4 block h-[3px] w-full"
                      style={{ background: "var(--sys)" }}
                    />
                    <Link
                      to="/products/$slug"
                      params={{ slug: f }}
                      className="block text-center text-[0.78rem] leading-snug text-graphite hover:text-ink"
                    >
                      {fam.name}
                    </Link>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {SEGMENTS.map((s) => {
              const on = active === s.slug;
              return (
                <tr
                  key={s.slug}
                  onMouseEnter={() => setActive(s.slug)}
                  onMouseLeave={() => setActive(highlight ?? null)}
                  className={`border-b border-line transition-colors last:border-b-0 ${on ? "bg-tint" : ""}`}
                >
                  <th scope="row" className="px-5 py-3.5 font-normal">
                    <Link
                      to="/solutions/$slug"
                      params={{ slug: s.slug }}
                      onFocus={() => setActive(s.slug)}
                      className="flex items-baseline gap-3 text-[0.9375rem] text-ink"
                    >
                      <span className="t-index text-silver">{s.index}</span>
                      <span className="hover:underline">{s.name}</span>
                    </Link>
                  </th>
                  {FAMILY_ORDER.map((f) => {
                    const fit = productFit(s.slug, f);
                    return (
                      <td
                        key={f}
                        className="px-3 py-3.5 text-center"
                        style={sysStyle(familyBySlug(f).system)}
                      >
                        <FitDot fit={fit} className={fit === "-" ? "" : "text-[var(--sys)]"} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <FitLegend />
        <div className="flex flex-wrap gap-5">
          {SYSTEMS.map((s) => (
            <SystemTag key={s.id} id={s.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CORE → SYSTEMS → FAMILIES map (the "decoded" view)
   ══════════════════════════════════════════════════════════ */

export function SystemsMap() {
  return (
    <div className="grid gap-px bg-line md:grid-cols-3">
      {SYSTEMS.map((s) => (
        <article key={s.id} className="flex flex-col bg-surface p-7 lg:p-8" style={sysStyle(s.id)}>
          <div className="flex items-center justify-between gap-4">
            <SystemTag id={s.id} />
            <span className="t-label text-silver">{s.tag}</span>
          </div>
          <h3 className="t-h3 mt-6">{s.line}</h3>
          <p className="t-micro mt-4 text-graphite">{s.body}</p>
          <ul className="mt-auto pt-8">
            {s.families.map((f) => {
              const fam = familyBySlug(f);
              return (
                <li key={f} className="rule">
                  <Link
                    to="/products/$slug"
                    params={{ slug: f }}
                    className="group flex items-center justify-between gap-4 py-3.5 text-[0.9375rem] text-ink"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="t-index text-silver">{fam.index}</span>
                      {fam.name}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-steel transition-transform group-hover:translate-x-1 group-hover:text-ink"
                      strokeWidth={1.5}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   THE CREDIT LADDER — one way in, for every institution
   ══════════════════════════════════════════════════════════ */

export function CreditLadder({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol
      className={`grid gap-px md:grid-cols-3 xl:grid-cols-6 ${dark ? "bg-line-inverse" : "bg-line"}`}
    >
      {LADDER.map((r, i) => {
        const inner = (
          <>
            <div className="flex items-center justify-between">
              <span className={`t-index ${dark ? "text-inverse-faint" : "text-silver"}`}>
                /{r.step}
              </span>
              <span
                aria-hidden="true"
                className={`h-px flex-1 ml-4 ${dark ? "bg-line-inverse" : "bg-line"}`}
                style={{ maxWidth: `${(i + 1) * 16}%` }}
              />
            </div>
            <h3 className={`t-h3 mt-8 ${dark ? "text-inverse" : ""}`}>{r.title}</h3>
            <p
              className={`figure-num mt-auto pt-8 font-mono text-[0.8125rem] ${dark ? "text-inverse" : "text-ink"}`}
            >
              {r.band}
            </p>
            <p className={`t-micro mt-1.5 ${dark ? "text-inverse-dim" : "text-steel"}`}>{r.note}</p>
          </>
        );
        const cls = `flex min-h-[15rem] flex-col p-6 transition-colors ${dark ? "bg-ink hover:bg-ink-raised" : "bg-surface hover:bg-tint"}`;
        return (
          <li key={r.step} className="flex">
            {r.href ? (
              <Link to={r.href} className={`${cls} w-full`}>
                {inner}
              </Link>
            ) : (
              <div className={`${cls} w-full`}>{inner}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* ══════════════════════════════════════════════════════════
   DATED TIMELINE — the public calendar
   ══════════════════════════════════════════════════════════ */

const KIND_LABEL = {
  statute: "Statute",
  commitment: "Publytics commitment",
  cycle: "Budget cycle",
} as const;

export function DatedTimeline({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
      <span
        aria-hidden="true"
        className={`absolute top-[0.4rem] right-0 left-0 hidden h-px md:block ${dark ? "bg-line-inverse" : "bg-line"}`}
      />
      {CALENDAR.map((c) => (
        <li key={c.title} className="relative">
          <span
            aria-hidden="true"
            className={`relative z-10 block h-3.5 w-3.5 rounded-full border-2 ${
              c.kind === "commitment"
                ? dark
                  ? "border-accent bg-ink"
                  : "border-accent-deep bg-paper"
                : dark
                  ? "border-inverse bg-inverse"
                  : "border-ink bg-ink"
            }`}
          />
          <p className={`t-h3 mt-5 ${dark ? "text-inverse" : "text-ink"}`}>{c.date}</p>
          <h3
            className={`mt-2.5 text-[0.9375rem] leading-snug ${dark ? "text-inverse" : "text-ink"}`}
          >
            {c.title}
          </h3>
          <p className={`t-micro mt-2 ${dark ? "text-inverse-dim" : "text-graphite"}`}>{c.body}</p>
          <p className={`t-label mt-4 ${dark ? "text-inverse-faint" : "text-steel"}`}>
            {KIND_LABEL[c.kind]}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* ══════════════════════════════════════════════════════════
   ENGAGEMENT PATH — numbered steps with durations
   ══════════════════════════════════════════════════════════ */

export function StepPath({
  steps,
}: {
  steps: { title: string; body: string; duration: string }[];
}) {
  return (
    <ol className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="flex flex-col bg-surface p-6">
          <div className="flex items-baseline justify-between gap-4">
            <span className="t-index text-silver">{String(i + 1).padStart(2, "0")}</span>
            <span className="t-label text-steel">{s.duration}</span>
          </div>
          <h3 className="t-h4 mt-6">{s.title}</h3>
          <p className="t-micro mt-3 text-graphite">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ══════════════════════════════════════════════════════════
   FAQ — native details/summary, works without JS
   ══════════════════════════════════════════════════════════ */

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-b border-line">
      {items.map((f) => (
        <details key={f.q} className="faq rule group">
          <summary className="flex items-start justify-between gap-6 py-6">
            <h3 className="t-h4 max-w-3xl">{f.q}</h3>
            <Plus
              className="faq-icon mt-1 h-5 w-5 shrink-0 text-steel transition-transform"
              strokeWidth={1.25}
            />
          </summary>
          <p className="t-small max-w-3xl pb-7 text-graphite">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   BREADCRUMB
   ══════════════════════════════════════════════════════════ */

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="t-label flex flex-wrap items-center gap-2 text-steel">
      {trail.map((t, i) => (
        <span key={t.label} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          {t.href ? (
            <Link to={t.href} className="hover:text-ink">
              {t.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-ink">
              {t.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ══════════════════════════════════════════════════════════
   ON-THIS-PAGE — sticky section index for deep pages
   ══════════════════════════════════════════════════════════ */

export function OnThisPage({ items }: { items: { id: string; label: string }[] }) {
  const [current, setCurrent] = useState(items[0]?.id ?? "");
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setCurrent(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav aria-label="On this page" className="sticky top-28 hidden lg:block">
      <p className="t-label text-steel">On this page</p>
      <ul className="mt-5 space-y-1 border-l border-line">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={`-ml-px block border-l py-1.5 pl-4 text-[0.875rem] transition-colors ${
                current === i.id
                  ? "border-ink text-ink"
                  : "border-transparent text-steel hover:text-ink"
              }`}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ══════════════════════════════════════════════════════════
   KEY-VALUE FACT STRIP (dated, sourced) for page heroes
   ══════════════════════════════════════════════════════════ */

export function FactStrip({
  items,
  tone = "light",
}: {
  items: { k: string; v: ReactNode }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const cols =
    ({ 2: "lg:grid-cols-2", 3: "lg:grid-cols-3" } as Record<number, string>)[items.length] ??
    "lg:grid-cols-4";
  return (
    <dl className={`grid gap-px sm:grid-cols-2 ${cols} ${dark ? "bg-line-inverse" : "bg-line"}`}>
      {items.map((i) => (
        <div key={i.k} className={`px-5 py-5 ${dark ? "bg-ink" : "bg-surface"}`}>
          <dt className={`t-label ${dark ? "text-inverse-faint" : "text-steel"}`}>{i.k}</dt>
          <dd
            className={`mt-2 text-[0.9375rem] leading-snug ${dark ? "text-inverse" : "text-ink"}`}
          >
            {i.v}
          </dd>
        </div>
      ))}
    </dl>
  );
}
