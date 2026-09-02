"use client";

import dynamic from "next/dynamic";

const ScrollTop = dynamic(
  () => import("@/shared/components/common/ScrollTop").then((m) => m.default),
  { ssr: false }
);
const CartModal = dynamic(
  () => import("@/shared/components/modals/CartModal").then((m) => m.default),
  { ssr: false }
);

const Compare = dynamic(
  () => import("@/shared/components/modals/Compare").then((m) => m.default),
  { ssr: false }
);
const QuickView = dynamic(
  () => import("@/shared/components/modals/QuickView").then((m) => m.default),
  { ssr: false }
);
const CompareView = dynamic(
  () => import("@/shared/components/modals/CompareView").then((m) => m.default),
  { ssr: false }
);
const WishList = dynamic(
  () => import("@/shared/components/modals/WishList").then((m) => m.default),
  { ssr: false }
);
const SocialShare = dynamic(
  () => import("@/shared/components/modals/SocialShare").then((m) => m.default),
  { ssr: false }
);
const NotifyModal = dynamic(
  () => import("@/shared/components/modals/NotifyModal").then((m) => m.default),
  { ssr: false }
);
const Toasters = dynamic(
  () => import("@/shared/components/modals/Toasters").then((m) => m.default),
  { ssr: false }
);
const Overlay = dynamic(
  () => import("@/shared/components/modals/Overlay").then((m) => m.default),
  { ssr: false }
);
const Signin = dynamic(
  () => import("@/shared/components/modals/Signin").then((m) => m.default),
  { ssr: false }
);
const Signup = dynamic(
  () => import("@/shared/components/modals/Signup").then((m) => m.default),
  { ssr: false }
);
const InstaModal = dynamic(
  () => import("@/shared/components/modals/InstaModal").then((m) => m.default),
  { ssr: false }
);
const MobileMenu = dynamic(
  () => import("@/shared/components/modals/MobileMenu").then((m) => m.default),
  { ssr: false }
);

export default function LayoutModals() {
  return (
    <>
      <a href="#" className="common-close_search_dropdown" />
      <ScrollTop />
      <CartModal />
      <Compare />
      <QuickView />
      <CompareView />
      <WishList />
      <CartModal variant="modal" />
      <SocialShare />
      <NotifyModal />
      <Toasters />
      <Signin />
      <Signup />
      <InstaModal />
      <MobileMenu />
      <Overlay />
    </>
  );
}
