import Image from "next/image";
import Link from "next/link";
import InfoSection3 from "./footerSections/InfoSection3";
export default function Footer6() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-collapsible-content-section rbt-section-gap2 rbt-bg-color-white">
        <div className="container">
          <InfoSection3 />
        </div>
      </div>
      {/* End Component Area */}
      <footer className="rbt-footer rbt-footer-style-six rbt-bg-color-primary rbt-section-gap3 pb--24">
        <div className="p-0 rbt-footer-top">
          <div className="container">
            {/* Start WaterMark */}
            <div className="row">
              <div className="col-12">
                <div className="rbt-watermark-text rbt-watermark-lg">
                  <span>Buy@Unimart</span>
                </div>
              </div>
            </div>
            {/* End WaterMark */}
            <div className="rbt-separator-mid mt--48 pb--24 mt_sm--16 ptb_sm--8 mt_dec--24">
              <hr className="rbt-separator m-0 rbt-separator-brand700 separator-height-1 has-opacity" />
            </div>
            <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
              <div className="col-xxl-3 col-xl-3 col-md-6 col-12 mt--24">
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--16 justify-content-lg-end">
                  <h5 className="ft-title mb--0">Our Social Links:</h5>
                  <ul className="social-icon social-icon-sm rbt-social-default with-bg-white justify-content-start justify-content-lg-end">
                    <li>
                      <a
                        className="rbt-text-color-white"
                        href="https://www.linkedin.com"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="rbt-text-color-white"
                        href="https://www.facebook.com"
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="rbt-text-color-white"
                        href="https://web.whatsapp.com/"
                      >
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="rbt-text-color-white"
                        href="https://www.instagram.com/"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="rbt-text-color-white"
                        href="https://www.pinterest.com/"
                      >
                        <i className="fa-brands fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6 col-12 mt--24">
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--16 justify-content-lg-end">
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
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--16 justify-content-lg-end">
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
            <div className="rbt-separator-mid ptb--32">
              <hr className="rbt-separator m-0 rbt-separator-brand700 separator-height-1 has-opacity" />
            </div>
            <div className="row row--12 mt_dec--24 justify-content-between">
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
                      <Link href={`/shop`}>Advertise Products</Link>
                    </li>
                    <li>
                      <Link href={`/shop`}>Sell-Publish</Link>
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
                    <li>
                      <Link href={`/find-store`}>Store Locations</Link>
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
              <div className="col-xl-4 col-lg-5 col-md-7 col-sm-6 col-12 mt--24">
                <div className="footer-widget">
                  <h5 className="ft-title">Download App on Mobile:</h5>
                  <div className="rbt-app-store-area mt--24">
                    <ul className="rbt-app-store-list has-larger-img">
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
                    </ul>
                  </div>
                </div>
                <div className="footer-widget mt--32">
                  <h5 className="ft-title mb--8">Subscribe our newsletter</h5>
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
        <div className="rbt-separator-mid pt--48 pb--24">
          <div className="container">
            <hr className="rbt-separator m-0 rbt-separator-brand700 separator-height-1 has-opacity" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 p-0">
          <div className="container">
            <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
              <div className="col-md-6 col-12 mt--24 d-flex justify-content-center justify-content-md-start">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright 2026 ®
                  <a href="https://rainbowthemes.net/">Unimart</a> Nextjs
                  Template.
                </p>
              </div>
              <div className="col-md-6 col-12 mt--24">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-xl-end mt_sm--12 mt_md--0 mt_lg--0">
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
          </div>
        </div>
        {/* End Copyright Area  */}
      </footer>
    </>
  );
}
