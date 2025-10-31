"use client";
import VariableProximity from "@/components/VariableProximity";
import TrueFocus from "@/components/TrueFocus";
import Prism from "./Prism";
import { useRef } from "react";
import Text2Speech from "../Functionality/Text2Speech";
import { useText2Speech } from "@/components/Pageui/Functionality/Text2Speech";

export default function PrismHero() {
  const containerRef = useRef(null);
  const Text = "Touch the future of Website design...";
  const { speechStatus, start } = useText2Speech();
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      <Prism
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10 pointer-events-none">
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="pointer-events-auto"
        >
          <h1 className="text-[clamp(1.25rem,4vw,3rem)] font-bold mb-4">
            <VariableProximity
              label={Text}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </h1>
        </div>
        <div className="text-[clamp(1rem,2vw,1.5rem)] opacity-80 max-w-3xl pointer-events-auto">
          <TrueFocus
            sentence="True Focus"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            glowColor="rgba(255, 0, 0, 0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
        </div>
        <a
          className="mt-10 px-10 py-3 bg-white cursor-pointer border-2 border-black text-black font-medium rounded-full hover:bg-white/50 hover:text-black hover:white hover:border-white transition transform pointer-events-auto"
          disabled={speechStatus === "started"}
          onClick={start}
          href="/Idea"
        >
          Open The Door
        </a>
      </div>
    </main>
  );
}
