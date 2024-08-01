import React from "react";
import { Swiper } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
const Slider = (props) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      modules={[]}
      className="mySwiper mySwipers"
    >
      {props.children}
    </Swiper>
  );
};

export default Slider;