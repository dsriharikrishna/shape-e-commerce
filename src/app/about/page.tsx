import Features from "@/features/corporate/components/about/Features";
import Facts from "@/features/corporate/components/about/Facts";
import VideoSection from "@/features/corporate/components/about/VideoSection";
import AboutUs from "@/features/corporate/components/about/AboutUs";
import OurMission from "@/features/corporate/components/about/OurMission";
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
