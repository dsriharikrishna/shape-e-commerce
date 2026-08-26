import Features from "@/components/other-pages/about/Features";
import Facts from "@/components/other-pages/about/Facts";
import VideoSection from "@/components/other-pages/about/VideoSection";
import AboutUs from "@/components/other-pages/about/AboutUs";
import OurMission from "@/components/other-pages/about/OurMission";
export default function page() {
  return (
    <>
      <AboutUs />
      <OurMission />
      <Features />
      <Facts />
      <VideoSection />
    </>
  );
}
