"use client";
import React, { useEffect } from "react";
import avatar_img_1 from "@/assets/img/team_detalils.jpg";
import Image from "next/image";

interface DataType {
  des: string;
  info: {
    title: string;
    des: string;
  }[];
}

const team_content: DataType = {
  des: `As a highly skilled and experienced programmer, I am excited to bring my passion for computer graphics, 3D and interactive development to new opportunities. With a focus on methodology and structure, I am proficient in C# and have the ability to adapt to other languages as needed. In addition to my expertise in game development, I am also well-versed in pushing the limits of 3D for other applications such as interactive visualization, simulation, and robust AR, VR, and MR applications. I am eager to join a team where I can continue to develop my skills and collaborate to create the next generation of games and XR applications, pushing the boundaries of multimedia and 3D. On a personal level, I am a self-starter with a pragmatic approach and a strong sense of product ownership.`,
  info: [
    {
      title: `Address:`,
      des: `MQ 1133 Shobhapur Colony, Post Pathakhera District Betul, Madhya Pradesh 500032 - INDIA`,
    },
    {
      title: `Email:`,
      des: `Anuragsen@hotmail.com`,
    },
    {
      title: `Phone:`,
      des: `+91-883917-8137`,
    },
    {
      title: `website:`,
      des: `https://anuragcsharp.github.io/AnuragResume.io/`,
    },
  ],
};

const { des, info } = team_content;

const TeamDetailsArea = () => {
  useEffect(() => {
    // gsap.to(".pinned-section", {
    //   scrollTrigger: {
    //     trigger: ".row",
    //     start: "top top",
    //     end: "bottom bottom",
    //     pin: ".pinned-section",
    //     pinSpacing: false,
    //     markers: true, // Remove or comment out this line in production
    //   },
    // });
  }, []);
  return (
    <>
      <div className="tl_height_219 tl_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_1">
            <div className="tl_section_heading_text anim_text_writting">
              <h2 className="tl_section_title">
                Anurag Sen &nbsp;&bull;&nbsp; Founder
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="tl_height_100 tl_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 pinned-section align-self-baseline">
            <Image src={avatar_img_1} alt="team_detalils" />
            <div className="tl_height_lg_30"></div>
          </div>
          <div className="col-md-7 ">
            <div className="tl_team_details">
              <div className="tl_team_details_text">
                <p>{des}</p>
                <div className="tl_height_50 tl_height_lg_50"></div>

                {info.map((item, i) => (
                  <div key={i} className="d-flex">
                    <p className="col-md-2 col-4 tl_medium tl_primary_color">
                      {item.title}
                    </p>
                    <p className="col-md-4 col-10">{item.des}</p>
                  </div>
                ))}
              </div>
              <div className="tl_height_50 tl_height_lg_50"></div>
              <div className="tl_btn tl_style_2">
                <a
                  target="_blank"
                  href="https://behance.com"
                  className="tl_center"
                >
                  Behance
                </a>
                <a
                  target="_blank"
                  href="https://dribbble.com"
                  className="tl_center"
                >
                  Dribbble
                </a>
                <a
                  target="_blank"
                  href="https://github.com"
                  className="tl_center"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tl_height_150 tl_height_lg_60"></div>
    </>
  );
};

export default TeamDetailsArea;
