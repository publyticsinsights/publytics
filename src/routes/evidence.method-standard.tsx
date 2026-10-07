import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { Eyebrow, MegaCta } from "@/components/publytics/system";
import { Breadcrumb, FactStrip, SectionHead, StatusBadge } from "@/components/publytics/atlas";
import { METHOD_STANDARD } from "@/content/evidence";
import { offeringBySlug } from "@/content/offerings";
import { ORG_ID, absoluteUrl, breadcrumbLd, ldScript, pageHead } from "@/content/site";

const TITLE = "The Method Standard v1.0 — Five Items | Publytics";
const DESCRIPTION =
  "An open, versioned publication-integrity checklist: source and method, commissioning party, version history, limitations, and download and reuse terms.";

export const Route = createFileRoute("/evidence/method-standard")({
  component: MethodStandardPage,
  head: () => ({
    ...pageHead({ title: TITLE, description: DESCRIPTION, path: "/evidence/method-standard" }),
    scripts: [
      ldScript(
        breadcrumbLd([
          { name: "Evidence", path: "/evidence" },
          { name: "The Method Standard", path: "/evidence/method-standard" },
        ]),
      ),
      ldScript({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: "The Method Standard",
        version: METHOD_STANDARD.version,
        datePublished: "2026-09-04",
        inLanguage: "en-IN",
        url: absoluteUrl("/evidence/method-standard"),
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        description: DESCRIPTION,
      }),
    ],
  }),
});

function MethodStandardPage() {
  const audit = offeringBySlug("methodology-audit");
  return (
    <PageFrame section="Evidence">
      <header className="shell pt-10 pb-14 lg:pt-14 lg:pb-20">
        <Breadcrumb
          trail={[{ label: "Evidence", href: "/evidence" }, { label: "The Method Standard" }]}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <div>
            <StatusBadge
              status="live"
              label={`v${METHOD_STANDARD.version} · ${METHOD_STANDARD.date}`}
            />
            <h1 className="t-display-xl mt-6">The Method Standard</h1>
          </div>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            Five items. Open, versioned and dated. Certify your own published output against them,
            whoever you are.
          </p>
        </div>
        <div className="mt-12">
          <FactStrip
            items={[
              { k: "Version", v: `v${METHOD_STANDARD.version}` },
              { k: "Published", v: METHOD_STANDARD.date },
              { k: "Licence to apply it", v: "Open — anyone may apply it" },
              { k: "Certification", v: "Through a Methodology Audit" },
            ]}
          />
        </div>
      </header>

      <section className="rule bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="The five items"
            title="A published figure passes only if all five hold."
            brief="Apply it to a tracker, a dashboard, an impact report or a research dataset. It is a publication rule, not a software feature."
          />
          <ol className="mt-12 border-b border-line">
            {METHOD_STANDARD.items.map((it, i) => (
              <li
                key={it.t}
                className="rule grid gap-4 py-8 lg:grid-cols-[6rem_1fr_1.2fr] lg:gap-10"
                data-reveal
              >
                <span className="figure-num t-display text-silver">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3">{it.t}</h3>
                <p className="t-small text-graphite">{it.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rule bg-paper">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow tone="steel">How to use it</Eyebrow>
              <h2 className="t-h2 mt-6">
                Adopt it as your rule. Certify against it when it matters.
              </h2>
              <p className="t-body mt-6 max-w-md text-graphite">
                Any institution can adopt the standard as its own publication rule for dashboards
                and reports, free. Where a figure is about to be cited — in an Assembly, a board
                paper or a grant report — a Methodology Audit reviews it item by item and certifies
                it where every item passes.
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: "methodology-audit" }}
                className="link-arrow mt-8 text-ink"
              >
                {audit.name} · {audit.band} <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
            <div>
              <Eyebrow tone="steel">Change log</Eyebrow>
              <table className="mt-6 w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-line">
                    <th className="t-label py-3 pr-6 font-medium text-steel">Version</th>
                    <th className="t-label py-3 pr-6 font-medium text-steel">Date</th>
                    <th className="t-label py-3 font-medium text-steel">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {METHOD_STANDARD.changelog.map((c) => (
                    <tr key={c.version} className="border-b border-line">
                      <td className="py-4 pr-6 font-mono text-[0.8125rem] text-ink">
                        v{c.version}
                      </td>
                      <td className="py-4 pr-6 font-mono text-[0.8125rem] text-ink">{c.date}</td>
                      <td className="py-4 text-[0.9375rem] text-graphite">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="t-micro mt-4 text-steel">
                A new version is published with its date and a note of what changed. Earlier
                versions stay reachable.
              </p>
            </div>
          </div>
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
