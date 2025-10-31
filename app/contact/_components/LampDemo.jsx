"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 sm:mt-2 md:mt-8 bg-gradient-to-br  from-slate-300 to-slate-500 py-2 sm:py-3 md:py-4 bg-clip-text text-center font-medium tracking-tight text-transparent px-4"
      >
        <span className="block text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Loved Our Work
        </span>
        <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mt-2 sm:mt-3 md:mt-4">
          Contact Us
        </span>
      </motion.h1>
    </LampContainer>
  );
}