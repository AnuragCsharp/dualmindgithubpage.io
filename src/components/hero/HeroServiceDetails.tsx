
import React from 'react';
import Image from 'next/image';
import banner_img from '@/assets/img/service_details_banner.jpg';


interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: "Digital Product Design",
  description: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digita`,
  features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ]
}
const { title, description, features } = hero_contact

const HeroServiceDetails = () => {
  return (
    <>
      <div className="tl_height_219 tl_height_lg_120"></div> 
      <section>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_1">
            <div className="tl_section_heading_text">
              <h2 className="tl_section_title anim_text_writting">
                 {title}
              </h2>
            </div>
          </div>
          <div className="tl_height_100 tl_height_lg_60"></div>
          <div className="tl_service_details">
            <div className="tl_service_details_img">
              <div className="tl_style_img">
                <Image src={banner_img} alt="service_details_banner" />
              </div>
            </div>
            <div className="tl_service_details_text">
              <div className="tl_service_details_p">
                <p className="anim_text">{description}</p>
                <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>                    
                  ))} 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default HeroServiceDetails;