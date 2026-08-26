"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Trash2, ArrowRight, ShoppingCart } from "lucide-react";
import { useContextElement } from "@/shared/store/store";
import Header3 from "@/shared/components/layout/headers/Header3";
import Footer3 from "@/shared/components/layout/footers/Footer3";
import { Button } from "@/shared/components/ui/button";
import { allProducts as products } from "@/features/products/data/products";

export default function CartPage() {
  const { cartProducts, updateQuantity, removeFromCart } = useContextElement();

  // Hydrate cart items with full product details
  const cartItems = cartProducts.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return {
      ...cartItem,
      product: product || {
        id: cartItem.id,
        title: "Unknown Product",
        price: 0,
        imgSrc: "/assets/images/placeholder.webp",
      },
    };
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 15.0 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Header3 sticky={true} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/shop" className="hover:text-black transition-colors">
                Shop
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-black font-semibold">Cart</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="pb-4 font-semibold text-gray-900 w-1/2">
                          Product
                        </th>
                        <th className="pb-4 font-semibold text-gray-900">
                          Price
                        </th>
                        <th className="pb-4 font-semibold text-gray-900">
                          Quantity
                        </th>
                        <th className="pb-4 font-semibold text-gray-900 text-right">
                          Subtotal
                        </th>
                        <th className="pb-4 font-semibold text-gray-900"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {cartItems.map((item) => (
                        <tr key={item.id} className="group">
                          <td className="py-6">
                            <div className="flex items-center gap-4">
                              <div className="relative h-24 w-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                <Image
                                  src={item.product.imgSrc}
                                  alt={item.product.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <Link
                                href={`/product/${item.id}`}
                                className="font-semibold text-gray-900 hover:text-black transition-colors line-clamp-2"
                              >
                                {item.product.title}
                              </Link>
                            </div>
                          </td>
                          <td className="py-6 text-gray-600 font-medium">
                            ${item.product.price.toFixed(2)}
                          </td>
                          <td className="py-6">
                            <div className="flex items-center rounded-xl border border-gray-200 p-1 w-28 bg-white">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    Math.max(1, item.quantity - 1)
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                -
                              </button>
                              <span className="flex-1 text-center font-semibold text-gray-900 text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-6 text-right font-bold text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="py-6 text-right">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-2"
                              title="Remove item"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                  <div className="flex gap-4 w-full max-w-md">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="flex-1 h-12 px-4 rounded-xl border border-gray-200 focus:ring-black focus:border-black text-sm"
                    />
                    <Button variant="outline" className="h-12 rounded-xl">
                      Apply Coupon
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4">
                <div className="bg-gray-50 rounded-2xl p-8 sticky top-32">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Cart Totals
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600 pb-4 border-b border-gray-200">
                      <span>Shipping</span>
                      <span className="font-semibold text-gray-900">
                        ${shipping.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-black">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button className="w-full h-14 rounded-xl text-base font-semibold group">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-50 rounded-full mb-6">
                <ShoppingCart className="h-10 w-10 text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Looks like you haven't added any items to your cart yet. Let's
                get you back to the shop so you can discover our amazing
                products!
              </p>
              <Link href="/shop">
                <Button className="h-12 px-8 rounded-xl font-semibold">
                  Return to Shop
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer3 />
    </>
  );
}
