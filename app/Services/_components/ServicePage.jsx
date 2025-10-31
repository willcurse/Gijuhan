"use client";

import React from "react";
import { motion } from "framer-motion";
import FlowingMenu from "@/components/FlowingMenu";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      category: "Design",
      title:
        "Brand designers and web designers in-house crafting visuals to match your brand values.",
      items: [
        { link: "#", text: "Brand Identity", image: "https://picsum.photos/600/400?random=1" },
        { link: "#", text: "Web Design", image: "https://picsum.photos/600/400?random=2" },
        { link: "#", text: "eCommerce", image: "https://picsum.photos/600/400?random=3" },
      ],
    },
    {
      id: 2,
      category: "Develop",
      title:
        "Web development to the highest standards, matching the latest industry requirements.",
      items: [
        { link: "#", text: "Web Development", image: "https://picsum.photos/600/400?random=4" },
        { link: "#", text: "Craft CMS", image: "https://picsum.photos/600/400?random=5" },
        { link: "#", text: "Shopify", image: "https://picsum.photos/600/400?random=6" },
        { link: "#", text: "Technical SEO", image: "https://picsum.photos/600/400?random=7" },
      ],
    },
    {
      id: 3,
      category: "Support",
      title:
        "Lean on our in-house team to support your design, development, and SEO needs.",
      items: [
        { link: "#", text: "SEO", image: "https://picsum.photos/600/400?random=8" },
        { link: "#", text: "Web Hosting", image: "https://picsum.photos/600/400?random=9" },
        { link: "#", text: "PPC", image: "https://picsum.photos/600/400?random=10" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-8 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center space-x-2 mb-6 sm:mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
            <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-400">
              Our Services
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight sm:leading-snug text-white/90"
            >
              We're a digital agency
              <br /> turning ideas into experiences.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extralight text-gray-300 leading-relaxed"
            >
              We combine design, technology, and storytelling to help brands
              build meaningful digital identities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION WITH FLOWING MENU ===== */}
      <section className="border-t border-neutral-800">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i * 0.1}
            className="border-b border-neutral-800 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 hover:bg-neutral-950 transition-all duration-500"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">
              {/* Left Column */}
              <div className="flex flex-col justify-center">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-none mb-6 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  {service.category}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-lg">
                  {service.title}
                </p>
              </div>

              {/* Right Column — FlowingMenu */}
              <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px] overflow-hidden rounded-xl">
                <FlowingMenu items={service.items} />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-10 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-10 text-white/90"
          >
            Ready to start your next project?
          </motion.h2>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-lime-400 text-black shadow-[0_0_40px_rgba(192,255,0,0.3)] transition-transform"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>

        {/* Background subtle glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-lime-500/10 to-transparent blur-3xl opacity-30" />
      </section>
    </div>
  );
};

export default ServicesPage;
