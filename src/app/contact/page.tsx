import Breadcrumb from "@/shared/components/common/Breadcrumb";
import Contact from "@/features/corporate/components/contact/Contact";
import ContactMap from "@/features/corporate/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        title="Contact"
        subtitle="Pages"
        align="center"
        className="rbt-breadcrumb-default ptb--92 ptb_md--40 ptb_sm--40 bg-image rbt-breadcrumb-bg-1"
        dataBlackOverlay={5}
      />
      <Contact />
      <ContactMap />
    </>
  );
}
