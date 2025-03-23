import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="py-20 px-10 bg-[#1a1a1a] text-white min-h-screen flex justify-center items-center">
      <div className="max-w-5xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold uppercase tracking-tight mb-10"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg opacity-80 leading-relaxed"
        >
          We are a team of passionate designers, developers, and strategists committed to creating cutting-edge digital experiences. Our mission is to innovate, inspire, and push the boundaries of creativity to deliver impactful results.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;