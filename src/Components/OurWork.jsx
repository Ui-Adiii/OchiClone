import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Project Alpha", description: "A revolutionary design project." },
  { title: "Beta Campaign", description: "A cutting-edge marketing campaign." },
  { title: "Gamma App", description: "A user-friendly mobile application." },
  { title: "Delta Branding", description: "A complete rebranding solution." },
];

const OurWork = () => {
  return (
    <div className="py-20 px-10 bg-[#1a1a1a] text-white min-h-screen flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-6xl font-bold uppercase tracking-tight text-center mb-16">Our Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="overflow-hidden border-2 border-zinc-400 rounded-2xl text-center hover:bg-zinc-800 transition-all p-6"
            >
              <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
              <p className="text-lg opacity-80">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;