import React, { useEffect, useState } from "react";
import Link from "next/link";
import TrendCard from "./TrendCard";

const TrendBox = () => {
  const [darkmode, setDarkmode] = useState(true);
  return (
    <>
      <section className="position-relative tl_primary_bg ">
      <div className="tl_height_150 tl_height_lg_60"></div>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_2">
            <div className="tl_section_heading_text">
              <div className="tl_section_subtitle anim_div_ShowZoom tl_white_color">
                What we Offer
              </div>
              <h2 className="tl_section_title anim_heading_title tl_white_color">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
          {/* <div className="tl_height_100 tl_height_lg_60"></div> */}
        </div>
        <div className="desktop">
          <div className="two-item-column">
            <TrendCard iconName="angular" isDarkMode={darkmode} />
            <TrendCard iconName="react" isDarkMode={darkmode} />
          </div>
          <div className="three-item-column">
            <TrendCard iconName="c" isDarkMode={darkmode} />
            <TrendCard iconName="react" isDarkMode={darkmode} />
            <TrendCard iconName="django" isDarkMode={darkmode} />
          </div>
          <div className="two-item-column">
            <TrendCard iconName="git" isDarkMode={darkmode} />
            <TrendCard iconName="javascript" isDarkMode={darkmode} />
          </div>
          <div className="three-item-column">
            <TrendCard iconName="java" isDarkMode={darkmode} />
            <TrendCard iconName="mongo" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
          </div>
          <div className="two-item-column">
            <TrendCard iconName="python" isDarkMode={darkmode} />
            <TrendCard iconName="react" isDarkMode={darkmode} />
          </div>
          <div className="three-item-column">
            <TrendCard iconName="angular" isDarkMode={darkmode} />
            <TrendCard iconName="scala" isDarkMode={darkmode} />
            <TrendCard iconName="spark" isDarkMode={darkmode} />
          </div>
          <div className="two-item-column">
            <TrendCard iconName="spring" isDarkMode={darkmode} />
            <TrendCard iconName="react" isDarkMode={darkmode} />
          </div>
        </div>
        <div className="tablet">
          <div className="four-item-column">
            <TrendCard iconName="angular" isDarkMode={darkmode} />
            <TrendCard iconName="react" isDarkMode={darkmode} />
            <TrendCard iconName="angular" isDarkMode={darkmode} />
            <TrendCard iconName="react" isDarkMode={darkmode} />
          </div>
          <div className="four-item-column">
            <TrendCard iconName="java" isDarkMode={darkmode} />
            <TrendCard iconName="mongo" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
          </div>
          <div className="four-item-column">
            <TrendCard iconName="java" isDarkMode={darkmode} />
            <TrendCard iconName="mongo" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
          </div>
          <div className="four-item-column">
            <TrendCard iconName="java" isDarkMode={darkmode} />
            <TrendCard iconName="mongo" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
          </div>
        </div>
        <div className="mobile">
          <div className="five-item-column">
            <TrendCard iconName="java" isDarkMode={darkmode} />
            <TrendCard iconName="mongo" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
          </div>
          <div className="five-item-column">
            <TrendCard iconName="java" isDarkMode={darkmode} />
            <TrendCard iconName="mongo" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
          </div>
          <div className="five-item-column">
            <TrendCard iconName="java" isDarkMode={darkmode} />
            <TrendCard iconName="mongo" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
            <TrendCard iconName="node" isDarkMode={darkmode} />
          </div>
        </div>

        <div className="tl_height_100 tl_height_lg_30"></div>
      </section>
    </>
  );
};

export default TrendBox;
