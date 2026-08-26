import Image from "next/image";

export default function IntroVideo() {
  return (
    <div className="rbt-component-area rbt-about-area rbt-section-gap2Top rbt-section-gap2Bottom">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="rbt-about-feature-area">
              <div className="inner">
                <div className="section-title text-start">
                  <h3 className="rbt-title mb--16">
                    We are the world's biggest electronics online store where
                    innovation meets the real printing.
                  </h3>
                  <p className="b1 rbt-text-color-gray-600 mb--24">
                    Let the beauty of what you love be what you do. Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy
                    text ever since the, remaining essentially.
                  </p>
                  <div className="read-more-btn">
                    <a
                      className="rbt-btn"
                      href="https://www.youtube.com/watch?v=abFXQQzFVDc"
                      data-fancybox=""
                    >
                      Play Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="video-popup-wrapper rbt-curved-style-box">
              <Image
                className="w-100 rbt-radius"
                alt="Video Images"
                src="/assets/images/about/about-image-6.webp"
                width="1126"
                height="846"
              />
              <a
                className="rbt-btn rounded-player popup-video position-to-top rbtplayer"
                href="https://www.youtube.com/watch?v=abFXQQzFVDc"
                data-fancybox=""
              >
                <span>
                  <i className="fa-solid fa-play"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
