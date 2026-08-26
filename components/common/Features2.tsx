import Image from "next/image";
export default function Features2({ justifyCenter: _justifyCenter = false }) {
  return (
    <div className="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="rbt-inf-box-wrapper rbt-inf-box-wrapper-style-one">
              <ul className="rbt-inf-box-wrapper-list justify-content-center rbt-gap--120">
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger zoom_in animation-order-1">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-truck-fast" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Free Shipping</h6>
                      <p className="rbt-inf-box-desc">
                        From all orders over $100
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger zoom_in animation-order-2">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-headset" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Quality Support</h6>
                      <p className="rbt-inf-box-desc">24/7 online feedback</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger zoom_in animation-order-3">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-box" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Return &amp; Refund</h6>
                      <p className="rbt-inf-box-desc">
                        Return money within 30 days
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger zoom_in animation-order-4">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-ticket" />
                    </div>
                    <div className="rbt-inf-box-content">
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
        {/* Start Instagram Posts Area */}
        <div className="row row--12 mt_dec--24 rbt-section-gap2Top">
          <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24">
            <div className="rbt-instapost text-center rbt-instapost-style-one">
              <div
                className="inner"
                data-bs-toggle="modal"
                data-bs-target="#instaModal"
              >
                <a href="#!" className="instapost-img">
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-1"
                    alt="Ecommerce Instagram Posts Image"
                    src="/assets/images/insta-posts/insta-post-a-01.webp"
                    width={240}
                    height={240}
                  />
                </a>
                <div className="instapost-content">
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram" />
                  </span>
                  <a href="#!" className="rbt-btn-link">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24">
            <div className="rbt-instapost text-center rbt-instapost-style-one">
              <div
                className="inner"
                data-bs-toggle="modal"
                data-bs-target="#instaModal"
              >
                <a href="#!" className="instapost-img">
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-2"
                    alt="Ecommerce Instagram Posts Image"
                    src="/assets/images/insta-posts/insta-post-a-02.webp"
                    width={240}
                    height={240}
                  />
                </a>
                <div className="instapost-content">
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram" />
                  </span>
                  <a href="#!" className="rbt-btn-link">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24">
            <div className="rbt-instapost text-center rbt-instapost-style-one">
              <div
                className="inner"
                data-bs-toggle="modal"
                data-bs-target="#instaModal"
              >
                <a href="#!" className="instapost-img">
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-3"
                    alt="Ecommerce Instagram Posts Image"
                    src="/assets/images/insta-posts/insta-post-a-03.webp"
                    width={240}
                    height={240}
                  />
                </a>
                <div className="instapost-content">
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram" />
                  </span>
                  <a href="#!" className="rbt-btn-link">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24">
            <div className="rbt-instapost text-center rbt-instapost-style-one">
              <div
                className="inner"
                data-bs-toggle="modal"
                data-bs-target="#instaModal"
              >
                <a href="#!" className="instapost-img">
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-4"
                    alt="Ecommerce Instagram Posts Image"
                    src="/assets/images/insta-posts/insta-post-a-04.webp"
                    width={240}
                    height={240}
                  />
                </a>
                <div className="instapost-content">
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram" />
                  </span>
                  <a href="#!" className="rbt-btn-link">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24">
            <div className="rbt-instapost text-center rbt-instapost-style-one">
              <div
                className="inner"
                data-bs-toggle="modal"
                data-bs-target="#instaModal"
              >
                <a href="#!" className="instapost-img">
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-5"
                    alt="Ecommerce Instagram Posts Image"
                    src="/assets/images/insta-posts/insta-post-a-05.webp"
                    width={240}
                    height={240}
                  />
                </a>
                <div className="instapost-content">
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram" />
                  </span>
                  <a href="#!" className="rbt-btn-link">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24">
            <div className="rbt-instapost text-center rbt-instapost-style-one">
              <div
                className="inner"
                data-bs-toggle="modal"
                data-bs-target="#instaModal"
              >
                <a href="#!" className="instapost-img">
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-6"
                    alt="Ecommerce Instagram Posts Image"
                    src="/assets/images/insta-posts/insta-post-a-06.webp"
                    width={240}
                    height={240}
                  />
                </a>
                <div className="instapost-content">
                  <span className="insta-icon">
                    <i className="fa-brands fa-instagram" />
                  </span>
                  <a href="#!" className="rbt-btn-link">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Instagram Posts Area */}
      </div>
    </div>
  );
}
