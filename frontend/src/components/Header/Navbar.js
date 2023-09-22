import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/index';

export default function Navbar({ texto }) {
  const [sidebar, setSidebar] = React.useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div>{texto}</div>
          </Typography>
        </Toolbar>
      </AppBar>
      {sidebar && <Sidebar active={setSidebar} />}
    </Box>
  );
}
