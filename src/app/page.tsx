import { Hero } from "@/components/home/hero";
import { Proof } from "@/components/home/proof";
import { SpotDifference } from "@/components/home/spot-difference";
import { SelectedWork } from "@/components/home/selected-work";
import { TheDifference } from "@/components/home/the-difference";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { HomeCta } from "@/components/home/cta";
import { faqs } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <SpotDifference />
      <SelectedWork />
      <TheDifference />
      <Services />
      <Testimonials />
      <Faq />
      <HomeCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
