"use client";

import dynamic from "next/dynamic";

const ScrollTop = dynamic(
  () => import("@/components/common/ScrollTop").then((m) => m.default),
  { ssr: false },
);
const CartModal = dynamic(
  () => import("@/components/modals/CartModal").then((m) => m.default),
  { ssr: false },
);
const CartModal2 = dynamic(
  () => import("@/components/modals/CartModal2").then((m) => m.default),
  { ssr: false },
);
const Compare = dynamic(
  () => import("@/components/modals/Compare").then((m) => m.default),
  { ssr: false },
);
const QuickView = dynamic(
  () => import("@/components/modals/QuickView").then((m) => m.default),
  { ssr: false },
);
const QuickView2 = dynamic(
  () => import("@/components/modals/QuickView2").then((m) => m.default),
  { ssr: false },
);
const CompareView = dynamic(
  () => import("@/components/modals/CompareView").then((m) => m.default),
  { ssr: false },
);
const WishList = dynamic(
  () => import("@/components/modals/WishList").then((m) => m.default),
  { ssr: false },
);
const SocialShare = dynamic(
  () => import("@/components/modals/SocialShare").then((m) => m.default),
  { ssr: false },
);
const NotifyModal = dynamic(
  () => import("@/components/modals/NotifyModal").then((m) => m.default),
  { ssr: false },
);
const QuickViewSizeGuide = dynamic(
  () => import("@/components/modals/QuickViewSizeGuide").then((m) => m.default),
  { ssr: false },
);
const Toasters = dynamic(
  () => import("@/components/modals/Toasters").then((m) => m.default),
  { ssr: false },
);
const Categories = dynamic(
  () => import("@/components/modals/Categories").then((m) => m.default),
  { ssr: false },
);
const Overlay = dynamic(
  () => import("@/components/modals/Overlay").then((m) => m.default),
  { ssr: false },
);
const Signin = dynamic(
  () => import("@/components/modals/Signin").then((m) => m.default),
  { ssr: false },
);
const Signup = dynamic(
  () => import("@/components/modals/Signup").then((m) => m.default),
  { ssr: false },
);
const InstaModal = dynamic(
  () => import("@/components/modals/InstaModal").then((m) => m.default),
  { ssr: false },
);
const CouponModal = dynamic(
  () => import("@/components/modals/CouponModal").then((m) => m.default),
  { ssr: false },
);
const RecentViewModal = dynamic(
  () => import("@/components/modals/RecentViewModal").then((m) => m.default),
  { ssr: false },
);
const MobileMenu = dynamic(
  () => import("@/components/modals/MobileMenu").then((m) => m.default),
  { ssr: false },
);
const RequestPageModal = dynamic(
  () => import("@/components/modals/RequestPageModal").then((m) => m.default),
  { ssr: false },
);

export default function LayoutModals() {
  return (
    <>
      <a href="#" className="common-close_search_dropdown" />
      <ScrollTop />
      <CartModal />
      <Compare />
      <QuickView />
      <Categories />
      <QuickView2 />
      <CompareView />
      <WishList />
      <CartModal2 />
      <SocialShare />
      <NotifyModal />
      <QuickViewSizeGuide />
      <Toasters />
      <Signin />
      <Signup />
      <InstaModal />
      <RecentViewModal />
      <CouponModal />
      <MobileMenu />
      <RequestPageModal />
      <Overlay />
    </>
  );
}
