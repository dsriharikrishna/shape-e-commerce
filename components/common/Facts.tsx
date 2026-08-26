"use client";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const infoItems = [
  {
    iconClass: "fa-solid fa-bag-shopping",
    text: "90+ Sold Recently",
  },
  {
    iconClass: "fa-solid fa-truck",
    text: "Free shipping",
  },
  {
    iconClass: "fa-solid fa-rotate-left",
    text: "7 Days Return Policy",
  },
];

export default function Facts({
  parentClass = "rbt-text-swiper-container rbt-arrow-vertical",
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      {...{
        loop: true,
        slidesPerView: 1,
        direction: "vertical",
        effect: "slide",
        autoplay: {
          delay: 2000,
          reverseDirection: true,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        },
      }}
      modules={[Navigation, Autoplay]}
      className={parentClass}
    >
      {infoItems.map((item, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="rbt-text-group">
            <span className="icon mr--4">
              <i className={item.iconClass} />
            </span>
            {item.text}
          </div>
        </SwiperSlide>
      ))}
      <div className="rbt-vertical-arrow rbt-arrow-prev" ref={prevRef}>
        <i className="fa-regular fa-chevron-up" />
      </div>
      <div className="rbt-vertical-arrow rbt-arrow-next" ref={nextRef}>
        <i className="fa-regular fa-chevron-down" />
      </div>
    </Swiper>
  );
}
