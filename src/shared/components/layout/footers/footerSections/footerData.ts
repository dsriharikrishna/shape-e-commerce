export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export const helpLinks: FooterLink[] = [
  { label: "Account Info", href: "/account-info" },
  { label: "Your Orders", href: "/my-order-history" },
  { label: "Returns Policies", href: "/return-policy" },
  { label: "Shipping Rates", href: "/my-order-history" },
  { label: "Refund and Returns", href: "/return-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-policy" },
];

export const moneyLinks: FooterLink[] = [
  { label: "Sell on TryShape", href: "/shop" },
  { label: "Sell Your Services on TryShape", href: "/shop" },
  { label: "Sell on TryShape Business", href: "/shop" },
  { label: "Sell Your Apps on TryShape", href: "/shop" },
  { label: "Become an Affiliate", href: "/shop" },
  { label: "Advertise Your Products", href: "/shop" },
  { label: "Sell-Publish with Us", href: "/shop" },
];

export const knowUsLinks: FooterLink[] = [
  { label: "Careers for TryShape", href: "/about" },
  { label: "About TryShape", href: "/about" },
  { label: "Investor Relations", href: "/about" },
  { label: "TryShape Devices", href: "/about" },
  { label: "Customer reviews", href: "/about" },
  { label: "Social Responsibility", href: "/about" },
];

export const storeLinks: FooterLink[] = [
  { label: "New York", href: "/find-store" },
  { label: "London SF", href: "/find-store" },
  { label: "Cockfosters BP", href: "/find-store" },
  { label: "Los Angeles", href: "/find-store" },
  { label: "Chicago", href: "/find-store" },
  { label: "Las Vegas", href: "/find-store" },
  { label: "Our Sitemap", href: "/find-store" },
];

export const socialIcons = [
  "twitter",
  "youtube",
  "facebook",
  "whatsapp",
  "instagram",
  "telegram",
] as const;
