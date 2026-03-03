import LuxuryNav from "@/components/LuxuryNav";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import SocialProofSection from "@/components/SocialProofSection";
import ConciergeSection from "@/components/ConciergeSection";
import LuxuryFooter from "@/components/LuxuryFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LuxuryNav />
      <HeroSection />
      <DestinationsSection />
      <ExperiencesSection />
      <SocialProofSection />
      <ConciergeSection />
      <LuxuryFooter />
    </div>
  );
};

export default Index;
