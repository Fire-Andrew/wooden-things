"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ItemSlider.module.scss";

// import seoStyles from "@/app/seoStyles.module.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Keyboard,
  FreeMode,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./ItemSliderTop.css";


const ItemSlider = ({ images, customClass }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(
      images.map((el, index) => {
        const imgLoading = index === 0 ? "eager" : "lazy";
        const imgPriority = index === 0 ? true : false;
       
        return (
          <SwiperSlide key={index}>
            <Image
              src={el.src}
              alt="Kitchen board"
              fill={true}
              loading={imgLoading}
              sizes="(max-width: 743px) 95vw, (max-width: 1279px) 90vw, 636px"
              priority={imgPriority}
            />
          </SwiperSlide>
        );
      })
    );
  }, [images]);


  return (
    <article className={`${styles.swiperContainer} ${customClass}`}>
      {/* <h4 className={seoStyles.titleHidden}>
        Detailed images of the apartment
      </h4> */}

      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}       
        keyboard={{
          enabled: true,
        }}
        modules={[FreeMode, Navigation, Keyboard]}
        className="ItemSliderTop"
      >
        {item}
      </Swiper>
    </article>
  );
};


export default ItemSlider;