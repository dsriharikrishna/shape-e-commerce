import { apparelCompareProducts } from "@/data/products/others";
import Breadcrumb from "@/components/common/Breadcrumb";
import CompareProducts3 from "@/components/product-details/compares/CompareProducts3";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <CompareProducts3 products={apparelCompareProducts} />
    </>
  );
}
