import Breadcrumb from "@/shared/components/common/Breadcrumb";
import Contact2 from "@/features/corporate/components/contact/Contact2";
import Faqs from "@/features/corporate/components/faq/Faqs";

export default function FaqPage() {
  return (
    <>
      <Breadcrumb
        title="FAQ"
        subtitle="Pages"
        align="center"
        className="rbt-breadcrumb-default ptb--92 ptb_md--40 ptb_sm--40 bg-image rbt-breadcrumb-bg-1"
        dataBlackOverlay={5}
      />
      <Faqs />
      <Contact2 />
    </>
  );
}
