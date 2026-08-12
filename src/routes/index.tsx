import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/publytics/SiteHeader";
import { Hero } from "@/components/publytics/Hero";
import {
  ProblemSection,
  PlatformSection,
  UseCasesSection,
  VoticsSection,
  ServicesSection,
  MarketSection,
  TeamSection,
  CtaSection,
} from "@/components/publytics/sections";
import { SiteFooter } from "@/components/publytics/SiteFooter";

const TITLE = "Publytics — Political Research, Strategy & Action";
const DESCRIPTION =
  "Publytics turns data into mandates. VotHub unites seven AI-powered products for voter intelligence, field execution, content, war room and fundraising.";

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
          slogan: "Political Research, Strategy & Action",
          areaServed: ["India", "United States", "Europe"],
          makesOffer: [
            "Votics",
            "VotEngage",
            "VotBot",
            "VotReady",
            "VotCMS",
            "VotNxt",
            "VotFund",
          ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name } })),
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
        <ProblemSection />
        <PlatformSection />
        <UseCasesSection />
        <VoticsSection />
        <ServicesSection />
        <MarketSection />
        <TeamSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
