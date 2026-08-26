import Banner from "@/features/shop/components/products/Banner";
import Breadcrumb from "@/features/shop/components/products/Breadcrumb";
import Categories from "@/features/shop/components/products/Categories";
import ShopDefault from "@/features/shop/components/products/ShopDefault";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Banner />
      <Categories />
      <div className="rbt-component-area ptb--32 ptb_sm--12">
        <div className="container">
          <div className="rbt-separator rbt-separator-gray200" />
        </div>
      </div>
      <ShopDefault />
    </>
  );
}
