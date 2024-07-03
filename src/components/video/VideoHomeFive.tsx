
'use client';
import React from 'react'; 

const VideoHomeFive = ({setIsVideoOpen}: any) => { 

  return (
    <>
      <div className="container">
        <div className="tl_parallax">
          <a onClick={() => setIsVideoOpen(true)}
            className="tl_video_block tl_style1 tl_video_open tl_bg tl_parallax_bg"
            style={{ backgroundImage: 'url(/assets/img/Thumbnail.jpg)', cursor: "pointer" }}>
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

export default VideoHomeFive;