"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useContextElement } from "@/shared/store/store";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { allProducts as products } from "@/shared/data/products";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(3, "Zip code is required"),
  country: z.string().min(2, "Country is required"),
  phone: z.string().min(7, "Phone number is required"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const { cartProducts, clearCart } = useContextElement();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      country: "United States",
      phone: "",
    },
  });

  const cartItems = cartProducts.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return {
      ...cartItem,
      product: product || {
        id: cartItem.id,
        title: "Unknown",
        price: 0,
        imgSrc: "",
      },
    };
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 15.0 : 0;
  const total = subtotal + shipping;

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Order placed:", data, cartItems);
    setIsSubmitting(false);
    setOrderPlaced(true);
    // In a real app we'd clear the cart, but for the demo we'll just show success
    if (clearCart) clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24">
        <CheckCircle2 className="h-24 w-24 text-emerald-500 mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Thank you for shopping with TryShape. Your order has been received and
          is now being processed. We've sent a confirmation email with your
          order details.
        </p>
        <Link href="/shop">
          <Button className="h-12 px-8 rounded-xl font-semibold">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/cart" className="hover:text-black transition-colors">
                Cart
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-black font-semibold">Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Billing Details */}
              <div className="lg:col-span-7 xl:col-span-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                  Billing Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      className="h-12 rounded-xl"
                      {...form.register("firstName")}
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      className="h-12 rounded-xl"
                      {...form.register("lastName")}
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    className="h-12 rounded-xl"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-red-500 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="country">Country / Region *</Label>
                  <select
                    id="country"
                    className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...form.register("country")}
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    placeholder="House number and street name"
                    className="h-12 rounded-xl"
                    {...form.register("address")}
                  />
                  {form.formState.errors.address && (
                    <p className="text-xs text-red-500 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {form.formState.errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">Town / City *</Label>
                    <Input
                      id="city"
                      className="h-12 rounded-xl"
                      {...form.register("city")}
                    />
                    {form.formState.errors.city && (
                      <p className="text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {form.formState.errors.city.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Postcode / ZIP *</Label>
                    <Input
                      id="zipCode"
                      className="h-12 rounded-xl"
                      {...form.register("zipCode")}
                    />
                    {form.formState.errors.zipCode && (
                      <p className="text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {form.formState.errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-10">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="h-12 rounded-xl"
                    {...form.register("phone")}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-xs text-red-500 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Your Order */}
              <div className="lg:col-span-5 xl:col-span-4">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-32">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Your Order
                  </h3>

                  {/* Order Items */}
                  <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between font-semibold text-gray-900 mb-2">
                      <span>Product</span>
                      <span>Subtotal</span>
                    </div>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-600 line-clamp-1 pr-4">
                          {item.product.title} × {item.quantity}
                        </span>
                        <span className="font-medium text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600 text-sm pb-4 border-b border-gray-200">
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

                  {/* Payment Methods */}
                  <div className="space-y-4 mb-8">
                    <Label className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="payment"
                        className="mt-1 h-4 w-4 text-black border-gray-300 focus:ring-black"
                        defaultChecked
                      />
                      <div>
                        <span className="block text-sm font-semibold text-gray-900">
                          Direct bank transfer
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                        </p>
                      </div>
                    </Label>
                    <Label className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="payment"
                        className="h-4 w-4 text-black border-gray-300 focus:ring-black"
                      />
                      <span className="text-sm font-semibold text-gray-900">
                        Cash on delivery
                      </span>
                    </Label>
                    <Label className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="payment"
                        className="h-4 w-4 text-black border-gray-300 focus:ring-black"
                      />
                      <span className="text-sm font-semibold text-gray-900">
                        PayPal
                      </span>
                    </Label>
                  </div>

                  <p className="text-xs text-gray-500 mb-6">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl text-base font-semibold"
                    disabled={isSubmitting || cartItems.length === 0}
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      "Place Order"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
