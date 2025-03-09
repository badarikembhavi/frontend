import React, { createContext, useState, useContext } from "react";

// Create Context for Sidebar
export const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
});

// SidebarProvider to manage state and provide it
export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom Hook to use Sidebar context
export const useSidebar = () => useContext(SidebarContext);
