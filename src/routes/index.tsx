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
import { ORG_ID, SITE_URL, ldScript, pageHead } from "@/content/site";

const TITLE = "Publytics — Public Proof";
const DESCRIPTION =
  "Publytics builds the data and AI infrastructure public institutions run on: one evidence chain from commitment to delivery — verified, dated, Tamil-first.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    ...pageHead({ title: TITLE, description: DESCRIPTION, path: "/" }),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": ORG_ID,
            name: "Publytics",
            url: SITE_URL,
            logo: `${SITE_URL}/apple-touch-icon.png`,
            description: DESCRIPTION,
            slogan: "Public Proof",
            areaServed: "IN",
            knowsAbout: [
              "Civic data infrastructure",
              "GovTech",
              "DPDP compliance",
              "Responsible AI",
              "Policy research",
              "Tamil language technology",
            ],
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "Publytics",
            inLanguage: "en-IN",
            publisher: { "@id": ORG_ID },
          },
        ],
      }),
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
