import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/publytics/chrome";
import {
  AiSection,
  ArgumentSection,
  BoundarySection,
  CalendarSection,
  CtaSection,
  EvidenceSection,
  Hero,
  InstitutionsSection,
  LadderSection,
  PlatformSection,
  SolutionMapSection,
} from "@/components/publytics/home";
import { SITE_URL, pageHead } from "@/content/site";

const TITLE = "Publytics — Public Proof";
const DESCRIPTION =
  "One evidence chain from commitment to delivery, for eight kinds of public institution. Publytics builds the data and AI infrastructure public institutions run on — verified, dated, Tamil-first.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    ...pageHead({ title: TITLE, description: DESCRIPTION, path: "/" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Publytics",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          description: DESCRIPTION,
          slogan: "Public Proof",
          areaServed: "IN",
          knowsAbout: ["Civic data infrastructure", "GovTech", "DPDP compliance", "Responsible AI", "Policy research", "Tamil language technology"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <PageFrame tone="dark">
      <Hero />
      <InstitutionsSection />
      <ArgumentSection />
      <PlatformSection />
      <SolutionMapSection />
      <LadderSection />
      <CalendarSection />
      <AiSection />
      <EvidenceSection />
      <BoundarySection />
      <CtaSection />
    </PageFrame>
  );
}
