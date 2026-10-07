import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { Eyebrow, IntegrityChecklist, IssueCard, MegaCta, ProvenanceChip, Say, Statement } from "@/components/publytics/system";
import { SectionHead, StatusBadge } from "@/components/publytics/atlas";
import { EVIDENCE } from "@/content/evidence";
import { evidenceHref } from "@/content/nav";
import { FACTS } from "@/content/dates";
import { CONTENT_AS_OF, pageHead } from "@/content/site";

const TITLE = "Evidence — Trackers, the Method Standard, Corrections | Publytics";
const DESCRIPTION =
  "Trackers, impact studies, the Method Standard, benchmarks, error rates and corrections, the refusal log and field notes — each with its status stated.";

export const Route = createFileRoute("/evidence/")({
  component: EvidencePage,
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/evidence" }),
});

const SUBNAV = [
  { label: "Live now", href: "#live" },
  { label: "Seven kinds of evidence", href: "#kinds" },
  { label: "Tracker 1", href: "#trackers" },
  { label: "The Method Standard", href: "/evidence/method-standard" },
];

function EvidencePage() {
  const live = EVIDENCE.filter((e) => e.status === "live");
  return (
    <PageFrame section="Evidence" subnav={SUBNAV}>
      <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
        <Eyebrow tone="steel">Evidence</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <h1 className="t-display-xl">Research built to be read, cited, and challenged.</h1>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            A field note is evidence of practice. A tracker is evidence of method. An impact study is evidence of outcome. Anything
            that is none of the three does not belong in this section.
          </p>
        </div>
      </header>

      <section id="live" className="shell scroll-mt-32 pb-16 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-2">
          <Link to="/evidence/method-standard" className="block transition-opacity hover:opacity-95">
            <IssueCard issue="01" title="The Method Standard" subtitle="Five items. Certify your output against them, whoever you are." theme="teal" status="v1.0 · 4 Sep 2026" />
          </Link>
          <Link to="/evidence/refusal-log" className="block transition-opacity hover:opacity-95">
            <IssueCard issue="02" title="The Refusal Log" subtitle="Every engagement declined under the boundary, anonymised and dated." theme="seal" status="Log open" />
          </Link>
          <Link to="/evidence/corrections" className="block transition-opacity hover:opacity-95">
            <IssueCard issue="03" title="Corrections" subtitle="Our errors, published at the original address before someone else finds them." theme="slate" status="Policy live" />
          </Link>
          <Link to="/public-proof" className="block transition-opacity hover:opacity-95">
            <IssueCard issue="04" title="Publytics Is Not a Dashboard Company" subtitle="A dashboard reports a state. Evidence records a chain." theme="indigo" status="The argument" />
          </Link>
        </div>
        <p className="t-micro mt-5 text-steel">
          Live today: {live.map((e) => e.name).join(", ")}. Status as of {CONTENT_AS_OF}.
        </p>
      </section>

      <section id="kinds" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="Seven kinds of evidence, one rule each"
            title="Each states whether it is live, scheduled or in preparation."
            brief="“We did not look” never renders as “we looked and it was fine”. Where something has not shipped, it says so."
          />
          <div className="mt-12">
            {EVIDENCE.map((e) => (
              <article key={e.slug} id={e.slug} className="index-row group scroll-mt-32">
                <div>
                  <p className="t-micro leading-snug text-graphite">{e.kicker}</p>
                  <p className="t-index mt-6 text-silver">/{e.index}</p>
                </div>
                <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
                  <div>
                    <h3 className="t-h2">{e.name}</h3>
                    <p className="t-small mt-4 max-w-2xl text-graphite">{e.rule}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <StatusBadge status={e.status} label={e.statusLabel} />
                      <span className="t-label text-steel">{e.proves}</span>
                    </div>
                  </div>
                  {evidenceHref(e.slug).startsWith("/evidence/") && (
                    <Link to={evidenceHref(e.slug)} className="link-arrow mt-6 shrink-0 text-ink lg:mt-2">
                      Open <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden atmo text-inverse">
        <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
        <div className="shell band relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Eyebrow tone="inverse">A dated commitment</Eyebrow>
              <h2 className="t-display mt-6 text-inverse">Publytics Tracker 1 publishes on 31 March 2027.</h2>
              <p className="mt-6 [&_.chip]:text-inverse-dim">
                <ProvenanceChip source={FACTS.tracker1.source} method={FACTS.tracker1.method} date={FACTS.tracker1.date} limitations={FACTS.tracker1.limitations!} />
              </p>
            </div>
            <div>
              <p className="t-body text-inverse-dim">
                The first public edition, on the date we announced in advance: a versioned dataset, its method, the commissioning
                party, a stated error rate, and — from the second edition — a diff against the one before.
              </p>
              <p className="t-body mt-5 text-inverse-dim">
                A commitment is not an achievement. If the date moves, the change is published here, with the reason, before the
                date arrives.
              </p>
              <Link to="/services/$slug" params={{ slug: "tracker-network" }} className="btn btn-on-dark mt-9">
                Run your own edition — the Tracker Network <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rule bg-paper">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
            <div>
              <Eyebrow tone="steel">The standard</Eyebrow>
              <h2 className="t-h2 mt-6">Certify your output against it, whoever you are.</h2>
              <p className="t-body mt-6 max-w-md text-graphite">
                The Method Standard is open and versioned. Every published output — ours, or any Tracker Network licensee’s — is
                checked against the same five items before it ships.
              </p>
              <Link to="/evidence/method-standard" className="link-arrow mt-8 text-ink">
                Read the standard <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
            <IntegrityChecklist />
          </div>
        </div>
      </section>

      <section className="rule bg-surface">
        <div className="shell band">
          <Statement>
            A company that publishes its own error rate before a critic finds it, and its own refusals before a journalist asks, has{" "}
            <Say>pre-empted both stories</Say>.
          </Statement>
          <div className="mt-14">
            <MegaCta />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
