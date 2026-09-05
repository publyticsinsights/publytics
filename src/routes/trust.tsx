import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AnnouncementBar, SiteFooter, SiteHeader } from "@/components/publytics/chrome";
import {
  BoundaryPanel,
  DisclosureTriptych,
  Eyebrow,
  IndexRow,
  MegaCta,
  Say,
  Statement,
} from "@/components/publytics/system";

const TITLE = "Trust — AI Principles, the Boundary, Governance | Publytics";
const DESCRIPTION =
  "AI principles, the boundary, data governance and DPDP, security and residency, sub-processors, and accessibility.";

export const Route = createFileRoute("/trust")({
  component: TrustPage,
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }], links: [{ rel: "canonical", href: "/trust" }] }),
});

const SUBNAV = [
  { label: "AI principles", href: "/trust" },
  { label: "The boundary", href: "/trust" },
  { label: "Data governance", href: "/trust" },
  { label: "Accessibility", href: "/trust" },
];

const PAGES = [
  { n: "0.1", k: "Lawful basis, consent, retention", t: "Data governance & DPDP", b: "Our own posture: consent architecture, purpose limitation, retention, and the model-training boundary — with the technical reasoning shown, not asserted." },
  { n: "0.2", k: "Where the data sits, and who holds it", t: "Security & residency", b: "Residency commitments and the security posture, stated honestly, including what is not yet certified." },
  { n: "0.3", k: "Named and dated", t: "Sub-processors", b: "Every sub-processor with access to client data, named, with the date it was added." },
  { n: "0.4", k: "Conformance, including the gaps", t: "Accessibility", b: "The WCAG 2.2 AA conformance statement, published together with its known failures. A statement that lists its own gaps is more credible than one that claims perfection." },
];

const BUDGET = [
  ["LCP · throttled Fast-3G", "≤ 2.0s"],
  ["JavaScript, first load", "≤ 120 KB"],
  ["Fonts, all faces", "≤ 120 KB"],
  ["Third-party requests", "0"],
];

function TrustPage() {
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader section="Trust" subnav={SUBNAV} />

      <main>
        <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
          <Eyebrow tone="steel">Trust</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
            <h1 className="t-display-xl">Institutional trust requires bounded systems, not broad claims.</h1>
            <p className="t-lead max-w-md text-graphite lg:pb-2">
              No claim goes on this website that Publytics would not publish the evidence for if challenged in public.
            </p>
          </div>
        </header>

        <section className="relative overflow-hidden bg-ink text-inverse">
          <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
          <div className="shell band relative">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <div>
                <Eyebrow tone="inverse">AI principles</Eyebrow>
                <h2 className="t-h2 mt-6 text-inverse">
                  What is automated end to end, what always keeps a human reviewer, and what we will not build.
                </h2>
                <p className="t-small mt-6 max-w-md text-inverse-dim">
                  Models are evaluated for bias in a multilingual and multi-community context before they enter a
                  workflow, and re-evaluated on a fixed schedule afterwards.
                </p>
              </div>
              <div className="lg:pt-2">
                <DisclosureTriptych
                  used="Classification, multilingual retrieval, anomaly detection, summarisation, and decision support within defined workflows."
                  notDone="AI does not make high-impact public decisions, determine eligibility, or operate as a political persuasion system."
                  review="People remain accountable for interpretation, escalation, approval, and any action that affects a person or institution."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rule bg-paper">
          <div className="shell band">
            <BoundaryPanel>
              <h2 className="t-h2 text-seal">We sell to institutions. Never to contestants.</h2>
              <p className="t-body mt-6 max-w-2xl text-ink">
                Publytics does not provide political targeting or persuasion systems to political parties or
                candidates. Where our buyer is an elected representative, the engagement is with the public office —
                paid from public funds, discharging public duties, and its outputs pass to that office’s successor.
                Where an output concerns an election, it is published openly or not produced at all.
              </p>
              <p className="t-small mt-5 max-w-2xl text-graphite">
                The boundary is stated here, and it is also in the company’s articles — because a policy on a website
                can be edited on a Tuesday, and a policy in the articles cannot.
              </p>
              <Link to="/evidence" className="link-arrow mt-8 text-seal">
                The refusal log <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </BoundaryPanel>
          </div>
        </section>

        <section className="rule bg-surface">
          <div className="shell band">
            <Eyebrow tone="steel">Governance</Eyebrow>
            <div className="mt-10">
              {PAGES.map((p) => (
                <IndexRow key={p.n} index={p.n} kicker={p.k} title={p.t}>
                  {p.b}
                </IndexRow>
              ))}
            </div>
          </div>
        </section>

        <section className="rule bg-paper">
          <div className="shell band">
            <Statement>
              A meaningful share of this audience is on a mid-tier Android outside Chennai. So we publish the
              performance budget, and <Say>measure against it</Say>.
            </Statement>
            <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
              {BUDGET.map(([k, v]) => (
                <div key={k} className="bg-paper px-6 py-8">
                  <p className="t-label text-steel">{k}</p>
                  <p className="figure-num t-h2 mt-3 text-ink">{v}</p>
                </div>
              ))}
            </div>
            <p className="t-micro mt-6 text-steel">
              Budget published per §7.2 of the website standard. Measured figures replace these values at each release.
            </p>
          </div>
        </section>

        <section className="rule bg-surface">
          <div className="shell band"><MegaCta /></div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
