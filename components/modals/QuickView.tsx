import Image from "next/image";
export default function QuickView() {
  return (
    <div
      className="rbt-default-modal rbt-added-comparison-modal modal fade has-rbt-top-folder-shape"
      id="addedcomparisonModal"
      tabIndex={-1}
      aria-labelledby="addedcomparisonModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
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
            {/* Start Component Area */}
            <div className="rbt-comparison-popup-area rbt-bg-color-white rbt-content-trs-portion">
              <div className="inner">
                <div className="rbt-comparison-prd-box">
                  <div className="rbt-comparison-prd-img">
                    <Image
                      alt="Product Image"
                      src="/assets/images/product-img/electronics/electronics-bg-trans-01.webp"
                      width={1246}
                      height={976}
                    />
                  </div>
                  <h6
                    className="rbt-product-title"
                    id="addedcomparisonModalLabel"
                  >
                    G244F 23.8 inch FHD 4k Rapid IPS 70Hz Super Vertical
                  </h6>
                </div>
                <div className="rbt-popup-action-area text-center">
                  <span className="icon">
                    <i className="fa-sharp fa-solid fa-circle-check" />
                  </span>
                  <p className="mb--16 rbt-text-color-heading">
                    Successfully You have added <br />
                    your product comparison!
                  </p>
                  <a
                    className="rbt-btn rbt-btn-sm rbt-square-btn d-block has-left-icon mb--12"
                    href="#"
                  >
                    <i className="fa-regular fa-scale-balanced" /> Compare Now
                  </a>
                  <a
                    className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                    href="#"
                  >
                    <i className="fa-regular fa-browser" /> Browse Products
                  </a>
                </div>
              </div>
            </div>
            {/* End Component Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
