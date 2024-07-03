
import React from 'react';
import Image from 'next/image';
import team_data from '@/data/team_data';
import Link from 'next/link';


const TeamArea = () => {
  return (
    <>
      <div className="tl_height_219 tl_height_lg_120"></div>

      <div className="container">
        <div className="tl_section_heading tl_style_1 tl_type_1">
          <div className="tl_section_heading_text">
            <h2 className="tl_section_title anim_text_writting">
              Our Excellence Team That Can Digitalize Your Brand
            </h2>
          </div>
        </div>
      </div>


      <div className="tl_height_100 tl_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="tl_team_section anim_div_ShowDowns">
            {team_data.slice(0, 4).map((item, i) =>
              <div key={i} className="tl_team_img">
                <Link href="/team-details">
                  <Image src={item.img} alt="teamsimg1" />
                  <div className="tl_portfolio_overlay"></div>
                </Link>

                <div className="tl_team_text">
                  <Link href="/team-details">
                    <h6 className="tl_team_text_title">{item.avatar_name}</h6>
                  </Link>
                  <p className="tl_team_subtitle">{item.designation}</p>
                </div>
              </div>
            )}

          </div>
          <div className="tl_height_20 tl_height_lg_20"></div>
          <div className="tl_team_section anim_div_ShowDowns">
            {team_data.slice(4, 8).map((item, i) =>
              <div key={i} className="tl_team_img">
                <Link href="/team-details">
                  <Image src={item.img} alt="teamsimg5" />
                  <div className="tl_portfolio_overlay"></div>
                </Link>
                <div className="tl_team_text">
                  <Link href="/team-details">
                    <h6 className="tl_team_text_title">{item.avatar_name}</h6>
                  </Link>
                  <p className="tl_team_subtitle">{item.designation}</p>
                </div>
              </div>
            )} 
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;