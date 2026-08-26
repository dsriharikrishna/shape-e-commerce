import Image from "next/image";
import Link from "next/link";
export default function Footer11() {
  return (
    <footer className="rbt-footer rbt-footer-style-eleven rbt-bg-color-gray-light">
      <div className="p-0 rbt-footer-top pt--60">
        <div className="container">
          <div className="row row--12 mt_dec--24 justify-content-between align-items-center">
            <div className="col-xl-4 col-sm-6 col-12 mt--24">
              <div className="footer-widget border-end rbt-border-color-border">
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
                <p className="description mt--24 pr--52 pr_sm--0">
                  Unimart is your one‑stop marketplace for curated electronics, 
                  everyday essentials, and lifestyle products—delivered fast 
                  with trusted service and great prices.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mt--24">
              <div className="footer-widget">
                <h5 className="title mb--0">Our Social Links :</h5>
                <ul className="social-icon social-icon-md rbt-social-default with-bg-primary justify-content-start mt--16">
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
            <div className="col-xl-4 col-sm-12 col-12 mt--24">
              <div className="footer-widget">
                <h5 className="title mb--0">Newsletter Sign Up :</h5>
                <form action="#" className="rbt-newsletter-form-one mt--16">
                  <input
                    className="rbt-bg-color-gray-100 rbt-text-color-gray-300"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    type="submit"
                    className="rbt-btn rbt-btn-md radius-round-6"
                  >
                    Subscribe
                  </button>
                  <div className="icon rbt-text-color-gray-300">
                    <i className="fa-regular fa-envelope" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="rbt-separator-mid pt--32 pb--40">
            <hr className="rbt-separator m-0 rbt-separator-gray100" />
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
            <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24">
              <div className="footer-widget rbt-link-hover">
                <h5 className="ft-title">Make Money with Us</h5>
                <ul className="ft-link">
                  <li>
                    <Link href={`/shop`}>Sell on Unimart</Link>
                  </li>
                  <li>
                    <Link href={`/shop`}>Sell Your Services on Unimart</Link>
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
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 mt--24">
              <div className="footer-widget">
                <a href="#!">
                  <Image
                    alt="Banner Image"
                    src="/assets/images/footer/banner-image3.webp"
                    width={1072}
                    height={502}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-separator-mid pt--40">
        <div className="container">
          <hr className="rbt-separator m-0 rbt-separator-gray100" />
        </div>
      </div>
      {/* Start Copyright Area  */}
      <div className="copyright-area copyright-style-1 ptb--24">
        <div className="container">
          <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-12 mt--24">
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
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12 mt--24">
              <ul className="payment-img-link justify-content-center justify-content-xl-end mt_sm--12 mt_md--12 mt_lg--12">
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
