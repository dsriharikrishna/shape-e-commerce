// Common/shared type definitions

export interface Feature {
  id?: number;
  icon?: string;
  imgSrc?: string;
  title: string;
  description: string;
  animationOrder?: number | string;
}

export interface Testimonial {
  id?: number;
  title?: string;
  date?: string;
  rating?: number;
  text?: string;
  content?: string;
  name?: string;
  author?: string;
  reviewer?: string;
  verified?: boolean;
  isVerified?: boolean;
  image?: string;
  imgSrc?: string;
  thumbnail?: string;
  productImg?: string;
  productTitle?: string;
  order?: number;
  role?: string;
  animation?: number | string;
  animationOrder?: number;
  reviewerImage?: string;
  productImage?: string;
  fullStarCount?: number;
  productName?: string;
  videoSrc?: string;
  reviewText?: string;
  img?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  img?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Brand {
  id?: number;
  name?: string;
  title?: string;
  logo?: string;
  src?: string;
  imageSrc?: string;
  brandImage?: string;
  logoImage?: string;
  label?: string;
  animationOrder?: number;
  width?: number;
  height?: number;
  location?: string;
  totalProducts?: number | string;
}

export interface HeroSlide {
  id?: number;
  image?: string;
  imgSrc?: string;
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  btnText?: string;
  buttonLink?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleMain?: string;
  titleSub?: string;
  titleBold?: string;
  titleRegular?: string;
  width?: number;
  height?: number;
  oldPrice?: string | number;
  newPrice?: string | number;
  discount?: string;
  offer?: string;
  priceStart?: string;
  saveOffer?: string;
  productTitle?: string;
  bgImgSrc?: string;
  bgImgWidth?: number;
  bgImgHeight?: number;
  days?: number | string;
  hours?: number | string;
  minutes?: number | string;
  seconds?: number | string;
  animationOrder?: number;
  animation?: number | string;
  alt?: string;
  discountText?: string;
  effectClass?: string;
  href?: string;
  img?: string;
  src?: string;
  imgWidth?: number;
  imgHeight?: number;
  price?: string | number;
  startPrice?: string;
  titleRest?: string;
  countdownDate?: string;
}

export interface InstagramPost {
  id?: number;
  imgSrc?: string;
  image?: string;
  link?: string;
  videoLink?: string;
  username?: string;
  caption?: string;
  animationClass?: string;
  animationOrder?: number;
  width?: number;
  height?: number;
}

export interface Collection {
  id?: number;
  title?: string;
  category?: string;
  titleLine1?: string;
  titleMain?: string;
  image?: string | { src: string; width: number; height: number };
  imgSrc?: string;
  imageSrc?: string;
  img?: string;
  src?: string;
  productCount?: number;
  width?: number;
  height?: number;
  imgWidth?: number;
  subtitle?: string;
  boldText?: string;
  originalPrice?: string;
  offerPrice?: string;
  savePercent?: string;
  animationOrder?: number | string;
  animation?: number | string;
  hasCurvedPortion?: boolean;
  alt?: string;
  bgClass?: string;
  description?: string;
  discount?: string;
  priceDesc?: string;
  productTitle?: string;
  oldPrice?: string | number;
  price?: string | number;
  titleBold?: string;
  titleSub?: string;
  titleLine2?: string;
  imgHeight?: number;
  imageWidth?: number;
  imageHeight?: number;
  effectClass?: string;
  titleParts?: string[];
  offer?: string;
  discountedPrice?: string | number;
  newPrice?: string | number;
  bgImgSrc?: string;
  bgImgWidth?: number;
  bgImgHeight?: number;
}

export interface Portfolio {
  id?: number;
  title: string;
  category?: string;
  image?: string;
  img?: string;
  description?: string;
  subtitle?: string;
}
