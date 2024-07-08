
"use client"

import React from 'react';
import Count from '../common/Count';


interface DataType {
  id: number;
  count: number;
  title: string;
  des: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    count: 99,
    title: `C# Programming`,
    des: `Master the powerful C# language to build versatile applications.`
  },
  {
    id: 2,
    count: 85,
    title: `Azure Certified`,
    des: `Gain expertise in deploying and managing cloud solutions on Microsoft Azure with certifications (Az-900, Az-104).`
  },
  {
    id: 3,
    count: 80,
    title: `Unity 3D Game Dev`,
    des: `Craft immersive games in Unity 3D, mastering shaders and integrating AI.`
  },
  {
    id: 4,
    count: 99,
    des: `Sharpen your problem-solving skills to overcome challenges creatively.`,
    title: `Problem Solving`,
  },
];

const ServiceTeam = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="tl_section_heading tl_style_1">
            <div className="tl_section_heading_text">
              <h2 className="tl_section_title_2 anim_heading_title">
                Skill & Specialist
              </h2>
            </div>
          </div>
          <div className="tl_height_100 tl_height_lg_50"></div>
          <div className="tl_team_details tl_funfact">

            {service_data.map((item, i) =>
              <div key={i} className="tl_funfact_max_w">
                <div className="tl_funfact tl_style1">
                  <div className="tl_stroke_text me-4">
                    <span className="amin_auto_count d-flex">
                      <Count number={item.count} /> %
                      </span>
                  </div>
                  <div className="tl_height_55 tl_height_lg_25"></div>
                  <div className="">
                    <h6>{item.title}</h6>
                    <p>
                      {item.des}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTeam;