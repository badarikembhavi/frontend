import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

const Layout = () => {
  const { isOpen } = useContext(SidebarContext); // Accessing SidebarContext

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s",
          marginLeft: isOpen ? "240px" : "60px",
          padding: "20px",
        }}
      >
        {/* This is where nested routes will be rendered */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
