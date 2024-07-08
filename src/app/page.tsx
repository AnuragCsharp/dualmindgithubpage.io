
'use client'

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import VideoPopup from '@/components/modals/VideoPopup';
import FaqArea from '@/components/faq/FaqArea';
import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';
import MarqueeAreaLeft from '@/components/brand/MarqueeAreaLeft';
import MarqueeAreaRight from '@/components/brand/MarqueeAreaRight';
import HeroHomeTwo from '@/components/hero/HeroHomeTwo';
import HeroHomeThree from '@/components/hero/HeroHomeThree';
import HeroHomeFour from '@/components/hero/HeroHomeFour';
import HeroHomeFive from '@/components/hero/HeroHomeFive';
import TrendBox from '@/components/trendbox/TrendBox';
import Reviews from '@/components/reviews/Reviews';
import ServiceHomeFour from '@/components/service/ServiceHomeFour';
import FeatureHomeTwo from '@/components/feature/FeatureHomeTwo';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import AboutHomeFour from '@/components/about/AboutHomeFour';


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
            <HeroHomeOne />
            {/* <HeroHomeTwo/> */}
            {/* <HeroHomeThree/> */}
            {/* <HeroHomeFour/> */}
            {/* <HeroHomeFive/> */}
            {/* <MarqueeAreaRight /> */}
            <MarqueeAreaHomeOne/>
            <AboutHomeOne />
            <MarqueeAreaLeft />
            <MarqueeAreaRight/>
            <TrendBox/>
            {/* <ServiceHomeOne /> */}
            {/* <PortfolioHomeOne /> */}
            {/* <AwardsHomeOne /> */}
            {/* <Testimonial /> */}
            {/* <FunFactHomeOne /> */}
            <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />
            {/* <BlogHomeOne /> */}
            <ServiceHomeThree/>
            <FeatureHomeTwo/>

            
            <Reviews/>
            <FaqArea />
            {/* <SubscribeHomeOne /> */}
            <AboutHomeFour/>
            {/* <BrandHomeOne style_2={false} /> */}
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;