"use client";

import { Roboto_Flex } from "next/font/google";
import { FloatingDockNavbar } from "@/components/Pageui/FloatingDockNavbar";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  axes: ["wght", "opsz"], // variable axes
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <FloatingDockNavbar />
        {children}
      </body>
    </html>
  );
}
