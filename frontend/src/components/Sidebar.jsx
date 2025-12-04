import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";     // For student
import PersonIcon from "@mui/icons-material/Person";     // For author
import MenuBookIcon from "@mui/icons-material/MenuBook"; // For book

const Sidebar = ({ setPage }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#fff",
        },
      }}
    >
      <div style={{ height: 72 }} />

      <List>

        {/* DASHBOARD */}
        <ListItemButton onClick={() => setPage("dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <Divider sx={{ my: 1 }} />

        {/* STUDENT */}
        <ListItemButton onClick={() => setPage("student")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItemButton>

        {/* AUTHOR */}
        <ListItemButton onClick={() => setPage("author")}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Authors" />
        </ListItemButton>

        {/* BOOK */}
        <ListItemButton onClick={() => setPage("book")}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItemButton>

      </List>
    </Drawer>
  );
};

export default Sidebar;
