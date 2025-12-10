import Footer from "@/components/Footer";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import ValuesSection from "@/components/home/ValuesSection";


export default function HomePage() {
  return (
    <main className="pt-32 flex flex-col justify-center-safe items-center w-full snap-y snap-mandatory h-screen overflow-y-scroll">
      <HeroSection/>
      <AboutSection />
      <MissionSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
