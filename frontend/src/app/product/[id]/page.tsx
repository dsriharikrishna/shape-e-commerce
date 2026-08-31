import Header from "@/shared/components/layout/headers/Header";
import Footer from "@/shared/components/layout/footers/Footer";
import ProductDetails from "@/features/products/components/ProductDetails";

export const metadata = {
  title: "Product Details || TryShape",
  description: "TryShape - E-commerce",
};

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return (
    <>
      <Header sticky={true} />
      <ProductDetails id={resolvedParams.id} />
      <Footer />
    </>
  );
}
