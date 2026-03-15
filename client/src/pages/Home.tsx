/*
 * DESIGN: Night Race Cinematic
 * Home: Assembles all sections in order with smooth scroll behavior
 * Dark background throughout, sections alternate between #080B0F and #0A0D12
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StandingsSection from "@/components/StandingsSection";
import CalendarSection from "@/components/CalendarSection";
import FeatureSection from "@/components/FeatureSection";
import TeamsSection from "@/components/TeamsSection";
import DriversSection from "@/components/DriversSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#080B0F" }}>
      <Navbar />
      <HeroSection />
      <StandingsSection />
      <CalendarSection />
      <FeatureSection />
      <TeamsSection />
      <DriversSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
