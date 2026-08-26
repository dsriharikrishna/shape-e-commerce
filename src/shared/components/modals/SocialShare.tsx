export default function SocialShare() {
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="socialShareModal"
      tabIndex={-1}
      aria-labelledby="socialShareModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered xxs-size">
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
            <div className="rbt-bg-color-white rbt-content-trs-portion">
              <h5
                className="rbt-title mb--8 rbt-text-bold"
                id="socialShareModalLabel"
              >
                Share Options
              </h5>
              <div className="rbt-social-share-wrapper">
                <ul className="social-icon rbt-social-default mt--16 mt_sm--0 rbt-social-default-v1 lg-size justify-content-start">
                  <li>
                    <a className="facebook-btn" href="https://www.facebook.com">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="tiktok-btn" href="https://www.tiktok.com">
                      <i className="fa-brands fa-tiktok" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="pinterest-btn"
                      href="https://www.pinterest.com"
                    >
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a className="tumblr-btn" href="https://www.tumblr.com/">
                      <i className="fa-brands fa-tumblr" />
                    </a>
                  </li>
                  <li>
                    <a className="telegram-btn" href="https://www.telegram.com">
                      <i className="fa-brands fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="whatsapp-btn"
                      href="https://www.whatsapp.com/"
                    >
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a className="email-btn" href="mailto:someone@example.com">
                      <i className="fa-regular fa-envelope" />
                    </a>
                  </li>
                </ul>
                <div className="rbt-copy-link-part rbt-text-copy-activation mt--24 mt_sm--8 w-100">
                  <input
                    className="rbt-copy-value-field w-100"
                    type="text"
                    defaultValue="https://unimart.template/wishlist"
                    readOnly
                  />
                  <button
                    className="rbt-btn rbt-btn-xs has-left-icon rbt-copy-btn"
                    data-tooltip="Copy to clipboard"
                  >
                    <i className="fa-regular fa-copy" />
                    <span className="rbt-btn-text">Copy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
