import Breadcrumb from "@/shared/components/common/Breadcrumb";
import PrivacyPolicy from "@/features/corporate/components/privacy/PrivacyPolicy";
import Socials from "@/features/corporate/components/privacy/Socials";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb
        title="Privacy Policy"
        subtitle="Pages"
        align="center"
        className="rbt-breadcrumb-default ptb--92 ptb_md--40 ptb_sm--40 bg-image rbt-breadcrumb-bg-1"
        dataBlackOverlay={5}
      />
      <PrivacyPolicy />
      <Socials />
    </>
  );
}
