"use client";

import ProductCard10 from "@/components/productCards/ProductCard10";
import { useUiElement } from "@/context/uiStore";
import { electronicsHoverVideoData } from "@/data/products/electronics";

export default function SearchDropdownCommon() {
  const { commonSearchOpen } = useUiElement();
  return (
    <div
      className={`rbt-search-dropdown rbt-common-search-dropdown-activation${commonSearchOpen ? " active" : ""}`}
    >
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title border-0 p-0 text-center">
              <h4 className="rbt-title text-start text-md-center">
                <span className="rbt-bold--text">Search For Products</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="rbt-search-form">
              <div className="input-section position-relative w-100 mr--12 mr_sm--4">
                <input
                  className="search-input"
                  type="text"
                  placeholder="What Are You Looking For?"
                />
                <i className="fa-sharp fa-regular inner-search-icon fa-magnifying-glass" />
                <button className="media-search-btn media-search-popup-activation">
                  <i className="fa-sharp fa-regular fa-camera" />
                </button>
              </div>
              <div className="submit-btn">
                <a className="rbt-btn btn-md" href="#">
                  Search
                </a>
              </div>
              <div className="rbt-media-search-section">
                <div className="rbt-media-wrapper">
                  <div className="section-title">
                    <span className="title b1">
                      Find product inspiration with Image Search
                    </span>
                  </div>
                  <div className="rbt-file-upload-container">
                    <input type="file" className="fileInput" multiple hidden />
                    <div className="file-upload-area fileUploadArea">
                      <div className="file-upload-content">
                        <span className="rbt-icon">
                          <i className="fa-solid fa-cloud-arrow-up" />
                        </span>
                        <p className="rbt-title">
                          Drag &amp; Drop Files Here{" "}
                          <span className="rbt-text-color-gray-400">Or</span>
                        </p>
                        <button className="browseFilesButton rbt-btn rbt-btn-sm">
                          Browse Files
                        </button>
                      </div>
                      <div className="fileList file-list" />
                    </div>
                    <p className="fileCount">0 of 10</p>
                  </div>
                  <div className="rbt-copy-link-part rbt-text-copy-activation">
                    <input
                      className="rbt-copy-value-field"
                      type="text"
                      defaultValue="https://unimart.template/wishlist"
                      readOnly
                    />
                    <button
                      className="rbt-btn rbt-btn-xs has-left-icon rbt-copy-btn"
                      data-tooltip="Copy"
                    >
                      <i className="fa-regular fa-copy" />
                      <span className="rbt-btn-text">Copy</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="rbt-round-btn rbt-ms-dismiss-btn"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
              </div>
              <a href="#" className="rbt-ms-dismiss-outsider" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="border-0 p-0 text-left title-sm-fsize">
              <h6 className="title">
                <span className="rbt-bold--text">Popular searches</span>
              </h6>
            </div>
          </div>
          <div className="rbt-search-list-wrapper rbt-tag-list rbt-tag-list-rounded-lg">
            <a href="#">Fashion</a>
            <a href="#">Interior</a>
            <a href="#">Nature</a>
            <a href="#">Elementor</a>
            <a href="#">Art</a>
            <a href="#">Aliexpress</a>
            <a href="#">Technology</a>
            <a href="#">Texture</a>
            <a href="#">Architecture</a>
            <a href="#">Business</a>
            <a href="#">Elementor</a>
            <a href="#">Aliexpress</a>
          </div>
        </div>
        <div className="rbt-separator-mid ptb--24">
          <hr className="rbt-separator m-0" />
        </div>
        {/* Start Card Area */}
        <div className="row">
          <div className="col-lg-12">
            <div className="border-0 p-0 text-left title-sm-fsize">
              <h6 className="title">
                <span className="rbt-bold--text">Trending Products</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24">
          {electronicsHoverVideoData.map((product) => (
            <div
              key={product.id}
              className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
            >
              <ProductCard10 product={product} />
              {/* Product details area not present in the provided HTML */}
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
