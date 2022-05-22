import React, { useEffect } from "react";
import "./Services.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import service1 from '../../../Assets/monota-img/c1.jpg';
import service2 from '../../../Assets/monota-img/c2.jpg';
import service3 from '../../../Assets/monota-img/c3.jpg';
import service4 from '../../../Assets/monota-img/c4.jpg';
import service5 from '../../../Assets/monota-img/c5.jpg';

const Services = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slider-parent">
            <img src={service1} alt="service__img" />
            <div className="slider-inner-info">
              <h4>Performance fast</h4>
              <button className="slider-read-btn">
                EXPLORE MORE
              </button>
            </div>
          </SwiperSlide>
        <SwiperSlide className="swiper-slider-parent">
            <img src={service2} alt="service__img" />
            <div className="slider-inner-info">
              <h4>Body Parts</h4>
              <button className="slider-read-btn">
                EXPLORE MORE
              </button>
            </div>
          </SwiperSlide>
        <SwiperSlide className="swiper-slider-parent">
            <img src={service3} alt="service__img" />
            <div className="slider-inner-info">
              <h4>Light Parts</h4>
              <button className="slider-read-btn">
                EXPLORE MORE
              </button>
            </div>
          </SwiperSlide>
        <SwiperSlide className="swiper-slider-parent">
            <img src={service4} alt="service__img" />
            <div className="slider-inner-info">
              <h4>Repair Parts</h4>
              <button className="slider-read-btn">
                EXPLORE MORE
              </button>
            </div>
          </SwiperSlide>
        <SwiperSlide className="swiper-slider-parent">
            <img src={service5} alt="service__img" />
            <div className="slider-inner-info">
              <h4>Wheels & Tires</h4>
              <button className="slider-read-btn">
                EXPLORE MORE
              </button>
            </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Services;