import React from 'react';
import SlideMenu from '../SliderMenu/index';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import styles from './styles';
import logo2 from '../Styles/logo2.svg';

function Header({ userIconSrc }) {
  const userIcon = userIconSrc ? (
    <Avatar src={userIconSrc} alt="User Icon" sx={styles.userIcon} />
  ) : (
    <Avatar>
      <PersonIcon />
    </Avatar>
  );

  return (
    <Box sx={styles.header}>
      <SlideMenu />
      <img style={styles.logo} src={logo2} alt="Logo" />
      <Box sx={styles.userIcon}>{userIcon}</Box>
    </Box>
  );
}

export default Header;
