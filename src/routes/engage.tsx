import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageFrame } from "@/components/publytics/chrome";
import { BriefingForm } from "@/components/publytics/BriefingForm";
import { Eyebrow, ProvenanceChip } from "@/components/publytics/system";
import { CreditLadder, DatedTimeline, SectionHead } from "@/components/publytics/atlas";
import { SEGMENT_LIST as SEGMENTS } from "@/content/segments/meta";
import { FACTS } from "@/content/dates";
import { pageHead } from "@/content/site";

const TITLE = "How to Engage — Ladder, Timeline, Procurement Routes | Publytics";
const DESCRIPTION =
  "From a free 90-minute Briefing to an annual platform: the credit ladder, a typical timeline, and the procurement route for each kind of institution.";

export const Route = createFileRoute("/engage")({
  component: EngagePage,
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/engage" }),
});

const SUBNAV = [
  { label: "The ladder", href: "#ladder" },
  { label: "How we work", href: "#rules" },
  { label: "Timeline", href: "#timeline" },
  { label: "Procurement routes", href: "#procurement" },
  { label: "The calendar", href: "#calendar" },
];

const RULES = [
  {
    t: "Bring the institutional question, not a software list.",
    b: "Every first meeting is the free Briefing, on one commitment, obligation or figure you cannot evidence today.",
  },
  {
    t: "Prove it on your own data, in a day.",
    b: "The Bootcamp ends with one working monitor on your data — and its fee is credited against what you buy next.",
  },
  {
    t: "Sized to the threshold, never split.",
    b: "Pilots are scoped to fit a public low-value procurement line as a whole engagement. We do not split work to get under a limit.",
  },
  {
    t: "The annual price is written into the pilot.",
    b: "With acceptance criteria, so conversion to an annual platform does not need a fresh negotiation where the rules allow.",
  },
  {
    t: "The boundary comes first.",
    b: "The refusal log, the corrections policy and the AI disclosure are part of every proposal — not an appendix.",
  },
];

/** A typical public-sector engagement (GTM Atlas §08). Months from first contact. */
const TIMELINE: { step: string; start: number; end: number; note: string }[] = [
  { step: "The Briefing", start: 0, end: 0.4, note: "Free · 90 minutes" },
  { step: "The Bootcamp", start: 0.5, end: 1, note: "₹2–4 L · credited" },
  { step: "Record Model Workshop / DPDP Assessment", start: 1, end: 2, note: "₹8–12 L / ₹6–12 L" },
  {
    step: "Pilot procurement, within the low-value line",
    start: 2,
    end: 3.5,
    note: "Paperwork and security audit",
  },
  {
    step: "Pilot delivery, with a Forward-Deployed Analyst",
    start: 3.5,
    end: 6.5,
    note: "One department, district or zone",
  },
  { step: "First tracker edition published", start: 6, end: 6.6, note: "On an announced date" },
  { step: "Annual platform contract", start: 6.5, end: 9, note: "Price agreed in the pilot" },
  { step: "Second family or department, as configuration", start: 9, end: 12, note: "Expand" },
];

const ROUTES: { buyer: string; route: string; thresholds: string; cycle: string }[] = [
  {
    buyer: "Government & public sector",
    route:
      "TN departments: direct low-value procurement below ₹25 lakh; open e-tender on tntenders.gov.in at ₹25 lakh and above; or through ELCOT or TNeGA as implementing agency; GeM where the department uses it. Central ministries: GeM under GFR.",
    thresholds:
      "TN: below ₹25 lakh is low value, including consultancy (G.O. Ms. No.133, 10 Jul 2026). Central (GFR Rule 149): GeM direct to ₹50,000; L1 ₹50,000–10 lakh; bid or reverse auction above ₹10 lakh.",
    cycle:
      "3–6 months for a pilot; 9–18 months for an annual platform, usually from the March state budget",
  },
  {
    buyer: "Municipal & urban bodies",
    route:
      "City corporations and municipalities under the TN Transparency in Tenders Act (same thresholds); Smart City SPVs run their own tenders; council or standing-committee approval for new recurring spend.",
    thresholds:
      "Below ₹25 lakh low value; open tender at ₹25 lakh and above (G.O. Ms. No.133, 2026).",
    cycle: "4–12 months",
  },
  {
    buyer: "Regulators & supervisory bodies",
    route:
      "National regulators follow their own procurement manuals (EOI, shortlist, RFP), typically with a specialist module alongside a large system integrator. State regulators: TN Transparency in Tenders Act tenders or GFR-style consultancy; innovation sandboxes as entry.",
    thresholds:
      "State: below ₹25 lakh low value. GFR: consultancy up to ₹50 lakh without an advertised EOI.",
    cycle: "6–12 months (state); 9–24 months (national)",
  },
  {
    buyer: "Enterprise & GCCs",
    route:
      "Direct commercial contract: vendor onboarding, information-security and third-party-risk review, MSA and DPA, procurement and legal sign-off. Global centres may need headquarters approval above local delegation.",
    thresholds: "Internal delegation of authority — varies by company.",
    cycle: "DPDP Readiness Assessment in 1–2 months; platform in 3–6 months",
  },
  {
    buyer: "Foundations & philanthropy",
    route:
      "Corporate CSR: the CSR committee recommends and the board approves the annual action plan (Schedule VII activity). Private and family foundations: grant or service agreement.",
    thresholds:
      "Administrative overheads capped at 5% of CSR spend (Rule 7(1)); impact assessment capped at 2% or ₹50 lakh, whichever is higher (Rule 8(3)).",
    cycle: "3–9 months, aligned to the April–March year with budgets set January–March",
  },
  {
    buyer: "Universities & research",
    route:
      "Central universities and IITs: GFR and GeM. State universities: TN Transparency in Tenders Act. Most projects are grant-funded, with Publytics as partner, sub-grantee or data-service vendor.",
    thresholds:
      "GeM direct to ₹50,000; L1 ₹50,000–10 lakh; TN below ₹25 lakh low value. ICSSR minor grants to ₹15 lakh, major to ₹30 lakh.",
    cycle: "6–12 months, tied to annual grant calls",
  },
  {
    buyer: "Newsrooms & media",
    route:
      "Direct subscription or licence, or the free Builders tier; foundation-funded data-journalism partnerships where a funder pays.",
    thresholds: "No statutory threshold; editor or business-head approval.",
    cycle: "1–3 months",
  },
  {
    buyer: "Legislatures & public offices",
    route:
      "Legislative Assembly and Parliament secretariats under the TN Transparency in Tenders Act or GFR; offices of ministers and members through department or secretariat budgets — with the office, never the person or a party.",
    thresholds: "TN below ₹25 lakh low value; GeM L1 to ₹10 lakh for central bodies.",
    cycle: "3–9 months; no new work during the Model Code of Conduct",
  },
];

function EngagePage() {
  const months = 12;
  return (
    <PageFrame section="How to engage" subnav={SUBNAV}>
      <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
        <Eyebrow tone="steel">How to engage</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <h1 className="t-display-xl">
            One ladder for everyone. Eight ways to raise the purchase order.
          </h1>
          <p className="t-lead max-w-md text-graphite lg:pb-2">
            Every institution enters the same way. What changes is the budget head, the procurement
            route and the time it takes — all stated here, for the procurement file.
          </p>
        </div>
      </header>

      <section id="ladder" className="relative scroll-mt-32 overflow-hidden atmo text-inverse">
        <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
        <div className="shell band relative">
          <SectionHead
            tone="dark"
            eyebrow="The credit ladder"
            title="Each step is credited against the next."
            brief="The Bootcamp is 100% credited against a pilot or annual subscription signed within six months. The Record Model Workshop is 50% credited against the pilot. The DPDP Readiness Assessment is credited toward the first year of Compliance & Regtech."
          />
          <div className="mt-14">
            <CreditLadder tone="dark" />
          </div>
        </div>
      </section>

      <section id="rules" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="How we work with you"
            title="Five rules that apply to every institution."
          />
          <div className="mt-12">
            {RULES.map((r, i) => (
              <div key={r.t} className="index-row" data-reveal>
                <p className="t-index text-silver">/0{i + 1}</p>
                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
                  <h3 className="t-h3">{r.t}</h3>
                  <p className="t-small text-graphite">{r.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <SectionHead
            eyebrow="A typical public-sector engagement"
            title="About seven months from first conversation to an annual contract."
            brief="Enterprises and GCCs compress this to 2–6 months — there is no tender. National regulators stretch it to 9–24 months, usually alongside a system integrator."
          />
          <div className="mt-12 overflow-x-auto border border-line bg-surface">
            <div className="min-w-[52rem] p-6">
              <div className="grid grid-cols-[16rem_1fr] gap-6">
                <span />
                <div className="grid" style={{ gridTemplateColumns: `repeat(${months + 1}, 1fr)` }}>
                  {Array.from({ length: months + 1 }, (_, m) => (
                    <span key={m} className="t-label text-steel">
                      M{m}
                    </span>
                  ))}
                </div>
              </div>
              <ol className="mt-4">
                {TIMELINE.map((t) => (
                  <li
                    key={t.step}
                    className="grid grid-cols-[16rem_1fr] items-center gap-6 border-t border-line py-3.5"
                  >
                    <span>
                      <span className="block text-[0.875rem] text-ink">{t.step}</span>
                      <span className="t-micro text-steel">{t.note}</span>
                    </span>
                    <span className="relative h-6">
                      <span
                        className="absolute top-1/2 h-2 -translate-y-1/2 bg-ink"
                        style={{
                          left: `${(t.start / (months + 1)) * 100}%`,
                          width: `${Math.max(((t.end - t.start) / (months + 1)) * 100, 1.5)}%`,
                        }}
                      />
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="t-micro mt-4 text-steel">
            Indicative, from first contact. Durations vary with data access, procurement route and
            budget cycle.
          </p>
        </div>
      </section>

      <section id="procurement" className="rule scroll-mt-32 bg-surface">
        <div className="shell band">
          <SectionHead
            eyebrow="Procurement routes"
            title="Eight institutions, eight ways to raise the purchase order."
            brief={
              <>
                Public statutory routes and thresholds, each stated with its source. The Tamil Nadu
                low-value line{" "}
                <ProvenanceChip
                  source={FACTS.tnLowValue.source}
                  method={FACTS.tnLowValue.method}
                  date={FACTS.tnLowValue.date}
                  limitations={FACTS.tnLowValue.limitations!}
                />{" "}
                fits every first step on the ladder.
              </>
            }
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[64rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="t-label w-[14rem] py-3 pr-6 font-medium text-steel">
                    Institution
                  </th>
                  <th className="t-label py-3 pr-6 font-medium text-steel">Route</th>
                  <th className="t-label py-3 pr-6 font-medium text-steel">Thresholds</th>
                  <th className="t-label w-[13rem] py-3 font-medium text-steel">Typical cycle</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES.map((r) => {
                  const seg = SEGMENTS.find((s) => s.name === r.buyer);
                  return (
                    <tr key={r.buyer} className="border-b border-line align-top">
                      <td className="py-5 pr-6">
                        {seg ? (
                          <Link
                            to="/solutions/$slug"
                            params={{ slug: seg.slug }}
                            hash="procurement"
                            className="text-[0.9375rem] text-ink hover:underline"
                          >
                            {r.buyer}
                          </Link>
                        ) : (
                          r.buyer
                        )}
                      </td>
                      <td className="py-5 pr-6 text-[0.875rem] leading-relaxed text-graphite">
                        {r.route}
                      </td>
                      <td className="py-5 pr-6 text-[0.875rem] leading-relaxed text-graphite">
                        {r.thresholds}
                      </td>
                      <td className="py-5 text-[0.875rem] leading-relaxed text-ink">{r.cycle}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="t-micro mt-4 text-steel">
            Confirm the route that applies with your procurement officer. Cycles are indicative.
          </p>
        </div>
      </section>

      <section id="calendar" className="relative scroll-mt-32 overflow-hidden atmo text-inverse">
        <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
        <div className="shell band relative">
          <SectionHead
            tone="dark"
            eyebrow="The calendar"
            title="The dates every engagement is planned around."
          />
          <div className="mt-16">
            <DatedTimeline tone="dark" />
          </div>
        </div>
      </section>

      <section id="contact" className="rule scroll-mt-32 bg-paper">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow tone="steel">Step one</Eyebrow>
              <h2 className="t-h2 mt-6">Request the Briefing.</h2>
              <p className="t-body mt-6 max-w-md text-graphite">
                Free, 90 minutes, no deck. The only preparation is the question.
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: "briefing" }}
                className="link-arrow mt-8 text-ink"
              >
                What the Briefing covers <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
            <BriefingForm />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
