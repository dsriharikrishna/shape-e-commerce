import Link from "next/link";
import Image from "next/image";
export default function Footer7() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-quick-inf-area rbt-bg-color-primary ptb--24">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="rbt-inf-box-wrapper rbt-inf-box-wrapper-style-one">
                <ul className="rbt-inf-box-wrapper-list rbt-gap-sm justify-content-between">
                  <li>
                    <div className="rbt-inf-box flex-row">
                      <div className="rbt-inf-box-icon">
                        <i className="fa-light fa-truck-fast" />
                      </div>
                      <div className="rbt-inf-box-content align-items-start">
                        <h6 className="rbt-inf-box-title">Free Shipping</h6>
                        <p className="rbt-inf-box-desc">
                          From all orders over $100
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="rbt-inf-box flex-row">
                      <div className="rbt-inf-box-icon">
                        <i className="fa-light fa-headset" />
                      </div>
                      <div className="rbt-inf-box-content align-items-start">
                        <h6 className="rbt-inf-box-title">Quality Support</h6>
                        <p className="rbt-inf-box-desc">24/7 online feedback</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="rbt-inf-box flex-row">
                      <div className="rbt-inf-box-icon">
                        <i className="fa-light fa-box" />
                      </div>
                      <div className="rbt-inf-box-content align-items-start">
                        <h6 className="rbt-inf-box-title">
                          Return &amp; Refund
                        </h6>
                        <p className="rbt-inf-box-desc">
                          Return money within 30 days
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="rbt-inf-box flex-row">
                      <div className="rbt-inf-box-icon">
                        <i className="fa-light fa-ticket" />
                      </div>
                      <div className="rbt-inf-box-content align-items-start">
                        <h6 className="rbt-inf-box-title">Gift Voucher</h6>
                        <p className="rbt-inf-box-desc">
                          20% off when you shop online
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Component Area */}
      {/* Start Footer Area */}
      <footer className="rbt-footer rbt-footer-style-seven rbt-bg-color-white position-relative overflow-hidden pb--112 pb_sm--44">
        <div className="rbt-footer-top pt--48">
          <div className="container">
            <div className="row justify-content-between row--12 mt_dec--24">
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">Let Us Help You</h5>
                  <ul className="ft-link">
                    <li>
                      <Link href={`/account-info`}>Account Info</Link>
                    </li>
                    <li>
                      <Link href={`/my-order-history`}>Your Orders</Link>
                    </li>
                    <li>
                      <Link href={`/return-policy`}>Returns Policies</Link>
                    </li>
                    <li>
                      <Link href={`/my-order-history`}>Shipping Rates</Link>
                    </li>
                    <li>
                      <Link href={`/return-policy`}>Refund and Returns</Link>
                    </li>
                    <li>
                      <Link href={`/privacy-policy`}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href={`/terms-policy`}>Terms and Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">Make Money with Us</h5>
                  <ul className="ft-link">
                    <li>
                      <Link href={`/shop`}>Sell on Unimart</Link>
                    </li>
                    <li>
                      <Link href={`/shop`}>Sell Your Services</Link>
                    </li>
                    <li>
                      <Link href={`/shop`}>Sell on Business</Link>
                    </li>
                    <li>
                      <Link href={`/shop`}>Sell Your Apps</Link>
                    </li>
                    <li>
                      <Link href={`/shop`}>Become an Affiliate</Link>
                    </li>
                    <li>
                      <Link href={`/shop`}>Sell-Publish with Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">Get to Know Us</h5>
                  <ul className="ft-link">
                    <li>
                      <Link href={`/about`}>Careers for Unimart</Link>
                    </li>
                    <li>
                      <Link href={`/about`}>About Unimart</Link>
                    </li>
                    <li>
                      <Link href={`/about`}>Investor Relations</Link>
                    </li>
                    <li>
                      <Link href={`/about`}>Unimart Devices</Link>
                    </li>
                    <li>
                      <Link href={`/about`}>Customer reviews</Link>
                    </li>
                    <li>
                      <Link href={`/about`}>Social Responsibility</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">Our Stores</h5>
                  <ul className="ft-link">
                    <li>
                      <Link href={`/find-store`}>New York</Link>
                    </li>
                    <li>
                      <Link href={`/find-store`}>London SF</Link>
                    </li>
                    <li>
                      <Link href={`/find-store`}>Cockfosters BP</Link>
                    </li>
                    <li>
                      <Link href={`/find-store`}>Los Angeles</Link>
                    </li>
                    <li>
                      <Link href={`/find-store`}>Chicago</Link>
                    </li>
                    <li>
                      <Link href={`/find-store`}>Las Vegas</Link>
                    </li>
                    <li>
                      <Link href={`/find-store`}>Our Sitemap</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget">
                  <h5 className="ft-title">Download App on Mobile:</h5>
                  <ul className="ft-link">
                    <li>
                      <p>15% discount on your first purchase</p>
                    </li>
                  </ul>
                  <div className="rbt-app-store-area mt--24">
                    <ul className="rbt-app-store-list has-larger-img">
                      <li>
                        <a href="#">
                          <Image
                            alt="App Store"
                            src="/assets/images/footer/play-store-logo.webp"
                            width={271}
                            height={80}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            alt="App Store"
                            src="/assets/images/footer/apple-store-logo.webp"
                            width={249}
                            height={80}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget mt--24">
                  <h5 className="ft-title">Subscribe our newsletter</h5>
                  <ul className="ft-link">
                    <li>
                      <p>Subscribe and get discount 20% Off</p>
                    </li>
                  </ul>
                  <form
                    action="#"
                    className="rbt-newsletter-form-one rbt-newsletter-form-one-v1 mt--24"
                  >
                    <input type="email" placeholder="Enter email" />
                    <button
                      type="submit"
                      className="rbt-btn rbt-btn-md radius-round-6"
                    >
                      Subscribe
                    </button>
                    <div className="icon">
                      <i className="fa-regular fa-envelope" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid rbt-section-gap3Top">
          <div className="container">
            <hr className="rbt-separator separator-height-1 m-0 rbt-separator-gray100" />
          </div>
        </div>
        {/* Start Quick Link Area  */}
        <div className="rbt-footer-quick-link ptb--24">
          <div className="container">
            <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
              <div className="col-xxl-3 col-xl-3 col-md-6 col-12 mt--24">
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--8 justify-content-lg-end">
                  <h5 className="ft-title mb--0">Our Social Links:</h5>
                  <ul className="social-icon social-icon-sm rbt-social-default with-bg-primary justify-content-start justify-content-lg-end">
                    <li>
                      <a href="https://www.tiktok.com/">
                        <i className="fa-brands fa-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com">
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com">
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6 col-12 mt--24">
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--8 justify-content-lg-end">
                  <h5 className="ft-title mb--0">Shipping System:</h5>
                  <ul className="payment-img-link justify-content-start">
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-01.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-02.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-03.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-04.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-05.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6 col-12 mt--24">
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--8 justify-content-lg-end">
                  <h5 className="ft-title mb--0">Payment System:</h5>
                  <ul className="payment-img-link justify-content-start">
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
          </div>
        </div>
        {/* End Quick Link Area  */}
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator separator-height-1 m-0 rbt-separator-gray100" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 pb--0">
          <div className="container">
            <div className="row row--12 align-items-center justify-content-between mt_dec--24">
              <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-12 col-12 mt--24">
                <div className="logo mx-auto mx-xl-0">
                  <Link href={`/`}>
                    <Image
                      alt="Unimart Logo"
                      src="/assets/images/logo/logo.webp"
                      width={1487}
                      height={334}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 mt--24">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright 2026 ®
                  <a
                    className="rbt-text-semi-bold"
                    href="https://rainbowthemes.net/"
                  >
                    Unimart
                  </a>
                  Nextjs Template.
                </p>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12 col-12 mt--24">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-xl-end mt_sm--12 mt_md--12">
                  <li>
                    <Link href={`/return-policy`}>Refund policy</Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}>Privacy policy</Link>
                  </li>
                  <li>
                    <Link href={`/terms-policy`}>Terms &amp; conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Start WaterMark */}
            <div className="row mt--12">
              <div className="col-12">
                <div className="rbt-watermark-text rbt-watermark-color-var-1">
                  <span>Follow@Unimart</span>
                </div>
              </div>
            </div>
            {/* End WaterMark */}
          </div>
        </div>
        {/* End Copyright Area  */}
      </footer>
    </>
  );
}
