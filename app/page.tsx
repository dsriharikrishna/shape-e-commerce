import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Banner from "@/components/homes/home-fashion/Banner";
import Categories from "@/components/homes/home-fashion/Categories";
import CategoryScroll from "@/components/homes/home-fashion/CategoryScroll";
import Hero from "@/components/homes/home-fashion/Hero";
import LookbookProducts from "@/components/homes/home-fashion/LookbookProducts";
import Products1 from "@/components/homes/home-fashion/Products1";
import Products2 from "@/components/homes/home-fashion/Products2";
import Products3 from "@/components/homes/home-fashion/Products3";
import SingleProduct from "@/components/homes/home-fashion/SingleProduct";
import VideosSection from "@/components/homes/home-fashion/VideosSection";

export const metadata = {
  title: "Unimart Fashion - Modern Fashion E-Commerce Store",
  description:
    "Discover the latest fashion trends. Shop premium clothing, accessories, and footwear at Unimart Fashion.",
};

export default function Home() {
  return (
    <div className="rbt-header-sticky">
      <Header3 sticky={true} />
      <Hero />
      <CategoryScroll />
      <Categories />
      <Products1 />
      <Banner />
      <Products2 />
      <SingleProduct />
      <LookbookProducts />
      <Products3 />
      <VideosSection />
      <Footer3 />
    </div>
  );
}
