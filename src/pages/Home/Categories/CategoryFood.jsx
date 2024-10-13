import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {  Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitile from "../../../components/SectionTitle/SectionTitile";
const CategoryFood = () => {
  return (
   <section >
    <SectionTitile subHeading={"pick your items"} heading ={'Our Items'}></SectionTitile>
     <Swiper
    slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
    >
      <SwiperSlide className="ml-8">
        <img src={slide1} alt="" />
        <h2 className="uppercase -mt-16 text-center text-purple-600 font-mono text-2xl">Salads</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h2 className="uppercase -mt-16 text-center text-purple-600 font-mono text-2xl">Pizzaas</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h2 className="uppercase -mt-16 text-center text-purple-600 font-mono text-2xl">Soups</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h2 className="uppercase -mt-16 text-center text-purple-600 font-mono text-2xl">Desserts</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h2 className="uppercase -mt-16 text-center text-purple-600 font-mono text-2xl">Salads</h2>
      </SwiperSlide>
    </Swiper>
   </section>
  );
};

export default CategoryFood;
