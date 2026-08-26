import Link from "next/link";
import Image from "next/image";
import { blogCards } from "@/data/blogs";

export default function Blogs2() {
  return (
    <div className="rbt-component-area rbt-blog-post-card-area rbt-bg-color-gray-light rbt-section-gap3Top rbt-section-gap2Bottom">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {blogCards.map((card, idx) => (
            <div className="col-12 col-md-6 col-xl-4 mt--24" key={idx}>
              <div className="rbt-blog-post-card">
                <div className="rbt-blog-post-card-inner">
                  <Link
                    href={`/blog-single`}
                    className="rbt-blog-thumbnail rbt-curved-style-box"
                  >
                    {card.img && (
                      <Image
                        alt={card.alt || ""}
                        width={624}
                        height={474}
                        src={card.img}
                      />
                    )}
                  </Link>

                  <div className="rbt-blog-content">
                    <div className="rbt-blog-meta-area">
                      <ul className="rbt-blog-details-meta-list">
                        <li>
                          <a href="#">{card.category}</a>
                        </li>
                        <li>
                          <a href="#">{card.date}</a>
                        </li>
                      </ul>
                    </div>

                    <h6 className="rbt-blog-title">
                      <Link href={`/blog-single`}>{card.title}</Link>
                    </h6>

                    <div className="rbt-blog-meta-area mt--8">
                      <ul className="rbt-blog-details-meta-list has-no-separator">
                        <li>
                          <p className="d-flex rbt-gap--4">
                            <span className="icon">
                              <i className="fa-regular fa-clock" />
                            </span>
                            {card.readMins} Min To Read
                          </p>
                        </li>
                        <li>
                          <p className="d-flex rbt-gap--4">
                            <span className="icon">
                              <i className="fa-regular fa-user" />
                            </span>
                            {card.author}
                          </p>
                        </li>
                      </ul>
                    </div>

                    <Link
                      className="rbt-btn rbt-btn-secondary rbt-btn-md mt--16"
                      href={`/blog-single`}
                    >
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon">
                        <i className="ml--4 fa-solid fa-arrow-up-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rbt-paination-section mt--60">
          <nav className="rbt-nav-effect-activation text-center">
            <ul className="rbt-pagination d-inline-flex">
              <li>
                <a href="#!" aria-label="Previous" className="active">
                  <i className="fa-regular fa-chevron-left" />
                </a>
              </li>
              <li>
                <a href="#!">1</a>
              </li>
              <li>
                <a href="#!">2</a>
              </li>
              <li>
                <a href="#!">3</a>
              </li>
              <li>
                <a href="#!" aria-label="Next">
                  <i className="fa-regular fa-chevron-right" />
                </a>
              </li>
            </ul>
            <div className="rbt-bg-highlight rbt-pagination-bg-highlight" />
          </nav>
        </div>
      </div>
    </div>
  );
}
