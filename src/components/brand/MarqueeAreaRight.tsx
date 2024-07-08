"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const title = `Elevating brands through inspired design`;
const MarqueeAreaRight = () => {
  const refer = useRef(null);
  // const data  = useScroll({target:refer})

  const { scrollYProgress } = useScroll({ target: refer });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  console.log(x, refer);

  return (
    <>
      <div
        ref={refer}
        className="tl_moving_section_left_wrap tl_bold tl_primary_bg py-4"
      >
        <motion.div
          style={{ x }}
          transition={{
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 2,
            x: { duration: 500 },
          }}
          className="tl_moving_section_left_in"
        >
          <h4 className="tl_moving_section_right mb-0 tl_white_color">
            {title}&nbsp;
            <span className="tl_accent_color">&bull; {title} &bull;</span>{" "}
            &nbsp; {title}
            <span className="tl_accent_color">&bull; {title} &bull;</span>
          </h4>
          <h4 className="tl_moving_section_right mb-0 tl_white_color">
            {title}&nbsp;
            <span className="tl_accent_color">&bull; {title} &bull;</span>{" "}
            &nbsp; {title}
            <span className="tl_accent_color">&bull; {title} &bull;</span>
          </h4>
        </motion.div>
      </div>
      <div className="tl_height_150 tl_height_lg_60"></div>
    </>
  );
};

export default MarqueeAreaRight;
