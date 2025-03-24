import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  
  return (
    <div data-scroll data-scroll-speed="-.3"  className="z-[-1] pt-1 h-screen ">
      <div className=" px-20 mt-52 text-white ">
        {["we create", "Eye-Opening", "Presentation"].map((item, index) => {
          return (
          
            <div key={index} className="markers flex items-center gap-4">
            {item === "Eye-Opening" && (
              <motion.div 
              initial={{width:0}}
              animate={{width:"9%"}}
              transition={{ease:[0.76, 0, 0.24, 1],duration:.7 ,delay:0.1}}
              className="image-container bg-fixed h-[5.3vw] rounded-lg overflow-hidden bg-red-300">
                <img src="https://images.unsplash.com/photo-1735755642421-2694d8bb8c07?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </motion.div>
            )}
            <h1 className="uppercase text-[7.5vw] font-bold leading-[6vw] tracking-tighter">
              {item}
            </h1>
          </div>
          );
        })}
        <div className="relative flex justify-between items-center w-full border-t-[1px] border-zinc-800 mt-32 py-5">
          {[
            "For Public and Private Companies",
            "From the first pitch to IPO",
          ].map((item, idx) => {
            return (
              <p
                key={idx}
                className="text-lg capitalize leading-none tracking-tight font-light"
              >
                {item}
              </p>
            );
          })}
          <div className="start flex items-center gap-5">
            <div className="uppercase font-light text-md px-5 py-2 border-[2px] border-zinc-400 rounded-full">
              Start the Project
            </div>
            <div className="h-10 w-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full b">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[2vw] text-xl capitalize opacity-30">
          <h1>Scrool down</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
