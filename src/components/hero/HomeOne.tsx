
'use client' 
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    img: `/assets/img/hero_2.jpg`,
    sub_title: "Professional Training Workshops",
    title: "Stay Updated with the Latest Technologies at Dual Mind",
    des: "Welcome to Dual Mind, where we specialize in providing professional training workshops on the latest technologies and programming languages. From hands-on sessions to expert-led courses, empower yourself with the skills that drive innovation and success in today's dynamic tech landscape."
  },
  {
    img: `/assets/img/hero_2.jpg`,
    sub_title: "Expertise in Technology Education",
    title: "Empower Your Career with Dual Mind's Tech Training",
    des: "Discover the power of learning with Dual Mind's expertise in technology education. We offer comprehensive training programs designed to equip you with in-demand skills and knowledge. Transform your career trajectory with Dual Mind's industry-relevant courses."
  },
  {
    img: `/assets/img/hero_2.jpg`,
    sub_title: "Advanced Programming Workshops",
    title: "Advance Your Skills with Dual Mind's Programming Workshops",
    des: "Take your programming skills to the next level with Dual Mind's advanced workshops. Stay ahead in the competitive tech world with hands-on learning experiences and expert guidance. Join Dual Mind and master the art of coding with confidence."
  }
];


const HomeOne = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="tl_slider tl_slider_1">
        {hero_slider.map((item, index) =>
          <SwiperSlide key={index} className="swiper-slide">
            <div className="tl_hero tl_style1 tl_center tl_parallax">
              <div className="tl_hero_bg tl_bg tl_parallax_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="tl_hero_text">
                  <div className="tl_hero_mini_title">
                    <svg width="134" height="12" viewBox="0 0 134 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="#101010" />
                    </svg>
                    {item.sub_title}
                  </div>
                  <div className="tl_height_20 tl_height_lg_20"></div>
                  <h1 className="tl_hero_title">
                    {item.title}
                  </h1>
                  <div className="tl_height_70 tl_height_lg_60"></div>
                  <div className="tl_hero_text_in">
                    <div className="tl_hero_subtitle">
                      {item.des}
                    </div>
                    <div className="tl_height_65 tl_height_lg_40"></div>
                    <div className="tl_hero_btn_wrap">
                      <div className="tl_round_btn_wrap tl_btn_anim">
                        <Link href="/portfolio"
                          className="tl_hero_btn tl_round_btn btn-item"><span></span>
                          Our
                          Projects</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        <div className="tl_pagination tl_style1"></div>
      </Swiper>
    </>
  );
};

export default HomeOne;