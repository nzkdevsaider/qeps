"use client";
import SidebarContent from "./SidebarContent";
import { SidebarProvider } from "@/context/sidebar";

const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarContent />
    </SidebarProvider>
  );
};

export default Sidebar;
