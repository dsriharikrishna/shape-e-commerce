import type { Metadata } from "next";
import { Cabin, Caveat, Bebas_Neue, Caprasimo } from "next/font/google";
import "rc-slider/assets/index.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/plugins/fontawesome-all.min.css";
import "../../public/assets/css/plugins/swiper.css";
import "../../public/assets/css/plugins/fancybox.css";
import "../../public/assets/css/plugins/mavo.css";
import "../../public/assets/css/plugins/odometer.css";
import "../../public/assets/css/plugins/animation.css";
import "../../public/assets/css/plugins/bootstrap-select.min.css";
import "../../public/assets/css/plugins/bootstrap-datepicker.min.css";
import "./globals.css";

import BodyUiSync from "@/shared/components/common/BodyUiSync";
import LayoutWrapper from "@/shared/components/common/LayoutWrapper";
import LayoutModals from "@/shared/components/common/LayoutModals";
import { Providers } from "./providers";

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

export const metadata: Metadata = {
  title: "TryShape - Modern E-Commerce",
  description:
    "Shop the latest fashion, electronics, and lifestyle trends with TryShape.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${caveat.variable} ${bebasNeue.variable} ${caprasimo.variable}`}
    >
      <body className={cabin.className}>
        <Providers>
          <BodyUiSync />
          <LayoutWrapper>
            {children}
            <LayoutModals />
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
