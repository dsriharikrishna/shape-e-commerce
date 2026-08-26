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
const CartModal2 = dynamic(
  () => import("@/shared/components/modals/CartModal2").then((m) => m.default),
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
const QuickView2 = dynamic(
  () => import("@/shared/components/modals/QuickView2").then((m) => m.default),
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
const QuickViewSizeGuide = dynamic(
  () =>
    import("@/shared/components/modals/QuickViewSizeGuide").then(
      (m) => m.default
    ),
  { ssr: false }
);
const Toasters = dynamic(
  () => import("@/shared/components/modals/Toasters").then((m) => m.default),
  { ssr: false }
);
const Categories = dynamic(
  () => import("@/shared/components/modals/Categories").then((m) => m.default),
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
const CouponModal = dynamic(
  () => import("@/shared/components/modals/CouponModal").then((m) => m.default),
  { ssr: false }
);
const RecentViewModal = dynamic(
  () =>
    import("@/shared/components/modals/RecentViewModal").then((m) => m.default),
  { ssr: false }
);
const MobileMenu = dynamic(
  () => import("@/shared/components/modals/MobileMenu").then((m) => m.default),
  { ssr: false }
);
const RequestPageModal = dynamic(
  () =>
    import("@/shared/components/modals/RequestPageModal").then(
      (m) => m.default
    ),
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
