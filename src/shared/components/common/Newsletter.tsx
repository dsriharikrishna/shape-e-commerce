export default function Newsletter() {
  return (
    <div className="rbt-newsletter-area style--one rbt-bg-color-primary">
      <div className="container">
        <div className="row row--12 mt_dec--24 align-items-center">
          <div className="col-lg-8 mt--24 justify-content-center justify-content-md-start d-flex">
            <div className="rbt-newsletter-content-wrapper">
              <h2 className="title">
                Subscribe our <span>newsletter</span>
              </h2>
              <p className="sub-title">Subscribe and get discount 20% Off</p>
            </div>
          </div>
          <div className="col-lg-4 mt--24 d-flex justify-content-center justify-content-md-end text-center text-md-left d-flex">
            <form
              action="#"
              className="rbt-newsletter-form-one rbt-max-w-full w-100 radius-round"
            >
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="rbt-btn rbt-btn-md">
                Subscribe
              </button>
              <div className="icon">
                <i className="fa-regular fa-envelope" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
