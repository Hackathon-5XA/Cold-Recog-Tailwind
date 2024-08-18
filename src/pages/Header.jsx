import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderMobileMenu = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          backgroundColor: '#212121',
          color: 'white',
          width: '50%',
        },
      }}
    >
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className="flex flex-col items-center mt-8 space-y-4"
      >
        <Link to="/" className="text-white text-lg font-bold hover:bg-gray-700 py-2 px-4 rounded">
          About
        </Link>
        <Link to="/" className="text-white text-lg font-bold hover:bg-gray-700 py-2 px-4 rounded">
          Features
        </Link>
        <Link to="/" className="text-white text-lg font-bold hover:bg-gray-700 py-2 px-4 rounded">
          Contact Us
        </Link>
      </div>
    </Drawer>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121' }} className="p-2.5">
      <Toolbar className="flex items-center justify-between h-14"> {/* Reduced height */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-16 cursor-pointer" /> {/* Adjusted height */}
        </Link>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="text-white"
              disableRipple
            >
              <MenuIcon />
            </IconButton>
            {renderMobileMenu}
          </>
        ) : (
          <div className="flex gap-6 ml-auto">
            <Link to="/" className="text-white text-lg font-bold hover:bg-gray-700 px-4 py-2 rounded">
              About
            </Link>
            <Link to="/" className="text-white text-lg font-bold hover:bg-gray-700 px-4 py-2 rounded">
              Features
            </Link>
            <Link to="/" className="text-white text-lg font-bold hover:bg-gray-700 px-4 py-2 rounded">
              Contact Us
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
