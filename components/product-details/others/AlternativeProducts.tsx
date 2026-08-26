"use client";
import Image from "next/image";
import { alternativeProducts } from "@/data/products/others";
import Link from "next/link";

import { useContextElement } from "@/context/Context";

export default function AlternativeProducts() {
  const { setQuickViewItem } = useContextElement();
  return (
    <div className="rbt-list-product-container d-flex flex-column rbt-gap--24">
      {alternativeProducts.map((product, index) => (
        <div
          className="rbt-single-element d-flex align-items-center"
          key={index}
        >
          <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm rbt-prd-sing-add-card">
            <div className="inner">
              <div className="rbt-card-img rbt-bg-color-default">
                <a href={`/product-single-default/${product.id}`}>
                  <Image
                    alt="Card Image"
                    src={product.imgSrc}
                    width={180}
                    height={180}
                  />
                </a>
              </div>
              <div className="rbt-card-body d-flex rbt-gap--8 align-items-center">
                <div className="left-part">
                  <Link
                    href={`/shop-by-category`}
                    className="rbt-card-subtitle b4 rbt-card-catagories-text mt--0"
                  >
                    <i className={`${product.iconClass} mr--4`} />
                    {product.category}
                  </Link>
                  <h6 className="rbt-card-title">
                    <a href={`/product-single-default/${product.id}`}>
                      {product.title}
                    </a>
                  </h6>
                </div>
                <div className="right-part">
                  <div className="rbt-card-rating">
                    <ul className="rbt-rating-icon-list">
                      {[...Array(3)].map((_, i) => (
                        <li key={`filled-${i}`}>
                          <i className="fa-solid fa-star rbt-rated-icon" />
                        </li>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <li key={`empty-${i}`}>
                          <i className="fa-solid fa-star" />
                        </li>
                      ))}
                    </ul>
                    <p className="rating-digit">(46)</p>
                  </div>
                  <div className="pricing-part">
                    <del className="price-text">
                      ${(product.oldPrice ?? 0).toFixed(2)}
                    </del>
                    <span className="price-text">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rbt-create-new-btn">
            <button
              className="rbt-btn rbt-btn-xs text-nowrap"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
              onClick={() => setQuickViewItem(product)}
            >
              ADD <i className="fa-solid fa-plus ml--4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
