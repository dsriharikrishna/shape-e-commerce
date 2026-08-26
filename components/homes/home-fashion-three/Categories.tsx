import {
  fashionCategories,
  reversedFashionCategories,
} from "@/data/categories";

import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-catagories-area rbt-bg-color-white rbt-section-gap2Top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--8 p-0 border-0 text-center align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Most Popular
              </span>
            </div>
          </div>
        </div>
        <div className="row row--12">
          <div className="col-lg-12">
            <div className="advance-tab-button">
              <ul
                className="nav nav-tabs tab-button-style-2"
                id="myTab-4"
                role="tablist"
              >
                <li role="presentation">
                  <a
                    href="#"
                    className="tab-button active"
                    id="home-tab-4"
                    data-bs-toggle="tab"
                    data-bs-target="#home-4"
                    role="tab"
                    aria-controls="home-4"
                    aria-selected="true"
                  >
                    <span className="title">Categories</span>
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#"
                    className="tab-button"
                    id="profile-tab-4"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-4"
                    role="tab"
                    aria-controls="profile-4"
                    aria-selected="false"
                  >
                    <span className="title">Collections</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tab-content advance-tab-content-style-2">
              <div
                className="tab-pane fade active show"
                id="home-4"
                role="tabpanel"
                aria-labelledby="home-tab-4"
              >
                <div className="content">
                  {/* Start Card Area */}
                  <div className="row row--12 mt_dec--24">
                    {fashionCategories.map((item, index) => (
                      <div
                        className="col-lg-3 col-md-6 col-6 mt--24"
                        key={index}
                      >
                        <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-two rbt-scroll-trigger fade_in animation-order-1">
                          <Link href={`/shop-by-category`} className="inner">
                            <div className="content">
                              <h5 className="title rbt-bold--text">
                                {item.title}
                              </h5>
                            </div>
                            <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                              <Image
                                alt="Category Product Images"
                                src={`assets/images/catagory-img/${item.image}`}
                                width={624}
                                height={800}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End Card Area */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-4"
                role="tabpanel"
                aria-labelledby="profile-tab-4"
              >
                <div className="content">
                  {/* Start Card Area */}
                  <div className="row row--12 mt_dec--24">
                    {reversedFashionCategories.map((item, index) => (
                      <div
                        className="col-lg-3 col-md-6 col-6 mt--24"
                        key={index}
                      >
                        <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-two rbt-scroll-trigger fade_in animation-order-1">
                          <Link href={`/shop-by-category`} className="inner">
                            <div className="content">
                              <h5 className="title rbt-bold--text">
                                {item.title}
                              </h5>
                            </div>
                            <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                              <Image
                                alt="Category Product Images"
                                src={`assets/images/catagory-img/${item.image}`}
                                width={624}
                                height={800}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End Card Area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
