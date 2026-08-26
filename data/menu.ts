import {
  CategoryMegamenu,
  DemoData,
  MenuItem,
  MenuSection,
} from "@/types";

export const demoData: DemoData[] = [];

export const shopPages: MenuSection[] = [
  {
    title: "Shop Pages",
    items: [
      {
        href: "/shop",
        label: "Shop All",
        badge: "SHOP",
        badgeColor: "green",
      },
      { href: "/shop-left-sidebar", label: "Shop with Filters" },
      { href: "/categories-list", label: "Categories" },
      { href: "/compare-product", label: "Compare Products" },
    ],
  },
];

export const productDetailPages: MenuSection[] = [
  {
    title: "Product Pages",
    items: [
      {
        href: "/product-single-fashion/209",
        label: "Product Fashion Style",
        badge: "TOP",
        badgeColor: "danger",
        ml: true,
      },
      {
        href: "/product-single-default/209",
        label: "Product Default Style",
      },
    ],
  },
];

export const productsVarientPage: MenuSection[] = [];

export const featureMenuColumns: MenuSection[] = [
  {
    title: "Shopping Features",
    items: [
      { href: "/cart", label: "Shopping Cart" },
      { href: "/checkout-delivery-step-one", label: "Checkout" },
      { href: "/checkout-payment", label: "Payment" },
      { href: "/checkout-shipping", label: "Shipping" },
      { href: "/checkout-thankyou", label: "Order Confirmation" },
    ],
  },
];

export const innerPageMenuColumns: MenuSection[] = [
  {
    title: "Pages",
    items: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/faq-page-01", label: "FAQs" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/blog-default", label: "Blog" },
      { href: "/blog-single", label: "Blog Details" },
    ],
  },
  {
    title: "E-commerce",
    items: [
      { href: "/cart", label: "Cart" },
      { href: "/compare-product", label: "Compare Products" },
      {
        href: "/return-policy",
        label: "Return Policy",
        badge: "New",
        badgeColor: "yellow",
      },
      { href: "/checkout-delivery-step-one", label: "Checkout" },
      { href: "/checkout-thankyou", label: "Order Confirmation" },
      { href: "/categories-list", label: "Categories" },
    ],
  },
];

export const elementsMenuColumns: MenuSection[] = [];

export const uxMenuColumns: MenuSection[] = [];

export const categoryMegamenus: CategoryMegamenu[] = [
  {
    label: "Women's Fashion",
    icon: "fa-regular fa-shirt",
    href: "/shop",
    sections: [
      {
        title: "Clothing",
        items: [
          { href: "/shop", label: "Dresses" },
          { href: "/shop", label: "Tops & Blouses" },
          { href: "/shop", label: "Casual Wear" },
          { href: "/shop", label: "Knitwear" },
          { href: "/shop", label: "Outerwear" },
          { href: "/shop", label: "Activewear" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { href: "/shop", label: "Bags & Purses" },
          { href: "/shop", label: "Belts" },
          { href: "/shop", label: "Hats" },
          { href: "/shop", label: "Scarves" },
          { href: "/shop", label: "Jewelry" },
          { href: "/shop", label: "Sunglasses" },
        ],
      },
    ],
    banner: {
      title: "New Collection",
      desc: "Discover the latest fashion trends.",
      btnHref: "/shop",
      btnText: "Shop Now",
      imgSrc: "/assets/images/product-img/fashion/product-new-01-a-1.webp",
      imgWidth: 518,
      imgHeight: 424,
      bannerInnerClass: "rbt-bg-color-extra-six",
    },
  },
  {
    label: "Men's Fashion",
    icon: "fa-regular fa-vest",
    href: "/shop",
    sections: [
      {
        title: "Clothing",
        items: [
          { href: "/shop", label: "T-Shirts" },
          { href: "/shop", label: "Hoodies & Sweatshirts" },
          { href: "/shop", label: "Formal Wear" },
          { href: "/shop", label: "Denim" },
          { href: "/shop", label: "Jackets & Coats" },
          { href: "/shop", label: "Activewear" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { href: "/shop", label: "Watches" },
          { href: "/shop", label: "Belts" },
          { href: "/shop", label: "Wallets" },
          { href: "/shop", label: "Ties & Bowties" },
          { href: "/shop", label: "Backpacks" },
          { href: "/shop", label: "Sneakers" },
        ],
      },
    ],
    banner: {
      title: "Urban Style",
      desc: "Premium menswear collection.",
      btnHref: "/shop",
      btnText: "Explore",
      imgSrc: "/assets/images/product-img/fashion/product-new-05-a-1.webp",
      imgWidth: 520,
      imgHeight: 408,
      bannerCardClass: "rbt-bg-style-box rbt-bg-two",
    },
  },
  {
    label: "Footwear",
    icon: "fa-regular fa-shoe-prints",
    href: "/shop",
    sections: [
      {
        title: "Shoes",
        items: [
          { href: "/shop", label: "Sneakers" },
          { href: "/shop", label: "Boots" },
          { href: "/shop", label: "Formal Shoes" },
          { href: "/shop", label: "Sandals" },
          { href: "/shop", label: "Running Shoes" },
          { href: "/shop", label: "Loafers" },
        ],
      },
      {
        title: "By Brand",
        items: [
          { href: "/shop", label: "StepCraft" },
          { href: "/shop", label: "FlexMove" },
          { href: "/shop", label: "DenimCraft" },
          { href: "/shop", label: "TailorMade" },
          { href: "/shop", label: "StreetEdge" },
          { href: "/shop", label: "RetroVibe" },
        ],
      },
    ],
    banner: {
      title: "Step in Style",
      desc: "Premium footwear for every occasion.",
      btnHref: "/shop",
      btnText: "Shop Now",
      imgSrc: "/assets/images/product-img/fashion/product-new-10-a-1.webp",
      imgWidth: 520,
      imgHeight: 424,
      bannerCardClass: "rbt-bg-color-brand-50 rbt-rounded--12",
    },
  },
];

export const categorySimpleLinks: { href: string; label: string; icon: string }[] = [
  {
    href: "/shop",
    label: "Vintage Clothing",
    icon: "fa-regular fa-shirt",
  },
  {
    href: "/shop",
    label: "Casual Wear",
    icon: "fa-regular fa-vest",
  },
  {
    href: "/shop",
    label: "Footwear",
    icon: "fa-regular fa-shoe-prints",
  },
  {
    href: "/shop",
    label: "Accessories",
    icon: "fa-regular fa-gem",
  },
];

export const supportMenuItems: MenuItem[] = [
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
  {
    href: "/faq-page-01",
    label: "FAQ",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    href: "/return-policy",
    label: "Return Policy",
  },
];

export const navBrandList: { src: string; width: number; height: number }[] = [
  { src: "/assets/images/brands/brand-a-01.webp", width: 90, height: 30 },
  { src: "/assets/images/brands/brand-a-02.webp", width: 137, height: 26 },
  { src: "/assets/images/brands/brand-a-03.webp", width: 91, height: 16 },
  { src: "/assets/images/brands/brand-a-04.webp", width: 91, height: 18 },
  { src: "/assets/images/brands/brand-a-05.webp", width: 106, height: 26 },
  { src: "/assets/images/brands/brand-a-06.webp", width: 119, height: 14 },
  { src: "/assets/images/brands/brand-a-07.webp", width: 105, height: 16 },
  { src: "/assets/images/brands/brand-a-01.webp", width: 90, height: 30 },
  { src: "/assets/images/brands/brand-a-02.webp", width: 137, height: 26 },
  { src: "/assets/images/brands/brand-a-03.webp", width: 91, height: 16 },
];
