import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
function Box({ width, contact = false, hover = false }) {
  return (
    <motion.div whileHover={{padding:"25px"}}
      className={`${width} p-5 ${hover&& 'hover:bg-violet-600'}  rounded bg-slate-800 flex flex-col justify-between`}>
      <div>
        <div className="w-full flex justify-between items-center">
          <div>one heading</div>
          <div className="text-sm ">
          
            <FaArrowRight />
          </div>
        </div>
        <div>
          <h2 className="text-xl pt-6">whatever heading. </h2>
        </div>
      </div>

      <div>
        {contact ? (
          <div>
            <h1 className="text-4xl font-medium pt-32">start a project</h1>

            <button className="border-[1px] px-2 rounded-full py-1 mt-6 border-gray-400">
              Contact Us
            </button>
          </div>
        ) : (
          <p className="text-sm text-slate-400 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Box;
