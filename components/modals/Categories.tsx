"use client";

import { useUiElement } from "@/context/uiStore";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const {
    categorySidebarOpen,
    categorySidebarRightActive,
    closeCategorySidebar,
    setCategorySidebarRightActive,
  } = useUiElement();

  return (
    <div
      className={`rbt-offcanvas-cat-side-menu rbt-category-sidemenu${categorySidebarOpen ? " side-menu-active" : ""}`}
    >
      <div className="inner-wrapper">
        <div className="rbt-categories-sidebar d-flex">
          <div className="rbt-sidebar-left-content">
            <div className="rbt-sidebar-left-inner">
              {/* Start sidebar left header */}
              <div className="rbt-sidebar-left-content-head">
                <div className="rbt-categories-sidebar-top-content mb--24">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        alt="Unimart Logo"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                  <button
                    className="rbt-sidebar-close-btn"
                    onClick={closeCategorySidebar}
                  >
                    <i className="fa-sharp fa-solid fa-xmark" />
                  </button>
                </div>
                <div className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover rbt-access-box-has-bg-hover-white d-inline-block">
                  <a
                    href="#!"
                    className="rbt-access-box-wrapper"
                    data-bs-toggle="modal"
                    data-bs-target="#signinModal"
                  >
                    <div className="rbt-round-btn rbt-bg-color-brand-300 rbt-text-color-primary has-rbt-sm-fsize">
                      <i className="fa-regular fa-user" />
                    </div>
                    <div className="content">
                      <p>Log in/Sign Up</p>
                      <span>Access Account</span>
                    </div>
                  </a>
                </div>
              </div>
              {/* End sidebar left header */}
              <div className="rbt-sidebar-tabs-wrapper">
                <div className="rbt-sidebar-tabs-inner">
                  {/* Start tabs */}
                  <ul
                    className="rbt-sidebar-sub-categories nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                    onClick={() => setCategorySidebarRightActive(true)}
                  >
                    <li>
                      <button
                        className="rbt-nav-link nav-link"
                        id="rbt-tab-cat-sidebar-1"
                        data-bs-toggle="pill"
                        data-bs-target="#rbt-nav-pill-1"
                        type="button"
                        role="tab"
                        aria-controls="rbt-nav-pill-1"
                        aria-selected="true"
                      >
                        <span className="rbt-round-btn">
                          <i className="fa-regular fa-camera" />
                        </span>
                        <span className="rbt-content">
                          <span className="rbt-sub-category-title">
                            <span>Camera &amp; Photo</span>
                          </span>
                          <span className="description">
                            Popular Camera &amp; Photo accessories
                          </span>
                        </span>
                        <span className="icon">
                          <i className="fa-regular fa-chevron-right" />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="rbt-nav-link nav-link"
                        id="rbt-tab-cat-sidebar-2"
                        data-bs-toggle="pill"
                        data-bs-target="#rbt-nav-pill-2"
                        type="button"
                        role="tab"
                        aria-controls="rbt-nav-pill-2"
                        aria-selected="false"
                      >
                        <span className="rbt-round-btn">
                          <i className="fa-regular fa-watch-apple" />
                        </span>
                        <span className="rbt-content">
                          <span className="rbt-sub-category-title">
                            <span>All Watches</span>
                            <span className="rbt-product-badge rbt-product-badge-bg-primary">
                              EXCLUSIVE
                            </span>
                          </span>
                          <span className="description">
                            Pages with a demonstration of Smartwatches
                          </span>
                        </span>
                        <span className="icon">
                          <i className="fa-regular fa-chevron-right" />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="rbt-nav-link nav-link"
                        id="rbt-tab-cat-sidebar-3"
                        data-bs-toggle="pill"
                        data-bs-target="#rbt-nav-pill-3"
                        type="button"
                        role="tab"
                        aria-controls="rbt-nav-pill-3"
                        aria-selected="false"
                      >
                        <span className="rbt-round-btn">
                          <i className="fa-sharp fa-regular fa-camcorder" />
                        </span>
                        <span className="rbt-content">
                          <span className="rbt-sub-category-title">
                            <span>TVs, Audio-Video</span>
                          </span>
                          <span className="description">
                            Top TVs, Audio-Videothe most famous brands
                          </span>
                        </span>
                        <span className="icon">
                          <i className="fa-regular fa-chevron-right" />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="rbt-nav-link nav-link"
                        id="rbt-tab-cat-sidebar-4"
                        data-bs-toggle="pill"
                        data-bs-target="#rbt-nav-pill-4"
                        type="button"
                        role="tab"
                        aria-controls="rbt-nav-pill-4"
                        aria-selected="false"
                      >
                        <span className="rbt-round-btn">
                          <i className="fa-light fa-game-console-handheld" />
                        </span>
                        <span className="rbt-content">
                          <span className="rbt-sub-category-title">
                            <span>Gaming</span>
                            <span className="rbt-product-badge rbt-bg-color-green">
                              TRENDING
                            </span>
                          </span>
                          <span className="description">
                            Accessories for Games from the best brands
                          </span>
                        </span>
                        <span className="icon">
                          <i className="fa-regular fa-chevron-right" />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="rbt-nav-link nav-link"
                        id="rbt-tab-cat-sidebar-5"
                        data-bs-toggle="pill"
                        data-bs-target="#rbt-nav-pill-5"
                        type="button"
                        role="tab"
                        aria-controls="rbt-nav-pill-5"
                        aria-selected="false"
                      >
                        <span className="rbt-round-btn">
                          <i className="fa-sharp fa-regular fa-headphones" />
                        </span>
                        <span className="rbt-content">
                          <span className="rbt-sub-category-title">
                            <span>Headphones &amp; Music</span>
                          </span>
                          <span className="description">
                            Catalog best Headphones &amp; Music here now
                          </span>
                        </span>
                        <span className="icon">
                          <i className="fa-regular fa-chevron-right" />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="rbt-nav-link nav-link"
                        id="rbt-tab-cat-sidebar-6"
                        data-bs-toggle="pill"
                        data-bs-target="#rbt-nav-pill-6"
                        type="button"
                        role="tab"
                        aria-controls="rbt-nav-pill-6"
                        aria-selected="false"
                      >
                        <span className="rbt-round-btn">
                          <i className="fa-sharp fa-regular fa-blender-phone" />
                        </span>
                        <span className="rbt-content">
                          <span className="rbt-sub-category-title">
                            <span>Appliances</span>
                            <span className="rbt-product-badge rbt-bg-color-danger">
                              HOT
                            </span>
                          </span>
                          <span className="description">
                            Full list links of all House Appliances active
                          </span>
                        </span>
                        <span className="icon">
                          <i className="fa-regular fa-chevron-right" />
                        </span>
                      </button>
                    </li>
                  </ul>
                  {/* End tabs */}
                  {/* Start quick links */}
                  <div className="rbt-sidebar-quick-links-part">
                    <div className="rbt-sidebar-bottom-inner">
                      <hr className="rbt-separator rbt-separator-gray200 mb--24" />
                      <nav className="rbt-sidebar-nav">
                        <h6 className="rbt-sub-category-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseExample"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            Quick Links
                            <span className="icon">
                              <i className="fa-regular fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                        <div className="collapse" id="collapseExample">
                          <ul className="rbt-sidebar-quick-links">
                            <li>
                              <Link href={`/about`}>About us</Link>
                            </li>
                            <li>
                              <a href="#">Reviews</a>
                            </li>
                            <li>
                              <a href="#">Delivery &amp; payment</a>
                            </li>
                            <li>
                              <Link href={`/blogs`}>Blog Articles</Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <hr className="rbt-separator rbt-separator-gray200 mb--24 mt--24" />
                      <nav className="rbt-sidebar-nav">
                        <h6 className="rbt-sub-category-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseExample2"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample2"
                          >
                            More Links
                            <span className="icon">
                              <i className="fa-regular fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                        <div className="collapse" id="collapseExample2">
                          <ul className="rbt-sidebar-quick-links">
                            <li>
                              <Link href={`/contact`}>Contacts</Link>
                            </li>
                            <li>
                              <a href="#">Information</a>
                            </li>
                            <li>
                              <Link href={`/terms-policy`}>
                                Terms &amp; Conditions
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                  {/* End quick links */}
                </div>
              </div>
              {/* Start sidebar footer */}
              <div className="rbt-sidebar-left-content-footer">
                <div className="rbt-sidebar-contact-area">
                  <div className="rbt-sidebar-contact-inner rbt-link-hover">
                    <p className="rbt-contact-text">Boston, 44 Main street</p>
                    <a className="rbt-contact-links" href="tel:+1(917)722-7425">
                      +1(917)722-7425 (the call is free)
                    </a>
                    <p className="rbt-contact-text mt--12">
                      Mon-Sun 9.00 - 18.00
                    </p>
                    <a
                      className="rbt-contact-links"
                      href="mailto:demo@example.com"
                    >
                      demo@example.com
                    </a>
                    <Link
                      className="rbt-contact-links d-block"
                      href={`/find-store`}
                    >
                      View on map
                    </Link>
                  </div>
                </div>
              </div>
              {/* End sidebar footer */}
            </div>
          </div>
          <div
            className={`rbt-sidebar-right-content${categorySidebarRightActive ? " active" : ""}`}
          >
            <div className="rbt-sidebar-right-inner">
              {/* Start tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                {/* Start single Category Tab content */}
                <div
                  className="rbt-tab-content tab-pane fade show active"
                  id="rbt-nav-pill-1"
                  role="tabpanel"
                  aria-labelledby="rbt-tab-cat-sidebar-1"
                  tabIndex={0}
                >
                  <div className="rbt-sub-category-products">
                    <div className="rbt-category-products-inner">
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-7.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Action Camera
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Sports Cameras
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Underwater Cameras
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>360 Cameras</Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-8.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Camera lenses
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>VR Cameras</Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Panoramic Cameras
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>3D Cameras</Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-9.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Digital Camera
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Drone Cameras
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Helmet Cameras
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Dual-Lens Cameras
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-10.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>DSLR</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Compact 360 Cameras
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>DSLR Cameras</Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Mirrorless Cameras
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-11.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Handycam</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Point-and-Shoot Cameras
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Bridge Cameras
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Compact Cameras
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-12.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Mirrorless Camera
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Full-Frame Mirrorless
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              APS-C Mirrorless
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Micro Four Thirds Mirrorless
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-13.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Dash Cam</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Compact Mirrorless
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Medium Format Mirrorless
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>Panoramic</Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-14.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Video Camera</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Digital Camcorders
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Professional Camcorders
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              4K Camcorders
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-15.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Instant Camera
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Compact Camcorders
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              High Definition (HD) Camcorders
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>Panoramic</Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-16.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Camera Accessories
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              SD Cards (High-Speed)
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              MicroSD Cards
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              External Hard Drives
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-17.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Camera Tripod
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Travel Tripods
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Tabletop Tripods
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>Monopods</Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                    </div>
                    {/* Start banner */}
                    <div className="rbt-sidebar-banner">
                      <div className="rbt-banner-img">
                        <Image
                          alt="Banner Image"
                          src="/assets/images/product-img/sidebar-category/product-banner.webp"
                          width={593}
                          height={240}
                        />
                      </div>
                      <div className="rbt-sidebar-banner-content">
                        <p className="rbt-sidebar-banner-text">
                          Camera Accessories
                          <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                            11th December
                          </span>
                        </p>
                        <h4 className="rbt-sidebar-banner-titile">
                          Up to 40% Off
                          <span className="rbt-text-regular">
                            On All Brands
                          </span>
                        </h4>
                        <a href="#" className="rbt-btn rbt-btn-sm">
                          Know More
                        </a>
                      </div>
                    </div>
                    {/* End banner */}
                  </div>
                </div>
                {/* End single Category Tab content */}
                {/* Start single Category Tab content */}
                <div
                  className="rbt-tab-content tab-pane fade"
                  id="rbt-nav-pill-2"
                  role="tabpanel"
                  aria-labelledby="rbt-tab-cat-sidebar-2"
                  tabIndex={0}
                >
                  <div className="rbt-sub-category-products">
                    <div className="rbt-category-products-inner">
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-1.webp"
                            width={88}
                            height={88}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Fitness Tracker
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>Smart Bands</Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Heart Rate Monitors
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Sleep Trackers
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-2.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Bluetooth</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Luxury Bluetooth Watches
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Hybrid Smartwatches
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Kids' Smartwatches
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-3.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Hybrid</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Fitness Hybrid Watches
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Smart Hybrid Watches
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Classic Hybrid Watches
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-4.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Regular</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Analog Watches
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Digital Watches
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Dress Watches
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-5.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Touchscreen</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>Smartwatches</Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Fitness Trackers
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Hybrid Smartwatches
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                    </div>
                    {/* Start banner */}
                    <div className="rbt-sidebar-banner">
                      <div className="rbt-banner-img">
                        <Image
                          alt="Banner Image"
                          src="/assets/images/product-img/sidebar-category/product-banner.webp"
                          width={593}
                          height={240}
                        />
                      </div>
                      <div className="rbt-sidebar-banner-content">
                        <p className="rbt-sidebar-banner-text">
                          Starting From
                          <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                            11th December
                          </span>
                        </p>
                        <h4 className="rbt-sidebar-banner-titile">
                          Up to 40% Off
                          <span className="rbt-text-regular">
                            On All Brands
                          </span>
                        </h4>
                        <a href="#" className="rbt-btn rbt-btn-sm">
                          Know More
                        </a>
                      </div>
                    </div>
                    {/* End banner */}
                  </div>
                </div>
                {/* End single Category Tab content */}
                {/* Start single Category Tab content */}
                <div
                  className="rbt-tab-content tab-pane fade"
                  id="rbt-nav-pill-3"
                  role="tabpanel"
                  aria-labelledby="rbt-tab-cat-sidebar-3"
                  tabIndex={0}
                >
                  <div className="rbt-sub-category-products">
                    <div className="rbt-category-products-inner">
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-18.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>QLED TV</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link
                              href={`/shop-by-categories`}
                              className="rbt-underline-btn btn-white"
                            >
                              View All
                              <i className="fa-regular fa-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-19.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Smart TV</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link
                              href={`/shop-by-categories`}
                              className="rbt-underline-btn btn-white"
                            >
                              View All
                              <i className="fa-regular fa-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-20.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>UHD TV</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link
                              href={`/shop-by-categories`}
                              className="rbt-underline-btn btn-white"
                            >
                              View All
                              <i className="fa-regular fa-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-21.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>HD TV</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link
                              href={`/shop-by-categories`}
                              className="rbt-underline-btn btn-white"
                            >
                              View All
                              <i className="fa-regular fa-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-22.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>LED TV</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link
                              href={`/shop-by-categories`}
                              className="rbt-underline-btn btn-white"
                            >
                              View All
                              <i className="fa-regular fa-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-23.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>4K TV</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link
                              href={`/shop-by-categories`}
                              className="rbt-underline-btn btn-white"
                            >
                              View All
                              <i className="fa-regular fa-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                    </div>
                    {/* Start banner */}
                    <div className="rbt-sidebar-banner">
                      <div className="rbt-banner-img">
                        <Image
                          alt="Banner Image"
                          src="/assets/images/product-img/sidebar-category/product-banner.webp"
                          width={593}
                          height={240}
                        />
                      </div>
                      <div className="rbt-sidebar-banner-content">
                        <p className="rbt-sidebar-banner-text">
                          Starting From
                          <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                            11th December
                          </span>
                        </p>
                        <h4 className="rbt-sidebar-banner-titile">
                          Up to 40% Off
                          <span className="rbt-text-regular">
                            On All Brands
                          </span>
                        </h4>
                        <a href="#" className="rbt-btn rbt-btn-sm">
                          Know More
                        </a>
                      </div>
                    </div>
                    {/* End banner */}
                  </div>
                </div>
                {/* End single Category Tab content */}
                {/* Start single Category Tab content */}
                <div
                  className="rbt-tab-content tab-pane fade"
                  id="rbt-nav-pill-4"
                  role="tabpanel"
                  aria-labelledby="rbt-tab-cat-sidebar-4"
                  tabIndex={0}
                >
                  <div className="rbt-sub-category-products">
                    <div className="rbt-category-products-inner">
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-24.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Gaming Keyboard
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Apex Gamer Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Stealth Strike Keyboard
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Rapid Fire RGB
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-25.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Gaming Headset
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              SoundStorm Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              EchoMaster Elite
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              BattleTune 360
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-26.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Gaming Chair</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Elite Gamer Throne
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Turbo Comfort Seat
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Pro Series Gaming Chair
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-27.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Mouse Pads</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              GlidePro Mouse Pad
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              PixelPerfect Pad
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              EagleEye Mouse Mat
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-28.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Joystick</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              ProGamer Joystick
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Precision Play Controller
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              TurboGrip Joystick
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-29.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>VR headset</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              VisionSphere VR Headset
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              ImmersiveEye VR Goggles
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              RealityFusion Headset
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-30.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            PlayStation Acce...
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Crystal Clear Faceplate
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              ComfortFit Chair
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Dynamic RGB LED
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-31.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Gaming Desk</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              ProGamer Desk
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Titan Gaming Station
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Arcade Pro Desk
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-32.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Gaming Sofa</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Victory Lounge
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>Pixel Perch</Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Gamer's Retreat
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                    </div>
                    {/* Start banner */}
                    <div className="rbt-sidebar-banner">
                      <div className="rbt-banner-img">
                        <Image
                          alt="Banner Image"
                          src="/assets/images/product-img/sidebar-category/product-banner.webp"
                          width={593}
                          height={240}
                        />
                      </div>
                      <div className="rbt-sidebar-banner-content">
                        <p className="rbt-sidebar-banner-text">
                          Starting From
                          <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                            11th December
                          </span>
                        </p>
                        <h4 className="rbt-sidebar-banner-titile">
                          Up to 40% Off
                          <span className="rbt-text-regular">
                            On All Brands
                          </span>
                        </h4>
                        <a href="#" className="rbt-btn rbt-btn-sm">
                          Know More
                        </a>
                      </div>
                    </div>
                    {/* End banner */}
                  </div>
                </div>
                {/* End single Category Tab content */}
                {/* Start single Category Tab content */}
                <div
                  className="rbt-tab-content tab-pane fade"
                  id="rbt-nav-pill-5"
                  role="tabpanel"
                  aria-labelledby="rbt-tab-cat-sidebar-5"
                  tabIndex={0}
                >
                  <div className="rbt-sub-category-products">
                    <div className="rbt-category-products-inner">
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-33.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Bluetooth Headphone
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              SoundWave Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              AeroSound Bluetooth
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              PulseBeats Wireless
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-34.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Headphone Stand
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>Audio Aegis</Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Harmonic Holder
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Headset Haven
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-35.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Home Theater</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Cinematic Sound Bar
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Ultra HD Projector
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>4K Smart TV</Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-36.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Bluetooth Speaker
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              SoundWave Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              BassBlaster 360
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              AeroSound Compact
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-37.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Soundbar</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Versatile Soundbar
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Signature Series Soundbar
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              ProSound Soundbar
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-38.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Microphone</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              SoundWave Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              EchoSphere Mic
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              ClearCast 3000
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-39.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Voice Recorder
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>EchoNote Pro</Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              VoxCapture 3000
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>SoundScribe</Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-40.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Sound Card</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              AeroSound Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              EchoMaster FX
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Vortex SoundBlaster
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                    </div>
                    {/* Start banner */}
                    <div className="rbt-sidebar-banner">
                      <div className="rbt-banner-img">
                        <Image
                          alt="Banner Image"
                          src="/assets/images/product-img/sidebar-category/product-banner.webp"
                          width={593}
                          height={240}
                        />
                      </div>
                      <div className="rbt-sidebar-banner-content">
                        <p className="rbt-sidebar-banner-text">
                          Starting From
                          <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                            11th December
                          </span>
                        </p>
                        <h4 className="rbt-sidebar-banner-titile">
                          Up to 40% Off
                          <span className="rbt-text-regular">
                            On All Brands
                          </span>
                        </h4>
                        <a href="#" className="rbt-btn rbt-btn-sm">
                          Know More
                        </a>
                      </div>
                    </div>
                    {/* End banner */}
                  </div>
                </div>
                {/* End single Category Tab content */}
                {/* Start single Category Tab content */}
                <div
                  className="rbt-tab-content tab-pane fade"
                  id="rbt-nav-pill-6"
                  role="tabpanel"
                  aria-labelledby="rbt-tab-cat-sidebar-6"
                  tabIndex={0}
                >
                  <div className="rbt-sub-category-products">
                    <div className="rbt-category-products-inner">
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-41.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Air Conditioner
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              CoolBreeze Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              ChillMaster Elite
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              AirFlow Genius
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-42.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Geyser</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              AquaFlow Geysers
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              TurboHeat Geysers
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              EcoHeat Geysers
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-43.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Oven</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              CrispBake Oven
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              QuickHeat Convection Oven
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              PerfectBake Electric Oven
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-44.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Air Fryer</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              CrispMaster Air Fryer
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Healthy Fry Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              QuickCrisp Air Fryer
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-45.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Washing Machine
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>EcoClean Pro</Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              UltraWash 360
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              QuickSpin Deluxe
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-46.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Sewing Machine
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              StitchPro 300
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              SewMaster Deluxe
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              QuiltCraft Elite
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-47.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Air Purifier</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              PureAir Breeze
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              FreshFlow Purifier
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              BreatheEasy Pro
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-48.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>
                            Vacuum Cleaner
                          </Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              PowerSweep Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              UltraClean Cyclone
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              DustBuster Max
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-49.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Blender</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Smoothie Master Pro
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              NutriBlend Ultra
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              EcoBlend Portable Blender
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-50.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Cooker</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              PowerMix 3000
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              Frozen Fusion Blender
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              UltraSmooth Blender
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-51.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Iron</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              Blender &amp; Chop Duo
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              TurboMix Professional
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              BlendSmart 2-in-1
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                      {/* Start product singel */}
                      <div className="rbt-sub-category-product">
                        <a href="#" className="rbt-sidebar-category-img">
                          <Image
                            alt="Product Image"
                            src="/assets/images/product-img/sidebar-category/category-product-52.webp"
                            width={176}
                            height={176}
                          />
                        </a>
                        <h6 className="rbt-header">
                          <Link href={`/shop-by-categories`}>Mini Heater</Link>
                        </h6>
                        <ul className="rbt-product-features has-link-underline-effect">
                          <li>
                            <Link href={`/shop-by-category`}>
                              HeatWave Blanket
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              ThermoCushion{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-category`}>
                              SootheHeat Massager
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* End product singel */}
                    </div>
                    {/* Start banner */}
                    <div className="rbt-sidebar-banner">
                      <div className="rbt-banner-img">
                        <Image
                          alt="Banner Image"
                          src="/assets/images/product-img/sidebar-category/product-banner.webp"
                          width={593}
                          height={240}
                        />
                      </div>
                      <div className="rbt-sidebar-banner-content">
                        <p className="rbt-sidebar-banner-text">
                          Starting From
                          <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                            11th December
                          </span>
                        </p>
                        <h4 className="rbt-sidebar-banner-titile">
                          Up to 40% Off
                          <span className="rbt-text-regular">
                            On All Brands
                          </span>
                        </h4>
                        <a href="#" className="rbt-btn rbt-btn-sm">
                          Know More
                        </a>
                      </div>
                    </div>
                    {/* End banner */}
                  </div>
                </div>
                {/* End single Category Tab content */}
              </div>
              {/* End tab content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
