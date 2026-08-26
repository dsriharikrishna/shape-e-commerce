"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { apparelCompareProducts } from "@/data/products/others";
import { useContextElement } from "@/context/store";

export default function CompareProducts2({
  products = apparelCompareProducts,
}: {
  products: Product[];
}) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light">
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-primary-stroke rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
          <div className="row rbt-section-gap2Top pt_sm--100 pt_md--80">
            <div className="col-lg-12">
              <div className="rbt-component-section-title rbt-bg-color-white">
                <h4 className="rbt-title">
                  <span className="rbt-bold--text">Compare similar items</span>
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
                      fill="var(--color-primary)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-component-area rbt-fshape-box rbt-bg-color-white">
            <div className="row">
              <div className="col-12 rbt-scrollable-content">
                {/* Start Compare Table */}
                <table className="rbt-compare-table">
                  <tbody>
                    {/* Search Fields Row */}
                    <tr>
                      <td />
                      {products.map((_, idx) => (
                        <td key={`search-${idx}`}>
                          <div className="rbt-input-field-grp">
                            <input
                              className="rbt-input-field"
                              type="text"
                              placeholder="Search and Select Product"
                            />
                            <button className="rbt-search-btn">
                              <i className="fa-sharp fa-solid fa-magnifying-glass" />
                            </button>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Product Image & Info */}
                    <tr className="rbt-compare-prd-table-head">
                      <td className="rbt-compare-table-title">
                        <div className="rbt-compare-values">
                          <p className="rbt-compare-table-text">
                            Find and select products to see the differences and
                            similarities between them
                          </p>
                        </div>
                      </td>
                      {products.map((product, idx) => (
                        <td key={`product-${idx}`}>
                          <div className="rbt-compare-item-wrapper">
                            <button className="rbt-product-remove-btn">
                              <i className="fa-sharp fa-solid fa-xmark" />
                            </button>
                            <a
                              href={`/product-single-default/${product.id}`}
                              className={`rbt-product-item-img rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-${
                                idx + 1
                              }`}
                            >
                              <Image
                                alt="Product"
                                src={product.imgSrc}
                                width={485}
                                height={380}
                              />
                            </a>
                            <div className="rbt-compare-values">
                              <Link
                                href={`/shop-by-categories`}
                                className="rbt-product-item-category"
                              >
                                {product.category}
                              </Link>
                              <h6 className="rbt-product-item-title">
                                <a
                                  href={`/product-single-default/${product.id}`}
                                >
                                  {product.title}
                                </a>
                              </h6>
                              <a
                                className="rbt-btn rbt-btn-sm has-left-icon"
                                onClick={() => addProductToCart(product.id)}
                                href="#"
                              >
                                <i className="fa-regular fa-cart-shopping" />{" "}
                                {isAddedToCartProducts(product.id)
                                  ? "Already Added"
                                  : "Add To Cart"}
                              </a>
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Customer Rating */}
                    <tr>
                      <td className="rbt-product-feature-name">
                        Customer Rating
                      </td>
                      {products.map((_, idx) => (
                        <td key={`rating-${idx}`}>
                          <div className="rbt-compare-values">
                            <div className="rbt-card-rating">
                              <ul className="rbt-rating-icon-list">
                                {Array(5)
                                  .fill(0)
                                  .map((_, i) => (
                                    <li key={i}>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                  ))}
                              </ul>
                              <p className="rating-digit">(46)</p>
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Price */}
                    <tr>
                      <td className="rbt-product-feature-name">Price</td>
                      {products.map((product, idx) => (
                        <td key={`price-${idx}`}>
                          <div className="rbt-compare-values">
                            <span className="rbt-product-price">
                              ${product.price.toFixed(2)}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Sold By */}
                    <tr>
                      <td className="rbt-product-feature-name">Sold By</td>
                      {products.map((product, idx) => (
                        <td key={`soldby-${idx}`}>
                          <div className="rbt-compare-values">
                            {product.soldBy}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Color */}
                    <tr>
                      <td className="rbt-product-feature-name">Color</td>
                      {products.map((product, idx) => (
                        <td key={`color-${idx}`}>
                          <div className="rbt-compare-values">
                            {product.color}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Fit Type */}
                    <tr>
                      <td className="rbt-product-feature-name">Fit Type</td>
                      {products.map((product, idx) => (
                        <td key={`fit-${idx}`}>
                          <div className="rbt-compare-values">
                            {product.fitType}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Item Dimensions */}
                    <tr>
                      <td className="rbt-product-feature-name">
                        Item Dimensions
                      </td>
                      {products.map((product, idx) => (
                        <td key={`dim-${idx}`}>
                          <div className="rbt-compare-values">
                            {product.dimensions}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Special Features */}
                    <tr>
                      <td className="rbt-product-feature-name">
                        Special Features
                      </td>
                      {products.map((product, idx) => (
                        <td key={`feature-${idx}`}>
                          <div className="rbt-compare-values">
                            {product.features}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                {/* End Compare Table */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
