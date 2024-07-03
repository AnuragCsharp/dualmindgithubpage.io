
import React from 'react';
import Image from 'next/image';
import hero_img from '@/assets/img/creative_banner_img.jpg';

const hero_data = {
  title_1: "Creative",
  title_2: "Portfolio",
  des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and developmen.`
}
const { title_1, title_2, des } = hero_data;

const HeroHomeFour = () => {
  return (
    <>
      <section>
        <div className="tl_hero tl_style3 tl_bg_color">
          <div className="tl_banner_img">
            <Image src={hero_img} className="h-100 w-100" alt="creative_banner_img" />
          </div>
          <div className="container">
            <div className="tl_hero_text">
              <h1 className="tl_hero_title anim_banner_text_left">{title_1}</h1>
              <h1 className="tl_hero_subTitle anim_banner_text_right">
                {title_2}
              </h1>
              <p className="tl_hero_p tl_subtext anim_subtext">{des}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="tl_height_150 tl_height_lg_60"></div>
    </>
  );
};

export default HeroHomeFour;
