"use client"
import { FloatingDockNavbar } from "@/components/Pageui/FloatingDockNavbar";

export default function layout({ children }) {
  return (
    <>
      <FloatingDockNavbar />
      {children}
    </>
  );
}
