"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import FuzzyText from "@/components/FuzzyText";

const MROHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
        );
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tallyBars = Array.from({ length: 15 }, (_, i) => i + 1);
  const getYearDigitOffset = (index) => {
    const offsets = [1.16, 2.9, -1.16, 1.16, 4.64, 2.9];
    return offsets[index] || 0;
  };

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
    }),
  };

  const letterAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen mt-20 text-white overflow-hidden"
    >
      {/* Scroll Indicator */}
      {/* <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest text-gray-400">SCROLL</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mx-auto animate-scroll-down"></div>
        </div>
      </div> */}

      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-8 pointer-events-none opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-r border-white/10 h-full"></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        {/* Desktop Heading */}
        <div className="hidden lg:block space-y-2 mb-16">
          {[
            { text: "WHERE ", highlight: "TECHNOLOGY" },
            { text: "MEETS ", highlight: "MARKETING" },
            { text: "GIJUHAN IS BORN FROM TWO WORLDS" },
          ].map((line, i) => (
            <motion.h1
              key={i}
              className="text-5xl xl:text-7xl 2xl:text-8xl font-bold leading-tight overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              custom={i}
            >
              {line.text && (
                <span className="hover-lift inline-block">{line.text}</span>
              )}
              {line.highlight && (
                <span className="text-gray-400 hover-glitch inline-block">
                  {line.highlight}
                </span>
              )}
            </motion.h1>
          ))}

          {/* Subtitle Section */}
          <motion.div
            className="mt-8 space-y-4"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            custom={3}
          >
            <p className="text-2xl xl:text-3xl font-semibold">
              <span className="text-gray-400 hover-glitch inline-block">
                Giju (技術) = Technology
              </span>
            </p>
            <p className="text-2xl xl:text-3xl font-semibold">
              <span className="text-gray-400 hover-glitch inline-block">
                Han (販) = Marketing
              </span>
            </p>
            <p className="text-xl xl:text-2xl text-gray-300 mt-6">
              <span className="hover-lift inline-block">
                Together, they define our purpose: blending innovation with
              </span>
              <br />
              <span className="hover-lift inline-block">
                strategy to create solutions that make brands grow bigger,
              </span>
              <br />
              <span className="hover-lift inline-block">
                stronger, and smarter.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Mobile Heading */}
        <div className="lg:hidden mt-10 space-y-1 mb-12">
          {[
            "WE ARE GIJUHAN",
            "Giju (技術) = Technology",
            "Han (販) = Marketing",
            "Together, they define our purpose:",
            "blending innovation with strategy",
            "to create solutions that make",
            "brands grow bigger, stronger,",
            "and smarter",
          ].map((line, i) => (
            <motion.h1
              key={i}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              custom={i}
            >
              {line.includes("Giju") || line.includes("Han") ? (
                <span className="text-gray-400 hover-glitch inline-block">
                  {line}
                </span>
              ) : (
                <span className="hover-lift inline-block">{line}</span>
              )}
            </motion.h1>
          ))}
        </div>

        {/* Years Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 mb-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="hidden md:block relative w-64 lg:w-80 h-48 lg:h-64 group"
          >
            <div
              className="absolute inset-0 bg-gray-700 rounded-lg overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
              style={{
                transform: `translateY(${scrollY * 20}px)`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          {/* Tally Bars + Animated Years */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            {/* Tally Bars */}
            <div className="flex gap-2">
              <div className="flex gap-1">
                {tallyBars.slice(0, 10).map((bar) => (
                  <motion.div
                    key={bar}
                    initial={{ height: 0 }}
                    animate={{
                      height: `${Math.max(20, scrollY * (bar * 8))}px`,
                    }}
                    className="w-1 sm:w-1.5 bg-white hover:bg-gray-400 cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{
                      maxHeight: "80px",
                    }}
                  ></motion.div>
                ))}
              </div>
              <div className="w-1 sm:w-1.5 h-12 sm:h-16 lg:h-20 bg-white transform rotate-45 origin-bottom"></div>
              <div className="flex gap-1">
                {tallyBars.slice(10, 15).map((bar) => (
                  <motion.div
                    key={bar}
                    initial={{ height: 0 }}
                    animate={{
                      height: `${Math.max(20, scrollY * ((bar - 10) * 8))}px`,
                    }}
                    className="w-1 sm:w-1.5 bg-white hover:bg-gray-400 cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{
                      maxHeight: "80px",
                    }}
                  ></motion.div>
                ))}
              </div>
            </div>

            {/* Animated Years */}
            <div className="flex justify-center  lg:justify-end w-full text-center lg:text-right">
              <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.6}
                enableHover={true}
                className="font-bold text-gray-400 leading-none
               text-6xl sm:text-8xl md:text-9xl lg:text-[14rem] xl:text-[18rem] 2xl:text-[22rem]"
              >
                LETS&nbsp;COLLAB
              </FuzzyText>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="hidden md:block relative w-64 lg:w-80 h-48 lg:h-64 group"
          >
            <div
              className="absolute inset-0 bg-gray-700 rounded-lg overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2"
              style={{
                transform: `translateY(${-scrollY * 15}px)`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          className="max-w-4xl mx-auto lg:mx-0"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={8}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="hover-lift inline-block">About </span>
            <span className="text-gray-400 hover-glitch inline-block">
              GIJUHAN
            </span>
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300">
            <span className="hover-lift inline-block">
              Where Technology Meets Marketing
            </span>
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            <span className="hover-lift inline-block">
              GIJUHAN is born from two worlds —
            </span>{" "}
            <span className="font-bold text-gray-400 hover-glitch inline-block">
              Giju (技術) = Technology
            </span>{" "}
            <span className="hover-lift inline-block">and</span>{" "}
            <span className="font-bold text-gray-400 hover-glitch inline-block">
              Han (販) = Marketing
            </span>
            .{" "}
            <span className="hover-lift inline-block">
              Together, they define our purpose: blending innovation with
              strategy to create solutions that make brands grow bigger,
              stronger, and smarter.
            </span>
          </p>
        </motion.div>

        {/* Animated Arrow Indicators */}
        <div className="flex items-center gap-1 mt-12 lg:mt-16">
          {Array.from({ length: 15 }).map((_, i) => {
            const opacity = Math.max(0, 1 - i * 0.1 - scrollY * 0.5);
            const translateX = -i * (scrollY * 10);
            const translateY = -i * (scrollY * 10);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity }}
                className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-125 transition-transform duration-300 cursor-pointer"
                style={{
                  transform: `translate(${translateX}px, ${translateY}px)`,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-down {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(12px);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }

        .hover-lift {
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          color: #dc2626;
        }

        .hover-glitch {
          position: relative;
          transition: transform 0.3s ease;
        }

        .hover-glitch:hover {
          animation: glitch 0.3s ease-in-out;
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
          }
          25% {
            transform: translate(-2px, 2px);
          }
          50% {
            transform: translate(2px, -2px);
          }
          75% {
            transform: translate(-2px, -2px);
          }
        }

        .hover-bounce {
          transition: transform 0.3s ease;
        }

        .hover-bounce:hover {
          animation: bounce 0.6s ease-in-out;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-20px) scale(1.1);
          }
          50% {
            transform: translateY(0) scale(0.95);
          }
          75% {
            transform: translateY(-10px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default MROHeroSection;
