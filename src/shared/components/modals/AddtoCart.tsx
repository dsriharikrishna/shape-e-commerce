import Image from "next/image";
import Link from "next/link";
export default function AddToCart() {
  return (
    <div
      className="rbt-default-modal modal fade"
      id="addedcartModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered xs-size">
        <div className="modal-content p--24">
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-wishlist-added-wrapper">
            <div className="rbt-quick-info-tag d-inline-flex w-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={13}
                viewBox="0 0 16 13"
                fill="none"
              >
                <path
                  d="M3.98047 1.58203C4.36328 0.96224 4.91016 0.643229 5.62109 0.625H10.3516C11.0807 0.643229 11.6458 0.96224 12.0469 1.58203L14.5625 5.73828C14.9453 6.41276 14.9453 7.08724 14.5625 7.76172L12.0469 11.918C11.6458 12.5378 11.0807 12.8568 10.3516 12.875H5.62109C4.91016 12.8568 4.36328 12.5378 3.98047 11.918L1.4375 7.76172C1.05469 7.08724 1.05469 6.41276 1.4375 5.73828L3.98047 1.58203ZM11.1719 5.54688C11.3177 5.38281 11.3906 5.20052 11.3906 5C11.3906 4.79948 11.3177 4.61719 11.1719 4.45312C11.0078 4.30729 10.8255 4.23438 10.625 4.23438C10.4245 4.23438 10.2422 4.30729 10.0781 4.45312L7.125 7.40625L5.92188 6.20312C5.75781 6.05729 5.57552 5.98438 5.375 5.98438C5.17448 5.98438 4.99219 6.05729 4.82812 6.20312C4.68229 6.36719 4.60938 6.54948 4.60938 6.75C4.60938 6.95052 4.68229 7.13281 4.82812 7.29688L6.57812 9.04688C6.74219 9.19271 6.92448 9.26562 7.125 9.26562C7.32552 9.26562 7.50781 9.19271 7.67188 9.04688L11.1719 5.54688Z"
                  fill="#24BD25"
                />
              </svg>
              <p>
                <strong>Product has been successfully added</strong>
              </p>
            </div>
            <div className="row row--16">
              <div className="col-md-6 col-12 mt--16">
                <div className="rbt-card rbt-product-card">
                  <div className="rbt-card-img rbt-rounded--8">
                    <Link href={`/product-single-default/755`}>
                      <Image
                        alt="eCommerce Product Image"
                        src="/assets/images/product-img/cart-product/cart-product-01-lg.webp"
                        width={644}
                        height={493}
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <h6 className="rbt-title mb--0 b1">
                      <Link href={`/product-single-default/755`}>
                        Harman Kardon Aura Studio 3 Bluetooth Speaker
                      </Link>
                    </h6>
                    <div className="pricing-part mt--0">
                      <span className="price-text">$179.98</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 mt--16">
                <div className="rbt-cart-info text-center">
                  <p className="cart-quantity-text b1 rbt-text-color-heading mb--0">
                    There are <span className="number">2</span> items in your
                    cart
                  </p>
                  <div className="pricing-part justify-content-center align-items-center">
                    <p className="b3 rbt-text-color-heading rbt-text-medium mb--0">
                      Total:
                    </p>
                    <span className="price-text rbt-text-color-primary h4 mb--0">
                      $179.98
                    </span>
                  </div>
                  <a className="rbt-btn rbt-btn-sm d-block mt--16" href="#">
                    Checkout
                  </a>
                  <Link
                    className="rbt-btn rbt-btn-sm d-block rbt-btn-naked b3 text-decoration-underline mt--8 rbt-text-semi-bold"
                    href={`/cart`}
                  >
                    View My Cart
                  </Link>
                  <Link
                    className="rbt-btn rbt-btn-sm d-block rbt-btn-naked b3 text-decoration-underline mt--8 rbt-text-semi-bold"
                    href={`/shop`}
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--16" />
            <div className="rbt-rec-prd-section">
              <h6 className="rbt-title">Recommended Products</h6>
              <div className="swiper rbt-rec-prd-swiper rbt-swiper-scrollbar-bottom">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="rbt-card rbt-product-card rbt-list-view-variation list-view-md">
                      <div className="inner">
                        <div className="rbt-card-img rbt-bg-color-default">
                          <Link href={`/product-single-default/755`}>
                            <Image
                              alt="Card Image"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01.webp"
                              width={1246}
                              height={976}
                            />
                          </Link>
                        </div>
                        <div className="rbt-card-body p-0">
                          <a
                            href="#"
                            className="rbt-card-subtitle rbt-card-catagories-text"
                          >
                            Headphones
                          </a>
                          <h6 className="rbt-card-title mt--0 b4">
                            <Link href={`/product-single-default/755`}>
                              Samsung Galaxy Buds 2 Pro Earbuds
                            </Link>
                          </h6>
                          <div className="pricing-part mt--0">
                            <span className="price-text">$428.75</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="rbt-card rbt-product-card rbt-list-view-variation list-view-md">
                      <div className="inner">
                        <div className="rbt-card-img rbt-bg-color-default">
                          <Link href={`/product-single-default/755`}>
                            <Image
                              alt="Card Image"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-02.webp"
                              width={1184}
                              height={928}
                            />
                          </Link>
                        </div>
                        <div className="rbt-card-body p-0">
                          <a
                            href="#"
                            className="rbt-card-subtitle rbt-card-catagories-text"
                          >
                            Coffee Machine
                          </a>
                          <h6 className="rbt-card-title mt--0 b4">
                            <Link href={`/product-single-default/755`}>
                              Nespresso Vertuo Plus Coffee Machine
                            </Link>
                          </h6>
                          <div className="pricing-part mt--0">
                            <span className="price-text">$228.98</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="rbt-card rbt-product-card rbt-list-view-variation list-view-md">
                      <div className="inner">
                        <div className="rbt-card-img rbt-bg-color-default">
                          <Link href={`/product-single-default/755`}>
                            <Image
                              alt="Card Image"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-03.webp"
                              width={1184}
                              height={928}
                            />
                          </Link>
                        </div>
                        <div className="rbt-card-body p-0">
                          <a
                            href="#"
                            className="rbt-card-subtitle rbt-card-catagories-text"
                          >
                            Smartwatch
                          </a>
                          <h6 className="rbt-card-title mt--0 b4">
                            <Link href={`/product-single-default/755`}>
                              Fitbit Sense 2 Advanced Smartwatch
                            </Link>
                          </h6>
                          <div className="pricing-part mt--0">
                            <span className="price-text">$128.90</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-swiper-scrollbar swiper-scrollbar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
