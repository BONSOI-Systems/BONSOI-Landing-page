import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="Why Bonsoi" title="Why Choose Bonsoi Systems?">
        Bonsoi Systems delivers tailored AI, ML, full-stack, and WordPress
        solutions for startups and businesses. Built with the latest
        technologies, our services empower you to innovate and scale with ease.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="Watch a video" title="See How We Transform Ideas">
        Explore how Bonsoi Systems turns your concepts into cutting-edge digital
        solutions. Watch our demo to see our development process in action,
        driving results for your business.
      </SectionTitle>

      <Video videoId="lkjrUW8fI40" />

      {/* <SectionTitle preTitle="Testimonials" title="What Our Clients Are Saying">
        Our clients trust us to deliver innovative and reliable solutions.
        Discover how Bonsoi Systems has helped businesses like yours achieve
        success with our expert development services.
      </SectionTitle>

      <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Have questions about our services? Find answers here to help you
        understand how Bonsoi Systems can meet your development needs, from AI
        to full-stack solutions.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
