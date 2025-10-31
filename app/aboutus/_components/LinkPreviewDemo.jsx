"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      
      {/* First paragraph block */}
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-center">
        <LinkPreview
          url="https://www.instagram.com/thegijuhan/"
          className="font-bold text-white"
        >
          Giju (技術)
        </LinkPreview>{" "}
        +{" "}
        <LinkPreview
          url="https://x.com/TheGijuhan/status/1984204225241547187"
          className="font-bold text-white"
        >
          Han (販)
        </LinkPreview>{" "}
        Innovation in Action.
      </div>

      {/* Second paragraph block */}
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto text-center">
        Visit{" "}
        <LinkPreview
          url="https://www.linkedin.com/company/gijuhan/posts/?feedView=all"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-white/30 to-white"
        >
          GIJUHAN
        </LinkPreview>{" "}
        — We merge cutting-edge tech with creative marketing to help brands grow globally.
      </div>
    </div>
  );
}
