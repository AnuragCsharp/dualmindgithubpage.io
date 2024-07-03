'use client';

import React from 'react';

const VideoHomeOne = ({style_2, setIsVideoOpen} : any) => { 

  return (
    <>
    {style_2 ?  <div className="tl_height_100 tl_height_lg_60"></div> : null}
      <div className="container">
        <div className="tl_parallax">
          <a
            onClick={() => setIsVideoOpen(true)}
            className="tl_video_block tl_style1 tl_video_open tl_bg tl_parallax_bg"
            style={{ backgroundImage: 'url(/assets/img/video_block.jpg)', cursor: "pointer" }}>
            <span className="tl_player_btn tl_accent_color">
              <span></span>
            </span>
          </a>
        </div>
      </div>
      <div className="tl_height_150 tl_height_lg_60"></div> 
    </>
  );
};

export default VideoHomeOne;