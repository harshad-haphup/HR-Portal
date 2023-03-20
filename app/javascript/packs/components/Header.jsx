import React from "react";
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="flex items-center justify-between">
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Link to="/"><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR Portal
          </Typography></Link>
          <Box className='flex gap-5'>
            <Link to="/add"><Typography>Add User</Typography></Link>
            <Typography>User List</Typography>
            <Typography color="inherit">Logout</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
