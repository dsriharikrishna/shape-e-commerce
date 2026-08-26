import Link from "next/link";
import CompareItemLength from "../common/CompareItemLength";
import WishlistLength from "../common/WishlistLength";
export default function Toolbar() {
  return (
    <div className="rbt-toolbar rbt-toolbar--bottom d-block d-xl-none">
      <div className="container p--0">
        <div className="row row row--0">
          <div className="col-md-12">
            <ul className="rbt-quick-access onepagenav">
              <li className="rbt-access-box">
                <a
                  href="#!"
                  className="rbt-round-btn has-rbt-md-fsize"
                  data-bs-toggle="modal"
                  data-bs-target="#compareReviewModal"
                >
                  <i className="fa-regular fa-code-compare" />
                  <div className="access-box-count">
                    {" "}
                    <CompareItemLength />
                  </div>
                  <span className="rbt-toolbar-label"> Compare</span>
                </a>
              </li>
              <li className="rbt-access-box rbt-wishlist">
                <a
                  className="rbt-round-btn has-rbt-md-fsize"
                  href="#!"
                  data-bs-toggle="modal"
                  data-bs-target="#wishlistModal"
                >
                  <i className="fa-regular fa-heart" />
                  <div className="access-box-count">
                    <WishlistLength />
                  </div>
                  <span className="rbt-toolbar-label"> Wishist</span>
                </a>
              </li>
              <li className="rbt-access-box">
                <a
                  className="rbt-common-search-trigger-active rbt-round-btn has-rbt-md-fsize rbt-modern-close-btn"
                  href="#!"
                >
                  <i className="fa-regular fa-search search-icon" />
                  <div className="modern-close-wrapper" />
                  <span className="rbt-toolbar-label"> Search</span>
                </a>
              </li>
              <li className="rbt-access-box rbt-mini-cart">
                <Link className="rbt-round-btn has-rbt-md-fsize" href={`/shop`}>
                  <i className="fa-regular fa-bag-shopping" />
                  <span className="rbt-toolbar-label"> Shop</span>
                </Link>
              </li>
              <li className="rbt-access-box">
                <a
                  href="#!"
                  className="rbt-round-btn has-rbt-md-fsize"
                  data-bs-toggle="modal"
                  data-bs-target="#signinModal"
                >
                  <i className="fa-regular fa-user" />
                  <span className="rbt-toolbar-label"> Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
