
import React from 'react';


interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: 'one',
    title: "Understand",
    description: `Welcome to our digital agency We specialize in helping your business most`,
  },
  {
    id: 'Two',
    title: "Design",
    description: `Welcome to our digital agency We specialize in helping your business most`,
  },
  {
    id: 'Three',
    title: "Development",
    description: `Welcome to our digital agency We specialize in helping your business most`,
  },
  {
    id: 'Four',
    title: "Testing",
    description: `Welcome to our digital agency We specialize in helping your business most`,
  },
]
const Service = () => {
  return (
    <>
      <div className="tl_height_115 tl_height_lg_60"></div>
      <section>
        <div className="tl_primary_bg">
          <div className="tl_height_135 tl_height_lg_70"></div>
          <div className="container">
            <div className="tl_section_heading_hr tl_style_1 tl_color_1">
              <div className="tl_hr_design"></div>
              <div className="tl_section_heading tl_style_1 tl_color_1">
                <div className="tl_section_heading_text">
                  <h2 className="tl_section_title anim_heading_title">
                    Our Working Process
                  </h2>
                </div>
              </div>
              <div className="tl_hr_design"></div>
            </div>

            <div className="tl_height_100 tl_height_lg_70"></div>
            <div className="anim_div_ShowLeftSide">
              <div className="tl_work tl_work_1">
                <div className="tl_card_work tl_style_1 tl_color_1">
                  {service_data.map((item, i) => (
                    <div key={i} className="tl_card">
                      <div className="tl_card tl_style_1">
                        <div className="tl_posagation">
                          <div className="tl_work_style_1"></div>
                          <div className="tl_work_style_2"></div>
                        </div>
                        <div className="tl_stroke_number">
                          <span>{item.id}</span>
                        </div>
                      </div>

                      <h6 className="tl_work_title">{item.title}</h6>
                      <p className="tl_work_subtitle">
                        {item.description}
                      </p>
                    </div>

                  ))}

                </div>
              </div>
            </div>
          </div>
          <div className="tl_height_150 tl_height_lg_60"></div>
        </div>
      </section>
    </>
  );
};

export default Service;