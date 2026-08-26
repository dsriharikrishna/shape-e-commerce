"use client";

import { create } from "zustand";
import { persist, type StorageValue } from "zustand/middleware";
import { allProducts } from "@/data/products";
import type {
  Product as ProductType,
  CartProduct as CartProductType,
} from "@/types";

export type Product = ProductType;
export type CartProduct = CartProductType;
export type ProductId = number | string;

interface StoreState {
  cartProducts: CartProduct[];
  wishList: ProductId[];
  compareItem: ProductId[];
  quickViewItem: Product;
  quickAddItem: ProductId;
  totalPrice: number;
  setCartProducts: (
    value: CartProduct[] | ((prev: CartProduct[]) => CartProduct[]),
  ) => void;
  setWishList: (
    value: ProductId[] | ((prev: ProductId[]) => ProductId[]),
  ) => void;
  setQuickViewItem: (item: Product) => void;
  setQuickAddItem: (id: ProductId) => void;
  setCompareItem: (
    value: ProductId[] | ((prev: ProductId[]) => ProductId[]),
  ) => void;
  isAddedToCartProducts: (id: ProductId) => boolean;
  addProductToCart: (id: ProductId, qty?: number) => void;
  updateQuantity: (id: ProductId, qty: number) => void;
  quantityInCart: (id: ProductId) => number;
  addToWishlist: (id: ProductId) => void;
  removeFromWishlist: (id: ProductId) => void;
  addToCompareItem: (id: ProductId) => void;
  removeFromCompareItem: (id: ProductId) => void;
  isAddedtoWishlist: (id: ProductId) => boolean;
  isAddedToCompareItem: (id: ProductId) => boolean;
}

const getTotalPrice = (cart: CartProduct[]) =>
  cart.reduce((acc, product) => acc + product.quantity * product.price, 0);

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cartProducts: [],
      wishList: [],
      compareItem: [1, 2, 3, 4],
      quickViewItem: allProducts[0] as Product,
      quickAddItem: 1,
      totalPrice: 0,

      setCartProducts: (value) =>
        set((state) => {
          const next =
            typeof value === "function" ? value(state.cartProducts) : value;
          return { cartProducts: next, totalPrice: getTotalPrice(next) };
        }),

      setWishList: (value) =>
        set((state) => ({
          wishList: typeof value === "function" ? value(state.wishList) : value,
        })),

      setQuickViewItem: (item) => set({ quickViewItem: item }),
      setQuickAddItem: (id) => set({ quickAddItem: id }),
      setCompareItem: (value) =>
        set((state) => ({
          compareItem:
            typeof value === "function" ? value(state.compareItem) : value,
        })),

      isAddedToCartProducts: (id) => {
        const cart = get().cartProducts;
        return cart.some((elm) => elm.id === id);
      },

      addProductToCart: (id, qty = 1) => {
        const { cartProducts, isAddedToCartProducts } = get();
        if (isAddedToCartProducts(id)) return;
        const product = allProducts.find((elm) => elm.id === id);
        if (!product) return;
        const item: CartProduct = {
          ...product,
          quantity: qty,
        };
        const next = [...cartProducts, item];
        set({ cartProducts: next, totalPrice: getTotalPrice(next) });
      },

      updateQuantity: (id, qty) => {
        const { cartProducts, isAddedToCartProducts } = get();
        if (!isAddedToCartProducts(id) || qty < 1) return;
        const items = cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: qty } : item,
        );
        set({ cartProducts: items, totalPrice: getTotalPrice(items) });
      },

      quantityInCart: (id) => {
        const item = get().cartProducts.find((elm) => elm.id === id);
        return item ? item.quantity : 0;
      },

      addToWishlist: (id) => {
        const { wishList } = get();
        if (wishList.includes(id)) {
          set({ wishList: wishList.filter((elm) => elm !== id) });
        } else {
          set({ wishList: [...wishList, id] });
        }
      },

      removeFromWishlist: (id) => {
        set((state) => ({
          wishList: state.wishList.filter((elm) => elm !== id),
        }));
      },

      addToCompareItem: (id) => {
        const { compareItem } = get();
        if (!compareItem.includes(id)) {
          set({ compareItem: [...compareItem, id] });
        }
      },

      removeFromCompareItem: (id) => {
        set((state) => ({
          compareItem: state.compareItem.filter((elm) => elm !== id),
        }));
      },

      isAddedtoWishlist: (id) => get().wishList.includes(id),
      isAddedToCompareItem: (id) => get().compareItem.includes(id),
    }),
    {
      name: "unimart-store",
      partialize: (state) => ({
        cartProducts: state.cartProducts,
        wishList: state.wishList,
        totalPrice: state.totalPrice,
      }),
      storage: {
        getItem: (
          name,
        ): StorageValue<{
          cartProducts: CartProduct[];
          wishList: ProductId[];
          totalPrice: number;
        }> | null => {
          if (typeof window === "undefined") return null;
          const str = window.localStorage.getItem(name);
          if (str) {
            try {
              const parsed = JSON.parse(str) as StorageValue<{
                cartProducts: CartProduct[];
                wishList: ProductId[];
                totalPrice: number;
              }>;
              if (
                parsed?.state?.cartProducts &&
                parsed.state.totalPrice == null
              ) {
                parsed.state.totalPrice = getTotalPrice(
                  parsed.state.cartProducts,
                );
              }
              return parsed;
            } catch {
              return null;
            }
          }
          // Migrate from old keys
          const cart = window.localStorage.getItem("cartList");
          const wish = window.localStorage.getItem("wishlist");
          const cartProducts = cart ? JSON.parse(cart) : [];
          const wishList = wish ? JSON.parse(wish) : [];
          if (cartProducts?.length || wishList?.length) {
            return {
              state: {
                cartProducts,
                wishList,
                totalPrice: getTotalPrice(cartProducts),
              },
              version: 0,
            };
          }
          return null;
        },
        setItem: (
          name,
          value: StorageValue<{
            cartProducts: CartProduct[];
            wishList: ProductId[];
            totalPrice: number;
          }>,
        ) => {
          if (typeof window !== "undefined") {
            window.localStorage.setItem(name, JSON.stringify(value));
          }
        },
        removeItem: (name) => {
          if (typeof window !== "undefined") {
            window.localStorage.removeItem(name);
          }
        },
      },
    },
  ),
);

function getContextSnapshot(state: StoreState) {
  return {
    cartProducts: state.cartProducts,
    setCartProducts: state.setCartProducts,
    totalPrice: state.totalPrice,
    addProductToCart: state.addProductToCart,
    isAddedToCartProducts: state.isAddedToCartProducts,
    removeFromWishlist: state.removeFromWishlist,
    addToWishlist: state.addToWishlist,
    isAddedtoWishlist: state.isAddedtoWishlist,
    quickViewItem: state.quickViewItem,
    wishList: state.wishList,
    setQuickViewItem: state.setQuickViewItem,
    quickAddItem: state.quickAddItem,
    setQuickAddItem: state.setQuickAddItem,
    addToCompareItem: state.addToCompareItem,
    isAddedToCompareItem: state.isAddedToCompareItem,
    removeFromCompareItem: state.removeFromCompareItem,
    compareItem: state.compareItem,
    setCompareItem: state.setCompareItem,
    updateQuantity: state.updateQuantity,
    quantityInCart: state.quantityInCart,
  };
}

type ContextSnapshot = ReturnType<typeof getContextSnapshot>;

let cachedState: StoreState | null = null;
let cachedSnapshot: ContextSnapshot | null = null;

function getStableContextSnapshot(state: StoreState): ContextSnapshot {
  if (state === cachedState && cachedSnapshot !== null) {
    return cachedSnapshot;
  }
  cachedState = state;
  cachedSnapshot = getContextSnapshot(state);
  return cachedSnapshot;
}

/** Same API as the old useContextElement() for drop-in replacement in existing components. */
export function useContextElement() {
  return useStore(getStableContextSnapshot);
}
