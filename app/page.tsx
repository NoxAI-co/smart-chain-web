import { Competitive } from "@/components/web/Competitive";
import { CTA } from "@/components/web/CTA";
import { FAQs } from "@/components/web/FAQs";
import { Footer } from "@/components/ui/footer-section";
import { Hero } from "@/components/web/Hero";
import { Logos } from "@/components/web/Logos";
import { NavBar } from "@/components/web/NavBar";
import { Process } from "@/components/web/Process";
import { Services } from "@/components/web/Services";
import { TestimonialsSectionDemo } from "@/components/testimonials-demo";
import { Benefits } from "@/components/web/Benefits";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Logos />
        <Services />
        <Process />
        <TestimonialsSectionDemo />
        <Benefits />
        <Competitive />
        <FAQs />
        <CTA />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
