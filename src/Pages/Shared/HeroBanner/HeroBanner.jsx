import React, { useEffect } from "react";
import "./HeroBanner.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";
import SwiperCore from "swiper";

const HeroBanner = () => {
  SwiperCore.use([Autoplay]);

  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetch("slider-db.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  const handleReadMoreBtn = () => {
    alert();
  };
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={8}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {banner.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slider-parent">
            <img src={item.image} alt="item__img" />
            <div className="slider-inner-info">
              <h4>{item.category}</h4>
              <h4>{item.title}</h4>
              <button className="slider-read-btn" onClick={handleReadMoreBtn}>
                READ MORE
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroBanner;