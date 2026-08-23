import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/publytics/SiteHeader";
import { Hero } from "@/components/publytics/Hero";
import {
  AudienceSection,
  ProductsSection,
  AiSection,
  ServicesSection,
  RigourSection,
  CtaSection,
} from "@/components/publytics/sections";
import { SiteFooter } from "@/components/publytics/SiteFooter";

const TITLE = "Publytics — Public-Interest Data & AI";
const DESCRIPTION =
  "Publytics builds rigorous data and AI infrastructure for government, enterprise, and civic or research institutions.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
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
          slogan: "Public-interest data infrastructure",
          areaServed: "India",
          knowsAbout: ["GovTech", "Civic data", "Responsible AI", "Regulatory technology", "Policy research"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AudienceSection />
        <ProductsSection />
        <AiSection />
        <ServicesSection />
        <RigourSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
