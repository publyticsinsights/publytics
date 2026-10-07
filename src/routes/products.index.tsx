import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { ProductCore } from "@/components/publytics/ProductCore";
import { Eyebrow, MegaCta, Say, Statement } from "@/components/publytics/system";
import { SectionHead, SolutionMatrix, StatusBadge, SystemTag, sysStyle } from "@/components/publytics/atlas";
import { SYSTEMS, CORE } from "@/content/systems";
import { familyBySlug } from "@/content/families";
import { segmentsForFamily } from "@/content/matrices";
import { SEGMENT_META } from "@/content/segments/meta";
import { pageHead } from "@/content/site";

const TITLE = "Products — One Core, Three Systems, Six Families | Publytics";
const DESCRIPTION =
  "The delivery, obligation and accountability systems: six product families on one civic record model, one evidence ledger and one Tamil-first language layer.";

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/products" }),
});

const SUBNAV = [
  { label: "The shared core", href: "#core" },
  { label: "Delivery system", href: "#delivery" },
  { label: "Obligation system", href: "#obligation" },
  { label: "Accountability system", href: "#accountability" },
  { label: "Who buys what", href: "#map" },
];

function ProductsPage() {
  return (
    <PageFrame section="Products" subnav={SUBNAV}>
      <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-20">
        <Eyebrow tone="steel">The platform</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <h1 className="t-display-xl">One core. Three systems. Six product families.</h1>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            Modular enough to enter through one operational need. Coherent enough to become shared infrastructure across an
            institution.
          </p>
        </div>
      </header>

      <section id="core" className="shell scroll-mt-32 pb-16 lg:pb-24">
        <div className="inset-panel mesh px-6 py-12 lg:px-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div>
              <Eyebrow tone="steel">One shared core</Eyebrow>
              <h2 className="t-h2 mt-6">Every product addresses the same architecture.</h2>
              <p className="t-small mt-5 max-w-md text-graphite">
                An institution can buy one family and use it alone. What makes the second purchase cheaper than the first is
                that both sit on the same record model, the same ledger and the same language layer.
              </p>
              <ul className="mt-8 border-b border-line">
                {CORE.map((c) => (
                  <li key={c.index} className="rule flex items-baseline justify-between gap-4 py-3">
                    <span className="flex items-baseline gap-3 text-[0.9375rem] text-ink">
                      <span className="t-index text-silver">{c.index}</span>
                      {c.name}
                    </span>
                    <span className="t-label text-steel">{c.ownership}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded bg-ink p-4 lg:p-6">
              <ProductCore className="h-auto w-full" />
              <p className="t-label mt-2 text-center text-inverse-faint">Architecture diagram · illustrative</p>
            </div>
          </div>
        </div>
      </section>

      {SYSTEMS.map((s, i) => (
        <section key={s.id} id={s.id} className={`rule scroll-mt-32 ${i % 2 === 0 ? "bg-surface" : "bg-paper"}`} style={sysStyle(s.id)}>
          <div className="shell band">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
              <div>
                <SystemTag id={s.id} label={`${s.name} · ${s.tag}`} />
                <h2 className="t-h2 mt-6">{s.line}</h2>
              </div>
              <p className="t-small max-w-md text-graphite lg:pb-1">{s.body}</p>
            </div>
            <div className="mt-12">
              {s.families.map((slug) => {
                const f = familyBySlug(slug);
                const leads = segmentsForFamily(slug).filter((r) => r.fit === "P").map((r) => SEGMENT_META[r.segment].short);
                return (
                  <article key={slug} className="index-row group" data-reveal>
                    <div>
                      <p className="t-micro leading-snug text-graphite">{f.line}</p>
                      <p className="t-index mt-6 text-silver">/{f.index}</p>
                    </div>
                    <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
                      <div>
                        <h3 className="t-h2 transition-colors group-hover:text-brand">
                          <Link to="/products/$slug" params={{ slug }}>
                            {f.name}
                          </Link>
                        </h3>
                        <p className="t-small mt-4 max-w-2xl text-graphite">{f.summary}</p>
                        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                          <StatusBadge status={f.availability.status} label={f.availability.label} />
                          {leads.length > 0 && <span className="t-micro text-steel">Lead product for: {leads.join(" · ")}</span>}
                        </div>
                      </div>
                      <Link to="/products/$slug" params={{ slug }} className="link-arrow mt-6 shrink-0 text-ink lg:mt-2">
                        The product <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section id="map" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="Who buys what"
            title="The same six families, in eight different shapes."
            brief="Each institution leads with a different family and expands into the next as configuration."
          />
          <div className="mt-12">
            <SolutionMatrix />
          </div>
        </div>
      </section>

      <section className="rule bg-paper">
        <div className="shell band">
          <Statement>
            A component that can render two ways <Say>will render two ways</Say>. Every table is the data table. Every figure carries
            its chip.
          </Statement>
          <div className="mt-14">
            <MegaCta />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

