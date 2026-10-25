import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutDoctor from "@/components/AboutDoctor";
import ServicesSection from "@/components/ServicesSection";
import DueDatePicker from "@/components/DueDatePicker";
import BranchesSection from "@/components/BranchesSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBFD] text-slate-800">
      <Header />
      <Hero />
      <AboutDoctor />
      <ServicesSection />
      <DueDatePicker />
      <BranchesSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
