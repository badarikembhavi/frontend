import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { Home, Dashboard, Settings, Menu as MenuIcon } from "@mui/icons-material";
import { useSidebar } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        width: isOpen ? 240 : 60,
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: isOpen ? 240 : 60,
          overflowX: "hidden",
        },
      }}
    >
      {/* Toggle Button */}
      <IconButton onClick={toggleSidebar} sx={{ margin: "10px" }}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Items */}
      <List>
        <ListItem button>
          <ListItemIcon><Home /></ListItemIcon>
          {isOpen && <ListItemText primary="Home" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon><Dashboard /></ListItemIcon>
          {isOpen && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon><Settings /></ListItemIcon>
          {isOpen && <ListItemText primary="Settings" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
