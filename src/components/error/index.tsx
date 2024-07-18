

import React from 'react';
import Link from 'next/link';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Error = () => {
  return (
    <>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <div className="tl_height_219 tl_height_lg_120"></div>
        <section>
          <div className="container">
            <div className="tl_center">
              <div className="row col-md-8 col-12">
                <div className="tl_stroke_number tl_type_1">
                  <span>404</span>
                </div>
                <div className="tl_height_30 tl_height_lg_0"></div>
                <h3 className="tl_line_height_54 text-center tl_font_20_sm">
                  Sorry! The page not found here
                </h3>
                <div className="tl_height_10 tl_height_lg_10"></div>
                <p className="tl_font_16 text-center tl_m0">
                The page you requested seems to be lost in the internet wilderness!.
                </p>
                <div className="tl_height_50 tl_height_lg_50"></div>
                <div className="tl_center">
                  <Link href="/" className="tl_btn tl_style_1">
                    <span>Back To Home</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="tl_height_150 tl_height_lg_60"></div>

      </div>
      <FooterOne />
    </>
  );
};

export default Error;