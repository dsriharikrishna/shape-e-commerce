"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Trash2,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

import { useContextElement } from "@/shared/store/store";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { allProducts as products } from "@/shared/data/products";

export default function Cart() {
  const { cartProducts, updateQuantity, removeFromCart } =
    useContextElement();

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

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-gray-200 bg-gray-50 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Shopping Cart
            </h1>

            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link
                href="/"
                className="transition-colors hover:text-black"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4" />

              <Link
                href="/shop"
                className="transition-colors hover:text-black"
              >
                Shop
              </Link>

              <ChevronRight className="h-4 w-4" />

              <span className="font-semibold text-black">Cart</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Cart Items */}
              <div className="lg:col-span-8">
                {/* 
                  Only horizontal scrolling is allowed here.
                  There is NO fixed height and NO vertical scrolling.
                */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="w-1/2 pb-4 font-semibold text-gray-900">
                          Product
                        </th>

                        <th className="pb-4 font-semibold text-gray-900">
                          Price
                        </th>

                        <th className="pb-4 font-semibold text-gray-900">
                          Quantity
                        </th>

                        <th className="pb-4 text-right font-semibold text-gray-900">
                          Subtotal
                        </th>

                        <th className="pb-4" />
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {cartItems.map((item) => (
                        <tr
                          key={item.id}
                          className="group"
                        >
                          {/* Product */}
                          <td className="py-6">
                            <div className="flex items-center gap-4">
                              <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                <Image
                                  src={item.product.imgSrc}
                                  alt={item.product.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <Link
                                href={`/product/${item.id}`}
                                className="line-clamp-2 font-semibold text-gray-900 transition-colors hover:text-black"
                              >
                                {item.product.title}
                              </Link>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="py-6 font-medium text-gray-600">
                            ${item.product.price.toFixed(2)}
                          </td>

                          {/* Quantity */}
                          <td className="py-6">
                            <div className="flex w-28 items-center rounded-xl border border-gray-200 bg-white p-1">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    Math.max(1, item.quantity - 1)
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-black"
                              >
                                -
                              </button>

                              <span className="flex-1 text-center text-sm font-semibold text-gray-900">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-black"
                              >
                                +
                              </button>
                            </div>
                          </td>

                          {/* Subtotal */}
                          <td className="py-6 text-right font-bold text-gray-900">
                            $
                            {(
                              item.product.price * item.quantity
                            ).toFixed(2)}
                          </td>

                          {/* Remove */}
                          <td className="py-6 text-right">
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-gray-400 transition-colors hover:text-red-500"
                              title="Remove item"
                              aria-label={`Remove ${item.product.title}`}
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Coupon */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <div className="flex w-full max-w-md gap-4">
                    <Input
                      type="text"
                      placeholder="Coupon code"
                      className="h-12 flex-1 rounded-xl border border-gray-200 px-4 text-sm focus:border-black focus:ring-black"
                    />

                    <Button
                      variant="outline"
                      className="h-12 rounded-xl"
                    >
                      Apply Coupon
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl bg-gray-50 p-8 lg:sticky lg:top-32">
                  <h3 className="mb-6 text-xl font-bold text-gray-900">
                    Cart Totals
                  </h3>

                  {/* Summary */}
                  <div className="mb-6 space-y-4">
                    {/* Subtotal */}
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>

                      <span className="font-semibold text-gray-900">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between border-b border-gray-200 pb-4 text-gray-600">
                      <span>Shipping</span>

                      <span className="font-semibold text-gray-900">
                        ${shipping.toFixed(2)}
                      </span>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-black">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Checkout */}
                  <Link href="/checkout">
                    <Button className="group h-14 w-full rounded-xl text-base font-semibold">
                      Proceed to Checkout

                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Cart */
            <div className="py-20 text-center">
              <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gray-50">
                <ShoppingCart className="h-10 w-10 text-gray-300" />
              </div>

              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Your cart is empty
              </h2>

              <p className="mx-auto mb-8 max-w-md text-gray-500">
                Looks like you haven't added any items to your cart yet.
                Let's get you back to the shop so you can discover our
                amazing products!
              </p>

              <Link href="/shop">
                <Button className="h-12 rounded-xl px-8 font-semibold">
                  Return to Shop
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}