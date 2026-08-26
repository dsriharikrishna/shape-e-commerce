import { Product, CartProduct } from "./product";

export interface DataContextValue {
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  totalPrice: number;
  addProductToCart: (id: number, qty?: number) => void;
  isAddedToCartProducts: (id: number) => boolean;
  removeFromWishlist: (id: number) => void;
  addToWishlist: (id: number) => void;
  isAddedtoWishlist: (id: number) => boolean;
  quickViewItem: Product;
  wishList: number[];
  setQuickViewItem: React.Dispatch<React.SetStateAction<Product>>;
  quickAddItem: number;
  setQuickAddItem: React.Dispatch<React.SetStateAction<number>>;
  addToCompareItem: (id: number) => void;
  isAddedToCompareItem: (id: number) => boolean;
  removeFromCompareItem: (id: number) => void;
  compareItem: number[];
  setCompareItem: React.Dispatch<React.SetStateAction<number[]>>;
  updateQuantity: (id: number, qty: number) => void;
  quantityInCart: (id: number) => number;
}
