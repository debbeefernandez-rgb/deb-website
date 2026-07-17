import { Hero } from "@/components/home/hero";
import { Proof } from "@/components/home/proof";
import { SelectedWork } from "@/components/home/selected-work";
import { Manifesto } from "@/components/home/manifesto";
import { TheDifference } from "@/components/home/the-difference";
import { Services } from "@/components/home/services";
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
      <SelectedWork />
      <Manifesto />
      <TheDifference />
      <Services />
      <Faq />
      <HomeCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
