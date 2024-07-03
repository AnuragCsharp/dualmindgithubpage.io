
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blog_data from '@/data/blog_data';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BlogHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      {style_2 ? null : <div className="tl_height_150 tl_height_lg_60"></div>}
      <section>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_1">
            <div className="tl_section_heading_text">
              <div className="tl_section_subtitle anim_div_ShowZoom">
                Our Blog
              </div>
              <h2 className="tl_section_title anim_heading_title">
                New Day <br />New Inspiration
              </h2>
            </div>
            <div className="tl_section_heading_right tl_btn_anim">
              <Link href="/blog" className="tl_btn tl_style_1">
                <span>View All Blogs</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="tl_height_100 tl_height_lg_60"></div>
          <Swiper
            loop={true}
            speed={1000}
            autoplay={true}
            spaceBetween={30}
            slidesPerView="auto"
            modules={[Autoplay]}
            pagination={{
              el: ".tl_pagination",
              clickable: true,
            }}
            className="tl_slider tl_slider_3 tl_row_slider tl_vw_none anim_blog">
            {blog_data.map((item, i) =>
              <SwiperSlide key={i} className="swiper-slide">
                <div className="tl_post tl_style_1">
                  <Link href="/blog-details" className="tl_post_thumb">
                    <Image src={item.img} alt="Thumb" />
                  </Link>
                  <div className="tl_post_info">
                    <h2 className="tl_post_title">
                      <Link href="/blog-details">{item.title}</Link>
                    </h2>
                    <p className="tl_m0">
                      {item.des}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )}

          </Swiper>
        </div>
      </section>
      <div className="tl_height_150 tl_height_lg_60"></div>
    </>
  );
};

export default BlogHomeTwo;