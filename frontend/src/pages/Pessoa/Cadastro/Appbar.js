import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../../components/header/sidebar';

export default function Navbar() {

  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={showSidebar}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            {sidebar && <Sidebar active={setSidebar} />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Registro de Pessoa
          </Typography>
          <Button color="inherit">Menu</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}