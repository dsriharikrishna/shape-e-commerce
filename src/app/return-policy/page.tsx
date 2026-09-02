import Socials from "@/features/corporate/components/privacy/Socials";
import ReturnPolicy from "@/features/checkout/components/store/ReturnPolicy";
import Breadcrumb from "@/shared/components/common/Breadcrumb";

export default function ReturnPolicyPage() {
  return (
    <>
      <Breadcrumb
        title="Return Policy"
        subtitle="Return Policy"
        align="center"
        className="rbt-breadcrumb-default ptb--92 ptb_md--40 ptb_sm--40 bg-image rbt-breadcrumb-bg-1"
        dataBlackOverlay={5}
      />
      <ReturnPolicy />
      <Socials />
    </>
  );
}
