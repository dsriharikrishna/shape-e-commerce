import Image from "next/image";
import { recentBlogs } from "@/data/blogs";
import Link from "next/link";
export default function BlogSidebar() {
  return (
    <aside className="rbt-sidebar position-sticky sticky-top has-rbt-fshape">
      <div className="rbt-sidebar-widget-wrapper rbt-sidebar-bg-one">
        <div className="rbt-sidebar-top">
          <h6 className="rbt-sidebar-title">
            <i className="fa-regular fa-sliders" />
            Sidebar
            <span className="rbt-fshape-right-portion">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={42}
                height={40}
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
                  fill="var(--color-gray-200)"
                />
              </svg>
            </span>
          </h6>
        </div>
        <div className="rbt-sidebar-bottom">
          {/* Start Widget Area  */}
          <div className="rbt-single-widget">
            <div className="bt-single-widget-inner">
              <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
                Recent Posts
              </h4>
              {recentBlogs.map((item, idx) => (
                <div className="rbt-recent-blog-single" key={idx}>
                  <div className="rbt-recent-blog-single-thumb">
                    <Link href={`/blog-single`}>
                      {item.img && (
                        <Image
                          alt={item.alt || ""}
                          width={160}
                          height={160}
                          src={item.img}
                        />
                      )}
                    </Link>
                  </div>

                  <div className="rbt-blog-recent-info">
                    <div className="rbt-blog-post-meta">
                      <ul className="rbt-blog-details-meta-list">
                        <li>
                          <a href="#">{item.category}</a>
                        </li>
                        <li>
                          <a href="#">{item.date}</a>
                        </li>
                      </ul>
                    </div>

                    <h6 className="rbt-recent-blog-title">
                      <a href="#">{item.title}</a>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End Widget Area  */}
          {/* Start Widget Area  */}
          <div className="rbt-single-widget">
            <div className="bt-single-widget-inner">
              <h4 className="rbt-widget-title rbt-widget-title-without-border">
                Categories
              </h4>
              <ul className="rbt-sidebar-list-wrapper rbt-sidebar-categories-list">
                <li>
                  <a href="#">
                    <span>Food</span>
                    <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Animal</span>
                    <span>20</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Business</span>
                    <span>14</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Art</span>
                    <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Technology</span>
                    <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Architecture</span>
                    <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Space</span>
                    <span>10</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Texture</span>
                    <span>0</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Plant</span>
                    <span>07</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Widget Area  */}
          {/* Start Widget Area  */}
          <div className="rbt-single-widget">
            <div className="bt-single-widget-inner">
              <div className="rbt-sidebar-widget-img">
                <Image
                  alt="Sidebar Banner"
                  width={548}
                  height={688}
                  src="/assets/images/blog-details/blog-thumb-img-6.webp"
                />
              </div>
            </div>
          </div>
          {/* End Widget Area  */}
        </div>
      </div>
    </aside>
  );
}
