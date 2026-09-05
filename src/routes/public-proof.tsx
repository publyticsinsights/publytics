import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AnnouncementBar, SiteFooter, SiteHeader } from "@/components/publytics/chrome";
import {
  Eyebrow,
  IssueCard,
  MegaCta,
  OperatingLoop,
  ProvenanceChip,
  Say,
  Statement,
} from "@/components/publytics/system";

const TITLE = "Public Proof — The Argument | Publytics";
const DESCRIPTION =
  "When a citizen asks whether the promise was kept, who answers — and what do they have to show? The structural argument behind Publytics.";

export const Route = createFileRoute("/public-proof")({
  component: PublicProofPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/public-proof" }],
  }),
});

const SUBNAV = [
  { label: "The argument", href: "/public-proof" },
  { label: "The operating loop", href: "/public-proof" },
  { label: "The Platform", href: "/products" },
  { label: "The series", href: "/evidence" },
];

const COMMITMENTS = [
  { n: "01", t: "Any language. Any institution. Any method — published.", b: "The method travels with the output. If it cannot be published, it is not a method — it is a preference." },
  { n: "02", t: "A number you cannot check is not evidence.", b: "Every figure carries its source, its collection method, its effective date and its stated limits, attached to the figure itself." },
  { n: "03", t: "We publish our errors before someone else finds them.", b: "Corrections appear at the original address, dated, permanent. The count is published alongside the work." },
];

function PublicProofPage() {
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader section="Public Proof" subnav={SUBNAV} />

      <main>
        {/* Page header — asymmetric, title left, brief right */}
        <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
          <Eyebrow tone="steel">The argument</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
            <h1 className="t-display-xl">
              When a citizen asks whether the promise was kept, who answers?
            </h1>
            <p className="t-lead max-w-md text-graphite lg:pb-2">
              The gap is structural, not personal. Most public institutions can report what they spent and what they
              announced. Almost none can produce, on demand and in the citizen’s own language, the evidence chain that
              connects the two.
            </p>
          </div>
        </header>

        {/* The thesis, as a large muted statement */}
        <section className="rule bg-surface">
          <div className="shell band">
            <Statement>
              Owning that evidence chain — the data, the method, the provenance and the limits — is what separates an
              institution that is <Say>accountable</Say> from one that is <Say>merely audited</Say>.
            </Statement>
          </div>
        </section>

        {/* The evidence the gap is real */}
        <section className="rule bg-paper">
          <div className="shell band">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              <div>
                <Eyebrow tone="steel">The evidence that the gap is real</Eyebrow>
                <h2 className="t-h2 mt-6">One state. One programme. Three numbers that cannot all be true.</h2>
              </div>
              <div>
                <p className="t-body text-graphite">
                  Tamil Nadu published three irreconcilable figures for the same MoU-to-operating-plant conversion
                  rate within nine months of each other. No independent body verifies which is true — and nothing in
                  the machinery that produced them was built to.
                </p>

                <dl className="mt-10">
                  {[
                    { v: "78%", d: "“in various stages”", src: "Departmental press statement", m: "self-declared; stage undefined" },
                    { v: "35.11%", d: "operational", src: "Assembly reply", m: "departmental tally" },
                    { v: "~100%", d: "“near-100%”", src: "Public address", m: "unstated" },
                  ].map((r) => (
                    <div key={r.v} className="rule grid grid-cols-[7rem_1fr] items-baseline gap-4 py-5">
                      <dt className="figure-num t-h3 text-ink">{r.v}</dt>
                      <dd>
                        <p className="text-[0.9375rem] text-graphite">{r.d}</p>
                        <p className="mt-1.5">
                          <ProvenanceChip source={r.src} method={r.m} date="illustrative" limitations="Illustrative of the documented pattern; the sourced dataset publishes with the full argument." />
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="t-micro mt-6 text-steel">
                  Figures are illustrative of the pattern this argument describes, pending publication of the sourced
                  dataset. Every figure on this site carries its provenance; these carry theirs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why it is structural */}
        <section className="rule bg-surface">
          <div className="shell band">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              <div>
                <Eyebrow tone="steel">Why it is structural</Eyebrow>
                <h2 className="t-h2 mt-6">Not a failure of intent.</h2>
              </div>
              <div className="max-w-xl">
                <p className="t-body text-graphite">
                  Institutions are built to report inputs and announcements, because that is what their reporting
                  obligations ask for. Nothing in the machinery produces a delivery record a third party can check.
                </p>
                <p className="t-body mt-5 text-graphite">
                  The people running these programmes are not concealing anything. The record that would let them
                  answer the question was never built — and building it is not a reporting exercise. It is
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The operating loop */}
        <section className="relative overflow-hidden bg-ink text-inverse">
          <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
          <div className="shell band relative">
            <Eyebrow tone="inverse">The operating loop</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-3xl text-inverse">
              Record · Verify · Publish · Challenge · Correct.
            </h2>
            <p className="t-small mt-6 max-w-xl text-inverse-dim">
              Five stages, each with a technical requirement behind it. This is not a slogan — it is the architecture
              every Publytics product implements.
            </p>
            <div className="mt-12">
              <OperatingLoop tone="dark" />
            </div>
          </div>
        </section>

        {/* The three commitments */}
        <section className="rule bg-paper">
          <div className="shell band">
            <Eyebrow tone="steel">The three commitments</Eyebrow>
            <div className="mt-10">
              {COMMITMENTS.map((c) => (
                <div key={c.n} className="index-row">
                  <p className="t-index text-silver">/{c.n}</p>
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
                    <h3 className="t-h3">{c.t}</h3>
                    <p className="t-small text-graphite">{c.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What this means for what we build */}
        <section className="rule bg-surface">
          <div className="shell band">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <Eyebrow tone="steel">What this means for what we build</Eyebrow>
                <h2 className="t-h2 mt-6">Straight into the platform.</h2>
                <p className="t-body mt-6 max-w-md text-graphite">
                  Every product Publytics ships addresses the same civic record model, the same evidence ledger, and
                  the same Tamil-first language layer — because the loop above has to be implemented somewhere, and
                  that somewhere is the platform.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link to="/products" className="btn btn-solid">
                    See the platform <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link to="/solutions" className="btn btn-outline">Find your institution</Link>
                </div>
              </div>

              <div>
                <Eyebrow tone="steel">The series · instalment one</Eyebrow>
                <div className="mt-6">
                  <IssueCard
                    issue="01"
                    title="Publytics Is Not a Dashboard Company"
                    subtitle="A dashboard reports a state. Evidence records a chain. The two are priced differently because they are worth differently."
                    theme="indigo"
                    status="Publishing soon"
                  />
                </div>
              </div>
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
