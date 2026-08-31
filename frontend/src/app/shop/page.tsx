import { Suspense } from "react";
import Header from "@/shared/components/layout/headers/Header";
import Footer from "@/shared/components/layout/footers/Footer";
import Shop from "@/features/shop/components/Shop";

export const metadata = {
  title: "Shop || TryShape",
  description: "TryShape - E-commerce",
};

export default function ShopPage() {
  return (
    <>
      <Header sticky={true} />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading shop...
          </div>
        }
      >
        <Shop />
      </Suspense>
      <Footer />
    </>
  );
}
