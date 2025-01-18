import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-black min-h-screen font-montserrat">
      <HeroSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
};

export default Index;