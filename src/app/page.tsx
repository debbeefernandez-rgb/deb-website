import { Hero } from "@/components/home/hero";
import { Proof } from "@/components/home/proof";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { Manifesto } from "@/components/home/manifesto";
import { LiveDemo } from "@/components/home/live-demo";
import { BriefBuilder } from "@/components/home/brief-builder";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
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
      <Services />
      <Process />
      <Manifesto />
      <LiveDemo />
      <BriefBuilder />
      <Testimonials />
      <Faq />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
