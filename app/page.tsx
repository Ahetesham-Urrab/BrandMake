import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyChoose from "@/components/whyChooseUs";
import ClientStats from "@/components/ClientStats";
import About from "@/components/AboutUs"
import TrustedClient from "@/components/TrustedClient";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <Services />
      <WhyChoose />
      <ClientStats />
      <About />
      <TrustedClient />
      <FAQSection />
      <Footer />
    </main>
  );
}
