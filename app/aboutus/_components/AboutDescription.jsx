"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutDescription() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-16  text-white">
      <motion.h2
        className="text-6xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Passion meets precision.
      </motion.h2>

      <motion.p
        className="text-lg sm:text-base md:text-lg text-neutral-300 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our team of tech enthusiasts, creative thinkers, and strategists turn
        bold ideas into impactful digital experiences, staying true to our
        Japanese-inspired ethos.
      </motion.p>
    </section>
  );
}
