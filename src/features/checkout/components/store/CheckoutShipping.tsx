import React from "react";
import MiniCheckout from "./MiniCheckout";
import Link from "next/link";

export default function CheckoutShipping() {
  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-12 col-lg-8 mt--24">
            <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray">
              <div className="rbt-checkout-wrapper-box">
                <div className="rbt-checkout-single-content">
                  <span className="rbt-checkout-step">
                    <i className="fa-regular fa-check" />
                  </span>
                  <div className="inner w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="title">Delivery Details</h5>
                      <div className="rbt-link-hover">
                        <Link href="/checkout-delivery-step-two">Edit</Link>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="h6 mb-0">Postcode</h6>
                      <p className="desc mt--12">15006</p>
                      <h6 className="h6 mb-0 mt--12">
                        Estimated delivery date
                      </h6>
                      <p className="desc mt--12">Monday, 13 | 12:00 - 16:00</p>
                    </div>
                  </div>
                </div>
                <div className="rbt-checkout-single-content active">
                  <span className="rbt-checkout-step">2</span>
                  <div className="inners">
                    <h5 className="title">Shipping Options</h5>
                    <form className="needs-validation d-block mt--12">
                      <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4 mb-4">
                        <div className="col">
                          <label htmlFor="shipping-fn" className="form-label">
                            First name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="shipping-fn"
                            required
                          />
                        </div>
                        <div className="col">
                          <label htmlFor="shipping-ln" className="form-label">
                            Last name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="shipping-ln"
                            required
                          />
                        </div>
                        <div className="col">
                          <label
                            htmlFor="shipping-email"
                            className="form-label"
                          >
                            Email address
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="shipping-email"
                            required
                          />
                        </div>
                        <div className="col">
                          <label
                            htmlFor="shipping-mobile"
                            className="form-label"
                          >
                            Mobile number
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="shipping-mobile"
                          />
                        </div>
                        <div className="col">
                          <label className="form-label">
                            City <span className="text-danger">*</span>
                          </label>
                          <div className="filter-select rbt-modern-select rbt-modern-select-btn search-by-category">
                            <select
                              className="rbt-select-activation"
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
                        <div className="col">
                          <label
                            htmlFor="shipping-postcode"
                            className="form-label"
                          >
                            Postcode <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="shipping-postcode"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="shipping-address"
                          className="form-label"
                        >
                          House / apartment number and street address
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="shipping-address"
                          required
                        />
                      </div>
                      <h3 className="h6 mb--8">
                        Billing address
                        <i
                          className="fa-regular fa-circle-info align-middle ms-2 tooltips"
                          data-tooltip="Uncheck the checkbox below if your Billing address should be different from your Shipping address."
                          data-tooltip-position="right"
                        />
                      </h3>
                      <div className="form-check mb-lg-4">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="same-address"
                          defaultChecked
                        />
                        <label
                          htmlFor="same-address"
                          className="form-check-label"
                        >
                          Same as delivery address
                        </label>
                      </div>
                      <div className="text-center mt--12 text-center rbt-btn-area">
                        <Link
                          href="/checkout-payment"
                          className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5 d-block rbt-rounded--4"
                          target="_blank"
                        >
                          <span className="icon-left">
                            <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                          </span>
                          <span>Continue Order Process</span>
                          <span className="icon-right">
                            <i className="fa-regular fa-arrow-right ml--4" />
                          </span>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="rbt-checkout-single-content">
                  <span className="rbt-checkout-step">3</span>
                  <h5 className="title">Secure Payment</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mt--24">
            <MiniCheckout />
          </div>
        </div>
      </div>
    </div>
  );
}
