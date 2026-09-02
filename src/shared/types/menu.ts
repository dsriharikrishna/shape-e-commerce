// Menu and navigation type definitions

export interface MenuItem {
  href: string;
  label: string;
  useLink?: boolean;
  badge?: string;
  badgeColor?: string;
  ml?: string | number | boolean;
  children?: MenuItem[];
  items?: MenuItem[];
  isNew?: boolean;
  isMegaMenu?: boolean;
  megaMenu?: MenuSection[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface DemoData {
  href: string;
  src: string;
  width: number;
  height: number;
  title: string;
}

export interface CategoryBanner {
  title: string;
  desc: string;
  btnHref: string;
  btnText: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  bannerCardClass?: string;
  bannerInnerClass?: string;
}

export interface CategoryMegamenu {
  label: string;
  icon: string;
  href: string;
  sections: MenuSection[];
  banner: CategoryBanner;
}

export interface CategorySimpleLink {
  href: string;
  label: string;
  icon: string;
}
