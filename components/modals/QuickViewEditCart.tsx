import Image from "next/image";
export default function QuickViewEditCart() {
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="quickviewEditCartModal"
      tabIndex={-1}
      aria-labelledby="quickviewEditCartModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered rbt-cart-edit-area">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={90}
              viewBox="0 0 85 90"
              fill="none"
            >
              <path
                d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                fill="white"
              />
            </svg>
          </div>
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
          <div className="rbt-top-folder-shape-wrapper">
            {/* Start Component Area */}
            <div className="rbt-single-product-area rbt-bg-color-white rbt-content-trs-portion">
              <h5 className="rbt-title rbt-modal-title mb--16">
                Edit Option For You
              </h5>
              <div className="row row--8 mt_dec--12">
                <div className="col-md-6 col-12 mt--12">
                  <div className="rbt-cart-product-edit-area">
                    <a href="#" className="rbt-cart-product-thumb">
                      <Image
                        alt="Product Thumbnail"
                        src="/assets/images/product-single/earphone/earphone-05.webp"
                        width={1072}
                        height={824}
                      />
                    </a>
                    <div className="rbt-product-info">
                      <h6
                        className="rbt-card-title b3"
                        id="quickviewEditCartModalLabel"
                      >
                        <a href="#">
                          2021 Apple 12.9-inch iPad Pro Wi-Fi 512GB Gray Space
                        </a>
                      </h6>
                      <div className="pricing-part mb--12 mt--0">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                      </div>
                      <div className="rbt-qty-area rbt-qty-sm">
                        <button className="qty-item-btn qty-item-btn-decr">
                          <i className="fa-solid fa-minus" />
                        </button>
                        <input
                          type="number"
                          className="items-qty-input"
                          defaultValue={"05"}
                          min={"01"}
                        />
                        <button className="qty-item-btn qty-item-btn-incr">
                          <i className="fa-solid fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 mt--12 pl--32">
                  <div className="rbt-single-product-content">
                    <div className="rbt-info-wrapper d-flex mt--0">
                      <div className="prd-info-section">
                        <div className="prd-id-text">
                          <p className="text-bold">Color:</p>
                          <div className="rbt-color-select-area">
                            <ul className="rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-one"
                                  data-switcher-color="#2B2B2B"
                                  data-src="/assets/images/product-single/earphone/earphone-05.webp"
                                  data-tooltip="Black"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li className="active">
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-two"
                                  data-switcher-color="#cc999d"
                                  data-src="/assets/images/product-single/earphone/earphone-02.webp"
                                  data-tooltip="Pink"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-three"
                                  data-switcher-color="#9C9B9E"
                                  data-src="/assets/images/product-single/earphone/earphone-04.webp"
                                  data-tooltip="Dark"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-four"
                                  data-switcher-color="#F2EDE7"
                                  data-src="/assets/images/product-single/earphone/earphone-03.webp"
                                  data-tooltip="White"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-five rbt-switcher--disable disabled"
                                  data-switcher-color="#a09fa4"
                                  data-src="/assets/images/product-single/earphone/earphone-03.webp"
                                  data-tooltip="White"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex justify-content-between mt--12">
                      <div className="product-styles-grp d-flex mt--0">
                        <p className="text-bold title">Size :</p>
                        <div className="single-prd-select-area rbt-bg-color-brand-50 rbt-radius">
                          <div className="rbt-modern-select single-prd-select rbt-sm-size">
                            <select className="rbt-select-activation">
                              <option>Extra Large</option>
                              <option>Large</option>
                              <option>Medium</option>
                              <option>Small</option>
                              <option>Extra Small</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--12">
                      <div className="product-styles-grp d-flex mt--0">
                        <p className="text-bold title">Style :</p>
                        <div className="content d-flex flex-wrap">
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn active"
                            href="#"
                          >
                            Headphones Only
                          </a>
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm disabled"
                            href="#"
                          >
                            Headphones + Charging Stand
                          </a>
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                            href="#"
                          >
                            Charging Stand
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <a
                    className="rbt-btn d-block text-center rbt-btn-sm rbt-square-btn has-left-icon mt--24 mt_sm--16"
                    href="#"
                  >
                    <i className="fa-regular fa-cart-shopping" />
                    Update Cart
                  </a>
                </div>
              </div>
            </div>
            {/* End Component Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
