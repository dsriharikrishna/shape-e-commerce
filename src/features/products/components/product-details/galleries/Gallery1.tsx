import Image from "next/image";

const galleryImages = [
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-lg-01.webp",
    width: 2572,
    height: 1436,
    colClass: "col-xl-12",
  },
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-md-04.webp",
    width: 1230,
    height: 1230,
    colClass: "col-xl-6 mt--16",
  },
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-md-03.webp",
    width: 1230,
    height: 1230,
    colClass: "col-xl-6 mt--16",
  },
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-md-02.webp",
    width: 1230,
    height: 1230,
    colClass: "col-xl-6 mt--16",
  },
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-md-01.webp",
    width: 1230,
    height: 1230,
    colClass: "col-xl-6 mt--16",
  },
];

export default function Gallery1() {
  return (
    <>
      {galleryImages.map((img, index) => (
        <div
          key={index}
          className={`${
            img.colClass
          } col-sm-6 col-12 rbt-scroll-trigger fade_in animatin-order-${
            index + 1
          }`}
        >
          <div className="thumbnail position-relative">
            <a
              className="rbt-product-single-img"
              data-fancybox="gallery"
              data-src={img.src}
            >
              <Image
                className="w-100 rbt-rounded--12"
                alt="Product Images"
                src={img.src}
                width={img.width}
                height={img.height}
              />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
