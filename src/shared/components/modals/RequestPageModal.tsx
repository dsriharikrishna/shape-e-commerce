export default function RequestPageModal() {
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="requestDemoModal"
      tabIndex={-1}
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
                <h5 className="rbt-title rbt-text-bold mb--8">
                  <span className="mr--4">
                    <i className="fa-regular fa-headset" />
                  </span>
                  Contact To Request a Demo
                </h5>
                <div className="rbt-info-wrapper d-flex mt--8 rbt-gap--12">
                  <div className="rbt-info-box rbt-notify-box w-100">
                    <p className="b1 mb--16">
                      Want to be Call Back when this product Queries.
                    </p>
                    {/* Start tabs content */}
                    <form>
                      <div className="rbt-input-field-grp d-flex flex-column rbt-gap--8">
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_name"
                        >
                          Your Name
                        </label>
                        <input
                          className="rbt-input-field mb--20"
                          type="text"
                          placeholder="Your Name"
                          id="req-demo_name"
                        />
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_email"
                        >
                          Your Email
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field mb--20"
                          type="email"
                          placeholder="Email"
                          id="req-demo_email"
                        />
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_title"
                        >
                          Suggested Demo Name
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field mb--20"
                          type="text"
                          placeholder="Demo Name"
                          id="req-demo_title"
                        />
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_category"
                        >
                          Suggested Demo Category Name
                        </label>
                        <input
                          className="rbt-input-field mb--20"
                          type="text"
                          placeholder="Demo Category Name"
                          id="req-demo_category"
                        />
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_example-link"
                        >
                          Example Link (Optional)
                        </label>
                        <input
                          className="rbt-input-field mb--0"
                          type="text"
                          placeholder="example.abc"
                          id="req-demo_example-link"
                        />
                      </div>
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24 "
                      >
                        Submit
                      </button>
                    </form>
                    {/* End tabs content */}
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
