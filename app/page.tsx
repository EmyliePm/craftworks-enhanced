import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import IntroServices from "@/components/IntroServices/IntroServices";
import CoverageMap from "@/components/CoverageMap/CoverageMap";
import ProjectEnquiry from "@/components/ProjectEnquiry/ProjectEnquiry";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntroServices />
      <CoverageMap />
      <ProjectEnquiry />
    </main>
  );
}
