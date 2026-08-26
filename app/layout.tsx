import {
  Cabin,
  Caveat,
  Bebas_Neue,
  Caprasimo,
} from "next/font/google";
import BodyUiSync from "@/components/common/BodyUiSync";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import "../public/assets/scss/main.scss";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cabin",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});
const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caprasimo",
});
import "rc-slider/assets/index.css";
import LayoutModals from "@/components/common/LayoutModals";

export const metadata = {
  title: "Unimart Fashion - Premium Fashion E-Commerce",
  description:
    "Shop the latest fashion trends. Premium clothing, footwear, and accessories at Unimart Fashion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${caveat.variable} ${bebasNeue.variable} ${caprasimo.variable}`}
    >
      <body className={cabin.className}>
        <BodyUiSync />
        <LayoutWrapper>
          {children}
          <LayoutModals />
        </LayoutWrapper>
      </body>
    </html>
  );
}
