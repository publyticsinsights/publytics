import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import {
  DisclosureTriptych,
  Eyebrow,
  MegaCta,
  ProvenanceChip,
} from "@/components/publytics/system";
import {
  Breadcrumb,
  FactStrip,
  FitDot,
  SectionHead,
  StatusBadge,
  SystemTag,
  sysStyle,
} from "@/components/publytics/atlas";
import { FAMILIES } from "@/content/families";
import { systemById } from "@/content/systems";
import { segmentBySlug } from "@/content/segments";
import { offeringBySlug } from "@/content/offerings";
import { FIT_LABEL, segmentsForFamily } from "@/content/matrices";
import { FACTS } from "@/content/dates";
import { pageHead } from "@/content/site";
import type { FamilySlug, OfferingSlug } from "@/content/types";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const family = FAMILIES.find((f) => f.slug === params.slug);
    if (!family) throw notFound();
    return family;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `${loaderData.name} | Publytics Products`,
          description: loaderData.summary,
          path: `/products/${loaderData.slug}`,
        })
      : {},
  component: FamilyPage,
});

/** The service each family is entered through. */
const ENTRY: Record<FamilySlug, OfferingSlug[]> = {
  "civic-data": ["bootcamp", "record-model-workshop", "forward-deployed-analyst"],
  "govtech-workflow": ["record-model-workshop", "forward-deployed-analyst"],
  "compliance-regtech": ["dpdp-readiness-assessment", "bootcamp"],
  "research-policy": ["methodology-audit", "record-model-workshop", "tracker-network"],
  "narrative-media": ["bootcamp", "builders"],
  "fundraising-csr": ["methodology-audit", "bootcamp"],
};

const SUBNAV = [
  { label: "What it does", href: "#does" },
  { label: "AI disclosure", href: "#disclosure" },
  { label: "Who uses it", href: "#who" },
  { label: "How it is bought", href: "#commercial" },
];

function FamilyPage() {
  const f = Route.useLoaderData();
  const sys = systemById(f.system);
  const who = segmentsForFamily(f.slug).map((r) => {
    const seg = segmentBySlug(r.segment)!;
    return { seg, fit: r.fit, use: seg.products.find((p) => p.family === f.slug) };
  });
  const siblings = FAMILIES.filter((x) => x.slug !== f.slug);

  return (
    <PageFrame section="Products" subnav={SUBNAV}>
      <header className="shell pt-10 pb-14 lg:pt-14 lg:pb-20" style={sysStyle(f.system)}>
        <Breadcrumb trail={[{ label: "Products", href: "/products" }, { label: f.name }]} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="t-index text-silver">/{f.index}</span>
              <SystemTag id={f.system} label={`${sys.name} · ${sys.tag}`} />
            </div>
            <h1 className="t-display-xl mt-6">{f.name}</h1>
          </div>
          <div className="lg:pb-2">
            <p className="t-lead max-w-md text-ink">{f.line}</p>
            <div className="mt-5">
              <StatusBadge status={f.availability.status} label={f.availability.label} />
            </div>
          </div>
        </div>
        <div className="mt-6 h-[3px] w-24" style={{ background: "var(--sys)" }} />
        <p className="t-body mt-10 max-w-3xl text-graphite">{f.summary}</p>
      </header>

      <section id="does" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow tone="steel">What it does</Eyebrow>
              <ul className="mt-8 border-b border-line">
                {f.does.map((d) => (
                  <li
                    key={d}
                    className="rule flex gap-4 py-5 text-[0.9375rem] leading-relaxed text-graphite"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-ink" strokeWidth={1.5} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow tone="steel">What it does not do</Eyebrow>
              <ul className="mt-8 border-b border-line">
                {f.doesNot.map((d) => (
                  <li
                    key={d}
                    className="rule flex gap-4 py-5 text-[0.9375rem] leading-relaxed text-graphite"
                  >
                    <X className="mt-1 h-4 w-4 shrink-0 text-steel" strokeWidth={1.5} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {f.slug === "compliance-regtech" && (
            <div className="mt-16 border border-line bg-paper p-7 lg:p-10">
              <Eyebrow tone="steel">The DPDP calendar, corrected</Eyebrow>
              <p className="t-body mt-6 max-w-3xl text-graphite">
                The Digital Personal Data Protection Rules were gazetted on{" "}
                <span className="text-ink">13 November 2025</span> (PIB release 14 November){" "}
                <ProvenanceChip
                  source={FACTS.dpdpNotified.source}
                  method={FACTS.dpdpNotified.method}
                  date={FACTS.dpdpNotified.date}
                />
                . Consent Manager registration under Rule 4 comes into force on{" "}
                <span className="text-ink">13 November 2026</span>{" "}
                <ProvenanceChip
                  source={FACTS.dpdpRule4.source}
                  method={FACTS.dpdpRule4.method}
                  date={FACTS.dpdpRule4.date}
                />
                . Every other obligation — including the annual DPIA and audit for Significant Data
                Fiduciaries under Rule 13 — applies from{" "}
                <span className="text-ink">13 May 2027</span>{" "}
                <ProvenanceChip
                  source={FACTS.dpdpFull.source}
                  method={FACTS.dpdpFull.method}
                  date={FACTS.dpdpFull.date}
                  limitations={FACTS.dpdpFull.limitations!}
                />
                , with penalties up to ₹250 crore. Most organisations we speak to have a policy.
                Very few have a record that would survive an inspection.
              </p>
              <Link to="/dpdp" className="link-arrow mt-8 text-ink">
                DPDP readiness in full <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section
        id="disclosure"
        className="relative scroll-mt-32 overflow-hidden bg-ink text-inverse"
      >
        <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
        <div className="shell band relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow tone="inverse">The disclosure, for this product</Eyebrow>
              <h2 className="t-h2 mt-6 text-inverse">
                Where AI is used, what it does not do, and who reviews it.
              </h2>
              <p className="t-small mt-6 max-w-md text-inverse-dim">
                Generated from the product’s configuration and enforced by the disclosure gate — a
                workflow that cannot produce this does not ship.
              </p>
            </div>
            <DisclosureTriptych
              used={f.disclosure.used}
              notDone={f.disclosure.notDone}
              review={f.disclosure.review}
            />
          </div>
        </div>
      </section>

      <section id="who" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="Who uses it, and how"
            title={`The same product, configured for ${who.length} institutions.`}
            brief="Use cases are drawn from each institution’s pathway. Filled marks are where this is the lead product."
          />
          <div className="mt-12 border-b border-line">
            {who.map(({ seg, fit, use }) => (
              <article
                key={seg.slug}
                className="rule grid gap-4 py-7 lg:grid-cols-[17rem_1fr_14rem] lg:gap-10"
                style={sysStyle(f.system)}
              >
                <div>
                  <p className="flex items-center gap-2.5 text-[var(--sys)]">
                    <FitDot fit={fit} />
                    <span className="t-label">{FIT_LABEL[fit]}</span>
                  </p>
                  <h3 className="t-h4 mt-3">
                    <Link
                      to="/solutions/$slug"
                      params={{ slug: seg.slug }}
                      className="hover:underline"
                    >
                      {seg.name}
                    </Link>
                  </h3>
                </div>
                <p className="t-small text-graphite">{use?.useCase}</p>
                <div>
                  <p className="t-label text-steel">Typical timeline</p>
                  <p className="mt-1.5 text-[0.875rem] text-ink">{use?.timeline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="commercial" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="How it is bought"
            title="Scoped first, priced on the scope — never a list price set before we have seen your records."
            brief="Pilots are sized to fit public low-value procurement lines, and the annual price is written into the pilot with its acceptance criteria."
          />
          <div className="mt-12">
            <FactStrip
              items={[
                { k: "Commercial model", v: f.model },
                { k: "Typical timeline", v: f.timeline },
                { k: "Availability", v: f.availability.label },
              ]}
            />
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow tone="steel">Entered through</Eyebrow>
              <ul className="mt-6 border-b border-line">
                {ENTRY[f.slug].map((o) => {
                  const off = offeringBySlug(o);
                  return (
                    <li key={o} className="rule">
                      <Link
                        to="/services/$slug"
                        params={{ slug: o }}
                        className="group flex items-baseline justify-between gap-4 py-4"
                      >
                        <span>
                          <span className="block text-[1rem] text-ink group-hover:underline">
                            {off.name}
                          </span>
                          <span className="t-micro text-steel">{off.shape}</span>
                        </span>
                        <span className="figure-num shrink-0 font-mono text-[0.8125rem] text-ink">
                          {off.band ?? "On scoping"}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Eyebrow tone="steel">
                Open standards and public infrastructure it is designed around
              </Eyebrow>
              <ul className="mt-6 border-b border-line">
                {f.builtOn.map((b) => (
                  <li key={b} className="rule py-4 text-[0.9375rem] text-graphite">
                    {b}
                  </li>
                ))}
              </ul>
              <p className="t-micro mt-4 text-steel">
                We build only what must be ours: the record model, the evidence ledger, the
                disclosure gate and the Tamil civic evaluation set.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rule bg-paper">
        <div className="shell band">
          <Eyebrow tone="steel">The other five families</Eyebrow>
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {siblings.map((x) => (
              <Link
                key={x.slug}
                to="/products/$slug"
                params={{ slug: x.slug }}
                className="group flex min-h-[9rem] flex-col justify-between bg-surface p-5 transition-colors hover:bg-tint"
                style={sysStyle(x.system)}
              >
                <SystemTag id={x.system} label={systemById(x.system).tag} />
                <span className="mt-6 flex items-end justify-between gap-3 text-[0.9375rem] text-ink">
                  {x.name}
                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-16">
            <MegaCta />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
