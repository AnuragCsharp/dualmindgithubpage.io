
'use client'

import React from 'react';
import gellary_img_1 from "@/assets/img/about_gallery_1.jpg";
import gellary_img_2 from "@/assets/img/about_gallery_2.jpg";
import gellary_img_3 from "@/assets/img/about_gallery_3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

 
const gellary_data = [
  gellary_img_1,
  gellary_img_2,
  gellary_img_3,
  gellary_img_1,
  gellary_img_2,
  gellary_img_3,
]


const Gellary = ({style_2}: any) => {
  return (
    <>
    {style_2 ? null : <div className="tl_height_150 tl_height_lg_60"></div>}      
      <section>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_1">
            <div className="tl_section_heading_text">
              <div className="tl_section_subtitle anim_div_ShowZoom">Gallery</div>
              <h2 className="tl_section_title anim_heading_title">
                Inspiring Creativity A Gallery of Work from Our Creative Agency
              </h2>
            </div>
          </div>
          <div className="tl_height_150 tl_height_lg_60"></div>
        </div>
        <Swiper 
        loop={true}
        speed={1000}
        slidesPerView="auto"
        spaceBetween={30}
        pagination={{ el: ".tl_pagination", clickable: true }}
        className="tl_slider tl_slider_6">
          {gellary_data.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image src={item} className="card-img" alt="image-here" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Gellary;