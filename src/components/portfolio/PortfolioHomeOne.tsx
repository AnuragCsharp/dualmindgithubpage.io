'use client'
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from '@/assets/img/portfolio_1.jpg';
import portfolio_img_2 from '@/assets/img/portfolio_2.jpg';
import portfolio_img_3 from '@/assets/img/portfolio_3.jpg';

interface DataType {
  img: StaticImageData;
  title: string;
  category: string;
}[]

const portfolio_slider: DataType[] = [
  {
    img: portfolio_img_1,
    title: `Data Science`,
    category: `Digital Services / App Design`,
  },
  {
    img: portfolio_img_2,
    title: `C# Developer`,
    category: `Digital Services / Web Design`,
  },
  {
    img: portfolio_img_3,
    title: `Cloud Computing`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_1,
    title: `DevOps Engineer`,
    category: `Digital Services / App Design`,
  },
  {
    img: portfolio_img_2,
    title: `Game Development`,
    category: `Digital Services / Web Design`,
  },
  {
    img: portfolio_img_3,
    title: `MERN/ MEAN`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_3,
    title: `App Development - Flutter`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_3,
    title: `Digital Marketing`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_3,
    title: `Digital Marketing`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_3,
    title: `Basic Courses`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_3,
    title: `Special Packages`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_3,
    title: `MERN/ MEAN`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_3,
    title: `Share Market`,
    category: `Digital Services / Figma Design`,
  },
  {
    img: portfolio_img_3,
    title: `MERN/ MEAN`,
    category: `Digital Services / Figma Design`,
  },
]


const PortfolioHomeOne = () => {
  return (
    <>
      <div className="tl_horizontal_scroll_wrap">
        <div className="tl_height_145 tl_height_lg_60"></div>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_2">
            <div className="tl_section_heading_text">
              <div className="tl_section_subtitle anim_div_ShowZoom">
                Portfolio
              </div>
              <h2 className="tl_section_title anim_heading_title">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
          <div className="tl_height_100 tl_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          autoplay={true}
          shortSwipes={true}
          speed={1000}
          slidesPerView="auto" 
          // pagination={{
          //   el: ".tl_pagination",
          //   clickable: true,
          // }}
          className="tl_horizontal_scrolls anim_div_ShowDowns">
          {portfolio_slider.map((item, i) =>
            <SwiperSlide key={i} className="swiper-slide">
              <div className="tl_horizontal_scroll">
                <Link href="/portfolio-details" className="tl_portfolio tl_style_1">
                  <div className="tl_portfolio_img">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="tl_portfolio_overlay"></div>
                  <div className="tl_portfolio_info">
                    <h2 className="tl_portfolio_title">
                      {item.title}
                    </h2>
                    <div className="tl_portfolio_subtitle">
                      {item.category}
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          )} 

        </Swiper>
      </div>
      <div className="tl_height_145 tl_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;