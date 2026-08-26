import { apparelCompareProducts } from "@/features/products/data/products/others";
import Breadcrumb from "@/shared/components/common/Breadcrumb";
import CompareProducts3 from "@/features/shop/components/compares/CompareProducts3";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <CompareProducts3 products={apparelCompareProducts} />
    </>
  );
}
