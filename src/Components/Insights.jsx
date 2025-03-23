import React from "react";
import { motion } from "framer-motion";

const insights = [
  { title: "The Future of Design", date: "March 10, 2025", description: "Exploring upcoming trends in UI/UX design." },
  { title: "Marketing in the Digital Age", date: "February 28, 2025", description: "How brands are adapting to digital transformation." },
  { title: "AI & Automation", date: "January 15, 2025", description: "The role of artificial intelligence in modern industries." },
];

const Insights = () => {
  return (
    <div className="py-20 px-10 bg-[#1a1a1a] text-white min-h-screen flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-6xl font-bold uppercase tracking-tight text-center mb-16">Insights</h1>
        <div className="space-y-10">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-2 border-zinc-400 rounded-2xl p-6 hover:bg-zinc-800 transition-all"
            >
              <h2 className="text-3xl font-semibold mb-2">{insight.title}</h2>
              <p className="text-sm opacity-60 mb-2">{insight.date}</p>
              <p className="text-lg opacity-80">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;