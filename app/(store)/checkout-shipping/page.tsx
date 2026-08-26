import CheckoutShipping from "@/components/store/CheckoutShipping";
import Breadcrumb from "@/components/common/Breadcrumb";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";

export const metadata = {
  title: "Shipping | Unimart Fashion",
  description: "Choose your shipping method at Unimart Fashion.",
};

export default function page() {
  return (
    <>
      <Breadcrumb title="Shipping" subtitle="Checkout" />
      <CheckoutShipping />
      <SimilerProducts parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-white" />
    </>
  );
}
