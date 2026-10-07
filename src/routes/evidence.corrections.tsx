import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { CorrectionNotice, Eyebrow, MegaCta } from "@/components/publytics/system";
import { Breadcrumb, SectionHead, StatusBadge } from "@/components/publytics/atlas";
import { CONTENT_AS_OF, pageHead } from "@/content/site";

const TITLE = "Error Rates & Corrections | Publytics";
const DESCRIPTION =
  "A stated error rate on every published figure, and permanent correction notices at the original address — including corrections to this website.";

export const Route = createFileRoute("/evidence/corrections")({
  component: CorrectionsPage,
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/evidence/corrections" }),
});

/* Corrections to this website itself. Each is permanent; nothing is edited away.
   Reconciled against the GTM Atlas website audit (§03), 7 Oct 2026. */
const SITE_CORRECTIONS: { date: string; page: string; was: string; now: string }[] = [
  {
    date: "7 Oct 2026",
    page: "Products — Compliance & Regtech",
    was: "Consent Manager “operationalises between June and August 2026”.",
    now: "Consent Manager registration under DPDP Rule 4 comes into force on 13 Nov 2026, 12 months after notification.",
  },
  {
    date: "7 Oct 2026",
    page: "Products — Compliance & Regtech",
    was: "Significant Data Fiduciary audits “begin in Q1 2027”.",
    now: "Significant Data Fiduciary duties (annual DPIA and audit, Rule 13) apply with all other obligations from 13 May 2027.",
  },
  {
    date: "7 Oct 2026",
    page: "Home; Products",
    was: "DPDP Rules “notified 14 November 2025”; enforcement “13–14 May 2027”.",
    now: "Gazetted 13 Nov 2025, with the PIB release dated 14 Nov 2025 — both cited. Obligations apply in full from 13 May 2027.",
  },
  {
    date: "7 Oct 2026",
    page: "Footer; Services",
    was: "The footer listed eight services and programmes and omitted the Record Model Workshop, Forward-Deployed Analyst and Use Case Boost; the Method Standard appeared both as a programme and as evidence.",
    now: "Footer and Services list the same seven services and four programmes. The Method Standard appears once, under Evidence.",
  },
  {
    date: "7 Oct 2026",
    page: "Home",
    was: "A “Live” strip showed “Signals monitored: 12”, an illustrative figure presented with the reserved live-data colour.",
    now: "Replaced with dated, sourced facts, each carrying its provenance chip.",
  },
  {
    date: "7 Oct 2026",
    page: "All pages",
    was: "The briefing form confirmed “Request received” without sending the request anywhere.",
    now: "The form either sends the request and confirms only on success, or opens a pre-filled email and says so.",
  },
];

function CorrectionsPage() {
  return (
    <PageFrame section="Evidence">
      <header className="shell pt-10 pb-14 lg:pt-14 lg:pb-20">
        <Breadcrumb
          trail={[{ label: "Evidence", href: "/evidence" }, { label: "Error rates & corrections" }]}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <div>
            <StatusBadge status="live" label="Policy live" />
            <h1 className="t-display-xl mt-6">Error rates &amp; corrections</h1>
          </div>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            We publish our errors before someone else finds them — at the original address, dated,
            and never quietly edited away.
          </p>
        </div>
      </header>

      <section className="rule bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
            {[
              {
                t: "A stated error rate",
                b: "Every published figure and every automated classification carries a stated error rate — measured against a declared baseline, not implied by precision.",
              },
              {
                t: "A permanent notice",
                b: "A correction appears at the same URL as the original, dated, with what was wrong and how it happened. The original is not deleted.",
              },
              {
                t: "A published count",
                b: "Corrections are counted, and the count is published alongside the work — so a reader can judge reliability over time.",
              },
            ].map((x, i) => (
              <div key={x.t}>
                <span className="t-index text-silver">/0{i + 1}</span>
                <h2 className="t-h3 mt-5">{x.t}</h2>
                <p className="t-small mt-4 text-graphite">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rule bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="Corrections to published evidence"
            title="Trackers and research."
            brief={`No corrections to published evidence have been recorded as of ${CONTENT_AS_OF}. Publytics Tracker 1 publishes on 31 March 2027.`}
          />
          <div className="mt-10 max-w-2xl">
            <CorrectionNotice date="—">
              None recorded. When one is issued it appears here and at the original address,
              permanently — dated, with what was wrong and how it happened.
            </CorrectionNotice>
          </div>
        </div>
      </section>

      <section className="rule bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="Corrections to this website"
            title={`${SITE_CORRECTIONS.length} corrections, all on ${SITE_CORRECTIONS[0]!.date}.`}
            brief="The same rule applies to our own pages. These were found in a full audit of the site against its sources."
          />
          <div className="mt-12 space-y-4">
            {SITE_CORRECTIONS.map((c) => (
              <article
                key={c.was}
                className="grid gap-4 border-l-2 border-seal bg-seal-tint px-6 py-5 lg:grid-cols-[12rem_1fr_1fr] lg:gap-8"
              >
                <div>
                  <p className="t-label text-seal">Corrected {c.date}</p>
                  <p className="t-micro mt-2 text-graphite">{c.page}</p>
                </div>
                <div>
                  <p className="t-label text-steel">Was</p>
                  <p className="t-micro mt-2 text-graphite">{c.was}</p>
                </div>
                <div>
                  <p className="t-label text-steel">Now</p>
                  <p className="t-micro mt-2 text-ink">{c.now}</p>
                </div>
              </article>
            ))}
          </div>
          <Link to="/evidence/refusal-log" className="link-arrow mt-10 text-ink">
            The refusal log <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <section className="rule bg-paper">
        <div className="shell band">
          <Eyebrow tone="steel">Found an error?</Eyebrow>
          <p className="t-h3 mt-6 max-w-3xl">
            Tell us through the briefing form, marked “correction”. A named person answers, and if
            the challenge is upheld the correction is published here.
          </p>
          <div className="mt-14">
            <MegaCta />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
