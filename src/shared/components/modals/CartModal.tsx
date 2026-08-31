"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement, useUiElement } from "@/shared/store/Context";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";

export default function CartModal() {
  const [openTool, setOpenTool] = useState(-1);
  const { cartSidebarOpen, closeCartSidebar } = useUiElement();

  const {
    cartProducts,
    totalPrice,
    setCartProducts,

    updateQuantity,
  } = useContextElement();

  const removeItem = (id: string | number) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const isInsideCart = target?.closest(".rbt-cart-side-menu");

      const isInsideQuickAccess = target?.closest(
        ".minicart-quick-access-area"
      );
      const isInsideQuickELement = target?.closest(
        ".rbt-offcanvas-inner-popup"
      );

      if (!isInsideQuickAccess && !isInsideQuickELement && isInsideCart) {
        setOpenTool(-1);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[9999] transition-all duration-300 pointer-events-none",
          cartSidebarOpen ? "pointer-events-auto" : ""
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-300",
            cartSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
            openTool !== -1 ? "bg-black/80" : ""
          )}
          onClick={closeCartSidebar}
        />

        {/* Drawer Content */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-[400px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col pointer-events-auto",
            cartSidebarOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="px-6 py-4 border-b border-gray-100 flex flex-col gap-2 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <i className="fa-sharp fa-regular fa-cart-shopping" />
                <span className="m-0 flex items-center">
                  Your cart
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full mt-2 self-start animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9706 14.9359C18.8148 18.8649 15.7493 22 11.9891 22C8.12909 22 5 18.5858 5 14.6221C5 14.0924 4.99101 13.0336 5.74352 11.2472C6.19387 10.1781 6.47633 9.50646 6.63574 8.89253C6.72333 8.55511 6.89367 8.01904 7.37926 8.89253C7.66559 9.40757 7.67666 10.1483 7.67666 10.1483C7.67666 10.1483 8.74197 9.28536 9.4611 7.63673C10.5153 5.21985 9.67419 3.77512 9.38675 2.77048C9.28727 2.42294 9.22481 1.79833 9.90721 2.06409C10.6025 2.33495 12.4408 3.69334 13.4017 5.12512C14.7732 7.16855 15.2605 9.128 15.2605 9.128C15.2605 9.128 15.6997 8.55268 15.8553 7.95068C16.0312 7.27089 16.0338 6.59763 16.5988 7.32285C17.1361 8.01253 17.9341 9.3086 18.3833 10.5408C19.1989 12.7784 18.9706 14.9359 18.9706 14.9359Z"
                    fill="url(#paint0_linear_47_2365484)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9999 22C9.23852 22 7 19.7944 7 17.0735C7 15.4318 7.67145 14.435 9.0689 13.0833C9.96366 12.2179 10.8011 11.1549 11.157 10.4311C11.2271 10.2886 11.3866 9.54605 12.0014 10.4155C12.3239 10.8714 12.8296 11.6823 13.1538 12.3744C13.7127 13.5676 13.8461 14.7239 13.8461 14.7239C13.8461 14.7239 14.3938 14.4059 14.7692 13.5871C14.8902 13.3232 15.1348 12.3241 15.8186 13.323C16.3204 14.0561 17.0097 15.3741 16.9999 17.0735C16.9999 19.7944 14.7613 22 11.9999 22Z"
                    fill="#FC9502"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.1019 16C12.8497 16 12.8497 17.4475 13.7996 19.3803C14.4321 20.6672 13.486 22 12.1019 22C10.7178 22 10 20.8271 10 19.3803C10 17.9335 11.3541 16 12.1019 16Z"
                    fill="#FCE202"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_47_2365484"
                      x1="11.9995"
                      y1="22.0148"
                      x2="11.9995"
                      y2="2.01511"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={1} stopColor="#FF4C0D" />
                      <stop offset={1} stopColor="#FC9502" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="m-0 text-xs font-medium">
                  Limited Item,{" "}
                  <strong>
                    checkout within{" "}
                    <span className="text-red-500 ml-1">10m 00s</span>
                  </strong>
                </p>
              </div>
              <div className="absolute top-4 right-4">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm hover:bg-black hover:text-white transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    closeCartSidebar();
                  }}
                >
                  <i className="fa-solid fa-xmark text-lg" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto w-full">
              <ul className="flex flex-col gap-6 p-6">
                {cartProducts.map((product, i) => (
                  <li key={i} className="flex gap-4 group relative">
                    <div className="w-[90px] shrink-0">
                      <Link href={`/product-single-default/${product.id}`} className="block rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                        <Image
                          alt="Product Image"
                          src={product.imgSrc || ""}
                          width={1246}
                          height={976}
                          className="w-full h-auto object-cover"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h6 className="text-sm font-medium text-gray-900 leading-tight mb-1 truncate">
                        <Link href={`/product-single-default/${product.id}`} className="hover:text-primary transition-colors">
                          {product.title}
                        </Link>
                      </h6>
                      <span className="text-sm text-gray-500 mb-3">
                        {product.quantity}x{" "}
                        <span className="font-semibold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                      </span>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center bg-gray-50 rounded-full border border-gray-200">
                          <button
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                            onClick={() =>
                              updateQuantity(product.id, product.quantity - 1)
                            }
                          >
                            <i className="fa-solid fa-minus text-[10px]" />
                          </button>
                          <Input
                            type="number"
                            className="w-10 h-8 p-0 text-center text-sm font-medium bg-transparent border-0 focus-visible:ring-0"
                            onChange={(e) =>
                              updateQuantity(product.id, Number(e.target.value))
                            }
                            min={1}
                            value={product.quantity}
                          />
                          <button
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                            onClick={() =>
                              updateQuantity(product.id, product.quantity + 1)
                            }
                          >
                            <i className="fa-solid fa-plus text-[10px]" />
                          </button>
                        </div>
                        <button
                          className="text-xs text-gray-500 hover:text-primary transition-colors underline underline-offset-2"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewEditCartModal"
                        >
                          <i className="fa-regular fa-pen mr-1" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                        onClick={() => removeItem(product.id)}
                      >
                        <i className="fa-solid fa-xmark text-xs" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 px-6 bg-gray-50/50">
                <a
                  href="#"
                  className={cn(
                    "flex flex-col items-center gap-1 text-xs font-medium transition-colors hover:text-primary",
                    openTool === 1 ? "text-primary" : "text-gray-500"
                  )}
                  onClick={() => setOpenTool((pre) => (pre == 1 ? -1 : 1))}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <i className="fa-regular fa-pen" />
                  </span>
                  <span className="text">Note</span>
                </a>
                <span className="h-8 w-px bg-gray-200" />
                <a
                  href="#"
                  className={cn(
                    "flex flex-col items-center gap-1 text-xs font-medium transition-colors hover:text-primary",
                    openTool === 2 ? "text-primary" : "text-gray-500"
                  )}
                  onClick={() => setOpenTool((pre) => (pre == 2 ? -1 : 2))}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <i className="fa-regular fa-truck-fast" />
                  </span>
                  <span className="text">Shipping</span>
                </a>
                <span className="h-8 w-px bg-gray-200" />
                <a
                  href="#"
                  className={cn(
                    "flex flex-col items-center gap-1 text-xs font-medium transition-colors hover:text-primary",
                    openTool === 3 ? "text-primary" : "text-gray-500"
                  )}
                  onClick={() => setOpenTool((pre) => (pre == 3 ? -1 : 3))}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <i className="fa-regular fa-ticket" />
                  </span>
                  <span className="text">Coupon</span>
                </a>
              </div>
              <div className="minicart-inc-items-area mt--12">
                <h6 className="title positin-top">You May Also Like</h6>
                <div className="bottom-area">
                  <div className="swiper rbt-dot-top-right inc-item-swiper-activation rbt-minicart-wrapper overflow-hidden">
                    <div className="swiper-wrapper">
                      {/* single slide */}
                      <div className="swiper-slide">
                        <div className="minicart-item">
                          <div className="thumbnail">
                            <Link href={`/product-single-default/755`}>
                              <Image
                                alt="Product Image"
                                src="/assets/images/product-img/electronics/electronics-bg-trans-08-a-1-hover.webp"
                                width={1246}
                                height={976}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h6 className="title">
                              <Link href={`/product-single-default/755`}>
                                Keurig K-Duo 4K Waterproof Action Vedio Camera
                              </Link>
                            </h6>
                            <span className="quantity">
                              <span className="price">$345.00</span>
                            </span>
                          </div>
                          <a
                            href="#!"
                            className="add-itembtn tooltips"
                            data-bs-toggle="modal"
                            data-bs-target="#addedcartModal"
                            data-tooltip="Add to Cart"
                          >
                            <i className="fa-regular fa-cart-plus" />
                          </a>
                        </div>
                      </div>
                      {/* single slide */}
                      <div className="swiper-slide">
                        <div className="minicart-item">
                          <div className="thumbnail">
                            <Link href={`/product-single-default/755`}>
                              <Image
                                alt="Product Image"
                                src="/assets/images/product-img/electronics/electronics-bg-trans-06-a-1-hover.webp"
                                width={1246}
                                height={976}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h6 className="title">
                              <Link href={`/product-single-default/755`}>
                                Full Amoled HD Streaming Webcam
                              </Link>
                            </h6>
                            <span className="quantity">
                              <span className="price">$189.00</span>
                            </span>
                          </div>
                          <a
                            href="#!"
                            className="add-itembtn tooltips"
                            data-bs-toggle="modal"
                            data-bs-target="#addedcartModal"
                            data-tooltip="Add to Cart"
                          >
                            <i className="fa-regular fa-cart-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-swiper-pagination" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
              <div className="flex flex-col p-6 bg-white shrink-0 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] relative z-10">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <p className="m-0">Subtotal</p>
                    <p className="m-0 font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <p className="m-0">Shipping</p>
                    <p className="m-0 font-medium text-gray-900">{totalPrice ? "$10.00" : "$0.00"}</p>
                  </div>
                  <div className="h-px w-full bg-gray-100 my-1" />
                  <div className="flex items-center justify-between">
                    <p className="m-0 text-lg font-bold text-gray-900">Total</p>
                    <p className="m-0 text-lg font-bold text-primary">
                      ${totalPrice > 10 ? (totalPrice + 10).toFixed(2) : "0.00"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl border border-primary/20 bg-primary/5">
                  <p className="text-sm text-gray-700 text-center mb-2">
                    Add <strong className="text-primary font-bold">$248.00</strong> More To Get
                    <strong className="text-primary font-bold ml-1">Free Shipping</strong>
                  </p>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500 w-[75%]" />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    className={cn(buttonVariants({ size: "lg", className: "w-full rounded-full font-bold shadow-md hover:shadow-lg transition-all" }))}
                    href="/checkout-delivery-step-one"
                  >
                    Checkout
                  </Link>
                  <div className="flex items-center justify-center gap-4 text-sm font-medium text-gray-500">
                    <Link href={`/cart`} className="hover:text-primary transition-colors flex items-center gap-1.5">
                      <i className="fa-regular fa-pen" /> View Cart
                    </Link>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#socialShareModal"
                      type="button"
                      className="hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <i className="fa-sharp fa-solid fa-link" /> Share Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
        <a href="#!" className="rbt-close-inner-popup rbt-popup-close-btn" />
        <div className="rbt-offcanvas-inner-popup">
          <div
            className={`rbt-offcanvas-inner-popup-card note-popup ${
              openTool == 1 ? "open-note-popup" : ""
            }`}
          >
            <div className="rbt-offcanvas-card-inner">
              <h6 className="rbt-title rbt-text-bold">
                <span className="mr--4">
                  <i className="fa-regular fa-pen" />
                </span>
                Add note for seller
              </h6>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="rbt-input-field-grp mb--12">
                  <Textarea
                    className="rbt-text-field"
                    name="message"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    defaultValue={""}
                  />
                </div>
                <div className="rbt-btn-group mt--16">
                  <Button className="rbt-btn-primary d-block w-100" size="md">
                    Apply
                  </Button>
                  <Button
                    className="d-block w-100 mt--8 mb--8 rbt-popup-close-btn"
                    onClick={() => setOpenTool(-1)} variant="naked" size="md"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="rbt-offcanvas-inner-popup">
          <div
            className={`rbt-offcanvas-inner-popup-card shipping-popup ${
              openTool == 2 ? "open-shipping-popup" : ""
            }`}
          >
            <div className="rbt-offcanvas-card-inner">
              <h6 className="rbt-title rbt-text-bold">
                <span className="mr--4">
                  <i className="fa-light fa-truck-fast" />
                </span>
                Estimate shipping rates
              </h6>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="rbt-input-field-grp mb--12">
                  <div className="rbt-dropdown-select filter-select rbt-modern-select search-by-category">
                    <select
                      className="w-100 rbt-select-activation"
                      data-live-search="true"
                      data-live-search-placeholder="Search City"
                    >
                      <option>Select your City</option>
                      <option>New York</option>
                      <option>London</option>
                      <option>Paris</option>
                      <option>Tokyo</option>
                      <option>Dubai</option>
                      <option>Singapore</option>
                      <option>Sydney</option>
                      <option>Berlin</option>
                      <option>Toronto</option>
                      <option>Los Angeles</option>
                    </select>
                  </div>
                </div>
                <div className="rbt-input-field-grp mb--12">
                  <Input type="text" placeholder="State / County" />
                </div>
                <div className="rbt-input-field-grp mb--12">
                  <Input type="text" placeholder="City" />
                </div>
                <div className="rbt-input-field-grp">
                  <Input type="text" placeholder="Postcode / ZIP" />
                </div>
                <div className="rbt-btn-group mt--16">
                  <Button className="rbt-btn-primary d-block w-100" size="md">
                    Calculate shipping rates
                  </Button>
                  <Button
                    className="d-block w-100 mt--8 mb--8 rbt-popup-close-btn"
                    onClick={() => setOpenTool(-1)} variant="naked" size="md"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="rbt-offcanvas-inner-popup">
          <div
            className={`rbt-offcanvas-inner-popup-card coupon-popup ${
              openTool == 3 ? "open-coupon-popup" : ""
            }`}
          >
            <div className="rbt-offcanvas-card-inner">
              <h6 className="rbt-title rbt-text-bold">
                <span className="mr--4">
                  <i className="fa-regular fa-ticket" />
                </span>
                Select or input Coupon
              </h6>
              <div className="rbt-coupon-wrapper rbt-bg-color-white">
                <div className="rbt-coupon">
                  <div className="inner rbt-text-copy-activation">
                    <div className="left-part">
                      <Input
                        type="text"
                        defaultValue="WELCOME100"
                        readOnly
                        className="rbt-coupon-code-text rbt-has-right-shepe-border rbt-copy-value-field"
                      />
                    </div>
                    <div className="coupon-details">
                      <h2 className="rbt-coupon-info-title b1">
                        UP TO 30% OFF
                      </h2>
                      <p className="rbt-coupon-info-sub-title b3 mt--4">
                        For orders over $9.90
                      </p>
                      <ul className="rbt-coupon-info-list mt--12">
                        <li>
                          <span>12/18/2023 14:00 ~ 12/25/2023 14:00</span>
                        </li>
                        <li>
                          <span>
                            The minimum spend for this coupon
                            <strong>$200.00</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="copy-icon rbt-round-btn rbt-bg-primary rbt-copy-btn"
                      data-tooltip="Copy"
                    >
                      <i className="fa-sharp fa-regular fa-copy" />
                    </button>
                  </div>
                </div>
                <div className="rbt-coupon">
                  <div className="inner rbt-text-copy-activation">
                    <div className="left-part">
                      <Input
                        type="text"
                        defaultValue="WELCOME100"
                        readOnly
                        className="rbt-coupon-code-text rbt-has-right-shepe-border rbt-copy-value-field"
                      />
                    </div>
                    <div className="coupon-details">
                      <h2 className="rbt-coupon-info-title b1">
                        UP TO 30% OFF
                      </h2>
                      <p className="rbt-coupon-info-sub-title b3 mt--4">
                        For orders over $9.90
                      </p>
                      <ul className="rbt-coupon-info-list mt--12">
                        <li>
                          <span>12/18/2023 14:00 ~ 12/25/2023 14:00</span>
                        </li>
                        <li>
                          <span>
                            The minimum spend for this coupon
                            <strong>$200.00</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="copy-icon rbt-round-btn rbt-bg-primary rbt-copy-btn"
                      data-tooltip="Copy"
                    >
                      <i className="fa-sharp fa-regular fa-copy" />
                    </button>
                  </div>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="rbt-input-field-grp mt--24">
                  <p className="b1 mb--12 rbt-text-color-gray-600">
                    If you have coupon code, please apply it below.
                  </p>
                  <Input type="text" placeholder="Coupon code" />
                </div>
                <div className="rbt-btn-group mt--16">
                  <Button className="rbt-btn-primary d-block w-100" size="md">
                    Apply
                  </Button>
                  <Button
                    className="d-block w-100 mt--8 mb--8 rbt-popup-close-btn"
                    onClick={() => setOpenTool(-1)} variant="naked" size="md"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
