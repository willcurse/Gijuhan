// "use client";
// import React from "react";
// import { useSpeech } from "react-text-to-speech";

// export default function Text2Speech() {
//   const { speechStatus, start } = useSpeech({
//     text: "welcome to gijuhan",
//     pitch: 1,
//     rate: 1,
//     volume: 1,
//     lang: "hi-IN",
//     autoPlay: false,
//   });

//   return (
//     <button
//       disabled={speechStatus === "started"}
//       onClick={start}
      
//     >
//       Open The Door
//     </button>
//   );
// }

"use client";
import { useSpeech } from "react-text-to-speech";

export function useText2Speech() {
  return useSpeech({
    text: "welcome to gijuhan",
    pitch: 1,
    rate: 1,
    volume: 1,
    lang: "hi-IN",
    autoPlay: false,
  });
}