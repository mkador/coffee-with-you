import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
const CategoryFood = () => {
  return (
    <Swiper
      slidesPerView={3}
      grid={{
        rows: 2,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CategoryFood;
