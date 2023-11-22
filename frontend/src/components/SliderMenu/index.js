import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {  useRouteMatch } from 'react-router-dom';

const SlideMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const match = useRouteMatch();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu quando o scrim é clicado
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Bloqueia a rolagem da página quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className="slide-menu" style={{ position: 'relative' }}>
      {/* Camada Scrim */}
      {isMenuOpen && (
        <div
          className="scrim"
          style={{
            position: 'fixed',
            zIndex: 1,
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: isMenuOpen ? 1 : 0,
            transition: 'opacity 0.4s',
          }}
          onClick={closeMenu} // Fecha o menu quando o scrim é clicado
        />
      )}

      <div
        className={`menu ${isMenuOpen ? 'open' : ''} sidebar`}
        style={{
          position: 'fixed',
          zIndex: 2,
          top: '0px',
          left: '0px',
          transition: 'transform 0.4s',
          backgroundColor: '#06002c',
          width: '200px',
          transform: `translateX(${isMenuOpen ? '0%' : '-100%'})`,
          height: '100vh',
          overflowY: 'auto', // Adicione rolagem à barra lateral
        }}
      >
        <List className={`menu-list ${isMenuOpen ? 'open' : ''}`} style={{ top: '60px' }}>
          <ListItemButton onClick={closeMenu} href="/dashMorador">
            <PersonIcon />
            <ListItemText primary=" Morador" />
          </ListItemButton>
          <ListItemButton onClose={closeMenu} href="/dashFuncionario">
            <WorkIcon />
            <ListItemText primary=" Funcionário" />
          </ListItemButton>
          <ListItemButton onClose={closeMenu} href="/dashCondominio">
          <HolidayVillageIcon />
            <ListItemText primary=" Condominio" />
          </ListItemButton>
          <ListItemButton href="/login">
            <AssignmentIcon />
            <ListItemText primary=" Agendamentos" />
          </ListItemButton>
        </List>
      </div>
      <IconButton
        className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        style={{
          backgroundColor: 'transparent',
          color: '#fff',
          position: 'relative',
          zIndex: 3,
        }}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

export default SlideMenu;
