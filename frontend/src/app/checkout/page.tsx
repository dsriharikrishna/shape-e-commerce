import Header from "@/shared/components/layout/headers/Header";
import Footer from "@/shared/components/layout/footers/Footer";
import Checkout from "@/features/checkout/components/Checkout";

export const metadata = {
  title: "Checkout || TryShape",
  description: "TryShape - E-commerce",
};

export default function CheckoutPage() {
  return (
    <>
      <Header sticky={true} />
      <Checkout />
      <Footer />
    </>
  );
}
