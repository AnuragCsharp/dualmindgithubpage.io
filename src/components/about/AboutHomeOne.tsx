'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Empower Your Career",
    title: "Master New Skills with Dual Mind Academy",
    des: "Unlock new skills and opportunities with our specialized courses designed for beginners and professionals alike. Join Dual Mind today and accelerate your journey to success."
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Transform Your Future",
    title: "Transform Your Future with Dual Mind Education",
    des: "Gain practical knowledge and certifications that matter. Dual Mind Education offers cutting-edge courses to propel your career forward in today's competitive world."
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Discover Expertise",
    title: "Discover Expertise with Dual Mind",
    des: "Explore our range of expert-led courses tailored to your career goals. Dual Mind specializes in delivering high-quality education to meet the demands of evolving industries."
  }
];


const AboutHomeOne = () => {
  return (
    <>
      <div className="tl_height_130 tl_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".tl_swiper_button_next",
          prevEl: ".tl_swiper_button_prev",
        }}
        pagination={{
          el: ".tl_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="tl_slider tl_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="tl_about tl_style_1">
              <div className="tl_about_bg tl_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="tl_about_text">
                  <div className="tl_section_heading tl_style_1">
                    <div className="tl_section_heading_text">
                      <div className="tl_section_subtitle">{item.sub_title}</div>
                      <h2 className="tl_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="tl_height_40 tl_height_lg_30"></div>
                  <p className="tl_m0">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="tl_swiper_controll">
            <div className="tl_pagination tl_style2 tl_primary_font"></div>
            <div className="tl_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="tl_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="tl_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;