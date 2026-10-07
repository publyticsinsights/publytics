import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import {
  BoundaryPanel,
  DisclosureTriptych,
  Eyebrow,
  IndexRow,
  MegaCta,
  Say,
  Statement,
} from "@/components/publytics/system";

import { pageHead } from "@/content/site";

const TITLE = "Trust — AI Principles, the Boundary, Governance | Publytics";
const DESCRIPTION =
  "AI principles, the boundary, data governance and DPDP, security and residency, sub-processors, and accessibility.";

export const Route = createFileRoute("/trust")({
  component: TrustPage,
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/trust" }),
});

const SUBNAV = [
  { label: "AI principles", href: "#ai-principles" },
  { label: "The boundary", href: "#boundary" },
  { label: "Governance", href: "#data-governance" },
  { label: "Performance", href: "#performance" },
];

const PAGES = [
  {
    id: "data-governance",
    n: "0.1",
    k: "Lawful basis, consent, retention",
    t: "Data governance & DPDP",
    b: "Our own posture against the DPDP obligations that apply from 13 May 2027: consent architecture, purpose limitation, retention, and the model-training boundary. Client data is never used to train models outside the client’s governed environment.",
    s: "Posture statement in preparation",
  },
  {
    id: "security",
    n: "0.2",
    k: "Where the data sits, and who holds it",
    t: "Security & residency",
    b: "Residency is written into each contract: hosting on a State Data Centre or an Indian cloud region, after a CERT-In empanelled security audit where the client requires one. What is not yet certified is stated as not certified.",
    s: "Written into each contract",
  },
  {
    id: "sub-processors",
    n: "0.3",
    k: "Named and dated",
    t: "Sub-processors",
    b: "Every sub-processor with access to client data, named, with the date it was added — supplied with each proposal.",
    s: "Supplied with each proposal",
  },
  {
    id: "accessibility",
    n: "0.4",
    k: "Conformance, including the gaps",
    t: "Accessibility",
    b: "This site targets WCAG 2.2 AA: keyboard paths, visible focus, a skip link, reduced-motion support, and content that renders without JavaScript. A conformance statement that lists its own known failures will be published here — a statement that lists its gaps is more credible than one that claims perfection.",
    s: "Statement in preparation",
  },
];

/* Budget against what this release actually measures. Three states, never two:
   a figure we did not measure is shown as "not yet measured", never as a pass.
   Measured 7 Oct 2026 from the production build, gzip as served. */
const BUDGET: {
  k: string;
  budget: string;
  measured: string;
  state: "met" | "over" | "not-measured";
  note: string;
}[] = [
  {
    k: "JavaScript, first load",
    budget: "≤ 120 KB",
    measured: "151–181 KB",
    state: "over",
    note: "The framework baseline alone is 106 KB. Search and the deep-dive content load only on the pages that use them.",
  },
  {
    k: "Fonts, preloaded",
    budget: "≤ 120 KB",
    measured: "94 KB",
    state: "met",
    note: "Self-hosted: Inter and the Newsreader display serif. Tamil (49 KB) loads only where Tamil text appears.",
  },
  {
    k: "Third-party requests",
    budget: "0",
    measured: "0",
    state: "met",
    note: "No external fonts, analytics or scripts.",
  },
  {
    k: "LCP · throttled Fast-3G",
    budget: "≤ 2.0 s",
    measured: "Not yet measured",
    state: "not-measured",
    note: "Requires a field or lab run on the deployed site.",
  },
];

function TrustPage() {
  return (
    <PageFrame section="Trust" subnav={SUBNAV}>
      <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
        <Eyebrow tone="steel">Trust</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <h1 className="t-display-xl">
            Institutional trust requires bounded systems, not broad claims.
          </h1>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            No claim goes on this website that Publytics would not publish the evidence for if
            challenged in public.
          </p>
        </div>
      </header>

      <section
        id="ai-principles"
        className="relative scroll-mt-32 overflow-hidden atmo text-inverse"
      >
        <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
        <div className="shell band relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow tone="inverse">AI principles</Eyebrow>
              <h2 className="t-h2 mt-6 text-inverse">
                What is automated end to end, what always keeps a human reviewer, and what we will
                not build.
              </h2>
              <p className="t-small mt-6 max-w-md text-inverse-dim">
                Models are evaluated for bias in a multilingual and multi-community context before
                they enter a workflow, and re-evaluated on a fixed schedule afterwards.
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

      <section id="boundary" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <BoundaryPanel>
            <h2 className="t-h2 text-seal">We sell to institutions. Never to contestants.</h2>
            <p className="t-body mt-6 max-w-2xl text-ink">
              Publytics does not provide political targeting or persuasion systems to political
              parties or candidates. Where our buyer is an elected representative, the engagement is
              with the public office — paid from public funds, discharging public duties, and its
              outputs pass to that office’s successor. Where an output concerns an election, it is
              published openly or not produced at all.
            </p>
            <p className="t-small mt-5 max-w-2xl text-graphite">
              The boundary is stated here, and it is also in the company’s articles — because a
              policy on a website can be edited on a Tuesday, and a policy in the articles cannot.
            </p>
            <Link to="/evidence/refusal-log" className="link-arrow mt-8 text-seal">
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
              <div key={p.n} id={p.id} className="scroll-mt-32">
                <IndexRow index={p.n} kicker={p.k} title={p.t}>
                  {p.b}
                  <span className="t-label mt-4 block text-steel">{p.s}</span>
                </IndexRow>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="performance" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <Statement>
            A meaningful share of this audience is on a mid-tier Android outside Chennai. So we
            publish the performance budget, and <Say>what we actually measured against it</Say> —
            including where we miss.
          </Statement>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {BUDGET.map((b) => (
              <div key={b.k} className="flex flex-col bg-paper px-6 py-8">
                <p className="t-label text-steel">{b.k}</p>
                <p className="figure-num t-h2 mt-3 text-ink">{b.measured}</p>
                <p className="t-micro mt-2 text-steel">Budget {b.budget}</p>
                <p
                  className={`t-label mt-5 self-start border px-2 py-1 ${
                    b.state === "over"
                      ? "border-seal/30 bg-seal-tint text-seal"
                      : b.state === "met"
                        ? "border-line-strong text-ink"
                        : "border-line-strong text-steel"
                  }`}
                >
                  {b.state === "over"
                    ? "Over budget"
                    : b.state === "met"
                      ? "Within budget"
                      : "Not yet measured"}
                </p>
                <p className="t-micro mt-4 text-graphite">{b.note}</p>
              </div>
            ))}
          </div>
          <p className="t-micro mt-6 text-steel">
            Measured 7 Oct 2026 from the production build, gzip as served. Figures are replaced at
            each release; a miss is published as a miss.
          </p>
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
