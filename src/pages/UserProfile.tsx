import React, { useState } from "react";
import { Avatar, Popover, Typography, Stack, Button, Box, IconButton } from "@mui/material";
import { Logout, Settings, Person } from "@mui/icons-material";

const UserAvatar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Dummy user data
  const userName = "John Doe";

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action: string) => {
    handleClose();
    switch (action) {
      case "profile":
        console.log("Navigate to profile");
        break;
      case "settings":
        console.log("Open settings");
        break;
      case "logout":
        console.log("Perform logout");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ position: "absolute", top: 10, right: 20 }}>
      {/* Avatar Button */}
      <IconButton onClick={handleClick}>
        <Avatar sx={{ bgcolor: "primary.main", cursor: "pointer" }}>
          {userName.charAt(0)}
        </Avatar>
      </IconButton>

      {/* Persistent Dropdown */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: { 
            width: 200, 
            bgcolor: "grey.100", 
            p: 2, 
            borderRadius: 2, 
            boxShadow: 3 
          }
        }}
      >
        <Box>
          {/* User Name */}
          <Typography variant="h6" align="center" sx={{ mb: 1 }}>
            {userName}
          </Typography>

          {/* Options */}
          <Stack spacing={1}>
            <Button 
              startIcon={<Person />} 
              fullWidth 
              onClick={() => handleAction("profile")}
            >
              View Profile
            </Button>
            <Button 
              startIcon={<Settings />} 
              fullWidth 
              onClick={() => handleAction("settings")}
            >
              Settings
            </Button>
            <Button 
              startIcon={<Logout />} 
              fullWidth 
              color="error" 
              onClick={() => handleAction("logout")}
            >
              Logout
            </Button>
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

export default UserAvatar;
