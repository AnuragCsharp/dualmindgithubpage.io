'use client';

import React from 'react';
const VideoHomeTwo = ({ setIsVideoOpen }: any) => {

  return (
    <>
      <div className="tl_height_100 tl_height_lg_60"></div>
      <div className="tl_parallax">
        <a onClick={() => setIsVideoOpen(true)}
          className="tl_digital_agency tl_video_block tl_style1 tl_video_open tl_bg tl_parallax_bg"
          style={{ backgroundImage: `url(/assets/img/video_block_2.jpg)`, cursor: "pointer" }}>
          <span className="tl_player_btn tl_accent_color">
            <span></span>
          </span>
        </a>
      </div>

    </>
  );
};

export default VideoHomeTwo;