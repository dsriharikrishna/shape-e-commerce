import Features from "@/features/corporate/components/about/Features";
import Facts from "@/features/corporate/components/about/Facts";
import VideoSection from "@/features/corporate/components/about/VideoSection";
import AboutUs from "@/features/corporate/components/about/AboutUs";
import OurMission from "@/features/corporate/components/about/OurMission";
import Breadcrumb from "@/shared/components/common/Breadcrumb";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        title="About US"
        subtitle="Pages"
        align="center"
        className="rbt-breadcrumb-default ptb--92 ptb_md--40 ptb_sm--40 bg-image rbt-breadcrumb-bg-1"
        dataBlackOverlay={5}
      />
      <AboutUs />
      <OurMission />
      <Features />
      <Facts />
      <VideoSection />
    </>
  );
}
