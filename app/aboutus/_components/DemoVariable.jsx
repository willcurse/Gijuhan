"use client";
import React, { useRef, useEffect, useState } from "react";
import VariableProximity from "@/components/VariableProximity";

const DemoVariable = () => {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setRadius(window.innerWidth < 768 ? 60 : 120);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className=" flex flex-col justify-center items-center  text-white text-center px-6">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 tracking-tight">
        OUR VISION
      </h1>

      {/* Variable Proximity Text */}
      <div
        ref={containerRef}
        className="relative w-full flex justify-center items-center"
      >
        <VariableProximity
          label="Transforming ideas into world-class solutions. We don’t just build websites or run campaigns — we create digital experiences that elevate businesses and drive real impact."
          className="variable-proximity-demo text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug max-w-6xl text-amber-50"
          fromFontVariationSettings="'wght' 300, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={radius}
          falloff="exponential"
        />
      </div>
    </section>
  );
};

export default DemoVariable;
