export default function NotifyModal() {
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="notifyModal"
      tabIndex={-1}
      aria-labelledby="notifyModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog xxs-size modal-dialog-centered">
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
              <div className="rbt-notify-modal-content">
                <h5
                  className="rbt-title rbt-text-bold mb--8"
                  id="notifyModalLabel"
                >
                  <span className="mr--4">
                    <i className="fa-regular fa-bell" />
                  </span>
                  Back In Stock Notification
                </h5>
                <div className="rbt-info-wrapper d-flex mt--8 rbt-gap--12">
                  <div className="rbt-info-box rbt-notify-box w-100">
                    <p className="b1 mb--16">
                      Want to be notified when this product is back in stock?
                    </p>
                    <div className="rbt-input-field-grp">
                      <input
                        className="rbt-input-field rbt-bg-color-white shadow-none plr--24"
                        type="email"
                        placeholder="Enter your e-mail"
                      />
                    </div>
                    <button className="rbt-btn rbt-btn-rounded w-100 mt--12">
                      Notify Me
                    </button>
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
