import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AnnouncementBar, SiteFooter, SiteHeader } from "@/components/publytics/chrome";
import { Eyebrow, IndexRow, MegaCta, NotchCard, Say, Statement } from "@/components/publytics/system";

const TITLE = "Solutions — Eight Institutional Contexts | Publytics";
const DESCRIPTION =
  "Eight institutional contexts, each with its own procurement language, accountability standards, and definition of value.";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }], links: [{ rel: "canonical", href: "/solutions" }] }),
});

const SUBNAV = [
  { label: "Public sector", href: "/solutions" },
  { label: "Regulators", href: "/solutions" },
  { label: "Enterprise", href: "/solutions" },
  { label: "Civic & research", href: "/solutions" },
];

const AUDIENCES = [
  { n: "0.1", k: "Departments, secretariats and state agencies", t: "Government & public sector", b: "Infrastructure designed around public-sector reality — procurement, empanelment, residency and audit — not retrofitted from enterprise SaaS." },
  { n: "0.2", k: "Corporations, municipalities and urban bodies", t: "Municipal & urban bodies", b: "Ward-level service delivery, grievance routing and civic records built for the operating rhythm of local government." },
  { n: "0.3", k: "The most valuable seat in the market", t: "Regulators & supervisory bodies", b: "Supervisory technology is not a dashboard over your own filings. It is the capacity to hold a regulated population’s compliance posture as a live, comparable, inspectable record." },
  { n: "0.4", k: "Compliance, governance and audit-readiness", t: "Enterprise & GCCs", b: "Public-sector-grade rigour against India’s compliance calendar, with the evidence pack an auditor actually asks for." },
  { n: "0.5", k: "Grant-makers and programme officers", t: "Foundations & philanthropy", b: "A donor and grant layer that connects a CSR mandate to an accountable programme, with provenance attached to every reported outcome." },
  { n: "0.6", k: "Evidence that has to survive peer scrutiny", t: "Universities & research institutions", b: "Published methodology standards, open and reusable data structures, and clear funding and provenance disclosure." },
  { n: "0.7", k: "Data desks and investigative teams", t: "Newsrooms & media", b: "The underlying data, the method, and the ability to disagree with us in print. All three are published." },
  { n: "0.8", k: "Constituency and public offices", t: "Legislatures & public offices", b: "We build for the office and its duties, from public funds, and the record stays with the office when the officeholder changes. We do not work for campaigns." },
];

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader section="Solutions" subnav={SUBNAV} />

      <main>
        <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
          <Eyebrow tone="steel">Solutions</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
            <h1 className="t-display-xl">Eight institutional contexts. No generic buyer journey.</h1>
            <p className="t-lead max-w-md text-graphite lg:pb-2">
              Start with the environment you operate in. Each pathway reflects its own procurement language,
              accountability standards, and definition of value.
            </p>
          </div>
        </header>

        <section className="rule bg-surface">
          <div className="shell band">
            <Statement>
              A government secretary, a compliance officer and a programme officer must each finish a single visit
              believing the same company is <Say>credible to them</Say>.
            </Statement>
          </div>
        </section>

        <section className="rule bg-paper">
          <div className="shell band">
            {AUDIENCES.map((a) => (
              <IndexRow key={a.n} index={a.n} kicker={a.k} title={a.t} href="/company" linkLabel="Request a briefing">
                {a.b}
              </IndexRow>
            ))}
          </div>
        </section>

        <section className="rule bg-surface">
          <div className="shell band">
            <Eyebrow tone="steel">Built for your procurement</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-3xl">
              What a public-sector buyer needs before a demonstration is worth booking.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <NotchCard label="Empanelment">Empanelment status and state e-procurement or GeM listing, stated per engagement.</NotchCard>
              <NotchCard label="Residency">Data residency commitments, written into the contract rather than the brochure.</NotchCard>
              <NotchCard label="DPDP posture">Our own position against the published enforcement dates, including what is not yet certified.</NotchCard>
              <NotchCard label="Security">The security posture stated honestly, with the sub-processor list named and dated.</NotchCard>
            </div>
            <Link to="/trust" className="link-arrow mt-10 text-ink">
              Read the Trust section <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
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
