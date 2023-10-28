import React from 'react';
import SlideMenu from '../SliderMenu/index'; // Importe o componente SlideMenu
import Avatar from '@mui/material/Avatar'; // Importe o componente Avatar do Material-UI
import PersonIcon from '@mui/icons-material/Person'; // Ícone de usuário padrão
import styles from './styles'; // Importe os estilos do arquivo HeaderStyles.js
import logo2 from '../Styles/logo2.svg';

function Header({ userIconSrc }) {
  // Use o ícone padrão se userIconSrc estiver vazio ou não fornecido
  const userIcon = userIconSrc ? (
    <Avatar src={userIconSrc} alt="User Icon" sx={styles.userIcon} />
  ) : (
    <Avatar>
      <PersonIcon />
    </Avatar>
  );

  return (
    <div style={styles.header}>
      <SlideMenu  />

      <img style={styles.logo} src={logo2} alt="Logo" />
      
      <div style={styles.userIcon}>{userIcon}</div>
    </div>
  );
}

export default Header;
