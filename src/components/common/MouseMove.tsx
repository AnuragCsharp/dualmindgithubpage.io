
import React, { useEffect } from 'react';

const MouseMove = () => {
  
  const mousemoveHandler = (e: any) => {
    try {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Main Cursor Moving
      tl.to(".tl_cursor_1", {
        ease: "power2.out",
      }).to(
        ".tl_cursor_2",
        {
          ease: "power2.out",
        },
        "-=0.4"
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", mousemoveHandler);
    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);

  return (
    <>
      <div className="tl_cursor_1"></div>
      <div className="tl_cursor_2"></div>
    </>
  );
};

export default MouseMove;