import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar, SiteFooter, SiteHeader } from "@/components/publytics/chrome";
import { BriefingForm } from "@/components/publytics/BriefingForm";
import { Eyebrow, IndexRow, NotchCard, Say, Statement } from "@/components/publytics/system";

const TITLE = "Company — About, Leadership, How We Are Funded | Publytics";
const DESCRIPTION =
  "Why Publytics exists, who is accountable for what, how the company is funded, and how to reach a person.";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }], links: [{ rel: "canonical", href: "/company" }] }),
});

const SUBNAV = [
  { label: "About", href: "/company" },
  { label: "Leadership", href: "/company" },
  { label: "How we are funded", href: "/company" },
  { label: "Contact", href: "/company" },
];

const SECTIONS = [
  { n: "0.1", k: "Why the company exists", t: "About", b: "Publytics builds the data and AI infrastructure that public institutions run on. The structural answer to why it exists: so that rigorous public-interest work in India can be funded by customers rather than by funders." },
  { n: "0.2", k: "Named, with accountabilities", t: "Leadership", b: "Names, faces, backgrounds, and what each person is accountable for — including who signs a correction and who owns the boundary. Profiles are in final review for publication." },
  { n: "0.3", k: "The Think TN relationship, stated plainly", t: "How we are funded", b: "Publytics is the commercial company; Think TN Foundation is the independent institution. What flows between them, and the firewall clauses that govern it, are published in full. Disclosed, this is the strongest answer to why the company exists." },
  { n: "0.4", k: "A year on real institutional work", t: "Careers & the Fellowship", b: "We cannot outbid a Chennai GCC and we are not going to try. What we offer instead is work that is published under your own name." },
];

function CompanyPage() {
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader section="Company" subnav={SUBNAV} />

      <main>
        <header className="shell pt-12 pb-16 lg:pt-20 lg:pb-24">
          <Eyebrow tone="steel">Company</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
            <h1 className="t-display-xl">
              Rigorous public-interest work, funded by customers rather than funders.
            </h1>
            <p className="t-lead max-w-md text-graphite lg:pb-2">
              A government secretary evaluating a vendor asks who these people are. A foundation programme officer
              asks the same question with more force, because for them the answer is the diligence.
            </p>
          </div>
        </header>

        <section className="rule bg-surface">
          <div className="shell band">
            <Statement>
              We would rather be <Say>corrected</Say> than <Say>cited uncritically</Say>.
            </Statement>
          </div>
        </section>

        <section className="rule bg-paper">
          <div className="shell band">
            {SECTIONS.map((s) => (
              <IndexRow key={s.n} index={s.n} kicker={s.k} title={s.t}>
                {s.b}
              </IndexRow>
            ))}
          </div>
        </section>

        <section className="rule bg-surface">
          <div className="shell band">
            <Eyebrow tone="steel">How we work</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-3xl">Four standing rules a page must satisfy before it ships.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <NotchCard label="Gate 01">Every number carries a provenance chip. No exceptions, including on the homepage.</NotchCard>
              <NotchCard label="Gate 02">Every AI claim carries a populated disclosure triptych, generated from configuration.</NotchCard>
              <NotchCard label="Gate 03">Every product page carries a “what it does not do” block.</NotchCard>
              <NotchCard label="Gate 04">Every page is in the present indicative, or carries a dated commitment.</NotchCard>
            </div>
          </div>
        </section>

        <section id="contact" className="rule scroll-mt-28 bg-paper">
          <div className="shell band">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <Eyebrow tone="steel">Start a conversation</Eyebrow>
                <h2 className="t-h2 mt-6">Bring us the institutional question — not a software shopping list.</h2>
                <p className="t-body mt-6 max-w-md text-graphite">
                  We route your enquiry to the right conversation: a government briefing, an enterprise demonstration,
                  or a research partnership.
                </p>
                <div className="mt-10 border-l-2 border-seal bg-seal-tint px-6 py-5">
                  <p className="t-label text-seal">Our boundary</p>
                  <p className="t-micro mt-2.5 text-graphite">
                    Publytics does not provide political targeting or persuasion systems to political parties or
                    candidates.
                  </p>
                </div>
              </div>
              <BriefingForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
