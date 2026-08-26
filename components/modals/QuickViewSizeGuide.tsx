export default function QuickViewSizeGuide() {
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="quickViewSizeGuideModal"
      tabIndex={-1}
      aria-labelledby="quickViewSizeGuideModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered rbt-size-guide-area">
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
            <div className="rbt-single-product-area rbt-bg-color-white rbt-content-trs-portion">
              <div className="container">
                <div className="flex-column align-items-start">
                  <h5
                    className="rbt-title rbt-modal-title"
                    id="quickViewSizeGuideModalLabel"
                  >
                    Size Guide
                  </h5>
                  <p className="rbt-modal-description">
                    Masculine Tailored Pants
                  </p>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <p className="rbt-modal-subtitle">Find Your Size</p>
                    <div className="rbt-tab rbt-round-shape-tab">
                      {/* Start tabs */}
                      <ul
                        className="nav nav-tabs rbt-tabs-primary mb--0"
                        id="rbt-sizeTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link nav-link-btn-sm active"
                            id="rbt-tab-id-1"
                            data-bs-toggle="tab"
                            data-bs-target="#rbt-tab-pane-1"
                            type="button"
                            role="tab"
                            aria-controls="rbt-tab-pane-1"
                            aria-selected="true"
                          >
                            IN
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link nav-link-btn-sm"
                            id="rbt-tab-id-2"
                            data-bs-toggle="tab"
                            data-bs-target="#rbt-tab-pane-2"
                            type="button"
                            role="tab"
                            aria-controls="rbt-tab-pane-2"
                            aria-selected="false"
                          >
                            CM
                          </button>
                        </li>
                      </ul>
                      {/* End tabs */}
                    </div>
                  </div>
                </div>
                <div className="row pt--16">
                  <div className="col-12 rbt-scrollable-content pb--8">
                    {/* Start tabs content */}
                    <div className="tab-content" id="rbt-sizeTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="rbt-tab-pane-1"
                        role="tabpanel"
                        aria-labelledby="rbt-tab-id-1"
                        tabIndex={0}
                      >
                        <div className="rbt-responsive-table">
                          <table className="rbt-sizeguide-table">
                            <tbody>
                              <tr>
                                <td>Size</td>
                                <td>US Size</td>
                                <td>Chest</td>
                                <td>Waist</td>
                                <td>Low Hip</td>
                                <td>Inseam</td>
                              </tr>
                              <tr>
                                <td>XS</td>
                                <td>0-2</td>
                                <td>0-2</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>30</td>
                              </tr>
                              <tr>
                                <td>XS</td>
                                <td>0-2</td>
                                <td>0-2</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>30</td>
                              </tr>
                              <tr>
                                <td>XS</td>
                                <td>0-2</td>
                                <td>0-2</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>30</td>
                              </tr>
                              <tr>
                                <td>XS</td>
                                <td>0-2</td>
                                <td>0-2</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>30</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="rbt-tab-pane-2"
                        role="tabpanel"
                        aria-labelledby="rbt-tab-id-2"
                        tabIndex={0}
                      >
                        <div className="rbt-responsive-table">
                          <table className="rbt-sizeguide-table">
                            <tbody>
                              <tr>
                                <td>Size</td>
                                <td>US Size</td>
                                <td>Chest</td>
                                <td>Waist</td>
                                <td>Low Hip</td>
                                <td>Inseam</td>
                              </tr>
                              <tr>
                                <td>XS</td>
                                <td>0-2</td>
                                <td>0-2</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>30</td>
                              </tr>
                              <tr>
                                <td>XS</td>
                                <td>0-2</td>
                                <td>0-2</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>30</td>
                              </tr>
                              <tr>
                                <td>XS</td>
                                <td>0-2</td>
                                <td>0-2</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>30</td>
                              </tr>
                              <tr>
                                <td>XS</td>
                                <td>0-2</td>
                                <td>0-2</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>30</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* End tabs content */}
                  </div>
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
