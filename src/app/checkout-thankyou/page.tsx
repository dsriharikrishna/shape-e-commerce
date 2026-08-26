import CheckoutComplete from "@/features/checkout/components/store/CheckoutComplete";
import Breadcrumb from "@/shared/components/common/Breadcrumb";
import SimilerProducts from "@/features/products/components/others/SimilerProducts";

export const metadata = {
  title: "Order Confirmed | Unimart Fashion",
  description: "Thank you for your order at Unimart Fashion.",
};

export default function page() {
  return (
    <>
      <Breadcrumb title="Order Confirmed" subtitle="Checkout" />
      <CheckoutComplete />
      <SimilerProducts parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-white" />
    </>
  );
}
