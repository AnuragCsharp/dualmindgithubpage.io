import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import facebook from "@/assets/img/fb_1.png";
import linedin from "@/assets/img/linedin_1.png";
import twitter from "@/assets/img/twitter_1.png";
import dm_banner from "@/assets/img/dm_banner.png";

interface DataType {
  title_1: string;
  title_2: string;
  bt_text: string;
  des: string;
  social_links: {
    id: number;
    img: StaticImageData;
    link: string;
  }[];
}

const hero_data: DataType = {
  title_1: "Dual",
  title_2: "Mind",
  bt_text: "Services",
  des: `Unlock new skills and opportunities with our specialized courses designed for beginners and professionals alike. Join Dual Mind today and accelerate your journey to success.`,
  social_links: [
    {
      id: 1,
      img: facebook,
      link: "http://www.facebook.com",
    },
    {
      id: 2,
      img: linedin,
      link: "http://www.linedin.com",
    },
    {
      id: 3,
      img: twitter,
      link: "http://www.twitter.com",
    },
  ],
};

const { title_1, title_2, bt_text, des, social_links } = hero_data;

const HeroHomeFive = () => {
  return (
    <>
      <div className="tl_height_219 tl_height_lg_120"></div>
      <section className="tl_shape_wrap_3">
        <div className="tl_hero tl_style5">
          <div className="container">
            <div className="tl_marketing_agency_section tl_style_1">
              <div className="tl_text_img">
                <h1 className="tl_banner_text tl_mp0 anim_banner_text_left">
                  {title_1}
                </h1>
                <div className="tl_img">
                  <Image src={dm_banner} alt="Dmbanner" />
                </div>
              </div>
              <div className="tl_height_lg_20"></div>

              <div className="tl_text_btn anim_div_ShowDowns">
                <div className="tl_hero_btn_wrap">
                  <div className="tl_round_btn_wrap">
                    <Link
                      href="/portfolio"
                      className="tl_hero_btn tl_round_btn btn-item"
                    >
                      <span></span>
                      {bt_text}
                    </Link>
                  </div>
                </div>
                <h1 className="tl_banner_text tl_text_size tl_m0 anim_banner_text_right">
                  {title_2}
                </h1>
              </div>
              <p className="tl_subtext anim_subtext">{des}</p>
            </div>
          </div>

          <div className="tl_icon_section">
            <p className="tl_font_16 text-uppercase m-0">FOLLOW US</p>
            <div className="tl_hr_design"></div>
            <div className="tl_icon_img social_link">
              {social_links.map((item, i) => (
                <a key={i} href={item.link} target="_blank">
                  <Image
                    src={item.img}
                    alt="fb_1"
                    className={`${i === 1 ? "social_link_style" : ""}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="tl_shape_2">
          <svg
            width="149"
            height="149"
            viewBox="0 0 149 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.23">
              <path
                d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                fill="#454545"
              ></path>
              <path
                d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                fill="#454545"
              ></path>
            </g>
          </svg>
        </div>
      </section>
      <div className="tl_height_135 tl_height_lg_60"></div>
    </>
  );
};

export default HeroHomeFive;
