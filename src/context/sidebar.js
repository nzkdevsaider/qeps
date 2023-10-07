import React, { createContext } from "react";
import useLocalStorage from "@/lib/useLocal";
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useLocalStorage("sidebarOpen", true);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <SidebarContext.Provider value={{ open, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
