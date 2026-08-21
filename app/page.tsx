import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import IntroServices from "@/components/IntroServices/IntroServices";
import AboutCraftworkz from "@/components/AboutCraftworkz/AboutCraftworkz";
import CoverageMap from "@/components/CoverageMap/CoverageMap";
import ProjectEnquiry from "@/components/ProjectEnquiry/ProjectEnquiry";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="conceptNotice">
        <span>CONCEPT WEBSITE</span>
        <p>Designed to demonstrate an enhanced Craftworkz experience.</p>
      </div>

      <Hero />
      <IntroServices />
      <AboutCraftworkz />
      <Reviews />
      <CoverageMap />
      <ProjectEnquiry />
    </main>
  );
}
