import { roundedCategoryCards } from "@/data/categories";

import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-catagories-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Popular by Categories</span>
              </h4>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/categories-list`}
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--8 mt_dec--16 align-items-end">
          {roundedCategoryCards.map((item, index) => (
            <div
              className="col-lg-2 col-md-3 col-sm-3 col-4 mt--16"
              key={index}
            >
              <Link
                className={`rbt-cat-box rbt-cat-box-1 rbt-cat-box-1-rounded text-center rbt-scroll-trigger fade_in animation-order-${item.animation}`}
                href={`/shop-by-categories`}
              >
                <div className="inner">
                  <div
                    className={`rbt-image-portion rbt-bg-color-brand-100 rbt-scroll-trigger zoom_in animation-order-${item.animation}`}
                  >
                    <Image
                      alt="Category Product Images"
                      src={item.img || ""}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">{item.title}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
