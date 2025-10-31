"use client";
import ScrambledText from "@/components/ScrambledText";
import { Timeline } from "@/components/ui/Timeline";
import React from "react";

export function TimelineData() {
  const timelineImages = (src) => (
    <img
      key={src}
      src={src}
      alt="timeline-stage"
      width={500}
      height={500}
      className="
        w-full h-28 sm:h-36 md:h-48 lg:h-64 xl:h-72
        rounded-xl object-cover
        shadow-2xl transition-transform duration-300
        hover:scale-105 hover:shadow-[0_0_30px_rgba(192,192,192,0.3)]
      "
    />
  );

  const data = [
    {
      id: "timeline-2024",
      title: "Discovery & Planning",
      content: (
        <div className="flex flex-col gap-6">
          <ScrambledText>
            Understand client goals, audience, and requirements → prepare proposal, cost, and project plan.
          </ScrambledText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["/timeline1.png"].map(timelineImages)}
          </div>
        </div>
      ),
    },
    {
      id: "timeline-2025-design",
      title: "Design & UX",
      content: (
        <div className="flex flex-col gap-6">
          <ScrambledText>
            Create sitemap, wireframes, and UI/UX mockups → refine based on client feedback until approved.
          </ScrambledText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["/timeline2.png"].map(timelineImages)}
          </div>
        </div>
      ),
    },
    {
      id: "timeline-2025-dev",
      title: "Development",
      content: (
        <div className="flex flex-col gap-6">
          <ScrambledText>
            Build the website or app → front-end, back-end, and integrations.
          </ScrambledText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["/timeline3.png"].map(timelineImages)}
          </div>
        </div>
      ),
    },
    {
      id: "timeline-2025-test",
      title: "Testing & Quality Assurance",
      content: (
        <div className="flex flex-col gap-6">
          <ScrambledText>
            Check performance, security, and compatibility → fix bugs → get client review.
          </ScrambledText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["/timeline4.png"].map(timelineImages)}
          </div>
        </div>
      ),
    },
    {
      id: "timeline-2025-launch",
      title: "Launch & Handover",
      content: (
        <div className="flex flex-col gap-6">
          <ScrambledText>
            Deploy on live servers → connect domain, SSL, analytics → hand over credentials.
          </ScrambledText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["/timeline5.png"].map(timelineImages)}
          </div>
        </div>
      ),
    },
    {
      id: "timeline-2025-growth",
      title: "Maintenance & Growth",
      content: (
        <div className="flex flex-col gap-6">
          <ScrambledText>
            Provide updates, SEO, backups, and support → track performance and optimize features.
          </ScrambledText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["/timeline6.png"].map(timelineImages)}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <Timeline data={data} />
    </div>
  );
}
