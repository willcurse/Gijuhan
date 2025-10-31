import CircularGallery from "@/components/CircularGallery";
import React from "react";

const MainCircularGallery = () => {
  return (
    <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] relative w-full">
      <CircularGallery 
        bend={3} 
        textColor="#ffffff" 
        borderRadius={0.05} 
        scrollEase={0.02}
      />
    </div>
  );
};

export default MainCircularGallery;