import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar, SiteFooter, SiteHeader } from "@/components/publytics/chrome";
import { Eyebrow, IndexRow, MegaCta, Say, Statement } from "@/components/publytics/system";

const TITLE = "Services & Programmes | Publytics";
const DESCRIPTION =
  "A priced services catalogue, and the programmes axis: Comply, Builders, the Tracker Network, the Method Standard, the Fellowship.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }], links: [{ rel: "canonical", href: "/services" }] }),
});

const SUBNAV = [
  { label: "Services", href: "/services" },
  { label: "Programmes", href: "/services" },
  { label: "The Method Standard", href: "/evidence" },
];

const SERVICES = [
  { name: "The Briefing", shape: "90 minutes. Your problem, framed. No deck.", band: "Free" },
  { name: "The Bootcamp", shape: "One day. Your own data. One working monitor by close.", band: "₹2–4 L, credited" },
  { name: "Record Model Workshop", shape: "One week. Declares your record types and obligations.", band: "₹8–12 L" },
  { name: "DPDP Readiness Assessment", shape: "3–4 weeks. Data map, DPIA, consent architecture, gap plan to May 2027.", band: "₹6–12 L" },
  { name: "Methodology Audit", shape: "External review of your published tracker or dashboard, against the Method Standard.", band: "₹4–8 L" },
  { name: "Forward-Deployed Analyst", shape: "One person, embedded, building in the product.", band: "Retainer" },
  { name: "Use Case Boost", shape: "High-touch acceleration for your own team.", band: "₹5–10 L" },
];

const PROGRAMMES = [
  { n: "0.1", k: "The compliance perimeter, rented", t: "Publytics Comply", b: "Every Indian company selling software to a state department carries the same fixed cost: DPDP obligations against a May 2027 deadline, data residency, state procurement security conditions, departmental audit. Comply is that perimeter, already built and already reviewed — your product runs inside it. Priced on usage.", s: "In scoping" },
  { n: "0.2", k: "For the organisations that cannot pay", t: "Publytics for Builders", b: "Newsrooms, student researchers, district-level bodies and small civic organisations use the platform free or near free. We are leaning on your work to build the evidence base this category does not have.", s: "Open" },
  { n: "0.3", k: "Run your own edition, on our standard", t: "The Tracker Network", b: "The method, packaged and licensed, so an institution in another state publishes its own tracker against the same Method Standard — comparable across states, without us opening an office anywhere.", s: "Open" },
  { n: "0.4", k: "The checklist, open and versioned", t: "The Method Standard", b: "Source and collection method disclosed. Funding or commissioning party named. Update date and version history visible. Limitations stated in plain language. Download format and reuse terms specified. Five items. Certify your output against them, whoever you are.", s: "v1.0 · published" },
  { n: "0.5", k: "We cannot outbid a Chennai GCC", t: "The Fellowship", b: "A year embedded on real institutional work, with your name on what you publish.", s: "Applications open" },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader section="Services & Programmes" subnav={SUBNAV} />

      <main>
        <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
          <Eyebrow tone="steel">Services &amp; Programmes</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
            <h1 className="t-display-xl">From institutional question to operating infrastructure.</h1>
            <p className="t-lead max-w-md text-graphite lg:pb-2">
              A focused research mandate, a platform implementation, or a managed capability — with the same standards
              of evidence and accountability.
            </p>
          </div>
        </header>

        <section className="rule bg-surface">
          <div className="shell band">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow tone="steel">Services</Eyebrow>
                <h2 className="t-h2 mt-6">Seven, each priced, each with a fixed shape.</h2>
              </div>
              <p className="t-micro max-w-xs text-steel">
                Price bands are indicative and confirmed in writing before any engagement begins.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[46rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line">
                    <th className="t-label py-3 pr-6 font-medium text-steel">Service</th>
                    <th className="t-label py-3 pr-6 font-medium text-steel">Shape</th>
                    <th className="t-label py-3 text-right font-medium text-steel">Band</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s) => (
                    <tr key={s.name} className="border-b border-line align-baseline">
                      <td className="py-5 pr-6 text-[1.0625rem] text-ink">{s.name}</td>
                      <td className="py-5 pr-6 text-[0.9375rem] leading-relaxed text-graphite">{s.shape}</td>
                      <td className="figure-num py-5 text-right font-mono text-[0.8125rem] text-live">{s.band}</td>
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
              The Methodology Audit is the one nobody else can offer — because no competitor has{" "}
              <Say>published a standard to audit against</Say>.
            </Statement>
          </div>
        </section>

        <section className="rule bg-surface">
          <div className="shell band">
            <Eyebrow tone="steel">Programmes</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-2xl">Five, each with a name and a URL.</h2>
            <div className="mt-12">
              {PROGRAMMES.map((p) => (
                <IndexRow key={p.n} index={p.n} kicker={p.k} title={p.t} href="/company" linkLabel={p.s}>
                  {p.b}
                </IndexRow>
              ))}
            </div>
          </div>
        </section>

        <section className="rule bg-paper">
          <div className="shell band"><MegaCta /></div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
