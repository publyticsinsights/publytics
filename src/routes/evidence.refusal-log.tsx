import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { BoundaryPanel, Eyebrow, MegaCta } from "@/components/publytics/system";
import { Breadcrumb, SectionHead, StatusBadge } from "@/components/publytics/atlas";
import { REFUSAL_CRITERIA } from "@/content/evidence";
import { breadcrumbLd, ldScript, CONTENT_AS_OF, pageHead } from "@/content/site";

const TITLE = "The Refusal Log — Engagements We Declined | Publytics";
const DESCRIPTION =
  "Every engagement Publytics declines under its boundary, anonymised and dated, with the criteria applied — so the boundary can be checked rather than believed.";

export const Route = createFileRoute("/evidence/refusal-log")({
  component: RefusalLogPage,
  head: () => ({
    ...pageHead({ title: TITLE, description: DESCRIPTION, path: "/evidence/refusal-log" }),
    scripts: [
      ldScript(
        breadcrumbLd([
          { name: "Evidence", path: "/evidence" },
          { name: "The refusal log", path: "/evidence/refusal-log" },
        ]),
      ),
    ],
  }),
});

/** Published entries. Each is anonymised and dated; the list is append-only. */
const ENTRIES: { date: string; segment: string; request: string; criterion: number }[] = [];

function RefusalLogPage() {
  return (
    <PageFrame section="Evidence">
      <header className="shell pt-10 pb-14 lg:pt-14 lg:pb-20">
        <Breadcrumb
          trail={[{ label: "Evidence", href: "/evidence" }, { label: "The refusal log" }]}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <div>
            <StatusBadge status="live" label="Log open" />
            <h1 className="t-display-xl mt-6">The refusal log</h1>
          </div>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            Every engagement we decline under the boundary — anonymised, dated, with the criterion
            applied. So the boundary can be checked rather than believed.
          </p>
        </div>
      </header>

      <section className="rule bg-paper">
        <div className="shell band">
          <BoundaryPanel eyebrow="The criteria we apply">
            <ol className="space-y-4">
              {REFUSAL_CRITERIA.map((c, i) => (
                <li
                  key={c}
                  className="grid grid-cols-[2.5rem_1fr] gap-2 text-[1rem] leading-relaxed text-ink"
                >
                  <span className="t-index pt-1 text-seal">C{i + 1}</span>
                  {c}
                </li>
              ))}
            </ol>
          </BoundaryPanel>
        </div>
      </section>

      <section className="rule bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="Entries"
            title="Declined engagements, newest first."
            brief="Entries name the kind of institution and the request, never the party. An empty log is stated as empty."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="t-label py-3 pr-6 font-medium text-steel">Date</th>
                  <th className="t-label py-3 pr-6 font-medium text-steel">Requested by</th>
                  <th className="t-label py-3 pr-6 font-medium text-steel">Request</th>
                  <th className="t-label py-3 font-medium text-steel">Criterion</th>
                </tr>
              </thead>
              <tbody>
                {ENTRIES.length === 0 ? (
                  <tr className="border-b border-line">
                    <td colSpan={4} className="py-10 text-[0.9375rem] text-graphite">
                      No entries are published on this page as of {CONTENT_AS_OF}. When an
                      engagement is declined, its entry appears here — dated, anonymised, with the
                      criterion it failed.
                    </td>
                  </tr>
                ) : (
                  ENTRIES.map((e) => (
                    <tr
                      key={`${e.date}-${e.request}`}
                      className="border-b border-line align-baseline"
                    >
                      <td className="py-4 pr-6 font-mono text-[0.8125rem] text-ink">{e.date}</td>
                      <td className="py-4 pr-6 text-[0.9375rem] text-graphite">{e.segment}</td>
                      <td className="py-4 pr-6 text-[0.9375rem] text-graphite">{e.request}</td>
                      <td className="py-4 font-mono text-[0.8125rem] text-seal">C{e.criterion}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <Link to="/trust" hash="boundary" className="link-arrow text-ink">
              The boundary policy <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link to="/evidence/corrections" className="link-arrow text-ink">
              Corrections <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="rule bg-paper">
        <div className="shell band">
          <Eyebrow tone="steel">Why publish refusals</Eyebrow>
          <p className="t-h3 mt-6 max-w-3xl">
            Promise-tracking can read as political. A dated record of what we declined is how an
            officer can show — across any change of administration — that the work is delivery
            assurance, not campaigning.
          </p>
          <div className="mt-14">
            <MegaCta />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
