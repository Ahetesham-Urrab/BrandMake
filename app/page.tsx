import Hero from "@/components/Hero";
import Sops from "@/components/Sops";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyChoose from "@/components/whyChooseUs";
import ClientStats from "@/components/ClientStats";
import About from "@/components/AboutUs";
import HorizontalCTA from "@/components/HorizontalCta";
import MakesUsBetter from "@/components/MakesUsBetter";
import TrustedClient from "@/components/TrustedClient";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import CtaNew from "@/components/CTA";
import ServiceCards from "@/components/ServiceCards";


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
       <ClientStats />
       <CtaNew />
       <About />
      <ServiceCards />
    
      <MakesUsBetter />
      <TrustedClient />
       <CtaNew />
      <FAQSection />
      <Footer />
    </main>
  );
}
