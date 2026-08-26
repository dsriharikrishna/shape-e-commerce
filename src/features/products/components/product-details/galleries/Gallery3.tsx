import Image from "next/image";

export default function Gallery3() {
  return (
    <>
      <div className="col-xl-6 col-lg-12 col-12 mt--16">
        <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt d-flex rbt-gap--24">
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-6 col-6 mt--24">
              <div className="thumbnail">
                <a
                  href="/assets/images/product-img/fashion/product-01.webp"
                  data-fancybox="gallery"
                  className="rbt-product-single-img"
                >
                  <Image
                    className="rbt-rounded--12"
                    data-zoom-image="/assets/images/product-img/fashion/product-01.webp"
                    alt="Product Images"
                    src="/assets/images/product-img/fashion/product-01.webp"
                    width={624}
                    height={846}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-6 mt--24">
              <div className="thumbnail">
                <a
                  href="/assets/images/product-img/fashion/product-02.webp"
                  data-fancybox="gallery"
                  className="rbt-product-single-img"
                >
                  <Image
                    className="rbt-rounded--12"
                    data-zoom-image="/assets/images/product-img/fashion/product-02.webp"
                    alt="Product Images"
                    src="/assets/images/product-img/fashion/product-02.webp"
                    width={624}
                    height={846}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-6 mt--24">
              <div className="thumbnail">
                <a
                  href="/assets/images/product-img/fashion/product-03.webp"
                  data-fancybox="gallery"
                  className="rbt-product-single-img"
                >
                  <Image
                    className="rbt-rounded--12"
                    data-zoom-image="/assets/images/product-img/fashion/product-03.webp"
                    alt="Product Images"
                    src="/assets/images/product-img/fashion/product-03.webp"
                    width={624}
                    height={846}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-6 mt--24">
              <div className="thumbnail">
                <a
                  href="/assets/images/product-img/fashion/product-04.webp"
                  data-fancybox="gallery"
                  className="rbt-product-single-img"
                >
                  <Image
                    className="rbt-rounded--12"
                    data-zoom-image="/assets/images/product-img/fashion/product-04.webp"
                    alt="Product Images"
                    src="/assets/images/product-img/fashion/product-04.webp"
                    width={624}
                    height={846}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
