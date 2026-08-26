"use client";

import { create } from "zustand";

const TOASTER_DURATION_MS = 3000;

interface UiState {
  cartSidebarOpen: boolean;
  comparePanelOpen: boolean;
  categorySidebarOpen: boolean;
  categorySidebarRightActive: boolean;
  commonSearchOpen: boolean;
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  toasterCompareVisible: boolean;
  toasterWishlistVisible: boolean;
  // Actions
  toggleMobileMenu: () => void;
  openCartSidebar: () => void;
  closeCartSidebar: () => void;
  openComparePanel: () => void;
  closeComparePanel: () => void;
  openCategorySidebar: () => void;
  closeCategorySidebar: () => void;
  setCategorySidebarRightActive: (active: boolean) => void;
  toggleCommonSearch: () => void;
  closeCommonSearch: () => void;
  toggleSearch: () => void;
  closeSearch: () => void;
  showToasterCompare: () => void;
  showToasterWishlist: () => void;
  closeAll: () => void;
}

export const useUiStore = create<UiState>((set, _get) => ({
  cartSidebarOpen: false,
  comparePanelOpen: false,
  categorySidebarOpen: false,
  categorySidebarRightActive: false,
  commonSearchOpen: false,
  searchOpen: false,
  mobileMenuOpen: false,
  toasterCompareVisible: false,
  toasterWishlistVisible: false,

  toggleMobileMenu: () =>
    set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),

  openCartSidebar: () => set({ cartSidebarOpen: true }),
  closeCartSidebar: () => set({ cartSidebarOpen: false }),

  openComparePanel: () => set({ comparePanelOpen: true }),
  closeComparePanel: () => set({ comparePanelOpen: false }),

  openCategorySidebar: () =>
    set({ categorySidebarOpen: true, categorySidebarRightActive: false }),
  closeCategorySidebar: () =>
    set({
      categorySidebarOpen: false,
      categorySidebarRightActive: false,
    }),
  setCategorySidebarRightActive: (active) =>
    set({ categorySidebarRightActive: active }),

  toggleCommonSearch: () =>
    set((s) => ({ commonSearchOpen: !s.commonSearchOpen })),
  closeCommonSearch: () => set({ commonSearchOpen: false }),

  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen })),
  closeSearch: () => set({ searchOpen: false }),

  showToasterCompare: () => {
    set({ toasterCompareVisible: true });
    setTimeout(() => set({ toasterCompareVisible: false }), TOASTER_DURATION_MS);
  },
  showToasterWishlist: () => {
    set({ toasterWishlistVisible: true });
    setTimeout(() => set({ toasterWishlistVisible: false }), TOASTER_DURATION_MS);
  },

  closeAll: () =>
    set({
      cartSidebarOpen: false,
      comparePanelOpen: false,
      categorySidebarOpen: false,
      categorySidebarRightActive: false,
      commonSearchOpen: false,
      searchOpen: false,
      mobileMenuOpen: false,
    }),
}));

function getUiSnapshot(state: UiState) {
  return {
    cartSidebarOpen: state.cartSidebarOpen,
    comparePanelOpen: state.comparePanelOpen,
    categorySidebarOpen: state.categorySidebarOpen,
    categorySidebarRightActive: state.categorySidebarRightActive,
    commonSearchOpen: state.commonSearchOpen,
    searchOpen: state.searchOpen,
    mobileMenuOpen: state.mobileMenuOpen,
    toasterCompareVisible: state.toasterCompareVisible,
    toasterWishlistVisible: state.toasterWishlistVisible,
    toggleMobileMenu: state.toggleMobileMenu,
    openCartSidebar: state.openCartSidebar,
    closeCartSidebar: state.closeCartSidebar,
    openComparePanel: state.openComparePanel,
    closeComparePanel: state.closeComparePanel,
    openCategorySidebar: state.openCategorySidebar,
    closeCategorySidebar: state.closeCategorySidebar,
    setCategorySidebarRightActive: state.setCategorySidebarRightActive,
    toggleCommonSearch: state.toggleCommonSearch,
    closeCommonSearch: state.closeCommonSearch,
    toggleSearch: state.toggleSearch,
    closeSearch: state.closeSearch,
    showToasterCompare: state.showToasterCompare,
    showToasterWishlist: state.showToasterWishlist,
    closeAll: state.closeAll,
  };
}

type UiSnapshot = ReturnType<typeof getUiSnapshot>;

let cachedUiState: UiState | null = null;
let cachedUiSnapshot: UiSnapshot | null = null;

function getStableUiSnapshot(state: UiState): UiSnapshot {
  if (state === cachedUiState && cachedUiSnapshot !== null) {
    return cachedUiSnapshot;
  }
  cachedUiState = state;
  cachedUiSnapshot = getUiSnapshot(state);
  return cachedUiSnapshot;
}

/** Cached hook for UI store - use this for destructuring like useContextElement() */
export const useUiElement = () => {
  return useUiStore(getStableUiSnapshot);
};
