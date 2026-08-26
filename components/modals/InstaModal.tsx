import Image from "next/image";
import Link from "next/link";
export default function InstaModal() {
  return (
    <div
      className="rbt-default-modal modal fade rbt-insta-single-modal has-rbt-top-folder-shape"
      id="instaModal"
      tabIndex={-1}
      aria-labelledby="instaModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-0">
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
            <div className="modal-body p-0 rbt-bg-color-white rbt-content-trs-portion">
              <div className="inner rbt-insta-single-modal">
                <div className="row row--16">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rbt-single-insta-img">
                      <Image
                        alt="Unimart instagram Single Post Image"
                        src="/assets/images/insta-posts/insta-post-single-01.webp"
                        width={1408}
                        height={1400}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="rbt-component-section-title text-center">
                          <h4 className="rbt-title" id="instaModalLabel">
                            Products In
                            <span className="rbt-bold--text">Image</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-right-modal-content">
                      {/* Start Card Area */}
                      <div className="row row--12 mb--24 mt_dec--24">
                        {/* Start Single Card  */}
                        <div className="col-lg-6 col-xl-6 col-6 mt--24">
                          <div className="rbt-card rbt-product-card">
                            <div className="rbt-card-img top-rounded-md rbt-bg-color-gray-light">
                              <Link href={`/product-single-default/755`}>
                                <Image
                                  alt="Card Image"
                                  src="/assets/images/product-img/fashion/single-insta-post-01.webp"
                                  width={548}
                                  height={462}
                                />
                              </Link>
                              <div className="rbt-product-badge rbt-product-badge-bg-primary rbt-badge-top-left--position">
                                SALE
                              </div>
                              {/* <AddtoWishlist2 product={item} /> */}
                            </div>
                            <div className="rbt-card-body">
                              <a
                                href="#"
                                className="rbt-card-subtitle rbt-card-catagories-text"
                              >
                                Ladies Baf
                              </a>
                              <h6 className="rbt-card-title">
                                <Link href={`/product-single-default/755`}>
                                  Bella HAY Side Table Oxd Awesome LadiS Bag
                                </Link>
                              </h6>
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(25)</p>
                              </div>
                              <div className="pricing-part">
                                <del className="price-text">$295.00</del>
                                <span className="price-text">$179.98</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-6 col-xl-6 col-6 mt--24">
                          <div className="rbt-card rbt-product-card">
                            <div className="rbt-card-img top-rounded-md rbt-bg-color-gray-light">
                              <Link href={`/product-single-default/755`}>
                                <Image
                                  alt="Card Image"
                                  src="/assets/images/product-img/fashion/single-insta-post-02.webp"
                                  width={548}
                                  height={462}
                                />
                              </Link>
                              {/* <AddtoWishlist2 product={item} /> */}
                            </div>
                            <div className="rbt-card-body">
                              <a
                                href="#"
                                className="rbt-card-subtitle rbt-card-catagories-text"
                              >
                                Fashion
                              </a>
                              <h6 className="rbt-card-title">
                                <Link href={`/product-single-default/755`}>
                                  Cnvrs All Star Disrupt Cx Hi and most
                                  beautifull Field Tops
                                </Link>
                              </h6>
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(25)</p>
                              </div>
                              <div className="pricing-part">
                                <del className="price-text">$295.00</del>
                                <span className="price-text">$179.98</span>
                                <span className="rbt-offer-badge">-30%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-6 col-xl-6 col-6 mt--24">
                          <div className="rbt-card rbt-product-card">
                            <div className="rbt-card-img top-rounded-md rbt-bg-color-gray-light">
                              <Link href={`/product-single-default/755`}>
                                <Image
                                  alt="Card Image"
                                  src="/assets/images/product-img/fashion/sunglass-03.webp"
                                  width={624}
                                  height={625}
                                />
                              </Link>
                              <div className="rbt-product-badge rbt-product-badge-bg-primary rbt-badge-top-left--position">
                                SALE
                              </div>
                              {/* <AddtoWishlist2 product={item} /> */}
                            </div>
                            <div className="rbt-card-body">
                              <a
                                href="#"
                                className="rbt-card-subtitle rbt-card-catagories-text"
                              >
                                Sunglass
                              </a>
                              <h6 className="rbt-card-title">
                                <Link href={`/product-single-default/755`}>
                                  HK Cordless 7 Speed With protect UV ray Hand
                                  Mixer (Blue)
                                </Link>
                              </h6>
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(25)</p>
                              </div>
                              <div className="pricing-part">
                                <del className="price-text">$295.00</del>
                                <span className="price-text">$179.98</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-6 col-xl-6 col-6 mt--24">
                          <div className="rbt-card rbt-product-card">
                            <div className="rbt-card-img top-rounded-md rbt-bg-color-gray-light">
                              <Link href={`/product-single-default/755`}>
                                <Image
                                  alt="Card Image"
                                  src="/assets/images/product-img/fashion/sunglass-04.webp"
                                  width={624}
                                  height={624}
                                />
                              </Link>
                              {/* <AddtoWishlist2 product={item} /> */}
                            </div>
                            <div className="rbt-card-body">
                              <a
                                href="#"
                                className="rbt-card-subtitle rbt-card-catagories-text"
                              >
                                Sunglass
                              </a>
                              <h6 className="rbt-card-title">
                                <Link href={`/product-single-default/755`}>
                                  Eyesafe Smart Best designed Looking protect UV
                                  ray Sunglass
                                </Link>
                              </h6>
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(25)</p>
                              </div>
                              <div className="pricing-part">
                                <del className="price-text">$295.00</del>
                                <span className="price-text">$179.98</span>
                                <span className="rbt-offer-badge">-30%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                      </div>
                      {/* End Card Area */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
