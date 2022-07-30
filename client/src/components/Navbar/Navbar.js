import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/vets">Поиск ветеринара</NavLink>
        </Typography>
        <Button color="inherit"><NavLink to="auth">Авторизация</NavLink></Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
