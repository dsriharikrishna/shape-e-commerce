import { apparelCompareProducts } from "@/shared/data/products/others";
import Breadcrumb from "@/shared/components/common/Breadcrumb";
import CompareProducts3 from "@/features/products/components/product-details/compares/CompareProducts3";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <CompareProducts3 products={apparelCompareProducts} />
    </>
  );
}
