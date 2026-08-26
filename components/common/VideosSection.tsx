import MagneticButton from "@/components/common/MagneticButton";
import { instagramPosts } from "@/data/instagramPosts";
import Image from "next/image";

export default function VideosSection() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 mb--32 align-items-center">
              <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                Meet The{" "}
                <span className="rbt-bold--text">Skin Influencers</span>
              </h4>
            </div>
          </div>
        </div>
        {/* Start Instagram Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {instagramPosts.map((post, index) => (
            <div
              className="col-lg-1-5 col-xl-3 col-xxl-3 col-md-6 col-sm-12 col-12 mt--24"
              key={index}
            >
              <div className="rbt-instagram-card">
                <div className="instagram-thumbnail">
                  <Image
                    alt="Instagram Post"
                    src={post.imgSrc || ""}
                    width={490}
                    height={760}
                  />
                  <MagneticButton
                    as="a"
                    className="rbt-btn rounded-player popup-video rbtplayer sm-size bg-var-three"
                    data-rbt-position-vertical={50}
                    data-rbt-position-horigental={50}
                    href={post.videoLink}
                    data-fancybox=""
                  >
                    <span>
                      <i className="fa-solid fa-play" />
                    </span>
                  </MagneticButton>
                </div>
                <h6 className="rbt-instagram-caption">
                  <a href={post.videoLink} data-fancybox="">
                    <strong>{post.username}</strong> - {post.caption}
                  </a>
                </h6>
              </div>
            </div>
          ))}
        </div>
        {/* End Instagram Card Area */}
      </div>
    </div>
  );
}
