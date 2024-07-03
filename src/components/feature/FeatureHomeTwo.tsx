
import React from 'react';

interface DataType {
  subtitle: string;
  title: string;
  des: string;
  boxtitle: string;
  box_des_1: string;
  box_des_2: string;
  features: {
    id: number;
    title: string;
    des_1: string;
    des_2: string;
  }[];

  subtitle_2: string;
  title_2: string;
}

const feature_data: DataType = {
  subtitle: `Features`,
  title: `Transform Your Skills with Our Premier Training Programs`,
  des: `At Dual Mind, we specialize in delivering top-notch training that empowers individuals and professionals to thrive in the ever-evolving tech landscape. Our courses are meticulously designed to provide practical knowledge and hands-on experience, ensuring that our students are well-equipped to meet industry demands.`,
  boxtitle: `Expert Instructor`,
  box_des_1: `Comprehensive Curriculum`,
  box_des_2: `Digital of the day Mobile app excellence`,
  features: [
    {
      id: 1,
      title: `Flexible Learning`,
      des_1: `Community Network`,
      des_2: `Digital of the day Mobile app excellence`
    },
    {
      id: 2,
      title: `Career Support`,
      des_1: `Award Winning Quality`,
      des_2: `Digital of the day Mobile app excellence`
    },
  ],

  // for home five 
  subtitle_2: `Why Choose Us`,
  title_2: `Maximizing Your Online Presence Digital Marketing Mastery`,

}
const { subtitle, title, des, boxtitle, box_des_1, box_des_2, features, subtitle_2, title_2 } = feature_data

const FeatureHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      {style_2 ? null : <div className="tl_height_150 tl_height_lg_60"></div>}
      <section className={`tl_shape_wrap_3 ${style_2 ? 'tl_gray_bg_20' : ''}`}>
        {style_2 ? <div className="tl_height_90 tl_height_lg_60"></div> : null}

        {style_2 ? null :
          <div className="tl_shape_1">
            <svg width="138" height="118" viewBox="0 0 138 118" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <path opacity="0.3" d="M61.0693 89.5549C72.1957 74.6168 102.936 49.6405 136.884 69.2405"
                  stroke="#101010" strokeWidth="2" />
                <path opacity="0.3" d="M74.4465 54.818C82.4465 40.8181 107.447 3.31795 135.251 18.0685"
                  stroke="#101010" strokeWidth="2" />
                <path opacity="0.3" d="M48.5117 82.305C55.8853 65.2002 62.1455 26.0906 28.1973 6.4906"
                  stroke="#101010" strokeWidth="2" />
              </g>
            </svg>
          </div>
        }


        <div className="container">
          <div className={`row ${style_2 ? 'flex-column flex-lg-row align-items-center' : ''}`}>

            <div className="col-lg-8 col-12">
              <div className="tl_section_heading tl_style_1">
                <div className="tl_section_heading_text">
                  <div className="tl_section_subtitle anim_div_ShowZoom">
                    {style_2 ? subtitle_2 : subtitle}
                  </div>
                  <h2 className="tl_section_title anim_heading_title">
                    {style_2 ? title_2 : title}
                  </h2>
                </div>
              </div>
              {style_2 ? <div className="tl_height_70 tl_height_lg_20"></div> : <div className="tl_height_70"></div>}

              <div className="d-flex gap-4 align-items-center flex-wrap flex-lg-nowrap justify-content-center">
                <div className="anim_text">
                  <p className="tl_font_16 tl_secend_section">
                    {des}
                  </p>
                  <div className="tl_service_back_btn">
                    <a href="#" className="tl_style_1 tl_color_1">
                      <span className="tl_font_18">Learn More</span> 
                      {' '}
                      <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                          fill="currentColor"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="tl_startup_agency tl_card tl_mr_left">
                  <h6>{boxtitle}</h6>
                  <div className="d-flex align-items-center">
                    <div className="tl_hr"></div>
                    <p className="tl_font_16 tl_normal tl_mp0 text-nowrap">
                      {box_des_1}
                    </p>
                  </div>
                  <p className="tl_font_16 tl_mp0">
                    {box_des_2}
                  </p>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-12">
              <div className="tl_startup_agency">
                {features.map((item, i) =>
                  <div key={i} className="tl_startup_agency tl_card">
                    <h6>{item.title}</h6>
                    <div className="d-flex align-items-center">
                      <div className="tl_hr"></div>
                      <p className="tl_font_16 tl_normal tl_mp0 text-nowrap">
                        {item.des_1}
                      </p>
                    </div>
                    <p className="tl_font_16 tl_mp0">
                      {item.des_2}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {style_2 ? null :
          <div className="tl_shape_2">
            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.23">
                <path
                  d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                  fill="#454545"></path>
                <path
                  d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                  fill="#454545"></path>
              </g>
            </svg>
          </div>
        }

      </section>
    </>
  );
};

export default FeatureHomeTwo;