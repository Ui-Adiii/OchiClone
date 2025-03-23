import { motion } from "framer-motion";
import React, { useState } from "react";

const Feature = () => {
  const [firstAnime, setfirstAnime] = useState(false);
  const [secondAnime, setsecondAnime] = useState(false);
  return (
    <div className="w-full py-20 px-20">
      <div className="w-full border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-7xl tracking-tight font-medium ">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards relative w-full  flex gap-10 mt-10">
          <div
            onMouseEnter={() => setfirstAnime(true)}
            onMouseLeave={() => setfirstAnime(false)}
            className=" cardcontainer w-1/2 h-[75vh] "
          >
            <h1 className="flex overflow-hidden absolute  text-[#cdea68] uppercase text-7xl tracking-tight leading-none font-semibold left-1/2 top-1/2 -translate-1/2">
              {"fyde".split("").map((item, idx) => {
                return (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={firstAnime ? { y: "0%" } : { y: "100%" }}
                    transition={{ ease: "easeInOut", delay: idx * 0.06 }}
                    key={idx}
                  >
                    {item}
                  </motion.span>
                );
              })}
            </h1>
            <div className="card h-full w-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setsecondAnime(true)}
            onMouseLeave={() => setsecondAnime(false)}
            className="cardcontainer w-1/2 h-[75vh] "
          >
            <h1 className=" absolute flex overflow-hidden  text-[#cdea68] uppercase text-7xl tracking-tight leading-none font-semibold right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
              {"vise".split("").map((item, idx) => {
                return (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={secondAnime ? { y: "0%" } : { y: "100%" }}
                    transition={{ ease: "easeInOut", delay: idx * 0.06 }}
                    key={idx}
                  >
                    {item}
                  </motion.span>
                );
              })}
            </h1>
            <div className="card h-full w-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
