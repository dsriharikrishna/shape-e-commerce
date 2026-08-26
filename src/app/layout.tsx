import type { Metadata } from "next";
import { Cabin, Caveat, Bebas_Neue, Caprasimo } from "next/font/google";
import "@/public/assets/scss/main.scss";
import "rc-slider/assets/index.css";
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
  title: "Unimart Fashion - Premium Fashion E-Commerce",
  description:
    "Shop the latest fashion trends. Premium clothing, footwear, and accessories at Unimart Fashion.",
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
