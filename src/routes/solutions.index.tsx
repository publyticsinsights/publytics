import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { Eyebrow, MegaCta, NotchCard, Say, Statement } from "@/components/publytics/system";
import { SectionHead, SolutionMatrix, SystemTag } from "@/components/publytics/atlas";
import { SEGMENTS } from "@/content/segments";
import { familyBySlug } from "@/content/families";
import { pageHead } from "@/content/site";

const TITLE = "Solutions — Eight Institutional Contexts | Publytics";
const DESCRIPTION =
  "Government, municipal bodies, regulators, enterprise and GCCs, foundations, universities, newsrooms and legislatures: one evidence chain, eight ways to buy it.";

export const Route = createFileRoute("/solutions/")({
  component: SolutionsPage,
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/solutions" }),
});

const SUBNAV = [
  { label: "The eight institutions", href: "#institutions" },
  { label: "The solution map", href: "#map" },
  { label: "Built for your procurement", href: "#procurement" },
];

function SolutionsPage() {
  return (
    <PageFrame section="Solutions" subnav={SUBNAV}>
      <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
        <Eyebrow tone="steel">Solutions</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <h1 className="t-display-xl">Eight institutional contexts. No generic buyer journey.</h1>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            Every institution buys the same core — in a different shape, through a different procurement route, from a different
            budget head. Start with the one you operate in.
          </p>
        </div>
      </header>

      <section className="rule bg-surface">
        <div className="shell band">
          <Statement>
            A secretary, a compliance officer and a programme officer must each finish a single visit believing the same company is{" "}
            <Say>credible to them</Say>.
          </Statement>
        </div>
      </section>

      <section id="institutions" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          {SEGMENTS.map((s) => {
            const lead = s.products.slice(0, 2).map((p) => familyBySlug(p.family).name);
            return (
              <article key={s.slug} className="index-row group" data-reveal>
                <div>
                  <p className="t-micro leading-snug text-graphite">{s.kicker}</p>
                  <p className="t-index mt-6 text-silver">/{s.index}</p>
                  <div className="mt-6 flex flex-col items-start gap-2">
                    {s.systems.map((id) => (
                      <SystemTag key={id} id={id} />
                    ))}
                  </div>
                </div>
                <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
                  <div>
                    <h2 className="t-h2 transition-colors group-hover:text-brand">
                      <Link to="/solutions/$slug" params={{ slug: s.slug }}>
                        {s.name}
                      </Link>
                    </h2>
                    <p className="t-small mt-4 max-w-2xl text-graphite">{s.summary}</p>
                    <dl className="mt-6 grid max-w-2xl gap-x-8 gap-y-3 sm:grid-cols-2">
                      <div>
                        <dt className="t-label text-steel">Leads with</dt>
                        <dd className="mt-1 text-[0.875rem] text-ink">{lead.join(" · ")}</dd>
                      </div>
                      <div>
                        <dt className="t-label text-steel">Typical cycle</dt>
                        <dd className="mt-1 text-[0.875rem] text-ink">{s.cycle.split(";")[0]}</dd>
                      </div>
                    </dl>
                  </div>
                  <Link to="/solutions/$slug" params={{ slug: s.slug }} className="link-arrow mt-6 shrink-0 text-ink lg:mt-2">
                    The pathway <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="map" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="The solution map"
            title="Which product each institution leads with."
            brief="Filled marks are where we lead; half marks are where an institution expands next. Line colour is the system the product belongs to."
          />
          <div className="mt-12">
            <SolutionMatrix />
          </div>
        </div>
      </section>

      <section id="procurement" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="Built for your procurement"
            title="What a public-sector buyer needs before a demonstration is worth booking."
            brief="Every first step is sized to fit a low-value procurement line, and the paperwork is stated up front."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <NotchCard label="Thresholds">
              Briefing, Bootcamp, Record Model Workshop, DPDP Readiness Assessment and Methodology Audit each fit below Tamil Nadu’s
              ₹25 lakh low-value line (G.O. Ms. No.133, 10 Jul 2026).
            </NotchCard>
            <NotchCard label="Residency">Data residency commitments, written into the contract rather than the brochure.</NotchCard>
            <NotchCard label="DPDP posture">Our own posture against the 13 May 2027 obligations, including what is not yet certified.</NotchCard>
            <NotchCard label="Security">The security posture stated honestly, with the sub-processor list named and dated.</NotchCard>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <Link to="/engage" hash="procurement" className="link-arrow text-ink">
              Procurement routes, by institution <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link to="/trust" className="link-arrow text-ink">
              Trust &amp; security <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
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
