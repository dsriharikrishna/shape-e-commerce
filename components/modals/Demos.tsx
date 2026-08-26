import Image from "next/image";
import Link from "next/link";
import OdometerComponent from "../common/OdometerComponent";
export default function Demos() {
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="demos-modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-full-width">
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
              <div className="container">
                <div className="row overflow-hidden">
                  <div className="col-12 col-lg-10 col-xl-9 mx-auto">
                    <div className="rbt-exclusive-section-title text-center position-relative pt--48 mb--20">
                      <span className="rbt-overlay-counter counter-sm top-0">
                        <OdometerComponent max={100} />
                        <span className="counter-suffix">+</span>
                      </span>
                      <h2 className="rbt-title mb--48 sm_mb--32 md_mb--40">
                        <span className="rbt-bold--text">
                          Best-In-Class Designs
                          <br />
                        </span>
                        <span className="rbt-title-sm-text">
                          To Discover Awesome Creative Designs
                        </span>
                      </h2>
                      <div className="section-indicator d-xl-none d-xxl-block">
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={54}
                            height={26}
                            viewBox="0 0 54 26"
                            fill="none"
                          >
                            <path
                              d="M32.0552 6.59302C25.1245 1.4584 15.1617 3.14549 5.41547 10.9941C7.5813 11.5076 9.81933 9.23368 11.6964 11.2142C11.6242 11.5809 11.6964 11.9477 11.6242 12.0211C8.51983 13.4881 5.41547 15.0285 2.23892 16.3488C1.15601 16.7889 0.000891783 16.2021 0.000891667 14.8818C0.00089143 12.1678 -0.071302 9.38039 1.08381 6.22627C2.02233 7.47325 2.67208 8.35347 3.10524 8.94028C6.1374 6.88643 8.953 4.61252 12.0574 2.99878C19.4212 -0.962218 26.9294 -1.18227 34.1488 3.43889C35.3039 4.17241 36.1703 4.02571 37.3254 3.65895C42.2346 1.97186 46.9272 2.63202 51.1867 5.63945C52.7028 6.73972 54.3632 8.06006 53.9301 10.9941C51.8364 7.98671 49.3096 6.44631 46.2775 5.71279C43.3175 5.05262 40.3575 4.97927 37.6142 6.44631C38.1195 9.23368 38.9136 11.8743 38.9136 14.515C38.9858 17.1557 38.5527 19.943 37.7585 22.437C36.9644 25.0043 34.582 26.2513 32.344 25.9579C30.1059 25.7378 28.3733 23.9774 27.8679 21.2634C27.0738 16.9356 28.0845 12.8279 30.3225 9.08698C30.9001 8.28011 31.4776 7.39989 32.0552 6.59302ZM34.221 8.72022C31.261 12.2411 30.3225 15.9087 30.6835 19.943C30.8279 21.2634 31.1889 22.5837 32.7771 22.6571C34.1488 22.7304 34.7986 21.6301 35.0874 20.4565C36.1703 16.7156 35.9537 12.9746 34.221 8.72022Z"
                              fill="#215ADA"
                            />
                          </svg>
                        </span>
                        <span className="indicator-text text-start">
                          Craft exceptional visitor <br />
                          experience.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="rbt-isotop-scroll rbt-scroll-trigger fade_in animation-order-3">
                      <div className="rbt-isotop-tabs rbt-nav-effect-activation">
                        <div className="rbt-product-nav-grp rbt-tab-btn-list">
                          <button data-filter="*" className="active">
                            <span className="filter-text">All Together</span>
                          </button>
                          <button data-filter=".fashion">
                            <span className="filter-text">Fashion</span>
                          </button>
                          <button data-filter=".accessories">
                            <span className="filter-text">Accessories</span>
                          </button>
                          <button data-filter=".furniture">
                            <span className="filter-text">Furniture</span>
                          </button>
                          <button data-filter=".electronics">
                            <span className="filter-text">Electronics</span>
                          </button>
                          <button data-filter=".cosmetics">
                            <span className="filter-text">Cosmetics</span>
                          </button>
                          <button data-filter=".interior">
                            <span className="filter-text">Decor/Interior</span>
                          </button>
                          <button data-filter=".printing">
                            <span className="filter-text">Printing</span>
                          </button>
                          <button data-filter=".sports">
                            <span className="filter-text">Sports</span>
                          </button>
                        </div>
                        <div className="rbt-product-nav-grp rbt-tab-btn-list">
                          <button data-filter=".coming-soon">
                            <span className="filter-text">️‍🔥 Coming Soon</span>
                          </button>
                        </div>
                        <span className="rbt-bg-highlight isotop-tab-bg-highlight" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-demo-prev-wrapper rbt-demos-presentation-modals pl--8 pr--12 mt--24">
                  {/* Start Demos Area */}
                  <div className="rbt-isotop-demos-area isotop-demo-mesonry-activation">
                    <div className="row mt_dec--24">
                      <div className="col-12">
                        <div className="grid-5-meso">
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-1">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-electronics`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-1.webp"
                                      width={408}
                                      height={422}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-electronics`}>
                                      Electronics - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-2">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-fashion`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-5.webp"
                                      width={408}
                                      height={422}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-fashion`}>
                                      Fashion - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition furniture">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-3">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-furniture`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-8.webp"
                                      width={408}
                                      height={422}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-furniture`}>
                                      Furniture - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-4">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-printing-service`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-6.webp"
                                      width={408}
                                      height={422}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-printing-service`}>
                                      Print Service - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition cosmetics fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-5">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-cosmetic-beauty`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-2.webp"
                                      width={408}
                                      height={422}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-cosmetic-beauty`}>
                                      Cosmetic Beauty - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition interior">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-6">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-sports`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-9.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-sports`}>
                                      Sports - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-7">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-glass`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-3.webp"
                                      width={408}
                                      height={422}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-glass`}>Glass - 1</Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-8">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-phone-case`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-4.webp"
                                      width={408}
                                      height={422}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-phone-case`}>
                                      Phone - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition glass">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-9">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-accessories`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-10.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-accessories`}>
                                      Accessories - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-jewellery`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-11.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-jewellery`}>
                                      Jewellery - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-furniture-two`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-furniture-02.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-furniture-two`}>
                                      Furniture - 2
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-fashion-two`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-fashion-02.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-fashion-two`}>
                                      Fashion - 2
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-ladies-bag`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-leather-goods-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-ladies-bag`}>
                                      Luxury leather goods
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-perfume`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-fragrance-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-perfume`}>
                                      Fragrance
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-jewellery-two`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-jewellery-02.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-jewellery-two`}>
                                      Jewellery - 2
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-cosmetic-beauty-two`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-cosmetics-02.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-cosmetic-beauty-two`}>
                                      Cosmetics Beauty 2
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-cosmetic-beauty-three`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-cosmetics-03.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-cosmetic-beauty-three`}>
                                      Cosmetics Beauty 3
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-cosmetic-beauty-four`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-cosmetics-04.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-cosmetic-beauty-four`}>
                                      Cosmetics Beauty 4
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-laggage-bag`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-11.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-laggage-bag`}>
                                      Luggage Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-watch`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-watch-02.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-watch`}>Watch Shop</Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-straller`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-11.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-straller`}>
                                      Stroller (Baby Walker)
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-paddle-boards`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-paddle-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-paddle-boards`}>
                                      Paddle Boards
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-shocks-store`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-socks-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-shocks-store`}>
                                      Socks Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-headphones-store`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-headphone-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-headphones-store`}>
                                      Headphones Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-dog-accessories`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-dog-accessories-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-dog-accessories`}>
                                      Dog Accessories
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-cat-accessories-01`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-cat-accessories-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-cat-accessories-01`}>
                                      Cat Accessories
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-kids-cloth`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-kids-cloth-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-kids-cloth`}>
                                      Kids Cloth
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-gym-supliments-one`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-gym-suppliment-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-gym-supliments-one`}>
                                      Gym Supplement
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-plant-one`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-plant-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-plant-one`}>
                                      Plants Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-kitchen-accessories`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-kitchenware-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-kitchen-accessories`}>
                                      Kitchen Accessories
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-electric-cycle`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-cycle-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-electric-cycle`}>
                                      Electric Cycle
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-fashion-three`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-fashion-03.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-fashion-three`}>
                                      Fashion - 3
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-ceramics`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-ceramic-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-ceramics`}>
                                      Ceramics Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-drinkware`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-drinkware-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-drinkware`}>
                                      Drinkware Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-camping-gear`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-camping-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-camping-gear`}>
                                      Camping Gear
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-flower-plants`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-flowers-shop-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-flower-plants`}>
                                      Flowers Plants
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-tennis-accessories`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-tennis-accessories-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-tennis-accessories`}>
                                      Tennis Accessories
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-coffee-store`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-coffee-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-coffee-store`}>
                                      Coffee Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-bakery-shop`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-bakery-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-bakery-shop`}>
                                      Bakery Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-packaging-shop`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-packaging-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-packaging-shop`}>
                                      Packaging Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-hoodie-stores-one`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-hoodie-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-hoodie-stores-one`}>
                                      Hoodie Store - 1
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-hoodie-stores-two`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-hoodie-02.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-hoodie-stores-two`}>
                                      Hoodie Store - 2
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-borkha-shop`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-11.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-borkha-shop`}>
                                      Borka Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-hijab-shop`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-hijab-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-hijab-shop`}>
                                      Hijab Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-hats-store`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-hat-store-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-hats-store`}>
                                      Hats Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-sneakers`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-sneakers-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-sneakers`}>
                                      Sneakers
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-yoga-store`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-11.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-yoga-store`}>
                                      Yoga Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-furniture-three`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-11.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-furniture-three`}>
                                      Furniture - 3
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-shoes`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-shoes-women-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-shoes`}>Shoes</Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-organic-food`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-organic-food-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-organic-food`}>
                                      Organic Food Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-black-friday-sale`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-black-friday-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-black-friday-sale`}>
                                      Black Friday Sale
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-tea-stores`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-tea-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-tea-stores`}>
                                      Tea Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-book-store`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-book-shop-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-book-store`}>
                                      Book Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-furniture-four`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-11.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-furniture-four`}>
                                      Furniture - 4
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-watch-two`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-watch-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-watch-two`}>
                                      Smart watch
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-games-store`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-game-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-games-store`}>
                                      Games Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link
                                    href={`/home-car-automobile-accessories`}
                                  >
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-car-&-automobile-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link
                                      href={`/home-car-automobile-accessories`}
                                    >
                                      Car &amp; Automobile Accessories
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-electronics-two`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-electronics-02.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-electronics-two`}>
                                      Electronics - 2
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-electronics-three`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-electronics-03.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-electronics-three`}>
                                      Electronics - 3
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-electronics-four`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-electronics-04.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-electronics-four`}>
                                      Electronics - 4
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition fashion">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-beard-oil`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-beard-oil-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-beard-oil`}>
                                      Beard Oil Shop
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-cyber-monday`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-11.webp"
                                      width={469}
                                      height={485}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-cyber-monday`}>
                                      Cyber Monday Sale
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-laptop`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-laptop-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-laptop`}>
                                      Laptop Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Demo */}
                          <div className="rbt-meso-item transition phone electronics">
                            <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                              <div className="inner">
                                <div className="thumbnail">
                                  <Link href={`/home-mobile-phone`}>
                                    <Image
                                      alt="Demo Images"
                                      src="/assets/images/splash/demo-pages/demo-mobile-01.webp"
                                      width={640}
                                      height={660}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="rbt-title">
                                    <Link href={`/home-mobile-phone`}>
                                      Mobile Phone Store
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Demos Area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
