import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className="w-full rounded-t-2xl   py-10 bg-[#203a36]">
      <div className="text flex whitespace-nowrap border-b-2 border-t-2 border-zinc-300 overflow-hidden">
        <motion.h1
        initial={{x:"0"}}
        animate={{x:"-100%"}}
        transition={{repeat:Infinity,ease:"linear",duration:5}}
        className="text-[17vw] uppercase  leading-none tracking-tighter font-semibold pr-20">
          We are ochi
        </motion.h1>
        <motion.h1 
        initial={{x:"0"}}
        animate={{x:"-100%"}}
        transition={{repeat:Infinity,ease:"linear",duration:5}}
        className="text-[17vw] uppercase  leading-none tracking-tighter font-semibold pr-20">
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
