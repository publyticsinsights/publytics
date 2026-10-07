import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { BriefingForm } from "@/components/publytics/BriefingForm";
import { Eyebrow } from "@/components/publytics/system";
import {
  Breadcrumb,
  CreditLadder,
  FactStrip,
  FitDot,
  SectionHead,
  StatusBadge,
} from "@/components/publytics/atlas";
import { OFFERINGS } from "@/content/offerings";
import { segmentBySlug } from "@/content/segments";
import { LEVEL_LABEL, segmentsForOffering } from "@/content/matrices";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const offering = OFFERINGS.find((o) => o.slug === params.slug);
    if (!offering) throw notFound();
    return offering;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `${loaderData.name} | Publytics ${loaderData.kind === "service" ? "Services" : "Programmes"}`,
          description: `${loaderData.shape} ${loaderData.summary}`.slice(0, 300),
          path: `/services/${loaderData.slug}`,
        })
      : {},
  component: OfferingPage,
});

function OfferingPage() {
  const o = Route.useLoaderData();
  const fits = segmentsForOffering(o.slug).map((r) => {
    const seg = segmentBySlug(r.segment)!;
    return { seg, fit: r.fit, use: seg.offerings.find((x) => x.offering === o.slug)?.use };
  });
  const same = OFFERINGS.filter((x) => x.kind === o.kind && x.slug !== o.slug);
  const kindLabel = o.kind === "service" ? "Services" : "Programmes";

  return (
    <PageFrame section="Services & Programmes">
      <header className="shell pt-10 pb-14 lg:pt-14 lg:pb-20">
        <Breadcrumb
          trail={[
            { label: "Services & Programmes", href: "/services" },
            {
              label: kindLabel,
              href: o.kind === "service" ? "/services#services" : "/services#programmes",
            },
            { label: o.name },
          ]}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <div>
            <StatusBadge status={o.status} label={o.statusLabel} />
            <h1 className="t-display-xl mt-6">{o.name}</h1>
          </div>
          <p className="t-lead max-w-md text-ink lg:pb-2">{o.shape}</p>
        </div>
        <p className="t-body mt-10 max-w-3xl text-graphite">{o.summary}</p>
        <div className="mt-12">
          <FactStrip
            items={[
              {
                k: "Band",
                v: (
                  <span className="figure-num font-mono text-[0.875rem]">
                    {o.band ?? "Priced on scoping"}
                  </span>
                ),
              },
              { k: "Duration", v: o.duration },
              { k: o.kind === "service" ? "Credit rule" : "Status", v: o.credit ?? o.statusLabel },
              { k: "For", v: o.for },
            ]}
          />
          {o.band && o.band.startsWith("₹") && (
            <p className="t-micro mt-3 text-steel">
              Published band, ex-GST (18%). Confirmed in writing before the engagement begins.
            </p>
          )}
        </div>
      </header>

      <section className="rule bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">What you leave with</Eyebrow>
              <h2 className="t-h2 mt-6">Outputs, not hours.</h2>
            </div>
            <ul className="border-b border-line">
              {o.outputs.map((x) => (
                <li key={x} className="rule flex gap-4 py-5 text-[1rem] text-ink">
                  <Check className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {fits.length > 0 && (
        <section className="rule bg-paper">
          <div className="shell band">
            <SectionHead
              eyebrow="How each institution uses it"
              title={`Used by ${fits.length} of the eight institutions we serve.`}
              brief="Drawn from each institution’s pathway. Filled marks are a high fit; half marks, medium."
            />
            <div className="mt-12 border-b border-line">
              {fits.map(({ seg, fit, use }) => (
                <article
                  key={seg.slug}
                  className="rule grid gap-4 py-6 lg:grid-cols-[17rem_1fr] lg:gap-10"
                >
                  <div>
                    <p className="t-label flex items-center gap-2 text-steel">
                      <FitDot fit={fit} className="text-ink" /> {LEVEL_LABEL[fit]}
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
                  <p className="t-small text-graphite">{use ?? seg.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {o.kind === "service" && (
        <section className="relative overflow-hidden atmo text-inverse">
          <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
          <div className="shell band relative">
            <SectionHead
              tone="dark"
              eyebrow="Where it sits"
              title="Every service is a rung on the same ladder."
            />
            <div className="mt-12">
              <CreditLadder tone="dark" />
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">
                {o.slug === "briefing" ? "Book it" : "Start with the Briefing"}
              </Eyebrow>
              <h2 className="t-h2 mt-6">
                {o.slug === "briefing"
                  ? "Ninety minutes, on one question."
                  : `Every ${o.name.replace(/^The /, "")} starts with a free Briefing.`}
              </h2>
              <div className="mt-12">
                <p className="t-label text-steel">Other {kindLabel.toLowerCase()}</p>
                <ul className="mt-4">
                  {same.map((x) => (
                    <li key={x.slug} className="rule">
                      <Link
                        to="/services/$slug"
                        params={{ slug: x.slug }}
                        className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] text-graphite hover:text-ink"
                      >
                        <span>{x.name}</span>
                        <span className="flex items-center gap-3">
                          <span className="figure-num font-mono text-[0.75rem] text-steel">
                            {x.band ?? x.statusLabel}
                          </span>
                          <ArrowRight
                            className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1"
                            strokeWidth={1.5}
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <BriefingForm key={o.slug} />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
