import Link from "next/link";
import Image from "next/image";

export default function ShopFilterCollapse() {
  return (
    <div className="rbt-component-area rbt-shop-filter-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--12">
            <div className="row row--12">
              <div className="col-md-12">
                <div className="rbt-shop-tools-wrapper">
                  <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper justify-content-start">
                    <h6 className="rbt-shop-tools-title">Product View :</h6>
                    <div className="rbt-product-nav-section rbt-nav-effect-activation rbt-product-nav-var-brand">
                      <ul className="rbt-product-nav-grp rbt-product-nav-grp-sm">
                        <li>
                          <a href="#" className="rbt-product-nav active">
                            <i className="fa-regular fa-tag mr--4" />
                            Discounted
                          </a>
                        </li>
                        <li>
                          <a href="#" className="rbt-product-nav">
                            <i className="fa-regular fa-border-all mr--4" /> All
                            Together
                          </a>
                        </li>
                        <li>
                          <a href="#" className="rbt-product-nav">
                            <i className="fa-regular fa-check-to-slot mr--4" />
                            In stocks
                          </a>
                        </li>
                      </ul>
                      <span className="rbt-bg-highlight" />
                    </div>
                  </div>
                  <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper">
                    <h6 className="rbt-shop-tools-title">Fast FIlter :</h6>
                    <div className="rbt-shop-filter-tag-list rbt-tag-list rbt-tag-list-rounded rbt-tag-list-var-one">
                      <a href="#">
                        <i className="fa-regular fa-truck-fast" /> Featured
                      </a>
                      <a href="#">
                        <i className="fa-sharp fa-regular fa-stars" /> Best
                        Sellers
                      </a>
                      <a href="#">
                        <i className="fa-regular fa-badge-check" /> Top Rated
                      </a>
                      <a href="#">
                        <i className="fa-regular fa-money-bill" /> New Items
                      </a>
                    </div>
                  </div>
                  <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper justify-content-end">
                    <nav className="rbt-nav-effect-activation text-center d-flex align-items-center rbt-gap--8">
                      <a
                        href="#"
                        className="transp-link b3"
                        aria-label="Previous"
                      >
                        <i className="fa-regular fa-chevron-left" />
                      </a>
                      <ul className="rbt-pagination rbt-pagination-sm d-inline-flex">
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a className="active" href="#">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-ellipsis" />
                          </a>
                        </li>
                      </ul>
                      <a href="#" className="transp-link b3" aria-label="Next">
                        <i className="fa-regular fa-chevron-right" />
                      </a>
                      <div
                        className="rbt-bg-highlight rbt-pagination-bg-highlight"
                        style={{
                          width: 40,
                          height: 40,
                          left: "358.375px",
                          top: 4,
                        }}
                      />
                    </nav>
                  </div>
                </div>
                <div className="rbt-shop-tools-wrapper rbt-shop-tools-wrapper-var-one mt--20">
                  <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                    <h6 className="rbt-shop-tools-title">
                      Showing 1–20 of 45 results
                    </h6>
                    <div className="rbt-shop-view-btn-list rbt-tag-list-rounded rbt-shop-view-menu">
                      <a
                        href="#"
                        className="tooltips"
                        data-tooltip="List Style"
                        data-tooltip-position="top"
                      >
                        <i className="fa-regular fa-list" />
                      </a>
                      <a
                        href="#"
                        className="tooltips"
                        data-tooltip="Two Column"
                        data-tooltip-position="top"
                      >
                        <i className="fa-regular fa-grid-2" />
                      </a>
                      <a
                        className="active tooltips"
                        href="#"
                        data-tooltip="Three Column"
                        data-tooltip-position="top"
                      >
                        <i className="fa-sharp fa-light fa-grid" />
                      </a>
                      <a
                        href="#"
                        className="tooltips"
                        data-tooltip="Four Column"
                        data-tooltip-position="top"
                      >
                        <i className="fa-sharp fa-light fa-grid-4" />
                      </a>
                    </div>
                  </div>
                  <div className="rbt-shop-tool-content rbt-shop-view-sort-wrapper">
                    <div className="rbt-tools-select-single">
                      <h6 className="rbt-shop-tools-title">Sort :</h6>
                      <div className="rbt-modern-select rbt-shop-view-sort-select-one">
                        <select className="rbt-select-activation">
                          <option>Sort by latest</option>
                          <option>Sort by date</option>
                          <option>Sort by oldest</option>
                          <option>Sort by type</option>
                        </select>
                      </div>
                    </div>
                    <div className="rbt-tools-select-single">
                      <h6 className="rbt-shop-tools-title">Show :</h6>
                      <div className="rbt-modern-select rbt-shop-view-sort-select-two">
                        <select className="rbt-select-activation">
                          <option>16 Items</option>
                          <option>12 Items</option>
                          <option>8 Items</option>
                          <option>4 Items</option>
                          <option>2 Items</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                    <div className="rbt-inner-search-field style-one rbt-search-field-rounded">
                      <input type="text" placeholder="Search for products" />
                      <button
                        className="rbt-round-btn search-btn"
                        type="submit"
                      >
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </div>
                  </div>
                  <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                    <h6 className="rbt-shop-tools-title">
                      <a
                        href="#"
                        className="rbt-filter-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#rbt-collapse-area"
                        aria-expanded="false"
                        aria-controls="rbt-collapse-area"
                      >
                        <i className="fa-sharp fa-regular fa-filter mr--4" />
                        <span className="filter-text">Show Filter</span>
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="rbt-shop-tools-wrapper mt--20">
                  <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper">
                    <div className="rbt-shop-filter-tag-list rbt-tag-list rbt-tag-list-sm rbt-tag-list-bg-var-one rbt-tag-list-rounded rbt-tag-cancel-var">
                      <a href="#">
                        <i className="fa-solid fa-xmark" /> Featured
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-xmark" /> Best Products
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-xmark" /> Popular
                      </a>
                      <a href="#" className="text-decoration-underline">
                        Clear All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div
                  className="rbt-filter-content collapse"
                  id="rbt-collapse-area"
                >
                  <div className="rbt-component-area ptb--24">
                    <div className="rbt-separator rbt-separator-gray200" />
                  </div>
                  <div className="row row--24 mt_dec--24">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
                      {/* Start Widget Area  */}
                      <div className="rbt-single-widget rbt-widget-categories">
                        <div className="bt-single-widget-inner">
                          <h4 className="rbt-widget-title rbt-widget-title-without-border">
                            Categories
                          </h4>
                          <div className="rbt-widget-content">
                            <ul className="rbt-sidebar-list-wrapper rbt-categories-list-check">
                              <li className="rbt-check-group">
                                <input
                                  id="cat-list-1"
                                  type="checkbox"
                                  name="cat-list-1"
                                />
                                <label htmlFor="cat-list-1">
                                  Accessories
                                  <span className="rbt-lable count">(96)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="cat-list-2"
                                  type="checkbox"
                                  name="cat-list-2"
                                />
                                <label htmlFor="cat-list-2">
                                  Best seller
                                  <span className="rbt-lable count">(12)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="cat-list-3"
                                  type="checkbox"
                                  name="cat-list-3"
                                />
                                <label htmlFor="cat-list-3">
                                  Computers &amp; Tablets
                                  <span className="rbt-lable count">(67)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="cat-list-4"
                                  type="checkbox"
                                  name="cat-list-4"
                                />
                                <label htmlFor="cat-list-4">
                                  Home Audio &amp; Theatre
                                  <span className="rbt-lable count">(30)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="cat-list-5"
                                  type="checkbox"
                                  name="cat-list-5"
                                />
                                <label htmlFor="cat-list-5">
                                  Home Theatre Accessories
                                  <span className="rbt-lable count">(89)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="cat-list-6"
                                  type="checkbox"
                                  name="cat-list-6"
                                />
                                <label htmlFor="cat-list-6">
                                  Media Streamers
                                  <span className="rbt-lable count">(37)</span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Widget Area  */}
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
                      {/* Start Widget Area  */}
                      <div className="rbt-single-widget rbt-widget-categories">
                        <div className="bt-single-widget-inner">
                          <h4 className="rbt-widget-title rbt-widget-title-without-border">
                            Filter by price
                          </h4>
                          <div className="rbt-widget-content">
                            <ul className="rbt-sidebar-list-wrapper rbt-categories-list-check">
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-fil-1"
                                  type="checkbox"
                                  name="rbt-cat-list-fil-1"
                                />
                                <label htmlFor="rbt-cat-list-fil-1">
                                  Under $25
                                  <span className="rbt-lable count">(9)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-fil-2"
                                  type="checkbox"
                                  name="rbt-cat-list-fil-2"
                                />
                                <label htmlFor="rbt-cat-list-fil-2">
                                  $25 to $50
                                  <span className="rbt-lable count">(12)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-fil-3"
                                  type="checkbox"
                                  name="rbt-cat-list-fil-3"
                                />
                                <label htmlFor="rbt-cat-list-fil-3">
                                  $50 to $100
                                  <span className="rbt-lable count">(67)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-fil-4"
                                  type="checkbox"
                                  name="rbt-cat-list-fil-4"
                                />
                                <label htmlFor="rbt-cat-list-fil-4">
                                  $100 to $200
                                  <span className="rbt-lable count">(30)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-fil-5"
                                  type="checkbox"
                                  name="rbt-cat-list-fil-5"
                                />
                                <label htmlFor="rbt-cat-list-fil-5">
                                  $200 &amp; Above
                                  <span className="rbt-lable count">(89)</span>
                                </label>
                              </li>
                            </ul>
                            <div className="rbt-price-range-slider">
                              <div
                                id="rbt-slider-range"
                                className="rbt-range-bar"
                              />
                              <p className="rbt-range-value">
                                <input type="text" id="amount" readOnly />
                              </p>
                            </div>
                            <div className="rbt-price-input-grp">
                              <input
                                type="number"
                                min={0}
                                placeholder="$ Min"
                              />
                              <input
                                type="number"
                                min={0}
                                placeholder="$ Max"
                              />
                              <a href="#" className="rbt-btn">
                                $Go
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Widget Area  */}
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
                      {/* Start Widget Area  */}
                      <div className="rbt-single-widget rbt-widget-categories">
                        <div className="bt-single-widget-inner">
                          <h4 className="rbt-widget-title rbt-widget-title-without-border pb--0">
                            Filter by color
                          </h4>
                          <div className="rbt-inner-search-field border-0 pt--16 pb--16">
                            <div className="rbt-search-input-section rbt-sm-search-section">
                              <input
                                className="rbt-filter-search-field"
                                type="text"
                                placeholder="Search and Select Product"
                              />
                              <span className="search-btn search-btn-dark bg-transparent rbt-text-color-gray-400">
                                <i className="fa-sharp fa-solid fa-magnifying-glass" />
                              </span>
                            </div>
                          </div>
                          <div className="rbt-widget-content rbt-scroll-content">
                            <ul className="rbt-sidebar-list-wrapper rbt-categories-list-color-swatch rbt-search-filter-item-list">
                              <li className="rbt-color-swatch-group">
                                <a
                                  href="#"
                                  className="rbt-color-swatch-content"
                                >
                                  <span className="rbt-color-swatch">
                                    <span className="rbt-color-swatch-bg rbt-swatch-bg-black" />
                                    <span className="rbt-color-swatch-text">
                                      Black
                                    </span>
                                  </span>
                                </a>
                                <span className="rbt-color-swatch-count">
                                  (33)
                                </span>
                              </li>
                              <li className="rbt-color-swatch-group">
                                <a
                                  href="#"
                                  className="rbt-color-swatch-content active"
                                >
                                  <span className="rbt-color-swatch">
                                    <span className="rbt-color-swatch-bg rbt-swatch-bg-blue" />
                                    <span className="rbt-color-swatch-text">
                                      Blue
                                    </span>
                                  </span>
                                </a>
                                <span className="rbt-color-swatch-count">
                                  (56)
                                </span>
                              </li>
                              <li className="rbt-color-swatch-group">
                                <a
                                  href="#"
                                  className="rbt-color-swatch-content"
                                >
                                  <span className="rbt-color-swatch">
                                    <span className="rbt-color-swatch-bg rbt-swatch-bg-brown" />
                                    <span className="rbt-color-swatch-text">
                                      Brown
                                    </span>
                                  </span>
                                </a>
                                <span className="rbt-color-swatch-count">
                                  (90)
                                </span>
                              </li>
                              <li className="rbt-color-swatch-group">
                                <a
                                  href="#"
                                  className="rbt-color-swatch-content"
                                >
                                  <span className="rbt-color-swatch">
                                    <span className="rbt-color-swatch-bg rbt-swatch-bg-gray" />
                                    <span className="rbt-color-swatch-text">
                                      Gray
                                    </span>
                                  </span>
                                </a>
                                <span className="rbt-color-swatch-count">
                                  (33)
                                </span>
                              </li>
                              <li className="rbt-color-swatch-group">
                                <a
                                  href="#"
                                  className="rbt-color-swatch-content"
                                >
                                  <span className="rbt-color-swatch">
                                    <span className="rbt-color-swatch-bg rbt-swatch-bg-green" />
                                    <span className="rbt-color-swatch-text">
                                      Green
                                    </span>
                                  </span>
                                </a>
                                <span className="rbt-color-swatch-count">
                                  (46)
                                </span>
                              </li>
                              <li className="rbt-color-swatch-group">
                                <a
                                  href="#"
                                  className="rbt-color-swatch-content"
                                >
                                  <span className="rbt-color-swatch">
                                    <span className="rbt-color-swatch-bg rbt-swatch-bg-orange" />
                                    <span className="rbt-color-swatch-text">
                                      Orange
                                    </span>
                                  </span>
                                </a>
                                <span className="rbt-color-swatch-count">
                                  (94)
                                </span>
                              </li>
                              <li className="rbt-color-swatch-group">
                                <a
                                  href="#"
                                  className="rbt-color-swatch-content"
                                >
                                  <span className="rbt-color-swatch">
                                    <span className="rbt-color-swatch-bg rbt-swatch-bg-red" />
                                    <span className="rbt-color-swatch-text">
                                      Red
                                    </span>
                                  </span>
                                </a>
                                <span className="rbt-color-swatch-count">
                                  (85)
                                </span>
                              </li>
                              <li className="rbt-color-swatch-group">
                                <a
                                  href="#"
                                  className="rbt-color-swatch-content"
                                >
                                  <span className="rbt-color-swatch">
                                    <span className="rbt-color-swatch-bg rbt-swatch-bg-yellow" />
                                    <span className="rbt-color-swatch-text">
                                      Yellow
                                    </span>
                                  </span>
                                </a>
                                <span className="rbt-color-swatch-count">
                                  (55)
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Widget Area  */}
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
                      {/* Start Widget Area  */}
                      <div className="rbt-single-widget rbt-widget-categories">
                        <div className="bt-single-widget-inner">
                          <h4 className="rbt-widget-title rbt-widget-title-without-border">
                            Brand
                          </h4>
                          <div className="rbt-widget-content">
                            <ul className="rbt-sidebar-list-wrapper rbt-categories-list-check rbt-categories-brand-list-check">
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-1"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-1">
                                  <span className="rbt-lable-content">
                                    <span className="rbt-lable-img">
                                      <Image
                                        alt="Category Image"
                                        src="/assets/images/sidebar/catagory-brand/catagory-brand-img-01.webp"
                                        width={48}
                                        height={49}
                                      />
                                    </span>
                                    <span className="rbt-lable-text">Acme</span>
                                  </span>
                                  <span className="rbt-lable-count">(96)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-2"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-2">
                                  <span className="rbt-lable-content">
                                    <span className="rbt-lable-img">
                                      <Image
                                        alt="Category Image"
                                        src="/assets/images/sidebar/catagory-brand/catagory-brand-img-02.webp"
                                        width={48}
                                        height={49}
                                      />
                                    </span>
                                    <span className="rbt-lable-text">
                                      Aurarts
                                    </span>
                                  </span>
                                  <span className="rbt-lable-count">(12)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-3"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-3">
                                  <span className="rbt-lable-content">
                                    <span className="rbt-lable-img">
                                      <Image
                                        alt="Category Image"
                                        src="/assets/images/sidebar/catagory-brand/catagory-brand-img-03.webp"
                                        width={48}
                                        height={49}
                                      />
                                    </span>
                                    <span className="rbt-lable-text">
                                      Hamofy
                                    </span>
                                  </span>
                                  <span className="rbt-lable-count">(67)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-4"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-4">
                                  <span className="rbt-lable-content">
                                    <span className="rbt-lable-img">
                                      <Image
                                        alt="Category Image"
                                        src="/assets/images/sidebar/catagory-brand/catagory-brand-img-04.webp"
                                        width={48}
                                        height={49}
                                      />
                                    </span>
                                    <span className="rbt-lable-text">
                                      Starwalks
                                    </span>
                                  </span>
                                  <span className="rbt-lable-count">(30)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-5"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-5">
                                  <span className="rbt-lable-content">
                                    <span className="rbt-lable-img">
                                      <Image
                                        alt="Category Image"
                                        src="/assets/images/sidebar/catagory-brand/catagory-brand-img-05.webp"
                                        width={48}
                                        height={48}
                                      />
                                    </span>
                                    <span className="rbt-lable-text">
                                      Massive
                                    </span>
                                  </span>
                                  <span className="rbt-lable-count">(89)</span>
                                </label>
                              </li>
                              <li className="rbt-check-group">
                                <input
                                  id="rbt-cat-list-brand-radio-6"
                                  type="radio"
                                  name="rbt-cat-list-brand-radio"
                                />
                                <label htmlFor="rbt-cat-list-brand-radio-6">
                                  <span className="rbt-lable-content">
                                    <span className="rbt-lable-img">
                                      <Image
                                        alt="Category Image"
                                        src="/assets/images/sidebar/catagory-brand/catagory-brand-img-06.webp"
                                        width={48}
                                        height={49}
                                      />
                                    </span>
                                    <span className="rbt-lable-text">
                                      Superga
                                    </span>
                                  </span>
                                  <span className="rbt-lable-count">(60)</span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Widget Area  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className="row row--12">
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-10-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-10-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                          NEW
                        </div>
                        <div className="rbt-product-badge rbt-product-badge-bg-secondary-gradient border-rounded">
                          Best Seller
                        </div>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Electronics &amp; Gadgets
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Ultra-Thin Modern Tech Quiet Noise Cancelling Laptop
                        </Link>
                      </h6>
                      <div className="rbt-card-rating">
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-bag-shopping" />
                                </span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-truck" />
                                </span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-rotate-left" />
                                </span>
                                7 Days Return Policy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <span className="price-text">$50.00 - $179.98</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-12-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-12-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-secondary border-rounded">
                          Sale
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Photography &amp; Outdoor
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Keurig Polaroid 4K Waterproof Smart Action Camera
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
                        <p className="rating-digit">(46)</p>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-3">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-03-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-03-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Watch &amp; Music
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Cubitt Smart Watch CTS Waterproof Fitness Tracker
                          Watch PRO
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
                        <p className="rating-digit">(46)</p>
                      </div>
                      <div className="pricing-part">
                        <span className="price-text">$99.98</span>
                      </div>
                      <div className="prd-btn-grp">
                        <button
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#popup-cartModal"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </button>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-11-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-11-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-bg-color-secondary border-rounded">
                          Sale
                        </div>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                      <div className="rbt-countdown-wrap rbt-content-bottom-center rbt-countdown-one bg-variation-black cd-border-style">
                        <div className="countdown" data-date="2025-01-01">
                          <div className="countdown-container days">
                            <span className="countdown-value">87</span>
                            <span className="countdown-heading">Days</span>
                          </div>
                          <div className="countdown-container hours">
                            <span className="countdown-value">23</span>
                            <span className="countdown-heading">Hours</span>
                          </div>
                          <div className="countdown-container minutes">
                            <span className="countdown-value">38</span>
                            <span className="countdown-heading">Minutes</span>
                          </div>
                          <div className="countdown-container seconds">
                            <span className="countdown-value">27</span>
                            <span className="countdown-heading">Seconds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Camera &amp; Photo
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Apple IPhone 16 PRO max 6200U with 12GB RAM Phone
                        </Link>
                      </h6>
                      <div className="rbt-card-rating">
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-bag-shopping" />
                                </span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-truck" />
                                </span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-rotate-left" />
                                </span>
                                7 Days Return Policy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card rbt-stock-out-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-6">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-05-a-2.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-05-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-disabled border-rounded">
                          Sold Out
                        </div>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Computer Accessories
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Logitech Precision 9 Button Ergonomic Diital Wireless
                          Mouse
                        </Link>
                      </h6>
                      <div className="rbt-card-rating">
                        <div className="rbt-text-group">
                          <span className="icon mr--4">
                            <i className="fa-solid fa-bag-shopping" />
                          </span>
                          90+ Sold Recently
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                          href="#!"
                          data-bs-toggle="modal"
                          data-bs-target="#notifyModal"
                        >
                          <i className="fa-regular fa-bell" /> Notify Me
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-5">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-08-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-08-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                          New
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Home Appliances
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Keurig K-Duo 4K Waterproof Action Vedio Camera
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
                        <p className="rating-digit">(46)</p>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-8">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-13-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-13-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                          Hot
                        </div>
                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                          Trending
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Mobile Accessories
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Cubitt Smart Wireless Apple 16 PRO Charging Case Set
                        </Link>
                      </h6>
                      <div className="rbt-card-rating">
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-bag-shopping" />
                                </span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-truck" />
                                </span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-rotate-left" />
                                </span>
                                7 Days Return Policy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-7">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-06-a-3.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-06-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                          Trending
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Office &amp; Streaming Equipment
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Full Amoled HD Streaming Webcam with Mic Pink webcam
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
                        <p className="rating-digit">(46)</p>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-10-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-10-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                          NEW
                        </div>
                        <div className="rbt-product-badge rbt-product-badge-bg-secondary-gradient border-rounded">
                          Best Seller
                        </div>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Electronics &amp; Gadgets
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Ultra-Thin Modern Tech Quiet Noise Cancelling Laptop
                        </Link>
                      </h6>
                      <div className="rbt-card-rating">
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-bag-shopping" />
                                </span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-truck" />
                                </span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-rotate-left" />
                                </span>
                                7 Days Return Policy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <span className="price-text">$50.00 - $179.98</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-12-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-12-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-secondary border-rounded">
                          Sale
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Photography &amp; Outdoor
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Keurig Polaroid 4K Waterproof Smart Action Camera
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
                        <p className="rating-digit">(46)</p>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-3">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-03-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-03-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Watch &amp; Music
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Cubitt Smart Watch CTS Waterproof Fitness Tracker
                          Watch PRO
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
                        <p className="rating-digit">(46)</p>
                      </div>
                      <div className="pricing-part">
                        <span className="price-text">$99.98</span>
                      </div>
                      <div className="prd-btn-grp">
                        <button
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#popup-cartModal"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </button>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <Link href={`/product-single-default`}>
                        <Image
                          className="rbt-prd-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-11-a-1.webp"
                          width={1246}
                          height={976}
                        />
                        <Image
                          className="rbt-hover-img"
                          alt="Card Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-11-a-1-hover.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-bg-color-secondary border-rounded">
                          Sale
                        </div>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlist-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                      <div className="rbt-countdown-wrap rbt-content-bottom-center rbt-countdown-one bg-variation-black cd-border-style">
                        <div className="countdown" data-date="2025-01-01">
                          <div className="countdown-container days">
                            <span className="countdown-value">87</span>
                            <span className="countdown-heading">Days</span>
                          </div>
                          <div className="countdown-container hours">
                            <span className="countdown-value">23</span>
                            <span className="countdown-heading">Hours</span>
                          </div>
                          <div className="countdown-container minutes">
                            <span className="countdown-value">38</span>
                            <span className="countdown-heading">Minutes</span>
                          </div>
                          <div className="countdown-container seconds">
                            <span className="countdown-value">27</span>
                            <span className="countdown-heading">Seconds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Camera &amp; Photo
                      </Link>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default`}>
                          Apple IPhone 16 PRO max 6200U with 12GB RAM Phone
                        </Link>
                      </h6>
                      <div className="rbt-card-rating">
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-bag-shopping" />
                                </span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-truck" />
                                </span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-rotate-left" />
                                </span>
                                7 Days Return Policy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-vertical-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
            <div className="row mt--40 mt_sm--12">
              <div className="col-12">
                <nav className="rbt-nav-effect-activation text-center">
                  <ul className="rbt-pagination d-inline-flex">
                    <li>
                      <a href="#!" aria-label="Previous" className="active">
                        <i className="fa-regular fa-chevron-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">1</a>
                    </li>
                    <li>
                      <a href="#!">2</a>
                    </li>
                    <li>
                      <a href="#!">3</a>
                    </li>
                    <li>
                      <a href="#!" aria-label="Next">
                        <i className="fa-regular fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                  <div className="rbt-bg-highlight rbt-pagination-bg-highlight" />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
