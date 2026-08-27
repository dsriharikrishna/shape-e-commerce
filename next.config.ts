import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index", destination: "/", permanent: false },
      { source: "/blogs", destination: "/blog-default", permanent: false },
      { source: "/faq-page-01", destination: "/faq", permanent: false },
      { source: "/terms-policy", destination: "/privacy-policy", permanent: false },
      { source: "/find-store", destination: "/contact", permanent: false },
      { source: "/shop-default", destination: "/shop", permanent: false },
      { source: "/shop-by-categories", destination: "/categories-list", permanent: false },
      { source: "/shop-by-category", destination: "/shop", permanent: false },
      { source: "/shop-by-brands", destination: "/shop", permanent: false },
      { source: "/account-info", destination: "/", permanent: false },
      { source: "/my-order-history", destination: "/", permanent: false },
      { source: "/wishlist", destination: "/cart", permanent: false },
      { source: "/checkout-delivery-step-one", destination: "/checkout", permanent: false },
      { source: "/checkout-delivery-step-two", destination: "/checkout", permanent: false },
      { source: "/checkout-payment", destination: "/checkout", permanent: false },
      { source: "/checkout-shipping", destination: "/checkout", permanent: false },
      { source: "/product-single-default/:id", destination: "/product/:id", permanent: false },
      { source: "/product-single-fashion/:id", destination: "/product/:id", permanent: false },
      { source: "/product-single-default", destination: "/shop", permanent: false },
      { source: "/home-:slug", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
