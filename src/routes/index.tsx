import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PRODUCT } from "@/lib/config";
import { initMetaPixel, trackEvent } from "@/lib/tracking";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Gallery } from "@/components/landing/Gallery";
import { Benefits } from "@/components/landing/Benefits";
import { Modules } from "@/components/landing/Modules";
import { Included } from "@/components/landing/Included";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Offer } from "@/components/landing/Offer";
import { Faq } from "@/components/landing/Faq";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { MobileCtaBar } from "@/components/landing/MobileCtaBar";

const TITLE = "Pequenos Leitores — Kit de Alfabetização | 200 atividades por R$ 17,99";
const DESCRIPTION =
  "200 atividades originais em 12 módulos para apoiar a alfabetização de forma divertida. PDFs A4 para imprimir, guia de aplicação e gabaritos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    initMetaPixel();
    trackEvent("ViewContent", {
      content_name: PRODUCT.fullName,
      value: PRODUCT.price,
      currency: PRODUCT.currency,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Gallery />
        <Benefits />
        <Modules />
        <Included />
        <HowItWorks />
        <Offer />
        <Faq />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
}
