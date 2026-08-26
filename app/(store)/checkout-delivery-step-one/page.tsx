import Breadcrumb from "@/components/common/Breadcrumb";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";
import Checkout from "@/components/store/Checkout";

export const metadata = {
  title: "Checkout | Unimart Fashion",
  description: "Complete your order at Unimart Fashion.",
};

export default function page() {
  return (
    <>
      <Breadcrumb title="Checkout" subtitle="Checkout" />
      <Checkout />
      <SimilerProducts parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-white" />
    </>
  );
}
