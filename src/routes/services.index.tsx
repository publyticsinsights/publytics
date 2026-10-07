import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { Eyebrow, MegaCta, Say, Statement } from "@/components/publytics/system";
import { CreditLadder, FitDot, FitLegend, SectionHead, StatusBadge } from "@/components/publytics/atlas";
import { PROGRAMMES, SERVICES } from "@/content/offerings";
import { SEGMENT_LIST as SEGMENTS } from "@/content/segments/meta";
import { OFFERING_ORDER, offeringFit } from "@/content/matrices";
import { offeringBySlug } from "@/content/offerings";
import { pageHead } from "@/content/site";

const TITLE = "Services & Programmes — Priced, With a Fixed Shape | Publytics";
const DESCRIPTION =
  "Seven services, each with a published band and a fixed shape, credited step to step; and four programmes — Comply, Builders, the Tracker Network and the Fellowship.";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/services" }),
});

const SUBNAV = [
  { label: "The ladder", href: "#ladder" },
  { label: "Services", href: "#services" },
  { label: "Programmes", href: "#programmes" },
  { label: "Which fits whom", href: "#fit" },
];

function ServicesPage() {
  return (
    <PageFrame section="Services & Programmes" subnav={SUBNAV}>
      <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
        <Eyebrow tone="steel">Services &amp; Programmes</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <h1 className="t-display-xl">Services are the way in. Programmes are the reach.</h1>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            Seven services, each priced and with a fixed shape, credited step to step. Four programmes that take the method further
            than a contract can.
          </p>
        </div>
      </header>

      <section id="ladder" className="relative scroll-mt-32 overflow-hidden atmo text-inverse">
        <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
        <div className="shell band relative">
          <SectionHead
            tone="dark"
            eyebrow="The credit ladder"
            title="One ladder for every institution. Each step is credited against the next."
            brief="What changes by institution is the product mix, the budget head and the procurement route — never the way in."
          />
          <div className="mt-14">
            <CreditLadder tone="dark" />
          </div>
        </div>
      </section>

      <section id="services" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow tone="steel">Services</Eyebrow>
              <h2 className="t-h2 mt-6">Seven, each priced, each with a fixed shape.</h2>
            </div>
            <p className="t-micro max-w-xs text-steel">Published bands, ex-GST (18%). Confirmed in writing before any engagement begins.</p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[56rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="t-label py-3 pr-6 font-medium text-steel">Service</th>
                  <th className="t-label py-3 pr-6 font-medium text-steel">Shape</th>
                  <th className="t-label py-3 pr-6 font-medium text-steel">Duration</th>
                  <th className="t-label py-3 pr-6 font-medium text-steel">Credit</th>
                  <th className="t-label py-3 text-right font-medium text-steel">Band</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((s) => (
                  <tr key={s.slug} className="group border-b border-line align-baseline">
                    <td className="py-5 pr-6">
                      <Link to="/services/$slug" params={{ slug: s.slug }} className="inline-flex items-center gap-2 text-[1.0625rem] text-ink group-hover:underline">
                        {s.name}
                      </Link>
                    </td>
                    <td className="py-5 pr-6 text-[0.9375rem] leading-relaxed text-graphite">{s.shape}</td>
                    <td className="py-5 pr-6 text-[0.875rem] text-graphite">{s.duration}</td>
                    <td className="py-5 pr-6 text-[0.875rem] text-graphite">{s.credit ?? "—"}</td>
                    <td className="figure-num py-5 text-right font-mono text-[0.8125rem] whitespace-nowrap text-ink">{s.band}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rule bg-paper">
        <div className="shell band">
          <Statement>
            The Methodology Audit is the one nobody else can offer — because no one else has{" "}
            <Say>published a standard to audit against</Say>.
          </Statement>
        </div>
      </section>

      <section id="programmes" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="Programmes"
            title="Four, each with a name and a URL."
            brief="Programmes are packaging around the same core, not new platforms. The Method Standard they all apply is published under Evidence."
          />
          <div className="mt-12">
            {PROGRAMMES.map((p, i) => (
              <article key={p.slug} className="index-row group" data-reveal>
                <div>
                  <p className="t-micro leading-snug text-graphite">{p.shape}</p>
                  <p className="t-index mt-6 text-silver">/0.{i + 1}</p>
                </div>
                <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
                  <div>
                    <h3 className="t-h2 transition-colors group-hover:text-brand">
                      <Link to="/services/$slug" params={{ slug: p.slug }}>
                        {p.name}
                      </Link>
                    </h3>
                    <p className="t-small mt-4 max-w-2xl text-graphite">{p.summary}</p>
                    <div className="mt-6">
                      <StatusBadge status={p.status} label={p.statusLabel} />
                    </div>
                  </div>
                  <Link to="/services/$slug" params={{ slug: p.slug }} className="link-arrow mt-6 shrink-0 text-ink lg:mt-2">
                    The programme <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fit" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="Which fits whom"
            title="How each institution enters, and what keeps it."
            brief="Derived from the same fit model that drives each institution’s pathway."
          />
          <div className="mt-12 overflow-x-auto border border-line bg-surface">
            <table className="w-full min-w-[60rem] border-collapse text-left">
              <thead>
                <tr>
                  <th className="t-label w-[15rem] border-b border-line px-5 py-4 align-bottom font-medium text-steel">Institution</th>
                  {OFFERING_ORDER.map((o) => {
                    const off = offeringBySlug(o);
                    return (
                      <th
                        key={o}
                        className={`border-b border-line px-2 py-4 align-bottom font-normal ${off.kind === "programme" ? "bg-mist" : ""}`}
                      >
                        <Link to="/services/$slug" params={{ slug: o }} className="block text-center text-[0.72rem] leading-snug text-graphite hover:text-ink">
                          {off.name.replace(/^The /, "")}
                        </Link>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {SEGMENTS.map((s) => (
                  <tr key={s.slug} className="border-b border-line last:border-b-0 hover:bg-tint">
                    <th scope="row" className="px-5 py-3 font-normal">
                      <Link to="/solutions/$slug" params={{ slug: s.slug }} className="text-[0.875rem] text-ink hover:underline">
                        {s.name}
                      </Link>
                    </th>
                    {OFFERING_ORDER.map((o) => (
                      <td key={o} className={`px-2 py-3 text-center ${offeringBySlug(o).kind === "programme" ? "bg-mist/50" : ""}`}>
                        <FitDot fit={offeringFit(s.slug, o)} className="text-ink" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <FitLegend kind="level" />
            <span className="t-micro text-steel">Shaded columns are programmes.</span>
          </div>
        </div>
      </section>

      <section className="rule bg-surface">
        <div className="shell band">
          <MegaCta />
        </div>
      </section>
    </PageFrame>
  );
}
