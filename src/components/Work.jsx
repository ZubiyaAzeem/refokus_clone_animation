import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setimages] = useState([
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "33%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "37%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "71%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "63%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "75%",
      left: "52%",
      isActive: false,
    },
  ]);

  const { scrollYProgress, scrollY } = useScroll();

  scrollYProgress.on("change", (data) => {
    const showimg = (arr) => {
      setimages((prevState) =>
        prevState.map((el, i) =>
          arr.indexOf(i) === -1
            ? { ...el, isActive: false }
            : { ...el, isActive: true }
        )
      );
    };

    switch (Math.floor(data * 100)) {
      case 0:
        showimg([]);
        break;
      case 1:
        showimg([0]);
        break;
      case 3:
        showimg([0, 1]);
        break;
      case 5:
        showimg([0, 1, 2]);
        break;
      case 7:
        showimg([0, 1, 2, 3]);
        break;
      case 8:
        showimg([0, 1, 2, 3, 4]);
        break;
      case 9:
        showimg([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full pt-8 ">
      <div className=" relative mx-auto max-w-screen-lg  text-center  ">
        <h1 className="text-[50vh] select-none leading-none tracking-tight font-medium">
          Work
        </h1>
        <div className="absolute  top-0 w-full h-full ">
          {images.map(
            (elem, i) =>
              elem.isActive && (
                <img
                  key={i}
                  className=" absolute  w-52 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
