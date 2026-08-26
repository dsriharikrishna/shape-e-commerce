import Image from "next/image";
import Link from "next/link";
import InfoSection4 from "./footerSections/InfoSection4";
export default function Footer8() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-collapsible-content-section rbt-section-gap2 rbt-bg-color-white">
        <div className="container">
          <div className="row row--12">
            <div className="col-md-12">
              <InfoSection4 />
            </div>
          </div>
        </div>
      </div>
      {/* End Component Area */}
      <footer className="rbt-footer rbt-footer-dark rbt-footer-style-eight rbt-section-gap2Top rbt-bg-color-gray-black position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="rbt-footer-content">
            <div className="container">
              <div className="row row--12 mt_dec--24 justify-content-between align-items-center">
                <div className="col-md-5 col-sm-6 col-12 mt--24">
                  <div className="footer-widget">
                    <div className="logo">
                      <Link href={`/`}>
                        <Image
                          alt="Unimart Logo"
                          src="/assets/images/logo/logo-blackbg.webp"
                          width={1487}
                          height={334}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6 col-12 mt--24">
                  <div className="footer-widget d-flex flex-wrap align-items-center rbt-gap--16 justify-content-md-end">
                    <h5 className="title mb--0 rbt-text-color-white">
                      Subscribe us :
                    </h5>
                    <ul className="social-icon social-icon-md rbt-social-default with-bg-primary justify-content-start justify-content-lg-end">
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
              </div>
              <div className="row rbt-separator-mid">
                <div className="col-12">
                  <hr className="rbt-separator separator-height-1 mt--32 mb--32 rbt-separator-gray700" />
                </div>
              </div>
              <div className="row row--12 mt_dec--24 justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6 col-12 mt--24">
                  <div className="footer-widget">
                    <h5 className="ft-title">Contact Us</h5>
                    <ul className="ft-link">
                      <li>
                        <a
                          href="tel:+1234567890"
                          className="rbt-quick-contact-box bg-transparent"
                        >
                          <span className="rbt-icon rbt-text-color-gray-300 rbt-text-medium">
                            <i className="fa-regular fa-phone" />
                          </span>
                          <div className="rbt-quick-contact-info rbt-link-hover">
                            <p className="b4 mb--4 rbt-text-color-gray-300">
                              9AM - 8PM
                            </p>
                            <span className="rbt-text-color-brand-100 rbt-text-bold rbt-link-hover">
                              +1234 567 890
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:into@domain.com"
                          className="rbt-quick-contact-box bg-transparent"
                        >
                          <span className="rbt-icon rbt-text-color-gray-300 rbt-text-medium">
                            <i className="fa-regular fa-envelope" />
                          </span>
                          <div className="rbt-quick-contact-info rbt-link-hover">
                            <p className="b4 mb--4 rbt-text-color-gray-300">
                              9AM - 8PM
                            </p>
                            <span className="rbt-text-color-brand-100 rbt-text-bold rbt-link-hover">
                              into@domain.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="rbt-quick-contact-box bg-transparent"
                          data-bs-toggle="modal"
                          data-bs-target="#findStoreModal"
                        >
                          <span className="rbt-icon rbt-text-color-gray-300 rbt-text-medium">
                            <i className="fa-regular fa-location-dot" />
                          </span>
                          <div className="rbt-quick-contact-info rbt-link-hover">
                            <p className="b4 mb--4 rbt-text-color-gray-300">
                              9AM - 8PM
                            </p>
                            <span className="rbt-text-color-brand-100 rbt-text-bold rbt-link-hover">
                              Find Our Stores
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
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
                        <Link href={`/return-policy`}>
                          Returns &amp; Replacements
                        </Link>
                      </li>
                      <li>
                        <Link href={`/my-order-history`}>
                          Shipping Rates &amp; Policies
                        </Link>
                      </li>
                      <li>
                        <Link href={`/return-policy`}>
                          Refund and Returns Policy
                        </Link>
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
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt--24">
                  <div className="footer-widget rbt-link-hover">
                    <h5 className="ft-title">Make Money with Us</h5>
                    <ul className="ft-link">
                      <li>
                        <Link href={`/shop`}>Sell on Unimart</Link>
                      </li>
                      <li>
                        <Link href={`/shop`}>
                          Sell Your Services on Unimart
                        </Link>
                      </li>
                      <li>
                        <Link href={`/shop`}>Sell on Unimart Business</Link>
                      </li>
                      <li>
                        <Link href={`/shop`}>Sell Your Apps on Unimart</Link>
                      </li>
                      <li>
                        <Link href={`/shop`}>Become an Affiliate</Link>
                      </li>
                      <li>
                        <Link href={`/shop`}>Advertise Your Products</Link>
                      </li>
                      <li>
                        <Link href={`/shop`}>Sell-Publish with Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt--24" />
              </div>
              <div className="row">
                <div className="col-12">
                  <hr className="rbt-separator separator-height-1 mt--56 mb--0 rbt-separator-gray700" />
                </div>
              </div>
              {/* Start Copyright Area  */}
              <div className="copyright-area copyright-style-1 ptb--24">
                <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-12 mt--24">
                    <p className="rbt-link-hover rbt-text-color-gray-300 text-center text-lg-start">
                      Copyright 2026 ®
                      <a
                        href="https://rainbowthemes.net/"
                        className="rbt-text-semi-bold"
                      >
                        Unimart
                      </a>
                      Nextjs Template.
                    </p>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12 mt--24">
                    <ul className="payment-img-link">
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
                  <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-12 mt--24">
                    <ul className="copyright-link rbt-link-hover variation-2 justify-content-center justify-content-lg-start justify-content-xl-end">
                      <li>
                        <Link href={`/return-policy`}>Refund policy</Link>
                      </li>
                      <li>
                        <Link href={`/privacy-policy`}>Privacy policy</Link>
                      </li>
                      <li>
                        <Link href={`/terms-policy`}>
                          Terms &amp; conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Copyright Area  */}
            </div>
          </div>
          <div className="rbt-footer-image-wrapper">
            <Image
              alt="Image"
              src="/assets/images/footer/image1.webp"
              width={721}
              height={404}
            />
          </div>
        </div>
        <div className="rbt-footer-overlay" />
      </footer>
    </>
  );
}
