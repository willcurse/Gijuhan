import React from "react";
import { FloatingDock } from "../ui/floating-dock";


export function FloatingDockNavbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <img
          src="/home.png"
          className="h-full w-full"
          alt="Home" />
      ),
      href: "/",
    },

    {
      title: "Services",
      icon: (
        <img
          src="/service.png"
          className="h-full w-full"
          alt="Service" />
      ),
      href: "/Services",
    },
    {
      title: "Work",
      icon: (
        <img
          src="/work.png"
          className="h-full w-full"
          alt="Work" />
      ),
      href: "/Work",
    },
    {
      title: "Ideas",
      icon: (
        <img
          src="/idea.png"
          className="h-full w-full"
          alt="Idea" />
      ),
      href: "/Idea",
    },
    {
      title: "Contact-us",
      icon: (
        <img
          src="/phone.png"
          className="h-full w-full"
          alt="Contact-us" />
      ),
      href: "/contact",
    },
    {
      title: "About-us",
      icon: (
        <img
          src="/group.png"
          className="h-full w-full"
          alt="About-us" />
      ),
      href: "/aboutus",
    },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center pb-8 z-50">
      <FloatingDock
        mobileClassName="translate-y-0"
        items={links} />
    </div>
  );
}