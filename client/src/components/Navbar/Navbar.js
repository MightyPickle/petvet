import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ padding: '5px', marginRight: '5px' }}>
          <img src="/LOGO5.png" alt="logo" style={{ width: '4rem', height: '4rem' }} />
        </div>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/vets" style={{ textDecoration: 'none', color: 'inherit' }}>Поиск ветеринара</NavLink>
        </Typography>
        <Button color="inherit"><NavLink to="auth" style={{ textDecoration: 'none', color: 'inherit' }}>Авторизация</NavLink></Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
