import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const SlideMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="slide-menu" style={{ position: 'relative' }}>
      <div
        className={`menu ${isMenuOpen ? 'open' : ''} sidebar`}
        style={{
          position: 'fixed',
          zIndex: 1,
          transition: 'transform 0.4s',
          backgroundColor: '#06002c',
          width: '200px',
          top: '60px',
          transform: `translateX(${isMenuOpen ? '-6%' : '-106%'})`,
        }}
      >
        <List className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
          <ListItemButton href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <PersonIcon />
            <ListItemText primary=" Morador" />
          </ListItemButton>
          <ListItemButton href="/dashboard">
            <WorkIcon />
            <ListItemText primary=" Funcionário" />
          </ListItemButton>
          <ListItemButton>
            <ApartmentIcon />
            <ListItemText primary=" Apartamento" />
          </ListItemButton>
          <ListItemButton href="/login">
            <DashboardIcon />
            <ListItemText primary=" Mural" />
          </ListItemButton>
        </List>
      </div>
      <IconButton
        className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        style={{ backgroundColor: 'transparent', color: '#fff', position: 'relative', zIndex: 2 }}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

export default SlideMenu;
