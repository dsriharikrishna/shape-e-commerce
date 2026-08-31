# Project Changelog & Logs

This file tracks the major edits, refactoring, and updates made to the project.

## [2026-08-31] Restored Missing Global UI Dependencies

**Summary:**
Fixed critical UI degradation caused during the bulk SCSS migration when the `public/assets/scss/` directory was deleted, which broke Bootstrap layout and third-party plugin CSS. Restored dropdown functionality by manually injecting missing hover logic and refined menu styles based on user feedback.

**Detailed Changes:**
1. **Restored Global Imports:**
   - Updated `src/app/layout.tsx` to restore missing CSS imports for Bootstrap grid/reboot and third-party plugins (Swiper, Fancybox, FontAwesome, etc.) using correct relative paths (`../../public/assets/css/...`).
2. **Dropdown Interactions:**
   - Added missing CSS logic for `.has-dropdown > .submenu` and `.with-rbt-megamenu > .rbt-megamenu` to hide menus by default and display/animate them on hover.
3. **Menu Styling Refinements:**
   - Forced `list-style: none` globally for header and footer menus.
   - Decreased font size, padding, and margins for submenu and megamenu links to reduce gap spacing.


## [2026-08-31] Massive Template Refactoring & Dead Code Elimination

**Summary:** 
Performed a complete project-wide audit and refactoring to clean up the unused template files and improve maintainability. The codebase was heavily bloated with unused layout variations, which have now been removed. Over 220 unused files were safely deleted.

**Detailed Changes:**
1. **Footer Consolidation:**
   - Deleted 12 unused footer components (`Footer1` to `Footer13` excluding `Footer3`).
   - Renamed the active `Footer3.tsx` to `Footer.tsx`.
   - Extracted shared footer links into a new data file (`src/shared/data/footerLinks.ts`) to loop over them, removing hardcoded duplicates.
   - Updated all layout imports to point to the new `Footer`.

2. **Header Cleanup:**
   - Identified 20 variations of headers where only one (`Header3.tsx`) was actually used.
   - Deleted the 19 unused header files.
   - Renamed `Header3.tsx` to `Header.tsx` and updated application imports.

3. **Product Card & Slider Optimization:**
   - Deleted over 178 unused components across `src/features` and `src/shared/components` using a dependency-tracing script (this included unused sliders, galleries, and product cards).
   - Extracted duplicated star-rating logic into a shared reusable component: `src/shared/components/ui/RatingStars.tsx`.
   - Renamed the 8 remaining active `ProductCard` components to semantic names (e.g., `ProductCardVariant.tsx`, `ProductCardSplit.tsx`, `ProductCardHover.tsx`) instead of numbers, improving readability.

4. **Redundant "Bought Together" Cleanup:**
   - Deleted 42 duplicate and unused "Bought Together" and "Similar Products" variations.
   - Kept only the single actively used `SimilerProducts.tsx` component.

5. **Modals & Header Components Cleanup:**
   - Identified and deleted 5 unused modals (`CouponModal.tsx`, `QuickView.tsx`, `QuickViewSizeGuide.tsx`, `RecentViewModal.tsx`, `RequestPageModal.tsx`) that were globally registered but never triggered.
   - Renamed the active `QuickView2.tsx` to `QuickView.tsx`.
   - Removed the deleted modals from `LayoutModals.tsx` to reduce the client hydration payload.
   - Deleted 2 unused header components (`Reviews.tsx`, `Categories.tsx`).

6. **Architecture Review:**
   - Reviewed `src/shared/hooks` and `src/shared/utils`. Confirmed that logic is well-separated (e.g., mathematical logic in utils, React lifecycle in hooks).
   - Verified that global state (`Zustand`) is properly scoped into `authStore` and `uiStore`.
   - Fixed a Next.js Suspense boundary error in `/shop/page.tsx` that was causing production build failures.
   - Rebuilt the project to ensure no active dependencies were broken.
