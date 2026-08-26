import CheckoutPayment from "@/components/store/CheckoutPayment";
import Breadcrumb from "@/components/common/Breadcrumb";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";

export const metadata = {
  title: "Payment | Unimart Fashion",
  description: "Complete your payment at Unimart Fashion.",
};

export default function page() {
  return (
    <>
      <Breadcrumb title="Payment" subtitle="Checkout" />
      <CheckoutPayment />
      <SimilerProducts parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-white" />
    </>
  );
}
