'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';


type DataType = StaticImageData[];
import brand_img_1 from "@/assets/img/partner_1.svg"
import brand_img_2 from "@/assets/img/partner_2.svg"
import brand_img_3 from "@/assets/img/partner_3.svg"
import brand_img_4 from "@/assets/img/partner_4.svg"
import brand_img_5 from "@/assets/img/partner_5.svg"
import brand_img_6 from "@/assets/img/partner_6.svg"
import brand_img_7 from "@/assets/img/partner_7.svg"
import brand_img_8 from "@/assets/img/partner_8.svg"
import brand_img_9 from "@/assets/img/partner_11.svg"
const brand_data: DataType = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_7,
  brand_img_8,
  brand_img_9,

]

import brand_thumb_1 from "@/assets/img/partner_9.svg"
import brand_thumb_2 from "@/assets/img/partner_10.svg"
import brand_thumb_3 from "@/assets/img/partner_11.svg"
import brand_thumb_4 from "@/assets/img/partner_12.svg"
import brand_thumb_5 from "@/assets/img/partner_13.svg"
import brand_thumb_6 from "@/assets/img/partner_14.svg"
import brand_thumb_7 from "@/assets/img/partner_15.svg"
import brand_thumb_8 from "@/assets/img/partner_1.svg"
import brand_thumb_9 from "@/assets/img/partner_3.svg"


const brand_thumb_data: DataType = [
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_3,
  brand_thumb_4,
  brand_thumb_5,
  brand_thumb_6,
  brand_thumb_7,
  brand_thumb_8,
  brand_thumb_9,
]


const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <> 
      
      {style_2 ?
        <>
          <div className="tl_height_150 tl_height_lg_60"></div>
          <p className="text-center tl_font_18 tl_normal">
            130+ Our Client & Partner We Are Working Together
          </p>
          <div className="tl_height_100 tl_height_lg_60"></div>
        </>
        :
        <div className="tl_height_140 tl_height_lg_70"></div>
      }
      <div className="tl_moving_section_left_wrap tl_bold tl_moving_section_left_hover_push">
        <div className="tl_moving_section_left_in">
          <div className="tl_moving_section_left tl_animation_speed_left_40">
            <div className="tl_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="tl_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
          <div className="tl_moving_section_left tl_animation_speed_left_40">
            <div className="tl_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="tl_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="tl_height_45 tl_height_lg_45"></div>
      <div className="tl_moving_section_left_wrap tl_bold tl_moving_section_left_hover_push">
        <div className="tl_moving_section_left_in">
          <div className="tl_moving_section_left tl_animation_speed_left_50">
            <div className="tl_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="tl_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
          <div className="tl_moving_section_left tl_animation_speed_left_50">
            <div className="tl_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="tl_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {style_2 ? null :
        <div className="tl_height_140 tl_height_lg_70"></div>
      } */}
      <div className="tl_height_140 tl_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;