'use client';

import { useState } from 'react';

export default function ContactMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  const marqueeText = "LET'S CONNECT AND LET'S CONNECT AND LET'S CONNECT AND LET'S CONNECT AND ";

  return (
    <div className="relative w-full bg-black overflow-hidden py-16 lg:py-24">
      {/* Marquee Container */}
      <div className="relative">
        {/* Background Text Marquee */}
        <div 
          className="whitespace-nowrap flex items-center"
          style={{
            animation: isHovered ? 'marquee-paused 25s linear infinite paused' : 'marquee 25s linear infinite'
          }}
        >
          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem] 2xl:text-[18rem] font-black text-gray-800 tracking-tight leading-none select-none">
            {marqueeText.repeat(3)}
          </div>
        </div>

        {/* Centered Contact Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <a
          href='/contact'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-white text-black rounded-full px-8 py-4 lg:px-12 lg:py-6 flex items-center space-x-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight">
              Let's Contact
            </span>
            
            {/* Animated Arrow */}
            <div className="relative w-6 h-6 lg:w-8 lg:h-8">
              <svg 
                className="w-full h-full transform transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-45" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
              </svg>
            </div>

            {/* Hover Effect Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-200 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
          </a>
        </div>

        {/* Gradient Overlays for Smooth Fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-paused {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
}