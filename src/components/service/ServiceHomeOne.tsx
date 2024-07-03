import React from "react";
import Link from "next/link";

interface DataType {
  id: number;
  title: string;
  des: string;
}
[];

const service_data: DataType[] = [
  {
    id: 1,
    title: `Empower Your Career with Dual Mind`,
    des: `Unlock new skills and opportunities with our specialized courses designed for beginners and professionals alike. Join Dual Mind today and accelerate your journey to success`,
  },
  {
    id: 2,
    title: `Master New Skills with Dual Mind Academy`,
    des: `Discover expert-led courses tailored to your career goals. Whether you're starting out or advancing your skills, Dual Mind Academy is your pathway to excellence.`,
  },
  {
    id: 3,
    title: `Transform Your Future with Dual Mind Education`,
    des: `Gain practical knowledge and certifications that matter. Dual Mind Education offers cutting-edge courses to propel your career forward in today's competitive world.`,
  },

];

const ServiceHomeOne = () => {
  return (
    <>
      {/* <div className="tl_height_150 tl_height_lg_60"></div> */}
      <section className="tl_primary_bg position-relative">
        <div className="tl_height_150 tl_height_lg_60"></div>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_1 tl_color_1">
            <div className="tl_section_heading_text">
              <div className="tl_section_subtitle anim_div_ShowZoom">
                Our Services
              </div>
              <h2 className="tl_section_title anim_heading_title">
                Comprehensive Digital Strategy Transformation
              </h2>
            </div>
            <div className="tl_section_heading_right tl_btn_anim">
              <Link href="/service" className="tl_btn tl_style_1 tl_color_1">
                <span>View Services</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="tl_height_50 tl_height_lg_10"></div>
          <div className="tl_card_1_list">
            {service_data.map((item, i) => (
              <div
                key={i}
                className="tl_card tl_style_1 tl_color_1 anim_div_ShowDowns"
              >
                <div className="tl_card_left">
                  <div
                    className="tl_card_number tl_primary_font"
                    style={{
                      backgroundImage: `url(/assets/img/hero_img_1.jpg)`,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="tl_card_right">
                  <div className="tl_card_right_in">
                    <h2 className="tl_card_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h2>
                    <div className="tl_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="tl_card_link_wrap">
                  <Link href="/service-details" className="tl_card_link">
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tl_height_100 tl_height_lg_30"></div>
      </section>
    </>
  );
};

export default ServiceHomeOne;
