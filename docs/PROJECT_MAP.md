# TryShape E-Commerce Project Map

This document serves as the primary technical index and lookup map for the TryShape E-Commerce project. **Agents should read this file first** to understand the architecture, locate components, and trace the impact of global bugs.

The project is structured around a **Page-First** mapping to ensure bugs are easily traced from the URL down to the component tree.

---

## 🌎 Global Definitions & References

Before diving into specific pages, these are the global systems that affect everything:

*   **Design Tokens & Themes**: `src/app/globals.css`. Uses Tailwind v4 `@theme` block and root CSS variables for semantic colors (`--primary`, `--secondary`, `--warning`, `--destructive`).
*   **Global Overrides**: `src/app/globals.css`.
    *   **Links (`<a>`)**: Default Bootstrap blue/underline styles are stripped globally here.
    *   **Lists (`<ul>`/`<li>`)**: Default `list-style: disc` and custom `::marker` bullets are removed globally.
*   **Shared Components Location**: `src/shared/components/`
*   **Feature Modules Location**: `src/features/`

---

## 📄 Page: `/` (Home)
**File:** `src/app/page.tsx`
**Purpose:** The main landing page showcasing categories, featured products, lookbooks, and promotional videos.

### Full Content Breakdown (Top to Bottom)
1. **Header Navigation** (`Header.tsx`)
2. **Hero Banner** (`Hero.tsx`)
3. **Infinite Marquee** (`CategoryScroll.tsx`)
4. **Category Pill Links** (`Categories.tsx`)
5. **Featured Products** (`Products1.tsx`)
6. **Promotional Banner** (`Banner.tsx`)
7. **Secondary Products** (`Products2.tsx`)
8. **Single Highlight Product** (`SingleProduct.tsx`)
9. **Lookbook Highlights** (`LookbookProducts.tsx`)
10. **Tertiary Products** (`Products3.tsx`)
11. **Video Promotion** (`VideosSection.tsx`)
12. **Footer** (`Footer.tsx`)

### Every Component Used
*   **[SHARED]** `Header.tsx` (`src/shared/components/layout/headers/Header.tsx`)
*   **[SHARED]** `Footer.tsx` (`src/shared/components/layout/footers/Footer.tsx`)
*   **[SHARED]** `VideosSection.tsx` (`src/shared/components/common/VideosSection.tsx`)
*   **[PAGE-SPECIFIC]** `Hero.tsx` (`src/features/home/components/homes/home-fashion/Hero.tsx`)
*   **[PAGE-SPECIFIC]** `CategoryScroll.tsx` (`src/features/home/components/homes/home-fashion/CategoryScroll.tsx`)
*   **[PAGE-SPECIFIC]** `Categories.tsx` (`src/features/home/components/homes/home-fashion/Categories.tsx`)
*   **[PAGE-SPECIFIC]** `Products1.tsx`, `Products2.tsx`, `Products3.tsx` (`src/features/home/...`)
*   **[PAGE-SPECIFIC]** `Banner.tsx` (`src/features/home/components/homes/home-fashion/Banner.tsx`)
*   **[PAGE-SPECIFIC]** `SingleProduct.tsx` (`src/features/home/components/homes/home-fashion/SingleProduct.tsx`)
*   **[PAGE-SPECIFIC]** `LookbookProducts.tsx` (`src/features/home/components/homes/home-fashion/LookbookProducts.tsx`)

### Shared Component Impact (Reverse Lookup)
*   **`Header.tsx` & `Footer.tsx`**: Used on **every single page** in the application. Any changes here are global.
*   **`VideosSection.tsx`**: Used on the Home page, potentially re-used on the About page.

### Styling Dependencies
*   Depends heavily on `globals.css` for overriding default link styles (`<a>` tags in `Categories.tsx`).
*   `CategoryScroll.tsx` relies on custom Tailwind animation utilities (e.g. `animate-marquee`).

### Data/State Dependencies
*   Relies on static data imported from `src/shared/data/`.

---

## 📄 Page: `/shop`
**File:** `src/app/shop/page.tsx`
**Purpose:** Main product catalog with filtering, sorting, and pagination.

### Full Content Breakdown (Top to Bottom)
1. **Header Navigation** (`Header.tsx`)
2. **Breadcrumbs** (`Breadcrumb.tsx`)
3. **Shop Layout & Grid** (`ShopLayout.tsx` enclosing `ProductGrid.tsx` & `ShopSidebar.tsx`)
4. **Footer** (`Footer.tsx`)

### Every Component Used
*   **[SHARED]** `Header.tsx` (`src/shared/components/layout/headers/Header.tsx`)
*   **[SHARED]** `Footer.tsx` (`src/shared/components/layout/footers/Footer.tsx`)
*   **[SHARED]** `Breadcrumb.tsx` (`src/shared/components/common/Breadcrumb.tsx`)
*   **[FEATURE-SPECIFIC]** `ShopLayout.tsx` (`src/features/shop/components/ShopLayout.tsx`)
*   **[FEATURE-SPECIFIC]** `ProductGrid.tsx` (`src/features/shop/components/ProductGrid.tsx`)
*   **[FEATURE-SPECIFIC]** `ShopSidebar.tsx` (`src/features/shop/components/ShopSidebar.tsx`)

### Shared Component Impact (Reverse Lookup)
*   **`Breadcrumb.tsx`**: Modifying this impacts `/compare-product`, `/contact`, `/faq`, `/about`, and all corporate pages.
*   **`Header.tsx` & `Footer.tsx`**: Global impact.

### Styling Dependencies
*   Sidebar relies on Bootstrap grid classes (`col-lg-3`, `col-lg-9`) mixed with custom spacing.

### Data/State Dependencies
*   Consumes filter context/state (e.g. Price, Categories, Colors).

---

## 📄 Page: `/product/*` (Single Product)
**File:** `src/app/product/page.tsx` (and dynamic variations)
**Purpose:** Detailed view of a single product, including image gallery, add to cart, and related items.

### Full Content Breakdown (Top to Bottom)
1. **Header Navigation** (`Header.tsx`)
2. **Breadcrumbs** (`Breadcrumb.tsx`)
3. **Product Main View** (`SingleProductDetails.tsx` enclosing `ProductGallery.tsx` and `ProductActions.tsx`)
4. **Related Products** (`RelatedProducts.tsx`)
5. **Footer** (`Footer.tsx`)

### Every Component Used
*   **[SHARED]** `Header.tsx`, `Footer.tsx`, `Breadcrumb.tsx`
*   **[SHARED]** `QuantitySelect.tsx` (`src/shared/components/common/QuantitySelect.tsx`)
*   **[SHARED]** `AddToCart.tsx` (`src/shared/components/common/AddToCart.tsx`)
*   **[FEATURE-SPECIFIC]** `SingleProductDetails.tsx`, `ProductGallery.tsx`, `RelatedProducts.tsx` (`src/features/products/...`)

### Shared Component Impact (Reverse Lookup)
*   **`QuantitySelect.tsx`**: Also used in `/cart` and `CartModal.tsx`.
*   **`AddToCart.tsx`**: Also used in `/shop` (Product Cards) and Home page featured products.

### Data/State Dependencies
*   Relies on Cart Context to dispatch "Add to Cart" actions.

---

## 📄 Page: `/cart`
**File:** `src/app/cart/page.tsx`
**Purpose:** Full-page review of selected items before checkout.

### Full Content Breakdown (Top to Bottom)
1. **Header Navigation** (`Header.tsx`)
2. **Breadcrumbs** (`Breadcrumb.tsx`)
3. **Cart Items Table** (`CartItems.tsx`)
4. **Cart Totals / Proceed** (`CartTotal.tsx`)
5. **Footer** (`Footer.tsx`)

### Every Component Used
*   **[SHARED]** `Header.tsx`, `Footer.tsx`, `Breadcrumb.tsx`
*   **[SHARED]** `QuantitySelect.tsx` (`src/shared/components/common/QuantitySelect.tsx`)
*   **[FEATURE-SPECIFIC]** `CartItems.tsx`, `CartTotal.tsx` (`src/features/cart/components/...`)

### Shared Component Impact (Reverse Lookup)
*   **`QuantitySelect.tsx`**: Impacts `/product/*` single views.

### Data/State Dependencies
*   Strictly depends on global Cart Context/State.

---

## 📄 Page: `/checkout`
**File:** `src/app/checkout/page.tsx`
**Purpose:** Multi-step workflow for payment and shipping details.

### Full Content Breakdown (Top to Bottom)
1. **Header Navigation** (`Header.tsx`)
2. **Breadcrumbs** (`Breadcrumb.tsx`)
3. **Checkout Form** (`CheckoutSteps.tsx`)
4. **Order Summary** (`OrderSummary.tsx`)
5. **Footer** (`Footer.tsx`)

### Every Component Used
*   **[SHARED]** `Header.tsx`, `Footer.tsx`, `Breadcrumb.tsx`
*   **[FEATURE-SPECIFIC]** `CheckoutSteps.tsx`, `OrderSummary.tsx` (`src/features/checkout/components/...`)

### Data/State Dependencies
*   Depends on Cart State (for summary) and Auth State (for user details).

---

## 📄 Page: `/compare-product`
**File:** `src/app/compare-product/page.tsx`
**Purpose:** Side-by-side tabular comparison of selected products.

### Full Content Breakdown (Top to Bottom)
1. **Header Navigation** (`Header.tsx`)
2. **Breadcrumbs** (`Breadcrumb.tsx`)
3. **Comparison Table** (`CompareProducts3.tsx`)
4. **Footer** (`Footer.tsx`)

### Every Component Used
*   **[SHARED]** `Header.tsx`, `Footer.tsx`, `Breadcrumb.tsx`
*   **[SHARED]** `AddToCart.tsx` (`src/shared/components/common/AddToCart.tsx`)
*   **[FEATURE-SPECIFIC]** `CompareProducts3.tsx` (`src/features/products/components/product-details/compares/CompareProducts3.tsx`)

### Shared Component Impact (Reverse Lookup)
*   **`Breadcrumb.tsx`**: Impacts `/shop`, `/contact`, `/faq`, `/about`.
*   **`AddToCart.tsx`**: Impacts `/shop`, `/product/*`, and Home.

### Styling Dependencies
*   Relies on global SVG fill color token overrides in table headers.

---

## 📄 Pages: Corporate & Static (`/about`, `/contact`, `/faq`, `/privacy-policy`, `/return-policy`)
**Files:** `src/app/contact/page.tsx`, etc.
**Purpose:** Static information display, contact forms, and textual content.

### Full Content Breakdown (Top to Bottom)
1. **Header Navigation** (`Header.tsx`)
2. **Breadcrumbs** (`Breadcrumb.tsx`)
3. **Content Sections** (e.g., `ContactForm.tsx`, `FaqAccordion.tsx`, `AboutHero.tsx`)
4. **Footer** (`Footer.tsx`)

### Every Component Used
*   **[SHARED]** `Header.tsx`, `Footer.tsx`, `Breadcrumb.tsx`
*   **[FEATURE-SPECIFIC]** Corporate specific components housed in `src/features/corporate/components/...`.

### Shared Component Impact (Reverse Lookup)
*   **`Breadcrumb.tsx`**: Impacts all corporate pages, `/shop`, and `/compare-product`. Modifying the breadcrumb layout directly impacts these static pages.
