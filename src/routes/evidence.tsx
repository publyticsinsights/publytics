import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AnnouncementBar, SiteFooter, SiteHeader } from "@/components/publytics/chrome";
import {
  CorrectionNotice,
  Eyebrow,
  IndexRow,
  IntegrityChecklist,
  IssueCard,
  MegaCta,
  Say,
  Statement,
} from "@/components/publytics/system";

const TITLE = "Evidence — Trackers, Method Standard, Corrections | Publytics";
const DESCRIPTION =
  "Trackers, impact studies, the Method Standard, benchmarks, error rates and corrections, and the refusal log.";

export const Route = createFileRoute("/evidence")({
  component: EvidencePage,
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }], links: [{ rel: "canonical", href: "/evidence" }] }),
});

const SUBNAV = [
  { label: "Trackers", href: "/evidence" },
  { label: "The Method Standard", href: "/evidence" },
  { label: "Corrections", href: "/evidence" },
  { label: "The refusal log", href: "/evidence" },
];

const SUBSECTIONS = [
  { n: "0.1", k: "Method-led public evidence products", t: "Trackers", b: "Published on an announced date. Versioned. Downloadable data. Named commissioning party. Stated error rate. Diff against the previous edition.", s: "First edition 31 March 2027" },
  { n: "0.2", k: "Outcomes, named and on the record", t: "Impact studies", b: "One named institution, one number, on the record. Never an anonymised “a leading department.”", s: "Scheduled" },
  { n: "0.3", k: "The checklist others can certify against", t: "The Method Standard", b: "Versioned, dated, with a change log. Open for anyone to apply to their own published work.", s: "v1.0 · published" },
  { n: "0.4", k: "Baselines declared with the task", t: "Benchmarks", b: "Named baselines declared in the same document that defines the task — including the Tamil civic evaluation set.", s: "In preparation" },
  { n: "0.5", k: "Published, unprompted", t: "Error rates & corrections", b: "The correction notice stays permanently at the original URL. The count is published alongside the work.", s: "None recorded" },
  { n: "0.6", k: "Every engagement we declined", t: "The refusal log", b: "Anonymised, dated, with the criteria applied — so the boundary can be checked rather than believed.", s: "Updated as it happens" },
];

function EvidencePage() {
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader section="Evidence" subnav={SUBNAV} />

      <main>
        <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
          <Eyebrow tone="steel">Evidence</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
            <h1 className="t-display-xl">Research built to be read, cited, and challenged.</h1>
            <p className="t-lead max-w-md text-graphite lg:pb-2">
              A field note is evidence of practice. A tracker is evidence of method. An impact study is evidence of
              outcome. Anything that is none of the three does not belong in this section.
            </p>
          </div>
        </header>

        <section className="shell pb-16 lg:pb-24">
          <div className="grid gap-4 lg:grid-cols-2">
            <IssueCard issue="01" title="Publytics Is Not a Dashboard Company" subtitle="A dashboard reports a state. Evidence records a chain." theme="indigo" status="Publishing soon" />
            <IssueCard issue="02" title="The Method Standard" subtitle="Five items. Certify your output against them, whoever you are." theme="teal" status="v1.0 · published" />
            <IssueCard issue="03" title="The Refusal Log" subtitle="Every engagement declined under the boundary, anonymised and dated." theme="seal" status="Live" />
            <IssueCard issue="04" title="Field Notes" subtitle="Observations from implementation, standards work, and institutional practice." theme="slate" status="Fortnightly" />
          </div>
        </section>

        <section className="rule bg-surface">
          <div className="shell band">
            <Eyebrow tone="steel">Six sub-sections, one rule each</Eyebrow>
            <div className="mt-10">
              {SUBSECTIONS.map((s) => (
                <IndexRow key={s.n} index={s.n} kicker={s.k} title={s.t} href="/evidence" linkLabel={s.s}>
                  {s.b}
                </IndexRow>
              ))}
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
                  The Method Standard is open and versioned. Every published output — ours, or anyone licensing the
                  Tracker Network — is checked against the same five items before it ships.
                </p>
                <Link to="/services" className="link-arrow mt-8 text-ink">
                  The Tracker Network <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
              <IntegrityChecklist />
            </div>
          </div>
        </section>

        <section className="rule bg-surface">
          <div className="shell band">
            <Statement>
              A company that publishes its own error rate before a critic finds it, and its own refusals before a
              journalist asks, has <Say>pre-empted both stories</Say>.
            </Statement>
            <div className="mt-12 max-w-2xl">
              <CorrectionNotice date="—">
                No corrections have been recorded yet. When one is issued it appears here, permanently, at this
                address — dated, with what was wrong and how it happened.
              </CorrectionNotice>
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
