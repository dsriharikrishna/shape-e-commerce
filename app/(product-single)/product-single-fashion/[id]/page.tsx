import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import BreadCumb from "@/components/product-details/BreadCumb";
import DetailsFashion from "@/components/product-details/details/DetailsFashion";
import { allProducts } from "@/data/products";
import Description2 from "@/components/product-details/descriptions/Description2";
import SimmilerProducts2 from "@/components/product-details/others/SimmilerProducts2";
import BoughtTogether2 from "@/components/product-details/others/BoughtTogether2";
import CompareSimilerItems from "@/components/product-details/compares/CompareSimilerItems";
import { apparelCompareProducts } from "@/data/products/others";

export const metadata = {
  title: "Product Details | Unimart Fashion",
  description: "View product details at Unimart Fashion.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product =
    allProducts.filter((p) => p.id === parseInt(id))[0] || allProducts[0];

  return (
    <>
      <BreadCumb product={product} />
      <DetailsFashion product={product} />
      <Description2 />
      <CompareSimilerItems products={apparelCompareProducts} />
      <SimmilerProducts2 />
      <BoughtTogether2 />
      <BottomStickyProduct />
    </>
  );
}
