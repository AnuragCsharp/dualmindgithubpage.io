import React from "react";
import Image from "next/image";
import logo from "@/assets/img/Logo_white.png";

const BannerAbout = () => {
  return (
    <>
      <div className="tl_height_219 tl_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_1">
            <div className="tl_section_heading_text">
              <h2 className="tl_section_title anim_text_writting">
              Empowering Learners:
              <br/> How We're Revolutionizing Education with Innovative Online Tools
              </h2>
            </div>
            <div className="tl_section_heading_right">
              <div className="tl_animated_badge">
                <div className="rounded_text rotating p-2 rounded-circle bg-primary">
                  <svg viewBox="0 0 200 200">
                    <path
                      id="textPath"
                      d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                      transform="translate(100,100)"
                      fill="none"
                      strokeWidth="0"
                    ></path>
                    <g fontSize="22.1px">
                      <text textAnchor="start">
                        <textPath
                          className="coloring"
                          href="#textPath"
                          startOffset="0%"
                        >
                          DualMind Education. DualMind Education  .
                          &nbsp;
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="position-absolute tl_ceneter_text  rounded-circle bg-success">
                  <Image src={logo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAbout;
