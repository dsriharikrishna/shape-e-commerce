import Header from "@/shared/components/layout/headers/Header";
import Hero from "@/features/home/components/homes/home-fashion/Hero";
import CategoryScroll from "@/features/home/components/homes/home-fashion/CategoryScroll";
import Categories from "@/features/home/components/homes/home-fashion/Categories";
import Products1 from "@/features/home/components/homes/home-fashion/Products1";
import Banner from "@/features/home/components/homes/home-fashion/Banner";
import Products2 from "@/features/home/components/homes/home-fashion/Products2";
import SingleProduct from "@/features/home/components/homes/home-fashion/SingleProduct";
import LookbookProducts from "@/features/home/components/homes/home-fashion/LookbookProducts";
import Products3 from "@/features/home/components/homes/home-fashion/Products3";
import VideosSection from "@/features/home/components/homes/home-fashion/VideosSection";
import Footer from "@/shared/components/layout/footers/Footer";
// ... other components to be migrated ...

export const metadata = {
  title: "TryShape Fashion - Modern Fashion E-Commerce Store",
  description:
    "Discover the latest fashion trends. Shop premium clothing, accessories, and footwear at TryShape Fashion.",
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Header sticky={true} />
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

      <Footer />
    </div>
  );
}
