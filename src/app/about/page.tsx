
'use client'

import React, { useState } from 'react';
import About from '@/components/about/About';
import BannerAbout from '@/components/brand/BannerAbout';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

// export const metadata = {
//   title: "About DualMind -  Bridging Skills, Building Careers",
// };

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BannerAbout />
            <VideoHomeOne style_2={true} setIsVideoOpen={setIsVideoOpen} />
            <FunFactHomeOne style_3={true} />
            <About />
            <TeamHomeTwo style_2={true} style_3={true} />
            {/* <AwardsHomeOne style_2={true} /> */}
            {/* <Testimonial /> */}
            {/* <Gellary style_2={false} /> */}
            {/* <BrandHomeOne /> */}
          </main>
          <FooterOne />
        </div>
      </div>

        {/* video modal start */}
        {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      /> */}
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;