import Breadcrumb from "@/components/common/Breadcrumb";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";
import Checkout2 from "@/components/store/Checkout2";

export const metadata = {
  title: "Delivery Info | Unimart Fashion",
  description: "Enter your delivery information at Unimart Fashion.",
};

export default function page() {
  return (
    <>
      <Breadcrumb title="Delivery Information" subtitle="Checkout" />
      <Checkout2 />
      <SimilerProducts parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-white" />
    </>
  );
}
