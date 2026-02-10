import Hero from "@/components/Hero";
import Process from "@/components/Process";
import WhyChoose from "@/components/whyChooseUs";
import ClientStats from "@/components/ClientStats";
import TrustedClient from "@/components/TrustedClient";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <WhyChoose />
      <ClientStats />
      <TrustedClient />
      <FAQSection />
      <Footer />
    </main>
  );
}
