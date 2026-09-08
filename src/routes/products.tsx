import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { AnnouncementBar, SiteFooter, SiteHeader } from "@/components/publytics/chrome";
import { ProductCore } from "@/components/publytics/ProductCore";
import {
  DisclosureTriptych,
  Eyebrow,
  IndexRow,
  MegaCta,
  ProvenanceChip,
  Say,
  Statement,
} from "@/components/publytics/system";

const TITLE = "Products — Three Systems, Six Families | Publytics";
const DESCRIPTION =
  "The delivery system, the obligation system, the accountability system — six product families on one civic record model and one evidence ledger.";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }], links: [{ rel: "canonical", href: "/products" }] }),
});

const SUBNAV = [
  { label: "The platform", href: "/products" },
  { label: "Delivery system", href: "/products" },
  { label: "Obligation system", href: "/products" },
  { label: "Accountability system", href: "/products" },
];

const SYSTEMS = [
  {
    tag: "GovTech",
    name: "The delivery system",
    line: "Know who you serve, and prove how you served them.",
    families: [
      { n: "0.1", t: "Civic Data & Constituent Intelligence", b: "A governed registry and relationship layer for departments that should not have to build one from scratch." },
      { n: "0.2", t: "GovTech Workflow & Identity", b: "Permit, grievance, and service workflows designed to connect with existing public digital infrastructure." },
    ],
  },
  {
    tag: "RegTech",
    name: "The obligation system",
    line: "Show the regulator the discharge, not the intention.",
    families: [
      { n: "0.3", t: "Compliance & Regtech", b: "Regulatory tracking and audit tooling designed around India’s compliance calendar and operating context." },
    ],
  },
  {
    tag: "Evidence",
    name: "The accountability system",
    line: "Publish a number that survives a challenge.",
    families: [
      { n: "0.4", t: "Research & Policy Intelligence", b: "Field research, legislative tracking, and policy dashboards for decisions that require local evidence." },
      { n: "0.5", t: "Narrative & Media Intelligence", b: "Multilingual monitoring of how policy and public services are discussed in the languages people use." },
      { n: "0.6", t: "Fundraising & CSR Infrastructure", b: "A donor and grant-management layer connecting CSR mandates with accountable civic programmes." },
    ],
  },
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader section="Products" subnav={SUBNAV} />

      <main>
        <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-20">
          <Eyebrow tone="steel">The platform</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
            <h1 className="t-display-xl">One infrastructure layer. Three systems. Six families.</h1>
            <p className="t-lead max-w-md text-graphite lg:pb-2">
              Modular enough to enter through one operational need. Coherent enough to become shared infrastructure
              across an institution.
            </p>
          </div>
        </header>

        {/* The stack, on the tint panel */}
        <section className="shell pb-16 lg:pb-24">
          <div className="inset-panel mesh px-6 py-12 lg:px-12 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
              <div>
                <Eyebrow tone="steel">One shared core</Eyebrow>
                <h2 className="t-h2 mt-6">Every product addresses the same architecture.</h2>
                <p className="t-small mt-5 max-w-md text-graphite">
                  A department can buy one family and use it alone. What makes the second purchase cheaper than the
                  first is that both sit on the same record model, the same ledger, and the same language layer.
                </p>
                <p className="t-micro mt-5 max-w-md text-steel">
                  Six families across three systems, resolving to one core — which is why integration is a
                  configuration exercise rather than a second implementation.
                </p>
              </div>
              <div className="rounded bg-ink p-4 lg:p-6">
                <ProductCore className="h-auto w-full" />
                <p className="t-label mt-2 text-center text-inverse-faint">
                  Architecture diagram · illustrative
                </p>
              </div>
            </div>
          </div>
        </section>

        {SYSTEMS.map((s, i) => (
          <section key={s.name} className={`rule ${i % 2 === 0 ? "bg-surface" : "bg-paper"}`}>
            <div className="shell band">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
                <div>
                  <Eyebrow tone="live">{s.tag}</Eyebrow>
                  <h2 className="t-h2 mt-6">{s.name}</h2>
                </div>
                <p className="t-lead max-w-md text-graphite lg:pb-1">{s.line}</p>
              </div>
              <div className="mt-12">
                {s.families.map((f) => (
                  <IndexRow key={f.n} index={f.n} kicker={s.name} title={f.t} href="/company" linkLabel="Book a demonstration">
                    {f.b}
                  </IndexRow>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Worked example — the product page template */}
        <section className="relative overflow-hidden bg-ink text-inverse">
          <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
          <div className="shell band relative">
            <Eyebrow tone="inverse">Worked example · the product template</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-3xl text-inverse">
              Show the regulator the discharge, not the intention.
            </h2>
            <p className="t-body mt-8 max-w-3xl text-inverse-dim">
              India’s compliance calendar does not resemble the one your global tooling was built for, and the largest
              item on it now has a date. The Digital Personal Data Protection Rules were notified{" "}
              <span className="text-inverse">14 November 2025</span>{" "}
              <ProvenanceChip source="MeitY gazette notification" method="official publication" date="14 Nov 2025" />.
              Consent Manager operationalises between June and August 2026. Significant Data Fiduciary audits begin in
              Q1 2027. Full adjudicatory enforcement lands{" "}
              <span className="text-inverse">13–14 May 2027</span>, with penalties to ₹250 crore. Most organisations we
              speak to have a policy. Very few have a record that would survive an inspection.
            </p>

            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="t-label text-live-bright">What it does</h3>
                <ul className="mt-5">
                  {[
                    "Tracks regulatory change against your actual obligations, not a generic feed.",
                    "Maintains a live data map and processing register.",
                    "Produces Data Protection Impact Assessments as artefacts, not documents.",
                    "Records consent, purpose and retention as fields rather than as commitments.",
                    "Generates the evidence pack an auditor asks for, with provenance attached.",
                  ].map((t) => (
                    <li key={t} className="rule-inverse py-4 text-[0.9375rem] leading-relaxed text-inverse-dim">{t}</li>
                  ))}
                </ul>

                <h3 className="t-label mt-12 text-seal-tint">What it does not do</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Replace your legal counsel.",
                    "Cover jurisdictions outside India.",
                    "Operate without a named data protection officer on your side.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-[0.9375rem] leading-relaxed text-inverse-dim">
                      <X className="mt-1 h-3.5 w-3.5 shrink-0 text-seal-tint" strokeWidth={2} /> {t}
                    </li>
                  ))}
                </ul>

                <Link to="/services" className="btn btn-on-dark mt-10">
                  DPDP Readiness Assessment · 3–4 weeks <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>

              <div>
                <h3 className="t-label text-inverse-faint">The disclosure, generated from configuration</h3>
                <div className="mt-5">
                  <DisclosureTriptych
                    used="Classification of regulatory text against your obligation register, multilingual retrieval across filings and correspondence, anomaly detection on processing records."
                    notDone="It does not determine whether you are compliant, produce legal advice, or file on your behalf."
                    review="A named accountable person signs every assessment and every submission."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rule bg-paper">
          <div className="shell band">
            <Statement>
              A component that can render two ways <Say>will render two ways</Say>. Every table is the data table.
              Every chart is the chart frame. Every figure carries its chip.
            </Statement>
            <div className="mt-14"><MegaCta /></div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
