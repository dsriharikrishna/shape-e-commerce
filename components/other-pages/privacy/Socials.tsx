import Image from "next/image";

export default function Socials() {
  return (
    <div className="rbt-component-area rbt-instapost-area rbt-section-gap rbt-bg-color-white">
      <div className="wrapper plr--20">
        {/* Start Instagram Posts Area */}
        <div className="row row--12">
          <div className="col-lg-12">
            <div className="rbt-instapost-grp style--one rbt-mobile-row">
              <div className="rbt-instapost text-center rbt-instapost-style-one rbt-scroll-trigger fade_in animation-order-1">
                <div
                  className="inner"
                  data-bs-toggle="modal"
                  data-bs-target="#instaModal"
                >
                  <a href="#!" className="instapost-img">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-1"
                      alt="Ecommerce Brand Images"
                      src="/assets/images/insta-posts/insta-post-d-01.webp"
                      width={400}
                      height={400}
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
              <div className="rbt-instapost text-center rbt-instapost-style-one rbt-scroll-trigger fade_in animation-order-2">
                <div
                  className="inner"
                  data-bs-toggle="modal"
                  data-bs-target="#instaModal"
                >
                  <a href="#!" className="instapost-img">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-2"
                      alt="Ecommerce Brand Images"
                      src="/assets/images/insta-posts/insta-post-d-02.webp"
                      width={400}
                      height={400}
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
              <div className="rbt-instapost text-center rbt-instapost-style-one rbt-scroll-trigger fade_in animation-order-3">
                <div
                  className="inner"
                  data-bs-toggle="modal"
                  data-bs-target="#instaModal"
                >
                  <a href="#!" className="instapost-img">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-3"
                      alt="Ecommerce Brand Images"
                      src="/assets/images/insta-posts/insta-post-d-03.webp"
                      width={400}
                      height={400}
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
              <div className="rbt-instapost-social-area text-center rbt-scroll-trigger fade_in animation-order-1">
                <h3 className="title">
                  Follow Us On <span>@instagram</span>
                </h3>
                <p className="desc">Find out what is happening with us</p>
                <ul className="social-icon rbt-social-default with-bg-primary">
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
                </ul>
              </div>
              <div className="rbt-instapost text-center rbt-instapost-style-one rbt-scroll-trigger fade_in animation-order-4">
                <div
                  className="inner"
                  data-bs-toggle="modal"
                  data-bs-target="#instaModal"
                >
                  <a href="#!" className="instapost-img">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-4"
                      alt="Ecommerce Brand Images"
                      src="/assets/images/insta-posts/insta-post-d-04.webp"
                      width={400}
                      height={400}
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
              <div className="rbt-instapost text-center rbt-instapost-style-one rbt-scroll-trigger fade_in animation-order-5">
                <div
                  className="inner"
                  data-bs-toggle="modal"
                  data-bs-target="#instaModal"
                >
                  <a href="#!" className="instapost-img">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-5"
                      alt="Ecommerce Brand Images"
                      src="/assets/images/insta-posts/insta-post-d-05.webp"
                      width={400}
                      height={400}
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
              <div className="rbt-instapost text-center rbt-instapost-style-one rbt-scroll-trigger fade_in animation-order-6">
                <div
                  className="inner"
                  data-bs-toggle="modal"
                  data-bs-target="#instaModal"
                >
                  <a href="#!" className="instapost-img">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-6"
                      alt="Ecommerce Brand Images"
                      src="/assets/images/insta-posts/insta-post-d-06.webp"
                      width={400}
                      height={400}
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
        </div>
        {/* End Instagram Posts Area */}
      </div>
    </div>
  );
}
