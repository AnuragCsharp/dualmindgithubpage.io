 

import React from 'react';
import agency_story_1 from "@/assets/img/agency_story_1.jpg"
import agency_story_2 from "@/assets/img/agency_story_2.jpg"
import agency_story_4 from "@/assets/img/agency_story_4.jpg"
import agency_story_3 from "@/assets/img/agency_story_3.jpg"
import Image from 'next/image';


interface DataType {
  subtitle: string;
  title: string;
  des: string;
}
const about_content: DataType = {
  subtitle: `Our Agency Story`,
  title: `How Our Agency is Pushing the Boundaries of Online Marketing and Design`,
  des: `Digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digital to drive growth and reach your goals.`,
}
const { subtitle, title, des } = about_content

const About = () => {
  return (
    <>
      <div className="tl_height_150 tl_height_lg_60"></div>
      <section>
        <div className="tl_primary_bg">
          <div className="container">
            <div className="tl_height_100 tl_height_lg_60"></div>
            <div className="tl_section_heading_hr tl_style_1">
              <div className="tl_hr_design"></div>
              <div className="tl_section_heading tl_style_1 tl_color_1">
                <div className="tl_section_heading_text">
                  <h2 className="tl_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="tl_hr_design"></div>
            </div>
            <div className="tl_height_100 tl_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="tl_section_heading tl_style_1 tl_color_1">
                    <div className="tl_section_heading_text">
                      <h3 className="tl_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="anim_div_ShowRightSide">
                    <p className="tl_ternary_color">
                      {des}
                    </p>
                    <p className="tl_ternary_color">
                      {des}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tl_height_385 tl_height_lg_120"></div>
          </div>
        </div>
        <div className="container">
          <div className="tl_agency agency_about_images_posation">
            <div className="tl_img_section_1">
              <Image src={agency_story_1} alt="image-here" className="w-100" />
            </div>
            <div className="tl_img_section_2">
              <Image src={agency_story_2} alt="image-here" className="w-100" />
            </div>
            <div className="tl_img_section_3">
              <div className="text-end">
                <Image src={agency_story_4} alt="image-here" />
                <Image src={agency_story_3} className="w-100" alt="image-here" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;