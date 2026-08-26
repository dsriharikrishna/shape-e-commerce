import Image from "next/image";
import Link from "next/link";
export default function Footer10() {
  return (
    <footer className="rbt-footer rbt-footer-style-ten rbt-bg-color-gray-light">
      <div className="rbt-footer-top rbt-section-gap2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-watermark-text rbt-watermark-color-var-1 text-center">
                <span>Follow Us@Unimart</span>
              </div>
            </div>
          </div>
          <div className="row mt_dec--24">
            <div className="col-12">
              <hr className="rbt-separator m-0" />
            </div>
          </div>
          <div className="row row--12 justify-content-between pt--32 rbt-footer-nav-wrapper">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
              <div className="footer-widget">
                <div className="logo">
                  <Link href={`/`}>
                    <Image
                      alt="Unimart Logo"
                      src="/assets/images/logo/logo.webp"
                      width={1487}
                      height={334}
                    />
                  </Link>
                </div>
                <p className="description pr--52 pr_sm--0">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software.
                </p>
                <div className="footer-widget mt--24">
                  <h5 className="ft-title mb--0">Download App on Mobile:</h5>
                  <div className="rbt-app-store-area mt--16">
                    <ul className="rbt-app-store-list">
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
                <div className="footer-widget mt--40">
                  <ul className="ft-link">
                    <li>
                      <p>Subscribe and get discount 20% Off</p>
                    </li>
                  </ul>
                  <form action="#" className="rbt-newsletter-form-one mt--24">
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
                <div className="footer-widget mt--40">
                  <ul className="ft-link">
                    <li>
                      <div className="rbt-quick-contact-box border-0 bg-transparent">
                        <a
                          href="tel:(500)80018588-5"
                          className="rbt-icon rbt-text-color-heading h2 mb--0 rbt-text-medium"
                        >
                          <i className="fa-regular fa-phone" />
                        </a>
                        <div className="rbt-quick-contact-info border-0 rbt-link-hover pl--0">
                          <p className="b1 mb--0 rbt-text-color-gray-500">
                            Need help? Call now!
                          </p>
                          <a
                            href="tel:(500)80018588-5"
                            className="rbt-text-color-heading rbt-text-bold rbt-link-hover"
                          >
                            (500) 8001 8588-5
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 col-12 mt--24">
              <div className="row row--12 mt_dec--24">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* Start Copyright Area  */}
      <div className="copyright-area copyright-style-1">
        <div className="container">
          <div className="row mt_dec--24 align-items-center justify-content-between">
            <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-12 col-12 mt--24">
              <div className="rbt-footer-social-area justify-content-center justify-content-lg-start d-flex flex-wrap rbt-gap--16">
                <p className="title mb--0">Follow Us :</p>
                <ul className="rbt-social-icon-list">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-telegram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-12 mt--24">
              <p className="rbt-link-hover text-center text-lg-start">
                Copyright 2026 ®
                <a
                  href="https://rainbowthemes.net/"
                  className="rbt-text-bold rbt-text-color-heading"
                >
                  Unimart
                </a>
                Nextjs Template.
              </p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 mt--24">
              <ul className="payment-img-link justify-content-center justify-content-lg-start justify-content-xl-end">
                <li>
                  <a href="#">
                    <Image
                      alt="Payment Brand Image"
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
      {/* End Copyright Area  */}
    </footer>
  );
}
