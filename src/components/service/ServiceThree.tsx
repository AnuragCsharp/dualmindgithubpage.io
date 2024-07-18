import React from "react";

import services_exploring from "@/assets/img/service/service_explore.jpg";
import sound_box_icon from "@/assets/img/sound_box_icon.jpg";
import Image from "next/image";
import Link from "next/link";

interface DataType {
  sub_title: string;
  title: string;
  service_data: {
    id: number;
    title: string;
  }[];
  notice_title: string;
  notice_des: string;
}

const service_content: DataType = {
  sub_title: "Services",
  title: "Mastering Cutting-Edge Experiences at Dual Mind",
  service_data: [
    {
      id: 1,
      title: "01 / Practical Training Approach",
    },
    {
      id: 2,
      title: "02 / AI-Assisted Training",
    },
    {
      id: 3,
      title: "03 / Interactive Developer Community",
    },
    {
      id: 4,
      title: "04 / 100% Placement Assistance",
    },
    {
      id: 5,
      title: "05 / Leadership Training",
    },
  ],
  notice_title: `Leading the Future of Innovation at Dual Mind`,
  notice_des: `Unlock your potential with Dual Mind, Gorakhpur's top training and placement institute.`,
};
const { sub_title, title, service_data, notice_title, notice_des } =
  service_content;

const ServiceThree = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="tl_service_exploring">
            <div className="tl_service_exploring_1">
              <div className="tl_section_heading tl_style_1">
                <div className="tl_section_heading_text">
                  <div className="tl_section_subtitle anim_div_ShowZoom">
                    {sub_title}
                  </div>
                  <h2 className="tl_section_title anim_heading_title">
                    {title}
                  </h2>
                </div>
              </div>
              <div className="tl_height_150 tl_height_lg_20"></div>

              <ul className="tl_list_style_none tl_color_1 anim_div_ShowLeftSide">
                {service_data.map((item, i) => (
                  <li key={i}>
                    <Link href="/service-details">
                      <h5>{item.title}</h5>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tl_service_exploring_2">
              <div className="tl_service_exploring_img">
                <div className="anim_div_ShowRightSide">
                  <Image
                    src={services_exploring}
                    className="tl_img"
                    alt="services_exploring"
                  />
                </div>
                <div className="tl_service_exploring_img_text tl_style_1 tl_color_1 anim_div_ShowDowns">
                  <Image src={sound_box_icon} alt="sound_box_icon" />
                  <h6 className="tl_white_color">{notice_title}</h6>
                  <p className="tl_font_16">{notice_des}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tl_height_150 tl_height_lg_60"></div>
    </>
  );
};

export default ServiceThree;
