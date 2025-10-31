"use client";
import { useRef, React } from "react";

import MainCircularGallery from "./_components/MainCircularGallery ";
import MROHeroSection from "./_components/MROHeroSection";
import { LinkPreviewDemo } from "./_components/LinkPreviewDemo";
import DemoVariable from "./_components/DemoVariable";
import OurPhilosophy from "./_components/OurPhilosophy";
import { TextHoverEffectDemo } from "./_components/TextHoverEffectDemo";
import AboutDescription from "./_components/AboutDescription";


const page = () => {
  return (
    <div>
      
      <MROHeroSection />
      <MainCircularGallery />
      <LinkPreviewDemo />
      <DemoVariable />
      <OurPhilosophy/>
      <TextHoverEffectDemo/>
      <AboutDescription/>
    </div>
  );
};

export default page;
