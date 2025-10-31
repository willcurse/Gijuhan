import React from "react";
import { LampDemo } from "./_components/LampDemo";
import ScrollVelocity from "@/components/ScrollVelocity";
import ContactForm from "./_components/ContactForm";

const page = () => {
  return (
    <div>
      <LampDemo />
      <ScrollVelocity
        texts={["Call-us", "Fill Form"]}
        velocity={100}
        className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white to-white/20"
      />
      <ContactForm/>
    </div>
  );
};

export default page;
