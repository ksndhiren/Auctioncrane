import ContactFAQ from "@/components/ContactFAQ";
import EquipmentGrid from "@/components/EquipmentGrid";
import FleetSolutions from "@/components/FleetSolutions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InventoryByLocation from "@/components/InventoryByLocation";
import LeadForms from "@/components/LeadForms";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import UpcomingAuctions from "@/components/UpcomingAuctions";
import WhyUs from "@/components/WhyUs";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <EquipmentGrid />
        <WhyUs />
        <HowItWorks />
        <InventoryByLocation />
        <FleetSolutions />
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
