import Newsletter from "../common/Newsletter";
import Image from "next/image";
import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <Newsletter />
      <footer className="rbt-footer rbt-footer-style-one rbt-bg-color-gray-light">
        <div className="rbt-footer-top rbt-section-gap2Top">
          <div className="container">
            <div className="row justify-content-between row--12 mt_dec--24 pb--40 pb_sm--24">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--24 border-end rbt-border-color-border-2">
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
                  <p className="description pr--140 pr_sm--0">
                    Worldwide electronics store since 1978. We sell over 1000+
                    branded products on our web-site.
                  </p>
                  <div className="rbt-quick-contact-info">
                    <p className="b2 title">
                      Free from fixed and mobile phones.
                    </p>
                    <a
                      className="contact-link has-lg-fsize"
                      href="tel:0800300353"
                    >
                      0 800 300-353
                    </a>
                  </div>
                  <div className="rbt-quick-contact-info">
                    <p className="b2 title">Call Center hours</p>
                    <p className="text-inf">Mon-Sun 09:00-19:00</p>
                  </div>
                  <div className="rbt-quick-contact-info d-flex rbt-gap--4 align-items-center">
                    <p className="b2 title mb--0">Email :</p>
                    <a
                      className="contact-link"
                      href="mailto:someone@example.com"
                    >
                      info@rbtshop.com
                    </a>
                  </div>
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
                    <li>
                      <Link href={`/account-notifications`}>
                        Cookie Settings
                      </Link>
                    </li>
                    <li>
                      <Link href={`/help-center`}>Help Center</Link>
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
                    <li>
                      <Link href={`/shop`}>Become an Unimart Vendor</Link>
                    </li>
                    <li>
                      <Link href={`/shop`}>Unimart Affiliation Program</Link>
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
                    <li>
                      <Link href={`/find-store`}>Unimart Near Me</Link>
                    </li>
                    <li>
                      <Link href={`/about`}>Unimart Dealership</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row pb--40 pb_sm--24">
              <div className="col-12">
                <Link href={`/product-single-electronics`}>
                  <Image
                    alt="Banner Image"
                    src="/assets/images/footer/banner-image1.png"
                    width={1320}
                    height={140}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row row--12 align-items-center mt_dec--24">
              <div className="col-lg-6 mt--24">
                <div className="rbt-footer-social-area justify-content-center justify-content-lg-start">
                  <p className="title">Follow Us :</p>
                  <ul className="social-icon social-icon-md rbt-social-default with-bg-primary justify-content-start justify-content-lg-end">
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
                        <i className="fa-brands fa-facebook-f" />
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
              <div className="col-lg-6 mt--20">
                <div className="rbt-app-store-area justify-content-center justify-content-lg-end">
                  <p className="title">Download App :</p>
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
            </div>
          </div>
        </div>
      </footer>{" "}
    </>
  );
}
