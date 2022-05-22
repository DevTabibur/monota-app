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
import slider1 from "../../../Assets/monota-img/slide1-1920x880.jpg";
import slider2 from "../../../Assets/monota-img/slide2-1920x880.jpg";
import slider3 from "../../../Assets/monota-img/slide3-1920x880.jpg";

const HeroBanner = () => {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="slider-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider-1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroBanner;
