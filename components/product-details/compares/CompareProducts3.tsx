"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { apparelCompareProducts } from "@/data/products/others";
import { useContextElement } from "@/context/store";

export default function CompareProducts3({
  products = apparelCompareProducts,
}: {
  products: Product[];
}) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div className="rbt-component-area rbt-compare-table-area rbt-section-gap2Bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--40 p-0 border-0 text-center">
              <h2 className="rbt-title mb--8">
                <span className="rbt-text-bold">Compare Product</span>
              </h2>
              <p className="description mx-auto">
                Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
                Pressa fåmoska de jalabaneo.
              </p>
            </div>
          </div>
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
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={56}
                          height={56}
                          viewBox="0 0 56 56"
                          fill="none"
                        >
                          <path
                            d="M28 7.5C25.0767 7.5 22.6975 9.88262 22.6975 12.8112C22.6936 13.7244 22.9272 14.6229 23.3755 15.4184C23.8237 16.214 24.4712 16.8793 25.2543 17.349C26.0823 17.8506 27.0319 18.1157 28 18.1157C28.9681 18.1157 29.9177 17.8506 30.7458 17.349C31.5289 16.8794 32.1764 16.2141 32.6247 15.4185C33.073 14.6229 33.3066 13.7244 33.3025 12.8112C33.3025 9.88262 30.9234 7.5 28 7.5ZM35.1392 42.6269H31.1667L31.1675 42.6225V19.1112C30.1963 19.61 29.1025 19.8638 28 19.8638C26.8975 19.8638 25.8038 19.61 24.8325 19.1112V42.6225L24.8334 42.6269H20.8609C19.8457 42.628 18.8723 43.0318 18.1544 43.7496C17.4364 44.4674 17.0324 45.4406 17.031 46.4559V47.6258C17.031 47.8578 17.1232 48.0804 17.2873 48.2445C17.4514 48.4086 17.674 48.5008 17.906 48.5008H38.094C38.3261 48.5008 38.5487 48.4086 38.7127 48.2445C38.8768 48.0804 38.969 47.8578 38.969 47.6258V46.4559C38.9676 45.4406 38.5637 44.4674 37.8457 43.7496C37.1277 43.0318 36.1544 42.628 35.1392 42.6269ZM12.2439 33.8524C15.9495 33.8524 18.9657 30.8371 18.9657 27.1306C18.9657 26.8629 18.9989 25.8575 18.8922 25.6134L18.8904 25.6055L13.5914 13.6871H21C20.9292 13.1059 20.9292 12.5183 21 11.9371H12.2395C12.0724 11.9416 11.9097 11.9922 11.7695 12.0833C11.6293 12.1744 11.517 12.3025 11.445 12.4534L5.60003 25.6037L5.59915 25.6064C5.4889 25.854 5.52128 26.8506 5.52128 27.1297C5.52215 30.8363 8.5374 33.8524 12.2439 33.8524ZM12.243 14.9611L16.744 25.0849H7.73853L12.243 14.9611ZM50.477 25.9529C50.4762 25.9161 50.4604 25.8803 50.4552 25.8435C50.4438 25.7612 50.4333 25.6799 50.4009 25.6064L50.4 25.6037L44.555 12.4525C44.4837 12.3013 44.3716 12.1729 44.2315 12.0818C44.0913 11.9906 43.9286 11.9402 43.7614 11.9362H35C35.0709 12.5174 35.0709 13.1051 35 13.6862H42.4086L37.1097 25.6046L37.1079 25.6125C37.086 25.6633 37.0834 25.7219 37.0712 25.777C37.0589 25.8356 37.0362 25.8934 37.0362 25.952L37.0344 25.959V27.1289C37.0344 30.8354 40.0497 33.8506 43.757 33.8506C47.4627 33.8506 50.4788 30.8354 50.4788 27.1289V25.959L50.477 25.9529ZM39.256 25.0849L43.757 14.9611L48.2615 25.0849H39.256Z"
                            fill="#E6E6E6"
                          />
                        </svg>
                      </span>
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
                            <a href={`/product-single-default/${product.id}`}>
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
                  <td className="rbt-product-feature-name">Customer Rating</td>
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
                      <div className="rbt-compare-values">{product.soldBy}</div>
                    </td>
                  ))}
                </tr>

                {/* Color */}
                <tr>
                  <td className="rbt-product-feature-name">Color</td>
                  {products.map((product, idx) => (
                    <td key={`color-${idx}`}>
                      <div className="rbt-compare-values">{product.color}</div>
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
                  <td className="rbt-product-feature-name">Item Dimensions</td>
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
                  <td className="rbt-product-feature-name">Special Features</td>
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
  );
}
