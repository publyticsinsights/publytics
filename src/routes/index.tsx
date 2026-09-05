import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar, SiteFooter, SiteHeader } from "@/components/publytics/chrome";
import {
  AiSection,
  ArgumentSection,
  AudienceIndex,
  BoundarySection,
  CtaSection,
  EvidenceSection,
  Hero,
  PlatformSection,
  RigourSection,
  SystemsSection,
  VoicesSection,
} from "@/components/publytics/home";

const TITLE = "Publytics — Public Proof";
const DESCRIPTION =
  "When a citizen asks whether the promise was kept, who answers? Publytics builds the data and AI infrastructure that public institutions run on.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Publytics",
          description: DESCRIPTION,
          slogan: "Public Proof",
          areaServed: "India",
          knowsAbout: ["Civic data infrastructure", "GovTech", "Responsible AI", "Regulatory technology", "Policy research"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-paper">
      <AnnouncementBar />
      <SiteHeader tone="dark" />
      <main>
        <Hero />
        <AudienceIndex />
        <ArgumentSection />
        <PlatformSection />
        <SystemsSection />
        <AiSection />
        <RigourSection />
        <EvidenceSection />
        <VoicesSection />
        <BoundarySection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
