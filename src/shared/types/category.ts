// Category-related type definitions

// Base category with normalized property name (imgSrc)
export interface Category {
  title: string;
  imgSrc: string;
  order?: number;
  animationOrder?: number | string;
}

// Category card with extended properties
export interface CategoryCard {
  id?: number;
  animationOrder?: number | string;
  title: string;
  imageSrc: string;
  links?: string[];
  quickLinks?: { text: string }[];
  imageWidth?: number;
  imageHeight?: number;
}

// Category with badge
export interface CategoryWithBadge {
  title: string;
  badge: { label: string; color: string } | null;
  count: number;
  imgSrc: string;
}

// For legacy data that uses different property names
export interface CategoryLegacy {
  id?: number;
  title?: string;
  image?: string;
  imgSrc?: string;
  imageSrc?: string;
  img?: string;
  order?: number;
  animationOrder?: number | string;
  animation?: number | string;
  titleParts?: string[];
  links?: string[];
  quickLinks?: { text: string }[];
  imageWidth?: number;
  imageHeight?: number;
  width?: number;
  height?: number;
  bgWidth?: number;
  bgHeight?: number;
  fgWidth?: number;
  fgHeight?: number;
  alt?: string;
  badge?: string | { label: string; color: string } | null;
  bgImg?: string;
  fgImg?: string;
  imgOrder?: number;
  name?: string;
  qty?: number | string;
  wider?: boolean;
  count?: number;
  subtitle?: string;
  label?: string;
}
