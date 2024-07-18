"use client";

import React, { useState } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HomeOne from "@/components/hero/HomeOne";
import AboutHomeOne from "@/components/about/AboutHomeOne";
import MarqueeAreaHomeOne from "@/components/brand/MarqueeAreaHomeOne";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import VideoPopup from "@/components/modals/VideoPopup";
import FaqArea from "@/components/faq/FaqArea";
import MarqueeAreaLeft from "@/components/brand/MarqueeAreaLeft";
import MarqueeAreaRight from "@/components/brand/MarqueeAreaRight";
import TrendBox from "@/components/trendbox/TrendBox";
import Reviews from "@/components/reviews/Reviews";
import FeatureHomeTwo from "@/components/feature/FeatureHomeTwo";
import AboutFour from "@/components/about/AboutHomeFour";
import ServiceThree from "@/components/service/ServiceThree";
import ServiceFive from "@/components/service/ServiceFive";

// export const metadata = {
//   title: "DualMind -  Bridging Skills, Building Careers",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HomeOne />
            <MarqueeAreaHomeOne />
            <AboutHomeOne />
            <MarqueeAreaLeft />
            <MarqueeAreaRight />
            <TrendBox />

            <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />
            <ServiceFive />
            <ServiceThree />
            <FeatureHomeTwo />
            <Reviews />
            <FaqArea />
            <AboutFour />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={""}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
