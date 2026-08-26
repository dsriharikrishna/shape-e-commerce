import Image from "next/image";
import { recentViewProducts } from "@/data/products/others";
import Link from "next/link";

export default function RecentViewModal() {
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="recent-viewModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered xs-size">
        <div className="modal-content">
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
            <div className="rbt-recent-view-prd-area rbt-content-trs-portion rbt-scroll-vertical-wrapper">
              <h5 className="rbt-title mb--16 rbt-text-bold">
                Recently Viewed Items
              </h5>
              <div className="rbt-scroll-vertical">
                <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                  {recentViewProducts.map((product, index) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24"
                      key={index}
                    >
                      <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                        <div
                          className={`inner rbt-scroll-trigger fade_in animation-order-${
                            (index % 6) + 1
                          }`}
                        >
                          <div className="rbt-card-body">
                            <div className="rbt-card-rating">
                              <ul className="rbt-rating-icon-list">
                                {[...Array(4)].map((_, i) => (
                                  <li key={i}>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                ))}
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                              </ul>
                              <p className="rating-digit">(42)</p>
                            </div>
                            <h6 className="rbt-card-title">
                              <Link
                                href={`/product-single-default/${product.id}`}
                              >
                                {product.title}
                              </Link>
                            </h6>
                            <div className="pricing-part">
                              <del className="price-text">
                                ${product.oldPrice}
                              </del>
                              <span className="price-text">
                                ${product.price}
                              </span>
                            </div>
                          </div>
                          <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                            <Link
                              href={`/product-single-default/${product.id}`}
                            >
                              <Image src={product.imgSrc} width={100}
                                height={100} alt="Card Image" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
