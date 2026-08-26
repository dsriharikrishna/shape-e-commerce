import Image from "next/image";

export default function Gallery4() {
  return (
    <div className="row row--8 align-items-center rbt-mobile-row rbt-masonary-variation-markup position-relative">
      <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
        NEW
      </div>
      <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
        HOT
      </div>
      <div className="col-xl-12 col-sm-6 col-12 rbt-scroll-trigger fade_in animatin-order-1">
        <div className="thumbnail position-relative">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            data-src="/assets/images/product-img/fashion/product-a-03.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              width={624}
              height={846}
              src="/assets/images/product-img/fashion/product-a-03.webp"
            />
          </a>
        </div>
      </div>
      <div className="col-xl-4 col-sm-6 col-12 rbt-scroll-trigger fade_in animatin-order-2 mt--16">
        <div className="thumbnail">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            data-src="/assets/images/product-img/fashion/product-a-01.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              width={624}
              height={846}
              src="/assets/images/product-img/fashion/product-a-01.webp"
            />
          </a>
        </div>
      </div>
      <div className="col-xl-8 col-sm-6 col-12 rbt-scroll-trigger fade_in animatin-order-3 mt--16">
        <div className="thumbnail">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            data-src="/assets/images/product-img/fashion/product-a-02.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              width={624}
              height={846}
              src="/assets/images/product-img/fashion/product-a-02.webp"
            />
          </a>
        </div>
      </div>
      <div className="col-xl-8 col-sm-6 col-12 rbt-scroll-trigger fade_in animatin-order-4 mt--16">
        <div className="thumbnail">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            data-src="/assets/images/product-img/fashion/product-a-04.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              width={624}
              height={846}
              src="/assets/images/product-img/fashion/product-a-04.webp"
            />
          </a>
        </div>
      </div>
      <div className="col-xl-4 col-sm-6 col-12 rbt-scroll-trigger fade_in animatin-order-5 mt--16">
        <div className="thumbnail">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            data-src="/assets/images/product-img/fashion/product-a-03.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              width={624}
              height={846}
              src="/assets/images/product-img/fashion/product-a-03.webp"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
