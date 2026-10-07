import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Minus } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { BriefingForm } from "@/components/publytics/BriefingForm";
import { Eyebrow } from "@/components/publytics/system";
import {
  JsonLd,
  Breadcrumb,
  FactStrip,
  FaqList,
  FitDot,
  SectionHead,
  StatusBadge,
  StepPath,
  SystemTag,
  sysStyle,
} from "@/components/publytics/atlas";
import { SEGMENTS, segmentBySlug } from "@/content/segments";
import { SEGMENT_LIST } from "@/content/segments/meta";
import { familyBySlug } from "@/content/families";
import { offeringBySlug } from "@/content/offerings";
import { evidenceBySlug } from "@/content/evidence";
import { evidenceHref } from "@/content/nav";
import { FIT_LABEL, LEVEL_LABEL, offeringFit, productFit } from "@/content/matrices";
import { breadcrumbLd, faqLd, ldScript, pageHead } from "@/content/site";

export const Route = createFileRoute("/solutions/$slug")({
  // The loader validates against the light metadata only. Loaders are not
  // code-split, so importing the full deep-dives here would ship all eight
  // to every page. The component (split) reads the full record.
  loader: ({ params }) => {
    const meta = SEGMENT_LIST.find((m) => m.slug === params.slug);
    if (!meta) throw notFound();
    return meta;
  },
  // head() is NOT code-split: it may touch only the light metadata.
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const path = `/solutions/${loaderData.slug}`;
    return {
      ...pageHead({
        title: `${loaderData.name} | Publytics Solutions`,
        description: loaderData.summary,
        path,
      }),
      scripts: [
        ldScript(
          breadcrumbLd([
            { name: "Solutions", path: "/solutions" },
            { name: loaderData.name, path },
          ]),
        ),
      ],
    };
  },
  component: SegmentPage,
});

const SUBNAV = [
  { label: "Why now", href: "#context" },
  { label: "Challenges", href: "#challenges" },
  { label: "What we deploy", href: "#solution" },
  { label: "How to engage", href: "#engage" },
  { label: "Evidence", href: "#evidence" },
  { label: "Procurement", href: "#procurement" },
  { label: "Questions", href: "#faq" },
];

function SegmentPage() {
  const s = segmentBySlug(Route.useLoaderData().slug)!;
  const others = SEGMENTS.filter((o) => o.slug !== s.slug);
  const lead = s.products
    .filter((p) => productFit(s.slug, p.family) === "P")
    .map((p) => familyBySlug(p.family).name);

  return (
    <PageFrame section="Solutions" subnav={SUBNAV}>
      <JsonLd data={faqLd(s.faqs)} />
      {/* ── Header ── */}
      <header className="shell relative pt-10 pb-14 lg:pt-14 lg:pb-20">
        <span
          aria-hidden="true"
          className="ghost-num absolute top-14 right-6 -z-10 hidden 2xl:block"
        >
          {s.index}
        </span>
        <Breadcrumb trail={[{ label: "Solutions", href: "/solutions" }, { label: s.name }]} />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="t-index text-silver">/{s.index}</span>
              {s.systems.map((id) => (
                <SystemTag key={id} id={id} />
              ))}
            </div>
            <h1 className="t-display-xl mt-6">{s.name}</h1>
            <p className="t-lead mt-7 max-w-xl text-graphite">{s.tagline}</p>
          </div>
          <figure className="notch bg-ink p-7 text-inverse lg:p-8">
            <Eyebrow tone="inverse">The question that starts the engagement</Eyebrow>
            <blockquote className="t-h3 t-serif-i mt-8 text-inverse">
              “{s.question.quote}”
            </blockquote>
            <figcaption className="t-label mt-8 text-inverse-faint">— {s.question.by}</figcaption>
          </figure>
        </div>
        <div className="mt-14">
          <FactStrip
            items={[
              { k: "Who this is for", v: s.kicker },
              { k: "We lead with", v: lead.join(" · ") },
              { k: "Way in", v: s.entry.split("→").slice(0, 2).join("→").trim() + " →" },
              { k: "Typical cycle", v: s.cycle.split(";").slice(-1)[0]!.trim() },
            ]}
          />
        </div>
      </header>

      {/* ── Why now ── */}
      <section id="context" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">Why now</Eyebrow>
              <h2 className="t-h2 mt-6">{s.summary.split(". ")[0]}.</h2>
            </div>
            <div className="space-y-5" data-reveal>
              {s.context.map((p) => (
                <p key={p} className="t-body text-graphite">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section id="challenges" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="What we hear"
            title="Five problems, stated the way institutions state them."
          />
          <ol className="mt-12 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-5" data-reveal>
            {s.pains.map((p, i) => (
              <li key={p.title} className="flex flex-col bg-surface p-6">
                <span className="t-index text-silver">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h4 mt-6">{p.title}</h3>
                <p className="t-micro mt-3 text-graphite">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── The solution + products ── */}
      <section id="solution" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">The solution we give</Eyebrow>
              <h2 className="t-h2 mt-6">What we deploy, and in what order.</h2>
            </div>
            <p className="t-body text-graphite">{s.solution}</p>
          </div>

          <div className="mt-14 border-b border-line" data-reveal>
            {s.products.map((p) => {
              const fam = familyBySlug(p.family);
              const fit = productFit(s.slug, p.family);
              return (
                <article
                  key={p.family}
                  className="rule grid gap-4 py-7 lg:grid-cols-[17rem_1fr_14rem] lg:gap-10"
                  style={sysStyle(fam.system)}
                >
                  <div>
                    <p className="flex items-center gap-2.5 text-[var(--sys)]">
                      <FitDot fit={fit} />
                      <span className="t-label">{FIT_LABEL[fit]}</span>
                    </p>
                    <h3 className="t-h4 mt-3">
                      <Link
                        to="/products/$slug"
                        params={{ slug: p.family }}
                        className="hover:underline"
                      >
                        {fam.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="t-small text-graphite">{p.useCase}</p>
                  <div>
                    <p className="t-label text-steel">Typical timeline</p>
                    <p className="mt-1.5 text-[0.875rem] text-ink">{p.timeline}</p>
                  </div>
                </article>
              );
            })}
          </div>
          {s.notOffered && s.notOffered.length > 0 && (
            <div className="mt-8 border-l-2 border-line-strong bg-paper px-6 py-5">
              <p className="t-label text-steel">Not offered to this institution</p>
              <ul className="mt-3 space-y-2">
                {s.notOffered.map((n) => (
                  <li key={n.family} className="flex gap-3 text-[0.9375rem] text-graphite">
                    <Minus className="mt-1.5 h-3 w-3 shrink-0" strokeWidth={2} />
                    <span>
                      <span className="text-ink">{familyBySlug(n.family).name}</span> — {n.reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ── How to engage ── */}
      <section id="engage" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="How to engage"
            title="The path from first conversation to annual platform."
            brief={s.entry}
          />
          <div className="mt-12" data-reveal>
            <StepPath steps={s.path} />
          </div>

          <h3 className="t-h3 mt-20">Services and programmes, as used here</h3>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="t-label py-3 pr-6 font-medium text-steel">Offering</th>
                  <th className="t-label py-3 pr-6 font-medium text-steel">How it is used here</th>
                  <th className="t-label py-3 text-right font-medium text-steel">Band</th>
                </tr>
              </thead>
              <tbody>
                {s.offerings.map((o) => {
                  const off = offeringBySlug(o.offering);
                  const fit = offeringFit(s.slug, o.offering);
                  return (
                    <tr key={o.offering} className="border-b border-line align-baseline">
                      <td className="py-5 pr-6">
                        <Link
                          to="/services/$slug"
                          params={{ slug: o.offering }}
                          className="text-[1rem] text-ink hover:underline"
                        >
                          {off.name}
                        </Link>
                        <p className="t-label mt-1.5 flex items-center gap-2 text-steel">
                          <FitDot fit={fit} className="text-ink" /> {LEVEL_LABEL[fit]} · {off.kind}
                        </p>
                      </td>
                      <td className="py-5 pr-6 text-[0.9375rem] leading-relaxed text-graphite">
                        {o.use}
                      </td>
                      <td className="figure-num py-5 text-right font-mono text-[0.8125rem] whitespace-nowrap text-ink">
                        {off.band ?? "On scoping"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="t-micro mt-4 text-steel">
            Published bands, ex-GST. Confirmed in writing before any engagement begins.
          </p>
        </div>
      </section>

      {/* ── Evidence ── */}
      <section id="evidence" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="Evidence you receive"
            title="What we show you before you buy — and publish after."
            brief="Evidence is free and public. Each item states whether it is live, scheduled, or in preparation."
          />
          <div className="mt-12 border-b border-line" data-reveal>
            {s.evidence.map((e) => {
              const ev = evidenceBySlug(e.type);
              return (
                <article
                  key={e.type}
                  className="rule grid gap-4 py-6 lg:grid-cols-[17rem_1fr_14rem] lg:gap-10"
                >
                  <div>
                    <h3 className="t-h4">
                      <Link to={evidenceHref(e.type)} className="hover:underline">
                        {ev.name}
                      </Link>
                    </h3>
                    <div className="mt-3">
                      <StatusBadge status={ev.status} label={ev.statusLabel} />
                    </div>
                  </div>
                  <p className="t-small text-graphite">{e.receives}</p>
                  <div>
                    <p className="t-label text-steel">When</p>
                    <p className="mt-1.5 text-[0.875rem] text-ink">{e.when}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">What you can hold us to</Eyebrow>
              <h3 className="t-h2 mt-6">The measures we are judged on.</h3>
            </div>
            <ol>
              {s.measures.map((m, i) => (
                <li
                  key={m}
                  className="rule flex gap-5 py-5 text-[0.9375rem] leading-relaxed text-graphite last:border-b"
                >
                  <span className="t-index pt-0.5 text-silver">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {m}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Funding, procurement, roles ── */}
      <section id="procurement" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="For the procurement file"
            title="How this is typically funded, procured and approved."
            brief="Public statutory routes and thresholds, stated with their source. Confirm the route that applies with your procurement officer."
          />
          <div className="mt-12 grid gap-px bg-line lg:grid-cols-3">
            <div className="bg-surface p-7">
              <p className="t-label text-steel">Budget sources</p>
              <ul className="mt-5 space-y-3.5">
                {s.funding.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.875rem] leading-relaxed text-graphite">
                    <Minus className="mt-1.5 h-3 w-3 shrink-0 text-steel" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface p-7 lg:col-span-2">
              <p className="t-label text-steel">Procurement routes</p>
              <dl className="mt-5">
                {s.procurement.map((p) => (
                  <div
                    key={p.route}
                    className="rule grid gap-2 py-4 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
                  >
                    <dt className="text-[0.9375rem] text-ink">{p.route}</dt>
                    <dd className="text-[0.875rem] leading-relaxed text-graphite">{p.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-px grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {s.roles.map((r) => (
              <div key={r.role} className="bg-surface p-6">
                <p className="t-label text-steel">{r.role}</p>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-graphite">{r.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">Questions</Eyebrow>
              <h2 className="t-h2 mt-6">What {s.short.toLowerCase()} buyers ask us first.</h2>
            </div>
            <FaqList items={s.faqs} />
          </div>
        </div>
      </section>

      {/* ── Close ── */}
      <section id="contact" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">Start with the Briefing</Eyebrow>
              <h2 className="t-h2 mt-6">Bring the one question you cannot evidence today.</h2>
              <p className="t-body mt-6 max-w-md text-graphite">
                Free. 90 minutes. No deck. We frame the question together and agree the dataset for
                a Bootcamp.
              </p>
              <div className="mt-12">
                <p className="t-label text-steel">Other institutions</p>
                <ul className="mt-4 grid gap-x-6 sm:grid-cols-2">
                  {others.map((o) => (
                    <li key={o.slug} className="rule">
                      <Link
                        to="/solutions/$slug"
                        params={{ slug: o.slug }}
                        className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] text-graphite hover:text-ink"
                      >
                        {o.name}
                        <ArrowRight
                          className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <BriefingForm key={s.slug} defaultAudience={s.name} />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
