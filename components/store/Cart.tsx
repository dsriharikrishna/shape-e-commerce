"use client";

import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

const FREE_SHIPPING_THRESHOLD = 250;
const SHIPPING_COST = 10;

export default function Cart() {
  const { cartProducts, totalPrice, setCartProducts, updateQuantity } =
    useContextElement();

  const removeItem = (id: string | number) => {
    setCartProducts((prev) => prev.filter((elm) => elm.id != id));
  };

  const itemTotal = (price: number, qty: number) => (price * qty).toFixed(2);
  const subtotalLabel =
    cartProducts.length === 1 ? "1 item" : `${cartProducts.length} items`;
  const shippingTotal =
    totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const orderTotal = totalPrice + shippingTotal;
  const amountToFreeShipping =
    totalPrice >= FREE_SHIPPING_THRESHOLD
      ? 0
      : FREE_SHIPPING_THRESHOLD - totalPrice;
  const freeShippingProgress =
    totalPrice >= FREE_SHIPPING_THRESHOLD
      ? 100
      : Math.min(100, (totalPrice / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
      <div className="container">
        <div className="row row--12">
          <div className="col-lg-12">
            <div className="rbt-component-section-title d-flex flex-coloumn justify-content-center align-items-center p-0 mb--24 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Shopping Cart</span>
              </h2>
              <div className="rbt-quick-info-tag d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9706 14.9359C18.8148 18.8649 15.7493 22 11.9891 22C8.12909 22 5 18.5858 5 14.6221C5 14.0924 4.99101 13.0336 5.74352 11.2472C6.19387 10.1781 6.47633 9.50646 6.63574 8.89253C6.72333 8.55511 6.89367 8.01904 7.37926 8.89253C7.66559 9.40757 7.67666 10.1483 7.67666 10.1483C7.67666 10.1483 8.74197 9.28536 9.4611 7.63673C10.5153 5.21985 9.67419 3.77512 9.38675 2.77048C9.28727 2.42294 9.22481 1.79833 9.90721 2.06409C10.6025 2.33495 12.4408 3.69334 13.4017 5.12512C14.7732 7.16855 15.2605 9.128 15.2605 9.128C15.2605 9.128 15.6997 8.55268 15.8553 7.95068C16.0312 7.27089 16.0338 6.59763 16.5988 7.32285C17.1361 8.01253 17.9341 9.3086 18.3833 10.5408C19.1989 12.7784 18.9706 14.9359 18.9706 14.9359Z"
                    fill="url(#paint0_linear_47_23656)"
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
                      id="paint0_linear_47_23656"
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
                <p>
                  Limited Item,{" "}
                  <strong>
                    checkout within{" "}
                    <span className="rbt-countdown-cart">10m 00s</span>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-12 col-lg-8 mt--24">
            <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray rbt-scrollable-content">
              <table className="rbt-transparent-table-one table-variation-one mb--0">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-5">
                        <p className="rbt-text-color-gray-600 mb--0">
                          Your cart is empty.
                        </p>
                        <Link
                          href="/shop-default"
                          className="rbt-btn rbt-btn-md rbt-btn-primary mt--16"
                        >
                          Continue Shopping
                        </Link>
                      </td>
                    </tr>
                  ) : (
                    cartProducts.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <div className="cart-product-card">
                            <div className="product-thumbnail">
                              <a href={"#"}>
                                <Image
                                  alt={product.title || "Product image"}
                                  src={
                                    product.imgSrc ||
                                    "/assets/images/wishlist/wishlist-prd-1.webp"
                                  }
                                  width={278}
                                  height={212}
                                />
                                <button
                                  type="button"
                                  className="close-btn"
                                  onClick={() => removeItem(product.id)}
                                  aria-label="Remove item"
                                >
                                  <i className="fa-solid fa-xmark" />
                                </button>
                              </a>
                            </div>
                            <div className="d-flex flex-column">
                              <h6 className="rbt-wish-product-name">
                                <Link
                                  href={`/product-single-default/${product.id}`}
                                >
                                  {product.title}
                                </Link>
                              </h6>
                              <span className="rbt-product-id">
                                <span className="rbt-text-semi-bold">SKU:</span>
                                #{product.id}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6 className="price-text">
                            ${product.price.toFixed(2)}
                          </h6>
                        </td>
                        <td>
                          <div className="rbt-qty-area rbt-qty-sm">
                            <button
                              type="button"
                              className="qty-item-btn qty-item-btn-decr"
                              onClick={() => {
                                if (product.quantity > 1) {
                                  updateQuantity(
                                    product.id,
                                    product.quantity - 1,
                                  );
                                }
                              }}
                              aria-label="Decrease quantity"
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="items-qty-input"
                              value={product.quantity}
                              min={1}
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                if (val >= 1) updateQuantity(product.id, val);
                              }}
                            />
                            <button
                              type="button"
                              className="qty-item-btn qty-item-btn-incr"
                              onClick={() =>
                                updateQuantity(product.id, product.quantity + 1)
                              }
                              aria-label="Increase quantity"
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <div>
                            <h6 className="price-text">
                              <span className="rbt-bold--text">
                                ${itemTotal(product.price, product.quantity)}
                              </span>
                            </h6>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mt--24">
            <div className="rbt-sidebar-cart sticky-top">
              <div className="inner-wrapper">
                {/* Start Single Widget */}
                <div className="rbt-sidebar-widget">
                  <div className="rbt-inner">
                    {/* single collapase item */}
                    <div className="rbt-single-collapse-item">
                      <a
                        className="rbt-collapse-btn d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#rbt-collapse-item-1"
                        role="button"
                        aria-expanded="true"
                        aria-controls="rbt-collapse-item-1"
                      >
                        <h6 className="rbt-title rbt-text-bold mb--0">
                          <span className="mr--4">
                            <i className="fa-light fa-truck-fast" />
                          </span>
                          Estimate shipping rates
                        </h6>
                        <span className="rbt-icon">
                          <i className="fa-regular fa-chevron-down" />
                        </span>
                      </a>
                      <div className="collapse show" id="rbt-collapse-item-1">
                        <div className="rbt-offcanvas-inner-popup-card has-default-visible shipping-popup shadow-none p--0 bg-transparent">
                          <div className="rbt-offcanvas-card-inner">
                            <ul className="rbt-sidebar-list-wrapper liststyle mt--12">
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-1"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-1">
                                  <span className="rbt-lable-content">
                                    Express Delivery
                                  </span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-2"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-2">
                                  <span className="rbt-lable-content">
                                    Local Pickup :
                                    <span className="rbt-text-color-black rbt-text-bold">
                                      $10.00 (Flat Rate)
                                    </span>
                                  </span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-3"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-3">
                                  <span className="rbt-lable-content">
                                    Regular Delivery
                                  </span>
                                </label>
                              </li>
                            </ul>
                            <p className="rbt-text-color-primary rbt-text-semi-bold b2 mb--16 mt--20">
                              <span className="mr--4">
                                <i className="fa-light fa-truck-fast" />
                              </span>
                              Estimate shipping
                            </p>
                            <form>
                              <div className="rbt-input-field-grp mb--12">
                                <div className="rbt-dropdown-select filter-select rbt-modern-select search-by-category inner-width-100">
                                  <select
                                    className="w-100 rbt-select-activation"
                                    data-live-search="true"
                                    data-live-search-placeholder="Search Your City"
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
                                <input
                                  className="rbt-bg-color-white"
                                  type="text"
                                  placeholder="State / County"
                                />
                              </div>
                              <div className="rbt-input-field-grp mb--12">
                                <input
                                  className="rbt-bg-color-white"
                                  type="text"
                                  placeholder="City"
                                />
                              </div>
                              <div className="rbt-input-field-grp">
                                <input
                                  className="rbt-bg-color-white"
                                  type="text"
                                  placeholder="Postcode / ZIP"
                                />
                              </div>
                              <div className="rbt-button-group m--0 mt--16">
                                <Link
                                  href="/checkout-delivery-step-one"
                                  className="rbt-btn rbt-btn-md rbt-btn-primary"
                                >
                                  Calculate shipping
                                </Link>
                                <a
                                  href="#!"
                                  className="rbt-btn rbt-btn-md rbt-btn-gray-light text-center"
                                >
                                  Cancel
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end single collapase item */}
                    <hr className="rbt-separator rbt-separator-gray200 mb--24 mt--24" />
                    {/* start single collapase item */}
                    <div className="rbt-single-collapse-item">
                      <a
                        className="rbt-collapse-btn collapsed d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#rbt-collapse-item-2"
                        role="button"
                        aria-expanded="false"
                        aria-controls="rbt-collapse-item-2"
                      >
                        <h6 className="rbt-title rbt-text-bold mb--0">
                          <span className="mr--4">
                            <i className="fa-regular fa-ticket" />
                          </span>
                          Select or input Coupon
                        </h6>
                        <span className="rbt-icon">
                          <i className="fa-regular fa-chevron-down" />
                        </span>
                      </a>
                      <div className="collapse" id="rbt-collapse-item-2">
                        <div className="rbt-offcanvas-inner-popup-card has-default-visible shipping-popup shadow-none p--0 bg-transparent">
                          <div className="rbt-offcanvas-card-inner">
                            <div className="rbt-coupon-wrapper rbt-bg-color-gray-100">
                              <div className="swiper rbt-coupon-slide-active">
                                <div className="swiper-wrapper">
                                  {/* Start Single Slide */}
                                  <div className="swiper-slide">
                                    <div className="rbt-coupon">
                                      <div className="inner rbt-text-copy-activation">
                                        <div className="left-part">
                                          <input
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
                                              <span>
                                                12/18/2023 14:00 ~ 12/25/2023
                                                14:00
                                              </span>
                                            </li>
                                            <li>
                                              <span>
                                                The minimum spend for this
                                                coupon
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
                                  {/* End Single Slide */}
                                  {/* Start Single Slide */}
                                  <div className="swiper-slide">
                                    <div className="rbt-coupon">
                                      <div className="inner rbt-text-copy-activation">
                                        <div className="left-part">
                                          <input
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
                                              <span>
                                                12/18/2023 14:00 ~ 12/25/2023
                                                14:00
                                              </span>
                                            </li>
                                            <li>
                                              <span>
                                                The minimum spend for this
                                                coupon
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
                                  {/* End Single Slide */}
                                  {/* Start Single Slide */}
                                  <div className="swiper-slide">
                                    <div className="rbt-coupon">
                                      <div className="inner rbt-text-copy-activation">
                                        <div className="left-part">
                                          <input
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
                                              <span>
                                                12/18/2023 14:00 ~ 12/25/2023
                                                14:00
                                              </span>
                                            </li>
                                            <li>
                                              <span>
                                                The minimum spend for this
                                                coupon
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
                                </div>
                                {/* End Single Slide */}
                                {/*  */}
                                <div className="swiper-scrollbar" />
                              </div>
                            </div>
                          </div>
                          <form>
                            <div className="rbt-input-field-grp mt--24">
                              <p className="b1 mb--12 rbt-text-color-gray-600">
                                If you have coupon code, please apply it below.
                              </p>
                              <input
                                className="rbt-bg-color-white"
                                type="text"
                                placeholder="Coupon code"
                              />
                              <p className="b4 mb--0 rbt-text-color-danger mt--4">
                                Invalid Promo Code “WELCOME30”
                              </p>
                            </div>
                            <div className="rbt-button-group m--0 mt--16">
                              <button className="rbt-btn rbt-btn-md rbt-btn-primary">
                                Apply
                              </button>
                              <button className="rbt-btn rbt-btn-md rbt-btn-gray-light">
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* end single collapase item */}
                    <hr className="rbt-separator rbt-separator-gray200 mb--24 mt--24" />
                    {/* start single collapase item */}
                    <div className="rbt-single-collapse-item">
                      <a
                        className="rbt-collapse-btn collapsed d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#rbt-collapse-item-3"
                        role="button"
                        aria-expanded="false"
                        aria-controls="rbt-collapse-item-3"
                      >
                        <h6 className="rbt-title rbt-text-bold mb--0">
                          <span className="mr--4">
                            <i className="fa-regular fa-pen" />
                          </span>
                          Add note for seller
                        </h6>
                        <span className="rbt-icon">
                          <i className="fa-regular fa-chevron-down" />
                        </span>
                      </a>
                      <div className="collapse" id="rbt-collapse-item-3">
                        <div className="rbt-offcanvas-inner-popup-card has-default-visible shipping-popup shadow-none p--0 bg-transparent">
                          <div className="rbt-offcanvas-card-inner">
                            <form>
                              <div className="rbt-input-field-grp mb--12 mt--12">
                                <textarea
                                  className="rbt-text-field rbt-bg-color-white"
                                  name="message"
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  defaultValue={""}
                                />
                              </div>
                              <div className="rbt-button-group m--0 mt--16">
                                <button className="rbt-btn rbt-btn-md rbt-btn-primary">
                                  Add Note
                                </button>
                                <button className="rbt-btn rbt-btn-md rbt-btn-gray-light">
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end single collapase item */}
                  </div>
                </div>
                {/* End Single Widget */}
              </div>
              {/* Start Single Widget */}
              <div className="rbt-sidebar-widget mt--24">
                <div className="rbt-inner">
                  <div className="rbt-cart-subttotal">
                    <p>Subtotal ({subtotalLabel})</p>
                    <p className="price">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="rbt-cart-subttotal">
                    <p>Shipping</p>
                    <p className="price">
                      {shippingTotal === 0
                        ? "Free"
                        : `$${shippingTotal.toFixed(2)}`}
                    </p>
                  </div>
                  <hr className="mb--8 mt--8 rbt-bg-color-gray-200" />
                  <div className="rbt-cart-subttotal mb--12">
                    <p className="subtotal">
                      <strong>Total</strong>
                    </p>
                    <p className="price">${orderTotal.toFixed(2)}</p>
                  </div>
                  {amountToFreeShipping > 0 && (
                    <div className="offer-progress-area">
                      <p className="offer-text">
                        Add <strong>${amountToFreeShipping.toFixed(2)}</strong>{" "}
                        More To Get <strong>Free Shipping</strong>
                      </p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Shipping progress"
                        aria-valuenow={Math.round(freeShippingProgress)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar"
                          style={{ width: `${freeShippingProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="rbt-minicart-bottom mt--24">
                    <div className="checkout-btn mt--20">
                      <Link
                        className="rbt-btn w-100 text-center"
                        href={
                          cartProducts.length > 0
                            ? "/checkout-delivery-step-one"
                            : "/cart"
                        }
                      >
                        <span className="btn-text">Checkout</span>
                      </Link>
                    </div>
                    <div className="share-btn-grp rbt-link-hover">
                      <Link href="/cart" className="share-btn">
                        <i className="fa-regular fa-pen mr--4" /> View Cart
                      </Link>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#socialShareModal"
                        type="button"
                        className="share-btn"
                      >
                        <i className="fa-sharp fa-solid fa-link mr--4" /> Share
                        Cart
                      </button>
                    </div>
                    <ul className="rbt-cart-brand-list mt--24">
                      <li>
                        <a href="#!">
                          <Image
                            alt="eCommerce Brand Image"
                            src="/assets/images/payment-brand/image-01.webp"
                            width={812}
                            height={64}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Widget */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
