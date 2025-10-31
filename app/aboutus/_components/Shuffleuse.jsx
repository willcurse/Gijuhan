import Shuffle from "@/components/Shuffle";
import React from "react";

const Shuffleuse = () => {
  return (
    <div>
      <Shuffle
        text="Hello World"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
        className="text-white"
      />
    </div>
  );
};

export default Shuffleuse;
