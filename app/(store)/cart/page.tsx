import Breadcrumb from "@/components/common/Breadcrumb";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";
import Cart from "@/components/store/Cart";

export const metadata = {
  title: "Shopping Cart | Unimart Fashion",
  description: "View and manage your shopping cart at Unimart Fashion.",
};

export default function page() {
  return (
    <>
      <Breadcrumb title="Shopping Cart" subtitle="Pages" />
      <Cart />
      <SimilerProducts parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-white" />
    </>
  );
}
