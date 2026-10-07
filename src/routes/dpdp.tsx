import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { BriefingForm } from "@/components/publytics/BriefingForm";
import { DisclosureTriptych, Eyebrow, ProvenanceChip } from "@/components/publytics/system";
import { FactStrip, FaqList, SectionHead } from "@/components/publytics/atlas";
import { FACTS } from "@/content/dates";
import { familyBySlug } from "@/content/families";
import { offeringBySlug } from "@/content/offerings";
import { segmentBySlug } from "@/content/segments";
import { faqLd, ldScript, pageHead } from "@/content/site";
import type { DatedFact, SegmentSlug } from "@/content/types";

const TITLE = "DPDP 2027 Readiness — Dates Corrected, Evidence Built | Publytics";
const DESCRIPTION =
  "DPDP Rules gazetted 13 Nov 2025; Consent Manager registration from 13 Nov 2026; every other obligation, including SDF audits, from 13 May 2027. A 3–4 week readiness assessment that becomes a live record.";

export const Route = createFileRoute("/dpdp")({
  component: DpdpPage,
  head: () => ({
    ...pageHead({ title: TITLE, description: DESCRIPTION, path: "/dpdp" }),
    scripts: [ldScript(faqLd(FAQS))],
  }),
});

const SUBNAV = [
  { label: "The dates", href: "#dates" },
  { label: "The assessment", href: "#assessment" },
  { label: "The platform", href: "#platform" },
  { label: "By institution", href: "#who" },
  { label: "Questions", href: "#faq" },
];

function Chip({ f }: { f: DatedFact }) {
  return (
    <ProvenanceChip
      source={f.source}
      method={f.method}
      date={f.date}
      {...(f.limitations ? { limitations: f.limitations } : {})}
    />
  );
}

const WHO: SegmentSlug[] = [
  "enterprise",
  "regulators",
  "government",
  "municipal",
  "foundations",
  "universities",
  "newsrooms",
  "legislatures",
];

const ASSESSMENT = offeringBySlug("dpdp-readiness-assessment");

const FAQS = [
  {
    q: "Did MeitY shorten the deadline?",
    a: "A January 2026 proposal to shorten the 18-month window to 12 months was not notified as of September 2026. We plan to 13 May 2027 and keep a date chip on every claim, so if that changes, this page changes with its source.",
  },
  {
    q: "When do Significant Data Fiduciary audits start?",
    a: "With every other obligation, on 13 May 2027 — not in the first quarter of 2027, as this site previously said. The correction is published at /evidence/corrections.",
  },
  {
    q: "Is this legal advice?",
    a: "No. The assessment produces the evidence your counsel and DPO need — data map, DPIA, consent architecture, gap plan — but it does not determine whether you are compliant or replace legal counsel.",
  },
  {
    q: "Do you act as a Consent Manager?",
    a: "No. Rule 4 registration requires ₹2 crore net worth and the space has registered providers. Compliance & Regtech integrates with their consent records.",
  },
  {
    q: "What does the assessment cost, and is it credited?",
    a: `${ASSESSMENT.band}, ex-GST, for ${ASSESSMENT.duration}. It is credited toward the first year of Compliance & Regtech.`,
  },
];

function DpdpPage() {
  const assessment = ASSESSMENT;
  const platform = familyBySlug("compliance-regtech");
  const dates = [
    {
      f: FACTS.dpdpNotified,
      t: "Rules notified",
      b: "Gazetted 13 Nov 2025; the PIB release is dated 14 Nov 2025. Both are cited.",
    },
    {
      f: FACTS.dpdpRule4,
      t: "Consent Manager registration",
      b: "Rule 4 comes into force 12 months after notification. Registration needs ₹2 crore net worth — we integrate with registered Consent Managers rather than becoming one.",
    },
    {
      f: FACTS.dpdpFull,
      t: "Every other obligation",
      b: "18 months after notification, including Significant Data Fiduciary duties — the annual DPIA and audit under Rule 13. Penalties up to ₹250 crore.",
    },
  ];

  return (
    <PageFrame section="DPDP 2027" subnav={SUBNAV}>
      <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-20">
        <Eyebrow tone="steel">DPDP 2027 · The obligation system</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <h1 className="t-display-xl">
            A policy is an intention. An inspection asks for the discharge.
          </h1>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            The Digital Personal Data Protection obligations apply in full on 13 May 2027. Readiness
            is not a deadline — it is a record that already exists when someone asks for it.
          </p>
        </div>
        <div className="mt-12">
          <FactStrip
            items={[
              { k: "Obligations apply", v: FACTS.dpdpFull.value },
              { k: "Maximum penalty", v: FACTS.dpdpPenalty.value },
              { k: "Assessment", v: `${assessment.duration} · ${assessment.band}` },
              { k: "Credit", v: "Toward year one of the platform" },
            ]}
          />
        </div>
      </header>

      <section id="dates" className="relative scroll-mt-32 overflow-hidden atmo text-inverse">
        <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
        <div className="shell band relative">
          <SectionHead
            tone="dark"
            eyebrow="The dates, corrected"
            title="Three dates. Each with its source."
            brief="Earlier versions of this site gave June–August 2026 for Consent Managers and Q1 2027 for SDF audits. Both were wrong; both corrections are published."
          />
          <ol className="mt-14 grid gap-px bg-line-inverse md:grid-cols-3">
            {dates.map((d) => (
              <li key={d.t} className="bg-ink p-7">
                <p className="figure-num t-display text-inverse">{d.f.value}</p>
                <h3 className="t-h4 mt-5 text-inverse">{d.t}</h3>
                <p className="t-micro mt-3 text-inverse-dim">{d.b}</p>
                <p className="mt-6 [&_.chip]:text-inverse-dim">
                  <Chip f={d.f} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="assessment" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">Step one</Eyebrow>
              <h2 className="t-h2 mt-6">{assessment.name}</h2>
              <p className="t-lead mt-5 text-ink">{assessment.shape}</p>
              <p className="t-body mt-6 max-w-md text-graphite">{assessment.summary}</p>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="figure-num font-mono text-[1rem] text-ink">{assessment.band}</span>
                <span className="t-micro text-steel">ex-GST · {assessment.credit}</span>
              </div>
              <Link
                to="/services/$slug"
                params={{ slug: assessment.slug }}
                className="link-arrow mt-8 text-ink"
              >
                The assessment in full <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
            <ul className="border-b border-line">
              {assessment.outputs.map((o) => (
                <li key={o} className="rule flex gap-4 py-5 text-[1rem] text-ink">
                  <Check className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="platform" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="Step two"
            title={`${platform.name}: the record stays live.`}
            brief={platform.summary}
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ul className="border-b border-line">
              {platform.does.map((d) => (
                <li
                  key={d}
                  className="rule flex gap-4 py-4 text-[0.9375rem] leading-relaxed text-graphite"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-ink" strokeWidth={1.5} />
                  {d}
                </li>
              ))}
            </ul>
            <div className="bg-ink p-6 text-inverse lg:p-8">
              <Eyebrow tone="inverse">The disclosure</Eyebrow>
              <div className="mt-4">
                <DisclosureTriptych
                  used={platform.disclosure.used}
                  notDone={platform.disclosure.notDone}
                  review={platform.disclosure.review}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="By institution"
            title="The same obligations, read through eight different datasets."
          />
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {WHO.map((slug) => {
              const seg = segmentBySlug(slug)!;
              const use = seg.offerings.find(
                (o) => o.offering === "dpdp-readiness-assessment",
              )?.use;
              return (
                <Link
                  key={slug}
                  to="/solutions/$slug"
                  params={{ slug }}
                  className="group flex min-h-[14rem] flex-col bg-paper p-6 transition-colors hover:bg-tint"
                >
                  <span className="t-index text-silver">/{seg.index}</span>
                  <h3 className="t-h4 mt-5">{seg.name}</h3>
                  <p className="t-micro mt-3 line-clamp-5 text-graphite">{use ?? seg.summary}</p>
                  <ArrowRight
                    className="mt-auto h-4 w-4 self-end text-steel transition-transform group-hover:translate-x-1 group-hover:text-ink"
                    strokeWidth={1.5}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">Questions</Eyebrow>
              <h2 className="t-h2 mt-6">What DPOs and CISOs ask first.</h2>
            </div>
            <FaqList items={FAQS} />
          </div>
        </div>
      </section>

      <section id="contact" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">Start with the Briefing</Eyebrow>
              <h2 className="t-h2 mt-6">
                Ninety minutes with your DPO or CISO, framed against 13 May 2027.
              </h2>
              <p className="t-body mt-6 max-w-md text-graphite">
                No deck. We agree the data stores in scope, and the assessment can begin.
              </p>
            </div>
            <BriefingForm defaultAudience={segmentBySlug("enterprise")!.name} />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
