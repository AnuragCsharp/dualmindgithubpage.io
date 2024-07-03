

import React from 'react';
import Count from '../common/Count';


interface DataType {
  id: number;
  title: string;
  number: number;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    title: `People`,
    number: 1,
  },
  {
    id: 2,
    title: `Branch`,
    number: 2,
  },
  {
    id: 3,
    title: `Years Experiences`,
    number: 2,
  },
  {
    id: 4,
    title: `Awards Achievement`,
    number: 4,
  },
]

const FunFactHomeOne = ({style_2, style_3} :any) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          {counter_data.map((item, i) =>
            <div key={i} className="col-lg-3">
              <div className="tl_funfact tl_style1">
                <div className={`tl_funfact_number  me-4 ${style_2 ? 'tl_stroke_normal' : 'tl_stroke_text'}`}>
                  <div className="amin_auto_count">
                    <Count number={item.number} add_style={true} />
                  </div>
                  {i === 0 && <span>K</span>}
                  {/* {i === 1 && <span>K</span>} */}
                </div>
                <div className={`tl_funfact_text tl_primary_font ${style_2 ? 'tl_color_1' : ''}`}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {style_3? null :  <div className="tl_height_150 tl_height_lg_60"></div>}     
    </>
  );
};

export default FunFactHomeOne;