import Link from "next/link";
import Image from "next/image";
import ProductCard1 from "@/components/productCards/ProductCard1";
import { fashionProducts } from "@/data/products/fashion";

export default function SimmilerProducts2() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light pt--0">
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
          <div className="row rbt-section-gap2Top pt_sm--100 pt_md--80 pt--0">
            <div className="col-lg-12 rbt-fshape-row position-relative">
              <div className="rbt-component-section-title rbt-bg-color-white">
                <h4 className="rbt-title text-start">
                  <span className="rbt-bold--text">Similar items</span>
                </h4>
                <span className="rbt-fshape-right-portion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={52}
                    height={50}
                    viewBox="0 0 52 50"
                    fill="none"
                  >
                    <path
                      d="M51.5337 49.984C-64.8544 49.9977 116.427 49.9764 0.0390625 49.9901C0.0390625 31.262 0.0390625 20.7619 0.0390625 2.03378C11.2391 1.63419 16.5034 4.56468 19.5034 10.5602L30.0034 38.5311C34.0374 47.934 45.4209 49.4481 51.5337 49.984Z"
                      fill="var(--color-white)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.246 1.97519C16.582 3.50685 18.8114 5.90944 20.3979 9.07997L20.4213 9.12681L30.9315 37.1248C33.053 42.053 36.807 44.7979 40.7367 46.3047C44.6934 47.8219 48.798 48.068 51.4731 47.987C51.4731 47.987 51.51 49.2041 51.5337 49.984C48.7087 50.0695 44.3134 49.8162 40.02 48.17C35.7052 46.5155 31.4643 43.4388 29.0842 37.891L29.0751 37.8698C29.0751 37.8698 19.997 12.7279 18.5857 9.92689C17.1743 7.12591 15.2591 5.09828 12.4108 3.79055C8.49554 1.49902 0.0390625 2.03378 0.0390625 2.03378C0.0390625 20.7619 0.0390625 31.262 0.0390625 49.9901L0.0408325 0.0348727C5.70805 -0.16568 9.9493 0.461575 13.246 1.97519Z"
                      fill="var(--color-brand-100)"
                    />
                  </svg>
                </span>
              </div>
              <Link
                className="rbt-link position-absolute d-inline-block rbt-text-color-primary rbt-text-medium rbt-gap--8 justify-content-center rbt-btn-link"
                href={`/shop`}
              >
                <span className="btn-text">View All Products</span>
                <span className="btn-icon">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square rbt-color-primary" />
                </span>
              </Link>
            </div>
          </div>
          <div className="rbt-component-area rbt-fshape-box rbt-bg-color-white">
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}{" "}
              {fashionProducts.slice(0, 3).map((product, i) => (
                <div
                  key={i}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24"
                >
                  <ProductCard1 product={product} />
                </div>
              ))}
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-beta-shop-card rbt-bg-color-primary">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-card-img rbt-bg-color-default">
                      <a href="#">
                        <Image
                          alt="Card Image"
                          src="/assets/images/product-img/beta-shop/shop-beta-img-01.webp"
                          width={216}
                          height={216}
                        />
                      </a>
                    </div>
                    <div className="rbt-card-content">
                      <h5 className="rbt-card-title">
                        <a href="#">Beats Brand is now on Unimart Platform</a>
                      </h5>
                      <p className="b4 desc rbt-text-medium">
                        Shop Beats Headphones &amp; Earbuds
                      </p>
                      <a
                        className="rbt-btn rbt-btn-white rbt-btn-sm has-left-icon"
                        href="#"
                      >
                        Shop Beats <i className="fa-solid fa-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
