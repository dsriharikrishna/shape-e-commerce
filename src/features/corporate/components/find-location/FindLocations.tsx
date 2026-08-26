export default function FindLocations() {
  return (
    <div className="rbt-component-are">
      <div className="container">
        {/* Start section title */}
        <div className="row">
          <div className="col-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--32 p-0 border-0 text-center">
              <h2 className="rbt-title mb--8">
                <span className="rbt-text-bold">Find A Store Near You</span>
              </h2>
            </div>
          </div>
        </div>
        {/* End section title */}
        {/* Start seach area */}
        <div className="row row--12 mt_dec--24 d-flex justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt--24">
            <div className="rbt-find-locate-input-area">
              <form className="text-md-center">
                <div className="rbt-input-field-grp">
                  <span className="rbt-location-search-title">
                    Enter Zip code Or City
                  </span>
                  <input type="text" placeholder="State / County" />
                </div>
              </form>
              <button
                className="rbt-btn rbt-btn-black d-block"
                data-bs-toggle="modal"
                data-bs-target="#findStoreModal"
              >
                <i className="fa-sharp fa-regular fa-location-dot" />
                Use Curent Location
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt--24">
            <div className="rbt-find-locate-input-area">
              <form className="text-md-center">
                <div className="rbt-input-field-grp">
                  <span className="rbt-location-search-title">
                    Filter By Region/District
                  </span>
                  <div className="rbt-dropdown-select filter-select rbt-modern-select search-by-category w-100">
                    <select
                      className="rbt-select-activation w-100"
                      data-live-search="true"
                      data-live-search-placeholder="Search City"
                    >
                      <option>New York</option>
                      <option>London</option>
                      <option>Paris</option>
                      <option>Tokyo</option>
                      <option>Dubai</option>
                      <option>Singapore</option>
                      <option>Sydney</option>
                      <option>Berlin</option>
                      <option>Toronto</option>
                      <option>Los Angeles</option>
                    </select>
                  </div>
                </div>
              </form>
              <button className="rbt-btn">Search Now</button>
            </div>
          </div>
        </div>
        {/* End seach area */}
        {/* Start separator */}
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto">
            <hr className="rbt-separator rbt-separator-gray200 mt--40 mb--32" />
          </div>
        </div>
        {/* End separator */}
        {/* Start section title */}
        <div className="row">
          <div className="col-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--16 p-0 border-0 text-center">
              <h6 className="rbt-title mb--8">
                <span className="rbt-text-bold">2 Location Found</span>
              </h6>
            </div>
          </div>
        </div>
        {/* End section title */}
        {/* Start found card area */}
        <div className="row row--12 mt_dec--24 d-flex justify-content-center mb--32">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt--24">
            <div className="rbt-found-location-card">
              <span className="rbt-location-icon">
                <i className="fa-sharp fa-regular fa-location-dot" />
              </span>
              <p className="rbt-found-location-name">Public Command Center</p>
              <span className="rbt-found-location">
                Metrotech, Brooklyn, NY 11201, USA
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt--24">
            <div className="rbt-found-location-card">
              <span className="rbt-location-icon">
                <i className="fa-sharp fa-regular fa-location-dot" />
              </span>
              <p className="rbt-found-location-name">Langone Medical Center</p>
              <span className="rbt-found-location">
                239 Greene St, New York, NY, USA
              </span>
            </div>
          </div>
        </div>
        {/* End founded area */}
      </div>
    </div>
  );
}
