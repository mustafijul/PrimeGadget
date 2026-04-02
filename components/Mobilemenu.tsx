"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

export default function Mobilemenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-shop_dark_green cursor-pointer hoverEffect md:hidden"></AlignLeft>
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen = {isSidebarOpen}
          onClose = {() => setIsSidebarOpen(false)}
        ></SideMenu>
      </div>
    </>
  );
}
