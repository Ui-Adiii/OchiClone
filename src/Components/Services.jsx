import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Branding", description: "We build strong and recognizable brands." },
  { title: "Design", description: "Creating visually stunning designs that captivate." },
  { title: "Marketing", description: "Helping businesses reach the right audience." },
  { title: "Development", description: "Building modern, responsive, and scalable applications." },
];

const Services = () => {
  return (
    <div className="py-30 px-10 bg-[#203a36] text-white min-h-screen">
      <h1 className="text-6xl font-bold uppercase tracking-tight text-center mb-16">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border-2 border-zinc-400 rounded-2xl text-center hover:bg-zinc-800 transition-all"
          >
            <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
            <p className="text-lg opacity-80">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;