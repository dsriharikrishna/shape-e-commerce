import Header from "@/shared/components/layout/headers/Header";
import Footer from "@/shared/components/layout/footers/Footer";
import Cart from "@/features/cart/components/Cart";

export const metadata = {
  title: "Shopping Cart || TryShape",
  description: "TryShape - E-commerce",
};

export default function CartPage() {
  return (
    <>
      <Header sticky={true} />
      <Cart />
      <Footer />
    </>
  );
}
