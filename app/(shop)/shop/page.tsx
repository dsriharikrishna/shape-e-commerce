import Banner from "@/components/products/Banner";
import Breadcrumb from "@/components/products/Breadcrumb";
import Categories from "@/components/products/Categories";
import ShopDefault from "@/components/products/ShopDefault";

export const metadata = {
  title: "Shop | Unimart Fashion",
  description: "Browse our collection of premium fashion products.",
};

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
