import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import EquipmentGrid from "@/components/EquipmentGrid";
import TeamSection from "@/components/TeamSection";
import LeadForms from "@/components/LeadForms";
import UpcomingAuctions from "@/components/UpcomingAuctions";
import Testimonials from "@/components/Testimonials";
import ContactFAQ from "@/components/ContactFAQ";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        <EquipmentGrid />
        <TeamSection />
        <LeadForms />
        <UpcomingAuctions />
        <Testimonials />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
}
