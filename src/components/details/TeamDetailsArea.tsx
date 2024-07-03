
import React from 'react';
import avatar_img_1 from "@/assets/img/team_detalils.jpg";
import Image from 'next/image';

interface DataType {
  des: string;
  info: {
    title: string;
    des: string;
  }[];
}

const team_content: DataType = {
  des: `Digital there are many variations of passages of Lorem Ipsum available, but the majority have suffered alter in some form, by injected humour, or randomised words. is a long established fact that a reader will be distrac by the readable content of a page when looking at its layout. The point of using Lorem Ipm i has a more-ornormal.`,
  info: [
    {
      title: `Address:`,
      des: `2118 Thornridge Cir, 35624`
    },
    {
      title: `Email:`,
      des: `example@example.com`
    },
    {
      title: `Phone:`,
      des: `+7 (903) 679-96-15`
    },
    {
      title: `website:`,
      des: `www.website.com`
    },
  ]
}

const { des, info } = team_content

const TeamDetailsArea = () => {
  return (
    <>
      <div className="tl_height_219 tl_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_1">
            <div className="tl_section_heading_text anim_text_writting">
              <h2 className="tl_section_title">
                Albert Joshef &nbsp;&bull;&nbsp; UI / UX Designer
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="tl_height_100 tl_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Image src={avatar_img_1} alt="team_detalils" />
            <div className="tl_height_lg_30"></div>
          </div>
          <div className="col-md-7">
            <div className="tl_team_details">
              <div className="tl_team_details_text">
                <p>{des}</p>
                <div className="tl_height_50 tl_height_lg_50"></div>

                {info.map((item, i) =>
                  <div key={i} className="d-flex">
                    <p className="col-md-2 col-4 tl_medium tl_primary_color">
                      {item.title}
                    </p>
                    <p className="col-md-4 col-10">{item.des}</p>
                  </div>
                )}

              </div>
              <div className="tl_height_50 tl_height_lg_50"></div>
              <div className="tl_btn tl_style_2">
                <a target='_blank' href="https://behance.com" className="tl_center">Behance</a>
                <a target='_blank' href="https://dribbble.com" className="tl_center">Dribbble</a>
                <a target='_blank' href="https://github.com" className="tl_center">Github</a>
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