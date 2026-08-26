import Image from "next/image";

export default function Gallery2({
  cardClass = "col-xl-12 col-sm-6 col-12 mt--16",
}) {
  return (
    <>
      <div className={cardClass}>
        <div className="thumbnail position-relative">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            href="/assets/images/product-img/fashion/product-a-03.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              src="/assets/images/product-img/fashion/product-a-03.webp"
              width={624}
              height={846}
            />
            <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
              NEW
            </div>
            <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
              HOt
            </div>
          </a>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 col-12 mt--16">
        <div className="thumbnail">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            href="/assets/images/product-img/fashion/product-a-01.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              src="/assets/images/product-img/fashion/product-a-01.webp"
              width={624}
              height={846}
            />
          </a>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 col-12 mt--16">
        <div className="thumbnail">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            href="/assets/images/product-img/fashion/product-a-02.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              src="/assets/images/product-img/fashion/product-a-02.webp"
              width={624}
              height={846}
            />
          </a>
        </div>
      </div>
      <div className="col-xl-12 col-sm-6 col-12 mt--16">
        <div className="thumbnail">
          <a
            className="rbt-product-single-img"
            data-fancybox="gallery"
            href="/assets/images/product-img/fashion/product-a-04.webp"
          >
            <Image
              className="w-100 rbt-rounded--12"
              alt="Product Images"
              src="/assets/images/product-img/fashion/product-a-04.webp"
              width={624}
              height={846}
            />
          </a>
        </div>
      </div>
    </>
  );
}
