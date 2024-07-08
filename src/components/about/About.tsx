 

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
  subtitle: `Unlock Your Programming Potential`,  
  title: `Master the Skills to Shape the Future: Programming Education at Dual Mind`,
  des: `We're not just a Dual Mind, we're your launchpad to a fulfilling career in programming.  We offer comprehensive training programs designed to equip you with the in-demand skills for website design and development, digital marketing, and advertising.  Whether you're a beginner or looking to upskill, our expert instructors and cutting-edge curriculum will help you navigate the ever-evolving world of digital technologies.  Join us and build the skills to design, develop, and launch the next generation of online experiences.`,
};

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