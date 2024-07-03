
import React from 'react';
const title = `Elevating brands through inspired design`

const MarqueeAreaLeft = () => {
  return (
    <>
      <div className="tl_moving_section_left_wrap tl_bold tl_primary_bg py-4">
        <div className="tl_moving_section_left_in">
          <h4 className="tl_moving_section_left mb-0 tl_white_color">
            {title}&nbsp;
            <span className="tl_accent_color">
              &bull; {title} &bull;
            </span> &nbsp; {title}
            <span className="tl_accent_color">
              &bull; {title} &bull;
            </span>
          </h4>
          <h4 className="tl_moving_section_left mb-0 tl_white_color">
            {title}&nbsp;
            <span className="tl_accent_color">
              &bull; {title} &bull;
            </span> &nbsp; {title}
            <span className="tl_accent_color">
              &bull; {title} &bull;
            </span>
          </h4>
        </div>
      </div>
      {/* <div className="tl_height_50 tl_height_lg_60"></div> */}
    </>
  );
};

export default MarqueeAreaLeft;