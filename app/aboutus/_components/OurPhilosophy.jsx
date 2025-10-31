"use client";
import React from "react";
import { motion } from "framer-motion";
import { EvervaultCard , Icon} from "@/components/ui/evervault-card";


const philosophies = [
  {
    title: "Kanso (Simplicity)",
    description: "Elegant solutions without clutter.",
    accent: "from-white/40 to-white",
  },
  {
    title: "Kaizen (Continuous Improvement)",
    description: "Always refining, always evolving.",
    accent: "from-white/60 to-white",
  },
  {
    title: "Iki (Purpose)",
    description: "Meaningful design and strategy at every step.",
    accent: "from-white/60 to-white",
  },
];

export default function OurPhilosophy() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 py-20 overflow-hidden">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white/40 to-white">
          Our Philosophy
        </h2>
        <p className="text-lg italic text-neutral-400">
          Simplicity. Improvement. Purpose.
        </p>
      </motion.div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {philosophies.map((item, index) => (
          <motion.div
            key={index}
            className="relative border border-white/20 p-6 rounded-2xl flex flex-col items-start justify-start 
                       hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-500"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Corners */}
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

            {/* Evervault Card Effect */}
            <EvervaultCard
              text="hover"
              className="w-full h-[16rem] rounded-xl mb-6"
            />

            {/* Card Content */}
            <h3
              className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.accent}`}
            >
              {item.title}
            </h3>
            <p className="text-neutral-400 mt-3 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
